const questions = [
  {
    id: 1,
    section: "Bloque II - Tecnología Básica",
    topic: "Sistemas operativos",
    difficulty: "facil",
    text: "¿Cuál es la función principal de un sistema operativo?",
    options: [
      "Gestionar los recursos hardware y ofrecer servicios al software",
      "Aumentar físicamente la memoria RAM instalada",
      "Sustituir al procesador en la ejecución de instrucciones"
    ],
    answer: 0,
    explanation: "El sistema operativo gestiona CPU, memoria, dispositivos, archivos, procesos y proporciona servicios a las aplicaciones.",
    reference: "Bloque II. Sistemas operativos. Características y elementos constitutivos."
  },
  {
    id: 2,
    section: "Bloque II - Tecnología Básica",
    topic: "Kernel",
    difficulty: "facil",
    text: "¿Qué componente del sistema operativo actúa como núcleo y se encarga de controlar los recursos básicos del sistema?",
    options: [
      "La interfaz gráfica",
      "El kernel",
      "El explorador de archivos"
    ],
    answer: 1,
    explanation: "El kernel es el núcleo del sistema operativo y controla recursos como CPU, memoria, procesos y dispositivos.",
    reference: "Bloque II. Sistemas operativos. Elementos constitutivos."
  },
  {
    id: 3,
    section: "Bloque II - Tecnología Básica",
    topic: "Procesos",
    difficulty: "facil",
    text: "¿Qué es un proceso en un sistema operativo?",
    options: [
      "Un programa en ejecución",
      "Un archivo comprimido",
      "Una partición del disco duro"
    ],
    answer: 0,
    explanation: "Un proceso es una instancia de un programa que se encuentra en ejecución y consume recursos del sistema.",
    reference: "Bloque II. Sistemas operativos. Procesos."
  },
  {
    id: 4,
    section: "Bloque II - Tecnología Básica",
    topic: "Planificación de CPU",
    difficulty: "media",
    text: "¿Qué función realiza el planificador de procesos?",
    options: [
      "Decidir qué proceso obtiene tiempo de CPU",
      "Formatear automáticamente el disco duro",
      "Asignar direcciones IP a los equipos"
    ],
    answer: 0,
    explanation: "El planificador decide qué proceso se ejecuta y durante cuánto tiempo, según el algoritmo de planificación utilizado.",
    reference: "Bloque II. Sistemas operativos. Gestión de procesos."
  },
  {
    id: 5,
    section: "Bloque II - Tecnología Básica",
    topic: "Memoria virtual",
    difficulty: "media",
    text: "¿Qué permite la memoria virtual?",
    options: [
      "Usar parte del almacenamiento como extensión de la memoria principal",
      "Eliminar la necesidad de memoria RAM",
      "Convertir un disco duro HDD en SSD"
    ],
    answer: 0,
    explanation: "La memoria virtual permite utilizar espacio en disco como apoyo a la memoria RAM, aunque con menor velocidad.",
    reference: "Bloque II. Sistemas operativos. Gestión de memoria."
  },
  {
    id: 6,
    section: "Bloque II - Tecnología Básica",
    topic: "Sistema de archivos",
    difficulty: "facil",
    text: "¿Qué función tiene un sistema de archivos?",
    options: [
      "Organizar y gestionar cómo se almacenan los datos en un dispositivo",
      "Controlar exclusivamente la temperatura del procesador",
      "Asignar direcciones MAC a los dispositivos"
    ],
    answer: 0,
    explanation: "El sistema de archivos define cómo se almacenan, nombran, organizan y recuperan los archivos en un soporte.",
    reference: "Bloque II. Sistemas operativos. Sistemas de archivos."
  },
  {
    id: 7,
    section: "Bloque II - Tecnología Básica",
    topic: "Windows",
    difficulty: "facil",
    text: "¿Cuál de los siguientes sistemas de archivos es típico en sistemas Windows modernos?",
    options: [
      "EXT4",
      "NTFS",
      "HFS+"
    ],
    answer: 1,
    explanation: "NTFS es el sistema de archivos habitual en versiones modernas de Windows.",
    reference: "Bloque II. Sistemas Windows."
  },
  {
    id: 8,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "facil",
    text: "¿Cuál de los siguientes sistemas de archivos es habitual en sistemas Linux?",
    options: [
      "EXT4",
      "NTFS exclusivamente",
      "FAT12 exclusivamente"
    ],
    answer: 0,
    explanation: "EXT4 es uno de los sistemas de archivos más usados en distribuciones Linux.",
    reference: "Bloque II. Sistemas Unix y Linux."
  },
  {
    id: 9,
    section: "Bloque II - Tecnología Básica",
    topic: "Usuarios",
    difficulty: "facil",
    text: "¿Para qué sirve la gestión de usuarios en un sistema operativo?",
    options: [
      "Para controlar el acceso a recursos y permisos",
      "Para aumentar la velocidad del monitor",
      "Para sustituir al antivirus"
    ],
    answer: 0,
    explanation: "La gestión de usuarios permite asignar identidades, permisos y restricciones de acceso al sistema.",
    reference: "Bloque II. Sistemas operativos. Usuarios y permisos."
  },
  {
    id: 10,
    section: "Bloque II - Tecnología Básica",
    topic: "Permisos Linux",
    difficulty: "media",
    text: "En Linux, ¿qué permisos básicos se aplican sobre archivos y directorios?",
    options: [
      "Lectura, escritura y ejecución",
      "Entrada, salida y bloqueo",
      "Copia, compresión y borrado"
    ],
    answer: 0,
    explanation: "Linux utiliza permisos de lectura, escritura y ejecución para propietario, grupo y otros usuarios.",
    reference: "Bloque II. Sistemas Unix y Linux. Permisos."
  },
  {
    id: 11,
    section: "Bloque II - Tecnología Básica",
    topic: "Windows",
    difficulty: "facil",
    text: "¿Qué herramienta de Windows permite visualizar procesos, rendimiento y aplicaciones en ejecución?",
    options: [
      "Administrador de tareas",
      "Editor de imágenes",
      "Liberador de DNS"
    ],
    answer: 0,
    explanation: "El Administrador de tareas permite ver procesos, rendimiento, aplicaciones de inicio, usuarios y servicios.",
    reference: "Bloque II. Sistemas Windows. Administración básica."
  },
  {
    id: 12,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "facil",
    text: "¿Qué comando de Linux se utiliza habitualmente para listar el contenido de un directorio?",
    options: [
      "dirip",
      "ls",
      "showmac"
    ],
    answer: 1,
    explanation: "El comando ls lista archivos y directorios en sistemas Unix/Linux.",
    reference: "Bloque II. Sistemas Unix y Linux. Comandos básicos."
  },
  {
    id: 13,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "media",
    text: "¿Qué representa el usuario root en sistemas Unix/Linux?",
    options: [
      "Un usuario sin permisos",
      "El usuario administrador con privilegios máximos",
      "Una cuenta temporal para invitados"
    ],
    answer: 1,
    explanation: "root es el superusuario del sistema y tiene privilegios administrativos completos.",
    reference: "Bloque II. Sistemas Unix y Linux. Usuarios."
  },
  {
    id: 14,
    section: "Bloque II - Tecnología Básica",
    topic: "Arranque",
    difficulty: "media",
    text: "¿Qué es el gestor de arranque?",
    options: [
      "Un programa que carga el sistema operativo durante el inicio del equipo",
      "Un antivirus residente en memoria",
      "Un sistema de cifrado de contraseñas"
    ],
    answer: 0,
    explanation: "El gestor de arranque se ejecuta al inicio y permite cargar el sistema operativo seleccionado.",
    reference: "Bloque II. Sistemas operativos. Arranque."
  },
  {
    id: 15,
    section: "Bloque II - Tecnología Básica",
    topic: "BIOS/UEFI",
    difficulty: "media",
    text: "¿Qué papel cumple BIOS o UEFI en el arranque de un equipo?",
    options: [
      "Inicializar el hardware y lanzar el proceso de arranque",
      "Gestionar únicamente las hojas de cálculo",
      "Eliminar automáticamente virus del sistema"
    ],
    answer: 0,
    explanation: "BIOS/UEFI inicializa el hardware y busca un dispositivo desde el que iniciar el sistema operativo.",
    reference: "Bloque II. Sistemas operativos. Arranque."
  },
  {
    id: 16,
    section: "Bloque II - Tecnología Básica",
    topic: "Controladores",
    difficulty: "facil",
    text: "¿Qué es un controlador o driver?",
    options: [
      "Software que permite al sistema operativo comunicarse con un dispositivo hardware",
      "Una memoria secundaria externa",
      "Un tipo de monitor táctil"
    ],
    answer: 0,
    explanation: "Los drivers permiten que el sistema operativo reconozca y utilice correctamente dispositivos hardware.",
    reference: "Bloque II. Sistemas operativos. Gestión de dispositivos."
  },
  {
    id: 17,
    section: "Bloque II - Tecnología Básica",
    topic: "Servicios",
    difficulty: "media",
    text: "¿Qué es un servicio del sistema operativo?",
    options: [
      "Un programa que se ejecuta en segundo plano proporcionando una función del sistema",
      "Un archivo multimedia comprimido",
      "Una tecla especial del teclado"
    ],
    answer: 0,
    explanation: "Un servicio suele ejecutarse en segundo plano y ofrece funciones como red, impresión, actualizaciones o autenticación.",
    reference: "Bloque II. Sistemas operativos. Servicios."
  },
  {
    id: 18,
    section: "Bloque II - Tecnología Básica",
    topic: "Multitarea",
    difficulty: "facil",
    text: "¿Qué significa que un sistema operativo sea multitarea?",
    options: [
      "Que puede gestionar varios procesos aparentemente al mismo tiempo",
      "Que solo admite un usuario",
      "Que impide ejecutar aplicaciones en segundo plano"
    ],
    answer: 0,
    explanation: "La multitarea permite alternar la ejecución de varios procesos compartiendo el tiempo de CPU.",
    reference: "Bloque II. Sistemas operativos. Características."
  },
  {
    id: 19,
    section: "Bloque II - Tecnología Básica",
    topic: "Multiusuario",
    difficulty: "facil",
    text: "¿Qué significa que un sistema operativo sea multiusuario?",
    options: [
      "Que permite que varios usuarios utilicen el sistema con cuentas y permisos diferenciados",
      "Que solo puede ejecutar una aplicación",
      "Que no necesita autenticación"
    ],
    answer: 0,
    explanation: "Un sistema multiusuario permite separar sesiones, permisos y recursos entre distintos usuarios.",
    reference: "Bloque II. Sistemas operativos. Características."
  },
  {
    id: 20,
    section: "Bloque II - Tecnología Básica",
    topic: "Interfaz",
    difficulty: "facil",
    text: "¿Qué diferencia básica existe entre CLI y GUI?",
    options: [
      "CLI usa comandos de texto y GUI usa elementos gráficos",
      "CLI es siempre más lenta que GUI",
      "GUI solo existe en Linux"
    ],
    answer: 0,
    explanation: "CLI es una interfaz de línea de comandos; GUI es una interfaz gráfica con ventanas, iconos y menús.",
    reference: "Bloque II. Sistemas operativos. Interfaces."
  },
  {
    id: 21,
    section: "Bloque II - Tecnología Básica",
    topic: "Windows",
    difficulty: "media",
    text: "¿Qué herramienta de Windows permite administrar usuarios y grupos locales en algunas ediciones profesionales?",
    options: [
      "Usuarios y grupos locales",
      "Paint",
      "Bloc de notas"
    ],
    answer: 0,
    explanation: "La consola de usuarios y grupos locales permite gestionar cuentas y grupos en Windows profesional o servidor.",
    reference: "Bloque II. Sistemas Windows. Administración."
  },
  {
    id: 22,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "media",
    text: "¿Qué comando se usa habitualmente en Linux para cambiar permisos de archivos?",
    options: [
      "chmod",
      "ipconfig",
      "taskmgr"
    ],
    answer: 0,
    explanation: "chmod permite modificar permisos de lectura, escritura y ejecución sobre archivos y directorios.",
    reference: "Bloque II. Sistemas Unix y Linux. Permisos."
  },
  {
    id: 23,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "media",
    text: "¿Qué comando se usa habitualmente en Linux para cambiar el propietario de un archivo?",
    options: [
      "chown",
      "format",
      "pinguser"
    ],
    answer: 0,
    explanation: "chown permite cambiar el propietario y, opcionalmente, el grupo asociado a un archivo o directorio.",
    reference: "Bloque II. Sistemas Unix y Linux. Permisos."
  },
  {
    id: 24,
    section: "Bloque II - Tecnología Básica",
    topic: "Windows",
    difficulty: "media",
    text: "¿Qué comando de Windows muestra la configuración IP de las interfaces de red?",
    options: [
      "ipconfig",
      "ls",
      "chmod"
    ],
    answer: 0,
    explanation: "ipconfig muestra datos de configuración de red como IP, máscara, puerta de enlace y DNS en Windows.",
    reference: "Bloque II. Sistemas Windows. Comandos básicos."
  },
  {
    id: 25,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "media",
    text: "¿Qué comando de Linux puede usarse para mostrar o gestionar direcciones IP e interfaces de red?",
    options: [
      "ip",
      "regedit",
      "tasklist"
    ],
    answer: 0,
    explanation: "El comando ip permite consultar y administrar interfaces, rutas y direcciones IP en Linux.",
    reference: "Bloque II. Sistemas Unix y Linux. Comandos básicos."
  },
  {
    id: 26,
    section: "Bloque II - Tecnología Básica",
    topic: "Actualizaciones",
    difficulty: "facil",
    text: "¿Por qué son importantes las actualizaciones del sistema operativo?",
    options: [
      "Porque corrigen fallos, vulnerabilidades y mejoran estabilidad o compatibilidad",
      "Porque eliminan siempre todos los archivos temporales",
      "Porque sustituyen físicamente los componentes del equipo"
    ],
    answer: 0,
    explanation: "Las actualizaciones corrigen errores, tapan vulnerabilidades y pueden mejorar estabilidad, rendimiento y compatibilidad.",
    reference: "Bloque II. Sistemas operativos. Mantenimiento."
  },
  {
    id: 27,
    section: "Bloque II - Tecnología Básica",
    topic: "Seguridad",
    difficulty: "media",
    text: "¿Qué principio aplica el uso de cuentas sin privilegios de administrador para tareas normales?",
    options: [
      "Principio de mínimo privilegio",
      "Principio de máxima exposición",
      "Principio de arranque dual"
    ],
    answer: 0,
    explanation: "El principio de mínimo privilegio indica que un usuario o proceso debe tener solo los permisos necesarios.",
    reference: "Bloque II. Sistemas operativos. Seguridad básica."
  },
  {
    id: 28,
    section: "Bloque II - Tecnología Básica",
    topic: "Particiones",
    difficulty: "media",
    text: "¿Qué es una partición de disco?",
    options: [
      "Una división lógica de una unidad de almacenamiento",
      "Un tipo de memoria caché de CPU",
      "Un protocolo de correo electrónico"
    ],
    answer: 0,
    explanation: "Una partición divide lógicamente un disco para organizar sistemas de archivos, sistemas operativos o datos.",
    reference: "Bloque II. Sistemas operativos. Almacenamiento."
  },
  {
    id: 29,
    section: "Bloque II - Tecnología Básica",
    topic: "Swap",
    difficulty: "media",
    text: "¿Qué es el área swap en Linux?",
    options: [
      "Un espacio en disco usado como apoyo a la memoria RAM",
      "Un directorio obligatorio para imágenes",
      "Un servicio exclusivo de impresión"
    ],
    answer: 0,
    explanation: "La swap es un área de intercambio en disco utilizada cuando la RAM no es suficiente o para determinadas funciones del sistema.",
    reference: "Bloque II. Sistemas Unix y Linux. Gestión de memoria."
  },
  {
    id: 30,
    section: "Bloque II - Tecnología Básica",
    topic: "Windows",
    difficulty: "media",
    text: "¿Qué es el Registro de Windows?",
    options: [
      "Una base de datos jerárquica de configuración del sistema y aplicaciones",
      "Un sistema de archivos exclusivo para USB",
      "Un programa para crear presentaciones"
    ],
    answer: 0,
    explanation: "El Registro almacena configuraciones del sistema, usuarios, hardware, servicios y aplicaciones en Windows.",
    reference: "Bloque II. Sistemas Windows. Configuración."
  },
  {
    id: 31,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "media",
    text: "En Linux, ¿qué directorio suele contener archivos de configuración del sistema?",
    options: [
      "/etc",
      "/binario",
      "/windows"
    ],
    answer: 0,
    explanation: "El directorio /etc contiene numerosos archivos de configuración del sistema y servicios.",
    reference: "Bloque II. Sistemas Unix y Linux. Estructura de directorios."
  },
  {
    id: 32,
    section: "Bloque II - Tecnología Básica",
    topic: "Linux",
    difficulty: "facil",
    text: "En Linux, ¿qué directorio representa normalmente el directorio personal de los usuarios?",
    options: [
      "/home",
      "/cpu",
      "/driver"
    ],
    answer: 0,
    explanation: "/home suele contener los directorios personales de los usuarios estándar.",
    reference: "Bloque II. Sistemas Unix y Linux. Estructura de directorios."
  },
  {
    id: 33,
    section: "Bloque II - Tecnología Básica",
    topic: "Windows",
    difficulty: "facil",
    text: "En Windows, ¿qué combinación de teclas se usa habitualmente para abrir opciones como Administrador de tareas, bloqueo o cierre de sesión?",
    options: [
      "Ctrl + Alt + Supr",
      "Ctrl + C + V",
      "Alt + F4 + F5"
    ],
    answer: 0,
    explanation: "Ctrl + Alt + Supr abre una pantalla de seguridad con opciones como bloqueo, cambio de usuario o Administrador de tareas.",
    reference: "Bloque II. Sistemas Windows. Uso básico."
  },
  {
    id: 34,
    section: "Bloque II - Tecnología Básica",
    topic: "Procesos",
    difficulty: "media",
    text: "¿Qué diferencia básica existe entre proceso e hilo?",
    options: [
      "Un hilo es una unidad de ejecución dentro de un proceso",
      "Un proceso solo existe en discos duros",
      "Un hilo siempre es un archivo comprimido"
    ],
    answer: 0,
    explanation: "Un proceso puede contener uno o varios hilos de ejecución que comparten recursos del proceso.",
    reference: "Bloque II. Sistemas operativos. Procesos e hilos."
  },
  {
    id: 35,
    section: "Bloque II - Tecnología Básica",
    topic: "Móviles",
    difficulty: "facil",
    text: "¿Cuál de los siguientes es un sistema operativo móvil?",
    options: [
      "Android",
      "Apache",
      "BIOS"
    ],
    answer: 0,
    explanation: "Android es un sistema operativo utilizado principalmente en dispositivos móviles.",
    reference: "Bloque II. Sistemas operativos para dispositivos móviles."
  },
  {
    id: 36,
    section: "Bloque II - Tecnología Básica",
    topic: "Móviles",
    difficulty: "facil",
    text: "¿Cuál de los siguientes sistemas operativos está asociado principalmente a dispositivos móviles de Apple?",
    options: [
      "iOS",
      "Ubuntu Server",
      "MS-DOS"
    ],
    answer: 0,
    explanation: "iOS es el sistema operativo móvil usado en iPhone.",
    reference: "Bloque II. Sistemas operativos para dispositivos móviles."
  },
  {
    id: 37,
    section: "Bloque II - Tecnología Básica",
    topic: "Android",
    difficulty: "media",
    text: "Android está basado principalmente en:",
    options: [
      "El kernel Linux",
      "El Registro de Windows",
      "El sistema de archivos NTFS exclusivamente"
    ],
    answer: 0,
    explanation: "Android utiliza el kernel Linux como base para gestionar hardware, procesos y memoria.",
    reference: "Bloque II. Sistemas operativos móviles. Android."
  },
  {
    id: 38,
    section: "Bloque II - Tecnología Básica",
    topic: "Instalación",
    difficulty: "media",
    text: "¿Qué es una instalación limpia de un sistema operativo?",
    options: [
      "Instalar el sistema desde cero, normalmente eliminando la instalación anterior",
      "Actualizar solo el navegador web",
      "Cambiar únicamente el fondo de pantalla"
    ],
    answer: 0,
    explanation: "Una instalación limpia parte de cero y evita arrastrar configuraciones o errores de instalaciones anteriores.",
    reference: "Bloque II. Sistemas operativos. Instalación."
  },
  {
    id: 39,
    section: "Bloque II - Tecnología Básica",
    topic: "Licencias",
    difficulty: "facil",
    text: "¿Cuál es una diferencia habitual entre Windows y muchas distribuciones Linux?",
    options: [
      "Windows suele ser propietario y muchas distribuciones Linux son software libre o de código abierto",
      "Linux no puede funcionar en servidores",
      "Windows no permite interfaz gráfica"
    ],
    answer: 0,
    explanation: "Windows es software propietario, mientras que muchas distribuciones Linux se distribuyen como software libre o código abierto.",
    reference: "Bloque II. Sistemas Windows. Sistemas Unix y Linux."
  },
  {
    id: 40,
    section: "Bloque II - Tecnología Básica",
    topic: "Comandos Windows",
    difficulty: "media",
    text: "¿Qué comando de Windows puede mostrar la lista de procesos en ejecución desde consola?",
    options: [
      "tasklist",
      "chmod",
      "lsusb"
    ],
    answer: 0,
    explanation: "tasklist muestra procesos en ejecución desde la línea de comandos de Windows.",
    reference: "Bloque II. Sistemas Windows. Comandos básicos."
  },
  {
    id: 41,
    section: "Bloque II - Tecnología Básica",
    topic: "Comandos Linux",
    difficulty: "media",
    text: "¿Qué comando de Linux muestra procesos en ejecución?",
    options: [
      "ps",
      "regedit",
      "format"
    ],
    answer: 0,
    explanation: "ps muestra información sobre procesos activos en sistemas Unix/Linux.",
    reference: "Bloque II. Sistemas Unix y Linux. Procesos."
  },
  {
    id: 42,
    section: "Bloque II - Tecnología Básica",
    topic: "Apagado",
    difficulty: "facil",
    text: "¿Qué operación realiza el apagado correcto de un sistema operativo?",
    options: [
      "Cierra procesos, sincroniza datos y detiene el sistema de forma controlada",
      "Corta la energía sin guardar cambios",
      "Borra automáticamente el sistema operativo"
    ],
    answer: 0,
    explanation: "El apagado correcto evita pérdida de datos y corrupción del sistema de archivos.",
    reference: "Bloque II. Sistemas operativos. Mantenimiento y uso."
  },
  {
    id: 43,
    section: "Bloque II - Tecnología Básica",
    topic: "Suspensión e hibernación",
    difficulty: "media",
    text: "¿Qué diferencia básica existe entre suspensión e hibernación?",
    options: [
      "La suspensión mantiene el estado en RAM; la hibernación lo guarda en disco",
      "La suspensión borra el disco; la hibernación borra la RAM",
      "Son exactamente lo mismo en todos los sistemas"
    ],
    answer: 0,
    explanation: "La suspensión consume algo de energía para mantener la RAM; la hibernación guarda el estado en disco y permite apagar casi por completo.",
    reference: "Bloque II. Sistemas operativos. Gestión de energía."
  },
  {
    id: 44,
    section: "Bloque II - Tecnología Básica",
    topic: "Cuentas",
    difficulty: "media",
    text: "¿Por qué no se recomienda usar habitualmente una cuenta de administrador para tareas diarias?",
    options: [
      "Porque aumenta el riesgo de cambios no deseados o ejecución de malware con altos privilegios",
      "Porque impide abrir archivos de texto",
      "Porque elimina el acceso a Internet"
    ],
    answer: 0,
    explanation: "Usar una cuenta estándar reduce el impacto de errores y malware al limitar privilegios.",
    reference: "Bloque II. Sistemas operativos. Seguridad y usuarios."
  },
  {
    id: 45,
    section: "Bloque II - Tecnología Básica",
    topic: "Sistemas de archivos",
    difficulty: "media",
    text: "¿Qué sistema de archivos es muy usado en memorias USB por su compatibilidad con múltiples sistemas?",
    options: [
      "FAT32",
      "EXT4 exclusivamente",
      "APFS exclusivamente"
    ],
    answer: 0,
    explanation: "FAT32 es ampliamente compatible, aunque tiene limitaciones como el tamaño máximo de archivo.",
    reference: "Bloque II. Sistemas operativos. Sistemas de archivos."
  },
  {
    id: 46,
    section: "Bloque II - Tecnología Básica",
    topic: "Montaje",
    difficulty: "media",
    text: "En sistemas Unix/Linux, ¿qué significa montar un sistema de archivos?",
    options: [
      "Hacerlo accesible en un punto del árbol de directorios",
      "Instalar memoria RAM adicional",
      "Actualizar el firmware del monitor"
    ],
    answer: 0,
    explanation: "Montar permite acceder a un dispositivo o partición dentro del árbol de directorios del sistema.",
    reference: "Bloque II. Sistemas Unix y Linux. Sistemas de archivos."
  },
  {
    id: 47,
    section: "Bloque II - Tecnología Básica",
    topic: "Distribuciones Linux",
    difficulty: "facil",
    text: "¿Qué es una distribución Linux?",
    options: [
      "Un sistema basado en Linux que incluye kernel, herramientas y paquetes de software",
      "Una partición obligatoria de Windows",
      "Un tipo de cable de red"
    ],
    answer: 0,
    explanation: "Una distribución Linux combina el kernel Linux con utilidades, gestor de paquetes, entorno y software.",
    reference: "Bloque II. Sistemas Unix y Linux."
  },
  {
    id: 48,
    section: "Bloque II - Tecnología Básica",
    topic: "Gestor de paquetes",
    difficulty: "media",
    text: "¿Para qué sirve un gestor de paquetes en Linux?",
    options: [
      "Para instalar, actualizar y eliminar software de forma gestionada",
      "Para cambiar físicamente el procesador",
      "Para configurar únicamente el brillo de pantalla"
    ],
    answer: 0,
    explanation: "Los gestores de paquetes facilitan la instalación, actualización, eliminación y resolución de dependencias del software.",
    reference: "Bloque II. Sistemas Unix y Linux. Administración."
  },
  {
    id: 49,
    section: "Bloque II - Tecnología Básica",
    topic: "Restauración",
    difficulty: "media",
    text: "¿Para qué sirve un punto de restauración en Windows?",
    options: [
      "Para volver a un estado anterior de configuración del sistema",
      "Para aumentar la velocidad de la tarjeta gráfica",
      "Para convertir archivos PDF en ejecutables"
    ],
    answer: 0,
    explanation: "Un punto de restauración permite revertir ciertos cambios del sistema, como controladores o configuración.",
    reference: "Bloque II. Sistemas Windows. Mantenimiento."
  },
  {
    id: 50,
    section: "Bloque II - Tecnología Básica",
    topic: "Mantenimiento",
    difficulty: "media",
    text: "¿Cuál de las siguientes acciones forma parte del mantenimiento básico de un sistema operativo?",
    options: [
      "Aplicar actualizaciones, revisar espacio disponible y controlar programas de inicio",
      "Desconectar siempre el disco duro durante el arranque",
      "Eliminar manualmente el kernel cada semana"
    ],
    answer: 0,
    explanation: "El mantenimiento básico incluye actualizaciones, control de espacio, revisión de inicio, servicios y estabilidad general.",
    reference: "Bloque II. Sistemas operativos. Mantenimiento."
  }
];