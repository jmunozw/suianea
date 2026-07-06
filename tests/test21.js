const questions = [
  {
    id: 1,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Concepto de backup",
    difficulty: "Fácil",
    text: "¿Cuál es el objetivo principal de una copia de seguridad?",
    options: [
      "Permitir recuperar datos ante pérdida, corrupción o desastre",
      "Aumentar la velocidad de lectura del disco principal",
      "Eliminar la necesidad de administrar usuarios"
    ],
    answer: 0,
    explanation: "El backup sirve para recuperar información cuando se pierde, se borra, se corrompe o queda inaccesible.",
    reference: "Bloque IV - Políticas, sistemas y procedimientos de back up y recuperación"
  },
  {
    id: 2,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup completo",
    difficulty: "Fácil",
    text: "¿Qué caracteriza a una copia de seguridad completa?",
    options: [
      "Copia únicamente los archivos modificados desde el último backup",
      "Copia todos los datos seleccionados en cada ejecución",
      "Copia solo los cambios desde el último backup completo"
    ],
    answer: 1,
    explanation: "El backup completo copia todo el conjunto de datos seleccionado, aunque no haya cambiado.",
    reference: "Bloque IV - Back up y recuperación"
  },
  {
    id: 3,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup incremental",
    difficulty: "Media",
    text: "¿Qué copia un backup incremental?",
    options: [
      "Todos los datos existentes en el sistema",
      "Los datos modificados desde el último backup completo únicamente",
      "Los datos modificados desde el último backup, sea completo o incremental"
    ],
    answer: 2,
    explanation: "El incremental copia los cambios desde la última copia realizada, ya sea completa o incremental.",
    reference: "Bloque IV - Tipos de backup"
  },
  {
    id: 4,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup diferencial",
    difficulty: "Media",
    text: "¿Qué copia un backup diferencial?",
    options: [
      "Los datos modificados desde el último backup completo",
      "Los datos modificados desde el último backup incremental",
      "Solo los archivos eliminados desde la última copia"
    ],
    answer: 0,
    explanation: "El diferencial acumula todos los cambios desde el último backup completo.",
    reference: "Bloque IV - Tipos de backup"
  },
  {
    id: 5,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Incremental vs diferencial",
    difficulty: "Media",
    text: "¿Qué tipo de backup suele requerir más copias para restaurar un sistema completo?",
    options: [
      "Backup completo",
      "Backup diferencial",
      "Backup incremental"
    ],
    answer: 2,
    explanation: "Para restaurar con incrementales suele necesitarse el último completo y todos los incrementales posteriores.",
    reference: "Bloque IV - Recuperación de backups"
  },
  {
    id: 6,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Restauración diferencial",
    difficulty: "Media",
    text: "Para restaurar desde una estrategia de backup completo + diferencial, normalmente se necesita:",
    options: [
      "El último completo y el último diferencial",
      "Todos los diferenciales existentes",
      "Solo el último diferencial"
    ],
    answer: 0,
    explanation: "La restauración diferencial requiere el último backup completo y el último diferencial válido.",
    reference: "Bloque IV - Restauración"
  },
  {
    id: 7,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "RTO",
    difficulty: "Media",
    text: "¿Qué indica el RTO en una política de recuperación?",
    options: [
      "La cantidad máxima de datos que se puede perder",
      "El tiempo máximo aceptable para recuperar el servicio",
      "El número de copias que deben almacenarse fuera de línea"
    ],
    answer: 1,
    explanation: "RTO significa Recovery Time Objective: tiempo máximo tolerable hasta volver a operar.",
    reference: "Bloque IV - Políticas de recuperación"
  },
  {
    id: 8,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "RPO",
    difficulty: "Media",
    text: "¿Qué indica el RPO?",
    options: [
      "La antigüedad máxima de los datos recuperados aceptable para el negocio",
      "El tiempo máximo que puede tardar una restauración",
      "El número de servidores físicos del CPD"
    ],
    answer: 0,
    explanation: "RPO mide cuánta pérdida de datos es aceptable, por ejemplo perder como máximo los últimos 15 minutos.",
    reference: "Bloque IV - Políticas de backup"
  },
  {
    id: 9,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "RPO vs RTO",
    difficulty: "Media",
    text: "Si una empresa no puede perder más de 1 hora de datos, ¿qué parámetro está definiendo?",
    options: [
      "RTO",
      "RPO",
      "MTU"
    ],
    answer: 1,
    explanation: "La pérdida máxima de datos aceptable se expresa mediante el RPO.",
    reference: "Bloque IV - Recuperación ante desastres"
  },
  {
    id: 10,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Regla 3-2-1",
    difficulty: "Fácil",
    text: "¿Qué recomienda la regla 3-2-1 de copias de seguridad?",
    options: [
      "3 usuarios, 2 servidores y 1 administrador",
      "3 copias, en 2 tipos de soporte, con 1 copia fuera de la ubicación principal",
      "3 discos RAID, 2 particiones y 1 sistema operativo"
    ],
    answer: 1,
    explanation: "La regla 3-2-1 busca resiliencia: varias copias, distintos soportes y una copia externa.",
    reference: "Bloque IV - Buenas prácticas de backup"
  },
  {
    id: 11,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup offsite",
    difficulty: "Fácil",
    text: "¿Qué significa mantener una copia offsite?",
    options: [
      "Guardar una copia en una ubicación diferente a la principal",
      "Guardar una copia en la misma carpeta del servidor",
      "Guardar una copia solo en memoria RAM"
    ],
    answer: 0,
    explanation: "Una copia offsite está fuera de la ubicación principal para proteger frente a incendio, robo o desastre local.",
    reference: "Bloque IV - Seguridad y disponibilidad"
  },
  {
    id: 12,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "RAID y backup",
    difficulty: "Media",
    text: "¿Cuál de las siguientes afirmaciones es correcta sobre RAID?",
    options: [
      "RAID sustituye completamente a las copias de seguridad",
      "RAID mejora disponibilidad o rendimiento, pero no sustituye al backup",
      "RAID solo sirve para cifrar copias de seguridad"
    ],
    answer: 1,
    explanation: "RAID puede proteger frente a fallo de disco, pero no frente a borrado, corrupción, ransomware o error humano.",
    reference: "Bloque IV - Sistemas de almacenamiento"
  },
  {
    id: 13,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Snapshot",
    difficulty: "Media",
    text: "¿Qué es un snapshot en virtualización?",
    options: [
      "Una captura del estado de una máquina virtual en un momento concreto",
      "Una copia física en cinta magnética",
      "Un protocolo de transferencia de archivos"
    ],
    answer: 0,
    explanation: "Un snapshot captura el estado de una VM para volver a ese punto, pero no debe confundirse con una política completa de backup.",
    reference: "Bloque IV - Back up de sistemas virtuales"
  },
  {
    id: 14,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Snapshot vs backup",
    difficulty: "Media",
    text: "¿Por qué un snapshot no debe considerarse siempre un backup completo?",
    options: [
      "Porque normalmente depende del almacenamiento original y no siempre protege ante pérdida total del sistema",
      "Porque solo funciona en sistemas Linux",
      "Porque no guarda ningún cambio del sistema"
    ],
    answer: 0,
    explanation: "El snapshot suele depender del entorno original; si se pierde el almacenamiento base, puede perderse también el snapshot.",
    reference: "Bloque IV - Virtualización y backups"
  },
  {
    id: 15,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup de imagen",
    difficulty: "Media",
    text: "¿Qué permite una copia de imagen de sistema?",
    options: [
      "Restaurar únicamente documentos individuales",
      "Restaurar el sistema completo, incluyendo sistema operativo, aplicaciones y datos",
      "Eliminar la necesidad de licencias de software"
    ],
    answer: 1,
    explanation: "Una imagen de sistema permite recuperación completa del equipo o servidor.",
    reference: "Bloque IV - Back up de sistemas físicos"
  },
  {
    id: 16,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Bare-metal recovery",
    difficulty: "Difícil",
    text: "¿Qué significa bare-metal recovery?",
    options: [
      "Recuperar un sistema completo sobre hardware vacío o nuevo",
      "Recuperar únicamente archivos temporales",
      "Crear usuarios locales automáticamente"
    ],
    answer: 0,
    explanation: "Bare-metal recovery permite restaurar un equipo completo sin tener previamente instalado el sistema operativo.",
    reference: "Bloque IV - Recuperación de sistemas"
  },
  {
    id: 17,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup de archivos",
    difficulty: "Fácil",
    text: "¿Qué copia normalmente un backup a nivel de archivo?",
    options: [
      "Archivos y carpetas seleccionados",
      "La BIOS del equipo",
      "El firmware de todos los periféricos"
    ],
    answer: 0,
    explanation: "El backup a nivel de archivo se centra en documentos, carpetas y datos seleccionados.",
    reference: "Bloque IV - Tipos de backup"
  },
  {
    id: 18,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup en caliente",
    difficulty: "Media",
    text: "¿Qué es un backup en caliente?",
    options: [
      "Una copia realizada con el sistema o servicio en funcionamiento",
      "Una copia realizada después de apagar completamente todos los equipos",
      "Una copia almacenada en una sala con alta temperatura"
    ],
    answer: 0,
    explanation: "El backup en caliente se realiza mientras el sistema sigue activo, habitual en servicios críticos.",
    reference: "Bloque IV - Procedimientos de backup"
  },
  {
    id: 19,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup en frío",
    difficulty: "Media",
    text: "¿Qué caracteriza a un backup en frío?",
    options: [
      "Se realiza con el sistema detenido o sin actividad",
      "Se realiza únicamente en la nube",
      "Se realiza solo sobre memoria caché"
    ],
    answer: 0,
    explanation: "En un backup en frío se detiene el sistema o servicio para asegurar consistencia.",
    reference: "Bloque IV - Procedimientos de backup"
  },
  {
    id: 20,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Consistencia de aplicación",
    difficulty: "Difícil",
    text: "En bases de datos o servidores de correo, ¿por qué es importante la consistencia de aplicación en un backup?",
    options: [
      "Porque garantiza que los datos se copien en un estado coherente para poder restaurarlos correctamente",
      "Porque reduce siempre el tamaño del backup a cero",
      "Porque convierte automáticamente una base de datos relacional en NoSQL"
    ],
    answer: 0,
    explanation: "La consistencia de aplicación asegura que transacciones, ficheros y servicios queden en un estado recuperable.",
    reference: "Bloque IV - Backups de aplicaciones y recuperación"
  },
  {
    id: 21,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "VSS",
    difficulty: "Difícil",
    text: "En sistemas Windows, ¿para qué se utiliza VSS en relación con backups?",
    options: [
      "Para crear instantáneas consistentes de volúmenes mientras el sistema está en uso",
      "Para asignar direcciones IP dinámicas",
      "Para cifrar contraseñas de Active Directory"
    ],
    answer: 0,
    explanation: "Volume Shadow Copy Service permite realizar copias consistentes de archivos abiertos o en uso.",
    reference: "Bloque IV - Backups en sistemas Windows"
  },
  {
    id: 22,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup de máquinas virtuales",
    difficulty: "Media",
    text: "¿Qué ventaja tiene realizar backups a nivel de hipervisor?",
    options: [
      "Permite proteger máquinas virtuales completas sin depender siempre de agentes dentro de cada sistema invitado",
      "Impide que las máquinas virtuales usen CPU",
      "Elimina la necesidad de almacenamiento"
    ],
    answer: 0,
    explanation: "El backup a nivel de hipervisor puede capturar la VM completa desde la capa de virtualización.",
    reference: "Bloque IV - Back up de sistemas virtuales"
  },
  {
    id: 23,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Agent vs agentless",
    difficulty: "Media",
    text: "¿Qué diferencia básica existe entre backup con agente y sin agente?",
    options: [
      "El backup con agente requiere software instalado dentro del sistema protegido; el agentless trabaja desde fuera, normalmente desde el hipervisor o infraestructura",
      "El backup sin agente solo puede hacerse en disquetes",
      "El backup con agente no permite restaurar datos"
    ],
    answer: 0,
    explanation: "El agente se instala dentro del equipo o VM; el agentless opera desde la infraestructura externa compatible.",
    reference: "Bloque IV - Sistemas físicos y virtuales"
  },
  {
    id: 24,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "CBT",
    difficulty: "Difícil",
    text: "¿Qué permite una tecnología de Changed Block Tracking en backups?",
    options: [
      "Detectar bloques modificados para copiar solo los cambios",
      "Cambiar automáticamente la contraseña del administrador",
      "Bloquear todo el tráfico de red entrante"
    ],
    answer: 0,
    explanation: "CBT identifica bloques cambiados, reduciendo tiempo y tamaño de backups incrementales.",
    reference: "Bloque IV - Backups en virtualización"
  },
  {
    id: 25,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Deduplicación",
    difficulty: "Media",
    text: "¿Cuál es la finalidad de la deduplicación en backups?",
    options: [
      "Eliminar datos repetidos para reducir espacio ocupado",
      "Duplicar todos los datos para gastar más almacenamiento",
      "Cambiar el sistema de archivos del servidor"
    ],
    answer: 0,
    explanation: "La deduplicación evita almacenar varias veces bloques o datos idénticos.",
    reference: "Bloque IV - Sistemas de almacenamiento"
  },
  {
    id: 26,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Compresión",
    difficulty: "Fácil",
    text: "¿Para qué se usa la compresión en una copia de seguridad?",
    options: [
      "Para reducir el tamaño ocupado por los datos copiados",
      "Para aumentar la latencia de la red",
      "Para impedir cualquier restauración"
    ],
    answer: 0,
    explanation: "La compresión reduce el espacio necesario para almacenar la copia.",
    reference: "Bloque IV - Optimización de backups"
  },
  {
    id: 27,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Cifrado de backups",
    difficulty: "Media",
    text: "¿Qué protege principalmente el cifrado de una copia de seguridad?",
    options: [
      "La confidencialidad de los datos almacenados en la copia",
      "La velocidad de rotación de los discos",
      "El número de usuarios conectados al dominio"
    ],
    answer: 0,
    explanation: "El cifrado evita que alguien pueda leer los datos del backup sin la clave correspondiente.",
    reference: "Bloque IV - Seguridad lógica"
  },
  {
    id: 28,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Pruebas de restauración",
    difficulty: "Fácil",
    text: "¿Cuál es una buena práctica esencial en una política de backups?",
    options: [
      "Probar periódicamente la restauración de las copias",
      "No comprobar nunca los backups si no hay incidencias",
      "Guardar todas las copias en el mismo disco del servidor"
    ],
    answer: 0,
    explanation: "Un backup no probado puede fallar cuando más se necesita. Hay que verificar la restauración.",
    reference: "Bloque IV - Procedimientos de recuperación"
  },
  {
    id: 29,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Catálogo de backup",
    difficulty: "Media",
    text: "¿Para qué sirve el catálogo o índice de un sistema de backups?",
    options: [
      "Para localizar qué datos existen en cada copia y facilitar la restauración",
      "Para sustituir el sistema operativo del servidor",
      "Para asignar VLAN automáticamente"
    ],
    answer: 0,
    explanation: "El catálogo permite buscar versiones, fechas, ficheros y puntos de restauración disponibles.",
    reference: "Bloque IV - Gestión de backups"
  },
  {
    id: 30,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Retención",
    difficulty: "Media",
    text: "¿Qué define una política de retención de backups?",
    options: [
      "Cuánto tiempo se conservan las copias antes de eliminarlas o sobrescribirlas",
      "La velocidad del procesador del servidor",
      "El número de tarjetas de red instaladas"
    ],
    answer: 0,
    explanation: "La retención establece durante cuánto tiempo se guardan las copias.",
    reference: "Bloque IV - Políticas de backup"
  },
  {
    id: 31,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "GFS",
    difficulty: "Difícil",
    text: "En políticas de retención, ¿qué suele significar GFS?",
    options: [
      "Grandfather-Father-Son",
      "Global File System únicamente",
      "General Firewall Service"
    ],
    answer: 0,
    explanation: "GFS es un esquema de rotación con copias diarias, semanales, mensuales o anuales.",
    reference: "Bloque IV - Retención y rotación"
  },
  {
    id: 32,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Ventana de backup",
    difficulty: "Media",
    text: "¿Qué es la ventana de backup?",
    options: [
      "El periodo de tiempo disponible o planificado para ejecutar las copias",
      "Una ventana gráfica del navegador",
      "El tiempo que tarda un usuario en iniciar sesión"
    ],
    answer: 0,
    explanation: "La ventana de backup es el intervalo en el que se pueden realizar copias sin afectar demasiado al servicio.",
    reference: "Bloque IV - Planificación de backups"
  },
  {
    id: 33,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Replicación vs backup",
    difficulty: "Media",
    text: "¿Cuál es una diferencia importante entre replicación y backup?",
    options: [
      "La replicación mantiene otra copia actualizada, pero puede propagar errores o borrados; el backup conserva puntos históricos",
      "La replicación siempre sustituye toda política de backup",
      "El backup solo existe en redes inalámbricas"
    ],
    answer: 0,
    explanation: "La replicación mejora disponibilidad, pero no sustituye la recuperación histórica que da un backup.",
    reference: "Bloque IV - Alta disponibilidad y recuperación"
  },
  {
    id: 34,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Ransomware",
    difficulty: "Media",
    text: "¿Qué tipo de copia ayuda especialmente frente a ransomware?",
    options: [
      "Una copia inmutable o desconectada que no pueda ser modificada por el atacante",
      "Una copia guardada en la misma carpeta compartida sin permisos",
      "Una copia sin cifrado y sin control de acceso"
    ],
    answer: 0,
    explanation: "Las copias inmutables, offline o air-gapped reducen el riesgo de cifrado o borrado por ransomware.",
    reference: "Bloque IV - Seguridad y backups"
  },
  {
    id: 35,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup inmutable",
    difficulty: "Media",
    text: "¿Qué significa que una copia sea inmutable?",
    options: [
      "Que no puede modificarse ni borrarse durante un periodo definido",
      "Que se borra automáticamente cada minuto",
      "Que solo contiene accesos directos"
    ],
    answer: 0,
    explanation: "La inmutabilidad protege la copia frente a modificaciones o borrados no autorizados.",
    reference: "Bloque IV - Protección de copias"
  },
  {
    id: 36,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Air gap",
    difficulty: "Difícil",
    text: "¿Qué es un backup con air gap?",
    options: [
      "Una copia aislada físicamente o lógicamente de la red principal",
      "Una copia comprimida con pérdida",
      "Una copia que solo guarda direcciones IP"
    ],
    answer: 0,
    explanation: "El air gap separa la copia del entorno productivo para evitar ataques o propagación de daños.",
    reference: "Bloque IV - Seguridad física y lógica"
  },
  {
    id: 37,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "WORM",
    difficulty: "Difícil",
    text: "¿Qué significa WORM en almacenamiento de backups?",
    options: [
      "Write Once Read Many",
      "Wireless Ordered Routing Mode",
      "Windows Offline Recovery Manager"
    ],
    answer: 0,
    explanation: "WORM permite escribir una vez y leer muchas, evitando modificaciones posteriores.",
    reference: "Bloque IV - Almacenamiento seguro"
  },
  {
    id: 38,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup sintético completo",
    difficulty: "Difícil",
    text: "¿Qué es un backup sintético completo?",
    options: [
      "Un completo generado combinando un backup completo anterior con incrementales, sin volver a leer todo el origen",
      "Un backup que solo copia archivos temporales",
      "Un backup hecho exclusivamente en papel"
    ],
    answer: 0,
    explanation: "El sintético completo crea un nuevo punto completo usando datos ya almacenados en el repositorio.",
    reference: "Bloque IV - Estrategias avanzadas de backup"
  },
  {
    id: 39,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Incremental forever",
    difficulty: "Difícil",
    text: "¿Qué busca una estrategia incremental forever?",
    options: [
      "Hacer un completo inicial y después trabajar principalmente con incrementales",
      "No hacer nunca ninguna copia de seguridad",
      "Copiar siempre todo el sistema cada minuto"
    ],
    answer: 0,
    explanation: "Incremental forever reduce carga haciendo un completo inicial y luego incrementales gestionados por el software.",
    reference: "Bloque IV - Estrategias de backup"
  },
  {
    id: 40,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Logs de transacciones",
    difficulty: "Difícil",
    text: "En bases de datos, ¿para qué pueden utilizarse los logs de transacciones en recuperación?",
    options: [
      "Para recuperar la base de datos hasta un punto concreto en el tiempo",
      "Para cambiar el tipo de monitor del servidor",
      "Para sustituir la memoria RAM"
    ],
    answer: 0,
    explanation: "Los logs permiten restauraciones punto en el tiempo si existe una estrategia compatible.",
    reference: "Bloque IV - Backups de bases de datos"
  },
  {
    id: 41,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Punto de restauración",
    difficulty: "Fácil",
    text: "¿Qué representa un punto de restauración en un sistema de backup?",
    options: [
      "Un momento concreto al que se puede recuperar la información",
      "Una dirección MAC del servidor",
      "Una cuenta de usuario bloqueada"
    ],
    answer: 0,
    explanation: "Un punto de restauración indica una fecha y estado disponibles para recuperar datos.",
    reference: "Bloque IV - Recuperación"
  },
  {
    id: 42,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup local",
    difficulty: "Fácil",
    text: "¿Cuál es una ventaja habitual de un backup local?",
    options: [
      "Restauración más rápida por proximidad al sistema origen",
      "Protección total frente a incendio en la misma sala",
      "Eliminación de la necesidad de permisos"
    ],
    answer: 0,
    explanation: "El backup local suele permitir restauraciones rápidas, aunque no protege bien frente a desastres físicos locales.",
    reference: "Bloque IV - Sistemas de backup"
  },
  {
    id: 43,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Backup cloud",
    difficulty: "Media",
    text: "¿Cuál es una ventaja habitual de almacenar backups en la nube?",
    options: [
      "Facilita disponer de una copia externa sin mantener una segunda ubicación propia",
      "Hace innecesario cifrar datos sensibles",
      "Impide cualquier coste recurrente"
    ],
    answer: 0,
    explanation: "La nube puede servir como ubicación externa, aunque hay que controlar cifrado, costes, ancho de banda y restauración.",
    reference: "Bloque IV - Backups externos"
  },
  {
    id: 44,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Verificación",
    difficulty: "Media",
    text: "¿Qué busca la verificación de integridad de una copia?",
    options: [
      "Comprobar que los datos copiados no están corruptos y pueden ser utilizados",
      "Cambiar automáticamente el sistema operativo",
      "Reducir el número de usuarios del dominio"
    ],
    answer: 0,
    explanation: "La verificación ayuda a detectar copias corruptas o incompletas antes de necesitarlas.",
    reference: "Bloque IV - Control de backups"
  },
  {
    id: 45,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Checksums",
    difficulty: "Difícil",
    text: "¿Para qué puede utilizarse un checksum en backups?",
    options: [
      "Para comprobar integridad de los datos copiados",
      "Para aumentar la resolución del monitor",
      "Para asignar permisos NTFS automáticamente"
    ],
    answer: 0,
    explanation: "Los checksums permiten detectar alteraciones o corrupción comparando valores calculados.",
    reference: "Bloque IV - Integridad de datos"
  },
  {
    id: 46,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Permisos",
    difficulty: "Media",
    text: "¿Por qué es importante proteger con permisos adecuados el repositorio de backups?",
    options: [
      "Porque evita accesos, borrados o modificaciones no autorizadas",
      "Porque aumenta la frecuencia de la CPU",
      "Porque convierte los backups incrementales en diferenciales"
    ],
    answer: 0,
    explanation: "El repositorio de backups debe estar especialmente protegido porque contiene información crítica.",
    reference: "Bloque IV - Seguridad lógica"
  },
  {
    id: 47,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Monitorización",
    difficulty: "Fácil",
    text: "¿Qué debe hacerse si una tarea programada de backup falla repetidamente?",
    options: [
      "Revisar logs, causa del fallo y corregir la incidencia",
      "Ignorarla si no hay usuarios quejándose",
      "Eliminar todas las copias anteriores"
    ],
    answer: 0,
    explanation: "Los fallos de backup deben monitorizarse y corregirse antes de que ocurra una pérdida real.",
    reference: "Bloque IV - Monitorización y control"
  },
  {
    id: 48,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Copia de configuración",
    difficulty: "Media",
    text: "Además de datos de usuario, ¿qué otro elemento suele ser importante respaldar en infraestructura?",
    options: [
      "Configuraciones de servidores, dispositivos de red y aplicaciones",
      "Únicamente fondos de pantalla",
      "Solo archivos temporales del navegador"
    ],
    answer: 0,
    explanation: "Las configuraciones permiten reconstruir servicios y equipos más rápido tras una incidencia.",
    reference: "Bloque IV - Administración de sistemas"
  },
  {
    id: 49,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Plan de recuperación",
    difficulty: "Media",
    text: "¿Qué debe incluir un plan de recuperación ante desastres?",
    options: [
      "Procedimientos, responsables, prioridades, RTO, RPO y pruebas de restauración",
      "Solo una lista de contraseñas sin proteger",
      "Únicamente el modelo de los monitores"
    ],
    answer: 0,
    explanation: "Un plan de recuperación define cómo actuar, qué restaurar primero y bajo qué objetivos de tiempo y pérdida de datos.",
    reference: "Bloque IV - Recuperación ante desastres"
  },
  {
    id: 50,
    section: "🔴 BLOQUE 9 — BACKUPS",
    topic: "Prioridad de restauración",
    difficulty: "Media",
    text: "En una recuperación tras desastre, ¿qué sistemas deberían restaurarse primero?",
    options: [
      "Los sistemas críticos para el funcionamiento del servicio o negocio",
      "Los sistemas menos importantes para practicar",
      "Los equipos apagados que no tienen datos"
    ],
    answer: 0,
    explanation: "La prioridad de restauración debe basarse en criticidad, impacto y dependencias del servicio.",
    reference: "Bloque IV - Procedimientos de recuperación"
  }
];