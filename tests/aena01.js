// SIMULACRO AENA TIC IIIJ05 01 - COMPLETO 140 preguntas
// Formato web AENA: const questions = [...]
// Corrección oficial simulacro: acierto +0,5 | fallo -0,2 | blanco 0
const questions = [
  {
    "id": 1,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Qué unidad de la CPU realiza operaciones aritméticas y lógicas?",
    "options": [
      "ALU",
      "Unidad de control",
      "Memoria caché"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. ALU.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 2,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Qué característica define mejor a la memoria RAM?",
    "options": [
      "Es volátil y de acceso aleatorio",
      "Es almacenamiento magnético externo",
      "Es permanente y solo de lectura"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Es volátil y de acceso aleatorio.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 3,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Qué ventaja principal tiene un SSD frente a un HDD mecánico?",
    "options": [
      "No usa partes móviles y ofrece menor tiempo de acceso",
      "Mayor latencia por plato giratorio",
      "Solo permite lectura secuencial"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. No usa partes móviles y ofrece menor tiempo de acceso.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 4,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Cuál es la función principal de BIOS/UEFI durante el arranque?",
    "options": [
      "Inicializar hardware y localizar el cargador de arranque",
      "Cifrar automáticamente todos los discos",
      "Gestionar usuarios del dominio"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Inicializar hardware y localizar el cargador de arranque.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 5,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Qué bus se utiliza habitualmente para conectar tarjetas gráficas modernas?",
    "options": [
      "PS/2",
      "PCI Express",
      "IDE"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. PCI Express.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 6,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Para qué sirve principalmente la memoria caché del procesador?",
    "options": [
      "Para acelerar el acceso a datos e instrucciones usados con frecuencia",
      "Para almacenar copias de seguridad",
      "Para sustituir al disco duro"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Para acelerar el acceso a datos e instrucciones usados con frecuencia.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 7,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Qué tipo de dispositivo es un escáner?",
    "options": [
      "Dispositivo de salida",
      "Dispositivo de proceso",
      "Dispositivo de entrada"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Dispositivo de entrada.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 8,
    "section": "Anexo A",
    "topic": "Hardware",
    "difficulty": "baja",
    "text": "¿Qué dispositivo protege frente a cortes eléctricos breves y permite apagar sistemas de forma ordenada?",
    "options": [
      "SAI/UPS",
      "Router",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. SAI/UPS.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 9,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué componente del sistema operativo actúa como núcleo y gestiona recursos básicos?",
    "options": [
      "Driver de impresora",
      "Shell",
      "Kernel"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Kernel.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 10,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué diferencia básica hay entre proceso e hilo?",
    "options": [
      "Un proceso solo existe en sistemas Linux",
      "Un hilo siempre tiene su propio espacio de memoria completo",
      "Un hilo pertenece a un proceso y comparte parte de sus recursos"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Un hilo pertenece a un proceso y comparte parte de sus recursos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 11,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "En Linux, ¿qué representa habitualmente el permiso 'r'?",
    "options": [
      "Lectura",
      "Ejecución",
      "Escritura"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Lectura.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 12,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué es un servicio de Windows?",
    "options": [
      "Un tipo de cable de red",
      "Un proceso en segundo plano que ofrece una función del sistema o aplicación",
      "Un formato de partición exclusivo de Linux"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Un proceso en segundo plano que ofrece una función del sistema o aplicación.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 13,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué comando permite ver procesos en ejecución en sistemas Unix/Linux?",
    "options": [
      "ipconfig /release",
      "format",
      "ps"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. ps.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 14,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué permisos representa normalmente chmod 755?",
    "options": [
      "Propietario rwx, grupo rx, otros rx",
      "Propietario r, grupo w, otros x",
      "Todos sin permisos"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Propietario rwx, grupo rx, otros rx.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 15,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué es una shell?",
    "options": [
      "Un intérprete de comandos",
      "Un protocolo de correo",
      "Un tipo de placa base"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Un intérprete de comandos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 16,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "Android se basa principalmente en:",
    "options": [
      "Kernel NT",
      "Kernel Linux",
      "MS-DOS"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Kernel Linux.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 17,
    "section": "Anexo A",
    "topic": "Sistemas Operativos",
    "difficulty": "baja",
    "text": "¿Qué es un bootloader?",
    "options": [
      "El programa que carga el sistema operativo durante el arranque",
      "Un gestor de bases de datos",
      "Un antivirus residente"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. El programa que carga el sistema operativo durante el arranque.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 18,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué caracteriza a RAID 1?",
    "options": [
      "Distribución sin redundancia",
      "Paridad distribuida con mínimo tres discos",
      "Espejado de datos entre discos"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Espejado de datos entre discos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 19,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué copia de seguridad guarda todos los datos seleccionados independientemente de cambios previos?",
    "options": [
      "Completa",
      "Incremental",
      "Diferencial"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Completa.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 20,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué es un snapshot de una máquina virtual?",
    "options": [
      "Una imagen del estado de la VM en un momento concreto",
      "Un protocolo de correo seguro",
      "Una copia externa garantizada ante desastre físico"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Una imagen del estado de la VM en un momento concreto.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 21,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué tipo de hipervisor se ejecuta directamente sobre el hardware físico?",
    "options": [
      "Contenedor de aplicación",
      "Tipo 1 o bare-metal",
      "Tipo 2 exclusivamente"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Tipo 1 o bare-metal.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 22,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué comparten normalmente los contenedores de un mismo host?",
    "options": [
      "El kernel del sistema anfitrión",
      "Una placa base virtual física",
      "Una BIOS independiente por contenedor"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. El kernel del sistema anfitrión.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 23,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué diferencia general hay entre una VM y un contenedor?",
    "options": [
      "La VM virtualiza un sistema completo; el contenedor empaqueta procesos y dependencias compartiendo kernel",
      "El contenedor siempre necesita más recursos que una VM",
      "Una VM no puede tener sistema operativo"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. La VM virtualiza un sistema completo; el contenedor empaqueta procesos y dependencias compartiendo kernel.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 24,
    "section": "Anexo A",
    "topic": "Virtualización, backups y contenedores",
    "difficulty": "baja",
    "text": "¿Qué caracteriza a una arquitectura de microservicios?",
    "options": [
      "Aplicaciones divididas en servicios pequeños y desplegables de forma independiente",
      "Uso obligatorio de bases de datos relacionales únicamente",
      "Un único ejecutable monolítico sin comunicación interna"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Aplicaciones divididas en servicios pequeños y desplegables de forma independiente.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 25,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Cuál es una función principal de Active Directory Domain Services?",
    "options": [
      "Comprimir imágenes JPEG",
      "Gestionar identidades, autenticación y recursos de dominio",
      "Sustituir físicamente al switch"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Gestionar identidades, autenticación y recursos de dominio.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 26,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Para qué se utiliza LDAP principalmente?",
    "options": [
      "Acceso y consulta a servicios de directorio",
      "Asignación dinámica de direcciones IP",
      "Transferencia de páginas web cifradas"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Acceso y consulta a servicios de directorio.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 27,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Qué permite aplicar una GPO en un entorno Windows de dominio?",
    "options": [
      "Políticas y configuraciones a usuarios o equipos",
      "Cifrado de paquetes IP en Internet únicamente",
      "Conversión de bases de datos relacionales a NoSQL"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Políticas y configuraciones a usuarios o equipos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 28,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Cuál es la función principal de DNS?",
    "options": [
      "Traducir nombres de dominio a direcciones IP",
      "Dividir discos en volúmenes lógicos",
      "Asignar permisos NTFS"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Traducir nombres de dominio a direcciones IP.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 29,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Qué servicio asigna direcciones IP automáticamente a equipos de una red?",
    "options": [
      "SMTP",
      "DNS",
      "DHCP"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. DHCP.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 30,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Qué protocolo se usa principalmente para enviar correo electrónico entre servidores o desde cliente a servidor?",
    "options": [
      "SMTP",
      "POP3",
      "IMAP"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. SMTP.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 31,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Qué protocolo permite consultar correo manteniendo los mensajes en el servidor y sincronizados entre dispositivos?",
    "options": [
      "ARP",
      "FTP",
      "IMAP"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. IMAP.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 32,
    "section": "Anexo A",
    "topic": "Active Directory y servicios de red",
    "difficulty": "baja",
    "text": "¿Qué protocolo se asocia clásicamente a descargar correo desde el servidor al cliente?",
    "options": [
      "POP3",
      "ICMP",
      "SMTP"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. POP3.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 33,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué característica define a TCP?",
    "options": [
      "Sin control de errores ni orden",
      "Solo funciona en redes inalámbricas",
      "Orientado a conexión y fiable"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Orientado a conexión y fiable.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 34,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué característica define mejor a UDP?",
    "options": [
      "Siempre cifra los datos",
      "Solo se usa para correo electrónico",
      "No orientado a conexión y con menor sobrecarga"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. No orientado a conexión y con menor sobrecarga.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 35,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿En qué capa OSI opera típicamente un switch Ethernet no gestionado?",
    "options": [
      "Capa 2 - Enlace de datos",
      "Capa 4 - Transporte",
      "Capa 7 - Aplicación"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Capa 2 - Enlace de datos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 36,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿En qué capa OSI opera principalmente un router?",
    "options": [
      "Capa 3 - Red",
      "Capa 1 - Física",
      "Capa 6 - Presentación"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Capa 3 - Red.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 37,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué dispositivo reenvía señales a todos los puertos sin aprender direcciones MAC?",
    "options": [
      "Hub",
      "Router",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Hub.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 38,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "media",
    "text": "¿Qué permite una VLAN?",
    "options": [
      "Eliminar la necesidad de direccionamiento IP",
      "Separar lógicamente dominios de broadcast dentro de una red conmutada",
      "Aumentar siempre la velocidad física del cable"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Separar lógicamente dominios de broadcast dentro de una red conmutada.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 39,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "media",
    "text": "¿Qué permite NAT en una red doméstica o corporativa?",
    "options": [
      "Resolver nombres DNS",
      "Traducir direcciones privadas a una dirección pública para salir a Internet",
      "Crear copias de seguridad"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Traducir direcciones privadas a una dirección pública para salir a Internet.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 40,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué resuelve ARP en IPv4?",
    "options": [
      "Puerto TCP asociado a un servicio",
      "Dirección MAC asociada a una dirección IP local",
      "Nombre de dominio asociado a una URL"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Dirección MAC asociada a una dirección IP local.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 41,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué protocolo se utiliza habitualmente por la herramienta ping?",
    "options": [
      "ICMP",
      "SMTP",
      "LDAP"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. ICMP.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 42,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "media",
    "text": "¿Qué ocurre con el TTL de un paquete IP al atravesar routers?",
    "options": [
      "Se convierte en dirección MAC",
      "Se cifra automáticamente",
      "Se decrementa en cada salto"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Se decrementa en cada salto.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 43,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "media",
    "text": "¿Qué indica el MTU?",
    "options": [
      "Tamaño máximo de unidad de transmisión en una red",
      "Tiempo máximo de uso de CPU",
      "Número máximo de usuarios de Active Directory"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Tamaño máximo de unidad de transmisión en una red.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 44,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Cuál es el puerto por defecto de HTTPS?",
    "options": [
      "3389",
      "443",
      "80"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. 443.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 45,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Cuál es el puerto por defecto de HTTP?",
    "options": [
      "25",
      "445",
      "80"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. 80.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 46,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Cuál es el puerto habitual de SSH?",
    "options": [
      "110",
      "143",
      "22"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. 22.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 47,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Cuál es el puerto habitual de RDP?",
    "options": [
      "161",
      "3389",
      "53"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. 3389.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 48,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Cuál es el puerto habitual de SMB sobre TCP en Windows?",
    "options": [
      "67",
      "23",
      "445"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. 445.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 49,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué es una VPN?",
    "options": [
      "Un sistema de archivos",
      "Un túnel seguro para conectar redes o usuarios remotos",
      "Un tipo de memoria caché"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Un túnel seguro para conectar redes o usuarios remotos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 50,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Cuál es la función básica de un firewall?",
    "options": [
      "Asignar IP automáticamente",
      "Filtrar tráfico según reglas",
      "Reparar discos mecánicos"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Filtrar tráfico según reglas.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 51,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué estándar de seguridad inalámbrica es más robusto que WEP?",
    "options": [
      "Telnet",
      "WPA2",
      "POP3"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. WPA2.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 52,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué ventaja tiene la fibra óptica frente al cable de cobre?",
    "options": [
      "No permite largas distancias",
      "Necesita más repetidores siempre",
      "Mayor inmunidad a interferencias electromagnéticas"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Mayor inmunidad a interferencias electromagnéticas.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 53,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "¿Qué significa comunicación full-duplex?",
    "options": [
      "Transmisión en ambos sentidos simultáneamente",
      "Transmisión solo en un sentido",
      "Transmisión alterna pero no simultánea"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Transmisión en ambos sentidos simultáneamente.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 54,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "media",
    "text": "¿Con qué se asocia CSMA/CD?",
    "options": [
      "Resolución de nombres DNS",
      "Cifrado de redes WiFi",
      "Acceso al medio en Ethernet compartida clásica"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Acceso al medio en Ethernet compartida clásica.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 55,
    "section": "Anexo A",
    "topic": "Redes, TCP/IP, OSI y seguridad perimetral",
    "difficulty": "baja",
    "text": "En una topología en estrella, los equipos se conectan normalmente a:",
    "options": [
      "Una conexión directa punto a punto sin nodo central",
      "Un dispositivo central",
      "Un único cable cerrado en anillo"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Un dispositivo central.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 56,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "En el modelo relacional, los datos se organizan principalmente en:",
    "options": [
      "Paquetes Ethernet",
      "Píxeles",
      "Tablas"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Tablas.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 57,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "¿Qué identifica de forma única cada fila de una tabla?",
    "options": [
      "Vista",
      "Trigger",
      "Clave primaria"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Clave primaria.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 58,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "¿Qué clave establece una relación con la clave primaria de otra tabla?",
    "options": [
      "Clave foránea",
      "Clave de sesión",
      "Clave de cifrado"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Clave foránea.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 59,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "media",
    "text": "¿Qué es una clave candidata?",
    "options": [
      "Una tabla sin índices",
      "Un atributo o conjunto de atributos que podría identificar de forma única registros",
      "Una contraseña temporal de usuario"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Un atributo o conjunto de atributos que podría identificar de forma única registros.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 60,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "media",
    "text": "¿Qué exige la primera forma normal?",
    "options": [
      "Valores atómicos y no repetitivos en los campos",
      "Duplicar todos los datos",
      "Eliminar todas las claves primarias"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Valores atómicos y no repetitivos en los campos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 61,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "media",
    "text": "¿A qué tipo de lenguaje se asocia SELECT?",
    "options": [
      "DDL/definición de estructura",
      "DQL/consulta de datos",
      "TCL/control de transacciones"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. DQL/consulta de datos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 62,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "¿A qué grupo pertenece INSERT?",
    "options": [
      "DCL",
      "DML",
      "HTML"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. DML.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 63,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "¿A qué grupo pertenece CREATE TABLE?",
    "options": [
      "DQL",
      "DML",
      "DDL"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. DDL.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 64,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "media",
    "text": "¿A qué grupo pertenece COMMIT?",
    "options": [
      "DCL",
      "DDL",
      "TCL"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. TCL.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 65,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "¿Qué es un procedimiento almacenado?",
    "options": [
      "Un cable de consola",
      "Una imagen ISO de instalación",
      "Conjunto de instrucciones SQL guardado y ejecutable en el SGBD"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Conjunto de instrucciones SQL guardado y ejecutable en el SGBD.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 66,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "media",
    "text": "¿Qué es un trigger o disparador?",
    "options": [
      "Un índice gráfico de una web",
      "Código que se ejecuta automáticamente ante ciertos eventos en una tabla",
      "Un protocolo de backup"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Código que se ejecuta automáticamente ante ciertos eventos en una tabla.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 67,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "¿Cuál es un ejemplo de base de datos NoSQL de tipo clave-valor?",
    "options": [
      "Redis",
      "MySQL en modo relacional",
      "Microsoft Access únicamente"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Redis.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 68,
    "section": "Anexo A",
    "topic": "Bases de datos y SQL",
    "difficulty": "baja",
    "text": "En un modelo entidad-relación, una entidad representa normalmente:",
    "options": [
      "Un objeto o concepto del mundo real sobre el que se almacenan datos",
      "Una política de firewall",
      "Un puerto TCP"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Un objeto o concepto del mundo real sobre el que se almacenan datos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 69,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "En un flujograma, ¿qué suele representar un rombo?",
    "options": [
      "Un almacenamiento en cinta",
      "Un conector de red RJ45",
      "Una decisión o condición"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Una decisión o condición.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 70,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué es un bucle?",
    "options": [
      "Una estructura que repite instrucciones mientras se cumple una condición",
      "Un tipo de memoria ROM",
      "Una clave primaria compuesta"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Una estructura que repite instrucciones mientras se cumple una condición.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 71,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué es recursividad?",
    "options": [
      "Una función o procedimiento que se llama a sí mismo",
      "Una conversión de IPv4 a MAC",
      "Una copia completa del disco"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Una función o procedimiento que se llama a sí mismo.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 72,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué es una variable?",
    "options": [
      "Un protocolo de correo",
      "Una tabla sin registros",
      "Un espacio nombrado para almacenar un valor que puede cambiar"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Un espacio nombrado para almacenar un valor que puede cambiar.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 73,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué caracteriza a una función?",
    "options": [
      "Siempre es una dirección IP",
      "Puede recibir parámetros y devolver un resultado",
      "Solo existe en HTML"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Puede recibir parámetros y devolver un resultado.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 74,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué es un vector o array?",
    "options": [
      "Una regla de firewall",
      "Una colección indexada de elementos",
      "Un certificado digital"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Una colección indexada de elementos.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 75,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "En una arquitectura cliente/servidor, el cliente normalmente:",
    "options": [
      "Siempre aloja la base de datos principal",
      "Sustituye al sistema operativo",
      "Solicita servicios o recursos a un servidor"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Solicita servicios o recursos a un servidor.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 76,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué método HTTP se usa habitualmente para obtener un recurso?",
    "options": [
      "COMMIT",
      "DROP",
      "GET"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. GET.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 77,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué es HTML?",
    "options": [
      "Sistema operativo móvil",
      "Protocolo de cifrado de red",
      "Lenguaje de marcado para estructurar contenido web"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Lenguaje de marcado para estructurar contenido web.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 78,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Para qué se utiliza CSS?",
    "options": [
      "Para enviar correo",
      "Para definir presentación y estilos de páginas web",
      "Para asignar direcciones IP"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Para definir presentación y estilos de páginas web.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 79,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué permite Git?",
    "options": [
      "Controlar versiones y cambios del código fuente",
      "Medir el voltaje de la fuente de alimentación",
      "Resolver nombres DNS"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Controlar versiones y cambios del código fuente.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 80,
    "section": "Anexo A",
    "topic": "Programación, web y desarrollo",
    "difficulty": "baja",
    "text": "¿Qué finalidad tienen las herramientas CASE?",
    "options": [
      "Sustituir cables de red dañados",
      "Cifrar discos automáticamente",
      "Apoyar el análisis, diseño, documentación y desarrollo de software"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Apoyar el análisis, diseño, documentación y desarrollo de software.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    "id": 81,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "baja",
    "text": "La Ley Orgánica 3/2018 trata principalmente sobre:",
    "options": [
      "Prevención de riesgos laborales exclusivamente",
      "Contratación pública de obras",
      "Protección de datos personales y garantía de derechos digitales"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Protección de datos personales y garantía de derechos digitales.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 82,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "baja",
    "text": "El principio de minimización de datos implica que deben tratarse datos:",
    "options": [
      "Ilimitados si el sistema tiene capacidad",
      "Adecuados, pertinentes y limitados a lo necesario",
      "Solo en papel y nunca en formato digital"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Adecuados, pertinentes y limitados a lo necesario.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 83,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "baja",
    "text": "¿Cuál de los siguientes es un derecho clásico de protección de datos?",
    "options": [
      "Derecho a crear redes VLAN",
      "Derecho de acceso",
      "Derecho a elegir protocolo TCP"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Derecho de acceso.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 84,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "baja",
    "text": "Un encargado del tratamiento es quien:",
    "options": [
      "Es cualquier usuario que recibe publicidad",
      "Siempre decide los fines del tratamiento",
      "Trata datos personales por cuenta del responsable"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Trata datos personales por cuenta del responsable.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 85,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "baja",
    "text": "El responsable del tratamiento es quien principalmente:",
    "options": [
      "Determina fines y medios del tratamiento",
      "Repara físicamente servidores",
      "Asigna direcciones IP dinámicas"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Determina fines y medios del tratamiento.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 86,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "media",
    "text": "La seudonimización consiste en:",
    "options": [
      "Publicar datos personales sin restricciones",
      "Tratar datos de forma que no puedan atribuirse a una persona sin información adicional separada",
      "Eliminar todos los backups"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Tratar datos de forma que no puedan atribuirse a una persona sin información adicional separada.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 87,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "baja",
    "text": "El derecho a la desconexión digital se relaciona con:",
    "options": [
      "La eliminación de toda comunicación por correo",
      "La obligación de apagar routers a diario",
      "El respeto al tiempo de descanso fuera del ámbito laboral"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. El respeto al tiempo de descanso fuera del ámbito laboral.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 88,
    "section": "Anexo B",
    "topic": "Protección de datos y derechos digitales",
    "difficulty": "media",
    "text": "Una brecha de seguridad de datos personales debe gestionarse principalmente para:",
    "options": [
      "Ocultar el incidente siempre",
      "Cambiar únicamente el fondo de pantalla",
      "Valorar riesgos para derechos y libertades de las personas afectadas"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Valorar riesgos para derechos y libertades de las personas afectadas.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 89,
    "section": "Anexo B",
    "topic": "Igualdad efectiva",
    "difficulty": "baja",
    "text": "La Ley Orgánica 3/2007 se refiere a:",
    "options": [
      "Igualdad efectiva de mujeres y hombres",
      "Propiedad horizontal",
      "Delitos informáticos"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Igualdad efectiva de mujeres y hombres.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 90,
    "section": "Anexo B",
    "topic": "Igualdad efectiva",
    "difficulty": "media",
    "text": "La igualdad de trato supone:",
    "options": [
      "Preferencia automática de un sexo en todos los casos",
      "Aplicación de normas distintas sin justificación",
      "Ausencia de discriminación directa o indirecta por razón de sexo"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Ausencia de discriminación directa o indirecta por razón de sexo.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 91,
    "section": "Anexo B",
    "topic": "Igualdad efectiva",
    "difficulty": "baja",
    "text": "La discriminación directa se produce cuando:",
    "options": [
      "Una norma aparentemente neutra siempre beneficia a todos",
      "Se aplica cifrado a una base de datos",
      "Una persona es tratada de manera menos favorable por razón de sexo"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Una persona es tratada de manera menos favorable por razón de sexo.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 92,
    "section": "Anexo B",
    "topic": "Igualdad efectiva",
    "difficulty": "media",
    "text": "La discriminación indirecta se produce cuando:",
    "options": [
      "Un usuario olvida su contraseña",
      "Un firewall bloquea un puerto",
      "Una disposición aparentemente neutra sitúa a personas de un sexo en desventaja particular sin justificación"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Una disposición aparentemente neutra sitúa a personas de un sexo en desventaja particular sin justificación.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 93,
    "section": "Anexo B",
    "topic": "Igualdad efectiva",
    "difficulty": "baja",
    "text": "El acoso sexual y el acoso por razón de sexo se consideran:",
    "options": [
      "Conductas discriminatorias",
      "Protocolos de red",
      "Copias de seguridad incrementales"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Conductas discriminatorias.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 94,
    "section": "Anexo B",
    "topic": "Igualdad efectiva",
    "difficulty": "baja",
    "text": "Los planes de igualdad en empresas buscan principalmente:",
    "options": [
      "Ordenar medidas para alcanzar igualdad real entre mujeres y hombres",
      "Crear VLAN obligatorias",
      "Sustituir contratos laborales por scripts"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Ordenar medidas para alcanzar igualdad real entre mujeres y hombres.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 95,
    "section": "Anexo B",
    "topic": "Violencia de género",
    "difficulty": "baja",
    "text": "La Ley Orgánica 1/2004 tiene por finalidad:",
    "options": [
      "Aprobar presupuestos autonómicos",
      "Prevenir, sancionar y erradicar la violencia de género y prestar asistencia a las víctimas",
      "Regular exclusivamente direcciones IPv6"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Prevenir, sancionar y erradicar la violencia de género y prestar asistencia a las víctimas.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 96,
    "section": "Anexo B",
    "topic": "Violencia de género",
    "difficulty": "media",
    "text": "Según la LO 1/2004, la violencia de género comprende actos de violencia:",
    "options": [
      "Únicamente digital sin víctimas personales",
      "Física y psicológica, incluidas agresiones sexuales, amenazas, coacciones o privación arbitraria de libertad",
      "Solo patrimonial entre empresas"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Física y psicológica, incluidas agresiones sexuales, amenazas, coacciones o privación arbitraria de libertad.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 97,
    "section": "Anexo B",
    "topic": "Violencia de género",
    "difficulty": "baja",
    "text": "La protección integral de la LO 1/2004 incluye medidas de:",
    "options": [
      "Diseño de páginas web",
      "Compresión de archivos y backup",
      "Sensibilización, prevención, asistencia y protección"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Sensibilización, prevención, asistencia y protección.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 98,
    "section": "Anexo B",
    "topic": "Violencia de género",
    "difficulty": "baja",
    "text": "Las campañas institucionales contra la violencia de género persiguen principalmente:",
    "options": [
      "Aumentar la velocidad de Internet",
      "Crear claves primarias",
      "Sensibilizar y prevenir conductas violentas"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Sensibilizar y prevenir conductas violentas.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 99,
    "section": "Anexo B",
    "topic": "Violencia de género",
    "difficulty": "baja",
    "text": "La publicidad que utilice la imagen de la mujer de forma vejatoria o discriminatoria:",
    "options": [
      "Es obligatoria en medios públicos",
      "Puede considerarse ilícita o discriminatoria",
      "Es siempre válida si aparece en Internet"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Puede considerarse ilícita o discriminatoria.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 100,
    "section": "Anexo B",
    "topic": "Violencia de género",
    "difficulty": "baja",
    "text": "El consentimiento en protección de datos debe ser, con carácter general:",
    "options": [
      "Obligatorio incluso sin base jurídica",
      "Tácito siempre y sin información",
      "Libre, específico, informado e inequívoco"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Libre, específico, informado e inequívoco.",
    "reference": "Programa AENA IIIJ05 2026 - Anexo B"
  },
  {
    "id": 101,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "baja",
    "text": "Un equipo puede hacer ping a 192.168.1.1 y a 8.8.8.8, pero no resuelve www.aena.es. ¿Dónde está probablemente el problema?",
    "options": [
      "DNS",
      "Cable de alimentación",
      "Memoria RAM"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. DNS.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 102,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "baja",
    "text": "Un PC recibe la IP 169.254.12.20/16 y no navega. ¿Qué indica normalmente esa dirección?",
    "options": [
      "Conexión VPN correcta",
      "Fallo al obtener IP por DHCP y autoconfiguración APIPA",
      "DNS funcionando correctamente"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Fallo al obtener IP por DHCP y autoconfiguración APIPA.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 103,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Una oficina quiere conectar varias VLAN y permitir comunicación entre ellas aplicando rutas. ¿Qué dispositivo o función necesita?",
    "options": [
      "Cable coaxial exclusivamente",
      "Hub pasivo",
      "Enrutamiento de capa 3"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Enrutamiento de capa 3.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 104,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "baja",
    "text": "En una red antigua, un dispositivo repite las tramas por todos sus puertos sin aprender MAC. ¿Qué es?",
    "options": [
      "Hub",
      "Switch gestionado",
      "Firewall de nueva generación"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Hub.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 105,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "baja",
    "text": "Se quiere separar la red de invitados de la red interna usando la misma infraestructura física de switches. ¿Qué solución encaja mejor?",
    "options": [
      "VLAN",
      "RAID 0",
      "POP3"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. VLAN.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 106,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Un usuario entra al dominio pero no puede escribir en una carpeta compartida. Otros sí pueden. ¿Qué se debe revisar primero?",
    "options": [
      "Permisos de recurso compartido y NTFS del usuario/grupo",
      "Temperatura de la CPU",
      "Puerto HDMI"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Permisos de recurso compartido y NTFS del usuario/grupo.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 107,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "En un dominio Windows, ¿qué servidor valida normalmente credenciales y aplica políticas de dominio?",
    "options": [
      "Proxy inverso exclusivamente",
      "Controlador de dominio",
      "Servidor DHCP únicamente"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Controlador de dominio.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 108,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Se quiere forzar bloqueo de pantalla tras 10 minutos a todos los usuarios de una OU. ¿Qué herramienta usarías?",
    "options": [
      "GPO",
      "RAID 5",
      "ARP"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. GPO.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 109,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Un cliente de correo no puede enviar mensajes, pero sí recibir. ¿Qué configuración revisarías primero?",
    "options": [
      "Resolución ARP",
      "Servidor/puerto SMTP",
      "Frecuencia de la RAM"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Servidor/puerto SMTP.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 110,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Un usuario quiere ver el mismo estado de correo leído/no leído en móvil y PC. ¿Qué protocolo conviene?",
    "options": [
      "ICMP",
      "POP3 descargando y borrando",
      "IMAP"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. IMAP.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 111,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Una copia diferencial guarda:",
    "options": [
      "Cambios desde la última copia completa",
      "Solo los ficheros del sistema operativo",
      "Cambios desde cualquier última copia, sea completa o incremental"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Cambios desde la última copia completa.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 112,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Una copia incremental guarda:",
    "options": [
      "Siempre todos los datos",
      "Solo datos duplicados",
      "Cambios desde la última copia realizada"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Cambios desde la última copia realizada.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 113,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Con una copia completa del lunes y diferenciales de martes, miércoles y jueves, para restaurar jueves necesitas:",
    "options": [
      "Solo la incremental del martes",
      "Completa del lunes + diferencial del jueves",
      "Todas las diferenciales de martes a jueves"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Completa del lunes + diferencial del jueves.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 114,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Para reducir el impacto de ransomware en backups, lo más recomendable es:",
    "options": [
      "Mantener copias offline/inmutables y probar restauraciones",
      "Guardar la única copia en la misma carpeta compartida",
      "Desactivar antivirus en servidores"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Mantener copias offline/inmutables y probar restauraciones.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 115,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Un servidor con RAID 1 pierde un disco. ¿Qué ocurre normalmente?",
    "options": [
      "Pierde todos los datos al instante",
      "Mejora el rendimiento de red",
      "Puede seguir funcionando con el disco sano hasta reemplazo"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Puede seguir funcionando con el disco sano hasta reemplazo.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 116,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Antes de actualizar una VM crítica se crea un snapshot. ¿Cuál es la interpretación correcta?",
    "options": [
      "Sirve para volver al estado anterior, pero no sustituye una política de backup",
      "Es una copia externa completa ante incendio",
      "Convierte la VM en contenedor Docker"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Sirve para volver al estado anterior, pero no sustituye una política de backup.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 117,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Se instala VMware ESXi directamente en un servidor físico. ¿Qué tipo de hipervisor es?",
    "options": [
      "Tipo 1",
      "Tipo 2",
      "Emulador de terminal"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Tipo 1.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 118,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Una aplicación se despliega en contenedores con sus dependencias, compartiendo kernel del host. ¿Qué tecnología encaja?",
    "options": [
      "RAID 10 exclusivamente",
      "POP3",
      "Docker/contenerización"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Docker/contenerización.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 119,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "baja",
    "text": "No funciona el escritorio remoto a un equipo Windows. ¿Qué puerto revisarías si se usa RDP por defecto?",
    "options": [
      "3389/TCP",
      "53/UDP únicamente",
      "25/TCP"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. 3389/TCP.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 120,
    "section": "Supuesto teórico-práctico",
    "topic": "Administración TIC aplicada",
    "difficulty": "media",
    "text": "Un navegador muestra aviso de certificado caducado al entrar en una web interna HTTPS. ¿Qué revisarías?",
    "options": [
      "Validez del certificado TLS del servidor",
      "Velocidad del ventilador",
      "Tipo de memoria USB"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Validez del certificado TLS del servidor.",
    "reference": "Programa AENA IIIJ05 2026 - Supuesto práctico basado en Anexo A"
  },
  {
    "id": 121,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'The server must be patched before deployment.'",
    "options": [
      "El servidor debe ser parcheado antes del despliegue",
      "El servidor debe pintarse antes del informe",
      "El servidor debe apagarse por contraseña"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. El servidor debe ser parcheado antes del despliegue.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 122,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'backup retention policy.'",
    "options": [
      "Política de retención de copias de seguridad",
      "Política de reinicio de pantalla",
      "Regla de conexión del teclado"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Política de retención de copias de seguridad.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 123,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'packet loss.'",
    "options": [
      "Bloqueo de usuario",
      "Pérdida de paquetes",
      "Ganancia de memoria"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Pérdida de paquetes.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 124,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'default gateway.'",
    "options": [
      "Puerta de enlace predeterminada",
      "Clave primaria por defecto",
      "Pasarela de copias antiguas"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Puerta de enlace predeterminada.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 125,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'credentials.'",
    "options": [
      "Créditos presupuestarios",
      "Credenciales",
      "Condensadores"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Credenciales.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 126,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "media",
    "text": "En contexto técnico, 'to troubleshoot' significa:",
    "options": [
      "Reiniciar siempre sin analizar",
      "Traducir documentación",
      "Diagnosticar y resolver problemas"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Diagnosticar y resolver problemas.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 127,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'encryption key.'",
    "options": [
      "Tecla de impresión",
      "Clave de cifrado",
      "Puerto de enlace"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Clave de cifrado.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 128,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'network interface card.'",
    "options": [
      "Placa de alimentación",
      "Tarjeta de interfaz de red",
      "Carta de red social"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Tarjeta de interfaz de red.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 129,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'read-only access.'",
    "options": [
      "Lectura cifrada obligatoria",
      "Acceso de escritura total",
      "Acceso de solo lectura"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Acceso de solo lectura.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 130,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'high availability.'",
    "options": [
      "Alta visibilidad",
      "Almacenamiento alto",
      "Alta disponibilidad"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Alta disponibilidad.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 131,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'The service is down.'",
    "options": [
      "El servicio está cifrado",
      "El servicio está actualizado",
      "El servicio está caído/no disponible"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. El servicio está caído/no disponible.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 132,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'latency.'",
    "options": [
      "Licencia",
      "Localización",
      "Latencia"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Latencia.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 133,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'storage array.'",
    "options": [
      "Cola de impresión",
      "Matriz/conjunto de almacenamiento",
      "Archivo de usuarios"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Matriz/conjunto de almacenamiento.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 134,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "media",
    "text": "En documentación técnica, 'deprecated' significa:",
    "options": [
      "Obsoleto o no recomendado para nuevos usos",
      "Cifrado con clave pública",
      "Disponible en alta prioridad"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Obsoleto o no recomendado para nuevos usos.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 135,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'rollback.'",
    "options": [
      "Arranque limpio",
      "Copia completa",
      "Reversión/vuelta atrás"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Reversión/vuelta atrás.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 136,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'The user account is locked out.'",
    "options": [
      "La cuenta de usuario está cifrada",
      "La cuenta de usuario está compartida",
      "La cuenta de usuario está bloqueada"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. La cuenta de usuario está bloqueada.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 137,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'firewall rule.'",
    "options": [
      "Regla de normalización",
      "Regla de cortafuegos/firewall",
      "Regla de impresión"
    ],
    "answer": 1,
    "explanation": "Respuesta correcta: B. Regla de cortafuegos/firewall.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 138,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'load balancer.'",
    "options": [
      "Medidor de voltaje",
      "Cargador de batería",
      "Balanceador de carga"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Balanceador de carga.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 139,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "media",
    "text": "En ciberseguridad, 'endpoint' suele referirse a:",
    "options": [
      "Puerto físico de alimentación",
      "Punto final de una novela",
      "Dispositivo o equipo final conectado a la red"
    ],
    "answer": 2,
    "explanation": "Respuesta correcta: C. Dispositivo o equipo final conectado a la red.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    "id": 140,
    "section": "Inglés técnico",
    "topic": "Traducción técnica IT",
    "difficulty": "baja",
    "text": "Traduce: 'root cause.'",
    "options": [
      "Causa raíz",
      "Directorio raíz siempre",
      "Usuario administrador"
    ],
    "answer": 0,
    "explanation": "Respuesta correcta: A. Causa raíz.",
    "reference": "Programa AENA IIIJ05 2026 - Inglés técnico"
  }
];
