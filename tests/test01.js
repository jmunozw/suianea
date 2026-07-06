const questions = [
  
  {
    "section": "TEÓRICA",
    "topic": "Hardware",
    "text": "¿Qué componente se encarga de ejecutar las instrucciones de los programas?",
    "options": [
      "CPU",
      "Memoria RAM",
      "Disco duro"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Hardware",
    "text": "¿Qué tipo de memoria pierde su contenido al apagar el equipo?",
    "options": [
      "ROM",
      "RAM",
      "SSD"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Hardware",
    "text": "¿Qué bus se utiliza habitualmente para conectar tarjetas gráficas modernas?",
    "options": [
      "PCI Express",
      "IDE",
      "SATA"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Hardware",
    "text": "¿Qué dispositivo convierte la corriente alterna en corriente continua para alimentar el ordenador?",
    "options": [
      "Placa base",
      "Fuente de alimentación",
      "Tarjeta de red"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Hardware",
    "text": "¿Qué tecnología de almacenamiento no tiene partes mecánicas móviles?",
    "options": [
      "HDD",
      "SSD",
      "DVD"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Sistemas Operativos",
    "text": "¿Qué elemento del sistema operativo gestiona la comunicación entre el hardware y el software?",
    "options": [
      "Kernel",
      "Explorador de archivos",
      "Interfaz gráfica"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Sistemas Operativos",
    "text": "En Windows, ¿qué herramienta permite ver procesos, uso de CPU, memoria y aplicaciones en ejecución?",
    "options": [
      "Administrador de dispositivos",
      "Administrador de tareas",
      "Panel de control"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Sistemas Operativos",
    "text": "¿Qué sistema de archivos es característico de instalaciones modernas de Windows?",
    "options": [
      "NTFS",
      "EXT4",
      "HFS+"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Sistemas Operativos",
    "text": "¿Qué comando de Linux muestra el contenido de un directorio?",
    "options": [
      "cd",
      "ls",
      "pwd"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Sistemas Operativos",
    "text": "¿Qué tipo de cuenta tiene privilegios completos sobre un sistema Windows?",
    "options": [
      "Invitado",
      "Usuario estándar",
      "Administrador"
    ],
    "answer": 2
  },
  {
    "section": "TEÓRICA",
    "topic": "Redes",
    "text": "¿Qué dispositivo trabaja principalmente en la capa 2 del modelo OSI y conmuta tramas dentro de una LAN?",
    "options": [
      "Switch",
      "Router",
      "Módem"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Redes",
    "text": "¿Qué dispositivo se utiliza para interconectar redes diferentes?",
    "options": [
      "Hub",
      "Router",
      "Repetidor"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Redes",
    "text": "¿Qué tipo de red cubre normalmente una oficina, edificio o pequeña organización?",
    "options": [
      "LAN",
      "WAN",
      "MAN"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Redes",
    "text": "¿Qué dirección identifica de forma física una tarjeta de red Ethernet?",
    "options": [
      "Dirección IP",
      "Dirección MAC",
      "Máscara de subred"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Redes",
    "text": "¿Qué medio de transmisión es inmune a interferencias electromagnéticas?",
    "options": [
      "Cable coaxial",
      "Par trenzado",
      "Fibra óptica"
    ],
    "answer": 2
  },
  {
    "section": "TEÓRICA",
    "topic": "TCP/IP",
    "text": "¿Qué protocolo se utiliza para asignar automáticamente direcciones IP a los equipos de una red?",
    "options": [
      "DNS",
      "DHCP",
      "FTP"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "TCP/IP",
    "text": "¿Qué protocolo traduce nombres de dominio a direcciones IP?",
    "options": [
      "DNS",
      "SMTP",
      "SNMP"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "TCP/IP",
    "text": "¿Qué protocolo se usa normalmente para comprobar conectividad mediante paquetes Echo Request y Echo Reply?",
    "options": [
      "ICMP",
      "ARP",
      "UDP"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "TCP/IP",
    "text": "¿Qué puerto utiliza HTTP por defecto?",
    "options": [
      "21",
      "80",
      "443"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "TCP/IP",
    "text": "¿Qué puerto utiliza HTTPS por defecto?",
    "options": [
      "25",
      "110",
      "443"
    ],
    "answer": 2
  },
  {
    "section": "TEÓRICA",
    "topic": "Seguridad",
    "text": "¿Qué concepto garantiza que la información solo sea accesible por usuarios autorizados?",
    "options": [
      "Confidencialidad",
      "Disponibilidad",
      "Trazabilidad"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Seguridad",
    "text": "¿Qué concepto garantiza que la información no ha sido modificada de forma no autorizada?",
    "options": [
      "Integridad",
      "Autenticación",
      "Disponibilidad"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Seguridad",
    "text": "¿Qué mecanismo permite verificar la identidad de un usuario?",
    "options": [
      "Autenticación",
      "Compresión",
      "Fragmentación"
    ],
    "answer": 0
  },
  {
    "section": "TEÓRICA",
    "topic": "Seguridad",
    "text": "¿Qué tipo de malware cifra los archivos de la víctima y exige un pago para recuperarlos?",
    "options": [
      "Spyware",
      "Ransomware",
      "Adware"
    ],
    "answer": 1
  },
  {
    "section": "TEÓRICA",
    "topic": "Seguridad",
    "text": "¿Qué dispositivo o sistema filtra tráfico entre redes según reglas de seguridad?",
    "options": [
      "Firewall",
      "Switch no gestionable",
      "Servidor DHCP"
    ],
    "answer": 0
  },
  {
    "section": "SUPUESTO",
    "topic": "Redes",
    "text": "Un usuario puede hacer ping a 8.8.8.8 pero no puede acceder a www.aena.es. ¿Qué servicio parece estar fallando?",
    "options": [
      "DNS",
      "DHCP",
      "ICMP"
    ],
    "answer": 0
  },
  {
    "section": "SUPUESTO",
    "topic": "Redes",
    "text": "Un equipo tiene IP 169.254.10.20. ¿Qué indica normalmente esta dirección?",
    "options": [
      "Que ha recibido IP correcta del servidor DHCP",
      "Que no ha podido obtener IP mediante DHCP",
      "Que está conectado a una VPN"
    ],
    "answer": 1
  },
  {
    "section": "SUPUESTO",
    "topic": "Sistemas Operativos",
    "text": "Un usuario no puede instalar software en Windows porque no tiene permisos suficientes. ¿Qué tipo de cuenta necesitaría normalmente?",
    "options": [
      "Cuenta de invitado",
      "Cuenta estándar",
      "Cuenta administradora"
    ],
    "answer": 2
  },
  {
    "section": "SUPUESTO",
    "topic": "Hardware",
    "text": "Un ordenador se apaga de forma repentina bajo carga elevada. ¿Qué componente conviene revisar primero?",
    "options": [
      "Fuente de alimentación",
      "Monitor",
      "Teclado"
    ],
    "answer": 0
  },
  {
    "section": "SUPUESTO",
    "topic": "Seguridad",
    "text": "Un empleado recibe un correo que simula ser de soporte técnico y le pide su contraseña. ¿Qué tipo de ataque es?",
    "options": [
      "Phishing",
      "DDoS",
      "Spoofing ARP"
    ],
    "answer": 0
  }
];