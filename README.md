# AENA TIC — Web de simulacros

Web estática para hacer tests AENA desde PC o móvil.

## Cómo añadir tests

1. Copia tus archivos `aena01.js`, `aena02.js`, `test30.js`, etc. dentro de la carpeta `tests/`.
2. Actualiza `tests/tests.json` con cada archivo:

```json
[
  { "name": "AENA 01", "file": "aena01.js" },
  { "name": "AENA 02", "file": "aena02.js" }
]
```

Opcional, si tienes Node instalado:

```bash
node scripts/generate-manifest.js
```

## Probar en local

No abras `index.html` con doble clic. Usa un servidor local:

```bash
python -m http.server 8080
```

Después abre:

```text
http://localhost:8080
```

## Desplegar en GitHub Pages

1. Sube todo a un repositorio de GitHub.
2. Entra en `Settings > Pages`.
3. En `Build and deployment`, elige `Deploy from a branch`.
4. Elige rama `main` y carpeta `/root`.
5. Guarda y abre la URL que te da GitHub Pages.

## Acceso directo móvil

Abre la URL en el móvil y usa:

- Android/Chrome: menú ⋮ > Añadir a pantalla de inicio.
- iPhone/Safari: compartir > Añadir a pantalla de inicio.
