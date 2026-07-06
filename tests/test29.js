const questions = [
  {
    "id": 1,
    "section": "Inglés técnico",
    "topic": "Soporte técnico",
    "difficulty": "easy",
    "text": "Traduce correctamente: 'The workstation is not responding.'",
    "options": [
      "La estación de trabajo no está reparando.",
      "La estación de trabajo no responde.",
      "El servidor está respondiendo lentamente."
    ],
    "answer": 1,
    "explanation": "'Workstation' es estación de trabajo y 'not responding' indica que no responde o está bloqueada.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 2,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "easy",
    "text": "En redes, 'default gateway' se traduce como:",
    "options": [
      "Pasarela de seguridad",
      "Servidor principal por defecto",
      "Puerta de enlace predeterminada"
    ],
    "answer": 2,
    "explanation": "La 'default gateway' es la puerta de enlace usada para salir hacia otras redes.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 3,
    "section": "Inglés técnico",
    "topic": "Backups",
    "difficulty": "easy",
    "text": "Traduce: 'Restore the latest backup.'",
    "options": [
      "Restaura la última copia de seguridad.",
      "Elimina la última copia de seguridad.",
      "Programa una copia de seguridad nueva."
    ],
    "answer": 0,
    "explanation": "'Restore' significa restaurar o recuperar datos desde una copia previa.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 4,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "easy",
    "text": "En seguridad, 'firewall rule' significa:",
    "options": [
      "Muro de archivo",
      "Regla de cortafuegos",
      "Norma de servidor"
    ],
    "answer": 1,
    "explanation": "Una 'firewall rule' permite o bloquea tráfico según condiciones definidas.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 5,
    "section": "Inglés técnico",
    "topic": "Sistemas operativos",
    "difficulty": "easy",
    "text": "Traduce: 'The user account is locked.'",
    "options": [
      "La cuenta de usuario está cerrada definitivamente.",
      "El usuario ha iniciado sesión.",
      "La cuenta de usuario está bloqueada."
    ],
    "answer": 2,
    "explanation": "'Locked' significa bloqueada, por ejemplo tras varios intentos fallidos de contraseña.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 6,
    "section": "Inglés técnico",
    "topic": "DNS",
    "difficulty": "easy",
    "text": "'Hostname resolution' se traduce mejor como:",
    "options": [
      "Resolución de nombres de host",
      "Reserva de nombres de usuario",
      "Registro de direcciones físicas"
    ],
    "answer": 0,
    "explanation": "La resolución convierte nombres de host en direcciones IP u otros registros.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 7,
    "section": "Inglés técnico",
    "topic": "DHCP",
    "difficulty": "easy",
    "text": "Traduce: 'The client obtained an IP address from the DHCP server.'",
    "options": [
      "El cliente eliminó una dirección IP del servidor DNS.",
      "El cliente cambió la dirección MAC del servidor DHCP.",
      "El cliente obtuvo una dirección IP del servidor DHCP."
    ],
    "answer": 2,
    "explanation": "DHCP asigna automáticamente parámetros de red como dirección IP, máscara y gateway.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 8,
    "section": "Inglés técnico",
    "topic": "Protocolos",
    "difficulty": "easy",
    "text": "En correo electrónico, 'outgoing mail server' suele referirse a:",
    "options": [
      "Servidor de correo entrante",
      "Servidor de correo saliente",
      "Cliente de correo local"
    ],
    "answer": 1,
    "explanation": "El servidor saliente suele usar SMTP para enviar correo.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 9,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "medium",
    "text": "Traduce: 'Packet loss may cause intermittent connectivity issues.'",
    "options": [
      "La pérdida de paquetes puede causar problemas intermitentes de conectividad.",
      "El paquete perdido puede instalar conexiones permanentes.",
      "La conectividad intermitente elimina todos los paquetes."
    ],
    "answer": 0,
    "explanation": "'Packet loss' es pérdida de paquetes; 'intermittent connectivity issues' son problemas intermitentes de conexión.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 10,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "medium",
    "text": "'Multi-factor authentication' se traduce como:",
    "options": [
      "Autorización de múltiples archivos",
      "Cifrado de múltiples factores",
      "Autenticación multifactor"
    ],
    "answer": 2,
    "explanation": "MFA exige dos o más factores de verificación para acceder.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 11,
    "section": "Inglés técnico",
    "topic": "Bases de datos",
    "difficulty": "easy",
    "text": "En SQL, 'primary key' significa:",
    "options": [
      "Llave principal de cifrado",
      "Clave primaria",
      "Índice secundario"
    ],
    "answer": 1,
    "explanation": "La clave primaria identifica de forma única cada fila de una tabla.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 12,
    "section": "Inglés técnico",
    "topic": "Bases de datos",
    "difficulty": "medium",
    "text": "Traduce: 'The query returned no rows.'",
    "options": [
      "La consulta no devolvió filas.",
      "La cola no devolvió errores.",
      "La consulta borró todas las filas."
    ],
    "answer": 0,
    "explanation": "'Query' es consulta y 'rows' son filas o registros resultantes.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 13,
    "section": "Inglés técnico",
    "topic": "Virtualización",
    "difficulty": "easy",
    "text": "'Virtual machine snapshot' se traduce mejor como:",
    "options": [
      "Copia completa externa de máquina virtual",
      "Instantánea de máquina virtual",
      "Imagen física del servidor"
    ],
    "answer": 1,
    "explanation": "Un 'snapshot' captura el estado de una VM en un momento concreto; no equivale siempre a un backup completo.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 14,
    "section": "Inglés técnico",
    "topic": "Sistemas",
    "difficulty": "medium",
    "text": "Traduce: 'Restart the service and check the logs.'",
    "options": [
      "Restaura el servidor y borra los registros.",
      "Reinicia la sesión y comprueba los usuarios.",
      "Reinicia el servicio y revisa los registros."
    ],
    "answer": 2,
    "explanation": "'Logs' son registros de eventos; 'service' es servicio del sistema o aplicación.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 15,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "medium",
    "text": "'Vulnerability assessment' significa:",
    "options": [
      "Evaluación de vulnerabilidades",
      "Asignación de vulnerabilidades",
      "Autorización de seguridad"
    ],
    "answer": 0,
    "explanation": "Consiste en identificar y valorar vulnerabilidades en sistemas o redes.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 16,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "medium",
    "text": "Traduce: 'The switch forwards frames based on MAC addresses.'",
    "options": [
      "El router reenvía tramas usando nombres DNS.",
      "El switch cifra paquetes según puertos TCP.",
      "El switch reenvía tramas basándose en direcciones MAC."
    ],
    "answer": 2,
    "explanation": "En capa 2, un switch toma decisiones usando direcciones MAC y trabaja con tramas.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 17,
    "section": "Inglés técnico",
    "topic": "OSI/TCP-IP",
    "difficulty": "easy",
    "text": "En redes, 'frame' se traduce como:",
    "options": [
      "Trama",
      "Marco de ventana",
      "Paquete IP exclusivamente"
    ],
    "answer": 0,
    "explanation": "En el modelo OSI, la PDU de enlace de datos se llama trama.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 18,
    "section": "Inglés técnico",
    "topic": "OSI/TCP-IP",
    "difficulty": "medium",
    "text": "Traduce: 'The application layer provides network services to user applications.'",
    "options": [
      "La capa física proporciona permisos a usuarios locales.",
      "La capa de aplicación proporciona servicios de red a las aplicaciones de usuario.",
      "La capa de transporte almacena aplicaciones de usuario."
    ],
    "answer": 1,
    "explanation": "La capa de aplicación engloba protocolos como HTTP, DNS, SMTP o FTP.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 19,
    "section": "Inglés técnico",
    "topic": "Web",
    "difficulty": "easy",
    "text": "'Web browser cache' se traduce como:",
    "options": [
      "Copia del servidor web",
      "Carpeta de arranque del navegador",
      "Caché del navegador web"
    ],
    "answer": 2,
    "explanation": "La caché guarda recursos temporalmente para acelerar cargas posteriores.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 20,
    "section": "Inglés técnico",
    "topic": "Web",
    "difficulty": "medium",
    "text": "Traduce: 'The request timed out.'",
    "options": [
      "La solicitud agotó el tiempo de espera.",
      "La petición fue traducida correctamente.",
      "La respuesta fue aceptada por el usuario."
    ],
    "answer": 0,
    "explanation": "'Timed out' indica que expiró el tiempo máximo de espera.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 21,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "easy",
    "text": "'Access control list' se traduce como:",
    "options": [
      "Lista de cuentas bloqueadas",
      "Lista de control de acceso",
      "Control de archivos adjuntos"
    ],
    "answer": 1,
    "explanation": "Una ACL define permisos o reglas de acceso sobre recursos o tráfico.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 22,
    "section": "Inglés técnico",
    "topic": "Sistemas operativos",
    "difficulty": "medium",
    "text": "Traduce: 'The process is running in the background.'",
    "options": [
      "El proceso está arrancando desde la BIOS.",
      "El programa se ejecuta en primer plano obligatorio.",
      "El proceso se está ejecutando en segundo plano."
    ],
    "answer": 2,
    "explanation": "'Background' significa segundo plano, sin interacción directa constante del usuario.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 23,
    "section": "Inglés técnico",
    "topic": "Almacenamiento",
    "difficulty": "easy",
    "text": "'Hard drive failure' significa:",
    "options": [
      "Fallo del disco duro",
      "Actualización del disco duro",
      "Fragmentación del sistema operativo"
    ],
    "answer": 0,
    "explanation": "'Failure' indica fallo o avería del componente.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 24,
    "section": "Inglés técnico",
    "topic": "Backups",
    "difficulty": "medium",
    "text": "Traduce: 'Incremental backups only copy changed data since the last backup.'",
    "options": [
      "Las copias completas solo copian archivos eliminados desde el último reinicio.",
      "Las copias incrementales solo copian los datos cambiados desde la última copia.",
      "Las copias diferenciales borran los datos no modificados."
    ],
    "answer": 1,
    "explanation": "Un backup incremental copia cambios desde el último backup, sea completo o incremental.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 25,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "easy",
    "text": "'Bandwidth' se traduce normalmente como:",
    "options": [
      "Longitud de contraseña",
      "Anchura de cable",
      "Ancho de banda"
    ],
    "answer": 2,
    "explanation": "En redes, ancho de banda indica capacidad de transmisión.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 26,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "medium",
    "text": "Traduce: 'The router drops packets that do not match the route table.'",
    "options": [
      "El router descarta paquetes que no coinciden con la tabla de rutas.",
      "El switch guarda paquetes que no coinciden con la tabla ARP.",
      "El router crea usuarios que no coinciden con la tabla DNS."
    ],
    "answer": 0,
    "explanation": "'Drop packets' significa descartar paquetes; 'route table' es tabla de rutas.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 27,
    "section": "Inglés técnico",
    "topic": "Active Directory",
    "difficulty": "easy",
    "text": "'Group policy' se traduce como:",
    "options": [
      "Política de copia",
      "Directiva de grupo",
      "Grupo de direcciones"
    ],
    "answer": 1,
    "explanation": "En Windows/AD, una GPO aplica configuraciones a usuarios o equipos.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 28,
    "section": "Inglés técnico",
    "topic": "Active Directory",
    "difficulty": "medium",
    "text": "Traduce: 'The domain controller authenticates users.'",
    "options": [
      "El dominio controla la temperatura del servidor.",
      "El cliente de dominio cifra todos los discos.",
      "El controlador de dominio autentica usuarios."
    ],
    "answer": 2,
    "explanation": "Un controlador de dominio valida credenciales y gestiona autenticación en AD.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 29,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "medium",
    "text": "'Least privilege principle' significa:",
    "options": [
      "Principio de mínimo privilegio",
      "Principio de contraseña más larga",
      "Privilegio de máxima disponibilidad"
    ],
    "answer": 0,
    "explanation": "Consiste en conceder solo los permisos necesarios para realizar una tarea.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 30,
    "section": "Inglés técnico",
    "topic": "Soporte técnico",
    "difficulty": "easy",
    "text": "Traduce: 'Open a support ticket.'",
    "options": [
      "Cierra un puerto de soporte.",
      "Abre un ticket de soporte.",
      "Instala un controlador de impresora."
    ],
    "answer": 1,
    "explanation": "En soporte, 'ticket' es una incidencia o solicitud registrada.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 31,
    "section": "Inglés técnico",
    "topic": "Hardware",
    "difficulty": "easy",
    "text": "'Power supply unit' se traduce como:",
    "options": [
      "Unidad de suministro lógico",
      "Sistema de protección de red",
      "Fuente de alimentación"
    ],
    "answer": 2,
    "explanation": "La PSU convierte y suministra energía eléctrica al equipo.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 32,
    "section": "Inglés técnico",
    "topic": "Hardware",
    "difficulty": "medium",
    "text": "Traduce: 'The motherboard has two available RAM slots.'",
    "options": [
      "La placa base tiene dos ranuras de RAM disponibles.",
      "La memoria principal tiene dos placas base activas.",
      "El disco duro tiene dos particiones de RAM disponibles."
    ],
    "answer": 0,
    "explanation": "'Motherboard' es placa base y 'RAM slots' son ranuras para módulos de memoria RAM.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 33,
    "section": "Inglés técnico",
    "topic": "Linux",
    "difficulty": "medium",
    "text": "'File permissions' significa:",
    "options": [
      "Archivos permitidos por defecto",
      "Permisos de archivo",
      "Permisos de conexión inalámbrica"
    ],
    "answer": 1,
    "explanation": "En Linux y otros sistemas, los permisos controlan lectura, escritura y ejecución.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 34,
    "section": "Inglés técnico",
    "topic": "Linux",
    "difficulty": "medium",
    "text": "Traduce: 'Run the command with administrator privileges.'",
    "options": [
      "Corre el comando dentro de una impresora administrativa.",
      "Abre el comando con permisos de invitado.",
      "Ejecuta el comando con privilegios de administrador."
    ],
    "answer": 2,
    "explanation": "'Run the command' es ejecutar el comando; 'administrator privileges' son privilegios de administrador.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 35,
    "section": "Inglés técnico",
    "topic": "Correo",
    "difficulty": "easy",
    "text": "'Incoming mail' se traduce como:",
    "options": [
      "Correo entrante",
      "Correo saliente",
      "Correo cifrado"
    ],
    "answer": 0,
    "explanation": "El correo entrante suele recibirse mediante IMAP o POP3.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 36,
    "section": "Inglés técnico",
    "topic": "Correo",
    "difficulty": "medium",
    "text": "Traduce: 'SMTP is used to send email messages.'",
    "options": [
      "SMTP se usa para resolver nombres de dominio.",
      "SMTP se usa para enviar mensajes de correo electrónico.",
      "SMTP se usa para montar discos remotos."
    ],
    "answer": 1,
    "explanation": "SMTP es el protocolo clásico para envío de correo electrónico.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 37,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "medium",
    "text": "'Encrypted connection' significa:",
    "options": [
      "Conexión comprimida",
      "Conexión caducada",
      "Conexión cifrada"
    ],
    "answer": 2,
    "explanation": "Una conexión cifrada protege la confidencialidad de los datos transmitidos.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 38,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "medium",
    "text": "Traduce: 'The certificate has expired.'",
    "options": [
      "El certificado ha caducado.",
      "El certificado ha sido impreso.",
      "La certificación ha sido aprobada por el usuario."
    ],
    "answer": 0,
    "explanation": "'Expired' indica que ha pasado la fecha de validez del certificado.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 39,
    "section": "Inglés técnico",
    "topic": "Bases de datos",
    "difficulty": "medium",
    "text": "'Foreign key constraint' se traduce como:",
    "options": [
      "Clave extranjera cifrada",
      "Restricción de clave foránea",
      "Contraseña externa obligatoria"
    ],
    "answer": 1,
    "explanation": "Una clave foránea mantiene integridad referencial entre tablas.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 40,
    "section": "Inglés técnico",
    "topic": "Bases de datos",
    "difficulty": "medium",
    "text": "Traduce: 'The database transaction was rolled back.'",
    "options": [
      "La base de datos fue actualizada completamente.",
      "La tabla fue exportada a una copia de seguridad.",
      "La transacción de base de datos fue revertida."
    ],
    "answer": 2,
    "explanation": "'Rollback' deshace una transacción y devuelve los datos al estado anterior.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 41,
    "section": "Inglés técnico",
    "topic": "Virtualización",
    "difficulty": "medium",
    "text": "'Host machine' en virtualización significa:",
    "options": [
      "Máquina anfitriona",
      "Máquina invitada",
      "Equipo de usuario final"
    ],
    "answer": 0,
    "explanation": "El host es el sistema físico o base que ejecuta las máquinas virtuales.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 42,
    "section": "Inglés técnico",
    "topic": "Virtualización",
    "difficulty": "medium",
    "text": "Traduce: 'The guest operating system is isolated from the host.'",
    "options": [
      "El host está instalado dentro del sistema operativo invitado.",
      "El sistema operativo invitado está aislado del anfitrión.",
      "El usuario invitado administra todos los hosts físicos."
    ],
    "answer": 1,
    "explanation": "En virtualización, el 'guest OS' es el sistema operativo de la máquina virtual.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 43,
    "section": "Inglés técnico",
    "topic": "Contenedores",
    "difficulty": "medium",
    "text": "'Container image' se traduce como:",
    "options": [
      "Fotografía del servidor",
      "Contenedor de imágenes gráficas",
      "Imagen de contenedor"
    ],
    "answer": 2,
    "explanation": "Una imagen de contenedor es una plantilla para crear contenedores ejecutables.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 44,
    "section": "Inglés técnico",
    "topic": "Contenedores",
    "difficulty": "hard",
    "text": "Traduce: 'Containers share the host operating system kernel.'",
    "options": [
      "Los contenedores comparten el núcleo del sistema operativo anfitrión.",
      "Los contenedores copian siempre todo el hardware del anfitrión.",
      "Los contenedores sustituyen la BIOS del sistema invitado."
    ],
    "answer": 0,
    "explanation": "A diferencia de las VM, los contenedores comparten el kernel del sistema anfitrión.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 45,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "medium",
    "text": "'Subnet mask' se traduce como:",
    "options": [
      "Máscara de seguridad",
      "Máscara de subred",
      "Marca de subdominio"
    ],
    "answer": 1,
    "explanation": "La máscara de subred determina qué parte de una IP identifica red y host.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 46,
    "section": "Inglés técnico",
    "topic": "Redes",
    "difficulty": "hard",
    "text": "Traduce: 'The TTL value is decremented by each router.'",
    "options": [
      "El valor TLS se cifra en cada switch.",
      "El valor TTL se incrementa en cada servidor DNS.",
      "El valor TTL se decrementa en cada router."
    ],
    "answer": 2,
    "explanation": "TTL limita la vida de un paquete; cada salto de router reduce su valor.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 47,
    "section": "Inglés técnico",
    "topic": "Seguridad",
    "difficulty": "hard",
    "text": "'Man-in-the-middle attack' significa:",
    "options": [
      "Ataque de intermediario",
      "Ataque de hombre al servidor",
      "Ataque de mantenimiento central"
    ],
    "answer": 0,
    "explanation": "En un MITM, el atacante intercepta la comunicación entre dos partes.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 48,
    "section": "Inglés técnico",
    "topic": "Web",
    "difficulty": "medium",
    "text": "Traduce: 'The website redirects HTTP traffic to HTTPS.'",
    "options": [
      "El navegador elimina el tráfico HTTPS del sitio web.",
      "El sitio web redirige el tráfico HTTP a HTTPS.",
      "El servidor convierte HTTPS en correo SMTP."
    ],
    "answer": 1,
    "explanation": "Redirigir HTTP a HTTPS fuerza el uso de una conexión segura.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 49,
    "section": "Inglés técnico",
    "topic": "Soporte técnico",
    "difficulty": "medium",
    "text": "'Troubleshooting steps' se traduce mejor como:",
    "options": [
      "Escaleras de instalación",
      "Saltos de diagnóstico físico",
      "Pasos de resolución de problemas"
    ],
    "answer": 2,
    "explanation": "'Troubleshooting' es diagnóstico y resolución de incidencias.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  },
  {
    "id": 50,
    "section": "Inglés técnico",
    "topic": "Monitorización",
    "difficulty": "medium",
    "text": "Traduce: 'The monitoring tool raised an alert.'",
    "options": [
      "La herramienta de monitorización generó una alerta.",
      "La herramienta de monitorización elevó físicamente el servidor.",
      "La alerta apagó la herramienta de monitorización."
    ],
    "answer": 0,
    "explanation": "'Raise an alert' en monitorización significa generar o lanzar una alerta.",
    "reference": "AENA IIIJ05 - Prueba inglés técnico TIC"
  }
];