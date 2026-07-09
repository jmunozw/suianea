const questions = [
  {
    id: 1,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "media",
    text: "En un microprocesador, ¿qué elemento ejecuta principalmente operaciones aritméticas y lógicas?",
    options: [
      "ALU",
      "Unidad de control",
      "Memoria caché L3"
    ],
    answer: 0,
    explanation: "La ALU realiza operaciones aritméticas y lógicas; la unidad de control coordina la ejecución.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 2,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "media",
    text: "¿Cuál es la función principal de la memoria caché de la CPU?",
    options: [
      "Aumentar la capacidad permanente de almacenamiento",
      "Reducir el tiempo de acceso a datos e instrucciones frecuentes",
      "Sustituir a la memoria RAM cuando el disco es SSD"
    ],
    answer: 1,
    explanation: "La caché es memoria muy rápida cercana al procesador para acelerar accesos repetidos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 3,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "alta",
    text: "En una placa base moderna, ¿qué afirmación sobre PCI Express es correcta?",
    options: [
      "Es un bus paralelo compartido equivalente a PCI clásico",
      "Se utiliza exclusivamente para conectar discos duros mecánicos",
      "Permite comunicación serie punto a punto mediante carriles o lanes"
    ],
    answer: 2,
    explanation: "PCIe usa enlaces serie punto a punto con uno o varios carriles.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 4,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "media",
    text: "¿Qué diferencia es más correcta entre SSD y HDD?",
    options: [
      "El HDD no necesita partes mecánicas y el SSD sí",
      "El SSD no usa platos magnéticos giratorios y tiene menor latencia",
      "El SSD siempre es volátil y pierde datos al apagar"
    ],
    answer: 1,
    explanation: "Los SSD usan memoria flash no volátil y suelen ofrecer menor latencia que los HDD.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 5,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "baja",
    text: "¿Qué componente contiene normalmente el firmware de arranque UEFI/BIOS?",
    options: [
      "Un chip de memoria no volátil en la placa base",
      "La memoria RAM principal del equipo",
      "El registro de arranque de cada aplicación instalada"
    ],
    answer: 0,
    explanation: "El firmware de arranque reside en memoria no volátil de la placa base.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 6,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "media",
    text: "En mantenimiento preventivo de un equipo, ¿qué acción es más adecuada?",
    options: [
      "Formatear siempre el equipo aunque funcione correctamente",
      "Desactivar actualizaciones para evitar cambios",
      "Limpiar polvo, revisar ventilación y comprobar estado de discos"
    ],
    answer: 2,
    explanation: "El mantenimiento preventivo busca evitar fallos mediante revisión, limpieza y comprobaciones.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 7,
    section: "Anexo A",
    topic: "Hardware",
    difficulty: "alta",
    text: "Un portátil se apaga al ejecutar tareas exigentes y la temperatura de CPU sube mucho. ¿Qué causa es más probable?",
    options: [
      "Fallo del protocolo DNS del adaptador inalámbrico",
      "Fragmentación de la memoria RAM física",
      "Obstrucción del sistema de refrigeración o pasta térmica degradada"
    ],
    answer: 2,
    explanation: "El sobrecalentamiento suele estar relacionado con disipación deficiente.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 8,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Cuál es la función del kernel de un sistema operativo?",
    options: [
      "Gestionar recursos hardware y ofrecer servicios básicos al resto del sistema",
      "Actuar solo como navegador de archivos del usuario",
      "Almacenar permanentemente las contraseñas en texto claro"
    ],
    answer: 0,
    explanation: "El kernel administra CPU, memoria, dispositivos y llamadas al sistema.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 9,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "En Linux, ¿qué permiso permite entrar en un directorio y atravesarlo?",
    options: [
      "Escritura sobre cualquier archivo del directorio",
      "Ejecución sobre el directorio",
      "Lectura sobre el sistema de archivos completo"
    ],
    answer: 1,
    explanation: "En directorios, el permiso x permite acceder/atravesar el directorio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 10,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "alta",
    text: "¿Qué representa `chmod 750 script.sh`?",
    options: [
      "Propietario rwx, grupo r-x, otros sin permisos",
      "Propietario r-x, grupo rwx, otros lectura",
      "Propietario rw-, grupo r--, otros ejecución"
    ],
    answer: 0,
    explanation: "7=rwx, 5=r-x y 0=sin permisos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 11,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Qué diferencia básica hay entre proceso e hilo?",
    options: [
      "Un hilo siempre se ejecuta en un equipo remoto y el proceso en local",
      "Un proceso solo existe en Linux y un hilo solo en Windows",
      "Un proceso tiene espacio de memoria propio; los hilos de un mismo proceso comparten memoria"
    ],
    answer: 2,
    explanation: "Los hilos pertenecen a procesos y comparten recursos del proceso.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 12,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "En Windows, ¿qué herramienta permite consultar y gestionar servicios del sistema?",
    options: [
      "diskpart /clean",
      "services.msc",
      "gpupdate /force exclusivamente"
    ],
    answer: 1,
    explanation: "services.msc abre la consola de servicios de Windows.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 13,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "alta",
    text: "¿Qué afirmación sobre sistemas de archivos es correcta?",
    options: [
      "FAT32 es siempre más seguro que NTFS por defecto",
      "NTFS permite permisos, cifrado y cuotas; FAT32 tiene limitaciones mayores",
      "ext4 es el sistema de archivos nativo principal de Windows Server"
    ],
    answer: 1,
    explanation: "NTFS ofrece características avanzadas de seguridad y administración frente a FAT32.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 14,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Qué papel tiene un bootloader?",
    options: [
      "Asignar direcciones IP mediante DHCP",
      "Cifrar automáticamente todo el tráfico HTTPS",
      "Cargar el sistema operativo o permitir seleccionar uno durante el arranque"
    ],
    answer: 2,
    explanation: "El cargador de arranque inicia el sistema operativo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 15,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "¿Qué acción es más prudente antes de aplicar una actualización crítica en servidores?",
    options: [
      "Revisar impacto, ventana de mantenimiento y plan de reversión",
      "Aplicarla directamente en producción sin copia ni pruebas",
      "Desinstalar el antivirus para acelerar la actualización"
    ],
    answer: 0,
    explanation: "Las actualizaciones deben planificarse y tener rollback o copia por si fallan.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 16,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué dispositivo toma decisiones de reenvío principalmente usando direcciones MAC?",
    options: [
      "Switch",
      "Router",
      "Servidor DNS"
    ],
    answer: 0,
    explanation: "Un switch de capa 2 reenvía tramas en función de direcciones MAC.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 17,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "baja",
    text: "¿Qué tipo de red cubre normalmente un edificio, oficina o campus reducido?",
    options: [
      "WAN",
      "LAN",
      "PAN intercontinental"
    ],
    answer: 1,
    explanation: "Una LAN es una red de área local.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 18,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo se usa normalmente para asignar automáticamente IP, máscara, puerta de enlace y DNS?",
    options: [
      "ARP",
      "ICMP",
      "DHCP"
    ],
    answer: 2,
    explanation: "DHCP proporciona configuración IP automática a los clientes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 19,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "Un equipo tiene IP 169.254.20.15/16. ¿Qué indica normalmente?",
    options: [
      "Tiene una IP pública correcta asignada por el ISP",
      "No ha recibido configuración válida de DHCP y usa APIPA",
      "Está conectado obligatoriamente a una VPN corporativa"
    ],
    answer: 1,
    explanation: "Las direcciones 169.254.x.x suelen aparecer cuando falla DHCP en clientes Windows.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 20,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Para qué sirve ARP en IPv4?",
    options: [
      "Resolver una dirección IP local a una dirección MAC",
      "Resolver nombres de dominio a IP públicas",
      "Cifrar sesiones web mediante certificados"
    ],
    answer: 0,
    explanation: "ARP relaciona IP y MAC dentro de la red local.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 21,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué capa OSI se asocia principalmente con TCP y UDP?",
    options: [
      "Sesión",
      "Enlace de datos",
      "Transporte"
    ],
    answer: 2,
    explanation: "TCP y UDP pertenecen a la capa de transporte.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 22,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Cuál es la PDU típica de la capa de red del modelo OSI?",
    options: [
      "Trama",
      "Segmento",
      "Paquete"
    ],
    answer: 2,
    explanation: "En red se habla de paquetes; en enlace de tramas y en transporte de segmentos/datagramas.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 23,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué puerto utiliza HTTPS por defecto?",
    options: [
      "443",
      "80",
      "3389"
    ],
    answer: 0,
    explanation: "HTTPS usa TCP 443 por defecto.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 24,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué pareja protocolo-puerto es correcta?",
    options: [
      "SMB 110 / POP3 445",
      "LDAP 389 / LDAPS 636",
      "RDP 53 / DNS 3389"
    ],
    answer: 1,
    explanation: "LDAP usa 389 y LDAPS 636; SMB usa 445, POP3 110 y RDP 3389.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 25,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo usa normalmente el comando ping?",
    options: [
      "ICMP",
      "SMTP",
      "SNMP"
    ],
    answer: 0,
    explanation: "ping utiliza mensajes ICMP Echo Request/Reply.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 26,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué campo limita la vida de un paquete IP para evitar bucles indefinidos?",
    options: [
      "MTU",
      "VLAN ID",
      "TTL"
    ],
    answer: 2,
    explanation: "TTL se decrementa en cada salto y evita circulación infinita.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 27,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué significa MTU?",
    options: [
      "Tiempo mínimo de uso de una dirección IP",
      "Tamaño máximo de unidad de transmisión en un enlace",
      "Tabla maestra de usuarios de un dominio"
    ],
    answer: 1,
    explanation: "MTU define el tamaño máximo de paquete/trama transportable sin fragmentación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 28,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué función cumple NAT en muchas redes corporativas o domésticas?",
    options: [
      "Asignar permisos NTFS a usuarios de dominio",
      "Traducir direcciones privadas a públicas y viceversa",
      "Resolver nombres DNS a registros MX únicamente"
    ],
    answer: 1,
    explanation: "NAT permite que direcciones privadas se comuniquen usando una o varias direcciones públicas.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 29,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué es una VLAN?",
    options: [
      "Una copia de seguridad incremental de una LAN",
      "Un protocolo de cifrado sustituto de TLS",
      "Una segmentación lógica de una red de capa 2"
    ],
    answer: 2,
    explanation: "Las VLAN separan dominios de broadcast lógicos dentro de la infraestructura de red.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 30,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "Un equipo puede hacer ping a 8.8.8.8 pero no abre www.aena.es por nombre. ¿Qué sospecha es más razonable?",
    options: [
      "Problema de resolución DNS",
      "Fallo físico de la tarjeta de red necesariamente",
      "Falta de puerta de enlace por defecto"
    ],
    answer: 0,
    explanation: "Si llega a una IP externa pero falla por nombre, DNS es el primer sospechoso.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 31,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué protocolo se asocia a la resolución de nombres de dominio?",
    options: [
      "DNS",
      "DHCP",
      "RDP"
    ],
    answer: 0,
    explanation: "DNS resuelve nombres como dominios a direcciones IP.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 32,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué diferencia básica hay entre TCP y UDP?",
    options: [
      "UDP cifra por defecto y TCP no puede cifrarse nunca",
      "TCP es orientado a conexión; UDP no garantiza entrega ni orden",
      "TCP solo sirve para redes locales y UDP solo para Internet"
    ],
    answer: 1,
    explanation: "TCP controla conexión, entrega y orden; UDP es más simple y sin garantías equivalentes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 33,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué puerto se asocia por defecto con RDP?",
    options: [
      "161",
      "993",
      "3389"
    ],
    answer: 2,
    explanation: "RDP usa TCP 3389 por defecto.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 34,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "alta",
    text: "¿Qué protocolo se utiliza habitualmente para administrar dispositivos de red mediante consultas y traps?",
    options: [
      "IMAP",
      "SNMP",
      "SMB"
    ],
    answer: 1,
    explanation: "SNMP se usa para monitorización y administración de dispositivos de red.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 35,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Qué capa OSI se encarga del direccionamiento IP y el encaminamiento?",
    options: [
      "Red",
      "Aplicación",
      "Física"
    ],
    answer: 0,
    explanation: "La capa de red gestiona direccionamiento lógico y routing.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 36,
    section: "Anexo A",
    topic: "Redes, TCP/IP y OSI",
    difficulty: "media",
    text: "¿Cuál es la función de la puerta de enlace predeterminada?",
    options: [
      "Asignar nombres NetBIOS a todos los usuarios",
      "Evitar que el equipo use servidores DNS",
      "Enviar tráfico hacia redes distintas de la red local"
    ],
    answer: 2,
    explanation: "El gateway predeterminado se usa para salir a otras redes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 37,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "En seguridad, ¿qué es una vulnerabilidad?",
    options: [
      "Un daño material ya producido",
      "Una copia exacta de un certificado digital",
      "Una debilidad que puede ser explotada por una amenaza"
    ],
    answer: 2,
    explanation: "Una vulnerabilidad es una debilidad; la amenaza puede explotarla y generar riesgo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 38,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué ataque intenta engañar al usuario para obtener credenciales o datos sensibles?",
    options: [
      "Phishing",
      "RAID 5",
      "Normalización"
    ],
    answer: 0,
    explanation: "El phishing usa engaño y suplantación para robar información.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 39,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "alta",
    text: "¿Qué diferencia hay entre cifrado simétrico y asimétrico?",
    options: [
      "El asimétrico no puede usarse para firma digital",
      "El simétrico usa la misma clave; el asimétrico usa par pública/privada",
      "El simétrico siempre es más lento que el asimétrico"
    ],
    answer: 1,
    explanation: "En cifrado simétrico se comparte una clave; en asimétrico se usa un par de claves.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 40,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "alta",
    text: "¿Qué garantiza principalmente una función hash criptográfica aplicada a un fichero?",
    options: [
      "Integridad, al detectar cambios en el contenido",
      "Confidencialidad, porque cifra el fichero automáticamente",
      "Disponibilidad, porque crea una copia completa"
    ],
    answer: 0,
    explanation: "Un hash permite detectar modificaciones, pero no cifra por sí mismo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 41,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué elemento suele inspeccionar y filtrar tráfico según reglas de seguridad?",
    options: [
      "Bootloader",
      "Trigger SQL",
      "Firewall"
    ],
    answer: 2,
    explanation: "Un firewall permite o bloquea tráfico según reglas.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 42,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "alta",
    text: "¿Qué diferencia general hay entre IDS e IPS?",
    options: [
      "IPS solo hace copias y IDS solo asigna direcciones IP",
      "IDS detecta y alerta; IPS puede bloquear activamente",
      "IDS sustituye a DNS y IPS sustituye a DHCP"
    ],
    answer: 1,
    explanation: "Un IDS es principalmente detector; un IPS puede intervenir y prevenir.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 43,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué aporta una VPN en acceso remoto corporativo?",
    options: [
      "Un aumento obligatorio de la velocidad de Internet",
      "Un túnel cifrado para acceder de forma segura a la red",
      "Una sustitución completa de Active Directory"
    ],
    answer: 1,
    explanation: "Una VPN protege comunicaciones mediante túnel cifrado.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 44,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "alta",
    text: "En TLS, ¿qué papel tiene un certificado digital de servidor?",
    options: [
      "Convierte HTTP en UDP sin cifrado",
      "Elimina la necesidad de DNS en Internet",
      "Ayuda a autenticar el servidor y establecer una conexión segura"
    ],
    answer: 2,
    explanation: "El certificado permite verificar identidad del servidor y participar en el establecimiento seguro.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 45,
    section: "Anexo A",
    topic: "Seguridad informática",
    difficulty: "media",
    text: "¿Qué medida corresponde a seguridad física de un CPD?",
    options: [
      "Control de acceso, climatización y protección eléctrica",
      "Uso de claves foráneas en SQL",
      "Creación de etiquetas HTML semánticas"
    ],
    answer: 0,
    explanation: "La seguridad física del CPD incluye acceso, energía, climatización e incendios.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 46,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "media",
    text: "En Active Directory, ¿qué es un controlador de dominio?",
    options: [
      "Un servidor que autentica y presta servicios de dominio",
      "Un switch que separa VLAN por puerto",
      "Una copia diferencial de usuarios locales"
    ],
    answer: 0,
    explanation: "El controlador de dominio ejecuta AD DS y autentica usuarios/equipos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 47,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "alta",
    text: "¿Qué protocolo utiliza Active Directory de forma habitual para consultar el directorio?",
    options: [
      "SNMP",
      "LDAP",
      "POP3"
    ],
    answer: 1,
    explanation: "LDAP permite consultas y operaciones sobre servicios de directorio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 48,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "media",
    text: "¿Qué es una GPO?",
    options: [
      "Un tipo de partición de disco exclusiva de Linux",
      "Un protocolo de correo entrante cifrado",
      "Una directiva de grupo para aplicar configuraciones a usuarios o equipos"
    ],
    answer: 2,
    explanation: "Las GPO aplican configuración y políticas en entornos de dominio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 49,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "alta",
    text: "Si un usuario tiene permiso NTFS de lectura pero permiso de recurso compartido de cambio, ¿qué permiso efectivo tendrá al acceder por red?",
    options: [
      "Siempre el permiso más amplio de los dos",
      "El más restrictivo entre ambos conjuntos de permisos",
      "Siempre control total si pertenece al dominio"
    ],
    answer: 1,
    explanation: "En acceso por red se combinan permisos NTFS y de recurso compartido; prevalece el resultado más restrictivo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 50,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "media",
    text: "¿Qué función cumple una OU en Active Directory?",
    options: [
      "Organizar objetos y facilitar delegación y aplicación de GPO",
      "Traducir direcciones IPv4 privadas a públicas",
      "Crear copias inmutables de máquinas virtuales"
    ],
    answer: 0,
    explanation: "Las unidades organizativas estructuran objetos y permiten delegar y aplicar políticas.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 51,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "alta",
    text: "En un dominio Windows, ¿por qué DNS es crítico para los clientes?",
    options: [
      "Porque sustituye Kerberos por POP3",
      "Porque cifra todos los ficheros compartidos automáticamente",
      "Porque permite localizar controladores de dominio y servicios mediante registros adecuados"
    ],
    answer: 2,
    explanation: "Active Directory depende de DNS para localizar servicios y controladores de dominio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 52,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "media",
    text: "¿Qué protocolo se usa para enviar correo desde un cliente o servidor de correo?",
    options: [
      "IMAP",
      "POP3",
      "SMTP"
    ],
    answer: 2,
    explanation: "SMTP se usa para envío de correo; IMAP/POP3 para recepción/acceso.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 53,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "media",
    text: "¿Qué diferencia básica hay entre IMAP y POP3?",
    options: [
      "IMAP mantiene y sincroniza correo en servidor; POP3 suele descargarlo al cliente",
      "POP3 siempre cifra con TLS y IMAP nunca puede cifrarse",
      "IMAP sirve para enviar correo y POP3 para DNS"
    ],
    answer: 0,
    explanation: "IMAP trabaja normalmente sincronizando buzones en servidor; POP3 descarga mensajes.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 54,
    section: "Anexo A",
    topic: "Active Directory y servicios",
    difficulty: "alta",
    text: "¿Qué es una cuenta bloqueada en AD?",
    options: [
      "Una cuenta convertida automáticamente en administrador de dominio",
      "Una cuenta temporalmente impedida para iniciar sesión normalmente por política o intentos fallidos",
      "Una cuenta que solo puede usar UDP 53"
    ],
    answer: 1,
    explanation: "El bloqueo de cuenta suele responder a políticas de seguridad por intentos fallidos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 55,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "media",
    text: "¿Qué caracteriza a un hipervisor de tipo 1?",
    options: [
      "Se ejecuta directamente sobre el hardware físico",
      "Se ejecuta únicamente como aplicación dentro de un navegador",
      "Solo permite contenedores y no máquinas virtuales"
    ],
    answer: 0,
    explanation: "Los hipervisores tipo 1 son bare-metal, como ESXi o Hyper-V en modo servidor.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 56,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "alta",
    text: "¿Qué afirmación sobre snapshots es más correcta?",
    options: [
      "Un snapshot es siempre una copia externa inmutable",
      "Un snapshot no depende nunca del almacenamiento original",
      "Un snapshot no sustituye a una política de backup"
    ],
    answer: 2,
    explanation: "Los snapshots son útiles para puntos temporales, pero no equivalen a backup completo y externo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 57,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "media",
    text: "¿Qué copia guarda todos los datos seleccionados en cada ejecución?",
    options: [
      "Backup incremental",
      "Backup completo",
      "Backup diferencial"
    ],
    answer: 1,
    explanation: "El backup completo copia todo el conjunto seleccionado.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 58,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "alta",
    text: "Tras un backup completo el lunes, ¿qué copia incremental del miércoles guarda?",
    options: [
      "Todos los cambios desde el backup completo del lunes",
      "Solo los cambios desde la copia del martes si hubo incremental el martes",
      "Siempre todos los datos del sistema"
    ],
    answer: 1,
    explanation: "El incremental copia cambios desde la última copia, sea completa o incremental.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 59,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "alta",
    text: "¿Qué mide RPO en continuidad de negocio?",
    options: [
      "El tiempo máximo tolerable para recuperar el servicio",
      "La velocidad nominal del enlace de almacenamiento",
      "La cantidad máxima tolerable de pérdida de datos medida en tiempo"
    ],
    answer: 2,
    explanation: "RPO indica hasta qué punto temporal se acepta perder datos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 60,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "media",
    text: "¿Qué mide RTO?",
    options: [
      "Tiempo objetivo para restaurar un servicio tras una interrupción",
      "Cantidad máxima de datos que se puede perder",
      "Número de discos mínimos para RAID 5"
    ],
    answer: 0,
    explanation: "RTO define el tiempo objetivo de recuperación del servicio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 61,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "alta",
    text: "¿Qué RAID ofrece striping sin redundancia?",
    options: [
      "RAID 0",
      "RAID 1",
      "RAID 5"
    ],
    answer: 0,
    explanation: "RAID 0 reparte datos para rendimiento, pero no aporta redundancia.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 62,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "media",
    text: "¿Qué diferencia general hay entre NAS y SAN?",
    options: [
      "SAN solo comparte impresoras y NAS solo ejecuta contenedores",
      "NAS ofrece almacenamiento a nivel de archivo; SAN suele ofrecer bloques",
      "NAS exige canal de fibra y SAN siempre usa SMB"
    ],
    answer: 1,
    explanation: "NAS suele presentar ficheros; SAN presenta almacenamiento de bloque a servidores.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 63,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "alta",
    text: "¿Qué afirmación compara mejor una VM y un contenedor?",
    options: [
      "Un contenedor siempre incluye un sistema operativo completo propio",
      "Una VM no permite aislamiento y un contenedor sí exclusivamente",
      "Una VM virtualiza hardware; un contenedor comparte kernel y aísla procesos"
    ],
    answer: 2,
    explanation: "Las VM incluyen sistema operativo invitado; los contenedores comparten kernel del host.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 64,
    section: "Anexo A",
    topic: "Virtualización, backup y almacenamiento",
    difficulty: "media",
    text: "¿Qué describe mejor una arquitectura de microservicios?",
    options: [
      "Un único ejecutable monolítico sin comunicación interna",
      "Aplicación dividida en servicios pequeños, independientes y comunicados por interfaces",
      "Un sistema de particiones físicas de un disco SSD"
    ],
    answer: 1,
    explanation: "Los microservicios dividen funcionalidades en servicios desplegables de forma independiente.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 65,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "En una base de datos relacional, ¿qué identifica de forma única cada fila de una tabla?",
    options: [
      "Clave primaria",
      "Clave foránea",
      "Índice secundario no único"
    ],
    answer: 0,
    explanation: "La clave primaria identifica de forma única los registros de una tabla.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 66,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué es una clave foránea?",
    options: [
      "Una contraseña cifrada de administrador de la base de datos",
      "Una copia comprimida de una tabla",
      "Un campo que referencia la clave de otra tabla para mantener relación"
    ],
    answer: 2,
    explanation: "La clave foránea implementa relaciones e integridad referencial.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 67,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué instrucción pertenece claramente a DDL?",
    options: [
      "SELECT",
      "UPDATE",
      "CREATE TABLE"
    ],
    answer: 2,
    explanation: "DDL define estructuras; CREATE TABLE crea una tabla.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 68,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué instrucción pertenece a DML?",
    options: [
      "INSERT",
      "GRANT",
      "COMMIT"
    ],
    answer: 0,
    explanation: "INSERT manipula datos; GRANT es DCL y COMMIT es TCL.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 69,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué hace COMMIT en una transacción?",
    options: [
      "Revierte los cambios desde el último punto confirmado",
      "Confirma de forma permanente los cambios pendientes",
      "Crea un usuario con permisos de lectura"
    ],
    answer: 1,
    explanation: "COMMIT confirma los cambios de una transacción.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 70,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué objetivo tiene la normalización en diseño relacional?",
    options: [
      "Reducir redundancias y mejorar consistencia de los datos",
      "Duplicar todas las tablas para acelerar siempre las consultas",
      "Eliminar las claves primarias de las entidades"
    ],
    answer: 0,
    explanation: "La normalización organiza datos para evitar redundancias y anomalías.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 71,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué es un trigger en una base de datos?",
    options: [
      "Un protocolo de correo entrante",
      "Un campo que nunca puede tener restricciones",
      "Código que se ejecuta automáticamente ante ciertos eventos de la base de datos"
    ],
    answer: 2,
    explanation: "Un disparador se ejecuta ante eventos como INSERT, UPDATE o DELETE.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 72,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "¿Qué tipo de base NoSQL representa mejor MongoDB?",
    options: [
      "Clave-valor puro",
      "Documental",
      "Relacional clásica"
    ],
    answer: 1,
    explanation: "MongoDB almacena documentos, normalmente en formato similar a JSON/BSON.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 73,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "alta",
    text: "¿Qué tipo de NoSQL representa típicamente Redis?",
    options: [
      "Documental con joins obligatorios",
      "Clave-valor",
      "Relacional con claves foráneas estrictas"
    ],
    answer: 1,
    explanation: "Redis se usa como almacén clave-valor en memoria.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 74,
    section: "Anexo A",
    topic: "Bases de datos y SQL",
    difficulty: "media",
    text: "En modelo entidad-relación, ¿qué representa la cardinalidad?",
    options: [
      "El tamaño físico máximo de una tabla en disco",
      "El nivel de cifrado de una columna",
      "Cuántas ocurrencias de una entidad pueden relacionarse con otra"
    ],
    answer: 2,
    explanation: "La cardinalidad describe relaciones como 1:1, 1:N o N:M.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 75,
    section: "Anexo A",
    topic: "Programación y desarrollo",
    difficulty: "media",
    text: "¿Qué estructura permite repetir un bloque de instrucciones mientras se cumpla una condición?",
    options: [
      "Bucle",
      "Variable constante",
      "Comentario"
    ],
    answer: 0,
    explanation: "Los bucles permiten repetición controlada.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 76,
    section: "Anexo A",
    topic: "Programación y desarrollo",
    difficulty: "media",
    text: "¿Qué es la recursividad?",
    options: [
      "Una función que se llama a sí misma con una condición de parada",
      "Una variable que nunca cambia de valor",
      "Un método para cifrar paquetes TCP"
    ],
    answer: 0,
    explanation: "La recursividad requiere llamada a sí misma y caso base para terminar.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 77,
    section: "Anexo A",
    topic: "Programación y desarrollo",
    difficulty: "alta",
    text: "En arquitectura cliente/servidor, ¿qué afirmación es correcta?",
    options: [
      "El servidor siempre debe estar en el mismo equipo físico que el cliente",
      "El cliente solicita servicios y el servidor los proporciona",
      "El cliente no puede tener interfaz de usuario"
    ],
    answer: 1,
    explanation: "Cliente y servidor asumen roles distintos en la comunicación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 78,
    section: "Anexo A",
    topic: "Programación y desarrollo",
    difficulty: "media",
    text: "¿Qué lenguaje estructura el contenido de una página web?",
    options: [
      "CSS",
      "SQL",
      "HTML"
    ],
    answer: 2,
    explanation: "HTML define estructura y contenido; CSS define presentación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 79,
    section: "Anexo A",
    topic: "Programación y desarrollo",
    difficulty: "alta",
    text: "¿Qué significa que una aplicación sea multicapa?",
    options: [
      "Que todo el código se guarda en una única tabla SQL",
      "Que separa responsabilidades en capas como presentación, lógica y datos",
      "Que solo puede ejecutarse en máquinas virtuales"
    ],
    answer: 1,
    explanation: "La arquitectura multicapa separa componentes para facilitar mantenimiento y escalabilidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 80,
    section: "Anexo A",
    topic: "Programación y desarrollo",
    difficulty: "media",
    text: "¿Qué herramienta se asocia al control de versiones distribuido?",
    options: [
      "Git",
      "DHCP",
      "RAID"
    ],
    answer: 0,
    explanation: "Git es un sistema de control de versiones distribuido.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 81,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "Según la normativa de protección de datos, ¿qué es un dato personal?",
    options: [
      "Cualquier dato técnico de un servidor, aunque no se vincule a personas",
      "Solo los datos económicos publicados en boletines oficiales",
      "Cualquier información sobre una persona física identificada o identificable"
    ],
    answer: 2,
    explanation: "Un dato personal identifica o permite identificar a una persona física.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 82,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Quién determina los fines y medios del tratamiento de datos personales?",
    options: [
      "Encargado del tratamiento",
      "Delegado sindical de prevención",
      "Responsable del tratamiento"
    ],
    answer: 2,
    explanation: "El responsable decide por qué y cómo se tratan los datos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 83,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "alta",
    text: "¿Qué principio exige tratar solo los datos adecuados, pertinentes y necesarios?",
    options: [
      "Minimización de datos",
      "Portabilidad obligatoria universal",
      "Presencia equilibrada"
    ],
    answer: 0,
    explanation: "La minimización limita el tratamiento a los datos necesarios para la finalidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 84,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué derecho permite solicitar que se eliminen datos personales cuando proceda?",
    options: [
      "Oposición sindical",
      "Supresión",
      "Acción positiva"
    ],
    answer: 1,
    explanation: "El derecho de supresión permite pedir la eliminación en determinados supuestos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 85,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "alta",
    text: "¿Qué es una brecha de seguridad de datos personales?",
    options: [
      "Un incidente que ocasiona destrucción, pérdida, alteración, comunicación o acceso no autorizado",
      "Una simple actualización de software sin impacto en datos",
      "Una auditoría ordinaria programada sin hallazgos"
    ],
    answer: 0,
    explanation: "Una brecha implica compromiso o riesgo sobre datos personales.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 86,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué derecho permite recibir los datos en formato estructurado y transmitirlos a otro responsable?",
    options: [
      "Desconexión física",
      "Presencia equilibrada",
      "Portabilidad"
    ],
    answer: 2,
    explanation: "La portabilidad facilita recibir y transmitir datos en formato estructurado.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 87,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "media",
    text: "¿Qué derecho digital reconoce la desconexión digital en el ámbito laboral?",
    options: [
      "El derecho a eliminar todos los sistemas informáticos de la empresa",
      "El derecho a no atender comunicaciones laborales fuera del tiempo de trabajo en los términos aplicables",
      "El derecho a usar cualquier red social durante toda la jornada"
    ],
    answer: 1,
    explanation: "La desconexión digital busca respetar descanso, permisos y vida personal.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 88,
    section: "Anexo B",
    topic: "Protección de datos",
    difficulty: "alta",
    text: "¿Qué figura trata datos personales por cuenta del responsable?",
    options: [
      "Interesado",
      "Encargado del tratamiento",
      "Autoridad portuaria"
    ],
    answer: 1,
    explanation: "El encargado trata datos siguiendo instrucciones del responsable.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 89,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "media",
    text: "¿Qué es la discriminación directa por razón de sexo?",
    options: [
      "Aplicar una medida neutra que nunca perjudica a nadie",
      "Proteger a víctimas mediante asistencia integral",
      "Tratar a una persona de forma menos favorable por razón de sexo"
    ],
    answer: 2,
    explanation: "La discriminación directa implica trato menos favorable por razón de sexo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 90,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "alta",
    text: "¿Qué es la discriminación indirecta?",
    options: [
      "Una disposición aparentemente neutra que pone a personas de un sexo en desventaja particular",
      "Una agresión física ejercida exclusivamente en el ámbito doméstico",
      "La solicitud de acceso a datos personales"
    ],
    answer: 0,
    explanation: "Una medida neutra puede generar desventaja particular y ser discriminatoria indirectamente.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 91,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "media",
    text: "¿Qué buscan las acciones positivas en igualdad?",
    options: [
      "Corregir situaciones patentes de desigualdad de hecho",
      "Eliminar toda obligación de planes de igualdad",
      "Sustituir los derechos de protección de datos"
    ],
    answer: 0,
    explanation: "Las acciones positivas compensan desigualdades reales para lograr igualdad efectiva.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 92,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "media",
    text: "¿Qué es un plan de igualdad en una organización?",
    options: [
      "Una copia de seguridad legal de los servidores",
      "Un conjunto ordenado de medidas para alcanzar igualdad de trato y oportunidades",
      "Un registro de direcciones IP privadas"
    ],
    answer: 1,
    explanation: "Los planes de igualdad ordenan medidas tras diagnóstico de situación.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 93,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "alta",
    text: "¿Qué principio implica integrar la igualdad en todas las políticas públicas?",
    options: [
      "Integridad referencial",
      "Portabilidad de datos",
      "Transversalidad de género"
    ],
    answer: 2,
    explanation: "La transversalidad incorpora la igualdad en la actuación pública de forma general.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 94,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "media",
    text: "¿Qué conducta se relaciona con acoso sexual?",
    options: [
      "Asignación automática de una IP por DHCP",
      "Comportamiento verbal o físico de naturaleza sexual que atenta contra la dignidad",
      "Solicitud legítima de rectificación de datos"
    ],
    answer: 1,
    explanation: "El acoso sexual se vincula a conductas de naturaleza sexual que vulneran la dignidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 95,
    section: "Anexo B",
    topic: "Igualdad",
    difficulty: "alta",
    text: "¿Qué significa presencia equilibrada en términos generales?",
    options: [
      "Que cada sexo esté representado de forma razonablemente proporcionada según la norma aplicable",
      "Que todos los servidores tengan la misma cantidad de RAM",
      "Que todas las respuestas del examen tengan igual letra"
    ],
    answer: 0,
    explanation: "La presencia equilibrada busca representación proporcionada de mujeres y hombres.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 96,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Cuál es el objeto central de la LO 1/2004?",
    options: [
      "Regular exclusivamente la estructura de bases de datos públicas",
      "Definir el protocolo DHCP en redes institucionales",
      "Actuar contra la violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o relaciones análogas"
    ],
    answer: 2,
    explanation: "La ley aborda la violencia de género en el ámbito definido por la propia norma.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 97,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Qué formas de violencia incluye la protección integral?",
    options: [
      "Solo daños materiales a equipos informáticos",
      "Únicamente infracciones administrativas de tráfico",
      "Violencia física y psicológica, incluidas amenazas, coacciones o privación arbitraria de libertad"
    ],
    answer: 2,
    explanation: "La ley contempla violencia física, psicológica, amenazas, coacciones y privación de libertad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 98,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "alta",
    text: "¿Qué tipo de medidas contempla la protección integral frente a la violencia de género?",
    options: [
      "Sensibilización, prevención, asistencia, protección y tutela institucional",
      "Solo mantenimiento preventivo de instalaciones",
      "Exclusivamente sanciones por incumplimiento de licencias software"
    ],
    answer: 0,
    explanation: "La protección integral combina prevención, asistencia, protección y tutela.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 99,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "media",
    text: "¿Qué finalidad tienen las campañas de sensibilización en esta materia?",
    options: [
      "Mejorar la latencia de una red inalámbrica",
      "Prevenir y rechazar socialmente la violencia contra las mujeres",
      "Asignar roles de administrador de dominio"
    ],
    answer: 1,
    explanation: "La sensibilización busca prevención y rechazo social de la violencia de género.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 100,
    section: "Anexo B",
    topic: "Violencia de género",
    difficulty: "alta",
    text: "¿Qué tratamiento merece la publicidad que utilice la imagen de la mujer de forma vejatoria o discriminatoria?",
    options: [
      "Puede considerarse publicidad ilícita o contraria a la dignidad según la normativa aplicable",
      "Debe aceptarse si aumenta las ventas",
      "Solo se regula si contiene datos biométricos"
    ],
    answer: 0,
    explanation: "La normativa de igualdad y violencia de género rechaza publicidad discriminatoria o vejatoria.",
    reference: "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    id: 101,
    section: "Supuesto teórico-práctico",
    topic: "Diagnóstico de red",
    difficulty: "alta",
    text: "Un usuario indica que no tiene Internet. Su equipo muestra IP 169.254.33.8 y máscara 255.255.0.0. Otros equipos sí navegan. ¿Qué comprobarías primero?",
    options: [
      "Caducidad del certificado TLS del sitio web de AENA",
      "Permisos NTFS del perfil local del usuario",
      "Conectividad con DHCP o configuración del cliente para renovar concesión"
    ],
    answer: 2,
    explanation: "Una IP APIPA apunta a fallo en obtención de configuración DHCP.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 102,
    section: "Supuesto teórico-práctico",
    topic: "DNS",
    difficulty: "alta",
    text: "Un PC puede hacer ping a 8.8.8.8 y al gateway, pero no resuelve intranet.empresa.local. ¿Cuál es la causa más probable?",
    options: [
      "Fallo de la ALU del procesador",
      "DNS mal configurado o servidor DNS no accesible",
      "RAID 1 degradado en el portátil"
    ],
    answer: 1,
    explanation: "Si conectividad IP funciona pero fallan nombres, hay que revisar DNS.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 103,
    section: "Supuesto teórico-práctico",
    topic: "Permisos",
    difficulty: "alta",
    text: "María pertenece al grupo Contabilidad. En NTFS tiene Lectura y en el recurso compartido tiene Cambiar. Al acceder por red no puede modificar archivos. ¿Por qué?",
    options: [
      "El permiso compartido siempre anula a NTFS hacia arriba",
      "El permiso efectivo queda limitado por el permiso más restrictivo",
      "Necesita cambiar el puerto SMB de 445 a 3389"
    ],
    answer: 1,
    explanation: "En acceso compartido se combinan ambos permisos y el resultado limita la operación.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 104,
    section: "Supuesto teórico-práctico",
    topic: "Active Directory",
    difficulty: "media",
    text: "Se crea una GPO para bloquear USB, pero no se aplica a varios equipos de una OU. ¿Qué revisión es más adecuada?",
    options: [
      "Reinstalar todos los switches de la red",
      "Cambiar todos los buzones de IMAP a POP3",
      "Comprobar vínculo de la GPO, ámbito, filtros y ejecutar gpresult/gpupdate"
    ],
    answer: 2,
    explanation: "Para GPO se revisa vinculación, filtrado, herencia y resultado de directivas.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 105,
    section: "Supuesto teórico-práctico",
    topic: "Correo",
    difficulty: "media",
    text: "Un usuario puede recibir correo, pero no puede enviar desde el cliente. ¿Qué protocolo/servicio revisarías primero?",
    options: [
      "SMTP y su puerto/configuración de salida",
      "POP3 exclusivamente",
      "ARP de la puerta de enlace"
    ],
    answer: 0,
    explanation: "El envío de correo se realiza mediante SMTP.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 106,
    section: "Supuesto teórico-práctico",
    topic: "VLAN",
    difficulty: "alta",
    text: "Tras mover un puesto a otra roseta, obtiene IP de otra subred y no accede a recursos internos. ¿Qué causa es más probable?",
    options: [
      "Puerto de switch asignado a VLAN incorrecta",
      "Falta de normalización en una tabla SQL",
      "Snapshot antiguo en la máquina cliente"
    ],
    answer: 0,
    explanation: "Una VLAN incorrecta puede situar al equipo en otra red lógica.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 107,
    section: "Supuesto teórico-práctico",
    topic: "Firewall",
    difficulty: "media",
    text: "Desde fuera no se puede acceder por RDP a un servidor, pero el servidor responde a ping interno y el servicio está iniciado. ¿Qué revisarías?",
    options: [
      "Puerto 25 de SMTP entrante",
      "Reglas de firewall/NAT y puerto 3389",
      "Normalización de bases de datos"
    ],
    answer: 1,
    explanation: "RDP usa 3389 y puede estar bloqueado por firewall o NAT.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 108,
    section: "Supuesto teórico-práctico",
    topic: "TLS",
    difficulty: "alta",
    text: "Los usuarios reciben aviso de certificado caducado al entrar a una aplicación HTTPS interna. ¿Qué acción es correcta?",
    options: [
      "Desactivar DNS en todos los clientes",
      "Convertir el servidor en controlador de dominio",
      "Renovar o sustituir el certificado y verificar cadena y nombre"
    ],
    answer: 2,
    explanation: "Un certificado caducado debe renovarse y validarse correctamente.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 109,
    section: "Supuesto teórico-práctico",
    topic: "Backups",
    difficulty: "alta",
    text: "Un técnico eliminó una carpeta y descubre que el último backup restaurable es de hace 48 horas, aunque el objetivo era perder como máximo 4 horas. ¿Qué indicador se incumplió?",
    options: [
      "RTO",
      "RPO",
      "MTU"
    ],
    answer: 1,
    explanation: "El RPO define la pérdida máxima de datos tolerable en tiempo.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 110,
    section: "Supuesto teórico-práctico",
    topic: "Virtualización",
    difficulty: "alta",
    text: "Antes de actualizar una aplicación en una VM se toma un snapshot. Dos semanas después se descubre corrupción de datos y no hay backup externo. ¿Qué error de criterio hubo?",
    options: [
      "Confundir snapshot con backup recuperable a largo plazo",
      "Usar demasiada memoria caché de CPU",
      "Elegir HTML en vez de CSS"
    ],
    answer: 0,
    explanation: "El snapshot no reemplaza una política de copias independiente.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 111,
    section: "Supuesto teórico-práctico",
    topic: "Almacenamiento",
    difficulty: "media",
    text: "Un RAID 5 aparece degradado por fallo de un disco. ¿Cuál es la actuación prudente?",
    options: [
      "Seguir indefinidamente porque RAID 5 ya es backup",
      "Formatear el volumen para recuperar redundancia",
      "Sustituir el disco fallado y reconstruir cuanto antes, verificando backup"
    ],
    answer: 2,
    explanation: "RAID degradado debe repararse y no sustituye copias de seguridad.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 112,
    section: "Supuesto teórico-práctico",
    topic: "Ransomware",
    difficulty: "alta",
    text: "Una organización sufre ransomware. ¿Qué medida previa habría reducido más el impacto de cifrado masivo?",
    options: [
      "Guardar todos los backups en la misma unidad compartida siempre conectada",
      "Permitir macros en todos los documentos por defecto",
      "Copias offline o inmutables probadas periódicamente"
    ],
    answer: 2,
    explanation: "Las copias offline/inmutables dificultan que el ransomware las cifre o borre.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 113,
    section: "Supuesto teórico-práctico",
    topic: "DHCP Relay",
    difficulty: "alta",
    text: "Clientes de una nueva VLAN no reciben IP, pero el servidor DHCP está en otra VLAN y funciona para la red antigua. ¿Qué componente puede faltar?",
    options: [
      "DHCP relay o ip helper en el router/switch capa 3",
      "Un trigger SQL en el servidor DHCP",
      "Un certificado LDAPS en el navegador"
    ],
    answer: 0,
    explanation: "DHCP broadcast no cruza routers sin relay/ip helper.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 114,
    section: "Supuesto teórico-práctico",
    topic: "Active Directory y DNS",
    difficulty: "alta",
    text: "Un equipo unido al dominio tarda mucho en iniciar sesión y a veces no encuentra controlador de dominio. La IP es correcta pero usa DNS público. ¿Qué corregirías?",
    options: [
      "Activar POP3 como servidor principal",
      "Configurar DNS interno del dominio en el cliente",
      "Reducir el tamaño MTU del monitor"
    ],
    answer: 1,
    explanation: "Los clientes de dominio deben usar DNS capaz de localizar los registros de AD.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 115,
    section: "Supuesto teórico-práctico",
    topic: "OSI",
    difficulty: "media",
    text: "Un técnico diagnostica: enlace físico correcto, IP correcta, ping a gateway correcto, pero falla una aplicación web concreta. ¿En qué capas conviene centrar el análisis ahora?",
    options: [
      "Transporte/aplicación y servicio concreto",
      "Solo capa física",
      "Solo placa base y memoria RAM"
    ],
    answer: 0,
    explanation: "Si red básica funciona, el fallo puede estar en puertos, aplicación, servicio o capa superior.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 116,
    section: "Supuesto teórico-práctico",
    topic: "Monitorización",
    difficulty: "media",
    text: "Un servidor se queda sin espacio por logs y genera incidencias repetidas. ¿Qué solución es más adecuada?",
    options: [
      "Cambiar todos los usuarios a administradores locales",
      "Desactivar el firewall perimetral",
      "Monitorizar uso de disco y definir rotación/retención de logs"
    ],
    answer: 2,
    explanation: "Monitorización y gestión de logs previenen saturaciones recurrentes.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 117,
    section: "Supuesto teórico-práctico",
    topic: "Control remoto seguro",
    difficulty: "media",
    text: "Necesitas asistencia remota a un puesto de usuario. ¿Qué criterio es más correcto?",
    options: [
      "Usar Telnet abierto a Internet por comodidad",
      "Usar herramienta autorizada, autenticación adecuada y consentimiento o registro según política",
      "Compartir la contraseña del usuario por correo"
    ],
    answer: 1,
    explanation: "El control remoto debe hacerse con herramientas autorizadas y seguridad.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 118,
    section: "Supuesto teórico-práctico",
    topic: "Contenedores",
    difficulty: "alta",
    text: "Una aplicación se despliega en contenedores. Un contenedor cae y se recrea rápidamente desde su imagen. ¿Qué ventaja se está aprovechando?",
    options: [
      "Redundancia física de discos RAID 1",
      "Despliegue reproducible y aislamiento ligero",
      "Integridad referencial entre tablas"
    ],
    answer: 1,
    explanation: "Los contenedores facilitan despliegues reproducibles y ligeros.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 119,
    section: "Supuesto teórico-práctico",
    topic: "Incidencias",
    difficulty: "media",
    text: "En una incidencia, varios usuarios reportan caída de una aplicación crítica. ¿Qué es más correcto al iniciar la gestión?",
    options: [
      "Resolver sin documentar para ahorrar tiempo siempre",
      "Borrar logs antes de analizarlos",
      "Registrar impacto, alcance, hora de inicio y priorizar según criticidad"
    ],
    answer: 2,
    explanation: "La gestión de incidencias requiere registro, priorización y seguimiento.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 120,
    section: "Supuesto teórico-práctico",
    topic: "Puertos y servicios",
    difficulty: "alta",
    text: "Una aplicación web interna funciona en HTTP desde la LAN, pero al activar HTTPS no responde. El servicio escucha en 443 localmente. ¿Qué revisarías?",
    options: [
      "Reglas de firewall, binding HTTPS y certificado",
      "Puerto 110 de POP3 y permisos de impresora",
      "Clave primaria de la base NoSQL"
    ],
    answer: 0,
    explanation: "HTTPS requiere servicio en 443, certificado/binding y reglas de firewall adecuadas.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto teórico-práctico"
  },
  {
    id: 121,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The server must be patched before deployment.'",
    options: [
      "El servidor debe ser actualizado con parches antes del despliegue.",
      "El servidor debe ser apagado después de la copia.",
      "El cliente debe ser eliminado antes del balanceador."
    ],
    answer: 0,
    explanation: "'Patched' se traduce como actualizado con parches y 'deployment' como despliegue.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 122,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The backup failed during the restore test.'",
    options: [
      "El cortafuegos falló durante la autenticación.",
      "La copia de seguridad falló durante la prueba de restauración.",
      "La amenaza falló durante el cifrado."
    ],
    answer: 1,
    explanation: "'Backup' es copia de seguridad y 'restore' restauración.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 123,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'Users reported packet loss and high latency.'",
    options: [
      "Los usuarios informaron de claves perdidas y alta disponibilidad.",
      "Los usuarios informaron de permisos de solo lectura.",
      "Los usuarios informaron de pérdida de paquetes y alta latencia."
    ],
    answer: 2,
    explanation: "'Packet loss' es pérdida de paquetes y 'latency' latencia.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 124,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The default gateway is unreachable.'",
    options: [
      "El certificado predeterminado está cifrado.",
      "La puerta de enlace predeterminada no es alcanzable.",
      "La carpeta compartida es de solo lectura."
    ],
    answer: 1,
    explanation: "'Default gateway' es puerta de enlace predeterminada.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 125,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'The account is locked out after several failed login attempts.'",
    options: [
      "La cuenta está bloqueada tras varios intentos fallidos de inicio de sesión.",
      "El certificado está caducado después de varios reinicios.",
      "El balanceador está apagado por varias copias incrementales."
    ],
    answer: 0,
    explanation: "'Locked out' en cuentas significa bloqueada.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 126,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'Read-only access was granted to the shared folder.'",
    options: [
      "Se revocó el acceso de escritura al cortafuegos.",
      "Se restauró el acceso remoto al servidor de correo.",
      "Se concedió acceso de solo lectura a la carpeta compartida."
    ],
    answer: 2,
    explanation: "'Read-only access' significa acceso de solo lectura.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 127,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'The root cause was a misconfigured network interface card.'",
    options: [
      "La ruta raíz fue una copia diferencial mal cifrada.",
      "La cuenta principal fue un certificado mal instalado.",
      "La causa raíz fue una tarjeta de red mal configurada."
    ],
    answer: 2,
    explanation: "'Root cause' es causa raíz y 'network interface card' tarjeta de red.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 128,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The vulnerability was mitigated by a firewall rule.'",
    options: [
      "La vulnerabilidad fue mitigada mediante una regla de cortafuegos.",
      "La disponibilidad fue restaurada por una regla de copia.",
      "La autenticación fue traducida por una regla de usuario."
    ],
    answer: 0,
    explanation: "'Vulnerability' es vulnerabilidad y 'firewall rule' regla de cortafuegos.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 129,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'The deprecated protocol should be disabled.'",
    options: [
      "El protocolo compartido debería restaurarse.",
      "El protocolo obsoleto debería deshabilitarse.",
      "El certificado cifrado debería imprimirse."
    ],
    answer: 1,
    explanation: "'Deprecated' significa obsoleto o no recomendado.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 130,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'Credentials must not be stored in plain text.'",
    options: [
      "Las credenciales no deben almacenarse en texto claro.",
      "Los certificados no deben imprimirse en papel técnico.",
      "Los paquetes no deben moverse a la VLAN."
    ],
    answer: 0,
    explanation: "'Credentials' son credenciales y 'plain text' texto claro.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 131,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The load balancer redirects traffic to healthy nodes.'",
    options: [
      "El controlador de dominio borra tráfico de nodos caducados.",
      "El servidor de correo restaura copias en nodos cifrados.",
      "El balanceador de carga redirige el tráfico a nodos en buen estado."
    ],
    answer: 2,
    explanation: "'Load balancer' es balanceador de carga.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 132,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'A rollback plan is required before the upgrade.'",
    options: [
      "Se requiere un plan de lectura antes del apagado.",
      "Se requiere un plan de reversión antes de la actualización.",
      "Se requiere una clave pública antes del inventario."
    ],
    answer: 1,
    explanation: "'Rollback plan' es plan de reversión.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 133,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The endpoint protection detected malware.'",
    options: [
      "El punto final de la consulta detectó una clave primaria.",
      "La protección del puesto/dispositivo final detectó malware.",
      "La conexión final del monitor detectó HTML."
    ],
    answer: 1,
    explanation: "'Endpoint protection' se refiere a protección del dispositivo final.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 134,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'Authentication verifies identity; authorization checks permissions.'",
    options: [
      "La autorización verifica identidad; la autenticación comprueba discos.",
      "La autenticación cifra paquetes; la autorización traduce DNS.",
      "La autenticación verifica identidad; la autorización comprueba permisos."
    ],
    answer: 2,
    explanation: "Authentication = autenticación de identidad; authorization = permisos.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 135,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The outage affected the email service.'",
    options: [
      "La interrupción afectó al servicio de correo electrónico.",
      "La salida afectó a la tarjeta gráfica.",
      "La amenaza afectó al almacén de claves."
    ],
    answer: 0,
    explanation: "'Outage' es interrupción o caída de servicio.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 136,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'High availability requires redundant components.'",
    options: [
      "La alta disponibilidad requiere componentes redundantes.",
      "La alta latencia requiere componentes obsoletos.",
      "La alta autenticación requiere permisos de solo lectura."
    ],
    answer: 0,
    explanation: "'High availability' significa alta disponibilidad.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 137,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The storage array must be monitored.'",
    options: [
      "La matriz de permisos debe traducirse.",
      "La cabina/conjunto de almacenamiento debe monitorizarse.",
      "La cola de correo debe imprimirse."
    ],
    answer: 1,
    explanation: "'Storage array' se refiere a una cabina o conjunto de almacenamiento.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 138,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'Troubleshooting started after the incident was logged.'",
    options: [
      "La copia de seguridad comenzó después de cifrar el certificado.",
      "El despliegue comenzó después de bloquear la cuenta.",
      "La resolución de problemas comenzó después de registrar la incidencia."
    ],
    answer: 2,
    explanation: "'Troubleshooting' es resolución/diagnóstico de problemas e 'incident' incidencia.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 139,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "media",
    text: "Choose the best translation: 'The certificate chain is not trusted.'",
    options: [
      "La cadena de certificados no es de confianza.",
      "La cadena de copias no está comprimida.",
      "La cuenta del cliente no está compartida."
    ],
    answer: 0,
    explanation: "'Certificate chain' es cadena de certificados.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 140,
    section: "Inglés técnico",
    topic: "Traducción técnica",
    difficulty: "alta",
    text: "Choose the best translation: 'Encryption protects data in transit.'",
    options: [
      "La compresión protege los datos en impresora.",
      "El cifrado protege los datos en tránsito.",
      "La autorización protege los datos en recursividad."
    ],
    answer: 1,
    explanation: "'Encryption' es cifrado y 'data in transit' datos en tránsito.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 141,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: She ___ to work by bus every day.",
    options: [
      "goes",
      "go",
      "is go",
      "going"
    ],
    answer: 0,
    explanation: "Use present simple third person singular: she goes.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 142,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: There ___ two laptops on the desk.",
    options: [
      "is",
      "are",
      "be",
      "am"
    ],
    answer: 1,
    explanation: "Use 'there are' with plural nouns.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 143,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Choose the correct sentence.",
    options: [
      "I studying English now.",
      "I am study English now.",
      "I am studying English now.",
      "I studies English now."
    ],
    answer: 2,
    explanation: "Present continuous uses am/is/are + verb-ing.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 144,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "A2",
    text: "Which word means 'persona que trabaja en una oficina'?",
    options: [
      "airport",
      "keyboard",
      "holiday",
      "employee"
    ],
    answer: 3,
    explanation: "'Employee' means an employee or worker.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 145,
    section: "Inglés escrito general",
    topic: "Prepositions",
    difficulty: "A2",
    text: "Complete: The meeting starts ___ 9 o'clock.",
    options: [
      "in",
      "at",
      "on",
      "by"
    ],
    answer: 1,
    explanation: "Use 'at' with clock times.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 146,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: I ___ coffee in the morning.",
    options: [
      "drink",
      "drinks",
      "drinking",
      "am drink"
    ],
    answer: 0,
    explanation: "Present simple with I uses the base verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 147,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Choose the correct past simple sentence.",
    options: [
      "Yesterday we visit the museum.",
      "Yesterday we visiting the museum.",
      "Yesterday we are visited the museum.",
      "Yesterday we visited the museum."
    ],
    answer: 3,
    explanation: "Regular past simple uses -ed: visited.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 148,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "A2",
    text: "What is the opposite of 'early'?",
    options: [
      "fast",
      "near",
      "late",
      "safe"
    ],
    answer: 2,
    explanation: "The opposite of early is late.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 149,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: This is ___ umbrella.",
    options: [
      "a",
      "the for",
      "an",
      "some"
    ],
    answer: 2,
    explanation: "Use 'an' before a vowel sound.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 150,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: They ___ from Spain.",
    options: [
      "is",
      "am",
      "be",
      "are"
    ],
    answer: 3,
    explanation: "Use 'are' with they.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 151,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Choose the correct question.",
    options: [
      "Where do you live?",
      "Where you live?",
      "Where does you live?",
      "Where are live you?"
    ],
    answer: 0,
    explanation: "Present simple questions use do/does.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 152,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "A2",
    text: "Complete: I need to buy bread, milk and eggs at the ___.",
    options: [
      "hospital",
      "supermarket",
      "printer",
      "meeting"
    ],
    answer: 1,
    explanation: "Food shopping is commonly done at a supermarket.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 153,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: My sister is ___ than me.",
    options: [
      "youngest",
      "more young",
      "the young",
      "younger"
    ],
    answer: 3,
    explanation: "Comparatives with short adjectives usually add -er.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 154,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "A2",
    text: "Complete: We don't have ___ time.",
    options: [
      "many",
      "a few",
      "much",
      "several"
    ],
    answer: 2,
    explanation: "Use 'much' with uncountable nouns like time.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 155,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "A2",
    text: "Notice: 'Please turn off the lights before leaving the room.' What should you do?",
    options: [
      "Leave the lights on all night.",
      "Switch the lights off when you leave.",
      "Open the windows before entering.",
      "Call security immediately."
    ],
    answer: 1,
    explanation: "The notice asks people to turn off the lights before leaving.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 156,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Complete: I have worked here ___ 2022.",
    options: [
      "since",
      "for",
      "during",
      "from"
    ],
    answer: 0,
    explanation: "Use 'since' with a starting point in time.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 157,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Complete: You ___ wear your ID card in this area.",
    options: [
      "must",
      "to must",
      "must to",
      "musting"
    ],
    answer: 0,
    explanation: "Modal verbs are followed by the base verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 158,
    section: "Inglés escrito general",
    topic: "Connectors",
    difficulty: "B1",
    text: "Complete: I was tired, ___ I finished the report.",
    options: [
      "because",
      "but",
      "so that",
      "although of"
    ],
    answer: 1,
    explanation: "'But' shows contrast.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 159,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Complete: If it rains tomorrow, we ___ the visit.",
    options: [
      "cancelled",
      "would cancelled",
      "will cancel",
      "cancels"
    ],
    answer: 2,
    explanation: "First conditional: if + present, will + base verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 160,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Choose the correct passive sentence.",
    options: [
      "The email sent yesterday.",
      "The email was send yesterday.",
      "The email did sent yesterday.",
      "The email was sent yesterday."
    ],
    answer: 3,
    explanation: "Past passive uses was/were + past participle.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 161,
    section: "Inglés escrito general",
    topic: "Prepositions",
    difficulty: "B1",
    text: "Complete: She is responsible ___ checking the tickets.",
    options: [
      "of",
      "for",
      "to",
      "with"
    ],
    answer: 1,
    explanation: "The adjective 'responsible' is followed by 'for'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 162,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Complete: We have ___ finished the task.",
    options: [
      "already",
      "yet",
      "still not",
      "ever not"
    ],
    answer: 0,
    explanation: "'Already' is used in affirmative present perfect sentences.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 163,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "B1",
    text: "Which word is closest in meaning to 'solve'?",
    options: [
      "break",
      "delay",
      "forget",
      "fix"
    ],
    answer: 3,
    explanation: "To solve a problem is to fix it.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 164,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "B1",
    text: "Email: 'Could you please confirm your attendance by Friday?' What is requested?",
    options: [
      "To cancel the event on Friday.",
      "To send an invoice after Friday.",
      "To say whether you will attend before Friday.",
      "To change the location immediately."
    ],
    answer: 2,
    explanation: "The email asks for confirmation of attendance by a deadline.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 165,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Complete: I ___ dinner when the phone rang.",
    options: [
      "cooked always",
      "am cooking",
      "was cooking",
      "have cooked"
    ],
    answer: 2,
    explanation: "Past continuous describes an action in progress interrupted by another past event.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 166,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Choose the correct relative clause.",
    options: [
      "The technician which repaired the printer was very helpful.",
      "The technician where repaired the printer was very helpful.",
      "The technician what repaired the printer was very helpful.",
      "The technician who repaired the printer was very helpful."
    ],
    answer: 3,
    explanation: "Use 'who' for people.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 167,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "B1",
    text: "What does 'appointment' mean?",
    options: [
      "A scheduled meeting or visit",
      "A type of password",
      "A broken device",
      "A public holiday only"
    ],
    answer: 0,
    explanation: "An appointment is an arranged time for a meeting or visit.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 168,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B1",
    text: "Complete: There isn't ___ information in the message.",
    options: [
      "many",
      "enough",
      "few",
      "several"
    ],
    answer: 1,
    explanation: "'Enough' means sufficient and can be used with uncountable nouns.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 169,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "B1",
    text: "Choose the correct sentence.",
    options: [
      "He never has been to London.",
      "He has never went to London.",
      "He never been has to London.",
      "He has never been to London."
    ],
    answer: 3,
    explanation: "Present perfect uses has/have + past participle.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 170,
    section: "Inglés escrito general",
    topic: "Connectors",
    difficulty: "B1",
    text: "Complete: The file was too large; ___, I compressed it.",
    options: [
      "although",
      "despite",
      "therefore",
      "unless"
    ],
    answer: 2,
    explanation: "'Therefore' introduces a result.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 171,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B2",
    text: "Complete: By the time we arrived, the meeting ___.",
    options: [
      "has already started",
      "had already started",
      "already starts",
      "was already start"
    ],
    answer: 1,
    explanation: "Past perfect describes an earlier past action.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 172,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B2",
    text: "Complete: If I ___ more time, I would check the logs again.",
    options: [
      "had",
      "have",
      "will have",
      "having"
    ],
    answer: 0,
    explanation: "Second conditional: if + past simple, would + base verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 173,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "B2",
    text: "Choose the most natural sentence.",
    options: [
      "The sooner we identify the issue, the faster we can fix it.",
      "Sooner we identify the issue, faster we can fix it.",
      "The soon we identify issue, the fast we can fix it.",
      "Soonest we identify the issue, fastest we can fix it."
    ],
    answer: 0,
    explanation: "The structure is 'the comparative..., the comparative...'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 174,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "B2",
    text: "Which word is closest in meaning to 'reliable'?",
    options: [
      "temporary",
      "dependable",
      "careless",
      "unrelated"
    ],
    answer: 1,
    explanation: "Reliable means dependable or trustworthy.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 175,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B2",
    text: "Complete: The report, ___ was sent yesterday, contains the final figures.",
    options: [
      "who",
      "where",
      "which",
      "whose"
    ],
    answer: 2,
    explanation: "Use 'which' for a thing in a non-defining relative clause.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 176,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "B2",
    text: "Message: 'Due to maintenance, access to the platform will be unavailable from 22:00 to 23:30.' What does it mean?",
    options: [
      "The platform will be faster during that time.",
      "Maintenance has been cancelled.",
      "Users must change their passwords before 22:00.",
      "You will not be able to use the platform during that time."
    ],
    answer: 3,
    explanation: "'Unavailable' means not accessible.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 177,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B2",
    text: "Complete: The manager asked me ___ the client before noon.",
    options: [
      "call",
      "to call",
      "calling",
      "called"
    ],
    answer: 1,
    explanation: "'Ask someone to do something' uses to + infinitive.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 178,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "B2",
    text: "Choose the correct reported speech.",
    options: [
      "She said that she had finished the task.",
      "She said that she has finish the task.",
      "She said she finishes the task yesterday.",
      "She said that she finished tomorrow the task."
    ],
    answer: 0,
    explanation: "Reported speech often backshifts present perfect to past perfect.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 179,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "B2",
    text: "What does 'despite' mean in this sentence: 'Despite the delay, the team completed the work'?",
    options: [
      "Because there was",
      "In order to create",
      "As soon as",
      "Although there was"
    ],
    answer: 3,
    explanation: "'Despite' introduces contrast.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 180,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B2",
    text: "Complete: This is the ___ solution we have tested so far.",
    options: [
      "more effective",
      "effectivest",
      "most effective",
      "much effective"
    ],
    answer: 2,
    explanation: "Superlative with longer adjectives uses 'most'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 181,
    section: "Inglés escrito general",
    topic: "Prepositions",
    difficulty: "B2",
    text: "Complete: The system is compatible ___ several browsers.",
    options: [
      "to",
      "for",
      "with",
      "about"
    ],
    answer: 2,
    explanation: "'Compatible with' is the correct collocation.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 182,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "B2",
    text: "Email: 'I would appreciate it if you could send the updated document at your earliest convenience.' What tone is used?",
    options: [
      "Angry and threatening",
      "Very informal slang",
      "Legally prohibitive",
      "Polite and formal"
    ],
    answer: 3,
    explanation: "The phrase is a polite formal request.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 183,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "B2",
    text: "Complete: The issue should have ___ reported earlier.",
    options: [
      "been",
      "be",
      "being",
      "was"
    ],
    answer: 0,
    explanation: "Passive modal perfect: should have been + past participle.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 184,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "B2",
    text: "Choose the sentence with correct word order.",
    options: [
      "Rarely I work from home on Mondays.",
      "I rarely work from home on Mondays.",
      "I work rarely from on Mondays home.",
      "On Mondays rarely from home I work."
    ],
    answer: 1,
    explanation: "Adverbs of frequency usually go before the main verb.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 185,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "B2",
    text: "Which is the best synonym for 'brief' in 'a brief explanation'?",
    options: [
      "late",
      "complex",
      "incorrect",
      "short"
    ],
    answer: 3,
    explanation: "Brief means short or concise.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 186,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "C1",
    text: "Complete: Had I known about the problem, I ___ earlier.",
    options: [
      "will act",
      "would act",
      "would have acted",
      "had acted"
    ],
    answer: 2,
    explanation: "Inversion in third conditional: Had I known..., I would have acted.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 187,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "C1",
    text: "Choose the most appropriate sentence.",
    options: [
      "No sooner the update had installed than errors began to appear.",
      "No sooner had the update been installed than the errors began to appear.",
      "No sooner had installed the update that errors appeared.",
      "No sooner was the update install than errors appeared."
    ],
    answer: 1,
    explanation: "'No sooner had...' requires inversion and 'than'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 188,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "C1",
    text: "Which word best fits: 'The instructions were so ___ that several users misunderstood them.'",
    options: [
      "ambiguous",
      "accurate",
      "straightforward",
      "obvious"
    ],
    answer: 0,
    explanation: "Ambiguous means open to more than one interpretation.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 189,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "C1",
    text: "Complete: The proposal was rejected, ___ its technical quality.",
    options: [
      "notwithstanding",
      "whereas",
      "unless",
      "therefore"
    ],
    answer: 0,
    explanation: "'Notwithstanding' means despite.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 190,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "C1",
    text: "Text: 'The deadline has been brought forward to accommodate the audit schedule.' What happened to the deadline?",
    options: [
      "It was postponed indefinitely.",
      "It was moved to an earlier date.",
      "It was cancelled completely.",
      "It became optional."
    ],
    answer: 1,
    explanation: "'Brought forward' means moved earlier.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 191,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "C1",
    text: "Choose the best transformation: 'It is possible that he forgot the attachment.'",
    options: [
      "He must forget the attachment.",
      "He should forget the attachment.",
      "He may have forgotten the attachment.",
      "He can forgotten the attachment."
    ],
    answer: 2,
    explanation: "'May have + past participle' expresses past possibility.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 192,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "C1",
    text: "Complete: Rarely ___ such a detailed incident report.",
    options: [
      "I have seen",
      "I seen",
      "have seen I",
      "have I seen"
    ],
    answer: 3,
    explanation: "Negative/limiting adverbs at the start require inversion.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 193,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "C1",
    text: "Which word means 'to make something less severe'?",
    options: [
      "exacerbate",
      "mitigate",
      "neglect",
      "conceal"
    ],
    answer: 1,
    explanation: "To mitigate is to reduce severity or impact.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 194,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "C1",
    text: "Complete: The more carefully you document the issue, ___ it is to resolve.",
    options: [
      "the easier",
      "easier",
      "the easiest",
      "more easy"
    ],
    answer: 0,
    explanation: "Use parallel comparative structure: the more..., the easier...",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 195,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "C1",
    text: "Email: 'Please find attached the revised version, which supersedes the previous draft.' What does 'supersedes' mean?",
    options: [
      "Summarises",
      "Confirms",
      "Deletes temporarily",
      "Replaces"
    ],
    answer: 3,
    explanation: "To supersede means to replace something previous.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 196,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "C2",
    text: "Choose the best word: 'The outage had a ___ effect on several dependent services.'",
    options: [
      "casual",
      "careless",
      "cascading",
      "cosmetic"
    ],
    answer: 2,
    explanation: "A cascading effect spreads through dependent systems.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 197,
    section: "Inglés escrito general",
    topic: "Use of English",
    difficulty: "C2",
    text: "Complete: The explanation was clear, ___ somewhat oversimplified.",
    options: [
      "unless",
      "whereby",
      "albeit",
      "lest"
    ],
    answer: 2,
    explanation: "'Albeit' means although, often in concise formal style.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 198,
    section: "Inglés escrito general",
    topic: "Grammar",
    difficulty: "C2",
    text: "Choose the most accurate sentence.",
    options: [
      "Not only the patch failed to fix the bug, but also introduced new issues.",
      "Not only did failed the patch to fix the bug, but it introduced also new issues.",
      "Not only the patch did fail fix the bug, but it also introducing issues.",
      "Not only did the patch fail to fix the bug, but it also introduced new issues."
    ],
    answer: 3,
    explanation: "'Not only' at the start requires auxiliary inversion.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 199,
    section: "Inglés escrito general",
    topic: "Vocabulary",
    difficulty: "C2",
    text: "Which word best means 'difficult to understand because of complexity'?",
    options: [
      "convoluted",
      "transparent",
      "minor",
      "redundant"
    ],
    answer: 0,
    explanation: "Convoluted means complex and difficult to follow.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 200,
    section: "Inglés escrito general",
    topic: "Reading",
    difficulty: "C2",
    text: "Text: 'The policy is not merely advisory; it is binding unless an explicit exception has been approved.' What does this imply?",
    options: [
      "The policy is optional for all employees.",
      "The policy must be followed unless an approved exception exists.",
      "The policy only applies to external clients.",
      "The policy has been withdrawn."
    ],
    answer: 1,
    explanation: "'Binding' means obligatory or enforceable.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  }
];