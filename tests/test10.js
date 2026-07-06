const questions = [
  {
    id: 1,
    section: "Sistemas y Comunicaciones",
    topic: "Backups",
    difficulty: "Alta",
    text: "Después de un backup completo el domingo, se hacen backups diferenciales lunes, martes y miércoles. Si el sistema falla el jueves, ¿qué copias son necesarias para restaurar?",
    options: [
      "El backup completo del domingo y el diferencial del miércoles",
      "El backup completo del domingo y los diferenciales de lunes, martes y miércoles",
      "Solo el diferencial del miércoles"
    ],
    answer: 0,
    explanation: "El diferencial guarda los cambios desde el último backup completo. Basta con el completo y el último diferencial.",
    reference: "Bloque IV - Backups y recuperación"
  },
  {
    id: 2,
    section: "Sistemas y Comunicaciones",
    topic: "Backups",
    difficulty: "Alta",
    text: "Después de un backup completo el domingo, se hacen backups incrementales lunes, martes y miércoles. Si el sistema falla el jueves, ¿qué copias son necesarias?",
    options: [
      "Completo del domingo y solo incremental del miércoles",
      "Completo del domingo e incrementales de lunes, martes y miércoles",
      "Solo los incrementales de lunes, martes y miércoles"
    ],
    answer: 1,
    explanation: "El incremental guarda cambios desde la copia anterior. Para restaurar hacen falta todos los incrementales desde el último completo.",
    reference: "Bloque IV - Backups y recuperación"
  },
  {
    id: 3,
    section: "Virtualización",
    topic: "Snapshot vs Backup",
    difficulty: "Alta",
    text: "¿Cuál es la afirmación más correcta sobre un snapshot?",
    options: [
      "Sustituye siempre a una copia de seguridad completa",
      "Guarda el estado de una máquina en un momento concreto, pero no debe considerarse backup definitivo",
      "Solo sirve para copiar archivos personales"
    ],
    answer: 1,
    explanation: "Un snapshot permite volver a un estado concreto, pero depende normalmente del almacenamiento original y no sustituye una política de backup.",
    reference: "Bloque IV - Virtualización y backups"
  },
  {
    id: 4,
    section: "Correo",
    topic: "Protocolos",
    difficulty: "Media-Alta",
    text: "¿Qué protocolo se utiliza normalmente para enviar correo electrónico entre cliente y servidor?",
    options: [
      "IMAP",
      "SMTP",
      "POP3"
    ],
    answer: 1,
    explanation: "SMTP se usa para el envío de correo. IMAP y POP3 se usan para recibir o consultar mensajes.",
    reference: "Administración de servidores de correo"
  },
  {
    id: 5,
    section: "Correo",
    topic: "IMAP vs POP3",
    difficulty: "Alta",
    text: "Un usuario quiere consultar el mismo buzón desde móvil, portátil y webmail manteniendo los mensajes sincronizados. ¿Qué protocolo encaja mejor?",
    options: [
      "POP3",
      "IMAP",
      "SMTP"
    ],
    answer: 1,
    explanation: "IMAP mantiene los mensajes en el servidor y permite sincronización entre varios dispositivos.",
    reference: "Administración de servidores de correo"
  },
  {
    id: 6,
    section: "Modelo OSI",
    topic: "PDU",
    difficulty: "Alta",
    text: "¿Cuál es la PDU de la capa de red del modelo OSI?",
    options: [
      "Trama",
      "Segmento",
      "Paquete"
    ],
    answer: 2,
    explanation: "En OSI: transporte usa segmento, red usa paquete y enlace usa trama.",
    reference: "Modelo OSI"
  },
  {
    id: 7,
    section: "Modelo OSI",
    topic: "Capas",
    difficulty: "Alta",
    text: "¿En qué capa del modelo OSI trabaja principalmente una dirección MAC?",
    options: [
      "Capa 2 - Enlace de datos",
      "Capa 3 - Red",
      "Capa 4 - Transporte"
    ],
    answer: 0,
    explanation: "La dirección MAC pertenece a la capa de enlace de datos.",
    reference: "Modelo OSI"
  },
  {
    id: 8,
    section: "Redes",
    topic: "ARP",
    difficulty: "Alta",
    text: "¿Para qué sirve ARP en una red IPv4?",
    options: [
      "Para traducir nombres de dominio a direcciones IP",
      "Para obtener la dirección MAC asociada a una dirección IP local",
      "Para asignar automáticamente direcciones IP"
    ],
    answer: 1,
    explanation: "ARP resuelve direcciones IP a direcciones MAC dentro de la red local.",
    reference: "Protocolos TCP/IP"
  },
  {
    id: 9,
    section: "Redes",
    topic: "VLAN",
    difficulty: "Alta",
    text: "¿Qué consigue principalmente una VLAN en una red local?",
    options: [
      "Separar lógicamente dominios de broadcast dentro de la misma infraestructura física",
      "Aumentar automáticamente la velocidad de Internet",
      "Convertir direcciones privadas en públicas"
    ],
    answer: 0,
    explanation: "Una VLAN segmenta la red a nivel lógico y separa dominios de broadcast.",
    reference: "Redes locales"
  },
  {
    id: 10,
    section: "TCP/IP",
    topic: "NAT",
    difficulty: "Alta",
    text: "¿Qué función realiza NAT en una red privada?",
    options: [
      "Resuelve nombres DNS internos",
      "Traduce direcciones IP privadas a públicas para salir a Internet",
      "Asigna direcciones MAC a los equipos"
    ],
    answer: 1,
    explanation: "NAT permite que equipos con IP privada accedan a Internet usando una IP pública.",
    reference: "Protocolos TCP/IP"
  },
  {
    id: 11,
    section: "TCP/IP",
    topic: "PAT",
    difficulty: "Alta",
    text: "¿Qué diferencia principalmente a PAT frente a NAT básico?",
    options: [
      "PAT usa también puertos para distinguir varias conexiones con una misma IP pública",
      "PAT solo funciona con IPv6",
      "PAT sustituye completamente a DNS"
    ],
    answer: 0,
    explanation: "PAT traduce IP y puerto, permitiendo que muchos equipos compartan una misma IP pública.",
    reference: "Protocolos TCP/IP"
  },
  {
    id: 12,
    section: "Bases de Datos",
    topic: "Clave primaria",
    difficulty: "Media-Alta",
    text: "¿Qué característica debe cumplir una clave primaria?",
    options: [
      "Puede repetirse, pero no puede ser nula",
      "No puede repetirse ni ser nula",
      "Puede ser nula si existe clave externa"
    ],
    answer: 1,
    explanation: "La clave primaria identifica de forma única cada fila. No admite duplicados ni valores nulos.",
    reference: "Bases de datos relacionales"
  },
  {
    id: 13,
    section: "Bases de Datos",
    topic: "Clave externa",
    difficulty: "Alta",
    text: "¿Qué función tiene una clave externa en una base de datos relacional?",
    options: [
      "Garantizar la integridad referencial entre tablas",
      "Ordenar físicamente los registros en disco",
      "Evitar siempre valores duplicados en una columna"
    ],
    answer: 0,
    explanation: "La clave externa relaciona una tabla con otra y ayuda a mantener la integridad referencial.",
    reference: "Modelo relacional"
  },
  {
    id: 14,
    section: "Bases de Datos",
    topic: "UNIQUE",
    difficulty: "Alta",
    text: "¿Qué diferencia general hay entre una restricción UNIQUE y una PRIMARY KEY?",
    options: [
      "UNIQUE permite controlar valores no repetidos, pero no identifica necesariamente la fila principal de la tabla",
      "UNIQUE solo se usa en bases NoSQL",
      "PRIMARY KEY permite duplicados y UNIQUE no"
    ],
    answer: 0,
    explanation: "UNIQUE impide duplicados, pero la clave primaria es el identificador principal de cada fila.",
    reference: "Diseño lógico relacional"
  },
  {
    id: 15,
    section: "Bases de Datos",
    topic: "SQL JOIN",
    difficulty: "Alta",
    text: "¿Qué devuelve un LEFT JOIN entre tabla A y tabla B?",
    options: [
      "Solo los registros que coinciden en ambas tablas",
      "Todos los registros de A y los coincidentes de B",
      "Todos los registros de B y los coincidentes de A"
    ],
    answer: 1,
    explanation: "LEFT JOIN conserva todas las filas de la tabla izquierda y añade las coincidencias de la derecha.",
    reference: "SQL ANSI"
  },
  {
    id: 16,
    section: "Linux",
    topic: "Permisos",
    difficulty: "Alta",
    text: "¿Qué permisos representa chmod 755?",
    options: [
      "Propietario rwx, grupo r-x, otros r-x",
      "Propietario rw-, grupo rw-, otros r--",
      "Propietario r-x, grupo r-x, otros rwx"
    ],
    answer: 0,
    explanation: "7 = rwx, 5 = r-x, 5 = r-x.",
    reference: "Sistemas Unix y Linux"
  },
  {
    id: 17,
    section: "Linux",
    topic: "Permisos",
    difficulty: "Alta",
    text: "En permisos Linux, ¿qué significa la x en un directorio?",
    options: [
      "Permite ejecutar el directorio como programa",
      "Permite entrar o atravesar el directorio",
      "Permite borrar automáticamente todos sus archivos"
    ],
    answer: 1,
    explanation: "En directorios, el permiso de ejecución permite acceder o atravesar el directorio.",
    reference: "Sistemas Unix y Linux"
  },
  {
    id: 18,
    section: "Linux",
    topic: "Sticky bit",
    difficulty: "Alta",
    text: "¿Para qué sirve normalmente el sticky bit en un directorio compartido?",
    options: [
      "Para que solo el propietario del archivo, el propietario del directorio o root puedan borrar archivos",
      "Para cifrar automáticamente los archivos del directorio",
      "Para impedir que root acceda al directorio"
    ],
    answer: 0,
    explanation: "El sticky bit se usa en directorios como /tmp para evitar que usuarios borren archivos ajenos.",
    reference: "Sistemas Unix y Linux"
  },
  {
    id: 19,
    section: "Hardware",
    topic: "RAID",
    difficulty: "Alta",
    text: "¿Qué característica define mejor RAID 0?",
    options: [
      "Mejora rendimiento mediante striping, pero no ofrece tolerancia a fallos",
      "Duplica los datos en dos discos para tolerancia a fallos",
      "Usa paridad distribuida y tolera el fallo de dos discos"
    ],
    answer: 0,
    explanation: "RAID 0 reparte datos entre discos para rendimiento, pero si falla un disco se pierde el conjunto.",
    reference: "Almacenamiento"
  },
  {
    id: 20,
    section: "Hardware",
    topic: "RAID",
    difficulty: "Alta",
    text: "¿Qué RAID combina mirroring y striping?",
    options: [
      "RAID 0",
      "RAID 1",
      "RAID 10"
    ],
    answer: 2,
    explanation: "RAID 10 combina espejado y distribución de datos.",
    reference: "Almacenamiento"
  },
  {
    id: 21,
    section: "Virtualización",
    topic: "Hipervisor",
    difficulty: "Media-Alta",
    text: "¿Qué es un hipervisor?",
    options: [
      "Un sistema que permite crear y ejecutar máquinas virtuales",
      "Un protocolo de correo electrónico",
      "Un algoritmo de cifrado simétrico"
    ],
    answer: 0,
    explanation: "El hipervisor gestiona la ejecución de máquinas virtuales sobre hardware físico o sobre otro sistema operativo.",
    reference: "Virtualización de sistemas"
  },
  {
    id: 22,
    section: "Virtualización",
    topic: "Contenedores",
    difficulty: "Alta",
    text: "¿Qué diferencia principal hay entre una máquina virtual y un contenedor?",
    options: [
      "El contenedor comparte el kernel del sistema anfitrión, mientras la VM virtualiza un sistema completo",
      "La máquina virtual no puede tener sistema operativo",
      "El contenedor siempre necesita más recursos que una máquina virtual"
    ],
    answer: 0,
    explanation: "Los contenedores son más ligeros porque comparten kernel; las VM virtualizan hardware y sistema operativo completo.",
    reference: "Contenedores y microservicios"
  },
  {
    id: 23,
    section: "Active Directory",
    topic: "Dominio",
    difficulty: "Media-Alta",
    text: "¿Qué función cumple un controlador de dominio en Active Directory?",
    options: [
      "Gestionar autenticación y servicios del dominio",
      "Asignar direcciones IP públicas a Internet",
      "Sustituir al switch de red"
    ],
    answer: 0,
    explanation: "El controlador de dominio autentica usuarios/equipos y gestiona servicios del dominio AD.",
    reference: "Administración de sistemas"
  },
  {
    id: 24,
    section: "Active Directory",
    topic: "GPO",
    difficulty: "Alta",
    text: "¿Para qué se usan las GPO en Active Directory?",
    options: [
      "Para aplicar configuraciones y políticas a usuarios o equipos",
      "Para convertir direcciones IP en direcciones MAC",
      "Para crear copias incrementales"
    ],
    answer: 0,
    explanation: "Las directivas de grupo permiten aplicar configuraciones centralizadas.",
    reference: "Administración de sistemas"
  },
  {
    id: 25,
    section: "DNS",
    topic: "Registros",
    difficulty: "Alta",
    text: "¿Qué tipo de registro DNS se usa normalmente para indicar el servidor de correo de un dominio?",
    options: [
      "A",
      "MX",
      "CNAME"
    ],
    answer: 1,
    explanation: "El registro MX indica qué servidores reciben correo para un dominio.",
    reference: "Servicios de red e Internet"
  },
  {
    id: 26,
    section: "DNS",
    topic: "Registros",
    difficulty: "Alta",
    text: "¿Qué registro DNS crea un alias de un nombre hacia otro nombre?",
    options: [
      "CNAME",
      "MX",
      "PTR"
    ],
    answer: 0,
    explanation: "CNAME permite que un nombre sea alias de otro nombre canónico.",
    reference: "Servicios de red e Internet"
  },
  {
    id: 27,
    section: "TCP/IP",
    topic: "ICMP",
    difficulty: "Media-Alta",
    text: "¿Qué protocolo utiliza normalmente la herramienta ping?",
    options: [
      "TCP",
      "UDP",
      "ICMP"
    ],
    answer: 2,
    explanation: "Ping usa ICMP Echo Request y Echo Reply.",
    reference: "Protocolos TCP/IP"
  },
  {
    id: 28,
    section: "TCP/IP",
    topic: "Puertos",
    difficulty: "Media-Alta",
    text: "¿Qué puerto usa HTTPS por defecto?",
    options: [
      "80",
      "443",
      "25"
    ],
    answer: 1,
    explanation: "HTTPS usa por defecto el puerto TCP 443.",
    reference: "Internet y protocolos"
  },
  {
    id: 29,
    section: "TCP/IP",
    topic: "Puertos",
    difficulty: "Alta",
    text: "¿Qué puerto usa SMTP normalmente para transferencia entre servidores de correo?",
    options: [
      "25",
      "110",
      "143"
    ],
    answer: 0,
    explanation: "SMTP usa tradicionalmente el puerto 25 entre servidores. POP3 usa 110 e IMAP 143.",
    reference: "Correo electrónico"
  },
  {
    id: 30,
    section: "TCP/IP",
    topic: "Puertos",
    difficulty: "Alta",
    text: "¿Qué puerto corresponde a IMAP sin cifrado por defecto?",
    options: [
      "110",
      "143",
      "995"
    ],
    answer: 1,
    explanation: "IMAP usa 143 sin cifrado. POP3 usa 110 y POP3S usa 995.",
    reference: "Correo electrónico"
  },
  {
    id: 31,
    section: "Seguridad",
    topic: "VPN",
    difficulty: "Media-Alta",
    text: "¿Cuál es el objetivo principal de una VPN?",
    options: [
      "Crear un canal seguro de comunicación sobre una red no confiable",
      "Eliminar la necesidad de contraseñas",
      "Aumentar la capacidad física de la memoria RAM"
    ],
    answer: 0,
    explanation: "Una VPN establece un túnel seguro para comunicar redes o usuarios remotos.",
    reference: "Seguridad en redes"
  },
  {
    id: 32,
    section: "Seguridad",
    topic: "Criptografía",
    difficulty: "Alta",
    text: "¿Qué caracteriza a la criptografía asimétrica?",
    options: [
      "Usa una única clave compartida",
      "Usa una pareja de claves: pública y privada",
      "No permite firma digital"
    ],
    answer: 1,
    explanation: "La criptografía asimétrica utiliza clave pública y clave privada.",
    reference: "Seguridad lógica"
  },
  {
    id: 33,
    section: "Seguridad",
    topic: "Hash",
    difficulty: "Alta",
    text: "¿Para qué se usa principalmente una función hash criptográfica?",
    options: [
      "Para verificar integridad mediante una huella de longitud fija",
      "Para comprimir imágenes sin pérdida",
      "Para asignar direcciones IP automáticamente"
    ],
    answer: 0,
    explanation: "Un hash genera una huella que permite comprobar si los datos han cambiado.",
    reference: "Criptografía"
  },
  {
    id: 34,
    section: "Sistemas Operativos",
    topic: "Procesos",
    difficulty: "Media-Alta",
    text: "¿Qué es un proceso en un sistema operativo?",
    options: [
      "Un programa en ejecución con sus recursos asociados",
      "Un archivo comprimido",
      "Una dirección física de red"
    ],
    answer: 0,
    explanation: "Un proceso es una instancia de un programa en ejecución.",
    reference: "Sistemas operativos"
  },
  {
    id: 35,
    section: "Sistemas Operativos",
    topic: "Memoria virtual",
    difficulty: "Alta",
    text: "¿Qué permite la memoria virtual?",
    options: [
      "Usar espacio de almacenamiento como extensión de la memoria principal",
      "Eliminar la necesidad de CPU",
      "Convertir IPv4 en IPv6"
    ],
    answer: 0,
    explanation: "La memoria virtual permite ampliar lógicamente la memoria usando almacenamiento secundario.",
    reference: "Sistemas operativos"
  },
  {
    id: 36,
    section: "Hardware",
    topic: "SSD",
    difficulty: "Media-Alta",
    text: "¿Qué tecnología permite a un SSD comunicarse directamente por PCI Express con alto rendimiento?",
    options: [
      "NVMe",
      "SATA",
      "VGA"
    ],
    answer: 0,
    explanation: "NVMe está diseñado para unidades SSD sobre PCI Express.",
    reference: "Fundamentos de hardware"
  },
  {
    id: 37,
    section: "Hardware",
    topic: "Memoria",
    difficulty: "Alta",
    text: "¿Qué tipo de memoria pierde su contenido al apagarse el equipo?",
    options: [
      "RAM",
      "ROM",
      "SSD"
    ],
    answer: 0,
    explanation: "La RAM es memoria volátil.",
    reference: "Fundamentos de hardware"
  },
  {
    id: 38,
    section: "Redes",
    topic: "Switch",
    difficulty: "Media-Alta",
    text: "¿Qué información utiliza principalmente un switch para reenviar tramas?",
    options: [
      "Direcciones MAC",
      "Nombres DNS",
      "Puertos TCP"
    ],
    answer: 0,
    explanation: "Un switch trabaja principalmente en capa 2 y usa direcciones MAC.",
    reference: "Redes locales"
  },
  {
    id: 39,
    section: "Redes",
    topic: "Router",
    difficulty: "Media-Alta",
    text: "¿Qué información utiliza principalmente un router para reenviar paquetes entre redes?",
    options: [
      "Direcciones IP",
      "Direcciones MAC únicamente",
      "Nombres de usuario"
    ],
    answer: 0,
    explanation: "El router trabaja en capa 3 y enruta paquetes según direcciones IP.",
    reference: "Redes locales"
  },
  {
    id: 40,
    section: "TCP/IP",
    topic: "Máscaras",
    difficulty: "Alta",
    text: "¿Qué máscara corresponde a una red /24?",
    options: [
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.252"
    ],
    answer: 1,
    explanation: "/24 equivale a 255.255.255.0.",
    reference: "Direccionamiento IPv4"
  },
  {
    id: 41,
    section: "TCP/IP",
    topic: "Gateway",
    difficulty: "Media-Alta",
    text: "¿Qué función tiene la puerta de enlace predeterminada?",
    options: [
      "Permitir salir hacia otras redes",
      "Asignar siempre nombres DNS",
      "Cifrar archivos locales"
    ],
    answer: 0,
    explanation: "El gateway se usa para enviar tráfico fuera de la red local.",
    reference: "Direccionamiento TCP/IP"
  },
  {
    id: 42,
    section: "DHCP",
    topic: "DORA",
    difficulty: "Media-Alta",
    text: "¿Cuál es el orden correcto del proceso DHCP DORA?",
    options: [
      "Discover, Offer, Request, Acknowledge",
      "Discover, Open, Resolve, Accept",
      "Detect, Offer, Route, Apply"
    ],
    answer: 0,
    explanation: "DORA significa Discover, Offer, Request, Acknowledge.",
    reference: "Servicios de red"
  },
  {
    id: 43,
    section: "Bases de Datos",
    topic: "HAVING",
    difficulty: "Alta",
    text: "¿Cuándo se utiliza HAVING en SQL?",
    options: [
      "Para filtrar grupos después de GROUP BY",
      "Para filtrar filas antes de agrupar siempre",
      "Para crear claves primarias"
    ],
    answer: 0,
    explanation: "HAVING filtra resultados agregados después de una agrupación.",
    reference: "SQL ANSI"
  },
  {
    id: 44,
    section: "Bases de Datos",
    topic: "Normalización",
    difficulty: "Alta",
    text: "¿Cuál es uno de los objetivos principales de la normalización en bases de datos relacionales?",
    options: [
      "Reducir redundancias y anomalías de actualización",
      "Duplicar datos para acelerar siempre las consultas",
      "Eliminar todas las claves externas"
    ],
    answer: 0,
    explanation: "La normalización organiza los datos para reducir redundancias y problemas de mantenimiento.",
    reference: "Diseño de bases de datos"
  },
  {
    id: 45,
    section: "Programación",
    topic: "Recursividad",
    difficulty: "Media-Alta",
    text: "¿Qué es la recursividad?",
    options: [
      "Una técnica donde una función se llama a sí misma",
      "Una estructura que solo permite datos de texto",
      "Un método exclusivo de bases NoSQL"
    ],
    answer: 0,
    explanation: "La recursividad ocurre cuando una función se invoca a sí misma con una condición de parada.",
    reference: "Lenguajes de programación"
  },
  {
    id: 46,
    section: "Web",
    topic: "HTTP",
    difficulty: "Media-Alta",
    text: "¿Qué método HTTP se usa normalmente para solicitar un recurso sin modificarlo?",
    options: [
      "GET",
      "POST",
      "DELETE"
    ],
    answer: 0,
    explanation: "GET se utiliza para solicitar recursos.",
    reference: "Aplicaciones web"
  },
  {
    id: 47,
    section: "Web",
    topic: "TLS",
    difficulty: "Alta",
    text: "¿Qué aporta TLS en HTTPS?",
    options: [
      "Cifrado y autenticación de la comunicación",
      "Asignación automática de IP",
      "Resolución de nombres de dominio"
    ],
    answer: 0,
    explanation: "HTTPS usa TLS para proteger la comunicación mediante cifrado y autenticación.",
    reference: "HTTP, HTTPS y SSL/TLS"
  },
  {
    id: 48,
    section: "Seguridad",
    topic: "Malware",
    difficulty: "Alta",
    text: "¿Qué caracteriza principalmente al ransomware?",
    options: [
      "Cifra o bloquea datos y exige un rescate",
      "Solo muestra publicidad no deseada",
      "Optimiza automáticamente el sistema"
    ],
    answer: 0,
    explanation: "El ransomware bloquea o cifra información para exigir un pago.",
    reference: "Amenazas y vulnerabilidades"
  },
  {
    id: 49,
    section: "Sistemas",
    topic: "Alta disponibilidad",
    difficulty: "Alta",
    text: "¿Qué busca principalmente un sistema de alta disponibilidad?",
    options: [
      "Reducir el tiempo de indisponibilidad del servicio",
      "Eliminar la necesidad de copias de seguridad",
      "Impedir el uso de redes"
    ],
    answer: 0,
    explanation: "La alta disponibilidad pretende que los servicios sigan operativos o se recuperen rápidamente ante fallos.",
    reference: "Seguridad y alta disponibilidad"
  },
  {
    id: 50,
    section: "Redes",
    topic: "MTU",
    difficulty: "Alta",
    text: "¿Qué indica la MTU en una red?",
    options: [
      "El tamaño máximo de unidad de transmisión en una interfaz o enlace",
      "El número máximo de usuarios de Active Directory",
      "El puerto usado por DNS"
    ],
    answer: 0,
    explanation: "MTU define el tamaño máximo de paquete o trama que puede transmitirse sin fragmentación en un enlace.",
    reference: "Redes y comunicaciones"
  }
];