const questions = [
{
id: 1,
section: "Anexo A",
topic: "Hardware",
difficulty: "baja",
text: "¿Qué componente de la CPU realiza principalmente operaciones aritméticas y lógicas?",
options: [
"La ALU",
"La memoria caché",
"El bus de datos"
],
answer: 0,
explanation: "La ALU ejecuta operaciones aritméticas y lógicas dentro del procesador.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 2,
section: "Anexo A",
topic: "Hardware",
difficulty: "media",
text: "¿Qué característica diferencia principalmente a la memoria RAM de un SSD?",
options: [
"La RAM conserva los datos sin energía",
"La RAM se usa solo para copias de seguridad",
"La RAM es volátil y se usa como memoria principal de trabajo"
],
answer: 2,
explanation: "La RAM es memoria volátil utilizada por el sistema mientras está en ejecución.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 3,
section: "Anexo A",
topic: "Hardware",
difficulty: "media",
text: "¿Qué bus se utiliza habitualmente para conectar tarjetas gráficas modernas de alto rendimiento?",
options: [
"SATA",
"PCI Express",
"USB 2.0"
],
answer: 1,
explanation: "PCI Express es el bus habitual para tarjetas gráficas y otros dispositivos de alto rendimiento.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 4,
section: "Anexo A",
topic: "Hardware",
difficulty: "media",
text: "¿Qué función tiene la UEFI en un equipo moderno?",
options: [
"Inicializar el hardware y arrancar el sistema operativo",
"Gestionar exclusivamente los permisos de usuario",
"Comprimir archivos del sistema"
],
answer: 0,
explanation: "UEFI sustituye en gran medida a BIOS y participa en la inicialización y arranque del equipo.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 5,
section: "Anexo A",
topic: "Hardware",
difficulty: "alta",
text: "En mantenimiento preventivo, ¿qué acción es más adecuada para reducir problemas térmicos en un PC?",
options: [
"Desactivar el antivirus",
"Cambiar la resolución de pantalla",
"Limpiar ventiladores y revisar pasta térmica si procede"
],
answer: 2,
explanation: "La limpieza física y la correcta disipación reducen sobrecalentamientos y fallos asociados.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 6,
section: "Anexo A",
topic: "Hardware",
difficulty: "media",
text: "¿Qué dispositivo protege frente a cortes eléctricos breves y permite apagar el equipo de forma controlada?",
options: [
"Switch",
"SAI/UPS",
"Router"
],
answer: 1,
explanation: "Un SAI proporciona alimentación temporal ante fallos eléctricos.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 7,
section: "Anexo A",
topic: "Hardware",
difficulty: "baja",
text: "¿Cuál es una ventaja habitual de un SSD frente a un HDD?",
options: [
"Menor tiempo de acceso",
"Mayor ruido mecánico",
"Necesidad de desfragmentación constante"
],
answer: 0,
explanation: "Los SSD no tienen partes mecánicas y suelen ofrecer menor latencia y mayor velocidad.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 8,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "media",
text: "¿Qué es el kernel de un sistema operativo?",
options: [
"Una aplicación de ofimática",
"El núcleo que gestiona recursos básicos del sistema",
"Un tipo de navegador web"
],
answer: 1,
explanation: "El kernel gestiona CPU, memoria, dispositivos y llamadas del sistema.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 9,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "media",
text: "En Linux, ¿qué permiso representa el valor 7 en notación octal?",
options: [
"Solo lectura",
"Lectura y escritura",
"Lectura, escritura y ejecución"
],
answer: 2,
explanation: "El valor 7 equivale a 4+2+1: lectura, escritura y ejecución.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 10,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "baja",
text: "¿Qué comando de Linux se usa habitualmente para cambiar permisos de archivos?",
options: [
"chmod",
"ping",
"format"
],
answer: 0,
explanation: "chmod modifica permisos de archivos y directorios en sistemas Unix/Linux.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 11,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "media",
text: "¿Qué diferencia básica hay entre proceso e hilo?",
options: [
"Un hilo siempre tiene más memoria que un proceso",
"Un proceso tiene su propio espacio de memoria; los hilos suelen compartirlo",
"Un proceso solo existe en Linux"
],
answer: 1,
explanation: "Los hilos pertenecen a un proceso y comparten recursos del mismo.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 12,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "media",
text: "¿Qué elemento carga inicialmente el sistema operativo tras el firmware de arranque?",
options: [
"El navegador",
"La papelera",
"El gestor de arranque o bootloader"
],
answer: 2,
explanation: "El bootloader se encarga de localizar y cargar el sistema operativo.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 13,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "media",
text: "En Windows, ¿qué herramienta permite ver servicios, procesos y consumo de recursos de forma rápida?",
options: [
"Administrador de tareas",
"Bloc de notas",
"Paint"
],
answer: 0,
explanation: "El Administrador de tareas muestra procesos, rendimiento, servicios y aplicaciones.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 14,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "alta",
text: "¿Qué sistema de archivos es habitual en instalaciones modernas de Windows?",
options: [
"ext4",
"NTFS",
"HFS+"
],
answer: 1,
explanation: "NTFS es el sistema de archivos habitual en Windows moderno.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 15,
section: "Anexo A",
topic: "Sistemas operativos",
difficulty: "media",
text: "¿Qué función cumple un servicio del sistema operativo?",
options: [
"Sustituir físicamente a la memoria RAM",
"Eliminar la necesidad de usuarios",
"Ejecutar tareas en segundo plano necesarias para el sistema o aplicaciones"
],
answer: 2,
explanation: "Los servicios se ejecutan en segundo plano y proporcionan funciones del sistema o red.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 16,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "baja",
text: "¿Qué dispositivo trabaja principalmente en capa 2 del modelo OSI y reenvía tramas según direcciones MAC?",
options: [
"Switch",
"Router",
"Servidor DNS"
],
answer: 0,
explanation: "El switch Ethernet trabaja principalmente con direcciones MAC en capa de enlace.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 17,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué protocolo se utiliza para resolver una dirección MAC a partir de una dirección IPv4 en la LAN?",
options: [
"DNS",
"DHCP",
"ARP"
],
answer: 2,
explanation: "ARP relaciona direcciones IPv4 con direcciones MAC dentro de una red local.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 18,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué protocolo asigna automáticamente dirección IP, máscara, puerta de enlace y DNS a un cliente?",
options: [
"ICMP",
"DHCP",
"SMTP"
],
answer: 1,
explanation: "DHCP automatiza la configuración de red de los clientes.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 19,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué puerto TCP utiliza HTTPS por defecto?",
options: [
"443",
"80",
"53"
],
answer: 0,
explanation: "HTTPS utiliza normalmente el puerto TCP 443.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 20,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "alta",
text: "¿Qué campo IP se reduce en cada salto de router para evitar bucles indefinidos?",
options: [
"MTU",
"MAC",
"TTL"
],
answer: 2,
explanation: "TTL disminuye en cada salto y evita que los paquetes circulen indefinidamente.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 21,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué función cumple NAT en una red doméstica o corporativa?",
options: [
"Cifrar automáticamente todos los archivos",
"Traducir direcciones privadas a una o varias direcciones públicas",
"Eliminar la necesidad de DNS"
],
answer: 1,
explanation: "NAT permite que múltiples equipos privados compartan salida a redes públicas.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 22,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué capa OSI se encarga del direccionamiento lógico IP y encaminamiento?",
options: [
"Capa de red",
"Capa física",
"Capa de sesión"
],
answer: 0,
explanation: "La capa de red corresponde al direccionamiento lógico y routing.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 23,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué protocolo se usa habitualmente para comprobar conectividad mediante mensajes echo request y echo reply?",
options: [
"FTP",
"ICMP",
"LDAP"
],
answer: 1,
explanation: "ping utiliza ICMP para comprobar conectividad básica.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 24,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "alta",
text: "¿Qué representa la MTU en una red?",
options: [
"La dirección MAC del router",
"El tiempo de vida de un paquete",
"El tamaño máximo de unidad de transmisión sin fragmentar"
],
answer: 2,
explanation: "La MTU indica el tamaño máximo de trama o paquete que puede transmitirse sin fragmentación.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 25,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "baja",
text: "¿Qué puerto utiliza DNS habitualmente?",
options: [
"53",
"25",
"3389"
],
answer: 0,
explanation: "DNS usa el puerto 53, tanto UDP como TCP según el caso.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 26,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué protocolo de transporte ofrece conexión, control de flujo y retransmisión?",
options: [
"UDP",
"TCP",
"ARP"
],
answer: 1,
explanation: "TCP es orientado a conexión y proporciona mecanismos de fiabilidad.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 27,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué característica define mejor a UDP?",
options: [
"Garantiza siempre la entrega ordenada",
"Solo funciona con HTTPS",
"Es no orientado a conexión y tiene menor sobrecarga"
],
answer: 2,
explanation: "UDP no establece conexión previa y reduce sobrecarga, aunque no garantiza entrega.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 28,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "alta",
text: "¿Qué máscara corresponde a una red IPv4 /24?",
options: [
"255.255.255.0",
"255.255.0.0",
"255.255.255.252"
],
answer: 0,
explanation: "Un prefijo /24 equivale a la máscara 255.255.255.0.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 29,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué dispositivo interconecta redes diferentes y decide rutas según direcciones IP?",
options: [
"Hub",
"Router",
"Repetidor"
],
answer: 1,
explanation: "El router opera en capa de red y encamina tráfico entre redes.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 30,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "alta",
text: "¿Qué puerto se asocia por defecto con RDP en Windows?",
options: [
"110",
"389",
"3389"
],
answer: 2,
explanation: "Remote Desktop Protocol utiliza por defecto el puerto TCP 3389.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 31,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué permite una VLAN en una red local conmutada?",
options: [
"Separar lógicamente dominios de broadcast",
"Aumentar la memoria RAM del switch",
"Eliminar todos los routers"
],
answer: 0,
explanation: "Una VLAN segmenta lógicamente la red y separa dominios de broadcast.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 32,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Cuál es la PDU típica de la capa de transporte?",
options: [
"Trama",
"Segmento",
"Bit"
],
answer: 1,
explanation: "En capa de transporte se habla habitualmente de segmentos TCP o datagramas UDP.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 33,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "alta",
text: "¿Qué puerto utiliza LDAP sin cifrado por defecto?",
options: [
"636",
"445",
"389"
],
answer: 2,
explanation: "LDAP usa normalmente TCP/UDP 389; LDAPS usa 636.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 34,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué protocolo se utiliza para acceso seguro a una shell remota?",
options: [
"SSH",
"Telnet",
"SNMP"
],
answer: 0,
explanation: "SSH proporciona acceso remoto cifrado, habitualmente por el puerto 22.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 35,
section: "Anexo A",
topic: "Redes, TCP/IP y OSI",
difficulty: "media",
text: "¿Qué protocolo se asocia a la transferencia de páginas web sin cifrado?",
options: [
"HTTPS",
"HTTP",
"IMAP"
],
answer: 1,
explanation: "HTTP es el protocolo web sin cifrado, normalmente en el puerto 80.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 36,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "media",
text: "En seguridad, ¿qué es una vulnerabilidad?",
options: [
"Un mecanismo de backup",
"Un certificado digital",
"Una debilidad que puede ser explotada por una amenaza"
],
answer: 2,
explanation: "Una vulnerabilidad es una debilidad que aumenta la exposición al riesgo.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 37,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "baja",
text: "¿Qué tipo de malware cifra archivos y exige un rescate?",
options: [
"Ransomware",
"Spyware benigno",
"Firmware"
],
answer: 0,
explanation: "El ransomware cifra información y exige pago para recuperar el acceso.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 38,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "media",
text: "¿Qué diferencia básica hay entre cifrado simétrico y asimétrico?",
options: [
"El simétrico usa una misma clave; el asimétrico usa par de claves",
"El asimétrico no puede cifrar información",
"El simétrico solo se usa en discos duros"
],
answer: 0,
explanation: "El cifrado simétrico comparte clave; el asimétrico usa clave pública y privada.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 39,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "media",
text: "¿Qué aporta una función hash criptográfica?",
options: [
"Compresión con pérdida",
"Huella de longitud fija para verificar integridad",
"Asignación automática de IP"
],
answer: 1,
explanation: "Un hash permite comprobar integridad mediante una huella calculada sobre los datos.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 40,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "media",
text: "¿Qué dispositivo o sistema filtra tráfico según reglas de seguridad?",
options: [
"Scanner OCR",
"Monitor",
"Firewall"
],
answer: 2,
explanation: "Un firewall controla tráfico permitido o bloqueado según reglas.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 41,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "alta",
text: "¿Qué ataque intenta situarse entre dos comunicaciones para interceptar o modificar tráfico?",
options: [
"Man in the Middle",
"Backup diferencial",
"Normalización"
],
answer: 0,
explanation: "Un ataque MitM intercepta la comunicación entre dos partes.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 42,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "media",
text: "¿Qué función tiene una VPN de acceso remoto?",
options: [
"Convertir discos HDD en SSD",
"Crear un túnel seguro hacia una red",
"Eliminar el uso de usuarios y contraseñas"
],
answer: 1,
explanation: "Una VPN permite conexión segura a una red mediante un túnel cifrado.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 43,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "alta",
text: "¿Qué confirma principalmente una firma digital?",
options: [
"Que el archivo ocupa menos espacio",
"Que el equipo tiene más RAM",
"Autenticidad, integridad y no repudio"
],
answer: 2,
explanation: "La firma digital ayuda a verificar autoría, integridad y no repudio.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 44,
section: "Anexo A",
topic: "Seguridad informática",
difficulty: "media",
text: "¿Qué es un certificado digital en el contexto TLS?",
options: [
"Un elemento que vincula una identidad con una clave pública",
"Una copia incremental",
"Un tipo de memoria caché"
],
answer: 0,
explanation: "El certificado vincula identidad y clave pública, permitiendo confianza en TLS.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 45,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "media",
text: "¿Qué servicio de Active Directory almacena objetos como usuarios, grupos y equipos?",
options: [
"DHCP Relay",
"AD DS",
"POP3"
],
answer: 1,
explanation: "Active Directory Domain Services almacena y gestiona objetos del dominio.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 46,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "alta",
text: "¿Qué protocolo se usa habitualmente en Active Directory para autenticación de dominio?",
options: [
"SNMP",
"FTP",
"Kerberos"
],
answer: 2,
explanation: "Kerberos es el protocolo de autenticación habitual en dominios Active Directory.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 47,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "media",
text: "¿Para qué sirve una GPO en un dominio Windows?",
options: [
"Aplicar configuraciones y políticas a usuarios o equipos",
"Reparar físicamente un disco duro",
"Resolver nombres públicos en Internet únicamente"
],
answer: 0,
explanation: "Las GPO permiten aplicar políticas de configuración en entornos Active Directory.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 48,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "media",
text: "¿Qué es una OU en Active Directory?",
options: [
"Una copia de seguridad completa",
"Una unidad organizativa para agrupar objetos",
"Un puerto de red"
],
answer: 1,
explanation: "Una OU agrupa objetos y permite delegar administración o aplicar GPO.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 49,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "alta",
text: "Si un usuario tiene permiso NTFS de lectura pero permiso compartido de control total, ¿qué acceso efectivo tendrá por red?",
options: [
"Control total siempre",
"Ningún acceso",
"Lectura"
],
answer: 2,
explanation: "El permiso efectivo es el más restrictivo entre NTFS y recurso compartido.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 50,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "media",
text: "¿Qué protocolo se usa para enviar correo electrónico entre servidores o desde cliente a servidor de salida?",
options: [
"SMTP",
"IMAP",
"POP3"
],
answer: 0,
explanation: "SMTP se utiliza para el envío de correo electrónico.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 51,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "media",
text: "¿Qué protocolo permite consultar correo manteniéndolo normalmente en el servidor?",
options: [
"RDP",
"IMAP",
"ARP"
],
answer: 1,
explanation: "IMAP permite gestionar el correo en el servidor desde varios clientes.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 52,
section: "Anexo A",
topic: "Active Directory y servicios de red",
difficulty: "alta",
text: "¿Por qué DNS es crítico en un dominio Active Directory?",
options: [
"Porque sustituye a Kerberos",
"Porque cifra todos los ficheros",
"Porque permite localizar controladores de dominio y servicios"
],
answer: 2,
explanation: "Active Directory depende de DNS para localizar servicios y controladores de dominio.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 53,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "media",
text: "¿Qué es un hipervisor de tipo 1?",
options: [
"Un hipervisor que se ejecuta directamente sobre el hardware",
"Una aplicación que solo abre documentos",
"Un contenedor Docker"
],
answer: 0,
explanation: "El hipervisor tipo 1 corre directamente sobre el hardware físico.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 54,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "media",
text: "¿Qué diferencia esencial hay entre snapshot y backup?",
options: [
"Un snapshot siempre sustituye a una copia externa",
"El snapshot captura un estado puntual, pero no debe considerarse backup completo",
"Un backup solo funciona en memoria RAM"
],
answer: 1,
explanation: "Un snapshot ayuda a volver a un estado, pero no sustituye una estrategia de backup.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 55,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "alta",
text: "¿Qué backup copia los cambios desde la última copia completa?",
options: [
"Incremental",
"Completo diario",
"Diferencial"
],
answer: 2,
explanation: "El diferencial copia cambios desde la última copia completa.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 56,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "media",
text: "¿Qué backup copia solo los cambios desde la última copia, sea completa o incremental?",
options: [
"Incremental",
"RAID 0",
"Snapshot de memoria"
],
answer: 0,
explanation: "El incremental copia los cambios desde la última copia realizada.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 57,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "media",
text: "¿Qué significa RTO en continuidad de negocio?",
options: [
"Cantidad máxima de datos que se puede perder",
"Tiempo objetivo para restaurar un servicio",
"Tipo de RAID con paridad"
],
answer: 1,
explanation: "RTO es el tiempo máximo objetivo de recuperación del servicio.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 58,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "alta",
text: "¿Qué configuración RAID ofrece espejo entre discos?",
options: [
"RAID 0",
"RAID 5",
"RAID 1"
],
answer: 2,
explanation: "RAID 1 replica la información en espejo.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 59,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "media",
text: "¿Qué característica define mejor a un contenedor frente a una máquina virtual?",
options: [
"Comparte el kernel del sistema anfitrión",
"Siempre requiere más recursos que una VM",
"Incluye obligatoriamente un sistema operativo completo independiente"
],
answer: 0,
explanation: "Los contenedores comparten kernel y suelen ser más ligeros que las VM.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 60,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "media",
text: "¿Qué es una SAN?",
options: [
"Una herramienta de dibujo",
"Una red especializada de almacenamiento",
"Una contraseña local"
],
answer: 1,
explanation: "Una SAN es una red de almacenamiento de alto rendimiento.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 61,
section: "Anexo A",
topic: "Virtualización, backups y almacenamiento",
difficulty: "alta",
text: "¿Qué objetivo tiene una copia inmutable frente a ransomware?",
options: [
"Que pueda ser modificada por cualquier usuario",
"Que sustituya al firewall",
"Que no pueda alterarse o borrarse durante un periodo definido"
],
answer: 2,
explanation: "La inmutabilidad protege copias contra borrado o modificación maliciosa.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 62,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "baja",
text: "En una base de datos relacional, ¿qué identifica de forma única cada fila de una tabla?",
options: [
"Clave primaria",
"Disparador",
"Vista temporal"
],
answer: 0,
explanation: "La clave primaria identifica de forma única los registros de una tabla.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 63,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué es una clave foránea?",
options: [
"Una clave que nunca referencia otras tablas",
"Un atributo que referencia la clave de otra tabla",
"Una contraseña de administrador"
],
answer: 1,
explanation: "La clave foránea establece relaciones entre tablas.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 64,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué instrucción SQL pertenece a DDL?",
options: [
"SELECT",
"COMMIT",
"CREATE TABLE"
],
answer: 2,
explanation: "CREATE TABLE pertenece al lenguaje de definición de datos DDL.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 65,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué instrucción SQL pertenece a DML?",
options: [
"UPDATE",
"GRANT",
"ROLLBACK"
],
answer: 0,
explanation: "UPDATE modifica datos y pertenece a DML.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 66,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "alta",
text: "¿Qué grupo SQL incluye GRANT y REVOKE?",
options: [
"DQL",
"DCL",
"TCL"
],
answer: 1,
explanation: "DCL gestiona permisos mediante sentencias como GRANT y REVOKE.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 67,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué sentencia confirma definitivamente una transacción?",
options: [
"DELETE",
"DROP",
"COMMIT"
],
answer: 2,
explanation: "COMMIT confirma los cambios realizados dentro de una transacción.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 68,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué tipo de base de datos NoSQL usa documentos similares a JSON?",
options: [
"Documental",
"Relacional pura",
"Jerárquica de solo lectura"
],
answer: 0,
explanation: "Las bases documentales almacenan documentos, frecuentemente en formato similar a JSON.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 69,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "alta",
text: "¿Qué tipo de NoSQL representa mejor Redis en su uso habitual?",
options: [
"Columnar",
"Clave-valor",
"Grafo"
],
answer: 1,
explanation: "Redis se utiliza habitualmente como almacén clave-valor en memoria.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 70,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué busca principalmente la normalización en bases de datos relacionales?",
options: [
"Duplicar datos para acelerar siempre todas las consultas",
"Eliminar todas las claves primarias",
"Reducir redundancia y anomalías de actualización"
],
answer: 2,
explanation: "La normalización organiza datos para reducir redundancia e inconsistencias.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 71,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "media",
text: "¿Qué es un trigger o disparador?",
options: [
"Código que se ejecuta automáticamente ante ciertos eventos en la base de datos",
"Un cable de red",
"Un tipo de antivirus"
],
answer: 0,
explanation: "Un trigger se ejecuta automáticamente ante operaciones como INSERT, UPDATE o DELETE.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 72,
section: "Anexo A",
topic: "Bases de datos y SQL",
difficulty: "alta",
text: "En integridad referencial, ¿qué significa ON DELETE CASCADE?",
options: [
"Impide siempre borrar cualquier registro",
"Borra automáticamente registros hijos relacionados al borrar el padre",
"Convierte la tabla en NoSQL"
],
answer: 1,
explanation: "ON DELETE CASCADE elimina registros relacionados en tablas hijas al borrar el registro padre.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 73,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "baja",
text: "¿Qué estructura permite repetir instrucciones mientras se cumple una condición?",
options: [
"Variable constante",
"Comentario",
"Bucle"
],
answer: 2,
explanation: "Un bucle repite instrucciones según una condición o contador.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 74,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "media",
text: "¿Qué es la recursividad?",
options: [
"Una función que se llama a sí misma",
"Un protocolo de correo",
"Un tipo de monitor"
],
answer: 0,
explanation: "La recursividad ocurre cuando una función se invoca a sí misma con un caso base.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 75,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "media",
text: "¿Qué lenguaje se usa principalmente para estructurar contenido en páginas web?",
options: [
"SQL",
"HTML",
"SNMP"
],
answer: 1,
explanation: "HTML define la estructura del contenido de una página web.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 76,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "media",
text: "¿Qué tecnología se asocia principalmente a estilos visuales en web?",
options: [
"Kerberos",
"RAID",
"CSS"
],
answer: 2,
explanation: "CSS define presentación, colores, tamaños y distribución visual.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 77,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "media",
text: "¿Qué es una API?",
options: [
"Una interfaz para que aplicaciones se comuniquen",
"Una memoria secundaria magnética",
"Un tipo de cable coaxial"
],
answer: 0,
explanation: "Una API expone funciones o datos para que otros sistemas los utilicen.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 78,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "alta",
text: "¿Para qué se utiliza Git?",
options: [
"Para sustituir el sistema operativo",
"Para control de versiones del código",
"Para asignar direcciones IP"
],
answer: 1,
explanation: "Git permite gestionar versiones, ramas y cambios en proyectos de software.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 79,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "alta",
text: "¿Qué característica describe una arquitectura multicapa?",
options: [
"Todo el sistema se ejecuta en un único archivo plano",
"No permite separar responsabilidades",
"Separa presentación, lógica y datos en capas diferenciadas"
],
answer: 2,
explanation: "La arquitectura multicapa separa responsabilidades para facilitar mantenimiento y escalabilidad.",
reference: "Programa AENA IIIJ05 2026 - Anexo A"
},
{
id: 80,
section: "Anexo A",
topic: "Programación, desarrollo web y metodologías",
difficulty: "media",
text: "¿Qué objetivo tiene la accesibilidad web?",
options: [
"Facilitar el uso de servicios digitales a personas con distintas capacidades",
"Impedir el acceso desde móviles",
"Reducir la seguridad del sitio"
],
answer: 0,
explanation: "La accesibilidad busca que productos y servicios digitales sean utilizables por más personas.",
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
"Información sobre una persona física identificada o identificable",
"Cualquier dato de una empresa anónima"
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
"El encargado del tratamiento",
"El proveedor de Internet",
"El responsable del tratamiento"
],
answer: 2,
explanation: "El responsable determina para qué y cómo se tratan los datos.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 83,
section: "Anexo B",
topic: "Protección de datos",
difficulty: "baja",
text: "¿Qué derecho permite solicitar la eliminación de datos personales cuando proceda?",
options: [
"Derecho de supresión",
"Derecho de impresión",
"Derecho de compilación"
],
answer: 0,
explanation: "El derecho de supresión permite pedir la eliminación de datos en determinados supuestos.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 84,
section: "Anexo B",
topic: "Protección de datos",
difficulty: "alta",
text: "¿Qué principio exige recoger solo los datos adecuados, pertinentes y necesarios?",
options: [
"Conservación ilimitada",
"Minimización de datos",
"Publicidad universal"
],
answer: 1,
explanation: "La minimización exige tratar únicamente los datos necesarios para la finalidad.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 85,
section: "Anexo B",
topic: "Protección de datos",
difficulty: "media",
text: "¿Qué es una brecha de seguridad de datos personales?",
options: [
"Una mejora voluntaria de usabilidad",
"Un cambio de contraseña programado",
"Un incidente que afecta a la confidencialidad, integridad o disponibilidad de datos"
],
answer: 2,
explanation: "Una brecha puede suponer acceso, pérdida, alteración o divulgación no autorizada.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 86,
section: "Anexo B",
topic: "Protección de datos",
difficulty: "media",
text: "¿Qué derecho permite recibir los datos personales en formato estructurado y transmitirlos a otro responsable?",
options: [
"Portabilidad",
"Bloqueo físico",
"No repudio"
],
answer: 0,
explanation: "La portabilidad permite recibir y transmitir datos en formato estructurado cuando proceda.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 87,
section: "Anexo B",
topic: "Protección de datos",
difficulty: "media",
text: "¿Qué derecho digital reconoce la posibilidad de no atender comunicaciones laborales fuera del tiempo de trabajo en los términos previstos?",
options: [
"Derecho de cifrado universal",
"Derecho a la desconexión digital",
"Derecho al overclocking"
],
answer: 1,
explanation: "La desconexión digital protege el descanso y la intimidad fuera del tiempo laboral.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 88,
section: "Anexo B",
topic: "Protección de datos",
difficulty: "alta",
text: "¿Qué técnica reduce la vinculación directa entre datos y una persona, pero no equivale necesariamente a anonimización?",
options: [
"Desfragmentación",
"Formateo rápido",
"Seudonimización"
],
answer: 2,
explanation: "La seudonimización separa identificadores, pero puede permitir reidentificación con información adicional.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 89,
section: "Anexo B",
topic: "Igualdad efectiva",
difficulty: "media",
text: "¿Qué es discriminación directa por razón de sexo?",
options: [
"Trato menos favorable a una persona por razón de sexo en situación comparable",
"Una medida técnica de backup",
"Un permiso de lectura"
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
"Una mejora de red",
"Una disposición aparentemente neutra que causa desventaja particular",
"Una copia cifrada"
],
answer: 1,
explanation: "La discriminación indirecta puede surgir de criterios aparentemente neutros con impacto desigual.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 91,
section: "Anexo B",
topic: "Igualdad efectiva",
difficulty: "media",
text: "¿Qué persiguen las acciones positivas en materia de igualdad?",
options: [
"Eliminar todos los procedimientos administrativos",
"Impedir la contratación pública",
"Corregir situaciones de desigualdad de hecho"
],
answer: 2,
explanation: "Las acciones positivas buscan compensar desigualdades reales.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 92,
section: "Anexo B",
topic: "Igualdad efectiva",
difficulty: "baja",
text: "¿Qué busca la igualdad de oportunidades entre mujeres y hombres?",
options: [
"Garantizar ausencia de discriminación y acceso equilibrado a derechos y recursos",
"Sustituir todos los convenios colectivos",
"Eliminar la protección de datos"
],
answer: 0,
explanation: "La igualdad de oportunidades implica ausencia de discriminación y acceso real a derechos.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 93,
section: "Anexo B",
topic: "Igualdad efectiva",
difficulty: "media",
text: "¿Qué es el acoso sexual?",
options: [
"Una auditoría de seguridad",
"Comportamiento verbal, no verbal o físico de naturaleza sexual que atenta contra la dignidad",
"Un tipo de cifrado"
],
answer: 1,
explanation: "El acoso sexual afecta a la dignidad y crea un entorno intimidatorio u ofensivo.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 94,
section: "Anexo B",
topic: "Igualdad efectiva",
difficulty: "alta",
text: "¿Qué implica la transversalidad del principio de igualdad?",
options: [
"Aplicarlo solo en departamentos técnicos",
"Aplicarlo únicamente en contratos privados",
"Integrar la igualdad en todas las políticas y actuaciones públicas"
],
answer: 2,
explanation: "La transversalidad exige incorporar la igualdad de forma general en políticas y actuaciones.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 95,
section: "Anexo B",
topic: "Violencia de género",
difficulty: "media",
text: "La Ley Orgánica 1/2004 se centra en la violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados por relaciones similares de afectividad. ¿Qué incluye?",
options: [
"Violencia física y psicológica, incluidas amenazas y coacciones",
"Solo daños materiales a equipos informáticos",
"Únicamente delitos económicos entre empresas"
],
answer: 0,
explanation: "La ley contempla violencia física, psicológica, amenazas, coacciones y privación arbitraria de libertad.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 96,
section: "Anexo B",
topic: "Violencia de género",
difficulty: "media",
text: "¿Qué tipo de medidas contempla la LO 1/2004 además de la respuesta penal?",
options: [
"Solo medidas de configuración de red",
"Sensibilización, prevención, asistencia y protección",
"Únicamente normas de SQL"
],
answer: 1,
explanation: "La ley aborda prevención, sensibilización, asistencia y protección integral.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 97,
section: "Anexo B",
topic: "Violencia de género",
difficulty: "alta",
text: "¿Qué finalidad tiene la tutela institucional en violencia de género?",
options: [
"Coordinar y reforzar la actuación de los poderes públicos",
"Sustituir la protección de datos",
"Crear bases de datos NoSQL"
],
answer: 0,
explanation: "La tutela institucional busca una actuación pública coordinada y eficaz.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 98,
section: "Anexo B",
topic: "Violencia de género",
difficulty: "media",
text: "¿Qué se pretende con las campañas de sensibilización contra la violencia de género?",
options: [
"Aumentar el tráfico de red",
"Promover conciencia social, prevención y rechazo de la violencia",
"Reducir la velocidad de Internet"
],
answer: 1,
explanation: "La sensibilización busca prevención, detección y rechazo social de la violencia.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 99,
section: "Anexo B",
topic: "Violencia de género",
difficulty: "media",
text: "¿Qué debe evitar la publicidad según los principios de igualdad y protección frente a violencia de género?",
options: [
"El uso de cualquier color",
"El uso de certificados TLS",
"Contenidos discriminatorios o que refuercen estereotipos vejatorios"
],
answer: 2,
explanation: "La publicidad no debe fomentar discriminación ni estereotipos contrarios a la dignidad.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 100,
section: "Anexo B",
topic: "Igualdad efectiva",
difficulty: "alta",
text: "¿Qué significa presencia equilibrada en órganos o cargos cuando se aplica este criterio?",
options: [
"Participación razonablemente equilibrada de mujeres y hombres",
"Presencia exclusiva de personal técnico",
"Uso obligatorio de turnos rotatorios de red"
],
answer: 0,
explanation: "La presencia equilibrada busca una composición no desproporcionada entre mujeres y hombres.",
reference: "Programa AENA IIIJ05 2026 - Anexo B"
},
{
id: 101,
section: "Supuesto teórico-práctico",
topic: "Diagnóstico de red",
difficulty: "media",
text: "Un usuario tiene IP 169.254.12.8 y no accede a la red corporativa. ¿Cuál es la causa más probable?",
options: [
"El equipo ha recibido correctamente IP del DHCP",
"No ha obtenido concesión DHCP y usa dirección APIPA",
"El navegador tiene demasiadas pestañas abiertas"
],
answer: 1,
explanation: "Las direcciones 169.254.x.x indican autoconfiguración APIPA al fallar DHCP.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 102,
section: "Supuesto teórico-práctico",
topic: "Diagnóstico de red",
difficulty: "media",
text: "Un PC puede hacer ping a 8.8.8.8 pero no abre www.aena.es. ¿Qué revisarías primero?",
options: [
"La resolución DNS",
"La tarjeta gráfica",
"La cantidad de papel de la impresora"
],
answer: 0,
explanation: "Si hay conectividad por IP pero no por nombre, el problema apunta a DNS.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 103,
section: "Supuesto teórico-práctico",
topic: "Diagnóstico de red",
difficulty: "alta",
text: "Un equipo tiene IP correcta y DNS correcto, pero no llega a redes externas. Otros equipos sí navegan. ¿Qué parámetro local revisarías especialmente?",
options: [
"El color del cable",
"La puerta de enlace predeterminada",
"El nombre del monitor"
],
answer: 1,
explanation: "Sin gateway correcto, el equipo no puede salir de su red local.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 104,
section: "Supuesto teórico-práctico",
topic: "Active Directory",
difficulty: "media",
text: "Un usuario no puede iniciar sesión porque aparece cuenta bloqueada. ¿Dónde actuarías en un entorno de dominio Windows?",
options: [
"En Usuarios y equipos de Active Directory",
"En la configuración de brillo",
"En el driver de audio"
],
answer: 0,
explanation: "La cuenta de dominio se desbloquea desde herramientas de administración de Active Directory.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 105,
section: "Supuesto teórico-práctico",
topic: "Permisos",
difficulty: "alta",
text: "Un usuario accede a una carpeta compartida, pero no puede modificar archivos. Tiene permiso compartido de cambio, pero NTFS solo lectura. ¿Qué ocurre?",
options: [
"Debe prevalecer siempre el permiso compartido",
"El permiso efectivo queda limitado por NTFS",
"La VLAN está mal etiquetada"
],
answer: 1,
explanation: "El permiso efectivo por red es la combinación más restrictiva entre compartido y NTFS.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 106,
section: "Supuesto teórico-práctico",
topic: "GPO",
difficulty: "alta",
text: "Una GPO no se aplica a un usuario. El usuario está en una OU diferente de donde está vinculada la GPO. ¿Cuál es la explicación más probable?",
options: [
"La GPO solo se aplica al ámbito donde está vinculada, salvo herencia o enlaces adecuados",
"LDAP solo funciona con impresoras",
"El usuario necesita más memoria RAM"
],
answer: 0,
explanation: "Las GPO se aplican según ámbito, vínculo, herencia, filtrado y pertenencia.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 107,
section: "Supuesto teórico-práctico",
topic: "Correo electrónico",
difficulty: "media",
text: "Un usuario recibe correo, pero no puede enviarlo. ¿Qué servicio o configuración revisarías primero?",
options: [
"POP3",
"SMTP",
"ARP"
],
answer: 1,
explanation: "SMTP es el protocolo relacionado con el envío de correo.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 108,
section: "Supuesto teórico-práctico",
topic: "Redes VLAN",
difficulty: "alta",
text: "Tras mover un puesto a otra toma, recibe IP de una red distinta y no accede a sus recursos. ¿Qué revisarías?",
options: [
"La asignación de VLAN del puerto del switch",
"La marca del teclado",
"La resolución de pantalla"
],
answer: 0,
explanation: "Una VLAN incorrecta puede ubicar al equipo en otra red lógica.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 109,
section: "Supuesto teórico-práctico",
topic: "Firewall",
difficulty: "media",
text: "No se puede conectar por Escritorio Remoto a un servidor, pero responde a ping. ¿Qué revisarías de forma prioritaria?",
options: [
"El puerto TCP 3389 y reglas de firewall",
"El puerto UDP 53 únicamente",
"La normalización de la base de datos"
],
answer: 0,
explanation: "RDP usa TCP 3389 y puede estar bloqueado por firewall o deshabilitado.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 110,
section: "Supuesto teórico-práctico",
topic: "TLS",
difficulty: "media",
text: "Los usuarios ven aviso de certificado caducado al acceder a una aplicación HTTPS interna. ¿Cuál es la acción más adecuada?",
options: [
"Desinstalar TCP/IP",
"Renovar o sustituir el certificado del servicio",
"Borrar todas las GPO"
],
answer: 1,
explanation: "Un certificado caducado debe renovarse para restaurar confianza en TLS.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 111,
section: "Supuesto teórico-práctico",
topic: "Backups",
difficulty: "alta",
text: "Un técnico hizo solo snapshots de una VM durante meses y ahora el almacenamiento está corrupto. ¿Cuál era el error de estrategia?",
options: [
"Usar snapshots como sustituto de backups externos y verificables",
"Usar demasiados DNS",
"No cambiar el fondo de escritorio"
],
answer: 0,
explanation: "Los snapshots no sustituyen copias de seguridad independientes y restaurables.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 112,
section: "Supuesto teórico-práctico",
topic: "RAID",
difficulty: "media",
text: "Un RAID 1 indica disco degradado, pero el servicio sigue funcionando. ¿Qué significa?",
options: [
"No hay datos porque RAID 1 no replica",
"Un disco ha fallado y el espejo permite continuidad temporal",
"El firewall bloquea LDAP"
],
answer: 1,
explanation: "RAID 1 puede seguir funcionando con un disco, pero debe sustituirse el fallido.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 113,
section: "Supuesto teórico-práctico",
topic: "Contenedores",
difficulty: "media",
text: "Se quiere desplegar una aplicación ligera y portable con sus dependencias, compartiendo kernel del host. ¿Qué opción encaja mejor?",
options: [
"Máquina virtual completa obligatoria",
"RAID 5",
"Contenedor Docker"
],
answer: 2,
explanation: "Docker empaqueta aplicaciones y dependencias en contenedores ligeros.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 114,
section: "Supuesto teórico-práctico",
topic: "Seguridad",
difficulty: "alta",
text: "Tras un ransomware, se descubre que las copias estaban accesibles con las mismas credenciales comprometidas. ¿Qué medida habría reducido más el impacto?",
options: [
"Copias aisladas o inmutables con credenciales separadas",
"Aumentar el brillo de pantalla",
"Desactivar todos los logs"
],
answer: 0,
explanation: "Copias inmutables o aisladas reducen el riesgo de cifrado o borrado por ransomware.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 115,
section: "Supuesto teórico-práctico",
topic: "DHCP",
difficulty: "alta",
text: "Clientes de una VLAN remota no reciben IP del servidor DHCP central. En la VLAN local sí funciona. ¿Qué revisarías?",
options: [
"El DHCP Relay o helper-address en el router/switch capa 3",
"La fuente del monitor",
"El puerto HDMI"
],
answer: 0,
explanation: "Para DHCP entre subredes se necesita relay que reenvíe solicitudes al servidor.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 116,
section: "Supuesto teórico-práctico",
topic: "DNS y AD",
difficulty: "media",
text: "Un equipo unido al dominio tarda mucho en iniciar sesión y no localiza controladores de dominio. ¿Qué revisarías primero?",
options: [
"Que use como DNS el servidor adecuado del dominio",
"Que tenga instalado un editor de imágenes",
"Que el usuario tenga cable HDMI"
],
answer: 0,
explanation: "En Active Directory, DNS correcto es esencial para localizar controladores y servicios.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 117,
section: "Supuesto teórico-práctico",
topic: "OSI",
difficulty: "media",
text: "Un cable de red está desconectado. ¿En qué capa OSI se ubica inicialmente el problema?",
options: [
"Capa de aplicación",
"Capa física",
"Capa de presentación"
],
answer: 1,
explanation: "Un problema de cableado pertenece a la capa física.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 118,
section: "Supuesto teórico-práctico",
topic: "Monitorización",
difficulty: "media",
text: "Se detecta alta latencia intermitente hacia una sede remota. ¿Qué herramienta básica ayudaría a localizar saltos problemáticos?",
options: [
"tracert/traceroute",
"calc",
"paint"
],
answer: 0,
explanation: "tracert o traceroute muestra saltos y tiempos hacia un destino.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 119,
section: "Supuesto teórico-práctico",
topic: "Incidencias",
difficulty: "media",
text: "En gestión de incidencias, ¿qué debe registrarse como mínimo para facilitar resolución y trazabilidad?",
options: [
"Solo el color del escritorio",
"Descripción, usuario afectado, impacto, prioridad, acciones y solución",
"Únicamente el nombre del técnico"
],
answer: 1,
explanation: "Una incidencia debe documentarse para trazabilidad, análisis y resolución.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 120,
section: "Supuesto teórico-práctico",
topic: "Alta disponibilidad",
difficulty: "alta",
text: "Una aplicación crítica depende de un único servidor sin redundancia. ¿Cuál es el principal riesgo?",
options: [
"Mejor rendimiento garantizado",
"Mayor accesibilidad web",
"Punto único de fallo"
],
answer: 2,
explanation: "Sin redundancia, la caída del único servidor provoca interrupción del servicio.",
reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
},
{
id: 121,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "baja",
text: "Traduce: backup.",
options: [
"Copia de seguridad",
"Cortafuegos",
"Latencia"
],
answer: 0,
explanation: "Backup significa copia de seguridad.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 122,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: restore.",
options: [
"Desplegar",
"Restaurar",
"Bloquear"
],
answer: 1,
explanation: "Restore significa restaurar.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 123,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: vulnerability.",
options: [
"Rendimiento",
"Credencial",
"Vulnerabilidad"
],
answer: 2,
explanation: "Vulnerability significa vulnerabilidad.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 124,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "baja",
text: "Traduce: firewall.",
options: [
"Cortafuegos",
"Servidor de impresión",
"Disco externo"
],
answer: 0,
explanation: "Firewall significa cortafuegos.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 125,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: credentials.",
options: [
"Paquetes",
"Credenciales",
"Copias"
],
answer: 1,
explanation: "Credentials significa credenciales.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 126,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: encryption.",
options: [
"Compresión",
"Autorización",
"Cifrado"
],
answer: 2,
explanation: "Encryption significa cifrado.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 127,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: packet loss.",
options: [
"Pérdida de paquetes",
"Ganancia de señal",
"Cambio de contraseña"
],
answer: 0,
explanation: "Packet loss significa pérdida de paquetes.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 128,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: default gateway.",
options: [
"Máscara de subred",
"Puerta de enlace predeterminada",
"Tarjeta gráfica"
],
answer: 1,
explanation: "Default gateway es la puerta de enlace predeterminada.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 129,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "alta",
text: "Traduce: network interface card.",
options: [
"Cable de alimentación",
"Controlador de dominio",
"Tarjeta de interfaz de red"
],
answer: 2,
explanation: "Network interface card significa tarjeta de interfaz de red.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 130,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: high availability.",
options: [
"Alta disponibilidad",
"Baja latencia",
"Acceso denegado"
],
answer: 0,
explanation: "High availability significa alta disponibilidad.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 131,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "alta",
text: "Traduce: load balancer.",
options: [
"Balanceador de carga",
"Cargador de batería",
"Registro de eventos"
],
answer: 0,
explanation: "Load balancer significa balanceador de carga.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 132,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: rollback.",
options: [
"Avance de versión",
"Reversión",
"Bloqueo físico"
],
answer: 1,
explanation: "Rollback significa reversión o vuelta atrás.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 133,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "alta",
text: "Traduce: root cause.",
options: [
"Causa raíz",
"Cuenta bloqueada",
"Puerto raíz"
],
answer: 0,
explanation: "Root cause significa causa raíz.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 134,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: troubleshooting.",
options: [
"Cifrado de disco",
"Resolución de problemas",
"Cambio de idioma"
],
answer: 1,
explanation: "Troubleshooting significa diagnóstico o resolución de problemas.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 135,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "alta",
text: "Traduce: deprecated.",
options: [
"Actualizado",
"Obligatorio",
"Obsoleto o desaconsejado"
],
answer: 2,
explanation: "Deprecated indica que algo está obsoleto o no recomendado.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 136,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: account locked out.",
options: [
"Cuenta bloqueada",
"Cuenta eliminada",
"Cuenta duplicada"
],
answer: 0,
explanation: "Account locked out significa cuenta bloqueada.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 137,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: read-only access.",
options: [
"Acceso total",
"Acceso de solo lectura",
"Acceso remoto cifrado"
],
answer: 1,
explanation: "Read-only access significa acceso de solo lectura.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 138,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: shared folder.",
options: [
"Carpeta compartida",
"Archivo temporal",
"Contraseña caducada"
],
answer: 0,
explanation: "Shared folder significa carpeta compartida.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 139,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "alta",
text: "Traduce: authentication.",
options: [
"Autorización",
"Autenticación",
"Auditoría"
],
answer: 1,
explanation: "Authentication es autenticación; authorization es autorización.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 140,
section: "Inglés técnico",
topic: "Traducción técnica",
difficulty: "media",
text: "Traduce: outage.",
options: [
"Parche",
"Certificado",
"Interrupción del servicio"
],
answer: 2,
explanation: "Outage significa caída o interrupción del servicio.",
reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
},
{
id: 141,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Choose the correct sentence.",
options: [
"She work in an office.",
"She works in an office.",
"She working in an office.",
"She are work in an office."
],
answer: 1,
explanation: "With he/she/it in present simple, the verb takes -s.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 142,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: I usually ___ breakfast at 8.",
options: [
"have",
"has",
"having",
"am have"
],
answer: 0,
explanation: "Use present simple: I usually have breakfast.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 143,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: They ___ watching TV now.",
options: [
"is",
"am",
"are",
"be"
],
answer: 2,
explanation: "Present continuous with they uses are.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 144,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "A2",
text: "Which word means 'comprar'?",
options: [
"Sell",
"Buy",
"Bring",
"Break"
],
answer: 1,
explanation: "Buy means comprar.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 145,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: There ___ two computers on the desk.",
options: [
"is",
"are",
"am",
"be"
],
answer: 1,
explanation: "Use there are with plural nouns.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 146,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Choose the correct past simple form: Yesterday, we ___ to Madrid.",
options: [
"go",
"goes",
"went",
"going"
],
answer: 2,
explanation: "Went is the past simple of go.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 147,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "A2",
text: "Which word is opposite of 'early'?",
options: [
"Late",
"Fast",
"Clean",
"Short"
],
answer: 0,
explanation: "Late is the opposite of early.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 148,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: This is ___ apple.",
options: [
"a",
"an",
"the a",
"any"
],
answer: 1,
explanation: "Use an before a vowel sound.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 149,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Choose the correct question.",
options: [
"Where you live?",
"Where do you live?",
"Where does you live?",
"Where living you?"
],
answer: 1,
explanation: "Present simple questions use do with you.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 150,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: I have ___ money in my wallet.",
options: [
"many",
"any",
"some",
"few"
],
answer: 2,
explanation: "Some is used with uncountable nouns in affirmative sentences.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 151,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "A2",
text: "Email: 'The meeting starts at 10:00. Please arrive ten minutes early.' What time should you arrive?",
options: [
"09:50",
"10:00",
"10:10",
"11:00"
],
answer: 0,
explanation: "Ten minutes before 10:00 is 09:50.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 152,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: My sister ___ a new phone.",
options: [
"have",
"has",
"having",
"to have"
],
answer: 1,
explanation: "With my sister, use has.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 153,
section: "Inglés escrito general",
topic: "Prepositions",
difficulty: "A2",
text: "Complete: The keys are ___ the table.",
options: [
"in",
"at",
"on",
"to"
],
answer: 2,
explanation: "Objects resting on a surface are on the table.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 154,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "A2",
text: "Complete: We ___ from Spain.",
options: [
"are",
"is",
"am",
"be"
],
answer: 0,
explanation: "We uses are.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 155,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "A2",
text: "Which word means 'familia'?",
options: [
"Factory",
"Family",
"Friendly",
"Familiar"
],
answer: 1,
explanation: "Family means familia.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 156,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: I ___ this film before.",
options: [
"saw",
"have seen",
"am seeing",
"see"
],
answer: 1,
explanation: "Present perfect is used for life experience without a specific past time.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 157,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: If it rains tomorrow, we ___ at home.",
options: [
"stay",
"stayed",
"will stay",
"would stay"
],
answer: 2,
explanation: "First conditional: if + present, will + verb.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 158,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Choose the correct sentence.",
options: [
"She is taller than her brother.",
"She is more tall than her brother.",
"She is tallest than her brother.",
"She is as taller than her brother."
],
answer: 0,
explanation: "For short adjectives, use -er than.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 159,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: You ___ wear a helmet when riding a motorbike.",
options: [
"can",
"must",
"may",
"would"
],
answer: 1,
explanation: "Must expresses obligation.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 160,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "B1",
text: "Notice: 'The office will be closed on Friday due to maintenance.' What does it mean?",
options: [
"The office opens earlier on Friday",
"The office is closed on Friday",
"Maintenance is cancelled",
"The office is closed every day"
],
answer: 1,
explanation: "The notice says the office will not open on Friday.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 161,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: This report was ___ by the IT department.",
options: [
"write",
"wrote",
"written",
"writing"
],
answer: 2,
explanation: "Passive voice uses was/were + past participle.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 162,
section: "Inglés escrito general",
topic: "Connectors",
difficulty: "B1",
text: "Complete: I was tired, ___ I finished the task.",
options: [
"because",
"although",
"but",
"unless"
],
answer: 2,
explanation: "But introduces contrast between being tired and finishing.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 163,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: The person ___ called you is waiting outside.",
options: [
"who",
"which",
"where",
"when"
],
answer: 0,
explanation: "Who refers to people in relative clauses.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 164,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: I have lived here ___ 2020.",
options: [
"for",
"since",
"during",
"from"
],
answer: 1,
explanation: "Since is used with a starting point in time.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 165,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: There isn't ___ milk left.",
options: [
"many",
"some",
"any",
"few"
],
answer: 2,
explanation: "Any is commonly used in negative sentences.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 166,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "B1",
text: "Which word is closest in meaning to 'repair'?",
options: [
"Fix",
"Forget",
"Lose",
"Delay"
],
answer: 0,
explanation: "Repair means fix.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 167,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: I ___ to call you later.",
options: [
"going",
"am going",
"am go",
"will going"
],
answer: 1,
explanation: "Be going to expresses future intention.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 168,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "B1",
text: "Message: 'Please find attached the updated schedule.' What is attached?",
options: [
"A new password",
"A meeting room",
"The updated schedule",
"A broken laptop"
],
answer: 2,
explanation: "The message says the updated schedule is attached.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 169,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Choose the correct reported speech: He said, 'I am busy.'",
options: [
"He said that he was busy.",
"He said that he is busy yesterday.",
"He said he busy.",
"He said that I am busy."
],
answer: 0,
explanation: "Reported speech commonly backshifts am to was.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 170,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B1",
text: "Complete: This is the ___ option available.",
options: [
"better",
"best",
"more good",
"goodest"
],
answer: 1,
explanation: "Best is the superlative form of good.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 171,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: If I had more time, I ___ another course.",
options: [
"will take",
"take",
"would take",
"took"
],
answer: 2,
explanation: "Second conditional uses if + past simple, would + verb.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 172,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Choose the correct sentence.",
options: [
"Despite the rain, the event continued.",
"Despite of the rain, the event continued.",
"Despite it was rain, the event continued.",
"Despite to rain, the event continued."
],
answer: 0,
explanation: "Despite is followed by a noun, pronoun or -ing form, without of.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 173,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: The software ___ before it was released.",
options: [
"tested",
"has tested",
"was tested",
"testing"
],
answer: 2,
explanation: "Passive voice is needed: the software was tested.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 174,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "B2",
text: "Which word is closest in meaning to 'reliable'?",
options: [
"Dependable",
"Expensive",
"Temporary",
"Noisy"
],
answer: 0,
explanation: "Reliable means dependable or trustworthy.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 175,
section: "Inglés escrito general",
topic: "Connectors",
difficulty: "B2",
text: "Complete: The system was slow; ___, users could still log in.",
options: [
"therefore",
"however",
"because",
"unless"
],
answer: 1,
explanation: "However introduces contrast.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 176,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: By the time we arrived, the meeting ___ already started.",
options: [
"has",
"was",
"had",
"is"
],
answer: 2,
explanation: "Past perfect describes an earlier past action.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 177,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Choose the correct sentence.",
options: [
"I look forward to hearing from you.",
"I look forward to hear from you.",
"I look forward hear from you.",
"I am look forward to hearing from you."
],
answer: 0,
explanation: "Look forward to is followed by -ing.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 178,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "B2",
text: "Email: 'Due to unexpected demand, delivery may take up to five working days.' What is being communicated?",
options: [
"Delivery is cancelled permanently",
"Delivery may be delayed",
"Demand has disappeared",
"The order was never placed"
],
answer: 1,
explanation: "The email warns about a possible delivery delay.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 179,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: Neither the manager nor the employees ___ available.",
options: [
"is",
"are",
"be",
"was"
],
answer: 1,
explanation: "With neither/nor, the verb often agrees with the nearer plural noun employees.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 180,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: The issue ___ by the support team tomorrow.",
options: [
"will resolve",
"will be resolved",
"resolved",
"has resolving"
],
answer: 1,
explanation: "Future passive uses will be + past participle.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 181,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "B2",
text: "Which word is the opposite of 'increase'?",
options: [
"Improve",
"Expand",
"Decrease",
"Continue"
],
answer: 2,
explanation: "Decrease is the opposite of increase.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 182,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: I wish I ___ speak English more fluently.",
options: [
"can",
"could",
"will",
"may"
],
answer: 1,
explanation: "Wish for present ability commonly uses could.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 183,
section: "Inglés escrito general",
topic: "Use of English",
difficulty: "B2",
text: "Choose the best phrase: 'The technician is responsible ___ maintaining the servers.'",
options: [
"of",
"to",
"for",
"with"
],
answer: 2,
explanation: "The correct preposition is responsible for.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 184,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "B2",
text: "Notice: 'Access to this area is restricted to authorized personnel only.' Who can enter?",
options: [
"Everyone",
"Only authorized personnel",
"Visitors without permission",
"Children only"
],
answer: 1,
explanation: "Restricted access means only authorized people can enter.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 185,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "B2",
text: "Complete: Had I known about the problem, I ___ you earlier.",
options: [
"will call",
"called",
"would have called",
"would call"
],
answer: 2,
explanation: "This is an inverted third conditional structure.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 186,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "C1",
text: "Choose the most natural sentence.",
options: [
"Not only did he fix the issue, but he also documented the solution.",
"Not only he fixed the issue, but also documented the solution.",
"Not only did he fixed the issue, but he also documented the solution.",
"Not only he did fix the issue, but he documented also the solution."
],
answer: 0,
explanation: "After negative inversion with not only, use auxiliary before subject.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 187,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "C1",
text: "Which word best completes the sentence: 'The outage had a ___ impact on operations.'",
options: [
"substantial",
"substantially",
"substance",
"substantiate"
],
answer: 0,
explanation: "An adjective is needed before impact: substantial.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 188,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "C1",
text: "Complete: The proposal, ___ ambitious, is realistic.",
options: [
"although",
"despite",
"whereas",
"because"
],
answer: 0,
explanation: "Although can introduce an elliptical contrast clause.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 189,
section: "Inglés escrito general",
topic: "Use of English",
difficulty: "C1",
text: "Choose the best option: 'The manager insisted ___ reviewing the report personally.'",
options: [
"to",
"on",
"for",
"at"
],
answer: 1,
explanation: "The correct structure is insist on doing something.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 190,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "C1",
text: "Text: 'Although the migration was completed on schedule, several minor issues were identified during post-deployment checks.' What is true?",
options: [
"The migration was delayed.",
"No checks were performed.",
"The migration finished on time, but some minor issues appeared.",
"The deployment was cancelled."
],
answer: 2,
explanation: "The text says it was on schedule but minor issues were found.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 191,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "C1",
text: "Complete: Rarely ___ such a clear explanation.",
options: [
"I have heard",
"have I heard",
"I heard",
"did I heard"
],
answer: 1,
explanation: "Rarely at the beginning triggers inversion: have I heard.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 192,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "C1",
text: "Which phrase means 'to reduce the negative effect of something'?",
options: [
"To bring about",
"To rule out",
"To mitigate",
"To put off"
],
answer: 2,
explanation: "To mitigate means to reduce severity or negative impact.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 193,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "C1",
text: "Complete: The data ___ to be inaccurate after the audit.",
options: [
"turned out",
"turned up",
"turned in",
"turned over"
],
answer: 0,
explanation: "Turn out means prove to be.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 194,
section: "Inglés escrito general",
topic: "Use of English",
difficulty: "C1",
text: "Choose the best sentence.",
options: [
"The sooner we detect the fault, the easier it is to fix.",
"Sooner we detect the fault, easier it is to fix.",
"The soon we detect the fault, the easy it is to fix.",
"Sooner the fault detect, easier fix."
],
answer: 0,
explanation: "The comparative structure is the sooner..., the easier...",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 195,
section: "Inglés escrito general",
topic: "Grammar",
difficulty: "C1",
text: "Complete: No sooner had the update been installed ___ users reported errors.",
options: [
"when",
"than",
"that",
"as"
],
answer: 1,
explanation: "The correct correlative structure is no sooner... than.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 196,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "C2",
text: "Which word best fits: 'The instructions were so ___ that several users misunderstood them.'",
options: [
"unambiguous",
"ambiguous",
"transparent",
"obvious"
],
answer: 1,
explanation: "Ambiguous means open to more than one interpretation.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 197,
section: "Inglés escrito general",
topic: "Use of English",
difficulty: "C2",
text: "Choose the most precise sentence.",
options: [
"The issue was resolved, notwithstanding the lack of complete documentation.",
"The issue resolved notwithstanding lack complete documentation.",
"The issue was resolve notwithstanding the lack of complete documentation.",
"The issue was resolved notwithstanding to lack documentation."
],
answer: 0,
explanation: "Notwithstanding means despite and is followed correctly here by a noun phrase.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 198,
section: "Inglés escrito general",
topic: "Reading",
difficulty: "C2",
text: "Text: 'The workaround is viable in the short term, but it should not be mistaken for a sustainable solution.' What does it imply?",
options: [
"The workaround is a permanent solution.",
"The workaround cannot be used at all.",
"The workaround may help temporarily but is not ideal long term.",
"The solution has already failed."
],
answer: 2,
explanation: "The text distinguishes a temporary workaround from a sustainable solution.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 199,
section: "Inglés escrito general",
topic: "Vocabulary",
difficulty: "C2",
text: "Which word is closest in meaning to 'meticulous'?",
options: [
"Careless",
"Thorough",
"Temporary",
"Unclear"
],
answer: 1,
explanation: "Meticulous means very careful and thorough.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
},
{
id: 200,
section: "Inglés escrito general",
topic: "Use of English",
difficulty: "C2",
text: "Complete: The report is concise, accurate and, above all, ___.",
options: [
"actionable",
"action",
"acted",
"acting"
],
answer: 0,
explanation: "Actionable means useful for taking practical action.",
reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
}
];