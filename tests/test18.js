const questions = [
  {
    id: 1,
    section: "BLOQUE 6 — INTERNET",
    topic: "Arquitectura de Internet",
    difficulty: "media",
    text: "¿Qué define mejor a Internet desde el punto de vista técnico?",
    options: [
      "Una red única centralizada controlada por un servidor principal",
      "Una red de redes interconectadas que usa principalmente la familia de protocolos TCP/IP",
      "Una aplicación web que permite acceder a páginas HTML"
    ],
    answer: 1,
    explanation: "Internet es una red global formada por múltiples redes interconectadas mediante TCP/IP.",
    reference: "Bloque IV.08 — Internet: arquitectura de red"
  },
  {
    id: 2,
    section: "BLOQUE 6 — INTERNET",
    topic: "Arquitectura de Internet",
    difficulty: "media",
    text: "¿Qué elemento permite interconectar redes diferentes encaminando paquetes IP?",
    options: [
      "Router",
      "Hub",
      "Tarjeta gráfica"
    ],
    answer: 0,
    explanation: "El router trabaja en capa de red y permite encaminar paquetes entre redes distintas.",
    reference: "Bloque IV.08 — Internet: arquitectura de red"
  },
  {
    id: 3,
    section: "BLOQUE 6 — INTERNET",
    topic: "Arquitectura de Internet",
    difficulty: "media",
    text: "¿Qué función realiza un ISP en el acceso a Internet?",
    options: [
      "Proporciona servicios de acceso y conectividad a Internet",
      "Sustituye al sistema operativo del usuario",
      "Traduce exclusivamente código HTML a lenguaje máquina"
    ],
    answer: 0,
    explanation: "Un ISP es un proveedor de servicios de Internet que da conectividad a usuarios y organizaciones.",
    reference: "Bloque IV.08 — Internet: arquitectura de red"
  },
  {
    id: 4,
    section: "BLOQUE 6 — INTERNET",
    topic: "Arquitectura de Internet",
    difficulty: "alta",
    text: "En Internet, ¿qué significa que la comunicación sea por conmutación de paquetes?",
    options: [
      "Que se establece siempre un circuito físico dedicado durante toda la comunicación",
      "Que la información se divide en paquetes que pueden recorrer rutas distintas",
      "Que solo se puede transmitir información de voz"
    ],
    answer: 1,
    explanation: "Internet divide los datos en paquetes, que son encaminados por la red hasta el destino.",
    reference: "Bloque IV.08 — Internet: arquitectura de red"
  },
  {
    id: 5,
    section: "BLOQUE 6 — INTERNET",
    topic: "TCP/IP",
    difficulty: "media",
    text: "¿Qué protocolo se encarga principalmente del direccionamiento y encaminamiento de paquetes en Internet?",
    options: [
      "HTTP",
      "IP",
      "SMTP"
    ],
    answer: 1,
    explanation: "IP proporciona direccionamiento lógico y permite el encaminamiento de paquetes.",
    reference: "Bloque IV.08 — Protocolos asociados a Internet"
  },
  {
    id: 6,
    section: "BLOQUE 6 — INTERNET",
    topic: "TCP/IP",
    difficulty: "media",
    text: "¿Qué protocolo proporciona transporte fiable, orientado a conexión y con control de errores?",
    options: [
      "TCP",
      "UDP",
      "ARP"
    ],
    answer: 0,
    explanation: "TCP establece conexión, controla errores, confirma recepción y ordena los segmentos.",
    reference: "Bloque IV.08 — Protocolos asociados a Internet"
  },
  {
    id: 7,
    section: "BLOQUE 6 — INTERNET",
    topic: "TCP/IP",
    difficulty: "media",
    text: "¿Qué protocolo de transporte es más adecuado para comunicaciones rápidas donde se tolera cierta pérdida de datos?",
    options: [
      "TCP",
      "UDP",
      "HTTPS"
    ],
    answer: 1,
    explanation: "UDP no establece conexión ni garantiza entrega, por eso se usa en servicios donde prima la rapidez.",
    reference: "Bloque IV.08 — Protocolos asociados a Internet"
  },
  {
    id: 8,
    section: "BLOQUE 6 — INTERNET",
    topic: "DNS",
    difficulty: "media",
    text: "¿Cuál es la función principal del DNS?",
    options: [
      "Traducir nombres de dominio en direcciones IP",
      "Cifrar las comunicaciones web",
      "Asignar direcciones MAC a los equipos"
    ],
    answer: 0,
    explanation: "DNS resuelve nombres como ejemplo.com a direcciones IP.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 9,
    section: "BLOQUE 6 — INTERNET",
    topic: "DNS",
    difficulty: "alta",
    text: "¿Qué tipo de registro DNS se utiliza habitualmente para asociar un nombre de dominio con una dirección IPv4?",
    options: [
      "MX",
      "A",
      "CNAME"
    ],
    answer: 1,
    explanation: "El registro A asocia un nombre de host con una dirección IPv4.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 10,
    section: "BLOQUE 6 — INTERNET",
    topic: "DNS",
    difficulty: "alta",
    text: "¿Qué tipo de registro DNS identifica servidores de correo para un dominio?",
    options: [
      "MX",
      "AAAA",
      "PTR"
    ],
    answer: 0,
    explanation: "Los registros MX indican qué servidores reciben correo para un dominio.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 11,
    section: "BLOQUE 6 — INTERNET",
    topic: "DNS",
    difficulty: "alta",
    text: "¿Qué registro DNS se usa para asociar un nombre de dominio con una dirección IPv6?",
    options: [
      "A",
      "AAAA",
      "TXT"
    ],
    answer: 1,
    explanation: "El registro AAAA asocia un nombre con una dirección IPv6.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 12,
    section: "BLOQUE 6 — INTERNET",
    topic: "URL",
    difficulty: "media",
    text: "En la URL https://www.ejemplo.com:443/ruta/index.html, ¿qué indica https?",
    options: [
      "El protocolo o esquema utilizado",
      "El nombre del servidor DNS raíz",
      "La extensión del archivo"
    ],
    answer: 0,
    explanation: "El esquema indica el protocolo utilizado para acceder al recurso.",
    reference: "Bloque IV.08 — Servicios web y protocolos asociados"
  },
  {
    id: 13,
    section: "BLOQUE 6 — INTERNET",
    topic: "URL",
    difficulty: "media",
    text: "En una URL, ¿qué representa normalmente el número situado después de dos puntos en el nombre del host?",
    options: [
      "El puerto de conexión",
      "La máscara de subred",
      "El código de estado HTTP"
    ],
    answer: 0,
    explanation: "En una URL, el número tras dos puntos indica el puerto TCP o UDP usado por el servicio.",
    reference: "Bloque IV.08 — Servicios web y protocolos asociados"
  },
  {
    id: 14,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "media",
    text: "¿Qué puerto TCP utiliza HTTP por defecto?",
    options: [
      "21",
      "80",
      "443"
    ],
    answer: 1,
    explanation: "HTTP usa por defecto el puerto TCP 80.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 15,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTPS",
    difficulty: "media",
    text: "¿Qué puerto TCP utiliza HTTPS por defecto?",
    options: [
      "110",
      "143",
      "443"
    ],
    answer: 2,
    explanation: "HTTPS usa por defecto el puerto TCP 443.",
    reference: "Bloque IV.08 — HTTPS"
  },
  {
    id: 16,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "media",
    text: "¿Qué característica define mejor al protocolo HTTP?",
    options: [
      "Es un protocolo de transferencia de hipertexto usado en la Web",
      "Es un protocolo exclusivo para transferencia de correo electrónico",
      "Es un protocolo de direccionamiento físico"
    ],
    answer: 0,
    explanation: "HTTP permite la transferencia de recursos web como páginas HTML, imágenes o datos.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 17,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué significa que HTTP sea un protocolo sin estado?",
    options: [
      "Que cada petición se procesa de forma independiente",
      "Que no puede transportar texto",
      "Que solo funciona en redes locales"
    ],
    answer: 0,
    explanation: "HTTP no conserva por sí mismo el estado entre peticiones; para ello se usan mecanismos como cookies o sesiones.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 18,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "media",
    text: "¿Qué método HTTP se utiliza normalmente para solicitar un recurso al servidor?",
    options: [
      "GET",
      "POST",
      "DELETE"
    ],
    answer: 0,
    explanation: "GET solicita la representación de un recurso.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 19,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "media",
    text: "¿Qué método HTTP se utiliza habitualmente para enviar datos al servidor, por ejemplo desde un formulario?",
    options: [
      "GET",
      "POST",
      "HEAD"
    ],
    answer: 1,
    explanation: "POST se utiliza para enviar datos al servidor para su procesamiento.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 20,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué método HTTP se asocia normalmente con la sustitución completa de un recurso?",
    options: [
      "PUT",
      "TRACE",
      "OPTIONS"
    ],
    answer: 0,
    explanation: "PUT suele utilizarse para crear o reemplazar un recurso en una ubicación concreta.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 21,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué indica un código de estado HTTP 200?",
    options: [
      "Solicitud correcta",
      "Recurso no encontrado",
      "Error interno del servidor"
    ],
    answer: 0,
    explanation: "El código 200 OK indica que la petición se ha procesado correctamente.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 22,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué indica un código de estado HTTP 404?",
    options: [
      "Redirección temporal",
      "Recurso no encontrado",
      "Autenticación correcta"
    ],
    answer: 1,
    explanation: "El código 404 Not Found indica que el recurso solicitado no se ha encontrado.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 23,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué indica un código de estado HTTP 500?",
    options: [
      "Error interno del servidor",
      "Solicitud sin contenido",
      "Recurso movido permanentemente"
    ],
    answer: 0,
    explanation: "El código 500 Internal Server Error indica un error en el servidor.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 24,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué indica un código de estado HTTP 301?",
    options: [
      "Recurso movido permanentemente",
      "Petición prohibida",
      "Error de DNS"
    ],
    answer: 0,
    explanation: "301 Moved Permanently indica una redirección permanente del recurso.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 25,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "media",
    text: "¿Qué parte de un mensaje HTTP contiene metadatos como tipo de contenido, longitud o cookies?",
    options: [
      "Cabeceras",
      "Dirección MAC",
      "Tabla ARP"
    ],
    answer: 0,
    explanation: "Las cabeceras HTTP transportan metadatos de la petición o respuesta.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 26,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué cabecera HTTP indica normalmente el tipo de contenido enviado?",
    options: [
      "Content-Type",
      "User-Agent",
      "Host"
    ],
    answer: 0,
    explanation: "Content-Type indica el tipo MIME del contenido, por ejemplo text/html o application/json.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 27,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP",
    difficulty: "alta",
    text: "¿Qué cabecera HTTP identifica el navegador o cliente que realiza la petición?",
    options: [
      "User-Agent",
      "Location",
      "Set-Cookie"
    ],
    answer: 0,
    explanation: "User-Agent informa del cliente, navegador o aplicación que realiza la petición.",
    reference: "Bloque IV.08 — HTTP"
  },
  {
    id: 28,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTPS",
    difficulty: "media",
    text: "¿Qué aporta HTTPS frente a HTTP?",
    options: [
      "Cifrado y autenticación mediante TLS",
      "Mayor tamaño físico de los paquetes Ethernet",
      "Asignación automática de direcciones IP"
    ],
    answer: 0,
    explanation: "HTTPS combina HTTP con TLS para proteger la comunicación.",
    reference: "Bloque IV.08 — HTTPS y SSL/TLS"
  },
  {
    id: 29,
    section: "BLOQUE 6 — INTERNET",
    topic: "SSL/TLS",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza actualmente para proteger las comunicaciones HTTPS?",
    options: [
      "TLS",
      "ARP",
      "ICMP"
    ],
    answer: 0,
    explanation: "TLS es el protocolo actual usado para proteger HTTPS. SSL es su predecesor.",
    reference: "Bloque IV.08 — HTTPS y SSL/TLS"
  },
  {
    id: 30,
    section: "BLOQUE 6 — INTERNET",
    topic: "SSL/TLS",
    difficulty: "alta",
    text: "¿Cuál es una función principal de un certificado digital en HTTPS?",
    options: [
      "Permitir autenticar la identidad del servidor",
      "Asignar automáticamente una IP privada al cliente",
      "Sustituir completamente al protocolo TCP"
    ],
    answer: 0,
    explanation: "El certificado permite comprobar la identidad del servidor y establecer una comunicación segura.",
    reference: "Bloque IV.08 — HTTPS y SSL/TLS"
  },
  {
    id: 31,
    section: "BLOQUE 6 — INTERNET",
    topic: "SSL/TLS",
    difficulty: "alta",
    text: "¿Qué entidad emite y firma certificados digitales de servidor usados en HTTPS?",
    options: [
      "Autoridad de certificación",
      "Servidor DHCP",
      "Cliente FTP"
    ],
    answer: 0,
    explanation: "Una autoridad de certificación firma certificados para que los clientes puedan confiar en ellos.",
    reference: "Bloque IV.08 — HTTPS y SSL/TLS"
  },
  {
    id: 32,
    section: "BLOQUE 6 — INTERNET",
    topic: "SSL/TLS",
    difficulty: "alta",
    text: "Durante una conexión TLS, ¿para qué se utiliza la criptografía asimétrica principalmente?",
    options: [
      "Para facilitar el intercambio seguro de claves y la autenticación",
      "Para sustituir el direccionamiento IP",
      "Para aumentar la velocidad física del cable"
    ],
    answer: 0,
    explanation: "La criptografía asimétrica ayuda a autenticar y establecer claves seguras que luego permiten cifrado simétrico.",
    reference: "Bloque IV.08 — HTTPS y SSL/TLS"
  },
  {
    id: 33,
    section: "BLOQUE 6 — INTERNET",
    topic: "SSL/TLS",
    difficulty: "alta",
    text: "¿Qué sucede si un navegador detecta que el certificado HTTPS de un sitio está caducado o no es confiable?",
    options: [
      "Normalmente muestra una advertencia de seguridad",
      "Convierte automáticamente HTTPS en FTP",
      "Elimina la dirección IP del servidor"
    ],
    answer: 0,
    explanation: "Los navegadores avisan cuando no pueden validar correctamente el certificado del sitio.",
    reference: "Bloque IV.08 — HTTPS y SSL/TLS"
  },
  {
    id: 34,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza habitualmente para transferir archivos entre cliente y servidor?",
    options: [
      "FTP",
      "SMTP",
      "DHCP"
    ],
    answer: 0,
    explanation: "FTP es un protocolo clásico de transferencia de archivos.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 35,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza principalmente para el envío de correo electrónico entre servidores?",
    options: [
      "SMTP",
      "POP3",
      "IMAP"
    ],
    answer: 0,
    explanation: "SMTP se utiliza para el envío de correo electrónico.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 36,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "media",
    text: "¿Qué protocolo permite consultar correo manteniéndolo normalmente en el servidor y sincronizando carpetas?",
    options: [
      "POP3",
      "IMAP",
      "SNMP"
    ],
    answer: 1,
    explanation: "IMAP permite consultar y sincronizar correo manteniéndolo en el servidor.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 37,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "media",
    text: "¿Qué protocolo descarga normalmente el correo al cliente y puede eliminarlo del servidor según configuración?",
    options: [
      "POP3",
      "IMAP",
      "HTTPS"
    ],
    answer: 0,
    explanation: "POP3 se usa para descargar correo al cliente, a diferencia de IMAP que sincroniza carpetas.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 38,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "media",
    text: "¿Qué protocolo permite acceso remoto a una consola de forma cifrada?",
    options: [
      "Telnet",
      "SSH",
      "FTP"
    ],
    answer: 1,
    explanation: "SSH permite administración remota cifrada, a diferencia de Telnet.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 39,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "media",
    text: "¿Qué protocolo de Internet se usa para sincronizar la hora de los sistemas?",
    options: [
      "NTP",
      "HTTP",
      "ARP"
    ],
    answer: 0,
    explanation: "NTP se utiliza para sincronizar relojes de equipos y servidores.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 40,
    section: "BLOQUE 6 — INTERNET",
    topic: "Servicios de Internet",
    difficulty: "alta",
    text: "¿Qué protocolo se utiliza habitualmente para la gestión y monitorización de dispositivos de red?",
    options: [
      "SNMP",
      "SMTP",
      "SFTP"
    ],
    answer: 0,
    explanation: "SNMP permite supervisar y gestionar dispositivos de red.",
    reference: "Bloque IV.08 — Principales servicios de Internet"
  },
  {
    id: 41,
    section: "BLOQUE 6 — INTERNET",
    topic: "NAT",
    difficulty: "media",
    text: "¿Qué permite NAT en una red privada conectada a Internet?",
    options: [
      "Que varios equipos usen una dirección pública para salir a Internet",
      "Que desaparezca la necesidad de direcciones IP",
      "Que HTTP funcione sin TCP"
    ],
    answer: 0,
    explanation: "NAT traduce direcciones privadas a una o varias direcciones públicas para acceder a Internet.",
    reference: "Bloque IV.08 — Arquitectura de Internet"
  },
  {
    id: 42,
    section: "BLOQUE 6 — INTERNET",
    topic: "NAT",
    difficulty: "alta",
    text: "¿Qué variante de NAT permite distinguir conexiones de varios equipos usando también números de puerto?",
    options: [
      "PAT",
      "ARP",
      "ICMP"
    ],
    answer: 0,
    explanation: "PAT, también llamado NAT overload, usa puertos para multiplexar conexiones.",
    reference: "Bloque IV.08 — Arquitectura de Internet"
  },
  {
    id: 43,
    section: "BLOQUE 6 — INTERNET",
    topic: "Proxy",
    difficulty: "media",
    text: "¿Qué función puede realizar un servidor proxy en el acceso a Internet?",
    options: [
      "Intermediar peticiones entre clientes y servidores externos",
      "Sustituir la memoria RAM del equipo",
      "Convertir señales analógicas en digitales exclusivamente"
    ],
    answer: 0,
    explanation: "Un proxy actúa como intermediario y puede filtrar, registrar o cachear peticiones.",
    reference: "Bloque IV.08 — Arquitectura de Internet"
  },
  {
    id: 44,
    section: "BLOQUE 6 — INTERNET",
    topic: "Proxy",
    difficulty: "alta",
    text: "¿Qué ventaja puede aportar un proxy caché?",
    options: [
      "Reducir tiempos de acceso a recursos ya solicitados",
      "Eliminar la necesidad de DNS en toda la red",
      "Cambiar automáticamente el sistema operativo del cliente"
    ],
    answer: 0,
    explanation: "Un proxy caché guarda copias de recursos para servirlos más rápido en futuras peticiones.",
    reference: "Bloque IV.08 — Arquitectura de Internet"
  },
  {
    id: 45,
    section: "BLOQUE 6 — INTERNET",
    topic: "CDN",
    difficulty: "alta",
    text: "¿Cuál es el objetivo principal de una CDN en Internet?",
    options: [
      "Distribuir contenido desde servidores cercanos al usuario para mejorar rendimiento",
      "Asignar direcciones IP privadas a equipos de una LAN",
      "Eliminar completamente el uso de certificados digitales"
    ],
    answer: 0,
    explanation: "Una CDN distribuye contenido en múltiples ubicaciones para mejorar latencia y disponibilidad.",
    reference: "Bloque IV.08 — Estado actual de Internet y servicios"
  },
  {
    id: 46,
    section: "BLOQUE 6 — INTERNET",
    topic: "IPv6",
    difficulty: "media",
    text: "¿Qué problema ayuda a resolver IPv6 frente a IPv4?",
    options: [
      "El agotamiento de direcciones IP disponibles",
      "La falta de cables Ethernet",
      "La imposibilidad de usar navegadores web"
    ],
    answer: 0,
    explanation: "IPv6 amplía enormemente el espacio de direcciones respecto a IPv4.",
    reference: "Bloque IV.08 — Estado actual de Internet"
  },
  {
    id: 47,
    section: "BLOQUE 6 — INTERNET",
    topic: "ICMP",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza habitualmente por la herramienta ping?",
    options: [
      "ICMP",
      "SMTP",
      "HTTPS"
    ],
    answer: 0,
    explanation: "ping usa mensajes ICMP Echo Request y Echo Reply para comprobar conectividad.",
    reference: "Bloque IV.08 — Protocolos asociados a Internet"
  },
  {
    id: 48,
    section: "BLOQUE 6 — INTERNET",
    topic: "Traceroute",
    difficulty: "alta",
    text: "¿Para qué se utiliza una herramienta como traceroute o tracert?",
    options: [
      "Para mostrar los saltos que sigue un paquete hasta un destino",
      "Para cifrar una página web con TLS",
      "Para crear una tabla de usuarios locales"
    ],
    answer: 0,
    explanation: "traceroute o tracert permite ver los routers intermedios hasta un destino.",
    reference: "Bloque IV.08 — Arquitectura de Internet"
  },
  {
    id: 49,
    section: "BLOQUE 6 — INTERNET",
    topic: "Cliente-servidor",
    difficulty: "media",
    text: "En el modelo cliente-servidor de la Web, ¿qué papel realiza el navegador?",
    options: [
      "Cliente que solicita recursos al servidor web",
      "Servidor DNS raíz",
      "Dispositivo de conmutación de capa 2"
    ],
    answer: 0,
    explanation: "El navegador actúa como cliente HTTP/HTTPS y solicita recursos al servidor web.",
    reference: "Bloque IV.08 — Servicios web y protocolos asociados"
  },
  {
    id: 50,
    section: "BLOQUE 6 — INTERNET",
    topic: "HTTP/HTTPS",
    difficulty: "alta",
    text: "¿Cuál es la diferencia esencial entre HTTP y HTTPS?",
    options: [
      "HTTPS añade una capa de seguridad mediante TLS sobre HTTP",
      "HTTP solo funciona con IPv6 y HTTPS solo con IPv4",
      "HTTPS no utiliza puertos TCP"
    ],
    answer: 0,
    explanation: "HTTPS es HTTP protegido mediante TLS, lo que aporta cifrado, integridad y autenticación del servidor.",
    reference: "Bloque IV.08 — HTTP, HTTPS y SSL/TLS"
  }
];