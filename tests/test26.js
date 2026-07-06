
const questions = [
{
"id": 1,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Concepto general",
"difficulty": "Fácil",
"text": "¿Cuál es la finalidad principal de un sistema de control de versiones?",
"options": [
"Registrar y gestionar los cambios realizados sobre archivos a lo largo del tiempo",
"Sustituir por completo a las copias de seguridad del sistema",
"Compilar automáticamente cualquier aplicación"
],
"answer": 0,
"explanation": "Un sistema de control de versiones permite guardar el historial de cambios, comparar versiones, recuperar estados anteriores y colaborar con otros usuarios.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 2,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Tipos de VCS",
"difficulty": "Media",
"text": "¿Qué caracteriza a un sistema de control de versiones distribuido como Git?",
"options": [
"Solo el servidor central conserva el historial completo",
"Cada copia local puede contener el historial completo del repositorio",
"Los usuarios no pueden trabajar sin conexión"
],
"answer": 1,
"explanation": "En Git, cada clon puede tener el historial completo, lo que permite trabajar localmente y sincronizar después con repositorios remotos.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 3,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "VCS centralizado",
"difficulty": "Media",
"text": "¿Cuál de las siguientes herramientas se asocia tradicionalmente a un modelo de control de versiones centralizado?",
"options": [
"Subversion SVN",
"Git",
"Mercurial"
],
"answer": 0,
"explanation": "SVN es un ejemplo típico de control de versiones centralizado, donde el repositorio principal reside en un servidor central.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 4,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Git",
"difficulty": "Fácil",
"text": "En Git, ¿qué es un repositorio?",
"options": [
"Una carpeta sin historial donde solo se guardan archivos finales",
"Un conjunto de archivos junto con el historial de cambios gestionado por Git",
"Una copia comprimida de una aplicación ya compilada"
],
"answer": 1,
"explanation": "Un repositorio Git contiene los archivos del proyecto y la información interna necesaria para registrar su historial de versiones.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 5,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Git",
"difficulty": "Fácil",
"text": "¿Qué comando se utiliza normalmente para crear un repositorio Git nuevo en una carpeta local?",
"options": [
"git init",
"git start",
"git new"
],
"answer": 0,
"explanation": "git init inicializa un repositorio Git en la carpeta actual, creando la estructura interna necesaria para versionar archivos.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 6,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Clonado",
"difficulty": "Fácil",
"text": "¿Qué hace el comando git clone?",
"options": [
"Crea una copia local de un repositorio existente",
"Fusiona dos ramas locales",
"Elimina el historial de versiones"
],
"answer": 0,
"explanation": "git clone descarga o copia un repositorio existente y crea una copia de trabajo local vinculada normalmente a un remoto.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 7,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Área de preparación",
"difficulty": "Media",
"text": "En Git, ¿para qué sirve el área de preparación o staging area?",
"options": [
"Para seleccionar los cambios que formarán parte del próximo commit",
"Para publicar automáticamente los cambios en GitHub",
"Para eliminar ramas antiguas del repositorio"
],
"answer": 0,
"explanation": "El staging area permite preparar qué modificaciones se incluirán en el siguiente commit mediante comandos como git add.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 8,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Commit",
"difficulty": "Fácil",
"text": "¿Qué representa un commit en Git?",
"options": [
"Un punto del historial que registra un conjunto de cambios",
"Una conexión obligatoria con el servidor remoto",
"Una rama temporal creada automáticamente"
],
"answer": 0,
"explanation": "Un commit es una instantánea lógica del estado del proyecto en un momento concreto, junto con metadatos como autor, fecha y mensaje.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 9,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Commit vs push",
"difficulty": "Media",
"text": "¿Cuál es la diferencia correcta entre commit y push?",
"options": [
"commit registra cambios en el repositorio local; push envía commits al repositorio remoto",
"commit envía cambios al servidor; push solo muestra el historial",
"commit y push son exactamente lo mismo"
],
"answer": 0,
"explanation": "git commit guarda cambios localmente. git push sube los commits locales a un repositorio remoto como GitHub, GitLab o Bitbucket.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 10,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Estado",
"difficulty": "Fácil",
"text": "¿Qué comando permite ver el estado de los archivos en un repositorio Git?",
"options": [
"git status",
"git view",
"git check"
],
"answer": 0,
"explanation": "git status muestra archivos modificados, preparados para commit, no seguidos y otra información del estado de trabajo.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 11,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Ramas",
"difficulty": "Fácil",
"text": "¿Qué es una rama o branch en Git?",
"options": [
"Una línea independiente de desarrollo dentro del repositorio",
"Una copia externa sin relación con el repositorio original",
"Un archivo obligatorio de configuración de usuarios"
],
"answer": 0,
"explanation": "Una rama permite desarrollar cambios de forma separada, por ejemplo una nueva funcionalidad, sin afectar directamente a la rama principal.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 12,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Ramas",
"difficulty": "Media",
"text": "¿Cuál es el objetivo habitual de una rama de desarrollo para una nueva funcionalidad?",
"options": [
"Trabajar cambios sin alterar directamente la rama principal",
"Eliminar automáticamente todos los commits antiguos",
"Convertir el repositorio distribuido en centralizado"
],
"answer": 0,
"explanation": "Las ramas facilitan aislar cambios hasta que estén revisados y listos para fusionarse con la rama principal.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 13,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Merge",
"difficulty": "Fácil",
"text": "¿Qué significa hacer un merge en Git?",
"options": [
"Combinar los cambios de una rama con otra",
"Descargar por primera vez un repositorio",
"Cambiar el nombre del usuario de Git"
],
"answer": 0,
"explanation": "Un merge fusiona el historial o los cambios de una rama en otra, pudiendo generar conflictos si se modificaron las mismas zonas.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 14,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Conflictos",
"difficulty": "Media",
"text": "¿Cuándo puede producirse un conflicto de fusión?",
"options": [
"Cuando dos ramas modifican de forma incompatible la misma parte de un archivo",
"Cuando se ejecuta git status en un repositorio limpio",
"Cuando se crea una etiqueta sobre un commit"
],
"answer": 0,
"explanation": "Un conflicto aparece cuando Git no puede decidir automáticamente qué cambio conservar durante una fusión, rebase o pull.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 15,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Fetch y pull",
"difficulty": "Media",
"text": "¿Qué diferencia básica hay entre git fetch y git pull?",
"options": [
"fetch descarga información del remoto sin integrarla; pull descarga e integra cambios",
"fetch borra ramas locales; pull solo muestra mensajes",
"fetch crea commits; pull crea etiquetas"
],
"answer": 0,
"explanation": "git fetch actualiza referencias remotas sin modificar la rama actual. git pull equivale, de forma simplificada, a traer cambios y fusionarlos o rebasarlos.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 16,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Remotos",
"difficulty": "Fácil",
"text": "En Git, ¿qué suele representar origin?",
"options": [
"El nombre por defecto del repositorio remoto principal",
"La rama obligatoria de producción",
"El primer commit creado en el proyecto"
],
"answer": 0,
"explanation": "origin es el nombre que Git asigna normalmente al repositorio remoto desde el que se ha clonado o al remoto principal configurado.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 17,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Remotos",
"difficulty": "Media",
"text": "¿Qué comando se usa habitualmente para enviar commits locales a un repositorio remoto?",
"options": [
"git push",
"git send",
"git upload"
],
"answer": 0,
"explanation": "git push publica commits locales en una rama del repositorio remoto, siempre que haya permisos y no existan conflictos de actualización.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 18,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Historial",
"difficulty": "Fácil",
"text": "¿Qué comando permite consultar el historial de commits?",
"options": [
"git log",
"git history-open",
"git timeline"
],
"answer": 0,
"explanation": "git log muestra el historial de commits, incluyendo identificadores, autores, fechas y mensajes.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 19,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Comparación",
"difficulty": "Fácil",
"text": "¿Qué comando se utiliza normalmente para ver diferencias entre cambios en Git?",
"options": [
"git diff",
"git compare-all",
"git changeset"
],
"answer": 0,
"explanation": "git diff permite comparar cambios entre el directorio de trabajo, el área de preparación, commits o ramas.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 20,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "HEAD",
"difficulty": "Media",
"text": "En Git, ¿qué representa HEAD de forma general?",
"options": [
"La referencia al commit actualmente seleccionado",
"El archivo principal del sistema operativo",
"El usuario administrador del repositorio"
],
"answer": 0,
"explanation": "HEAD apunta normalmente al último commit de la rama actual o a un commit concreto si se está en estado detached HEAD.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 21,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Checkout y switch",
"difficulty": "Media",
"text": "¿Para qué se utiliza git switch o, tradicionalmente, git checkout aplicado a ramas?",
"options": [
"Para cambiar de una rama a otra",
"Para subir commits al remoto",
"Para borrar el repositorio remoto"
],
"answer": 0,
"explanation": "git switch permite cambiar de rama. git checkout también se ha usado históricamente para esa función, aunque tiene más usos.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 22,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Revert",
"difficulty": "Media",
"text": "¿Qué hace git revert?",
"options": [
"Crea un nuevo commit que deshace cambios de un commit anterior",
"Borra siempre el historial remoto de forma irreversible",
"Elimina todos los archivos ignorados"
],
"answer": 0,
"explanation": "git revert es una forma segura de deshacer cambios porque no reescribe el historial existente, sino que añade un commit inverso.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 23,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Reset",
"difficulty": "Difícil",
"text": "¿Por qué git reset --hard debe usarse con precaución?",
"options": [
"Porque puede descartar cambios del directorio de trabajo y mover la referencia de la rama",
"Porque siempre publica secretos en Internet",
"Porque convierte automáticamente Git en SVN"
],
"answer": 0,
"explanation": "git reset --hard puede eliminar cambios no confirmados y modificar a qué commit apunta la rama local, por eso es peligroso si no se entiende.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 24,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Revert vs reset",
"difficulty": "Difícil",
"text": "En una rama compartida por varios desarrolladores, ¿qué opción suele ser más segura para deshacer un cambio ya publicado?",
"options": [
"git revert",
"git reset --hard seguido de push forzado",
"Borrar la carpeta .git"
],
"answer": 0,
"explanation": "En ramas compartidas se prefiere revert porque no reescribe el historial que otros usuarios pueden haber descargado.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 25,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Etiquetas",
"difficulty": "Fácil",
"text": "¿Para qué se utilizan normalmente las etiquetas o tags en Git?",
"options": [
"Para marcar puntos concretos del historial, como versiones publicadas",
"Para ocultar archivos temporales sin usar .gitignore",
"Para resolver automáticamente todos los conflictos"
],
"answer": 0,
"explanation": "Los tags se usan para señalar commits importantes, por ejemplo versiones de lanzamiento como v1.0.0.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 26,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Branch vs tag",
"difficulty": "Media",
"text": "¿Qué diferencia principal hay entre una rama y una etiqueta en Git?",
"options": [
"Una rama suele avanzar con nuevos commits; una etiqueta marca normalmente un commit concreto",
"Una etiqueta permite editar código y una rama solo documenta",
"Ambas son siempre idénticas y tienen el mismo uso"
],
"answer": 0,
"explanation": "Una rama es una línea de desarrollo que cambia al añadir commits; un tag suele quedar fijo sobre un punto concreto del historial.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 27,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": ".gitignore",
"difficulty": "Fácil",
"text": "¿Para qué sirve un archivo .gitignore?",
"options": [
"Para indicar a Git qué archivos o patrones no debe seguir",
"Para eliminar todos los commits antiguos",
"Para cifrar automáticamente el repositorio"
],
"answer": 0,
"explanation": ".gitignore evita que Git marque como no seguidos ciertos archivos, como temporales, dependencias generadas o configuraciones locales.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 28,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": ".gitignore",
"difficulty": "Difícil",
"text": "Si un archivo ya está versionado en Git, ¿qué ocurre al añadirlo después a .gitignore?",
"options": [
"Git no deja de seguirlo automáticamente; habría que retirarlo del índice si se quiere dejar de versionar",
"El archivo se borra automáticamente del historial remoto",
"El archivo se cifra y deja de poder abrirse"
],
"answer": 0,
"explanation": ".gitignore solo afecta normalmente a archivos no seguidos. Si un archivo ya está en el índice, Git seguirá controlándolo hasta que se retire del seguimiento.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 29,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Plataformas colaborativas",
"difficulty": "Fácil",
"text": "¿Cuál de las siguientes opciones es una plataforma de desarrollo colaborativo basada en repositorios Git?",
"options": [
"GitHub",
"BIOS",
"DHCP"
],
"answer": 0,
"explanation": "GitHub es una plataforma para alojar repositorios Git y facilitar colaboración mediante issues, pull requests, revisiones y automatizaciones.",
"reference": "Bloque III.10 - Plataformas de desarrollo colaborativo de software"
},
{
"id": 30,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Git vs GitHub",
"difficulty": "Media",
"text": "¿Cuál es la afirmación correcta sobre Git y GitHub?",
"options": [
"Git es el sistema de control de versiones; GitHub es una plataforma que aloja repositorios y herramientas colaborativas",
"GitHub es obligatorio para usar Git en local",
"Git y GitHub son exactamente el mismo producto"
],
"answer": 0,
"explanation": "Git puede usarse sin GitHub. GitHub es un servicio/plataforma que aprovecha Git y añade funciones de colaboración.",
"reference": "Bloque III.10 - Programas para control de versiones y plataformas colaborativas"
},
{
"id": 31,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Pull request",
"difficulty": "Media",
"text": "¿Para qué sirve normalmente una pull request o merge request?",
"options": [
"Para proponer cambios, revisarlos y fusionarlos en otra rama",
"Para instalar el sistema operativo del servidor",
"Para crear automáticamente una base de datos relacional"
],
"answer": 0,
"explanation": "Una pull request permite revisar código, comentar cambios, ejecutar validaciones y aprobar o rechazar la integración en otra rama.",
"reference": "Bloque III.10 - Plataformas de desarrollo colaborativo de software"
},
{
"id": 32,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Fork",
"difficulty": "Media",
"text": "¿Qué es un fork en plataformas como GitHub o GitLab?",
"options": [
"Una copia de un repositorio en otra cuenta o espacio, usada para trabajar de forma independiente",
"Un comando para borrar todos los commits locales",
"Una etiqueta obligatoria en cada release"
],
"answer": 0,
"explanation": "Un fork crea una copia del repositorio, normalmente en otra cuenta, para proponer cambios sin modificar directamente el repositorio original.",
"reference": "Bloque III.10 - Plataformas de desarrollo colaborativo de software"
},
{
"id": 33,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Fork vs clone",
"difficulty": "Difícil",
"text": "¿Cuál es la diferencia más correcta entre fork y clone?",
"options": [
"Fork crea una copia del repositorio en la plataforma; clone crea una copia local en el equipo",
"Fork descarga ramas remotas; clone solo crea etiquetas",
"Fork y clone son siempre sinónimos exactos"
],
"answer": 0,
"explanation": "El fork se realiza normalmente en la plataforma colaborativa. El clone descarga el repositorio a una máquina local.",
"reference": "Bloque III.10 - Plataformas colaborativas y control de versiones"
},
{
"id": 34,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Rebase",
"difficulty": "Difícil",
"text": "¿Qué hace, de forma general, un rebase en Git?",
"options": [
"Reaplica commits de una rama sobre otra base de historial",
"Convierte un repositorio Git en una copia SVN",
"Elimina permanentemente todas las ramas remotas"
],
"answer": 0,
"explanation": "El rebase mueve o reaplica commits sobre otro punto base, dejando un historial más lineal, pero puede reescribir historial.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 35,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Merge vs rebase",
"difficulty": "Difícil",
"text": "¿Qué diferencia práctica suele destacarse entre merge y rebase?",
"options": [
"Merge conserva la unión de historiales; rebase puede reescribir commits para crear una historia más lineal",
"Merge borra el repositorio remoto; rebase solo muestra ramas",
"Merge y rebase solo sirven para crear usuarios"
],
"answer": 0,
"explanation": "merge integra ramas conservando la estructura de ramificación. rebase reaplica commits y puede alterar el historial local.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 36,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Stash",
"difficulty": "Media",
"text": "¿Para qué sirve git stash?",
"options": [
"Para guardar temporalmente cambios no confirmados y limpiar el área de trabajo",
"Para publicar una release en producción",
"Para sustituir una rama por una etiqueta"
],
"answer": 0,
"explanation": "git stash permite aparcar cambios locales sin hacer commit, por ejemplo para cambiar de rama y recuperarlos después.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 37,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Cherry-pick",
"difficulty": "Difícil",
"text": "¿Qué permite hacer git cherry-pick?",
"options": [
"Aplicar un commit concreto de otra rama sobre la rama actual",
"Crear un servidor Git desde cero",
"Convertir todos los commits en etiquetas"
],
"answer": 0,
"explanation": "cherry-pick toma los cambios introducidos por un commit específico y los aplica sobre la rama actual.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 38,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Blame",
"difficulty": "Media",
"text": "¿Qué información proporciona git blame?",
"options": [
"Qué commit y autor modificaron por última vez cada línea de un archivo",
"Qué archivos están ignorados por DHCP",
"Qué versión del sistema operativo usa el servidor"
],
"answer": 0,
"explanation": "git blame ayuda a rastrear el origen de líneas concretas de código, mostrando autor, commit y fecha aproximada.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 39,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Buenas prácticas",
"difficulty": "Fácil",
"text": "¿Cuál es una buena práctica al escribir mensajes de commit?",
"options": [
"Que sean claros y describan el cambio realizado",
"Que estén siempre vacíos",
"Que contengan contraseñas para facilitar el despliegue"
],
"answer": 0,
"explanation": "Los mensajes de commit deben ayudar a entender qué se cambió y por qué, evitando información sensible como contraseñas.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 40,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Seguridad",
"difficulty": "Media",
"text": "¿Qué práctica debe evitarse en un repositorio de código?",
"options": [
"Subir contraseñas, claves privadas o tokens de acceso",
"Usar ramas para funcionalidades",
"Revisar cambios antes de fusionar"
],
"answer": 0,
"explanation": "Las credenciales no deben almacenarse en repositorios. Si se publican, pueden comprometer sistemas aunque después se borren del archivo actual.",
"reference": "Bloque III.10 - Control de versiones y desarrollo colaborativo"
},
{
"id": 41,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Ramas protegidas",
"difficulty": "Media",
"text": "¿Para qué sirven las ramas protegidas en plataformas colaborativas?",
"options": [
"Para impedir o limitar cambios directos y exigir revisiones o validaciones",
"Para borrar automáticamente todas las ramas secundarias",
"Para impedir que exista más de un commit"
],
"answer": 0,
"explanation": "Las ramas protegidas ayudan a controlar cambios en ramas importantes, como main o master, exigiendo permisos, revisiones o pruebas superadas.",
"reference": "Bloque III.10 - Plataformas de desarrollo colaborativo de software"
},
{
"id": 42,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Code review",
"difficulty": "Fácil",
"text": "¿Qué es una revisión de código o code review?",
"options": [
"Una evaluación de cambios por otros miembros antes de integrarlos",
"Una copia física impresa del repositorio",
"Un mecanismo para desactivar el historial de Git"
],
"answer": 0,
"explanation": "El code review permite detectar errores, mejorar calidad, compartir conocimiento y controlar qué cambios se integran.",
"reference": "Bloque III.10 - Plataformas de desarrollo colaborativo de software"
},
{
"id": 43,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "CI/CD",
"difficulty": "Media",
"text": "En plataformas colaborativas, ¿qué relación tiene CI/CD con el control de versiones?",
"options": [
"Puede ejecutar pruebas, compilaciones o despliegues automáticamente al producirse cambios en el repositorio",
"Sirve exclusivamente para cambiar la contraseña de Git",
"Es un sustituto completo de las ramas"
],
"answer": 0,
"explanation": "La integración y entrega/despliegue continuo se apoya en eventos del repositorio, como commits o pull requests, para automatizar validaciones.",
"reference": "Bloque III.10 - Plataformas de desarrollo colaborativo de software"
},
{
"id": 44,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Hooks",
"difficulty": "Difícil",
"text": "¿Qué son los hooks en Git?",
"options": [
"Scripts que se ejecutan automáticamente ante determinados eventos de Git",
"Archivos binarios obligatorios para arrancar Windows",
"Ramas remotas que no pueden borrarse"
],
"answer": 0,
"explanation": "Los hooks permiten automatizar acciones antes o después de eventos como commit, push o merge.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 45,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Git LFS",
"difficulty": "Difícil",
"text": "¿Para qué se utiliza Git LFS?",
"options": [
"Para gestionar archivos grandes mediante punteros y almacenamiento externo al repositorio Git normal",
"Para convertir commits en máquinas virtuales",
"Para sustituir HTTPS por DNS"
],
"answer": 0,
"explanation": "Git LFS está pensado para manejar archivos grandes, como binarios o recursos multimedia, evitando que el repositorio principal crezca en exceso.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 46,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Submódulos",
"difficulty": "Difícil",
"text": "¿Qué permite hacer un submódulo de Git?",
"options": [
"Incluir un repositorio Git dentro de otro repositorio como dependencia",
"Eliminar el servidor remoto principal",
"Crear automáticamente una VPN"
],
"answer": 0,
"explanation": "Los submódulos permiten referenciar otro repositorio dentro de un proyecto, fijándolo normalmente a un commit concreto.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
{
"id": 47,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Versionado semántico",
"difficulty": "Media",
"text": "En versionado semántico, ¿qué suele representar una versión del tipo 2.5.1?",
"options": [
"MAJOR.MINOR.PATCH",
"PATCH.MAJOR.MINOR",
"BRANCH.COMMIT.TAG"
],
"answer": 0,
"explanation": "El versionado semántico se expresa habitualmente como MAJOR.MINOR.PATCH: cambios incompatibles, nuevas funcionalidades compatibles y correcciones.",
"reference": "Bloque III.10 - Control de versiones y gestión de releases"
},
{
"id": 48,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Estrategias de ramas",
"difficulty": "Media",
"text": "¿Qué describe Git Flow?",
"options": [
"Una estrategia de trabajo con ramas como main/master, develop, feature, release y hotfix",
"Un protocolo de red para resolver direcciones IP",
"Un algoritmo de cifrado simétrico"
],
"answer": 0,
"explanation": "Git Flow es un modelo de ramificación que organiza el desarrollo mediante ramas diferenciadas para funcionalidades, versiones y correcciones urgentes.",
"reference": "Bloque III.10 - Metodologías de desarrollo y control de versiones"
},
{
"id": 49,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Trunk-based development",
"difficulty": "Difícil",
"text": "¿Qué caracteriza al trunk-based development?",
"options": [
"Integrar cambios pequeños y frecuentes en una rama principal compartida",
"Mantener ramas de funcionalidad durante años sin fusionarlas",
"Prohibir la integración continua"
],
"answer": 0,
"explanation": "El desarrollo basado en trunk favorece cambios pequeños, integración frecuente y automatización de pruebas para reducir conflictos prolongados.",
"reference": "Bloque III.10 - Metodologías de desarrollo y control de versiones"
},
{
"id": 50,
"section": "🔴 BLOQUE 14 — CONTROL DE VERSIONES",
"topic": "Recuperación",
"difficulty": "Difícil",
"text": "¿Para qué puede servir git reflog?",
"options": [
"Para consultar movimientos recientes de referencias como HEAD y recuperar commits que parecían perdidos",
"Para crear automáticamente una cuenta en GitHub",
"Para ignorar archivos temporales del sistema"
],
"answer": 0,
"explanation": "git reflog registra cambios locales de referencias y puede ayudar a recuperar estados anteriores, por ejemplo tras un reset accidental.",
"reference": "Bloque III.10 - Programas para control de versiones"
},
]