const questions = [
  {
    id: 1,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "media",
    text: "¿Qué unidad de la CPU se encarga principalmente de realizar operaciones aritméticas y lógicas?",
    options: [
      "La ALU",
      "La memoria caché",
      "El bus de direcciones"
    ],
    answer: 0,
    explanation: "La ALU realiza operaciones aritméticas y lógicas dentro del procesador.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 2,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "media",
    text: "¿Qué memoria es más rápida y está más próxima al procesador?",
    options: [
      "Memoria secundaria",
      "Memoria caché",
      "Memoria óptica"
    ],
    answer: 1,
    explanation: "La caché es una memoria muy rápida situada cerca o dentro del procesador.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 3,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "baja",
    text: "¿Cuál es una ventaja habitual de un SSD frente a un HDD?",
    options: [
      "Tiene platos magnéticos giratorios",
      "Necesita desfragmentación periódica",
      "Ofrece menor tiempo de acceso"
    ],
    answer: 2,
    explanation: "Los SSD no tienen partes mecánicas y suelen ofrecer menor latencia y mayor velocidad de acceso.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 4,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "media",
    text: "¿Qué elemento de la placa base permite conectar tarjetas gráficas modernas de alto rendimiento?",
    options: [
      "PCI Express",
      "SATA",
      "RJ45"
    ],
    answer: 0,
    explanation: "PCI Express es el bus habitual para tarjetas gráficas dedicadas y otros dispositivos de alto rendimiento.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 5,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "media",
    text: "¿Qué función cumple la UEFI en un equipo moderno?",
    options: [
      "Gestionar únicamente las impresoras",
      "Inicializar hardware y arrancar el sistema operativo",
      "Sustituir al sistema operativo"
    ],
    answer: 1,
    explanation: "UEFI inicializa componentes del equipo y permite cargar el gestor de arranque del sistema operativo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 6,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "alta",
    text: "¿Qué diferencia básica existe entre el bus de datos y el bus de direcciones?",
    options: [
      "El bus de datos indica posiciones de memoria y el de direcciones transporta instrucciones",
      "Ambos transportan exclusivamente señales eléctricas de alimentación",
      "El bus de datos transporta información y el de direcciones indica ubicaciones de memoria o dispositivos"
    ],
    answer: 2,
    explanation: "El bus de datos mueve información; el bus de direcciones señala dónde leer o escribir.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 7,
    section: "Anexo A",
    topic: "Fundamentos de hardware",
    difficulty: "baja",
    text: "¿Para qué sirve principalmente un SAI/UPS en un entorno informático?",
    options: [
      "Proporcionar alimentación temporal ante cortes eléctricos",
      "Aumentar la velocidad del procesador",
      "Convertir una red LAN en WAN"
    ],
    answer: 0,
    explanation: "Un SAI permite mantener equipos encendidos durante un tiempo y protegerlos ante problemas eléctricos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 8,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Qué componente del sistema operativo actúa como núcleo y gestiona recursos básicos del sistema?",
    options: [
      "El navegador",
      "El kernel",
      "El hipervisor tipo 2"
    ],
    answer: 1,
    explanation: "El kernel gestiona CPU, memoria, procesos, dispositivos y llamadas del sistema.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 9,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "En Linux, ¿qué permiso permite ejecutar un archivo o acceder a un directorio?",
    options: [
      "w",
      "r",
      "x"
    ],
    answer: 2,
    explanation: "El permiso x permite ejecutar archivos y atravesar directorios.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 10,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Qué representa un proceso en un sistema operativo?",
    options: [
      "Un programa en ejecución",
      "Un archivo comprimido",
      "Un controlador de red físico"
    ],
    answer: 0,
    explanation: "Un proceso es una instancia de un programa que se está ejecutando.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 11,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "alta",
    text: "¿Qué comando de Linux asigna permisos de lectura, escritura y ejecución al propietario, y solo lectura y ejecución al grupo y otros?",
    options: [
      "chmod 600 archivo",
      "chmod 755 archivo",
      "chmod 777 archivo"
    ],
    answer: 1,
    explanation: "755 equivale a rwx para propietario y r-x para grupo y otros.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 12,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "baja",
    text: "¿Qué es un servicio o demonio del sistema?",
    options: [
      "Un proceso en segundo plano que ofrece una función del sistema",
      "Un tipo de monitor",
      "Un protocolo exclusivo de correo"
    ],
    answer: 0,
    explanation: "Los servicios se ejecutan en segundo plano y ofrecen funciones como red, impresión o autenticación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 13,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Qué elemento carga normalmente el sistema operativo después de la fase inicial de arranque?",
    options: [
      "La papelera de reciclaje",
      "El bootloader",
      "El protocolo DNS"
    ],
    answer: 1,
    explanation: "El bootloader o gestor de arranque carga el sistema operativo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 14,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Cuál es una función habitual de un sistema de archivos?",
    options: [
      "Asignar direcciones IP públicas",
      "Organizar cómo se almacenan y recuperan los archivos",
      "Cifrar siempre todo el tráfico web"
    ],
    answer: 1,
    explanation: "El sistema de archivos define la organización, nombres, permisos y acceso a los datos almacenados.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 15,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "alta",
    text: "¿Qué diferencia principal existe entre proceso e hilo?",
    options: [
      "Un hilo pertenece a un proceso y comparte recursos con otros hilos del mismo proceso",
      "Un proceso siempre ocupa menos memoria que un hilo",
      "Un hilo solo existe en sistemas móviles"
    ],
    answer: 0,
    explanation: "Los hilos son unidades de ejecución dentro de un proceso y comparten su espacio de memoria.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 16,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿En qué capa del modelo OSI trabaja principalmente un switch Ethernet no gestionado tradicional?",
    options: [
      "Capa 4, transporte",
      "Capa 2, enlace de datos",
      "Capa 7, aplicación"
    ],
    answer: 1,
    explanation: "Un switch Ethernet reenvía tramas usando direcciones MAC, por lo que trabaja en capa 2.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 17,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo permite resolver una dirección IP a una dirección MAC dentro de una LAN IPv4?",
    options: [
      "ARP",
      "DNS",
      "SMTP"
    ],
    answer: 0,
    explanation: "ARP asocia direcciones IPv4 con direcciones MAC en redes locales.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 18,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente HTTPS?",
    options: [
      "80",
      "25",
      "443"
    ],
    answer: 2,
    explanation: "HTTPS utiliza habitualmente el puerto TCP 443.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 19,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué indica el campo TTL en un paquete IP?",
    options: [
      "El número máximo de saltos antes de descartar el paquete",
      "El tamaño físico del cable",
      "El puerto de destino de una conexión TCP"
    ],
    answer: 0,
    explanation: "TTL limita la vida del paquete en la red y se decrementa en cada salto de router.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 20,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo se usa habitualmente para asignar automáticamente IP, máscara, puerta de enlace y DNS a un cliente?",
    options: [
      "ICMP",
      "DHCP",
      "LDAP"
    ],
    answer: 1,
    explanation: "DHCP permite configurar automáticamente parámetros de red en clientes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 21,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué dispositivo interconecta redes distintas y toma decisiones basadas en direcciones IP?",
    options: [
      "Router",
      "Hub",
      "Patch panel"
    ],
    answer: 0,
    explanation: "El router opera principalmente en capa 3 y enruta paquetes entre redes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 22,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué PDU corresponde a la capa de transporte del modelo OSI?",
    options: [
      "Trama",
      "Segmento",
      "Bit"
    ],
    answer: 1,
    explanation: "En transporte se suele hablar de segmentos TCP o datagramas UDP.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 23,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo se usa normalmente para comprobar conectividad mediante mensajes echo request y echo reply?",
    options: [
      "IMAP",
      "SNMP",
      "ICMP"
    ],
    answer: 2,
    explanation: "Ping utiliza ICMP para comprobar conectividad IP.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 24,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué función realiza NAT en una red?",
    options: [
      "Traduce direcciones IP privadas y públicas",
      "Cifra archivos locales",
      "Convierte nombres DNS en direcciones MAC"
    ],
    answer: 0,
    explanation: "NAT traduce direcciones, normalmente entre una red privada interna y una dirección pública.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 25,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué servicio traduce nombres de dominio como ejemplo.com a direcciones IP?",
    options: [
      "DHCP",
      "DNS",
      "RDP"
    ],
    answer: 1,
    explanation: "DNS resuelve nombres de dominio a direcciones IP.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 26,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué efecto puede tener una MTU mal ajustada en una VPN?",
    options: [
      "Aumentar la frecuencia de refresco del monitor",
      "Impedir la autenticación local de Windows",
      "Provocar fragmentación o problemas de carga de algunas páginas"
    ],
    answer: 2,
    explanation: "Una MTU inadecuada puede causar fragmentación o pérdida aparente de tráfico, especialmente con túneles VPN.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 27,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo de transporte es orientado a conexión y confirma la entrega de datos?",
    options: [
      "TCP",
      "UDP",
      "ARP"
    ],
    answer: 0,
    explanation: "TCP establece conexión, numera segmentos y confirma la recepción.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 28,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente DNS?",
    options: [
      "110",
      "53",
      "3389"
    ],
    answer: 1,
    explanation: "DNS usa normalmente el puerto 53, tanto UDP como TCP según el caso.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 29,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué es una VLAN?",
    options: [
      "Un tipo de disco duro externo",
      "Un sistema de copias incrementales",
      "Una red lógica separada dentro de una infraestructura física compartida"
    ],
    answer: 2,
    explanation: "Una VLAN permite segmentar lógicamente una red de capa 2.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 30,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "baja",
    text: "¿Cuál de las siguientes redes suele cubrir un área geográfica mayor?",
    options: [
      "WAN",
      "LAN",
      "PAN"
    ],
    answer: 0,
    explanation: "Una WAN conecta redes en áreas geográficas amplias.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 31,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué puerto se asocia habitualmente a LDAP sin cifrar?",
    options: [
      "636",
      "389",
      "445"
    ],
    answer: 1,
    explanation: "LDAP utiliza habitualmente TCP/UDP 389; LDAPS usa 636.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 32,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza normalmente para acceso remoto gráfico a Windows?",
    options: [
      "SNMP",
      "POP3",
      "RDP"
    ],
    answer: 2,
    explanation: "RDP usa normalmente el puerto TCP 3389 para escritorio remoto.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 33,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "En el modelo TCP/IP, ¿qué capa agrupa funciones que en OSI pertenecen a sesión, presentación y aplicación?",
    options: [
      "Aplicación",
      "Internet",
      "Acceso a red"
    ],
    answer: 0,
    explanation: "El modelo TCP/IP simplifica varias funciones superiores dentro de la capa de aplicación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 34,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente SSH?",
    options: [
      "23",
      "22",
      "25"
    ],
    answer: 1,
    explanation: "SSH utiliza normalmente TCP 22.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 35,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué equipo inalámbrico permite conectar clientes Wi-Fi a una red cableada?",
    options: [
      "SAI",
      "NAS",
      "Punto de acceso"
    ],
    answer: 2,
    explanation: "Un punto de acceso ofrece conectividad Wi-Fi y la integra en la red local.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 36,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué diferencia básica existe entre amenaza y vulnerabilidad?",
    options: [
      "La amenaza puede causar daño; la vulnerabilidad es una debilidad explotable",
      "Ambas significan exactamente lo mismo",
      "La vulnerabilidad siempre es un virus activo"
    ],
    answer: 0,
    explanation: "La amenaza es el posible agente o evento dañino; la vulnerabilidad es la debilidad que puede ser explotada.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 37,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué mecanismo verifica la integridad de un archivo sin permitir reconstruir el contenido original?",
    options: [
      "Cifrado simétrico reversible",
      "Función hash",
      "Compresión ZIP"
    ],
    answer: 1,
    explanation: "Un hash genera una huella que permite verificar integridad, pero no recuperar el contenido.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 38,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "alta",
    text: "¿Qué aporta una firma digital correctamente implementada?",
    options: [
      "Únicamente compresión del mensaje",
      "Solo anonimato del firmante",
      "Autenticidad, integridad y no repudio"
    ],
    answer: 2,
    explanation: "La firma digital permite verificar quién firma, que no se alteró el contenido y dificulta negar la autoría.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 39,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué tipo de malware cifra archivos y suele exigir un rescate?",
    options: [
      "Ransomware",
      "Adware inocuo",
      "Firmware"
    ],
    answer: 0,
    explanation: "El ransomware cifra o bloquea información para exigir un pago.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 40,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué sistema controla el tráfico de red según reglas permitiendo o bloqueando conexiones?",
    options: [
      "Compilador",
      "Firewall",
      "Desfragmentador"
    ],
    answer: 1,
    explanation: "Un firewall filtra tráfico según reglas de seguridad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 41,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "alta",
    text: "¿Qué diferencia general existe entre IDS e IPS?",
    options: [
      "IDS bloquea siempre y el IPS solo registra",
      "Ambos son protocolos de correo",
      "IDS detecta y alerta; IPS puede prevenir o bloquear tráfico"
    ],
    answer: 2,
    explanation: "Un IDS detecta intrusiones; un IPS además puede actuar bloqueando o previniendo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 42,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué ataque intenta situarse entre dos comunicaciones para interceptar o modificar datos?",
    options: [
      "Man in the Middle",
      "Defragmentation",
      "RAID mirroring"
    ],
    answer: 0,
    explanation: "MitM consiste en interceptar la comunicación entre dos partes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 43,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué proporciona principalmente una VPN de acceso remoto?",
    options: [
      "Aumento automático de memoria RAM",
      "Canal seguro hacia una red a través de Internet",
      "Conversión de SQL a NoSQL"
    ],
    answer: 1,
    explanation: "Una VPN crea un túnel seguro para acceder a recursos de una red remota.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 44,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "media",
    text: "¿Qué es un controlador de dominio en Active Directory?",
    options: [
      "Un servidor que almacena y autentica objetos del dominio",
      "Una impresora compartida",
      "Un cable de red certificado"
    ],
    answer: 0,
    explanation: "El controlador de dominio aloja AD DS y autentica usuarios y equipos del dominio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 45,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "media",
    text: "¿Qué protocolo se asocia a la consulta de directorios en Active Directory?",
    options: [
      "SMTP",
      "LDAP",
      "ICMP"
    ],
    answer: 1,
    explanation: "LDAP se utiliza para consultar y modificar servicios de directorio como Active Directory.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 46,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "alta",
    text: "¿Qué servicio es crítico para localizar controladores de dominio en un entorno Active Directory?",
    options: [
      "POP3",
      "SNMP",
      "DNS"
    ],
    answer: 2,
    explanation: "Active Directory depende fuertemente de DNS para localizar servicios y controladores de dominio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 47,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "media",
    text: "¿Para qué se usan las GPO en Active Directory?",
    options: [
      "Aplicar configuraciones y políticas a usuarios o equipos",
      "Crear direcciones IPv6 públicas",
      "Reparar sectores físicos de un disco"
    ],
    answer: 0,
    explanation: "Las directivas de grupo permiten aplicar configuraciones centralizadas.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 48,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza normalmente para enviar correo electrónico entre servidores?",
    options: [
      "IMAP",
      "SMTP",
      "POP3"
    ],
    answer: 1,
    explanation: "SMTP se utiliza para el envío de correo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 49,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "alta",
    text: "Si en Windows hay permisos NTFS y permisos de recurso compartido, ¿qué permiso efectivo se aplica al acceder por red?",
    options: [
      "Siempre el NTFS más permisivo",
      "Siempre el recurso compartido más permisivo",
      "La combinación más restrictiva entre ambos"
    ],
    answer: 2,
    explanation: "Al acceder por red, se combinan permisos NTFS y de recurso compartido, aplicándose el resultado más restrictivo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 50,
    section: "Anexo A",
    topic: "Active Directory y servicios de red",
    difficulty: "media",
    text: "¿Qué herramienta o sistema se usa habitualmente para registrar, priorizar y seguir incidencias?",
    options: [
      "Sistema de gestión de tickets",
      "Tabla ARP física",
      "Bus PCIe"
    ],
    answer: 0,
    explanation: "Los sistemas de tickets permiten gestionar incidencias y solicitudes de soporte.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 51,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "media",
    text: "¿Qué es un hipervisor tipo 1?",
    options: [
      "Un hipervisor que se ejecuta sobre un sistema operativo de escritorio",
      "Un hipervisor que se ejecuta directamente sobre el hardware",
      "Un protocolo de correo seguro"
    ],
    answer: 1,
    explanation: "El hipervisor tipo 1 o bare-metal se instala directamente sobre el hardware físico.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 52,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "alta",
    text: "¿Por qué un snapshot no debe considerarse una copia de seguridad completa?",
    options: [
      "Porque siempre se guarda en papel",
      "Porque solo sirve para sistemas Linux",
      "Porque depende del entorno original y no sustituye una copia independiente restaurable"
    ],
    answer: 2,
    explanation: "Un snapshot captura un estado, pero no sustituye una estrategia de backup independiente y verificable.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 53,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "media",
    text: "¿Qué copia guarda solo los cambios desde la última copia completa o incremental?",
    options: [
      "Backup incremental",
      "Backup completo",
      "RAID 0"
    ],
    answer: 0,
    explanation: "El incremental copia los cambios desde la última copia realizada, sea completa o incremental.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 54,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "alta",
    text: "¿Qué mide el RTO en continuidad de negocio?",
    options: [
      "La cantidad máxima de datos que se acepta perder",
      "El tiempo objetivo para recuperar el servicio",
      "El tamaño máximo de una VLAN"
    ],
    answer: 1,
    explanation: "RTO es el tiempo objetivo de recuperación de un servicio tras una interrupción.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 55,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "media",
    text: "¿Qué característica define a RAID 1?",
    options: [
      "Divide datos sin redundancia",
      "Usa paridad distribuida entre varios discos",
      "Duplica datos en espejo"
    ],
    answer: 2,
    explanation: "RAID 1 replica los datos en espejo para mejorar disponibilidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 56,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "media",
    text: "¿Qué es un contenedor Docker?",
    options: [
      "Una unidad ligera que empaqueta aplicación y dependencias compartiendo kernel del host",
      "Un disco duro exclusivamente físico",
      "Una política de igualdad"
    ],
    answer: 0,
    explanation: "Los contenedores aíslan aplicaciones y dependencias, compartiendo el kernel del sistema anfitrión.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 57,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "media",
    text: "¿Qué diferencia general existe entre NAS y SAN?",
    options: [
      "NAS ofrece almacenamiento a nivel de archivo; SAN suele ofrecer bloques a servidores",
      "SAN solo funciona con Wi-Fi doméstico",
      "NAS significa Network Antivirus Service"
    ],
    answer: 0,
    explanation: "NAS suele exponer archivos por red; SAN ofrece almacenamiento de bloque a servidores.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 58,
    section: "Anexo A",
    topic: "Virtualización, backups y almacenamiento",
    difficulty: "alta",
    text: "¿Qué ventaja principal aporta RAID 5 frente a RAID 0?",
    options: [
      "RAID 5 elimina la necesidad de discos",
      "RAID 5 ofrece tolerancia a fallo de un disco mediante paridad",
      "RAID 5 solo sirve para memoria RAM"
    ],
    answer: 1,
    explanation: "RAID 5 distribuye paridad y permite soportar el fallo de un disco.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 59,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué identifica de forma única cada registro de una tabla relacional?",
    options: [
      "Clave primaria",
      "Clave externa opcional",
      "Comentario SQL"
    ],
    answer: 0,
    explanation: "La clave primaria identifica de forma única cada fila de una tabla.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 60,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué instrucción SQL pertenece al lenguaje DML?",
    options: [
      "CREATE TABLE",
      "UPDATE",
      "GRANT"
    ],
    answer: 1,
    explanation: "UPDATE modifica datos existentes y pertenece al DML.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 61,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué conjunto contiene instrucciones propias de DDL?",
    options: [
      "SELECT, INSERT, DELETE",
      "COMMIT, ROLLBACK, SAVEPOINT",
      "CREATE, ALTER, DROP"
    ],
    answer: 2,
    explanation: "DDL define o modifica estructuras de base de datos: CREATE, ALTER, DROP.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 62,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué instrucción SQL se usa para consultar datos?",
    options: [
      "SELECT",
      "DROP",
      "REVOKE"
    ],
    answer: 0,
    explanation: "SELECT pertenece a DQL y se utiliza para consultar datos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 63,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué representa una clave foránea?",
    options: [
      "Un índice que siempre cifra datos",
      "Un campo que referencia la clave primaria de otra tabla",
      "Una tabla temporal sin relaciones"
    ],
    answer: 1,
    explanation: "La clave foránea establece relación entre tablas y ayuda a mantener integridad referencial.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 64,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué objetivo tiene la normalización en bases de datos relacionales?",
    options: [
      "Aumentar redundancias innecesarias",
      "Eliminar todas las claves primarias",
      "Reducir redundancia y anomalías de inserción, actualización o borrado"
    ],
    answer: 2,
    explanation: "La normalización organiza los datos para reducir redundancias y anomalías.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 65,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué tipo de base de datos NoSQL es Redis en su uso más característico?",
    options: [
      "Clave-valor",
      "Relacional pura",
      "Documental exclusivamente"
    ],
    answer: 0,
    explanation: "Redis se usa habitualmente como almacén clave-valor en memoria.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 66,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué instrucción permite confirmar definitivamente una transacción?",
    options: [
      "ROLLBACK",
      "COMMIT",
      "DELETE"
    ],
    answer: 1,
    explanation: "COMMIT confirma los cambios de una transacción.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 67,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué es un trigger o disparador en una base de datos?",
    options: [
      "Un cable de alimentación de servidores",
      "Una copia física de seguridad",
      "Código que se ejecuta automáticamente ante ciertos eventos"
    ],
    answer: 2,
    explanation: "Un trigger se dispara ante eventos como INSERT, UPDATE o DELETE.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 68,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué instrucciones pertenecen principalmente al DCL?",
    options: [
      "GRANT y REVOKE",
      "SELECT y WHERE",
      "COMMIT y ROLLBACK"
    ],
    answer: 0,
    explanation: "DCL gestiona permisos: GRANT concede y REVOKE revoca privilegios.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 69,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "En un modelo entidad-relación, ¿qué representa una entidad?",
    options: [
      "Una acción automática de copia",
      "Un objeto o concepto del mundo real sobre el que se almacena información",
      "Un puerto TCP"
    ],
    answer: 1,
    explanation: "Una entidad representa algo relevante del dominio, como Cliente, Pedido o Equipo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 70,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué tipo de NoSQL almacena información principalmente en documentos tipo JSON o BSON?",
    options: [
      "Grafos",
      "Columnar",
      "Documental"
    ],
    answer: 2,
    explanation: "Las bases documentales almacenan documentos estructurados, normalmente similares a JSON.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 71,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué estructura permite repetir instrucciones mientras se cumpla una condición?",
    options: [
      "Bucle",
      "Constante",
      "Etiqueta HTML"
    ],
    answer: 0,
    explanation: "Un bucle repite un bloque de instrucciones según una condición o contador.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 72,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué es la recursividad?",
    options: [
      "La eliminación de variables",
      "Una técnica donde una función se llama a sí misma",
      "Un tipo de conector RJ45"
    ],
    answer: 1,
    explanation: "Una función recursiva resuelve un problema llamándose a sí misma con casos más simples.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 73,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "baja",
    text: "¿Qué lenguaje se utiliza para estructurar el contenido de una página web?",
    options: [
      "SQL",
      "SNMP",
      "HTML"
    ],
    answer: 2,
    explanation: "HTML define la estructura y contenido de las páginas web.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 74,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué describe mejor una arquitectura cliente/servidor?",
    options: [
      "Un cliente solicita servicios y un servidor los proporciona",
      "Todos los equipos tienen obligatoriamente la misma función",
      "Solo se usa en bases de datos NoSQL"
    ],
    answer: 0,
    explanation: "En cliente/servidor, los clientes consumen servicios ofrecidos por servidores.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 75,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué herramienta se usa comúnmente para control de versiones distribuido?",
    options: [
      "BIOS",
      "Git",
      "DHCP"
    ],
    answer: 1,
    explanation: "Git permite controlar versiones de código de forma distribuida.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 76,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "alta",
    text: "¿Qué objetivo tienen las herramientas CASE?",
    options: [
      "Sustituir físicamente los routers",
      "Eliminar las pruebas de software",
      "Apoyar actividades de análisis, diseño, generación de código o documentación"
    ],
    answer: 2,
    explanation: "CASE ayuda en fases del ciclo de vida del software como diseño, documentación y generación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 77,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué significa que una aplicación sea multicapa?",
    options: [
      "Que separa responsabilidades como presentación, lógica y datos",
      "Que solo funciona en una pantalla táctil",
      "Que no puede usar bases de datos"
    ],
    answer: 0,
    explanation: "La arquitectura multicapa separa partes del sistema para mejorar mantenimiento y escalabilidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 78,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué es una API?",
    options: [
      "Una memoria secundaria óptica",
      "Una interfaz que permite a sistemas o programas comunicarse",
      "Una dirección MAC cifrada"
    ],
    answer: 1,
    explanation: "Una API define cómo otros programas pueden interactuar con un servicio o componente.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 79,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "alta",
    text: "¿Qué principio busca la accesibilidad web?",
    options: [
      "Que solo puedan usar la web usuarios expertos",
      "Que la web sea imposible de indexar",
      "Que personas con distintas capacidades puedan acceder y usar los contenidos"
    ],
    answer: 2,
    explanation: "La accesibilidad busca que los servicios digitales sean utilizables por el mayor número de personas posible.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 80,
    section: "Anexo A",
    topic: "Programación, desarrollo web y metodologías",
    difficulty: "media",
    text: "¿Qué estructura de datos permite almacenar una colección ordenada de elementos del mismo tipo?",
    options: [
      "Vector o array",
      "Firewall",
      "Certificado TLS"
    ],
    answer: 0,
    explanation: "Un vector o array almacena elementos accesibles normalmente por índice.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 81,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "Según la normativa de protección de datos, ¿qué es un dato personal?",
    options: [
      "Solo una contraseña cifrada",
      "Cualquier información sobre una persona física identificada o identificable",
      "Únicamente un número de serie de servidor"
    ],
    answer: 1,
    explanation: "Dato personal es cualquier información relativa a una persona física identificada o identificable.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 82,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Quién decide los fines y medios del tratamiento de datos personales?",
    options: [
      "El responsable del tratamiento",
      "El encargado del tratamiento",
      "El proveedor eléctrico"
    ],
    answer: 0,
    explanation: "El responsable determina para qué y cómo se tratan los datos personales.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 83,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué derecho permite solicitar que se borren datos personales cuando proceda?",
    options: [
      "Derecho de portabilidad",
      "Derecho de oposición",
      "Derecho de supresión"
    ],
    answer: 2,
    explanation: "El derecho de supresión permite pedir la eliminación de datos en los supuestos previstos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 84,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "alta",
    text: "¿Qué principio exige tratar solo los datos adecuados, pertinentes y limitados a lo necesario?",
    options: [
      "Minimización de datos",
      "Publicidad universal",
      "Redundancia obligatoria"
    ],
    answer: 0,
    explanation: "La minimización limita el tratamiento a los datos necesarios para la finalidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 85,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué figura trata datos personales por cuenta del responsable?",
    options: [
      "Interesado",
      "Encargado del tratamiento",
      "Administrador de red doméstica"
    ],
    answer: 1,
    explanation: "El encargado trata datos siguiendo instrucciones del responsable.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 86,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué derecho permite recibir datos personales en un formato estructurado y transmitirlos a otro responsable?",
    options: [
      "Derecho de rectificación",
      "Derecho de limitación",
      "Derecho de portabilidad"
    ],
    answer: 2,
    explanation: "La portabilidad facilita recibir y transmitir datos entre responsables cuando procede.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 87,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué es una brecha de seguridad de datos personales?",
    options: [
      "Un incidente que ocasiona destrucción, pérdida, alteración o acceso no autorizado a datos",
      "Una actualización ordinaria del antivirus",
      "Una copia de seguridad correcta"
    ],
    answer: 0,
    explanation: "Una brecha afecta a la seguridad de los datos personales, por ejemplo por acceso no autorizado.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 88,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "alta",
    text: "¿Qué derecho digital reconoce límites al uso de dispositivos digitales fuera del tiempo de trabajo?",
    options: [
      "Derecho a la hiperconexión",
      "Derecho a la desconexión digital",
      "Derecho a la duplicación obligatoria"
    ],
    answer: 1,
    explanation: "La desconexión digital protege el descanso y la intimidad fuera del tiempo laboral.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 89,
    section: "Anexo B",
    topic: "Igualdad efectiva",
    difficulty: "media",
    text: "¿Qué significa discriminación directa por razón de sexo?",
    options: [
      "Tratar peor a una persona por razón de sexo en una situación comparable",
      "Aplicar una medida positiva proporcionada",
      "Garantizar igualdad de oportunidades"
    ],
    answer: 0,
    explanation: "La discriminación directa implica trato menos favorable por razón de sexo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 90,
    section: "Anexo B",
    topic: "Igualdad efectiva",
    difficulty: "media",
    text: "¿Qué es discriminación indirecta?",
    options: [
      "Una agresión física directa",
      "Una disposición aparentemente neutra que pone en desventaja particular a personas de un sexo",
      "Una copia cifrada de datos"
    ],
    answer: 1,
    explanation: "La discriminación indirecta puede surgir de normas aparentemente neutras con impacto desigual.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 91,
    section: "Anexo B",
    topic: "Igualdad efectiva",
    difficulty: "media",
    text: "¿Qué finalidad tienen los planes de igualdad en las empresas?",
    options: [
      "Sustituir los contratos laborales",
      "Eliminar toda promoción profesional",
      "Corregir desigualdades y promover igualdad efectiva entre mujeres y hombres"
    ],
    answer: 2,
    explanation: "Los planes de igualdad establecen medidas para alcanzar igualdad real en la organización.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 92,
    section: "Anexo B",
    topic: "Igualdad efectiva",
    difficulty: "alta",
    text: "¿Qué se entiende por acoso sexual?",
    options: [
      "Cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad de una persona",
      "Únicamente una diferencia salarial",
      "Una acción positiva temporal"
    ],
    answer: 0,
    explanation: "El acoso sexual afecta a la dignidad y crea un entorno intimidatorio, degradante u ofensivo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 93,
    section: "Anexo B",
    topic: "Igualdad efectiva",
    difficulty: "media",
    text: "¿Qué significa transversalidad del principio de igualdad?",
    options: [
      "Aplicar la igualdad únicamente en procesos judiciales",
      "Integrar la igualdad en todas las políticas y actuaciones públicas",
      "Eliminar la prevención de riesgos laborales"
    ],
    answer: 1,
    explanation: "La transversalidad implica incorporar la perspectiva de igualdad de forma general en la acción pública.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 94,
    section: "Anexo B",
    topic: "Igualdad efectiva",
    difficulty: "alta",
    text: "¿Qué son las acciones positivas?",
    options: [
      "Medidas específicas para corregir situaciones patentes de desigualdad",
      "Sanciones penales automáticas",
      "Ataques informáticos autorizados"
    ],
    answer: 0,
    explanation: "Las acciones positivas buscan compensar desigualdades reales de forma razonable y proporcionada.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 95,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Cuál es el objeto principal de la Ley Orgánica 1/2004?",
    options: [
      "Regular únicamente bases de datos públicas",
      "Actuar contra la violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o relaciones similares de afectividad",
      "Regular redes inalámbricas"
    ],
    answer: 1,
    explanation: "La ley se centra en la protección integral frente a la violencia de género en el ámbito definido por la norma.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 96,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Qué formas puede incluir la violencia de género según el enfoque de protección integral?",
    options: [
      "Solo daños materiales a servidores",
      "Solo conflictos laborales sin relación personal",
      "Violencia física, psicológica, amenazas, coacciones o privación arbitraria de libertad"
    ],
    answer: 2,
    explanation: "La protección abarca distintas formas de violencia, no solo la física.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 97,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Qué tipo de medidas contempla la protección integral frente a la violencia de género?",
    options: [
      "Sensibilización, prevención, asistencia y protección",
      "Únicamente actualización de software",
      "Solo medidas fiscales voluntarias"
    ],
    answer: 0,
    explanation: "La ley contempla actuaciones de sensibilización, prevención, asistencia, protección y tutela.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 98,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "alta",
    text: "¿Qué finalidad tiene la tutela institucional en materia de violencia de género?",
    options: [
      "Delegar toda protección exclusivamente en empresas privadas",
      "Coordinar y garantizar la respuesta de los poderes públicos",
      "Sustituir la asistencia social por soporte informático"
    ],
    answer: 1,
    explanation: "La tutela institucional busca una respuesta pública coordinada y efectiva.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 99,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Qué derechos pueden reconocerse a las víctimas de violencia de género?",
    options: [
      "Derechos de información, asistencia social integral y protección, entre otros",
      "Solo derecho a instalar software libre",
      "Solo derecho a cambiar de proveedor de Internet"
    ],
    answer: 0,
    explanation: "La ley reconoce derechos de información, asistencia, protección y apoyo a las víctimas.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 100,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "alta",
    text: "¿Qué enfoque tiene la ley respecto a la publicidad que utilice la imagen de la mujer de forma vejatoria o discriminatoria?",
    options: [
      "La considera irrelevante para la igualdad",
      "La permite siempre si es comercial",
      "Prevé medidas frente a la publicidad ilícita o discriminatoria"
    ],
    answer: 2,
    explanation: "La normativa contempla actuaciones frente a publicidad que vulnere la dignidad o fomente discriminación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 101,
    section: "Supuesto teórico-práctico",
    topic: "Diagnóstico de red",
    difficulty: "media",
    text: "Un usuario tiene IP 169.254.23.10 y no accede a la red corporativa. ¿Cuál es la causa más probable?",
    options: [
      "No ha recibido configuración del servidor DHCP",
      "Tiene demasiada memoria RAM",
      "El certificado TLS del navegador siempre está caducado"
    ],
    answer: 0,
    explanation: "Las direcciones 169.254.x.x son APIPA y suelen aparecer cuando el cliente no recibe IP por DHCP.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 102,
    section: "Supuesto teórico-práctico",
    topic: "Diagnóstico de red",
    difficulty: "media",
    text: "Un equipo puede hacer ping a 8.8.8.8 pero no abre www.aena.es por nombre. ¿Qué revisarías primero?",
    options: [
      "La tarjeta gráfica",
      "La configuración DNS",
      "El tamaño de la memoria caché L1"
    ],
    answer: 1,
    explanation: "Si hay conectividad por IP pero falla por nombre, el problema suele estar en DNS.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 103,
    section: "Supuesto teórico-práctico",
    topic: "Diagnóstico de red",
    difficulty: "alta",
    text: "Un usuario puede resolver nombres y hacer ping, pero no accede a una web interna HTTPS. ¿Qué comprobación es más directa?",
    options: [
      "Puerto TCP 443 y reglas de firewall",
      "Cambiar el monitor",
      "Formatear todos los servidores DNS"
    ],
    answer: 0,
    explanation: "Si DNS y conectividad básica funcionan, conviene revisar el puerto 443, servicio web y firewall.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 104,
    section: "Supuesto teórico-práctico",
    topic: "Active Directory",
    difficulty: "alta",
    text: "Un equipo unido a dominio no encuentra controladores de dominio. La IP es correcta, pero usa DNS público. ¿Qué ajuste es prioritario?",
    options: [
      "Cambiar el fondo de pantalla",
      "Configurar como DNS el servidor DNS del dominio",
      "Desactivar todos los servicios de Windows"
    ],
    answer: 1,
    explanation: "Active Directory necesita DNS interno para localizar controladores y servicios del dominio.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 105,
    section: "Supuesto teórico-práctico",
    topic: "Permisos",
    difficulty: "alta",
    text: "Un usuario tiene permisos NTFS de lectura, pero en el recurso compartido tiene cambio. Accede por red. ¿Qué permiso efectivo tendrá como máximo?",
    options: [
      "Lectura",
      "Cambio",
      "Control total"
    ],
    answer: 0,
    explanation: "Se aplica la combinación más restrictiva entre NTFS y permisos de recurso compartido.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 106,
    section: "Supuesto teórico-práctico",
    topic: "Correo electrónico",
    difficulty: "media",
    text: "Un usuario recibe correo correctamente, pero no puede enviar. ¿Qué protocolo o puerto revisarías primero?",
    options: [
      "POP3/110",
      "IMAP/143",
      "SMTP/587 o 25"
    ],
    answer: 2,
    explanation: "El envío de correo se realiza con SMTP; los clientes suelen usar 587 con autenticación.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 107,
    section: "Supuesto teórico-práctico",
    topic: "Redes VLAN",
    difficulty: "alta",
    text: "Un puesto conectado a una roseta recibe IP de otra subred y no accede a sus recursos habituales. ¿Qué revisarías en el switch?",
    options: [
      "La VLAN asignada al puerto",
      "La resolución de pantalla",
      "El tipo de teclado"
    ],
    answer: 0,
    explanation: "Una VLAN incorrecta puede situar al equipo en otra red lógica.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 108,
    section: "Supuesto teórico-práctico",
    topic: "Gateway",
    difficulty: "media",
    text: "Un equipo accede a recursos de su misma LAN pero no a Internet ni a otras subredes. IP y máscara parecen correctas. ¿Qué revisarías?",
    options: [
      "La puerta de enlace predeterminada",
      "La versión de Microsoft Word",
      "El tamaño del ratón"
    ],
    answer: 0,
    explanation: "La puerta de enlace permite salir de la red local hacia otras redes.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 109,
    section: "Supuesto teórico-práctico",
    topic: "Seguridad TLS",
    difficulty: "media",
    text: "Al entrar en una aplicación interna aparece aviso de certificado caducado. ¿Qué elemento debe corregirse?",
    options: [
      "La contraseña del usuario necesariamente",
      "El certificado TLS del servicio",
      "El cable VGA"
    ],
    answer: 1,
    explanation: "Un certificado caducado debe renovarse y configurarse correctamente en el servicio.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 110,
    section: "Supuesto teórico-práctico",
    topic: "Backups",
    difficulty: "alta",
    text: "Tras un borrado accidental, se descubre que las copias existen pero nunca se han probado. ¿Qué fallo de procedimiento hay?",
    options: [
      "No verificar restauraciones periódicamente",
      "Usar demasiadas VLAN",
      "Tener una IP privada"
    ],
    answer: 0,
    explanation: "Una copia no verificada puede no ser útil; se deben probar restauraciones.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 111,
    section: "Supuesto teórico-práctico",
    topic: "Virtualización",
    difficulty: "media",
    text: "Antes de aplicar un parche en una VM se crea un snapshot. ¿Cuál es la interpretación correcta?",
    options: [
      "Es una ayuda para volver atrás, pero no sustituye al backup",
      "Es siempre una copia externa inmutable",
      "Convierte la VM en contenedor"
    ],
    answer: 0,
    explanation: "El snapshot facilita rollback, pero no reemplaza una copia de seguridad independiente.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 112,
    section: "Supuesto teórico-práctico",
    topic: "Ransomware",
    difficulty: "alta",
    text: "Una organización quiere mejorar su recuperación frente a ransomware. ¿Qué medida es más adecuada?",
    options: [
      "Eliminar todas las copias históricas",
      "Mantener copias offline o inmutables y probar restauración",
      "Usar siempre RAID 0"
    ],
    answer: 1,
    explanation: "Las copias offline o inmutables reducen el impacto del ransomware y deben probarse.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 113,
    section: "Supuesto teórico-práctico",
    topic: "DHCP",
    difficulty: "alta",
    text: "Clientes de una VLAN remota no reciben IP, pero el servidor DHCP funciona en otra red. ¿Qué elemento podría faltar?",
    options: [
      "DHCP Relay o ip helper",
      "Un cable HDMI",
      "Un trigger SQL"
    ],
    answer: 0,
    explanation: "DHCP usa broadcast; para cruzar routers se necesita relay o ip helper.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 114,
    section: "Supuesto teórico-práctico",
    topic: "RDP",
    difficulty: "media",
    text: "No se puede conectar por escritorio remoto a un servidor Windows. El servidor responde a ping. ¿Qué comprobarías?",
    options: [
      "Puerto 3389, servicio RDP y firewall",
      "Puerto 53 exclusivamente",
      "La impresora predeterminada del cliente"
    ],
    answer: 0,
    explanation: "RDP requiere servicio activo y puerto 3389 permitido.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 115,
    section: "Supuesto teórico-práctico",
    topic: "RAID",
    difficulty: "media",
    text: "Un RAID 1 aparece degradado por fallo de un disco. ¿Qué actuación es correcta?",
    options: [
      "Sustituir el disco fallido y reconstruir el espejo",
      "Borrar el disco sano",
      "Cambiar la VLAN del servidor"
    ],
    answer: 0,
    explanation: "En RAID 1 se sustituye el disco defectuoso y se reconstruye la réplica.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 116,
    section: "Supuesto teórico-práctico",
    topic: "OSI",
    difficulty: "alta",
    text: "Un técnico diagnostica desde cableado físico hasta aplicación web siguiendo un orden por capas. ¿Qué modelo está usando como guía?",
    options: [
      "Modelo entidad-relación",
      "Modelo OSI",
      "Modelo de igualdad efectiva"
    ],
    answer: 1,
    explanation: "El modelo OSI es útil para diagnóstico por capas desde física hasta aplicación.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 117,
    section: "Supuesto teórico-práctico",
    topic: "Contenedores",
    difficulty: "media",
    text: "Una aplicación se despliega con sus dependencias de forma ligera y portable, compartiendo kernel con el host. ¿Qué tecnología encaja mejor?",
    options: [
      "Contenedor",
      "RAID 5",
      "BIOS heredada"
    ],
    answer: 0,
    explanation: "Los contenedores empaquetan aplicación y dependencias con menor sobrecarga que una VM completa.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 118,
    section: "Supuesto teórico-práctico",
    topic: "DNS",
    difficulty: "media",
    text: "Tras cambiar la IP de un servidor interno, algunos equipos siguen resolviendo la IP antigua. ¿Qué causa es probable?",
    options: [
      "Caché DNS o registros no actualizados",
      "Fallo de la ALU",
      "Ausencia de RAID 0"
    ],
    answer: 0,
    explanation: "La caché DNS o registros antiguos pueden mantener resoluciones desactualizadas.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 119,
    section: "Supuesto teórico-práctico",
    topic: "GPO",
    difficulty: "alta",
    text: "Una GPO no se aplica a un usuario concreto. ¿Qué comprobación es más adecuada?",
    options: [
      "OU donde está el usuario, filtrado de seguridad y herencia",
      "Tipo de ratón conectado",
      "Número de núcleos de la CPU"
    ],
    answer: 0,
    explanation: "Las GPO dependen de vinculación a OU, filtrado, herencia y permisos.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 120,
    section: "Supuesto teórico-práctico",
    topic: "Alta disponibilidad",
    difficulty: "media",
    text: "Una aplicación crítica se reparte entre varios servidores para distribuir carga y mejorar disponibilidad. ¿Qué componente suele usarse?",
    options: [
      "Load balancer",
      "Desfragmentador",
      "Puerto VGA"
    ],
    answer: 0,
    explanation: "Un balanceador distribuye tráfico entre varios servidores y puede mejorar disponibilidad.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 121,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: default gateway.",
    options: [
      "Puerta de enlace predeterminada",
      "Copia de seguridad completa",
      "Tarjeta gráfica dedicada"
    ],
    answer: 0,
    explanation: "Default gateway se traduce como puerta de enlace predeterminada.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 122,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: account locked out.",
    options: [
      "Cuenta eliminada",
      "Cuenta bloqueada",
      "Cuenta compartida"
    ],
    answer: 1,
    explanation: "Account locked out significa cuenta bloqueada.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 123,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: packet loss.",
    options: [
      "Pérdida de paquetes",
      "Puerto abierto",
      "Copia diferencial"
    ],
    answer: 0,
    explanation: "Packet loss significa pérdida de paquetes.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 124,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Traduce: root cause.",
    options: [
      "Causa raíz",
      "Usuario invitado",
      "Cable cruzado"
    ],
    answer: 0,
    explanation: "Root cause es la causa raíz de un incidente o problema.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 125,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: credentials.",
    options: [
      "Controladores",
      "Credenciales",
      "Conmutadores"
    ],
    answer: 1,
    explanation: "Credentials se traduce como credenciales.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 126,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: read-only access.",
    options: [
      "Acceso de solo lectura",
      "Acceso denegado por red",
      "Acceso físico al CPD"
    ],
    answer: 0,
    explanation: "Read-only access significa acceso de solo lectura.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 127,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Traduce: deprecated feature.",
    options: [
      "Función recomendada",
      "Función obsoleta o desaconsejada",
      "Función cifrada"
    ],
    answer: 1,
    explanation: "Deprecated significa obsoleto o desaconsejado para uso futuro.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 128,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: network interface card.",
    options: [
      "Tarjeta de interfaz de red",
      "Tarjeta de memoria externa",
      "Controlador de dominio"
    ],
    answer: 0,
    explanation: "Network interface card es una tarjeta de interfaz de red o NIC.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 129,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: firewall rule.",
    options: [
      "Regla de cortafuegos",
      "Regla de teclado",
      "Regla de normalización"
    ],
    answer: 0,
    explanation: "Firewall rule se traduce como regla de cortafuegos o firewall.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 130,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Traduce: high availability.",
    options: [
      "Alta disponibilidad",
      "Alta resolución",
      "Alta latencia"
    ],
    answer: 0,
    explanation: "High availability significa alta disponibilidad.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 131,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: restore from backup.",
    options: [
      "Restaurar desde copia de seguridad",
      "Enviar correo masivo",
      "Reiniciar el router físico"
    ],
    answer: 0,
    explanation: "Restore from backup significa restaurar desde una copia de seguridad.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 132,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: vulnerability.",
    options: [
      "Amenaza",
      "Vulnerabilidad",
      "Disponibilidad"
    ],
    answer: 1,
    explanation: "Vulnerability se traduce como vulnerabilidad.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 133,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Traduce: rollback.",
    options: [
      "Restauración o vuelta atrás",
      "Ataque de fuerza bruta",
      "Cableado estructurado"
    ],
    answer: 0,
    explanation: "Rollback es una reversión o vuelta atrás a un estado anterior.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 134,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: shared folder.",
    options: [
      "Carpeta compartida",
      "Archivo temporal",
      "Servidor apagado"
    ],
    answer: 0,
    explanation: "Shared folder significa carpeta compartida.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 135,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: authentication.",
    options: [
      "Autorización",
      "Autenticación",
      "Actualización"
    ],
    answer: 1,
    explanation: "Authentication es autenticación: comprobar identidad.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 136,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Traduce: storage array.",
    options: [
      "Conjunto o cabina de almacenamiento",
      "Matriz de permisos de usuario",
      "Cable de consola"
    ],
    answer: 0,
    explanation: "Storage array se refiere a un conjunto o cabina de almacenamiento.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 137,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: outage.",
    options: [
      "Interrupción del servicio",
      "Actualización menor",
      "Entrada de teclado"
    ],
    answer: 0,
    explanation: "Outage es una interrupción o caída de servicio.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 138,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: endpoint.",
    options: [
      "Punto final o dispositivo terminal",
      "Punto de restauración obligatorio",
      "Puerto de impresora"
    ],
    answer: 0,
    explanation: "Endpoint suele referirse a un dispositivo final o punto terminal de la red.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 139,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Traduce: troubleshooting.",
    options: [
      "Resolución de problemas",
      "Diseño gráfico",
      "Normalización de bases"
    ],
    answer: 0,
    explanation: "Troubleshooting significa diagnóstico y resolución de problemas.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 140,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Traduce: load balancer.",
    options: [
      "Balanceador de carga",
      "Cargador eléctrico",
      "Copiador de discos"
    ],
    answer: 0,
    explanation: "Load balancer es un balanceador de carga.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 141,
    section: "Inglés escrito general",
    topic: "Grammar - Present simple",
    difficulty: "A2",
    text: "Choose the correct sentence.",
    options: [
      "She work in an office.",
      "She works in an office.",
      "She working in an office.",
      "She are work in an office."
    ],
    answer: 1,
    explanation: "With he/she/it in present simple, the verb usually takes -s.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 142,
    section: "Inglés escrito general",
    topic: "Grammar - Articles",
    difficulty: "A2",
    text: "Complete: I have ___ appointment at ten o'clock.",
    options: [
      "a",
      "an",
      "the",
      "zero article"
    ],
    answer: 1,
    explanation: "Appointment starts with a vowel sound, so we use 'an'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 143,
    section: "Inglés escrito general",
    topic: "Vocabulary - Work",
    difficulty: "A2",
    text: "What is the opposite of 'early'?",
    options: [
      "Late",
      "Often",
      "Near",
      "Long"
    ],
    answer: 0,
    explanation: "The opposite of early is late.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 144,
    section: "Inglés escrito general",
    topic: "Grammar - Prepositions",
    difficulty: "A2",
    text: "Complete: The meeting is ___ Monday.",
    options: [
      "at",
      "in",
      "on",
      "to"
    ],
    answer: 2,
    explanation: "We use 'on' with days of the week.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 145,
    section: "Inglés escrito general",
    topic: "Grammar - Present continuous",
    difficulty: "A2",
    text: "Complete: They ___ having lunch now.",
    options: [
      "is",
      "are",
      "am",
      "be"
    ],
    answer: 1,
    explanation: "With 'they', the correct form is 'are'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 146,
    section: "Inglés escrito general",
    topic: "Vocabulary - Travel",
    difficulty: "A2",
    text: "Where do passengers usually wait before boarding a plane?",
    options: [
      "At the gate",
      "In the kitchen",
      "Under the desk",
      "On the printer"
    ],
    answer: 0,
    explanation: "Passengers normally wait at the gate before boarding.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 147,
    section: "Inglés escrito general",
    topic: "Grammar - Past simple",
    difficulty: "A2",
    text: "Complete: Yesterday, we ___ a new laptop.",
    options: [
      "buy",
      "buys",
      "bought",
      "buying"
    ],
    answer: 2,
    explanation: "The past simple of buy is bought.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 148,
    section: "Inglés escrito general",
    topic: "Grammar - Questions",
    difficulty: "A2",
    text: "Choose the correct question.",
    options: [
      "Where you live?",
      "Where do you live?",
      "Where does you live?",
      "Where are live you?"
    ],
    answer: 1,
    explanation: "Present simple questions with 'you' use 'do'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 149,
    section: "Inglés escrito general",
    topic: "Vocabulary - Office",
    difficulty: "A2",
    text: "Which object is used to write on paper?",
    options: [
      "A keyboard",
      "A pencil",
      "A router",
      "A screen"
    ],
    answer: 1,
    explanation: "A pencil is used to write on paper.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 150,
    section: "Inglés escrito general",
    topic: "Grammar - There is / There are",
    difficulty: "A2",
    text: "Complete: ___ three chairs in the room.",
    options: [
      "There is",
      "There are",
      "There am",
      "There be"
    ],
    answer: 1,
    explanation: "With plural nouns, use 'there are'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 151,
    section: "Inglés escrito general",
    topic: "Grammar - Can",
    difficulty: "A2",
    text: "Complete: I ___ speak English and Spanish.",
    options: [
      "can",
      "cans",
      "am can",
      "to can"
    ],
    answer: 0,
    explanation: "After can, the verb is used in base form.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 152,
    section: "Inglés escrito general",
    topic: "Grammar - Possessives",
    difficulty: "A2",
    text: "Complete: This is Ana. ___ phone is new.",
    options: [
      "His",
      "Her",
      "Their",
      "Our"
    ],
    answer: 1,
    explanation: "For Ana, the possessive adjective is 'her'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 153,
    section: "Inglés escrito general",
    topic: "Vocabulary - Health",
    difficulty: "A2",
    text: "If you are ill, you may need to see a ___.",
    options: [
      "doctor",
      "printer",
      "ticket",
      "window"
    ],
    answer: 0,
    explanation: "A doctor helps people who are ill.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 154,
    section: "Inglés escrito general",
    topic: "Grammar - Countable nouns",
    difficulty: "A2",
    text: "Complete: There are ___ emails in my inbox.",
    options: [
      "much",
      "many",
      "any much",
      "a little"
    ],
    answer: 1,
    explanation: "We use many with countable plural nouns.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 155,
    section: "Inglés escrito general",
    topic: "Reading - Notice",
    difficulty: "A2",
    text: "Notice: 'Please keep the door closed.' What should you do?",
    options: [
      "Open the door and leave it open",
      "Close the door",
      "Paint the door",
      "Remove the door"
    ],
    answer: 1,
    explanation: "The notice asks people to keep the door closed.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 156,
    section: "Inglés escrito general",
    topic: "Grammar - Present perfect",
    difficulty: "B1",
    text: "Complete: I ___ this report three times today.",
    options: [
      "read",
      "have read",
      "am read",
      "was read"
    ],
    answer: 1,
    explanation: "Present perfect is used with experiences or actions connected to the present, such as today.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 157,
    section: "Inglés escrito general",
    topic: "Grammar - Future",
    difficulty: "B1",
    text: "Complete: We ___ the client tomorrow morning.",
    options: [
      "are going to call",
      "called",
      "calling",
      "have called yesterday"
    ],
    answer: 0,
    explanation: "Are going to call expresses a future plan.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 158,
    section: "Inglés escrito general",
    topic: "Grammar - Comparatives",
    difficulty: "B1",
    text: "Complete: This solution is ___ than the previous one.",
    options: [
      "efficient",
      "more efficient",
      "most efficient",
      "efficiency"
    ],
    answer: 1,
    explanation: "For longer adjectives, comparatives use 'more'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 159,
    section: "Inglés escrito general",
    topic: "Grammar - Modals",
    difficulty: "B1",
    text: "Complete: You ___ wear your ID card inside the building. It is mandatory.",
    options: [
      "might",
      "must",
      "would",
      "can to"
    ],
    answer: 1,
    explanation: "Must expresses obligation.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 160,
    section: "Inglés escrito general",
    topic: "Vocabulary - Communication",
    difficulty: "B1",
    text: "What does 'reply' mean in an email context?",
    options: [
      "Delete a message",
      "Answer a message",
      "Print a message",
      "Ignore a message"
    ],
    answer: 1,
    explanation: "To reply means to answer.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 161,
    section: "Inglés escrito general",
    topic: "Grammar - Conditionals",
    difficulty: "B1",
    text: "Complete: If it rains, we ___ the event indoors.",
    options: [
      "hold",
      "held",
      "will hold",
      "have held yesterday"
    ],
    answer: 2,
    explanation: "First conditional uses if + present, will + base verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 162,
    section: "Inglés escrito general",
    topic: "Grammar - Prepositions",
    difficulty: "B1",
    text: "Complete: She is responsible ___ customer support.",
    options: [
      "of",
      "for",
      "to",
      "with"
    ],
    answer: 1,
    explanation: "The correct collocation is responsible for.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 163,
    section: "Inglés escrito general",
    topic: "Reading - Email",
    difficulty: "B1",
    text: "Email: 'Could you send me the invoice by Friday?' What is being requested?",
    options: [
      "A meeting on Friday",
      "The invoice before or on Friday",
      "A password reset",
      "A holiday request"
    ],
    answer: 1,
    explanation: "The sender asks to receive the invoice by Friday.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 164,
    section: "Inglés escrito general",
    topic: "Grammar - Passive voice",
    difficulty: "B1",
    text: "Choose the correct passive sentence.",
    options: [
      "The system updated yesterday.",
      "The system was updated yesterday.",
      "The system is update yesterday.",
      "The system updating yesterday."
    ],
    answer: 1,
    explanation: "Passive past simple uses was/were + past participle.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 165,
    section: "Inglés escrito general",
    topic: "Vocabulary - Problems",
    difficulty: "B1",
    text: "Which word means 'a problem that stops something working correctly'?",
    options: [
      "Issue",
      "Benefit",
      "Discount",
      "Journey"
    ],
    answer: 0,
    explanation: "Issue can mean problem.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 166,
    section: "Inglés escrito general",
    topic: "Grammar - Since / For",
    difficulty: "B1",
    text: "Complete: I have worked here ___ 2022.",
    options: [
      "for",
      "since",
      "during",
      "from ago"
    ],
    answer: 1,
    explanation: "Since is used with a starting point in time.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 167,
    section: "Inglés escrito general",
    topic: "Grammar - Advice",
    difficulty: "B1",
    text: "Complete: You ___ check the address before sending the package.",
    options: [
      "should",
      "must to",
      "have should",
      "can to"
    ],
    answer: 0,
    explanation: "Should is used to give advice.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 168,
    section: "Inglés escrito general",
    topic: "Vocabulary - Services",
    difficulty: "B1",
    text: "A 'refund' is money that is ___.",
    options: [
      "borrowed from a bank",
      "paid back to a customer",
      "lost in a file",
      "printed on paper"
    ],
    answer: 1,
    explanation: "A refund is money returned to a customer.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 169,
    section: "Inglés escrito general",
    topic: "Grammar - Relative clauses",
    difficulty: "B1",
    text: "Complete: The person ___ called you is waiting outside.",
    options: [
      "which",
      "who",
      "where",
      "when"
    ],
    answer: 1,
    explanation: "Who refers to people.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 170,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "B1",
    text: "Choose the correct sentence.",
    options: [
      "I am agree with you.",
      "I agree with you.",
      "I agreeing with you.",
      "I do agree to you yesterday."
    ],
    answer: 1,
    explanation: "Agree is a normal verb and does not need 'am'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 171,
    section: "Inglés escrito general",
    topic: "Grammar - Present perfect vs past simple",
    difficulty: "B2",
    text: "Complete: I ___ the file yesterday, but I haven't reviewed it yet.",
    options: [
      "downloaded",
      "have downloaded",
      "download",
      "am downloading"
    ],
    answer: 0,
    explanation: "Yesterday requires past simple: downloaded.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 172,
    section: "Inglés escrito general",
    topic: "Grammar - Connectors",
    difficulty: "B2",
    text: "Complete: The service was expensive; ___, the quality was excellent.",
    options: [
      "however",
      "because",
      "although",
      "despite"
    ],
    answer: 0,
    explanation: "However contrasts two independent clauses.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 173,
    section: "Inglés escrito general",
    topic: "Grammar - Conditionals",
    difficulty: "B2",
    text: "Complete: If I had more time, I ___ a longer report.",
    options: [
      "write",
      "will write",
      "would write",
      "wrote"
    ],
    answer: 2,
    explanation: "Second conditional uses if + past simple, would + base verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 174,
    section: "Inglés escrito general",
    topic: "Vocabulary - Work",
    difficulty: "B2",
    text: "What does 'deadline' mean?",
    options: [
      "The final time or date to complete something",
      "A type of office chair",
      "A temporary password",
      "A person who works remotely"
    ],
    answer: 0,
    explanation: "A deadline is the latest time or date for completing a task.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 175,
    section: "Inglés escrito general",
    topic: "Grammar - Reported speech",
    difficulty: "B2",
    text: "Direct: 'I am busy.' Reported: He said that he ___ busy.",
    options: [
      "is",
      "was",
      "were",
      "be"
    ],
    answer: 1,
    explanation: "In reported speech, am usually changes to was.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 176,
    section: "Inglés escrito general",
    topic: "Reading - Corporate message",
    difficulty: "B2",
    text: "Message: 'Due to maintenance, the platform will be unavailable from 22:00 to 23:00.' What does it mean?",
    options: [
      "The platform will be faster all day",
      "The platform cannot be used during that hour",
      "The platform will change its language",
      "The platform will delete all accounts"
    ],
    answer: 1,
    explanation: "Unavailable means it cannot be used during the stated time.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 177,
    section: "Inglés escrito general",
    topic: "Grammar - Passive voice",
    difficulty: "B2",
    text: "Complete: The documents ___ before the meeting starts.",
    options: [
      "must send",
      "must be sent",
      "must sent",
      "must be send"
    ],
    answer: 1,
    explanation: "Passive with modal: must be + past participle.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 178,
    section: "Inglés escrito general",
    topic: "Vocabulary - Synonyms",
    difficulty: "B2",
    text: "Which word is closest in meaning to 'purchase'?",
    options: [
      "Buy",
      "Break",
      "Borrow without returning",
      "Cancel"
    ],
    answer: 0,
    explanation: "Purchase means buy.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 179,
    section: "Inglés escrito general",
    topic: "Grammar - Quantifiers",
    difficulty: "B2",
    text: "Complete: We have very ___ information about the incident.",
    options: [
      "few",
      "little",
      "many",
      "several"
    ],
    answer: 1,
    explanation: "Information is uncountable, so use little.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 180,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "B2",
    text: "Choose the most natural sentence.",
    options: [
      "Despite the delay, the team completed the task.",
      "Despite of the delay, the team completed the task.",
      "Although the delay, the team completed the task.",
      "Because the delay, the team completed the task."
    ],
    answer: 0,
    explanation: "Despite is followed directly by a noun phrase.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 181,
    section: "Inglés escrito general",
    topic: "Grammar - Modal deduction",
    difficulty: "B2",
    text: "Complete: The lights are off and nobody answers. They ___ be at home.",
    options: [
      "must",
      "can't",
      "should to",
      "have to not"
    ],
    answer: 1,
    explanation: "Can't is used for negative deduction when something seems impossible.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 182,
    section: "Inglés escrito general",
    topic: "Vocabulary - Technology",
    difficulty: "B2",
    text: "What does 'outdated' mean?",
    options: [
      "No longer current or modern",
      "Recently installed",
      "Very expensive",
      "Physically heavy"
    ],
    answer: 0,
    explanation: "Outdated means no longer current or up to date.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 183,
    section: "Inglés escrito general",
    topic: "Grammar - Relative clauses",
    difficulty: "B2",
    text: "Complete: The airport, ___ opened in 1998, has expanded recently.",
    options: [
      "who",
      "which",
      "where",
      "whose"
    ],
    answer: 1,
    explanation: "Which refers to things or places in non-defining relative clauses.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 184,
    section: "Inglés escrito general",
    topic: "Reading - Instructions",
    difficulty: "B2",
    text: "Instruction: 'Back up your files before installing the update.' What should you do first?",
    options: [
      "Install the update immediately",
      "Delete your files",
      "Make a copy of your files",
      "Turn off the screen"
    ],
    answer: 2,
    explanation: "Back up means make a copy for safety.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 185,
    section: "Inglés escrito general",
    topic: "Grammar - Verb patterns",
    difficulty: "B2",
    text: "Complete: She suggested ___ the schedule.",
    options: [
      "change",
      "to change",
      "changing",
      "changed"
    ],
    answer: 2,
    explanation: "Suggest is followed by a gerund: suggested changing.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 186,
    section: "Inglés escrito general",
    topic: "Grammar - Inversion",
    difficulty: "C1",
    text: "Choose the correct sentence.",
    options: [
      "Rarely have I seen such a clear explanation.",
      "Rarely I have seen such a clear explanation.",
      "Rarely have seen I such a clear explanation.",
      "Rarely I seen have such a clear explanation."
    ],
    answer: 0,
    explanation: "Negative or limiting adverbs at the beginning can trigger inversion.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 187,
    section: "Inglés escrito general",
    topic: "Grammar - Mixed conditionals",
    difficulty: "C1",
    text: "Complete: If he had taken the earlier train, he ___ here now.",
    options: [
      "will be",
      "would be",
      "is",
      "was"
    ],
    answer: 1,
    explanation: "This mixed conditional links a past condition to a present result.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 188,
    section: "Inglés escrito general",
    topic: "Vocabulary - Formal English",
    difficulty: "C1",
    text: "Which option is the most formal way to say 'ask for more information'?",
    options: [
      "Request further information",
      "Grab more info",
      "Get stuff about it",
      "Ask more things"
    ],
    answer: 0,
    explanation: "Request further information is formal and appropriate in professional writing.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 189,
    section: "Inglés escrito general",
    topic: "Grammar - Linking words",
    difficulty: "C1",
    text: "Complete: The proposal is ambitious; ___, it remains financially realistic.",
    options: [
      "nevertheless",
      "because of",
      "unless",
      "whereas of"
    ],
    answer: 0,
    explanation: "Nevertheless introduces contrast between two clauses.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 190,
    section: "Inglés escrito general",
    topic: "Reading - Email tone",
    difficulty: "C1",
    text: "Email: 'I would appreciate it if you could confirm receipt at your earliest convenience.' What is the tone?",
    options: [
      "Rude and informal",
      "Polite and formal",
      "Angry and threatening",
      "Humorous and casual"
    ],
    answer: 1,
    explanation: "The wording is polite and formal.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 191,
    section: "Inglés escrito general",
    topic: "Grammar - Cleft sentences",
    difficulty: "C1",
    text: "Choose the correct emphasis structure.",
    options: [
      "What we need is a faster response.",
      "What need we is a faster response.",
      "What we needs is a faster response.",
      "What is we need a faster response."
    ],
    answer: 0,
    explanation: "The cleft structure 'What we need is...' is correct.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 192,
    section: "Inglés escrito general",
    topic: "Vocabulary - Nuance",
    difficulty: "C1",
    text: "Which word best means 'to make a problem less serious'?",
    options: [
      "Aggravate",
      "Mitigate",
      "Ignore",
      "Imitate"
    ],
    answer: 1,
    explanation: "Mitigate means reduce the severity or impact of something.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 193,
    section: "Inglés escrito general",
    topic: "Grammar - Passive reporting",
    difficulty: "C1",
    text: "Complete: The system is believed ___ vulnerable to this attack.",
    options: [
      "be",
      "to be",
      "being",
      "been"
    ],
    answer: 1,
    explanation: "Passive reporting structure: is believed to be.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 194,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "C1",
    text: "Choose the best sentence.",
    options: [
      "No sooner had the update finished than the server restarted.",
      "No sooner the update had finished than the server restarted.",
      "No sooner had finished the update than the server restarted.",
      "No sooner the update finished that the server restarted."
    ],
    answer: 0,
    explanation: "No sooner at the beginning requires inversion: had the update finished.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 195,
    section: "Inglés escrito general",
    topic: "Vocabulary - Register",
    difficulty: "C1",
    text: "Which phrase is most suitable in a formal complaint?",
    options: [
      "This is totally rubbish, fix it now!",
      "I wish to express my dissatisfaction with the service received.",
      "You messed everything up badly.",
      "Hey, this was awful."
    ],
    answer: 1,
    explanation: "The selected phrase is formal and appropriate for a written complaint.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 196,
    section: "Inglés escrito general",
    topic: "Grammar - Advanced conditionals",
    difficulty: "C2",
    text: "Complete: Had we known about the disruption earlier, we ___ alternative arrangements.",
    options: [
      "would have made",
      "will make",
      "would make now always",
      "made have"
    ],
    answer: 0,
    explanation: "Inverted third conditional: Had we known..., we would have made...",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 197,
    section: "Inglés escrito general",
    topic: "Vocabulary - Idiomatic English",
    difficulty: "C2",
    text: "What does 'to get to the bottom of the issue' mean?",
    options: [
      "To ignore the issue completely",
      "To understand the real cause of the issue",
      "To make the issue physically lower",
      "To delay the issue indefinitely"
    ],
    answer: 1,
    explanation: "The idiom means to investigate and discover the real cause.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 198,
    section: "Inglés escrito general",
    topic: "Grammar - Subjunctive/formal",
    difficulty: "C2",
    text: "Choose the most formal and correct sentence.",
    options: [
      "It is essential that he attends the briefing.",
      "It is essential that he attend the briefing.",
      "It is essential he attending the briefing.",
      "It is essential he to attend the briefing."
    ],
    answer: 1,
    explanation: "Formal subjunctive uses base form: that he attend.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 199,
    section: "Inglés escrito general",
    topic: "Reading - Inference",
    difficulty: "C2",
    text: "Text: 'Although the figures appear promising, they should be interpreted with caution due to the limited sample size.' What is implied?",
    options: [
      "The figures are completely useless.",
      "The figures are positive but not conclusive.",
      "The sample size is very large.",
      "No interpretation is possible at all."
    ],
    answer: 1,
    explanation: "The text says the figures look promising but should be treated carefully.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 200,
    section: "Inglés escrito general",
    topic: "Use of English - Precision",
    difficulty: "C2",
    text: "Choose the sentence with the most precise meaning.",
    options: [
      "The measure may reduce delays, provided that it is implemented consistently.",
      "The measure reduces delays always if implemented maybe.",
      "The measure delay reduce consistent provided.",
      "The measure is reducing all delays with no condition."
    ],
    answer: 0,
    explanation: "The sentence is grammatically correct and expresses a clear condition.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  }
];