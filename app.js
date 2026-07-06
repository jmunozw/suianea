const $ = (id) => document.getElementById(id);
const letters = ["A", "B", "C", "D"];

let testsManifest = [];
let questions = [];
let answers = [];
let current = 0;
let currentTest = null;
let startedAt = null;
let timerId = null;
let lastResultText = "";

const els = {
  testSelect: $("testSelect"),
  loadBtn: $("loadBtn"),
  setupPanel: $("setupPanel"),
  quizPanel: $("quizPanel"),
  resultsPanel: $("resultsPanel"),
  testName: $("testName"),
  questionTitle: $("questionTitle"),
  progressText: $("progressText"),
  progressBar: $("progressBar"),
  questionMeta: $("questionMeta"),
  questionText: $("questionText"),
  optionsBox: $("optionsBox"),
  prevBtn: $("prevBtn"),
  blankBtn: $("blankBtn"),
  nextBtn: $("nextBtn"),
  jumpGrid: $("jumpGrid"),
  submitBtn: $("submitBtn"),
  resetBtn: $("resetBtn"),
  resultsBox: $("resultsBox"),
  wrongBox: $("wrongBox"),
  copyBtn: $("copyBtn"),
  backBtn: $("backBtn"),
  timer: $("timer"),
};

init();

async function init() {
  bindEvents();
  await loadManifest();
  registerServiceWorker();
}

function bindEvents() {
  els.loadBtn.addEventListener("click", () => loadSelectedTest());
  els.prevBtn.addEventListener("click", () => goTo(current - 1));
  els.nextBtn.addEventListener("click", () => goTo(current + 1));
  els.blankBtn.addEventListener("click", () => setAnswer(null));
  els.submitBtn.addEventListener("click", showResults);
  els.resetBtn.addEventListener("click", resetAnswers);
  els.copyBtn.addEventListener("click", copyResult);
  els.backBtn.addEventListener("click", () => {
    els.resultsPanel.classList.add("hidden");
    els.quizPanel.classList.remove("hidden");
    renderQuestion();
  });
}

async function loadManifest() {
  try {
    const res = await fetch("tests/tests.json", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo leer tests/tests.json");
    testsManifest = await res.json();
    renderManifest();
  } catch (err) {
    els.testSelect.innerHTML = `<option value="">Error cargando tests</option>`;
    console.error(err);
  }
}

function renderManifest() {
  if (!testsManifest.length) {
    els.testSelect.innerHTML = `<option value="">No hay tests en tests/tests.json</option>`;
    return;
  }

  els.testSelect.innerHTML = testsManifest
    .map((test, index) => `<option value="${index}">${escapeHtml(test.name || test.file)}</option>`)
    .join("");
}

async function loadSelectedTest() {
  const index = Number(els.testSelect.value);
  currentTest = testsManifest[index];
  if (!currentTest) return;

  try {
    els.loadBtn.disabled = true;
    els.loadBtn.textContent = "Cargando...";

    const res = await fetch(`tests/${currentTest.file}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`No se pudo cargar tests/${currentTest.file}`);
    const code = await res.text();

    // Los ficheros actuales tienen: const questions = [...]
    // Se ejecutan dentro de una función aislada para poder cargar varios tests sin conflicto de const.
    const getQuestions = new Function(`${code}\n; return questions;`);
    questions = getQuestions();

    if (!Array.isArray(questions) || !questions.length) {
      throw new Error("El archivo no contiene un array questions válido");
    }

    answers = loadSavedAnswers(currentTest.file, questions.length);
    current = 0;
    startedAt = Date.now();
    startTimer();

    els.setupPanel.classList.add("hidden");
    els.resultsPanel.classList.add("hidden");
    els.quizPanel.classList.remove("hidden");
    els.testName.textContent = currentTest.name || currentTest.file;

    renderJumpGrid();
    renderQuestion();
  } catch (err) {
    alert(err.message);
    console.error(err);
  } finally {
    els.loadBtn.disabled = false;
    els.loadBtn.textContent = "Cargar test";
  }
}

function renderQuestion() {
  const q = questions[current];
  const answeredCount = answers.filter((a) => a !== undefined && a !== null).length;
  const percent = questions.length ? (answeredCount / questions.length) * 100 : 0;

  els.questionTitle.textContent = `Pregunta ${q.id ?? current + 1}`;
  els.progressText.textContent = `${answeredCount}/${questions.length}`;
  els.progressBar.style.width = `${percent}%`;
  els.questionText.textContent = q.text || "";
  els.questionMeta.innerHTML = [q.section, q.topic, q.difficulty]
    .filter(Boolean)
    .map((x) => `<span class="tag">${escapeHtml(x)}</span>`)
    .join("");

  els.optionsBox.innerHTML = (q.options || [])
    .map((opt, idx) => `
      <button class="option ${answers[current] === idx ? "selected" : ""}" data-index="${idx}">
        <span class="option-letter">${letters[idx]}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `)
    .join("");

  els.optionsBox.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => setAnswer(Number(btn.dataset.index)));
  });

  els.prevBtn.disabled = current === 0;
  els.nextBtn.disabled = current === questions.length - 1;
  renderJumpGrid();
}

function setAnswer(value) {
  answers[current] = value;
  saveAnswers();
  renderQuestion();
}

function goTo(index) {
  if (index < 0 || index >= questions.length) return;
  current = index;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderJumpGrid() {
  els.jumpGrid.innerHTML = questions
    .map((q, idx) => {
      const answered = answers[idx] !== undefined && answers[idx] !== null;
      return `<button class="${answered ? "answered" : ""} ${idx === current ? "current" : ""}" data-jump="${idx}">${q.id ?? idx + 1}</button>`;
    })
    .join("");

  els.jumpGrid.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => goTo(Number(btn.dataset.jump)));
  });
}

function showResults() {
  const result = calculateResults();
  lastResultText = buildResultText(result);
  els.resultsBox.innerHTML = buildResultHtml(result);
  els.wrongBox.innerHTML = buildWrongHtml(result);
  els.quizPanel.classList.add("hidden");
  els.resultsPanel.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function calculateResults() {
  const isAenaFull = questions.length >= 140 || questions.some((q) => Number(q.id) >= 140);
  const rows = questions.map((q, idx) => {
    const chosen = answers[idx];
    const blank = chosen === undefined || chosen === null;
    const correct = !blank && Number(chosen) === Number(q.answer);
    return { q, idx, chosen, blank, correct };
  });

  const byRange = (from, to) => rows.filter(({ q, idx }) => {
    const id = Number(q.id || idx + 1);
    return id >= from && id <= to;
  });

  const scorePenalty = (items) => {
    const correct = items.filter((r) => r.correct).length;
    const wrong = items.filter((r) => !r.correct && !r.blank).length;
    const blank = items.filter((r) => r.blank).length;
    return { correct, wrong, blank, score: round2(correct * 0.5 - wrong * 0.2), total: items.length };
  };

  const scoreNoPenalty = (items, denominator = items.length) => {
    const correct = items.filter((r) => r.correct).length;
    const wrong = items.filter((r) => !r.correct && !r.blank).length;
    const blank = items.filter((r) => r.blank).length;
    return { correct, wrong, blank, score: round2((correct / denominator) * 10), total: items.length };
  };

  if (isAenaFull) {
    const teorica = scorePenalty(byRange(1, 100));
    const supuesto = scorePenalty(byRange(101, 120));
    const inglesTecnico = scorePenalty(byRange(121, 140));
    const generalItems = byRange(1, 140);
    const general = scorePenalty(generalItems);
    const writtenItems = byRange(141, 200);
    const written = scoreNoPenalty(writtenItems, 60);
    const totalWithEnglish = round2(general.score + written.score);
    return {
      mode: "AENA completo",
      rows,
      general,
      teorica,
      supuesto,
      inglesTecnico,
      written,
      writtenLevel: estimateEnglishLevel(written.correct),
      totalWithEnglish,
      totalWithoutEnglish: general.score,
      difference: written.score,
      wrongRows: rows.filter((r) => !r.correct && !r.blank),
    };
  }

  const short = scorePenalty(rows);
  return {
    mode: "Test corto",
    rows,
    short,
    wrongRows: rows.filter((r) => !r.correct && !r.blank),
  };
}

function buildResultHtml(result) {
  if (result.mode === "Test corto") {
    return `
      <div class="results-grid">
        ${metricCard("Modo", "Test corto con penalización")}
        ${metricCard("Aciertos", result.short.correct)}
        ${metricCard("Fallos", result.short.wrong)}
        ${metricCard("Blancos", result.short.blank)}
        ${metricCard("Nota", `${result.short.score.toFixed(2)} puntos`)}
      </div>
    `;
  }

  const status = (score, cut) => score >= cut ? `<span class="ok">Apto</span>` : `<span class="bad">No apto</span>`;

  return `
    <div class="results-grid">
      ${metricCard("Prueba general", `${result.general.score.toFixed(2)} / 70`)}
      ${metricCard("Inglés escrito", `${result.written.score.toFixed(2)} / 10 · ${result.writtenLevel}`)}
      ${metricCard("Total estimado bolsa", `${result.totalWithEnglish.toFixed(2)} / 80`)}
      ${metricCard("Sin inglés escrito", `${result.totalWithoutEnglish.toFixed(2)} / 80`)}
      ${metricCard("Ganancia por inglés", `+${result.difference.toFixed(2)} puntos`)}
      ${metricCard("Teórica", `${result.teorica.score.toFixed(2)} / 50 · ${status(result.teorica.score, 25)}`)}
      ${metricCard("Supuesto", `${result.supuesto.score.toFixed(2)} / 10 · ${status(result.supuesto.score, 5)}`)}
      ${metricCard("Inglés técnico", `${result.inglesTecnico.score.toFixed(2)} / 10 · ${status(result.inglesTecnico.score, 5)}`)}
    </div>
  `;
}

function metricCard(label, value) {
  return `<div class="result-card"><p class="muted small">${label}</p><strong>${value}</strong></div>`;
}

function buildWrongHtml(result) {
  if (!result.wrongRows.length) return `<h3>Fallos</h3><p class="ok">Sin fallos marcados.</p>`;

  const items = result.wrongRows.map(({ q, chosen }) => {
    const userAnswer = chosen === null || chosen === undefined ? "Blanco" : letters[chosen];
    const correctAnswer = letters[q.answer];
    return `
      <div class="wrong-item">
        <strong>Pregunta ${q.id} · ${escapeHtml(q.topic || "")}</strong>
        <p>${escapeHtml(q.text || "")}</p>
        <p><span class="bad">Tu respuesta:</span> ${userAnswer} · <span class="ok">Correcta:</span> ${correctAnswer}</p>
        ${q.explanation ? `<p><strong>Explicación:</strong> ${escapeHtml(q.explanation)}</p>` : ""}
      </div>
    `;
  }).join("");

  return `<h3>Fallos</h3>${items}`;
}

function buildResultText(result) {
  if (result.mode === "Test corto") {
    return [
      `RESULTADO ${currentTest?.name || currentTest?.file || "TEST"}`,
      `Modo: Test corto`,
      `Aciertos: ${result.short.correct}`,
      `Fallos: ${result.short.wrong}`,
      `Blancos: ${result.short.blank}`,
      `Nota: ${result.short.score.toFixed(2)}`,
    ].join("\n");
  }

  return [
    `RESULTADO ${currentTest?.name || currentTest?.file || "SIMULACRO"}`,
    `Modo: AENA completo`,
    `Prueba general: ${result.general.score.toFixed(2)} / 70`,
    `Aciertos prueba general: ${result.general.correct}`,
    `Fallos prueba general: ${result.general.wrong}`,
    `Blancos prueba general: ${result.general.blank}`,
    `Teórica: ${result.teorica.score.toFixed(2)} / 50`,
    `Supuesto: ${result.supuesto.score.toFixed(2)} / 10`,
    `Inglés técnico: ${result.inglesTecnico.score.toFixed(2)} / 10`,
    `Inglés escrito: ${result.written.score.toFixed(2)} / 10`,
    `Nivel estimado inglés escrito: ${result.writtenLevel}`,
    `Total estimado con inglés escrito: ${result.totalWithEnglish.toFixed(2)} / 80`,
    `Total estimado sin inglés escrito: ${result.totalWithoutEnglish.toFixed(2)} / 80`,
    `Ganancia por inglés escrito: +${result.difference.toFixed(2)}`,
  ].join("\n");
}

async function copyResult() {
  try {
    await navigator.clipboard.writeText(lastResultText);
    els.copyBtn.textContent = "Copiado";
    setTimeout(() => els.copyBtn.textContent = "Copiar resultado", 1200);
  } catch {
    alert("No se pudo copiar automáticamente. Mantén pulsado el resultado y copia manualmente.");
  }
}

function resetAnswers() {
  if (!confirm("¿Borrar respuestas guardadas de este test?")) return;
  answers = new Array(questions.length).fill(null);
  saveAnswers();
  current = 0;
  startedAt = Date.now();
  renderQuestion();
}

function loadSavedAnswers(file, length) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey(file)) || "null");
    if (Array.isArray(saved) && saved.length === length) return saved;
  } catch {}
  return new Array(length).fill(null);
}

function saveAnswers() {
  if (!currentTest) return;
  localStorage.setItem(storageKey(currentTest.file), JSON.stringify(answers));
}

function storageKey(file) {
  return `aena-test-answers:${file}`;
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    const diff = Math.floor((Date.now() - startedAt) / 1000);
    const min = String(Math.floor(diff / 60)).padStart(2, "0");
    const sec = String(diff % 60).padStart(2, "0");
    els.timer.textContent = `${min}:${sec}`;
  }, 1000);
}

function estimateEnglishLevel(correct) {
  if (correct <= 12) return "< A2 / 0 estimado";
  if (correct <= 24) return "A2";
  if (correct <= 36) return "B1";
  if (correct <= 48) return "B2";
  if (correct <= 56) return "C1";
  return "C2";
}

function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(console.warn);
  }
}
