const questions = [
  {
    id: 1,
    section: "Sistemas y Comunicaciones",
    topic: "DHCP y VLAN",
    difficulty: "alta",
    text: "En una empresa, los equipos de la VLAN 20 no reciben dirección IP por DHCP, pero sí tienen enlace físico y pueden ver su puerta de enlace si se configura IP manual. ¿Cuál es la causa más probable?",
    options: [
      "Falta configurar DHCP relay o IP helper hacia el servidor DHCP",
      "El switch trabaja únicamente en capa 1",
      "El servidor DNS no resuelve nombres internos"
    ],
    answer: 0,
    explanation: "Si el servidor DHCP está en otra red o VLAN, las solicitudes broadcast DHCP no cruzan routers salvo que exista DHCP relay/IP helper.",
    reference: "Redes locales, administración de redes, TCP/IP, DHCP, VLAN"
  },
  {
    id: 2,
    section: "Bases de Datos",
    topic: "Normalización",
    difficulty: "alta",
    text: "Una tabla CLIENTES contiene id_cliente, nombre_cliente, id_pedido, fecha_pedido y producto. Si un cliente tiene varios pedidos, se repiten sus datos personales. ¿Qué problema principal existe?",
    options: [
      "Redundancia y posible anomalía de actualización",
      "Falta de clave primaria compuesta obligatoria",
      "Uso incorrecto de una base NoSQL"
    ],
    answer: 0,
    explanation: "La repetición de datos de cliente genera redundancia y anomalías al actualizar información del cliente en múltiples filas.",
    reference: "Modelo relacional, normalización, anomalías"
  },
  {
    id: 3,
    section: "Virtualización",
    topic: "Snapshot vs Backup",
    difficulty: "alta",
    text: "Un administrador crea snapshots diarios de una máquina virtual y los conserva durante meses como única estrategia de recuperación. ¿Qué afirmación es correcta?",
    options: [
      "Es incorrecto: un snapshot no sustituye a un backup",
      "Es correcto: el snapshot equivale a una copia completa externa",
      "Es correcto solo si la máquina virtual está apagada"
    ],
    answer: 0,
    explanation: "Los snapshots sirven para estados temporales y rollback, pero no sustituyen una copia de seguridad independiente y recuperable.",
    reference: "Virtualización, backup de sistemas físicos y virtuales"
  },
  {
    id: 4,
    section: "Redes",
    topic: "ARP",
    difficulty: "alta",
    text: "Un equipo conoce la IP de destino dentro de su misma red local, pero necesita enviar la trama Ethernet. ¿Qué protocolo utiliza para obtener la dirección MAC?",
    options: [
      "ARP",
      "DNS",
      "ICMP"
    ],
    answer: 0,
    explanation: "ARP resuelve direcciones IP a direcciones MAC dentro de una red local IPv4.",
    reference: "TCP/IP, protocolos de red, ARP"
  },
  {
    id: 5,
    section: "Seguridad",
    topic: "VPN",
    difficulty: "alta",
    text: "Un usuario remoto necesita acceder de forma segura a recursos internos de la empresa a través de Internet. ¿Qué solución encaja mejor?",
    options: [
      "VPN",
      "NAT dinámico",
      "DHCP relay"
    ],
    answer: 0,
    explanation: "Una VPN crea un túnel cifrado para acceder de forma segura a una red privada desde una ubicación remota.",
    reference: "Seguridad en redes, acceso remoto seguro, VPN"
  },
  {
    id: 6,
    section: "Administración de Sistemas",
    topic: "Active Directory",
    difficulty: "alta",
    text: "En un dominio Windows, se quiere aplicar una configuración de seguridad diferente solo a los equipos del departamento financiero. ¿Qué mecanismo es el más adecuado?",
    options: [
      "Una GPO vinculada a la OU correspondiente",
      "Un registro DNS específico para cada equipo",
      "Una tabla ARP estática"
    ],
    answer: 0,
    explanation: "Las directivas de grupo se aplican normalmente vinculándolas a unidades organizativas donde están usuarios o equipos.",
    reference: "Administración de sistemas, gestión de usuarios, Windows Server"
  },
  {
    id: 7,
    section: "Bases de Datos",
    topic: "SQL JOIN",
    difficulty: "alta",
    text: "Se necesita obtener clientes aunque no tengan pedidos asociados. ¿Qué tipo de JOIN debería usarse si CLIENTES es la tabla principal?",
    options: [
      "LEFT JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    answer: 0,
    explanation: "LEFT JOIN devuelve todos los registros de la tabla izquierda y los coincidentes de la derecha.",
    reference: "SQL ANSI, consultas, JOIN"
  },
  {
    id: 8,
    section: "Redes",
    topic: "Gateway",
    difficulty: "alta",
    text: "Un equipo puede comunicarse con otros equipos de su LAN, pero no puede salir a Internet. IP, máscara y DNS son correctos. ¿Qué elemento revisarías primero?",
    options: [
      "Puerta de enlace predeterminada",
      "Dirección MAC local",
      "Nombre NetBIOS"
    ],
    answer: 0,
    explanation: "La puerta de enlace permite salir hacia redes externas. Si falla, la comunicación local puede seguir funcionando.",
    reference: "TCP/IP, direccionamiento, gateway"
  },
  {
    id: 9,
    section: "Backups",
    topic: "Backup incremental",
    difficulty: "alta",
    text: "Tras un backup completo el domingo, se hacen backups incrementales lunes, martes y miércoles. Para restaurar el sistema al miércoles, ¿qué se necesita?",
    options: [
      "El completo del domingo y todos los incrementales hasta el miércoles",
      "Solo el incremental del miércoles",
      "El completo del domingo y el diferencial más reciente"
    ],
    answer: 0,
    explanation: "El incremental copia cambios desde el último backup, por lo que se necesita toda la cadena.",
    reference: "Políticas de backup y recuperación"
  },
  {
    id: 10,
    section: "Sistemas Operativos",
    topic: "Procesos y servicios",
    difficulty: "alta",
    text: "Un servicio de Windows debe iniciarse automáticamente al arrancar el sistema, incluso sin sesión de usuario iniciada. ¿Qué tipo de componente es?",
    options: [
      "Servicio del sistema",
      "Aplicación interactiva de usuario",
      "Script de navegador"
    ],
    answer: 0,
    explanation: "Los servicios pueden ejecutarse en segundo plano y arrancar con el sistema sin intervención del usuario.",
    reference: "Sistemas operativos, servicios, administración"
  },
  {
    id: 11,
    section: "Redes",
    topic: "Switch vs Router",
    difficulty: "alta",
    text: "Un dispositivo decide el reenvío usando direcciones MAC y separa dominios de colisión, pero no separa redes IP. ¿Qué dispositivo es?",
    options: [
      "Switch",
      "Router",
      "Hub"
    ],
    answer: 0,
    explanation: "El switch trabaja principalmente en capa 2, usando direcciones MAC.",
    reference: "Redes locales, dispositivos de interconexión"
  },
  {
    id: 12,
    section: "SQL",
    topic: "WHERE vs HAVING",
    difficulty: "alta",
    text: "En SQL, se quiere filtrar grupos después de aplicar COUNT(). ¿Qué cláusula corresponde?",
    options: [
      "HAVING",
      "WHERE",
      "ORDER BY"
    ],
    answer: 0,
    explanation: "HAVING filtra resultados agrupados después de GROUP BY.",
    reference: "SQL ANSI, agrupaciones"
  },
  {
    id: 13,
    section: "Seguridad",
    topic: "Confidencialidad",
    difficulty: "alta",
    text: "¿Qué mecanismo protege principalmente la confidencialidad de la información transmitida?",
    options: [
      "Cifrado",
      "Hash sin clave",
      "Balanceo de carga"
    ],
    answer: 0,
    explanation: "El cifrado evita que terceros puedan leer el contenido transmitido.",
    reference: "Seguridad lógica, criptografía"
  },
  {
    id: 14,
    section: "Virtualización",
    topic: "Hipervisor tipo 1",
    difficulty: "alta",
    text: "¿Qué caracteriza a un hipervisor tipo 1?",
    options: [
      "Se ejecuta directamente sobre el hardware físico",
      "Necesita siempre un sistema operativo anfitrión",
      "Solo permite virtualizar aplicaciones web"
    ],
    answer: 0,
    explanation: "El hipervisor tipo 1, o bare-metal, se instala directamente sobre el hardware.",
    reference: "Virtualización de sistemas"
  },
  {
    id: 15,
    section: "Redes",
    topic: "DNS",
    difficulty: "alta",
    text: "Un usuario puede acceder a una web por IP, pero no por nombre de dominio. ¿Qué servicio falla probablemente?",
    options: [
      "DNS",
      "DHCP",
      "ARP"
    ],
    answer: 0,
    explanation: "DNS traduce nombres de dominio a direcciones IP.",
    reference: "Servicios de red, DNS"
  },
  {
    id: 16,
    section: "Bases de Datos",
    topic: "Clave foránea",
    difficulty: "alta",
    text: "En una base relacional, ¿qué garantiza una clave foránea?",
    options: [
      "Integridad referencial entre tablas",
      "Cifrado automático de registros",
      "Orden físico de almacenamiento"
    ],
    answer: 0,
    explanation: "Una clave foránea relaciona una tabla con otra y evita referencias inexistentes.",
    reference: "Modelo relacional, integridad referencial"
  },
  {
    id: 17,
    section: "Seguridad",
    topic: "Hash",
    difficulty: "alta",
    text: "¿Cuál es el uso más adecuado de una función hash criptográfica?",
    options: [
      "Comprobar integridad de datos",
      "Cifrar y descifrar mensajes",
      "Asignar direcciones IP dinámicas"
    ],
    answer: 0,
    explanation: "Un hash permite comprobar si un dato ha sido modificado, aunque no sirve para descifrar.",
    reference: "Criptografía, integridad"
  },
  {
    id: 18,
    section: "Correo",
    topic: "SMTP IMAP POP3",
    difficulty: "alta",
    text: "¿Qué combinación es correcta?",
    options: [
      "SMTP envía correo; IMAP permite consultar correo manteniéndolo en servidor",
      "IMAP envía correo; SMTP descarga correo borrándolo siempre",
      "POP3 cifra páginas web; SMTP asigna IP"
    ],
    answer: 0,
    explanation: "SMTP se usa para envío. IMAP permite acceso al buzón manteniendo sincronización con el servidor.",
    reference: "Administración de servidores de correo"
  },
  {
    id: 19,
    section: "Sistemas",
    topic: "Permisos Linux",
    difficulty: "alta",
    text: "En Linux, el permiso 755 sobre un directorio significa:",
    options: [
      "Propietario lectura/escritura/ejecución; grupo y otros lectura/ejecución",
      "Todos lectura/escritura/ejecución",
      "Propietario solo lectura; grupo escritura; otros ejecución"
    ],
    answer: 0,
    explanation: "7=rwx, 5=r-x, 5=r-x.",
    reference: "Sistemas Unix/Linux, permisos"
  },
  {
    id: 20,
    section: "Redes",
    topic: "NAT",
    difficulty: "alta",
    text: "Una oficina con IP privadas sale a Internet usando una única IP pública. ¿Qué técnica se está usando?",
    options: [
      "NAT/PAT",
      "ARP",
      "VLAN tagging"
    ],
    answer: 0,
    explanation: "NAT traduce direcciones privadas a públicas; PAT permite multiplexar conexiones mediante puertos.",
    reference: "Internet, arquitectura de red, NAT"
  },
  {
    id: 21,
    section: "CPD",
    topic: "Alta disponibilidad",
    difficulty: "alta",
    text: "En un CPD, ¿qué elemento contribuye directamente a la continuidad eléctrica ante una caída de suministro?",
    options: [
      "SAI/UPS",
      "Switch de acceso",
      "Servidor DNS secundario"
    ],
    answer: 0,
    explanation: "Un SAI proporciona alimentación temporal y protección ante cortes eléctricos.",
    reference: "Infraestructura física de CPD"
  },
  {
    id: 22,
    section: "Web",
    topic: "HTTPS",
    difficulty: "alta",
    text: "¿Qué aporta HTTPS frente a HTTP?",
    options: [
      "Cifrado mediante TLS y autenticación del servidor mediante certificado",
      "Asignación automática de IP al navegador",
      "Compresión obligatoria de todos los archivos"
    ],
    answer: 0,
    explanation: "HTTPS usa HTTP sobre TLS para proteger la comunicación y validar identidad del servidor.",
    reference: "HTTP, HTTPS, SSL/TLS"
  },
  {
    id: 23,
    section: "Programación",
    topic: "Recursividad",
    difficulty: "alta",
    text: "Una función recursiva correcta debe tener necesariamente:",
    options: [
      "Caso base que detenga las llamadas",
      "Una variable global obligatoria",
      "Una consulta SQL interna"
    ],
    answer: 0,
    explanation: "Sin caso base, la recursión puede continuar indefinidamente hasta agotar pila.",
    reference: "Lenguajes de programación, recursividad"
  },
  {
    id: 24,
    section: "Virtualización",
    topic: "Contenedores",
    difficulty: "alta",
    text: "¿Qué diferencia principal existe entre una máquina virtual y un contenedor?",
    options: [
      "El contenedor comparte el kernel del sistema anfitrión; la VM virtualiza hardware completo",
      "El contenedor siempre necesita más recursos que una VM",
      "La VM solo ejecuta microservicios web"
    ],
    answer: 0,
    explanation: "Los contenedores son más ligeros porque comparten kernel, mientras las VM incluyen sistema operativo invitado completo.",
    reference: "Contenedores y microservicios"
  },
  {
    id: 25,
    section: "Redes",
    topic: "ICMP",
    difficulty: "alta",
    text: "La herramienta ping utiliza principalmente:",
    options: [
      "ICMP",
      "SMTP",
      "LDAP"
    ],
    answer: 0,
    explanation: "Ping usa mensajes ICMP Echo Request y Echo Reply.",
    reference: "TCP/IP, ICMP"
  },
  {
    id: 26,
    section: "Bases de Datos",
    topic: "Transacciones",
    difficulty: "alta",
    text: "En una transferencia bancaria, se descuenta saldo de una cuenta y se suma a otra. ¿Qué propiedad ACID evita que solo se complete una de las dos operaciones?",
    options: [
      "Atomicidad",
      "Aislamiento",
      "Durabilidad"
    ],
    answer: 0,
    explanation: "La atomicidad garantiza que una transacción se complete entera o no se aplique.",
    reference: "SGBD, transacciones ACID"
  },
  {
    id: 27,
    section: "Redes",
    topic: "Máscara IPv4",
    difficulty: "alta",
    text: "Una red /24 permite normalmente cuántas direcciones útiles para hosts?",
    options: [
      "254",
      "256",
      "255"
    ],
    answer: 0,
    explanation: "Una /24 tiene 256 direcciones totales, pero se reservan red y broadcast.",
    reference: "IPv4, máscaras, subredes"
  },
  {
    id: 28,
    section: "Seguridad",
    topic: "Firma digital",
    difficulty: "alta",
    text: "La firma digital proporciona principalmente:",
    options: [
      "Autenticidad, integridad y no repudio",
      "Compresión, disponibilidad y direccionamiento",
      "Asignación dinámica de claves WiFi"
    ],
    answer: 0,
    explanation: "La firma digital permite verificar autoría, detectar cambios y dificultar el repudio.",
    reference: "Firma digital, criptografía"
  },
  {
    id: 29,
    section: "Sistemas",
    topic: "RAID",
    difficulty: "alta",
    text: "¿Qué RAID proporciona tolerancia a fallo mediante paridad distribuida y requiere al menos tres discos?",
    options: [
      "RAID 5",
      "RAID 0",
      "RAID 1"
    ],
    answer: 0,
    explanation: "RAID 5 usa paridad distribuida y puede soportar el fallo de un disco.",
    reference: "Almacenamiento, alta disponibilidad"
  },
  {
    id: 30,
    section: "Redes",
    topic: "OSI",
    difficulty: "alta",
    text: "TCP trabaja principalmente en la capa:",
    options: [
      "Transporte",
      "Red",
      "Aplicación"
    ],
    answer: 0,
    explanation: "TCP pertenece a la capa de transporte del modelo OSI.",
    reference: "Modelo OSI, protocolos TCP/IP"
  },
  {
    id: 31,
    section: "Bases de Datos",
    topic: "Índices",
    difficulty: "alta",
    text: "¿Cuál es el objetivo principal de un índice en una base de datos relacional?",
    options: [
      "Acelerar búsquedas y consultas sobre columnas",
      "Eliminar la necesidad de claves primarias",
      "Cifrar automáticamente toda la tabla"
    ],
    answer: 0,
    explanation: "Los índices mejoran el rendimiento de lectura, aunque pueden penalizar escrituras.",
    reference: "Administración de bases de datos"
  },
  {
    id: 32,
    section: "Sistemas",
    topic: "Actualización",
    difficulty: "alta",
    text: "Antes de aplicar una actualización crítica en un servidor productivo, ¿qué práctica es más recomendable?",
    options: [
      "Verificar backup y plan de reversión",
      "Eliminar los logs antiguos",
      "Cambiar la IP del servidor"
    ],
    answer: 0,
    explanation: "Antes de cambios críticos debe existir recuperación posible ante fallo.",
    reference: "Mantenimiento y reparación del sistema operativo"
  },
  {
    id: 33,
    section: "Redes",
    topic: "Trunk VLAN",
    difficulty: "alta",
    text: "Un enlace entre switches transporta tráfico de varias VLAN etiquetadas. ¿Qué tipo de enlace es?",
    options: [
      "Trunk",
      "Access",
      "Loopback"
    ],
    answer: 0,
    explanation: "Un puerto trunk transporta múltiples VLAN, normalmente mediante etiquetado 802.1Q.",
    reference: "Redes locales, VLAN"
  },
  {
    id: 34,
    section: "Web",
    topic: "Cliente-servidor",
    difficulty: "alta",
    text: "En una arquitectura web clásica, el navegador realiza una petición HTTP a un servidor. ¿Qué papel tiene el navegador?",
    options: [
      "Cliente",
      "Servidor de aplicación",
      "Servidor de base de datos"
    ],
    answer: 0,
    explanation: "El navegador actúa como cliente solicitando recursos al servidor.",
    reference: "Arquitectura cliente/servidor y web"
  },
  {
    id: 35,
    section: "Seguridad",
    topic: "Disponibilidad",
    difficulty: "alta",
    text: "Un ataque DDoS afecta principalmente a qué principio de seguridad?",
    options: [
      "Disponibilidad",
      "Confidencialidad",
      "No repudio"
    ],
    answer: 0,
    explanation: "Un DDoS intenta impedir que un servicio esté disponible para usuarios legítimos.",
    reference: "Amenazas, vulnerabilidades, disponibilidad"
  },
  {
    id: 36,
    section: "Sistemas",
    topic: "Logs",
    difficulty: "alta",
    text: "Un servidor presenta reinicios inesperados. ¿Qué deberías revisar primero para investigar la causa?",
    options: [
      "Registros/event logs del sistema",
      "Tabla de estilos CSS",
      "Historial ARP del navegador"
    ],
    answer: 0,
    explanation: "Los logs del sistema registran eventos, errores y causas probables de reinicios.",
    reference: "Administración del sistema operativo, monitorización"
  },
  {
    id: 37,
    section: "Bases de Datos",
    topic: "NoSQL",
    difficulty: "alta",
    text: "¿Cuál es una característica habitual de muchas bases de datos NoSQL?",
    options: [
      "Modelo flexible no estrictamente relacional",
      "Uso obligatorio de SQL ANSI",
      "Necesidad obligatoria de tablas normalizadas"
    ],
    answer: 0,
    explanation: "NoSQL agrupa modelos como documento, clave-valor, columna o grafo, con esquemas más flexibles.",
    reference: "SGBD relacionales, orientados a objetos y NoSQL"
  },
  {
    id: 38,
    section: "Redes",
    topic: "MTU",
    difficulty: "alta",
    text: "Si un paquete supera la MTU de un enlace, puede producirse:",
    options: [
      "Fragmentación o descarte según configuración",
      "Conversión automática a DNS",
      "Cambio de dirección MAC origen"
    ],
    answer: 0,
    explanation: "La MTU define el tamaño máximo de unidad de transmisión. Si se supera, puede fragmentarse o descartarse.",
    reference: "TCP/IP, transmisión de datos"
  },
  {
    id: 39,
    section: "Administración",
    topic: "Monitorización",
    difficulty: "alta",
    text: "¿Qué métrica ayuda mejor a detectar saturación de disco en un servidor?",
    options: [
      "Uso de I/O y espacio disponible",
      "Resolución DNS externa",
      "Número de VLAN configuradas"
    ],
    answer: 0,
    explanation: "El rendimiento y ocupación del disco permiten detectar cuellos de botella o falta de capacidad.",
    reference: "Monitorización y control"
  },
  {
    id: 40,
    section: "Seguridad",
    topic: "Principio de mínimo privilegio",
    difficulty: "alta",
    text: "Un usuario recibe solo los permisos estrictamente necesarios para su trabajo. ¿Qué principio se aplica?",
    options: [
      "Mínimo privilegio",
      "Alta disponibilidad",
      "Encapsulación OSI"
    ],
    answer: 0,
    explanation: "El mínimo privilegio reduce riesgos limitando permisos innecesarios.",
    reference: "Seguridad lógica, gestión de usuarios"
  },
  {
    id: 41,
    section: "Hardware",
    topic: "SSD NVMe",
    difficulty: "alta",
    text: "¿Qué ventaja principal tiene un SSD NVMe frente a un SSD SATA?",
    options: [
      "Mayor rendimiento al usar PCI Express",
      "Mayor capacidad obligatoria de refrigeración líquida",
      "Compatibilidad exclusiva con discos ópticos"
    ],
    answer: 0,
    explanation: "NVMe usa PCIe y ofrece menor latencia y mayor velocidad que SATA.",
    reference: "Hardware, almacenamiento secundario"
  },
  {
    id: 42,
    section: "Correo",
    topic: "MX DNS",
    difficulty: "alta",
    text: "¿Qué registro DNS indica qué servidor recibe correo para un dominio?",
    options: [
      "MX",
      "A",
      "PTR"
    ],
    answer: 0,
    explanation: "El registro MX define los servidores de correo responsables de un dominio.",
    reference: "DNS, correo electrónico"
  },
  {
    id: 43,
    section: "Programación",
    topic: "Condicionales",
    difficulty: "alta",
    text: "En programación, una estructura if/else permite:",
    options: [
      "Ejecutar instrucciones según se cumpla o no una condición",
      "Almacenar datos de forma persistente en disco",
      "Crear índices en una base de datos"
    ],
    answer: 0,
    explanation: "Las estructuras condicionales controlan el flujo según condiciones lógicas.",
    reference: "Lenguajes de programación, condicionales"
  },
  {
    id: 44,
    section: "Sistemas",
    topic: "Backup diferencial",
    difficulty: "alta",
    text: "Tras un backup completo el domingo, se hacen diferenciales lunes, martes y miércoles. Para restaurar al miércoles se necesita:",
    options: [
      "El completo del domingo y el diferencial del miércoles",
      "Solo el diferencial del miércoles",
      "Todos los diferenciales desde el lunes"
    ],
    answer: 0,
    explanation: "El diferencial copia cambios desde el último completo, por eso basta el completo y el último diferencial.",
    reference: "Backups, recuperación"
  },
  {
    id: 45,
    section: "Redes",
    topic: "Broadcast",
    difficulty: "alta",
    text: "¿Qué dispositivo separa dominios de broadcast por defecto?",
    options: [
      "Router",
      "Hub",
      "Switch sin VLAN"
    ],
    answer: 0,
    explanation: "Los routers separan dominios de broadcast. Los switches normales no lo hacen salvo mediante VLAN.",
    reference: "Redes locales, broadcast, router"
  },
  {
    id: 46,
    section: "Seguridad",
    topic: "Autenticación vs autorización",
    difficulty: "alta",
    text: "Introducir usuario y contraseña para demostrar identidad corresponde a:",
    options: [
      "Autenticación",
      "Autorización",
      "Auditoría"
    ],
    answer: 0,
    explanation: "Autenticación verifica identidad. Autorización determina qué puede hacer el usuario autenticado.",
    reference: "Seguridad, control de acceso"
  },
  {
    id: 47,
    section: "Bases de Datos",
    topic: "Trigger",
    difficulty: "alta",
    text: "En SQL, un trigger es:",
    options: [
      "Código que se ejecuta automáticamente ante ciertos eventos en una tabla",
      "Una copia completa de seguridad de la base",
      "Un protocolo de cifrado web"
    ],
    answer: 0,
    explanation: "Un disparador o trigger se ejecuta automáticamente ante operaciones como INSERT, UPDATE o DELETE.",
    reference: "SQL, procedimientos almacenados, eventos y disparadores"
  },
  {
    id: 48,
    section: "Redes",
    topic: "TCP vs UDP",
    difficulty: "alta",
    text: "¿Qué protocolo ofrece control de conexión, retransmisión y entrega ordenada?",
    options: [
      "TCP",
      "UDP",
      "ICMP"
    ],
    answer: 0,
    explanation: "TCP es orientado a conexión y proporciona fiabilidad y orden.",
    reference: "TCP/IP, transporte"
  },
  {
    id: 49,
    section: "Sistemas",
    topic: "LDAP",
    difficulty: "alta",
    text: "LDAP se utiliza principalmente para:",
    options: [
      "Consultar y gestionar servicios de directorio",
      "Asignar direcciones IP automáticamente",
      "Transferir páginas web cifradas"
    ],
    answer: 0,
    explanation: "LDAP es un protocolo usado para acceder a servicios de directorio, como Active Directory.",
    reference: "Administración de usuarios, directorios"
  },
  {
    id: 50,
    section: "Seguridad",
    topic: "Firewall",
    difficulty: "alta",
    text: "Un firewall perimetral permite o bloquea tráfico principalmente según:",
    options: [
      "Reglas sobre IP, puertos, protocolos y políticas",
      "El tamaño físico del servidor",
      "La marca del cable Ethernet"
    ],
    answer: 0,
    explanation: "Un firewall filtra tráfico conforme a reglas de red, puertos, protocolos, origen, destino y políticas.",
    reference: "Seguridad perimetral, redes"
  }
];