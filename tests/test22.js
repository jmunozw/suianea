const questions = [
  {
    id: 1,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Conceptos generales",
    difficulty: "media",
    text: "¿Qué es Active Directory Domain Services en un entorno Windows Server?",
    options: [
      "Un servicio de directorio para gestionar usuarios, equipos, grupos y recursos de red",
      "Un sistema de copia de seguridad exclusivo de Windows Server",
      "Un protocolo de cifrado para conexiones remotas"
    ],
    answer: 0,
    explanation: "Active Directory Domain Services centraliza la autenticación, autorización y gestión de objetos dentro de un dominio Windows.",
    reference: "Administración de sistemas - Active Directory"
  },
  {
    id: 2,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Controlador de dominio",
    difficulty: "media",
    text: "¿Qué función principal realiza un controlador de dominio en Active Directory?",
    options: [
      "Asignar direcciones IP dinámicas a los clientes",
      "Autenticar usuarios y equipos dentro del dominio",
      "Filtrar tráfico HTTP hacia Internet"
    ],
    answer: 1,
    explanation: "El controlador de dominio valida credenciales, aplica directivas y mantiene una copia de la base de datos de Active Directory.",
    reference: "Active Directory - Domain Controller"
  },
  {
    id: 3,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Dominio",
    difficulty: "media",
    text: "En Active Directory, ¿qué representa un dominio?",
    options: [
      "Una unidad lógica de administración que agrupa objetos y comparte una base de datos común",
      "Un dispositivo físico de interconexión de red",
      "Una copia local del registro de Windows"
    ],
    answer: 0,
    explanation: "Un dominio agrupa usuarios, equipos, grupos y otros objetos bajo una misma administración y políticas de seguridad.",
    reference: "Active Directory - Dominios"
  },
  {
    id: 4,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Bosque",
    difficulty: "media",
    text: "¿Cuál es la estructura de nivel superior en Active Directory?",
    options: [
      "Unidad organizativa",
      "Grupo global",
      "Bosque"
    ],
    answer: 2,
    explanation: "El bosque es la estructura superior de Active Directory y puede contener uno o varios árboles y dominios.",
    reference: "Active Directory - Forest"
  },
  {
    id: 5,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Árbol de dominios",
    difficulty: "media",
    text: "¿Qué caracteriza a un árbol de dominios en Active Directory?",
    options: [
      "Que todos sus dominios usan sistemas operativos Linux",
      "Que los dominios comparten un espacio de nombres DNS contiguo",
      "Que no puede contener relaciones de confianza"
    ],
    answer: 1,
    explanation: "Un árbol está formado por dominios que comparten un espacio de nombres DNS jerárquico y contiguo.",
    reference: "Active Directory - Trees"
  },
  {
    id: 6,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Unidades organizativas",
    difficulty: "fácil",
    text: "¿Para qué se utiliza principalmente una unidad organizativa en Active Directory?",
    options: [
      "Para organizar objetos, delegar administración y aplicar directivas de grupo",
      "Para cifrar automáticamente todos los discos duros",
      "Para sustituir al servidor DNS"
    ],
    answer: 0,
    explanation: "Las OU permiten estructurar objetos del dominio, delegar permisos administrativos y vincular GPO.",
    reference: "Active Directory - OU"
  },
  {
    id: 7,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "GPO",
    difficulty: "media",
    text: "¿Qué es una GPO en Active Directory?",
    options: [
      "Un tipo de dirección IP reservada",
      "Un objeto de directiva de grupo que permite aplicar configuraciones a usuarios y equipos",
      "Una partición física del disco del servidor"
    ],
    answer: 1,
    explanation: "Las Group Policy Objects permiten aplicar configuraciones de seguridad, escritorio, software y sistema a usuarios y equipos.",
    reference: "Active Directory - Group Policy"
  },
  {
    id: 8,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Aplicación de GPO",
    difficulty: "media",
    text: "¿Cuál es el orden general de aplicación de las directivas de grupo?",
    options: [
      "Dominio, sitio, local, unidad organizativa",
      "Local, sitio, dominio, unidad organizativa",
      "Unidad organizativa, dominio, sitio, local"
    ],
    answer: 1,
    explanation: "El orden LSDOU es Local, Site, Domain y Organizational Unit. La última directiva aplicada suele tener prioridad.",
    reference: "Group Policy - LSDOU"
  },
  {
    id: 9,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "GPO",
    difficulty: "alta",
    text: "¿Qué efecto tiene marcar una GPO como 'Enforced' o 'Forzada'?",
    options: [
      "Impide que configuraciones conflictivas de niveles inferiores la sobrescriban",
      "Elimina automáticamente la GPO al reiniciar",
      "Convierte una directiva de usuario en directiva de equipo"
    ],
    answer: 0,
    explanation: "Una GPO forzada tiene prioridad sobre configuraciones conflictivas aplicadas en niveles inferiores.",
    reference: "Group Policy - Enforced"
  },
  {
    id: 10,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "GPO",
    difficulty: "alta",
    text: "¿Qué permite la opción 'Block Inheritance' en una unidad organizativa?",
    options: [
      "Bloquear la herencia de GPO procedentes de niveles superiores",
      "Bloquear el inicio de sesión de todos los usuarios del dominio",
      "Eliminar la replicación entre controladores de dominio"
    ],
    answer: 0,
    explanation: "Block Inheritance impide que una OU herede GPO de niveles superiores, salvo que estén forzadas.",
    reference: "Group Policy - Block Inheritance"
  },
  {
    id: 11,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "DNS y AD",
    difficulty: "media",
    text: "¿Qué servicio es imprescindible para localizar controladores de dominio en Active Directory?",
    options: [
      "DNS",
      "FTP",
      "SNMP"
    ],
    answer: 0,
    explanation: "Active Directory depende de DNS para localizar controladores de dominio mediante registros SRV.",
    reference: "Active Directory - DNS"
  },
  {
    id: 12,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "DNS y AD",
    difficulty: "alta",
    text: "¿Qué tipo de registros DNS usa Active Directory para publicar servicios como LDAP o Kerberos?",
    options: [
      "TXT",
      "SRV",
      "MX"
    ],
    answer: 1,
    explanation: "Los registros SRV permiten localizar servicios concretos, como LDAP, Kerberos o controladores de dominio.",
    reference: "DNS - SRV Records"
  },
  {
    id: 13,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "LDAP",
    difficulty: "media",
    text: "¿Qué protocolo se utiliza habitualmente para consultar y modificar información del directorio en Active Directory?",
    options: [
      "LDAP",
      "ICMP",
      "SMTP"
    ],
    answer: 0,
    explanation: "LDAP es el protocolo usado para acceder y consultar servicios de directorio como Active Directory.",
    reference: "LDAP"
  },
  {
    id: 14,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Cuál es el puerto habitual de LDAP sin cifrar?",
    options: [
      "389",
      "443",
      "3389"
    ],
    answer: 0,
    explanation: "LDAP utiliza normalmente el puerto TCP/UDP 389.",
    reference: "LDAP - Puerto 389"
  },
  {
    id: 15,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Cuál es el puerto habitual de LDAPS?",
    options: [
      "25",
      "636",
      "445"
    ],
    answer: 1,
    explanation: "LDAPS utiliza el puerto TCP 636 para LDAP sobre TLS/SSL.",
    reference: "LDAPS - Puerto 636"
  },
  {
    id: 16,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Kerberos",
    difficulty: "media",
    text: "¿Qué protocolo de autenticación usa Active Directory por defecto en dominios modernos?",
    options: [
      "Kerberos",
      "POP3",
      "FTP"
    ],
    answer: 0,
    explanation: "Kerberos es el protocolo principal de autenticación en dominios Active Directory modernos.",
    reference: "Kerberos"
  },
  {
    id: 17,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Puertos",
    difficulty: "media",
    text: "¿Qué puerto utiliza Kerberos habitualmente?",
    options: [
      "88",
      "110",
      "143"
    ],
    answer: 0,
    explanation: "Kerberos utiliza normalmente el puerto 88.",
    reference: "Kerberos - Puerto 88"
  },
  {
    id: 18,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "NTLM",
    difficulty: "media",
    text: "¿Qué afirmación sobre NTLM es correcta?",
    options: [
      "Es un protocolo antiguo de autenticación usado como alternativa o compatibilidad frente a Kerberos",
      "Es un protocolo exclusivo para enviar correo electrónico",
      "Es el sistema de archivos nativo de Active Directory"
    ],
    answer: 0,
    explanation: "NTLM es un mecanismo de autenticación anterior a Kerberos que puede seguir usándose por compatibilidad.",
    reference: "Active Directory - NTLM"
  },
  {
    id: 19,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Usuarios",
    difficulty: "fácil",
    text: "¿Qué representa una cuenta de usuario en Active Directory?",
    options: [
      "Una identidad que permite autenticarse y recibir permisos sobre recursos",
      "Una dirección MAC del adaptador de red",
      "Un registro DNS de tipo MX"
    ],
    answer: 0,
    explanation: "La cuenta de usuario identifica a una persona o servicio y permite aplicar permisos, grupos y políticas.",
    reference: "Active Directory - Usuarios"
  },
  {
    id: 20,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Equipos",
    difficulty: "media",
    text: "¿Qué ocurre cuando un equipo se une a un dominio Active Directory?",
    options: [
      "El equipo pasa a tener una cuenta en el dominio y puede autenticarse contra controladores de dominio",
      "El equipo pierde su dirección IP",
      "El equipo deja de poder usar DNS"
    ],
    answer: 0,
    explanation: "Al unir un equipo al dominio se crea una cuenta de equipo y se establece una relación de confianza con el dominio.",
    reference: "Active Directory - Computer Accounts"
  },
  {
    id: 21,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Grupos",
    difficulty: "media",
    text: "¿Qué diferencia básica existe entre un grupo de seguridad y un grupo de distribución?",
    options: [
      "El grupo de seguridad puede usarse para asignar permisos; el de distribución se usa principalmente para correo",
      "El grupo de distribución permite iniciar sesión en servidores; el de seguridad no",
      "No existe ninguna diferencia funcional"
    ],
    answer: 0,
    explanation: "Los grupos de seguridad pueden recibir permisos sobre recursos. Los de distribución se usan para listas de correo.",
    reference: "Active Directory - Tipos de grupos"
  },
  {
    id: 22,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Ámbito de grupos",
    difficulty: "alta",
    text: "¿Qué ámbito de grupo se utiliza habitualmente para agrupar usuarios con características similares dentro del mismo dominio?",
    options: [
      "Global",
      "Local de equipo",
      "DNS"
    ],
    answer: 0,
    explanation: "Los grupos globales suelen agrupar usuarios del mismo dominio según función, departamento o perfil.",
    reference: "Active Directory - Global Groups"
  },
  {
    id: 23,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Ámbito de grupos",
    difficulty: "alta",
    text: "¿Qué tipo de grupo se usa normalmente para asignar permisos sobre recursos dentro de un dominio?",
    options: [
      "Grupo de dominio local",
      "Grupo de arranque",
      "Grupo de resolución DNS"
    ],
    answer: 0,
    explanation: "Los grupos de dominio local se suelen usar para conceder permisos sobre recursos del dominio.",
    reference: "Active Directory - Domain Local Groups"
  },
  {
    id: 24,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Modelo AGDLP",
    difficulty: "alta",
    text: "¿Qué resume correctamente el modelo AGDLP?",
    options: [
      "Accounts → Global Groups → Domain Local Groups → Permissions",
      "Applications → Gateway → DHCP → LDAP → Proxy",
      "Accounts → GPO → DNS → Localhost → Permissions"
    ],
    answer: 0,
    explanation: "AGDLP recomienda meter cuentas en grupos globales, estos en grupos de dominio local y asignar permisos a estos últimos.",
    reference: "Active Directory - AGDLP"
  },
  {
    id: 25,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Permisos",
    difficulty: "media",
    text: "¿Cuál es una buena práctica para asignar permisos en Active Directory?",
    options: [
      "Asignar permisos directamente a cada usuario individual",
      "Asignar permisos a grupos y añadir usuarios a esos grupos",
      "Eliminar todos los grupos por defecto del dominio"
    ],
    answer: 1,
    explanation: "Es más escalable y seguro asignar permisos a grupos, no directamente a usuarios individuales.",
    reference: "Active Directory - Gestión de permisos"
  },
  {
    id: 26,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Delegación",
    difficulty: "media",
    text: "¿Qué permite la delegación de control en una unidad organizativa?",
    options: [
      "Permitir que ciertos usuarios administren tareas concretas sobre esa OU sin ser administradores del dominio",
      "Convertir automáticamente una OU en bosque",
      "Eliminar la necesidad de DNS en Active Directory"
    ],
    answer: 0,
    explanation: "La delegación permite conceder permisos administrativos limitados sobre objetos concretos de una OU.",
    reference: "Active Directory - Delegation"
  },
  {
    id: 27,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "FSMO",
    difficulty: "alta",
    text: "¿Qué son los roles FSMO en Active Directory?",
    options: [
      "Roles especiales que solo pueden estar activos en determinados controladores de dominio",
      "Tipos de impresoras compartidas",
      "Protocolos de correo electrónico"
    ],
    answer: 0,
    explanation: "Los roles FSMO son funciones maestras únicas o específicas que evitan conflictos en operaciones críticas del directorio.",
    reference: "Active Directory - FSMO"
  },
  {
    id: 28,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "FSMO",
    difficulty: "alta",
    text: "¿Qué rol FSMO controla los cambios en el esquema de Active Directory?",
    options: [
      "Schema Master",
      "RID Master",
      "PDC Emulator"
    ],
    answer: 0,
    explanation: "El Schema Master controla las modificaciones del esquema de Active Directory.",
    reference: "FSMO - Schema Master"
  },
  {
    id: 29,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "FSMO",
    difficulty: "alta",
    text: "¿Qué rol FSMO se encarga de asignar bloques RID a los controladores de dominio?",
    options: [
      "Infrastructure Master",
      "RID Master",
      "Domain Naming Master"
    ],
    answer: 1,
    explanation: "El RID Master asigna bloques de identificadores relativos a los controladores de dominio para crear SID únicos.",
    reference: "FSMO - RID Master"
  },
  {
    id: 30,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "FSMO",
    difficulty: "alta",
    text: "¿Qué rol FSMO está relacionado con la creación y eliminación de dominios dentro del bosque?",
    options: [
      "Domain Naming Master",
      "PDC Emulator",
      "Infrastructure Master"
    ],
    answer: 0,
    explanation: "El Domain Naming Master controla la adición y eliminación de dominios en el bosque.",
    reference: "FSMO - Domain Naming Master"
  },
  {
    id: 31,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "FSMO",
    difficulty: "alta",
    text: "¿Qué rol FSMO suele actuar como referencia principal para cambios de contraseña y compatibilidad con sistemas antiguos?",
    options: [
      "Schema Master",
      "PDC Emulator",
      "Domain Naming Master"
    ],
    answer: 1,
    explanation: "El PDC Emulator participa en cambios de contraseña, sincronización horaria y compatibilidad con clientes antiguos.",
    reference: "FSMO - PDC Emulator"
  },
  {
    id: 32,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Catálogo global",
    difficulty: "media",
    text: "¿Qué es el Catálogo Global en Active Directory?",
    options: [
      "Un servidor que contiene una copia parcial de objetos del bosque para facilitar búsquedas y autenticación",
      "Un registro de eventos exclusivo de DHCP",
      "Una copia comprimida de los discos duros del dominio"
    ],
    answer: 0,
    explanation: "El Global Catalog permite búsquedas en todo el bosque y ayuda en procesos de inicio de sesión.",
    reference: "Active Directory - Global Catalog"
  },
  {
    id: 33,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Replicación",
    difficulty: "media",
    text: "¿Qué objetivo tiene la replicación entre controladores de dominio?",
    options: [
      "Mantener sincronizada la información de Active Directory entre controladores de dominio",
      "Reducir el tamaño de las direcciones IP",
      "Convertir LDAP en HTTP"
    ],
    answer: 0,
    explanation: "La replicación asegura que los cambios realizados en un controlador de dominio lleguen al resto.",
    reference: "Active Directory - Replication"
  },
  {
    id: 34,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Sitios",
    difficulty: "media",
    text: "¿Qué representan los sitios en Active Directory?",
    options: [
      "La estructura física de red basada en subredes y conectividad",
      "Una lista de páginas web permitidas",
      "Un conjunto de cuentas bloqueadas"
    ],
    answer: 0,
    explanation: "Los sitios representan la topología física de red y ayudan a optimizar autenticación y replicación.",
    reference: "Active Directory - Sites"
  },
  {
    id: 35,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Sitios y subredes",
    difficulty: "alta",
    text: "¿Para qué se asocian subredes IP a sitios en Active Directory?",
    options: [
      "Para que los clientes localicen controladores de dominio cercanos según su ubicación de red",
      "Para impedir el uso de direcciones IPv6",
      "Para sustituir las zonas DNS"
    ],
    answer: 0,
    explanation: "Asociar subredes a sitios permite que los equipos usen controladores de dominio próximos y mejora la eficiencia.",
    reference: "Active Directory - Sites and Subnets"
  },
  {
    id: 36,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "SYSVOL",
    difficulty: "media",
    text: "¿Qué contiene habitualmente la carpeta SYSVOL en un controlador de dominio?",
    options: [
      "Archivos de directivas de grupo y scripts de inicio de sesión replicados entre controladores",
      "Copias de seguridad completas de todos los equipos cliente",
      "La tabla ARP del servidor"
    ],
    answer: 0,
    explanation: "SYSVOL almacena elementos como scripts y plantillas de GPO que deben estar disponibles en los controladores de dominio.",
    reference: "Active Directory - SYSVOL"
  },
  {
    id: 37,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "NETLOGON",
    difficulty: "media",
    text: "¿Para qué se utiliza habitualmente el recurso compartido NETLOGON?",
    options: [
      "Para scripts de inicio de sesión y archivos necesarios durante la autenticación de dominio",
      "Para almacenar exclusivamente bases de datos SQL",
      "Para servir páginas web públicas"
    ],
    answer: 0,
    explanation: "NETLOGON es un recurso compartido usado durante procesos de inicio de sesión en dominio.",
    reference: "Active Directory - NETLOGON"
  },
  {
    id: 38,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Directivas de contraseña",
    difficulty: "media",
    text: "¿Dónde se define normalmente la política de contraseñas del dominio?",
    options: [
      "En una GPO vinculada al dominio, normalmente la Default Domain Policy",
      "En cada monitor del usuario",
      "En el registro MX del DNS"
    ],
    answer: 0,
    explanation: "Las políticas de contraseña de dominio suelen definirse a nivel de dominio mediante GPO.",
    reference: "Group Policy - Password Policy"
  },
  {
    id: 39,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Bloqueo de cuentas",
    difficulty: "media",
    text: "¿Qué permite una política de bloqueo de cuentas?",
    options: [
      "Bloquear temporalmente una cuenta tras varios intentos fallidos de inicio de sesión",
      "Eliminar automáticamente los controladores de dominio inactivos",
      "Cambiar el puerto LDAP por ICMP"
    ],
    answer: 0,
    explanation: "Las políticas de bloqueo reducen ataques de fuerza bruta al bloquear cuentas tras intentos fallidos.",
    reference: "Active Directory - Account Lockout Policy"
  },
  {
    id: 40,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Herramientas",
    difficulty: "fácil",
    text: "¿Qué herramienta gráfica se usa habitualmente para gestionar usuarios, grupos y equipos en Active Directory?",
    options: [
      "Active Directory Users and Computers",
      "Administrador de tareas",
      "Visor XPS"
    ],
    answer: 0,
    explanation: "Active Directory Users and Computers permite administrar usuarios, grupos, equipos y unidades organizativas.",
    reference: "RSAT - ADUC"
  },
  {
    id: 41,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Herramientas",
    difficulty: "media",
    text: "¿Qué comando permite forzar la actualización de directivas de grupo en un equipo Windows?",
    options: [
      "gpupdate /force",
      "ipconfig /release",
      "ping /policy"
    ],
    answer: 0,
    explanation: "gpupdate /force fuerza la actualización de las directivas de grupo aplicadas al equipo y al usuario.",
    reference: "Windows - gpupdate"
  },
  {
    id: 42,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Herramientas",
    difficulty: "media",
    text: "¿Qué comando permite consultar qué GPO se han aplicado a un usuario o equipo?",
    options: [
      "gpresult",
      "format",
      "tracertdns"
    ],
    answer: 0,
    explanation: "gpresult muestra el resultado de directivas aplicadas, útil para diagnóstico de GPO.",
    reference: "Windows - gpresult"
  },
  {
    id: 43,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "RSAT",
    difficulty: "media",
    text: "¿Qué son las RSAT en administración Windows?",
    options: [
      "Herramientas de administración remota de servidores",
      "Un sistema de archivos cifrado",
      "Un tipo de cable de red"
    ],
    answer: 0,
    explanation: "RSAT permite administrar roles y características de Windows Server desde otro equipo Windows.",
    reference: "Windows - RSAT"
  },
  {
    id: 44,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Relaciones de confianza",
    difficulty: "media",
    text: "¿Qué permite una relación de confianza entre dominios?",
    options: [
      "Que usuarios autenticados en un dominio puedan acceder a recursos de otro dominio según permisos",
      "Que dos routers compartan una dirección MAC",
      "Que desaparezca la necesidad de autenticación"
    ],
    answer: 0,
    explanation: "Las relaciones de confianza permiten acceso entre dominios manteniendo control mediante permisos.",
    reference: "Active Directory - Trusts"
  },
  {
    id: 45,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "RODC",
    difficulty: "alta",
    text: "¿Qué es un RODC en Active Directory?",
    options: [
      "Un controlador de dominio de solo lectura",
      "Un servidor DHCP sin reservas",
      "Un grupo global obligatorio"
    ],
    answer: 0,
    explanation: "Un Read-Only Domain Controller mantiene una copia de solo lectura de Active Directory, útil en sedes con menor seguridad física.",
    reference: "Active Directory - RODC"
  },
  {
    id: 46,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Papelera de reciclaje AD",
    difficulty: "media",
    text: "¿Para qué sirve la Papelera de reciclaje de Active Directory?",
    options: [
      "Para recuperar objetos eliminados del directorio cuando está habilitada",
      "Para borrar archivos temporales de los clientes Windows",
      "Para limpiar automáticamente la caché DNS"
    ],
    answer: 0,
    explanation: "La AD Recycle Bin permite restaurar objetos eliminados conservando atributos importantes.",
    reference: "Active Directory - Recycle Bin"
  },
  {
    id: 47,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Niveles funcionales",
    difficulty: "alta",
    text: "¿Qué determinan los niveles funcionales de dominio o bosque?",
    options: [
      "Las características disponibles de Active Directory según versiones mínimas de controladores de dominio",
      "La velocidad física de la tarjeta de red",
      "El tamaño máximo de una página web interna"
    ],
    answer: 0,
    explanation: "Los niveles funcionales habilitan características de AD en función de las versiones de Windows Server presentes.",
    reference: "Active Directory - Functional Levels"
  },
  {
    id: 48,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Perfiles móviles",
    difficulty: "media",
    text: "¿Qué permite un perfil móvil en un entorno de dominio?",
    options: [
      "Que la configuración del usuario pueda cargarse en distintos equipos del dominio",
      "Que un equipo tenga dos direcciones MAC",
      "Que DNS funcione sin zona directa"
    ],
    answer: 0,
    explanation: "Los perfiles móviles permiten que el entorno de usuario viaje entre equipos, aunque pueden requerir buena gestión y red.",
    reference: "Active Directory - Roaming Profiles"
  },
  {
    id: 49,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Inicio de sesión",
    difficulty: "media",
    text: "Si un usuario de dominio puede iniciar sesión en un equipo sin conexión al controlador de dominio, ¿qué suele explicar este comportamiento?",
    options: [
      "El uso de credenciales almacenadas en caché",
      "La creación automática de un nuevo bosque",
      "El uso obligatorio de FTP"
    ],
    answer: 0,
    explanation: "Windows puede permitir el inicio de sesión con credenciales de dominio almacenadas en caché si el usuario ya inició sesión antes.",
    reference: "Windows Domain - Cached Credentials"
  },
  {
    id: 50,
    section: "🔴 BLOQUE 10 — ACTIVE DIRECTORY",
    topic: "Diagnóstico",
    difficulty: "alta",
    text: "Un equipo no puede unirse al dominio y muestra errores para localizar el controlador de dominio. ¿Qué revisarías primero?",
    options: [
      "La configuración DNS del cliente",
      "El brillo del monitor",
      "El puerto HDMI"
    ],
    answer: 0,
    explanation: "Active Directory depende de DNS. Si el cliente no usa el DNS correcto del dominio, no localizará los controladores de dominio.",
    reference: "Active Directory - Troubleshooting DNS"
  }
];