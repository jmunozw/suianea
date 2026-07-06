const questions = [
  {
    id: 1,
    section: "BLOQUE 3 — REDES",
    topic: "Modelo OSI",
    difficulty: "media",
    text: "¿Cuál es la PDU correspondiente a la capa de enlace de datos del modelo OSI?",
    options: [
      "Trama",
      "Paquete",
      "Segmento"
    ],
    answer: 0,
    explanation: "En la capa de enlace de datos la unidad de datos se denomina trama. El paquete corresponde a la capa de red y el segmento a transporte.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Modelo OSI"
  },
  {
    id: 2,
    section: "BLOQUE 3 — REDES",
    topic: "Modelo OSI",
    difficulty: "media",
    text: "¿En qué capa del modelo OSI trabaja principalmente el protocolo IP?",
    options: [
      "Capa de transporte",
      "Capa de red",
      "Capa de enlace"
    ],
    answer: 1,
    explanation: "IP opera en la capa de red, encargada del direccionamiento lógico y del encaminamiento entre redes.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos TCP/IP"
  },
  {
    id: 3,
    section: "BLOQUE 3 — REDES",
    topic: "Modelo OSI",
    difficulty: "fácil",
    text: "¿Qué capa del modelo OSI se encarga de la transmisión física de bits por el medio?",
    options: [
      "Capa física",
      "Capa de sesión",
      "Capa de aplicación"
    ],
    answer: 0,
    explanation: "La capa física transmite bits mediante señales eléctricas, ópticas o radioeléctricas.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Modelo OSI"
  },
  {
    id: 4,
    section: "BLOQUE 3 — REDES",
    topic: "Modelo OSI",
    difficulty: "media",
    text: "¿Qué capa del modelo OSI se encarga del control extremo a extremo y de la segmentación de datos?",
    options: [
      "Capa de red",
      "Capa de transporte",
      "Capa de presentación"
    ],
    answer: 1,
    explanation: "La capa de transporte proporciona comunicación extremo a extremo, segmentación, control de errores y control de flujo según el protocolo utilizado.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Modelo OSI"
  },
  {
    id: 5,
    section: "BLOQUE 3 — REDES",
    topic: "TCP/IP",
    difficulty: "fácil",
    text: "¿Qué protocolo ofrece transporte fiable, orientado a conexión y con control de errores?",
    options: [
      "UDP",
      "TCP",
      "ICMP"
    ],
    answer: 1,
    explanation: "TCP es orientado a conexión y proporciona fiabilidad mediante confirmaciones, retransmisiones y control de flujo.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos TCP/IP"
  },
  {
    id: 6,
    section: "BLOQUE 3 — REDES",
    topic: "TCP/IP",
    difficulty: "media",
    text: "¿Qué protocolo de transporte se usa cuando se prioriza velocidad y baja sobrecarga frente a fiabilidad?",
    options: [
      "UDP",
      "TCP",
      "ARP"
    ],
    answer: 0,
    explanation: "UDP no establece conexión ni garantiza entrega, por eso tiene menor sobrecarga y se usa en servicios como DNS, VoIP o streaming.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos TCP/IP"
  },
  {
    id: 7,
    section: "BLOQUE 3 — REDES",
    topic: "Direccionamiento IPv4",
    difficulty: "media",
    text: "¿Cuál es la máscara decimal equivalente a una red /24?",
    options: [
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.252"
    ],
    answer: 1,
    explanation: "Una máscara /24 tiene 24 bits a 1, lo que equivale a 255.255.255.0.",
    reference: "Bloque IV. Sistemas y Comunicaciones — TCP/IP"
  },
  {
    id: 8,
    section: "BLOQUE 3 — REDES",
    topic: "Direccionamiento IPv4",
    difficulty: "media",
    text: "En la red 192.168.1.0/24, ¿cuál sería normalmente la dirección de broadcast?",
    options: [
      "192.168.1.0",
      "192.168.1.1",
      "192.168.1.255"
    ],
    answer: 2,
    explanation: "En una red /24, la primera dirección identifica la red y la última es la dirección de broadcast.",
    reference: "Bloque IV. Sistemas y Comunicaciones — TCP/IP"
  },
  {
    id: 9,
    section: "BLOQUE 3 — REDES",
    topic: "Direccionamiento IPv4",
    difficulty: "fácil",
    text: "¿Qué dirección IPv4 pertenece al rango privado de clase C?",
    options: [
      "8.8.8.8",
      "192.168.1.10",
      "172.33.1.10"
    ],
    answer: 1,
    explanation: "El rango privado 192.168.0.0/16 incluye direcciones como 192.168.1.10.",
    reference: "Bloque IV. Sistemas y Comunicaciones — TCP/IP"
  },
  {
    id: 10,
    section: "BLOQUE 3 — REDES",
    topic: "Direccionamiento IPv4",
    difficulty: "media",
    text: "¿Para qué se utiliza la puerta de enlace predeterminada en un equipo de una LAN?",
    options: [
      "Para resolver nombres DNS dentro de la LAN",
      "Para enviar tráfico hacia redes externas",
      "Para asignar automáticamente direcciones IP"
    ],
    answer: 1,
    explanation: "La puerta de enlace predeterminada suele ser el router al que se envía el tráfico destinado a otras redes.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes locales"
  },
  {
    id: 11,
    section: "BLOQUE 3 — REDES",
    topic: "DNS",
    difficulty: "fácil",
    text: "¿Cuál es la función principal del servicio DNS?",
    options: [
      "Traducir nombres de dominio a direcciones IP",
      "Asignar direcciones IP automáticamente",
      "Cifrar las comunicaciones web"
    ],
    answer: 0,
    explanation: "DNS resuelve nombres como www.ejemplo.com en direcciones IP que los equipos pueden utilizar para conectarse.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Servicios de red e Internet"
  },
  {
    id: 12,
    section: "BLOQUE 3 — REDES",
    topic: "DHCP",
    difficulty: "fácil",
    text: "¿Qué servicio permite asignar automáticamente dirección IP, máscara, puerta de enlace y DNS a un cliente?",
    options: [
      "DHCP",
      "ARP",
      "ICMP"
    ],
    answer: 0,
    explanation: "DHCP automatiza la configuración IP de los equipos de una red.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Servicios de red"
  },
  {
    id: 13,
    section: "BLOQUE 3 — REDES",
    topic: "ARP",
    difficulty: "media",
    text: "¿Qué resuelve el protocolo ARP en una red IPv4?",
    options: [
      "Un nombre de dominio a una IP pública",
      "Una dirección IP a una dirección MAC",
      "Un puerto TCP a un servicio"
    ],
    answer: 1,
    explanation: "ARP se utiliza para conocer la dirección MAC asociada a una dirección IPv4 dentro de la red local.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos TCP/IP"
  },
  {
    id: 14,
    section: "BLOQUE 3 — REDES",
    topic: "ICMP",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza habitualmente por la herramienta ping?",
    options: [
      "ICMP",
      "FTP",
      "SMTP"
    ],
    answer: 0,
    explanation: "ping utiliza mensajes ICMP Echo Request y Echo Reply para comprobar conectividad.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos TCP/IP"
  },
  {
    id: 15,
    section: "BLOQUE 3 — REDES",
    topic: "Puertos",
    difficulty: "fácil",
    text: "¿Qué puerto utiliza HTTP por defecto?",
    options: [
      "21",
      "80",
      "443"
    ],
    answer: 1,
    explanation: "HTTP utiliza por defecto el puerto TCP 80.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Internet: HTTP"
  },
  {
    id: 16,
    section: "BLOQUE 3 — REDES",
    topic: "Puertos",
    difficulty: "fácil",
    text: "¿Qué puerto utiliza HTTPS por defecto?",
    options: [
      "443",
      "110",
      "25"
    ],
    answer: 0,
    explanation: "HTTPS utiliza por defecto el puerto TCP 443 y añade cifrado mediante TLS.",
    reference: "Bloque IV. Sistemas y Comunicaciones — HTTP, HTTPS y SSL/TLS"
  },
  {
    id: 17,
    section: "BLOQUE 3 — REDES",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza DNS normalmente para consultas estándar?",
    options: [
      "53",
      "67",
      "389"
    ],
    answer: 0,
    explanation: "DNS utiliza normalmente el puerto 53, principalmente UDP para consultas, aunque también puede usar TCP.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Servicios de red"
  },
  {
    id: 18,
    section: "BLOQUE 3 — REDES",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puertos utiliza DHCP para la comunicación cliente-servidor?",
    options: [
      "20 y 21",
      "67 y 68",
      "110 y 143"
    ],
    answer: 1,
    explanation: "DHCP utiliza UDP 67 para el servidor y UDP 68 para el cliente.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Servicios de red"
  },
  {
    id: 19,
    section: "BLOQUE 3 — REDES",
    topic: "Dispositivos de red",
    difficulty: "fácil",
    text: "¿Qué dispositivo interconecta equipos dentro de una LAN utilizando direcciones MAC?",
    options: [
      "Switch",
      "Router",
      "Módem analógico"
    ],
    answer: 0,
    explanation: "El switch trabaja principalmente en capa 2 y reenvía tramas según direcciones MAC.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Dispositivos de interconexión"
  },
  {
    id: 20,
    section: "BLOQUE 3 — REDES",
    topic: "Dispositivos de red",
    difficulty: "media",
    text: "¿Qué dispositivo se encarga de interconectar redes diferentes y tomar decisiones de encaminamiento?",
    options: [
      "Hub",
      "Router",
      "Patch panel"
    ],
    answer: 1,
    explanation: "El router trabaja en capa de red y permite comunicar redes distintas mediante rutas.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Equipos de interconexión"
  },
  {
    id: 21,
    section: "BLOQUE 3 — REDES",
    topic: "Dispositivos de red",
    difficulty: "media",
    text: "¿Qué dispositivo repite la señal a nivel físico sin analizar direcciones MAC ni IP?",
    options: [
      "Hub",
      "Switch",
      "Firewall de aplicación"
    ],
    answer: 0,
    explanation: "El hub opera en capa física y replica la señal por sus puertos sin inteligencia de conmutación.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes locales"
  },
  {
    id: 22,
    section: "BLOQUE 3 — REDES",
    topic: "Dispositivos de red",
    difficulty: "fácil",
    text: "¿Qué dispositivo permite conectar clientes inalámbricos a una red cableada?",
    options: [
      "Access Point",
      "SAI",
      "Proxy inverso"
    ],
    answer: 0,
    explanation: "Un punto de acceso proporciona conectividad Wi-Fi a los clientes y los integra en la red.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Comunicaciones móviles e inalámbricas"
  },
  {
    id: 23,
    section: "BLOQUE 3 — REDES",
    topic: "VLAN",
    difficulty: "media",
    text: "¿Qué permite conseguir una VLAN en una red local?",
    options: [
      "Dividir lógicamente una red física en varios dominios de broadcast",
      "Aumentar la potencia eléctrica del cableado",
      "Sustituir siempre la necesidad de direccionamiento IP"
    ],
    answer: 0,
    explanation: "Las VLAN permiten segmentar lógicamente una red, reduciendo dominios de broadcast y separando tráfico.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes locales"
  },
  {
    id: 24,
    section: "BLOQUE 3 — REDES",
    topic: "VLAN",
    difficulty: "difícil",
    text: "¿Qué estándar se utiliza habitualmente para etiquetar VLAN en enlaces troncales Ethernet?",
    options: [
      "IEEE 802.1Q",
      "IEEE 802.11ac",
      "IEEE 802.3af"
    ],
    answer: 0,
    explanation: "IEEE 802.1Q define el etiquetado de VLAN en tramas Ethernet.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes locales"
  },
  {
    id: 25,
    section: "BLOQUE 3 — REDES",
    topic: "LAN",
    difficulty: "fácil",
    text: "¿Qué tipo de red cubre normalmente una oficina, edificio o instalación limitada?",
    options: [
      "LAN",
      "WAN",
      "MAN"
    ],
    answer: 0,
    explanation: "Una LAN es una red de área local, típica de oficinas, edificios o instalaciones pequeñas o medianas.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes locales"
  },
  {
    id: 26,
    section: "BLOQUE 3 — REDES",
    topic: "WAN",
    difficulty: "fácil",
    text: "¿Qué tipo de red conecta ubicaciones separadas geográficamente, como sedes de una empresa en distintas ciudades?",
    options: [
      "PAN",
      "WAN",
      "SAN"
    ],
    answer: 1,
    explanation: "Una WAN cubre grandes distancias y conecta redes o sedes separadas geográficamente.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes de comunicaciones"
  },
  {
    id: 27,
    section: "BLOQUE 3 — REDES",
    topic: "Medios de transmisión",
    difficulty: "fácil",
    text: "¿Qué medio de transmisión utiliza pulsos de luz para transmitir datos?",
    options: [
      "Fibra óptica",
      "Par trenzado UTP",
      "Cable coaxial"
    ],
    answer: 0,
    explanation: "La fibra óptica transmite información mediante señales luminosas.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Medios de transmisión"
  },
  {
    id: 28,
    section: "BLOQUE 3 — REDES",
    topic: "Medios de transmisión",
    difficulty: "media",
    text: "¿Qué tipo de cable es habitual en redes Ethernet de oficina con conectores RJ-45?",
    options: [
      "Par trenzado",
      "Fibra monomodo obligatoria",
      "Cable serie RS-232"
    ],
    answer: 0,
    explanation: "El cable de par trenzado, como UTP o STP, es habitual en redes Ethernet de oficina con conectores RJ-45.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Medios de transmisión"
  },
  {
    id: 29,
    section: "BLOQUE 3 — REDES",
    topic: "Ethernet",
    difficulty: "media",
    text: "¿Qué dirección identifica físicamente una interfaz de red Ethernet?",
    options: [
      "Dirección MAC",
      "Dirección IP pública",
      "Nombre DNS"
    ],
    answer: 0,
    explanation: "La dirección MAC identifica una interfaz de red a nivel de enlace de datos.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes locales"
  },
  {
    id: 30,
    section: "BLOQUE 3 — REDES",
    topic: "Ethernet",
    difficulty: "media",
    text: "¿Qué método de acceso al medio se asocia tradicionalmente a Ethernet compartido?",
    options: [
      "CSMA/CD",
      "Token Ring",
      "CSMA/CA"
    ],
    answer: 0,
    explanation: "Ethernet clásico en medio compartido utilizaba CSMA/CD para detectar colisiones.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Técnicas de transmisión y métodos de acceso"
  },
  {
    id: 31,
    section: "BLOQUE 3 — REDES",
    topic: "Wi-Fi",
    difficulty: "media",
    text: "¿Qué método de acceso al medio se utiliza en redes Wi-Fi?",
    options: [
      "CSMA/CA",
      "CSMA/CD",
      "Token Passing obligatorio"
    ],
    answer: 0,
    explanation: "Wi-Fi utiliza CSMA/CA, evitando colisiones en lugar de detectarlas como Ethernet clásico.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Comunicaciones inalámbricas"
  },
  {
    id: 32,
    section: "BLOQUE 3 — REDES",
    topic: "Wi-Fi",
    difficulty: "media",
    text: "¿Qué estándar se asocia a redes inalámbricas Wi-Fi?",
    options: [
      "IEEE 802.11",
      "IEEE 802.3",
      "IEEE 802.5"
    ],
    answer: 0,
    explanation: "IEEE 802.11 define las redes inalámbricas Wi-Fi.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Comunicaciones móviles e inalámbricas"
  },
  {
    id: 33,
    section: "BLOQUE 3 — REDES",
    topic: "NAT",
    difficulty: "media",
    text: "¿Qué permite NAT en una red privada?",
    options: [
      "Que varios equipos usen una IP pública para salir a Internet",
      "Que DNS asigne direcciones IP dinámicas",
      "Que un switch aprenda rutas entre redes"
    ],
    answer: 0,
    explanation: "NAT traduce direcciones privadas a una dirección pública, permitiendo acceso a Internet desde varios equipos.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Internet y arquitectura de red"
  },
  {
    id: 34,
    section: "BLOQUE 3 — REDES",
    topic: "NAT",
    difficulty: "difícil",
    text: "¿Qué variante de NAT permite diferenciar múltiples conexiones usando números de puerto?",
    options: [
      "PAT",
      "ARP",
      "ICMP"
    ],
    answer: 0,
    explanation: "PAT, también llamado NAT overload, usa puertos para asociar múltiples conexiones privadas a una misma IP pública.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Internet y TCP/IP"
  },
  {
    id: 35,
    section: "BLOQUE 3 — REDES",
    topic: "HTTP/HTTPS",
    difficulty: "fácil",
    text: "¿Cuál es la principal diferencia entre HTTP y HTTPS?",
    options: [
      "HTTPS cifra la comunicación mediante TLS",
      "HTTP solo funciona en redes locales",
      "HTTPS no utiliza TCP"
    ],
    answer: 0,
    explanation: "HTTPS añade una capa de seguridad mediante TLS para cifrar la comunicación entre cliente y servidor.",
    reference: "Bloque IV. Sistemas y Comunicaciones — HTTP, HTTPS y SSL/TLS"
  },
  {
    id: 36,
    section: "BLOQUE 3 — REDES",
    topic: "TLS",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza actualmente para proteger comunicaciones HTTPS?",
    options: [
      "TLS",
      "Telnet",
      "TFTP"
    ],
    answer: 0,
    explanation: "TLS es el protocolo usado actualmente para cifrar y proteger comunicaciones como HTTPS.",
    reference: "Bloque IV. Sistemas y Comunicaciones — SSL/TLS"
  },
  {
    id: 37,
    section: "BLOQUE 3 — REDES",
    topic: "VPN",
    difficulty: "media",
    text: "¿Cuál es el objetivo principal de una VPN?",
    options: [
      "Crear una conexión segura a través de una red no confiable",
      "Sustituir el servicio DNS interno",
      "Eliminar la necesidad de direcciones IP"
    ],
    answer: 0,
    explanation: "Una VPN permite establecer un túnel seguro para comunicar usuarios o sedes a través de redes como Internet.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes privadas virtuales"
  },
  {
    id: 38,
    section: "BLOQUE 3 — REDES",
    topic: "Seguridad perimetral",
    difficulty: "media",
    text: "¿Qué dispositivo o sistema filtra tráfico entre redes según reglas de seguridad?",
    options: [
      "Firewall",
      "Hub",
      "Patch panel"
    ],
    answer: 0,
    explanation: "Un firewall controla el tráfico permitido o bloqueado entre redes según reglas definidas.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Seguridad perimetral"
  },
  {
    id: 39,
    section: "BLOQUE 3 — REDES",
    topic: "Seguridad en red",
    difficulty: "media",
    text: "¿Qué protocolo debería evitarse para administración remota por transmitir datos sin cifrar?",
    options: [
      "Telnet",
      "SSH",
      "HTTPS"
    ],
    answer: 0,
    explanation: "Telnet transmite la información en claro, por lo que debe sustituirse por alternativas seguras como SSH.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Acceso remoto seguro"
  },
  {
    id: 40,
    section: "BLOQUE 3 — REDES",
    topic: "Seguridad en red",
    difficulty: "media",
    text: "¿Qué protocolo es una alternativa segura para administración remota en modo consola?",
    options: [
      "SSH",
      "FTP",
      "SNMPv1 sin cifrar"
    ],
    answer: 0,
    explanation: "SSH permite administración remota cifrada, a diferencia de Telnet.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Acceso remoto seguro"
  },
  {
    id: 41,
    section: "BLOQUE 3 — REDES",
    topic: "Correo y red",
    difficulty: "media",
    text: "¿Qué protocolo se usa habitualmente para el envío de correo electrónico entre servidores?",
    options: [
      "SMTP",
      "POP3",
      "IMAP"
    ],
    answer: 0,
    explanation: "SMTP se utiliza para enviar correo. POP3 e IMAP se usan para recepción o acceso al buzón.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Administración de servidores de correo"
  },
  {
    id: 42,
    section: "BLOQUE 3 — REDES",
    topic: "Correo y red",
    difficulty: "media",
    text: "¿Qué protocolo permite consultar el correo manteniendo los mensajes en el servidor y sincronizando carpetas?",
    options: [
      "IMAP",
      "POP3",
      "SMTP"
    ],
    answer: 0,
    explanation: "IMAP permite trabajar con el buzón en el servidor, sincronizando carpetas y estados de lectura.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos de correo"
  },
  {
    id: 43,
    section: "BLOQUE 3 — REDES",
    topic: "TCP/IP",
    difficulty: "difícil",
    text: "¿Qué campo de IP evita que un paquete circule indefinidamente por la red?",
    options: [
      "TTL",
      "MTU",
      "MAC"
    ],
    answer: 0,
    explanation: "TTL limita la vida del paquete. Cada router lo decrementa y, si llega a cero, el paquete se descarta.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Protocolos TCP/IP"
  },
  {
    id: 44,
    section: "BLOQUE 3 — REDES",
    topic: "TCP/IP",
    difficulty: "difícil",
    text: "¿Qué indica la MTU en una red?",
    options: [
      "El tamaño máximo de unidad de transmisión por el medio",
      "El número máximo de usuarios de una VLAN",
      "El tiempo máximo de vida de un paquete"
    ],
    answer: 0,
    explanation: "La MTU define el tamaño máximo de datos que puede transportar una trama o paquete sin fragmentación en un enlace.",
    reference: "Bloque IV. Sistemas y Comunicaciones — TCP/IP"
  },
  {
    id: 45,
    section: "BLOQUE 3 — REDES",
    topic: "Subredes",
    difficulty: "difícil",
    text: "¿Cuántas direcciones totales tiene una subred IPv4 /30?",
    options: [
      "2",
      "4",
      "8"
    ],
    answer: 1,
    explanation: "Una red /30 deja 2 bits para hosts: 2^2 = 4 direcciones totales, normalmente 2 útiles.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Direccionamiento TCP/IP"
  },
  {
    id: 46,
    section: "BLOQUE 3 — REDES",
    topic: "Subredes",
    difficulty: "difícil",
    text: "¿Cuántos hosts útiles tiene normalmente una red IPv4 /29?",
    options: [
      "6",
      "8",
      "14"
    ],
    answer: 0,
    explanation: "Una red /29 tiene 8 direcciones totales. Restando red y broadcast quedan 6 hosts útiles.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Direccionamiento TCP/IP"
  },
  {
    id: 47,
    section: "BLOQUE 3 — REDES",
    topic: "Monitorización de red",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza habitualmente para monitorizar dispositivos de red?",
    options: [
      "SNMP",
      "SMTP",
      "SFTP"
    ],
    answer: 0,
    explanation: "SNMP se usa para monitorizar y gestionar dispositivos de red como switches, routers o servidores.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Monitorización y control de tráfico"
  },
  {
    id: 48,
    section: "BLOQUE 3 — REDES",
    topic: "Redes de difusión",
    difficulty: "media",
    text: "¿Qué es una dirección de broadcast en IPv4?",
    options: [
      "Una dirección destinada a todos los equipos de una red o subred",
      "Una dirección reservada solo para el router",
      "Una dirección que identifica físicamente una tarjeta de red"
    ],
    answer: 0,
    explanation: "La dirección de broadcast permite enviar tráfico a todos los hosts de una red o subred.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Redes de difusión"
  },
  {
    id: 49,
    section: "BLOQUE 3 — REDES",
    topic: "Cliente-servidor",
    difficulty: "media",
    text: "En una arquitectura cliente-servidor, ¿qué papel realiza el servidor?",
    options: [
      "Ofrece servicios o recursos a otros equipos",
      "Solo consume servicios de otros equipos",
      "Solo convierte direcciones MAC en IP"
    ],
    answer: 0,
    explanation: "El servidor proporciona servicios, recursos o aplicaciones a clientes que los solicitan.",
    reference: "Bloque III. Desarrollo de Sistemas — Arquitectura cliente/servidor"
  },
  {
    id: 50,
    section: "BLOQUE 3 — REDES",
    topic: "Resolución de problemas",
    difficulty: "media",
    text: "Un equipo tiene IP correcta y puerta de enlace correcta, puede hacer ping a 8.8.8.8, pero no navega usando nombres como www.aena.es. ¿Qué servicio revisarías primero?",
    options: [
      "DNS",
      "DHCP",
      "ARP"
    ],
    answer: 0,
    explanation: "Si hay conectividad por IP pero fallan los nombres, lo primero es revisar la resolución DNS.",
    reference: "Bloque IV. Sistemas y Comunicaciones — Servicios de red e Internet"
  }
];