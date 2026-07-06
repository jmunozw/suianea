const questions = [
  {
    id: 1,
    section: "Bloque 4 — TCP/IP",
    topic: "Modelo TCP/IP",
    difficulty: "media",
    text: "¿En qué capa del modelo TCP/IP trabaja principalmente el protocolo IP?",
    options: [
      "Capa de Internet",
      "Capa de Aplicación",
      "Capa de Transporte"
    ],
    answer: 0,
    explanation: "IP trabaja en la capa de Internet del modelo TCP/IP, equivalente aproximadamente a la capa de Red del modelo OSI.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 2,
    section: "Bloque 4 — TCP/IP",
    topic: "Modelo TCP/IP",
    difficulty: "media",
    text: "¿Qué capa del modelo TCP/IP se encarga de la comunicación extremo a extremo entre aplicaciones?",
    options: [
      "Capa de Transporte",
      "Capa de Acceso a red",
      "Capa de Internet"
    ],
    answer: 0,
    explanation: "La capa de Transporte se encarga de la comunicación extremo a extremo. Sus protocolos principales son TCP y UDP.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 3,
    section: "Bloque 4 — TCP/IP",
    topic: "TCP",
    difficulty: "fácil",
    text: "¿Qué protocolo de transporte es orientado a conexión y garantiza la entrega de datos?",
    options: [
      "TCP",
      "UDP",
      "ICMP"
    ],
    answer: 0,
    explanation: "TCP es orientado a conexión, fiable, confirma la recepción de datos y puede retransmitir paquetes perdidos.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 4,
    section: "Bloque 4 — TCP/IP",
    topic: "UDP",
    difficulty: "fácil",
    text: "¿Qué característica define mejor a UDP?",
    options: [
      "Es más rápido, pero no garantiza la entrega",
      "Es orientado a conexión y fiable",
      "Se usa únicamente para navegación web segura"
    ],
    answer: 0,
    explanation: "UDP no establece conexión previa y no garantiza la entrega, pero es más ligero y rápido que TCP.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 5,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "fácil",
    text: "¿Qué puerto utiliza normalmente HTTPS?",
    options: [
      "443",
      "80",
      "53"
    ],
    answer: 0,
    explanation: "HTTPS utiliza normalmente el puerto TCP 443.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 6,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "fácil",
    text: "¿Qué puerto utiliza normalmente HTTP?",
    options: [
      "80",
      "443",
      "25"
    ],
    answer: 0,
    explanation: "HTTP utiliza normalmente el puerto TCP 80.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 7,
    section: "Bloque 4 — TCP/IP",
    topic: "DNS",
    difficulty: "fácil",
    text: "¿Cuál es la función principal de DNS?",
    options: [
      "Resolver nombres de dominio en direcciones IP",
      "Asignar direcciones IP automáticamente",
      "Traducir direcciones IP privadas en públicas"
    ],
    answer: 0,
    explanation: "DNS traduce nombres como www.ejemplo.com a direcciones IP.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 8,
    section: "Bloque 4 — TCP/IP",
    topic: "DHCP",
    difficulty: "fácil",
    text: "¿Cuál es la función principal de DHCP?",
    options: [
      "Asignar automáticamente configuración IP a los clientes",
      "Resolver nombres de dominio",
      "Comprobar conectividad mediante eco"
    ],
    answer: 0,
    explanation: "DHCP asigna automáticamente IP, máscara, puerta de enlace, DNS y otros parámetros de red.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 9,
    section: "Bloque 4 — TCP/IP",
    topic: "ARP",
    difficulty: "media",
    text: "¿Qué hace el protocolo ARP?",
    options: [
      "Obtiene la dirección MAC asociada a una dirección IP",
      "Obtiene la IP pública asociada a un dominio",
      "Asigna direcciones IP dinámicamente"
    ],
    answer: 0,
    explanation: "ARP permite averiguar qué dirección MAC corresponde a una IP dentro de una red local.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 10,
    section: "Bloque 4 — TCP/IP",
    topic: "ICMP",
    difficulty: "fácil",
    text: "¿Qué protocolo utiliza normalmente el comando ping?",
    options: [
      "ICMP",
      "TCP",
      "DHCP"
    ],
    answer: 0,
    explanation: "ping utiliza ICMP para enviar mensajes Echo Request y recibir Echo Reply.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 11,
    section: "Bloque 4 — TCP/IP",
    topic: "Gateway",
    difficulty: "fácil",
    text: "¿Qué es la puerta de enlace predeterminada o gateway?",
    options: [
      "El dispositivo que permite salir hacia otras redes",
      "El servidor que resuelve nombres DNS",
      "La dirección física de la tarjeta de red"
    ],
    answer: 0,
    explanation: "El gateway suele ser el router que conecta la red local con otras redes, como Internet.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 12,
    section: "Bloque 4 — TCP/IP",
    topic: "NAT",
    difficulty: "media",
    text: "¿Qué permite hacer NAT en una red privada?",
    options: [
      "Que varios equipos privados salgan a Internet usando una IP pública",
      "Que un equipo obtenga automáticamente una IP",
      "Que un nombre de dominio se convierta en una dirección IP"
    ],
    answer: 0,
    explanation: "NAT traduce direcciones privadas en públicas, permitiendo que varios equipos compartan una IP pública.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 13,
    section: "Bloque 4 — TCP/IP",
    topic: "IPv4",
    difficulty: "fácil",
    text: "¿Cuántos bits tiene una dirección IPv4?",
    options: [
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    answer: 0,
    explanation: "IPv4 utiliza direcciones de 32 bits, normalmente representadas en cuatro octetos decimales.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 14,
    section: "Bloque 4 — TCP/IP",
    topic: "IPv6",
    difficulty: "fácil",
    text: "¿Cuántos bits tiene una dirección IPv6?",
    options: [
      "128 bits",
      "32 bits",
      "48 bits"
    ],
    answer: 0,
    explanation: "IPv6 utiliza direcciones de 128 bits, lo que permite un espacio de direcciones mucho mayor que IPv4.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 15,
    section: "Bloque 4 — TCP/IP",
    topic: "IPv4",
    difficulty: "media",
    text: "¿Cuál de las siguientes direcciones pertenece a un rango privado IPv4?",
    options: [
      "192.168.1.25",
      "8.8.8.8",
      "1.1.1.1"
    ],
    answer: 0,
    explanation: "192.168.0.0/16 es uno de los rangos privados definidos para redes internas.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 16,
    section: "Bloque 4 — TCP/IP",
    topic: "IPv4",
    difficulty: "media",
    text: "¿Cuál de los siguientes rangos IPv4 es privado?",
    options: [
      "10.0.0.0/8",
      "11.0.0.0/8",
      "100.0.0.0/8"
    ],
    answer: 0,
    explanation: "El rango 10.0.0.0/8 está reservado para redes privadas.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 17,
    section: "Bloque 4 — TCP/IP",
    topic: "IPv4",
    difficulty: "media",
    text: "¿Cuál de los siguientes rangos pertenece a direcciones privadas de clase B?",
    options: [
      "172.16.0.0 a 172.31.255.255",
      "172.0.0.0 a 172.15.255.255",
      "172.32.0.0 a 172.63.255.255"
    ],
    answer: 0,
    explanation: "El rango privado de clase B va desde 172.16.0.0 hasta 172.31.255.255.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 18,
    section: "Bloque 4 — TCP/IP",
    topic: "APIPA",
    difficulty: "media",
    text: "Un equipo tiene la dirección 169.254.20.15. ¿Qué indica probablemente?",
    options: [
      "No ha podido obtener IP de un servidor DHCP",
      "Está usando una dirección pública válida",
      "Está funcionando como servidor DNS"
    ],
    answer: 0,
    explanation: "Las direcciones 169.254.x.x son APIPA y suelen aparecer cuando falla la obtención de IP por DHCP.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 19,
    section: "Bloque 4 — TCP/IP",
    topic: "Loopback",
    difficulty: "fácil",
    text: "¿Qué dirección IPv4 se usa normalmente como loopback o localhost?",
    options: [
      "127.0.0.1",
      "192.168.0.1",
      "255.255.255.255"
    ],
    answer: 0,
    explanation: "127.0.0.1 es la dirección de loopback usada para referirse al propio equipo.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 20,
    section: "Bloque 4 — TCP/IP",
    topic: "Broadcast",
    difficulty: "media",
    text: "¿Qué representa la dirección 255.255.255.255 en IPv4?",
    options: [
      "Broadcast limitado",
      "Loopback local",
      "Gateway predeterminado"
    ],
    answer: 0,
    explanation: "255.255.255.255 es la dirección de broadcast limitado en IPv4.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 21,
    section: "Bloque 4 — TCP/IP",
    topic: "Máscaras",
    difficulty: "media",
    text: "¿Qué máscara corresponde a una red /24?",
    options: [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    answer: 0,
    explanation: "Una red /24 equivale a la máscara 255.255.255.0.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 22,
    section: "Bloque 4 — TCP/IP",
    topic: "Máscaras",
    difficulty: "media",
    text: "¿Cuántos hosts útiles permite aproximadamente una red IPv4 /24?",
    options: [
      "254",
      "256",
      "255"
    ],
    answer: 0,
    explanation: "Una red /24 tiene 8 bits de host: 2^8 = 256 direcciones. Se restan red y broadcast, quedando 254 hosts útiles.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 23,
    section: "Bloque 4 — TCP/IP",
    topic: "Máscaras",
    difficulty: "alta",
    text: "¿Cuántos hosts útiles permite una red /30?",
    options: [
      "2",
      "4",
      "6"
    ],
    answer: 0,
    explanation: "Una red /30 tiene 2 bits de host: 2^2 = 4 direcciones. Restando red y broadcast quedan 2 hosts útiles.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 24,
    section: "Bloque 4 — TCP/IP",
    topic: "Máscaras",
    difficulty: "alta",
    text: "¿Qué máscara corresponde a una red /26?",
    options: [
      "255.255.255.192",
      "255.255.255.224",
      "255.255.255.128"
    ],
    answer: 0,
    explanation: "Una red /26 equivale a la máscara 255.255.255.192.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 25,
    section: "Bloque 4 — TCP/IP",
    topic: "Máscaras",
    difficulty: "alta",
    text: "En la red 192.168.1.0/24, ¿cuál es la dirección de broadcast?",
    options: [
      "192.168.1.255",
      "192.168.1.0",
      "192.168.0.255"
    ],
    answer: 0,
    explanation: "En una red /24, la dirección de broadcast es la última dirección del rango: 192.168.1.255.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 26,
    section: "Bloque 4 — TCP/IP",
    topic: "DNS",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente DNS?",
    options: [
      "53",
      "67",
      "110"
    ],
    answer: 0,
    explanation: "DNS utiliza normalmente el puerto 53, principalmente UDP, aunque también puede usar TCP.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 27,
    section: "Bloque 4 — TCP/IP",
    topic: "DHCP",
    difficulty: "media",
    text: "¿Qué puertos utiliza DHCP en IPv4?",
    options: [
      "UDP 67 servidor y UDP 68 cliente",
      "TCP 80 servidor y TCP 443 cliente",
      "UDP 53 servidor y UDP 25 cliente"
    ],
    answer: 0,
    explanation: "DHCP usa UDP 67 en el servidor y UDP 68 en el cliente.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 28,
    section: "Bloque 4 — TCP/IP",
    topic: "DHCP",
    difficulty: "media",
    text: "¿Qué significa la secuencia DORA en DHCP?",
    options: [
      "Discover, Offer, Request, Acknowledge",
      "Domain, Output, Routing, Addressing",
      "Data, Operation, Relay, Access"
    ],
    answer: 0,
    explanation: "DORA resume el proceso clásico DHCP: Discover, Offer, Request y Acknowledge.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 29,
    section: "Bloque 4 — TCP/IP",
    topic: "TCP",
    difficulty: "media",
    text: "¿Qué mecanismo usa TCP para asegurar una comunicación fiable?",
    options: [
      "Confirmaciones y retransmisiones",
      "Resolución de nombres",
      "Asignación dinámica de IP"
    ],
    answer: 0,
    explanation: "TCP usa ACK, control de errores y retransmisión de segmentos perdidos para garantizar fiabilidad.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 30,
    section: "Bloque 4 — TCP/IP",
    topic: "UDP",
    difficulty: "media",
    text: "¿Cuál de estos servicios usa habitualmente UDP?",
    options: [
      "DNS",
      "SSH",
      "HTTPS"
    ],
    answer: 0,
    explanation: "DNS usa habitualmente UDP 53 para consultas normales, aunque puede usar TCP en ciertos casos.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 31,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente SSH?",
    options: [
      "22",
      "23",
      "25"
    ],
    answer: 0,
    explanation: "SSH utiliza normalmente el puerto TCP 22.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 32,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente Telnet?",
    options: [
      "23",
      "22",
      "3389"
    ],
    answer: 0,
    explanation: "Telnet utiliza normalmente el puerto TCP 23. A diferencia de SSH, no cifra la comunicación.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 33,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente SMTP?",
    options: [
      "25",
      "110",
      "143"
    ],
    answer: 0,
    explanation: "SMTP utiliza normalmente el puerto TCP 25 para envío de correo entre servidores.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 34,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente POP3?",
    options: [
      "110",
      "143",
      "25"
    ],
    answer: 0,
    explanation: "POP3 utiliza normalmente el puerto TCP 110.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 35,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente IMAP?",
    options: [
      "143",
      "110",
      "25"
    ],
    answer: 0,
    explanation: "IMAP utiliza normalmente el puerto TCP 143.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 36,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente RDP en Windows?",
    options: [
      "3389",
      "445",
      "389"
    ],
    answer: 0,
    explanation: "RDP utiliza normalmente el puerto TCP 3389 para escritorio remoto.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 37,
    section: "Bloque 4 — TCP/IP",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza normalmente SMB/CIFS para compartición de archivos en redes Windows modernas?",
    options: [
      "445",
      "80",
      "53"
    ],
    answer: 0,
    explanation: "SMB/CIFS utiliza normalmente el puerto TCP 445.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 38,
    section: "Bloque 4 — TCP/IP",
    topic: "Diagnóstico",
    difficulty: "fácil",
    text: "¿Qué comando de Windows muestra la configuración IP del equipo?",
    options: [
      "ipconfig",
      "tracert",
      "netstat"
    ],
    answer: 0,
    explanation: "ipconfig muestra la configuración IP básica. ipconfig /all muestra información ampliada.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 39,
    section: "Bloque 4 — TCP/IP",
    topic: "Diagnóstico",
    difficulty: "media",
    text: "¿Qué comando permite consultar manualmente la resolución DNS de un nombre?",
    options: [
      "nslookup",
      "ping",
      "arp"
    ],
    answer: 0,
    explanation: "nslookup permite consultar servidores DNS para resolver nombres de dominio.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 40,
    section: "Bloque 4 — TCP/IP",
    topic: "Diagnóstico",
    difficulty: "media",
    text: "¿Qué comando muestra la tabla ARP en Windows?",
    options: [
      "arp -a",
      "ipconfig /release",
      "tracert -d"
    ],
    answer: 0,
    explanation: "arp -a muestra la caché ARP, es decir, asociaciones conocidas entre IP y MAC.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 41,
    section: "Bloque 4 — TCP/IP",
    topic: "Diagnóstico",
    difficulty: "media",
    text: "¿Qué comando se utiliza en Windows para ver el camino que siguen los paquetes hasta un destino?",
    options: [
      "tracert",
      "netstat",
      "ipconfig"
    ],
    answer: 0,
    explanation: "tracert muestra los saltos o routers intermedios hasta llegar a un destino.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 42,
    section: "Bloque 4 — TCP/IP",
    topic: "Diagnóstico",
    difficulty: "media",
    text: "¿Qué comando permite ver conexiones de red activas y puertos en uso?",
    options: [
      "netstat",
      "ping",
      "hostname"
    ],
    answer: 0,
    explanation: "netstat permite ver conexiones activas, puertos en escucha y estadísticas de red.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 43,
    section: "Bloque 4 — TCP/IP",
    topic: "Encapsulación",
    difficulty: "alta",
    text: "En TCP/IP, ¿qué unidad de datos se asocia normalmente a la capa de Transporte?",
    options: [
      "Segmento o datagrama",
      "Trama",
      "Bit"
    ],
    answer: 0,
    explanation: "En transporte se habla de segmentos para TCP y datagramas para UDP.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 44,
    section: "Bloque 4 — TCP/IP",
    topic: "Encapsulación",
    difficulty: "media",
    text: "¿Qué unidad de datos se asocia normalmente a la capa de Internet o Red?",
    options: [
      "Paquete",
      "Trama",
      "Segmento"
    ],
    answer: 0,
    explanation: "En la capa de Internet del modelo TCP/IP, o capa de Red en OSI, se suele hablar de paquetes.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 45,
    section: "Bloque 4 — TCP/IP",
    topic: "Encapsulación",
    difficulty: "media",
    text: "¿Qué unidad de datos se asocia normalmente a la capa de Acceso a red o Enlace?",
    options: [
      "Trama",
      "Paquete",
      "Segmento"
    ],
    answer: 0,
    explanation: "En la capa de Enlace o Acceso a red se trabaja con tramas.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 46,
    section: "Bloque 4 — TCP/IP",
    topic: "MTU",
    difficulty: "alta",
    text: "¿Qué indica la MTU en una red?",
    options: [
      "El tamaño máximo de una unidad de transmisión",
      "La dirección IP del router predeterminado",
      "El número máximo de usuarios de una red"
    ],
    answer: 0,
    explanation: "MTU significa Maximum Transmission Unit e indica el tamaño máximo de una unidad de transmisión en una red.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 47,
    section: "Bloque 4 — TCP/IP",
    topic: "TTL",
    difficulty: "alta",
    text: "¿Para qué sirve el campo TTL en un paquete IP?",
    options: [
      "Para limitar la vida del paquete y evitar bucles infinitos",
      "Para cifrar el contenido del paquete",
      "Para resolver nombres de dominio"
    ],
    answer: 0,
    explanation: "TTL limita el número de saltos que puede dar un paquete. Cada router lo decrementa y, al llegar a cero, el paquete se descarta.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 48,
    section: "Bloque 4 — TCP/IP",
    topic: "TCP/IP",
    difficulty: "media",
    text: "Si un equipo puede hacer ping a 8.8.8.8 pero no puede acceder a www.google.com, ¿qué problema es más probable?",
    options: [
      "Problema de resolución DNS",
      "Fallo físico de la tarjeta de red",
      "Fallo de dirección IP local"
    ],
    answer: 0,
    explanation: "Si se llega a una IP pública pero no a un nombre, la conectividad IP existe y el problema más probable está en DNS.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 49,
    section: "Bloque 4 — TCP/IP",
    topic: "Gateway",
    difficulty: "media",
    text: "Si un equipo accede a otros equipos de su LAN pero no sale a Internet, ¿qué configuración conviene revisar primero?",
    options: [
      "Puerta de enlace predeterminada",
      "Dirección MAC de la tarjeta gráfica",
      "Tipo de teclado configurado"
    ],
    answer: 0,
    explanation: "Si la comunicación local funciona pero no se accede a redes externas, suele revisarse la puerta de enlace predeterminada.",
    reference: "Bloque 4 — TCP/IP"
  },
  {
    id: 50,
    section: "Bloque 4 — TCP/IP",
    topic: "TCP/IP",
    difficulty: "alta",
    text: "¿Qué combinación es correcta?",
    options: [
      "DNS resuelve nombres, DHCP asigna IP, ARP obtiene MAC e ICMP se usa con ping",
      "DNS asigna IP, DHCP obtiene MAC, ARP cifra datos e ICMP usa puertos TCP",
      "DNS traduce IP privada, DHCP resuelve dominios, ARP enruta paquetes e ICMP asigna máscaras"
    ],
    answer: 0,
    explanation: "DNS resuelve nombres a IP, DHCP asigna configuración IP, ARP relaciona IP con MAC e ICMP se usa en herramientas como ping.",
    reference: "Bloque 4 — TCP/IP"
  }
];