const questions = [
  {
    id: 1,
    section: "Anexo A",
    topic: "Active Directory",
    difficulty: "alta",
    text: "En un dominio Windows, un usuario puede iniciar sesión en su equipo con credenciales de dominio aunque el controlador de dominio esté temporalmente inaccesible. ¿Cuál es la explicación más probable?",
    options: [
      "El equipo utiliza siempre LDAP local para validar usuarios de dominio.",
      "El equipo puede usar credenciales de dominio almacenadas en caché.",
      "El usuario se autentica directamente contra DNS."
    ],
    answer: 1,
    explanation: "Windows puede permitir el inicio de sesión con credenciales de dominio previamente cacheadas si no hay controlador disponible.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 2,
    section: "Anexo A",
    topic: "Backups",
    difficulty: "alta",
    text: "Una empresa hace backup completo el domingo y diferenciales de lunes a sábado. Si falla el sistema el viernes, ¿qué copias necesita restaurar como mínimo?",
    options: [
      "Completo del domingo + diferencial del lunes + diferencial del jueves.",
      "Completo del domingo + todos los diferenciales hasta el jueves.",
      "Completo del domingo + diferencial del jueves."
    ],
    answer: 2,
    explanation: "El diferencial acumula los cambios desde el último completo, por eso basta el completo y el último diferencial válido.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 3,
    section: "Anexo A",
    topic: "Seguridad",
    difficulty: "media",
    text: "Un servidor tiene una versión antigua de OpenSSL con una debilidad conocida. Todavía no ha sido explotada. ¿Cómo se clasifica correctamente esa situación?",
    options: [
      "Vulnerabilidad.",
      "Amenaza.",
      "Incidente."
    ],
    answer: 0,
    explanation: "La debilidad existe aunque no haya sido explotada; por tanto es una vulnerabilidad.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 4,
    section: "Anexo A",
    topic: "Virtualización",
    difficulty: "media",
    text: "¿Cuál de las siguientes opciones describe mejor un hipervisor de tipo 1?",
    options: [
      "Se ejecuta sobre un sistema operativo anfitrión como una aplicación más.",
      "Se ejecuta directamente sobre el hardware físico.",
      "Solo permite virtualizar aplicaciones web."
    ],
    answer: 1,
    explanation: "Un hipervisor tipo 1 o bare-metal se instala directamente sobre el hardware.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 5,
    section: "Anexo A",
    topic: "Git",
    difficulty: "alta",
    text: "Has hecho un commit con un cambio incorrecto y ya lo has subido al repositorio remoto compartido. ¿Qué opción suele ser más segura para deshacerlo sin reescribir historial?",
    options: [
      "git reset --hard HEAD~1 y git push --force.",
      "Borrar la rama remota y volver a crearla.",
      "git revert sobre el commit incorrecto."
    ],
    answer: 2,
    explanation: "git revert crea un nuevo commit que deshace los cambios sin modificar el historial compartido.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 6,
    section: "Anexo A",
    topic: "Redes TCP/IP",
    difficulty: "media",
    text: "Un equipo tiene IP 169.254.23.10/16. ¿Qué indica normalmente esta dirección?",
    options: [
      "No ha recibido configuración válida de DHCP y ha usado APIPA.",
      "Está correctamente configurado con una IP pública.",
      "Tiene una IP reservada para DNS interno."
    ],
    answer: 0,
    explanation: "Las direcciones 169.254.x.x suelen indicar autoconfiguración APIPA por fallo de DHCP.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 7,
    section: "Anexo A",
    topic: "Active Directory",
    difficulty: "alta",
    text: "En Active Directory, ¿qué componente se usa habitualmente para aplicar configuraciones de seguridad, escritorio o scripts a usuarios y equipos?",
    options: [
      "DHCP Scope.",
      "GPO.",
      "Registro MX."
    ],
    answer: 1,
    explanation: "Las GPO permiten aplicar políticas a usuarios y equipos dentro del dominio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 8,
    section: "Anexo A",
    topic: "Seguridad",
    difficulty: "alta",
    text: "¿Qué mecanismo verifica integridad pero no permite recuperar el contenido original?",
    options: [
      "Función hash.",
      "Cifrado simétrico.",
      "Compresión."
    ],
    answer: 0,
    explanation: "Un hash es unidireccional y sirve para comprobar integridad, no para descifrar datos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 9,
    section: "Anexo A",
    topic: "Backups",
    difficulty: "alta",
    text: "¿Cuál es la diferencia más correcta entre RPO y RTO?",
    options: [
      "RPO mide tiempo máximo de recuperación; RTO mide pérdida máxima de datos.",
      "Ambos significan lo mismo en continuidad de negocio.",
      "RPO mide pérdida máxima tolerable de datos; RTO mide tiempo máximo aceptable de recuperación."
    ],
    answer: 2,
    explanation: "RPO se relaciona con cuántos datos se pueden perder; RTO con cuánto tiempo se tarda en recuperar el servicio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 10,
    section: "Anexo A",
    topic: "Redes y VLAN",
    difficulty: "alta",
    text: "Un puerto de switch configurado como trunk normalmente se usa para:",
    options: [
      "Asignar una única VLAN sin etiquetas a un equipo final.",
      "Transportar tráfico de varias VLAN entre dispositivos de red.",
      "Convertir direcciones privadas en públicas."
    ],
    answer: 1,
    explanation: "Un enlace trunk transporta varias VLAN, normalmente mediante etiquetado 802.1Q.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 11,
    section: "Anexo A",
    topic: "Virtualización",
    difficulty: "media",
    text: "¿Cuál es una diferencia clave entre una máquina virtual y un contenedor?",
    options: [
      "La máquina virtual incluye un sistema operativo invitado completo; el contenedor comparte el kernel del host.",
      "El contenedor siempre requiere más recursos que una máquina virtual.",
      "La máquina virtual no puede aislar procesos."
    ],
    answer: 0,
    explanation: "Las VM virtualizan hardware y suelen incluir SO invitado; los contenedores comparten kernel y aíslan procesos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 12,
    section: "Anexo A",
    topic: "Git",
    difficulty: "alta",
    text: "Añades una contraseña a config.json, haces git add config.json y después lo incluyes en .gitignore. ¿Qué ocurre?",
    options: [
      "Git deja de seguir automáticamente el archivo ya añadido al índice.",
      "El archivo se elimina del repositorio remoto de forma automática.",
      "El archivo ya añadido puede seguir siendo rastreado aunque esté en .gitignore."
    ],
    answer: 2,
    explanation: ".gitignore no deja de rastrear archivos que ya estaban añadidos al índice o al repositorio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 13,
    section: "Anexo A",
    topic: "Active Directory",
    difficulty: "alta",
    text: "En un dominio AD, ¿por qué DNS es especialmente crítico?",
    options: [
      "Porque sustituye por completo a Kerberos.",
      "Porque los clientes localizan controladores de dominio y servicios mediante registros DNS.",
      "Porque almacena directamente las contraseñas de los usuarios."
    ],
    answer: 1,
    explanation: "Active Directory depende de DNS para localizar controladores de dominio y servicios del dominio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 14,
    section: "Anexo A",
    topic: "Seguridad",
    difficulty: "media",
    text: "¿Cuál es el principio de mínimo privilegio?",
    options: [
      "Conceder solo los permisos necesarios para realizar una tarea.",
      "Dar permisos de administrador a todos los usuarios para evitar incidencias.",
      "Permitir siempre el acceso si el usuario pertenece al dominio."
    ],
    answer: 0,
    explanation: "El mínimo privilegio reduce riesgo concediendo únicamente los permisos estrictamente necesarios.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 15,
    section: "Anexo A",
    topic: "Backups y snapshots",
    difficulty: "alta",
    text: "¿Por qué un snapshot de una VM no debe considerarse por sí solo un backup completo?",
    options: [
      "Porque siempre cifra los datos y no permite restaurarlos.",
      "Porque solo funciona en servidores físicos.",
      "Porque depende del almacenamiento original y no sustituye una copia independiente recuperable."
    ],
    answer: 2,
    explanation: "El snapshot permite volver a un estado, pero no reemplaza una copia externa e independiente ante pérdida del almacenamiento.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 16,
    section: "Anexo A",
    topic: "Redes TCP/IP",
    difficulty: "alta",
    text: "Un usuario puede hacer ping a 8.8.8.8 pero no puede navegar usando nombres como www.aena.es. ¿Qué servicio revisarías primero?",
    options: [
      "RDP.",
      "DNS.",
      "NTP."
    ],
    answer: 1,
    explanation: "Si hay conectividad por IP pero fallan nombres, el primer sospechoso es DNS.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 17,
    section: "Anexo A",
    topic: "Base de datos",
    difficulty: "media",
    text: "¿Qué instrucción SQL pertenece claramente a DCL?",
    options: [
      "SELECT.",
      "COMMIT.",
      "GRANT."
    ],
    answer: 2,
    explanation: "GRANT y REVOKE pertenecen al subconjunto DCL, relacionado con permisos.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 18,
    section: "Anexo A",
    topic: "Seguridad",
    difficulty: "alta",
    text: "En una comunicación TLS, ¿para qué se usa principalmente el certificado digital del servidor?",
    options: [
      "Para acreditar la identidad del servidor y participar en el establecimiento de una comunicación segura.",
      "Para sustituir al firewall de red.",
      "Para comprimir el tráfico HTTP."
    ],
    answer: 0,
    explanation: "El certificado ayuda a autenticar al servidor y a establecer una conexión cifrada segura.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 19,
    section: "Anexo A",
    topic: "Virtualización",
    difficulty: "alta",
    text: "¿Qué riesgo aparece si se asignan más vCPU a varias máquinas virtuales de las que físicamente puede atender el host sin planificación?",
    options: [
      "Las máquinas virtuales dejan de tener dirección MAC.",
      "Puede producirse contención de CPU y pérdida de rendimiento.",
      "Se desactiva automáticamente el almacenamiento compartido."
    ],
    answer: 1,
    explanation: "El sobreaprovisionamiento sin control puede generar contención y degradación del rendimiento.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 20,
    section: "Anexo A",
    topic: "Active Directory",
    difficulty: "media",
    text: "¿Qué protocolo se asocia habitualmente a consultas de directorio en Active Directory?",
    options: [
      "LDAP.",
      "SMTP.",
      "ICMP."
    ],
    answer: 0,
    explanation: "LDAP se usa para consultar y acceder a servicios de directorio.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 21,
    section: "Anexo A",
    topic: "Backups",
    difficulty: "alta",
    text: "En una estrategia 3-2-1 de copias de seguridad, ¿qué interpretación es más correcta?",
    options: [
      "Tres usuarios, dos servidores y una VLAN.",
      "Tres backups diarios, dos incrementales y un diferencial.",
      "Tres copias, en dos medios distintos, con una copia fuera del sitio o aislada."
    ],
    answer: 2,
    explanation: "La regla 3-2-1 busca resiliencia mediante varias copias, distintos medios y una copia externa o aislada.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 22,
    section: "Anexo A",
    topic: "Git",
    difficulty: "media",
    text: "¿Qué hace git pull de forma habitual?",
    options: [
      "Solo muestra el historial local.",
      "Obtiene cambios del remoto y los integra en la rama actual.",
      "Elimina todos los cambios locales no confirmados."
    ],
    answer: 1,
    explanation: "git pull equivale normalmente a fetch + integración mediante merge o rebase según configuración.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 23,
    section: "Anexo A",
    topic: "Redes",
    difficulty: "alta",
    text: "Un paquete IP reduce su TTL en cada salto. ¿Qué ocurre cuando el TTL llega a cero?",
    options: [
      "El paquete se descarta para evitar bucles indefinidos.",
      "El paquete se cifra automáticamente.",
      "El paquete cambia de TCP a UDP."
    ],
    answer: 0,
    explanation: "TTL limita la vida del paquete; al llegar a cero, se descarta.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 24,
    section: "Anexo A",
    topic: "Seguridad",
    difficulty: "alta",
    text: "¿Qué diferencia básica hay entre IDS e IPS?",
    options: [
      "IDS bloquea tráfico y IPS solo registra eventos.",
      "Ambos son exactamente iguales.",
      "IDS detecta y alerta; IPS puede prevenir o bloquear tráfico."
    ],
    answer: 2,
    explanation: "IDS es principalmente detección; IPS añade capacidad de prevención o bloqueo.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 25,
    section: "Anexo A",
    topic: "Sistemas operativos",
    difficulty: "media",
    text: "En Linux, ¿qué representa normalmente el permiso x sobre un directorio?",
    options: [
      "Permiso para borrar siempre cualquier archivo del sistema.",
      "Permiso para atravesar o acceder al directorio.",
      "Permiso para cifrar el directorio."
    ],
    answer: 1,
    explanation: "En directorios, x permite entrar o atravesar el directorio si se conoce el nombre del recurso.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 26,
    section: "Anexo A",
    topic: "Base de datos",
    difficulty: "alta",
    text: "¿Qué objetivo principal tiene la normalización en bases de datos relacionales?",
    options: [
      "Reducir redundancias y mejorar la integridad de los datos.",
      "Eliminar todas las claves primarias.",
      "Convertir automáticamente una base SQL en NoSQL."
    ],
    answer: 0,
    explanation: "La normalización organiza los datos para reducir duplicidades y anomalías.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 27,
    section: "Anexo A",
    topic: "Redes y puertos",
    difficulty: "alta",
    text: "Quieres permitir administración remota por RDP a un servidor Windows. ¿Qué puerto TCP suele estar implicado por defecto?",
    options: [
      "389.",
      "161.",
      "3389."
    ],
    answer: 2,
    explanation: "RDP usa por defecto TCP 3389.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 28,
    section: "Anexo A",
    topic: "Virtualización y almacenamiento",
    difficulty: "media",
    text: "¿Qué característica define mejor a una SAN frente a un NAS en términos generales?",
    options: [
      "Una SAN solo permite compartir impresoras.",
      "Una SAN ofrece almacenamiento a nivel de bloque; un NAS suele ofrecer archivos por red.",
      "Una SAN funciona únicamente con Wi-Fi."
    ],
    answer: 1,
    explanation: "SAN se asocia a almacenamiento por bloques; NAS a servicios de archivo en red.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 29,
    section: "Anexo A",
    topic: "Seguridad",
    difficulty: "alta",
    text: "Un atacante engaña a un usuario para que introduzca sus credenciales en una página falsa. ¿Qué ataque describe mejor?",
    options: [
      "Phishing.",
      "RAID degradado.",
      "Fragmentación IP."
    ],
    answer: 0,
    explanation: "El phishing busca engañar al usuario para obtener credenciales o información sensible.",
    reference: "Programa AENA IIIJ05 2026 - Anexo A"
  },
  {
    id: 30,
    section: "Supuesto teórico-práctico",
    topic: "Diagnóstico de red",
    difficulty: "alta",
    text: "Un usuario tiene IP correcta, máscara correcta y DNS correcto, pero no accede a redes externas. Otros equipos de la misma VLAN sí acceden. ¿Qué dato revisarías primero en ese equipo?",
    options: [
      "El color del cable HDMI.",
      "La puerta de enlace predeterminada.",
      "El nombre del grupo de trabajo únicamente."
    ],
    answer: 1,
    explanation: "Si la red local funciona pero no hay salida a otras redes, la puerta de enlace es un punto crítico.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 31,
    section: "Supuesto teórico-práctico",
    topic: "Permisos",
    difficulty: "alta",
    text: "Un usuario tiene permiso de lectura en el recurso compartido, pero modificación en NTFS. Accede por red. ¿Qué permiso efectivo tendrá normalmente?",
    options: [
      "Modificación, porque NTFS siempre prevalece para ampliar permisos.",
      "Control total, porque pertenece al dominio.",
      "Lectura, porque se aplica la combinación más restrictiva entre recurso compartido y NTFS."
    ],
    answer: 2,
    explanation: "Al acceder por red se combinan permisos de recurso compartido y NTFS, aplicándose el más restrictivo.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 32,
    section: "Supuesto teórico-práctico",
    topic: "Backups",
    difficulty: "alta",
    text: "Tras un ransomware, descubres que las copias están accesibles desde el mismo dominio comprometido y también han sido cifradas. ¿Qué medida habría reducido más ese riesgo?",
    options: [
      "Copias aisladas, offline o inmutables.",
      "Aumentar el brillo del monitor del servidor.",
      "Usar solo snapshots en la misma cabina."
    ],
    answer: 0,
    explanation: "Las copias aisladas o inmutables reducen la posibilidad de que el ransomware las modifique o cifre.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 33,
    section: "Supuesto teórico-práctico",
    topic: "Active Directory",
    difficulty: "alta",
    text: "Una GPO enlazada a una OU no se aplica a un usuario que está en otra OU diferente. ¿Cuál es la causa más probable?",
    options: [
      "Las GPO solo funcionan con Linux.",
      "La GPO no está enlazada al contenedor donde está el usuario o equipo afectado.",
      "LDAP usa el puerto 80."
    ],
    answer: 1,
    explanation: "Las GPO se aplican según el enlace y la ubicación de usuarios/equipos en sitios, dominios u OU.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 34,
    section: "Supuesto teórico-práctico",
    topic: "Certificados TLS",
    difficulty: "alta",
    text: "Los usuarios reciben aviso de certificado caducado al entrar en una aplicación interna HTTPS. ¿Qué deberías revisar primero?",
    options: [
      "El puerto SMTP del servidor de correo.",
      "La cantidad de RAM del cliente.",
      "La validez temporal y cadena del certificado del servidor."
    ],
    answer: 2,
    explanation: "Un certificado caducado o una cadena no confiable genera advertencias en HTTPS.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 35,
    section: "Supuesto teórico-práctico",
    topic: "DHCP",
    difficulty: "media",
    text: "Un cliente en una VLAN remota no recibe IP por DHCP, pero el servidor DHCP está operativo en otra red. ¿Qué elemento puede ser necesario?",
    options: [
      "DHCP Relay o IP helper.",
      "Un registro SPF.",
      "Un trigger SQL."
    ],
    answer: 0,
    explanation: "DHCP usa broadcast; para cruzar routers o VLAN puede requerir relay/IP helper.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 36,
    section: "Supuesto teórico-práctico",
    topic: "Correo electrónico",
    difficulty: "media",
    text: "Un usuario puede recibir correos pero no enviarlos desde un cliente de correo. ¿Qué protocolo o servicio revisarías primero?",
    options: [
      "IMAP o POP3.",
      "SMTP.",
      "ARP."
    ],
    answer: 1,
    explanation: "SMTP se usa para el envío de correo; IMAP/POP3 para recepción o consulta.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 37,
    section: "Supuesto teórico-práctico",
    topic: "Virtualización",
    difficulty: "alta",
    text: "Una VM tiene un snapshot antiguo de varios meses y el datastore empieza a quedarse sin espacio. ¿Qué actuación es más prudente?",
    options: [
      "Mantener snapshots indefinidamente como sistema principal de backup.",
      "Ignorar el aviso porque los snapshots no ocupan espacio.",
      "Consolidar/eliminar snapshots siguiendo procedimiento y verificar backups reales."
    ],
    answer: 2,
    explanation: "Snapshots prolongados pueden crecer y afectar rendimiento/espacio; deben gestionarse y no sustituir backups.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 38,
    section: "Supuesto teórico-práctico",
    topic: "Firewall",
    difficulty: "media",
    text: "Desde fuera no se puede acceder a una web interna publicada por HTTPS, pero internamente funciona. ¿Qué revisarías primero en firewall/NAT?",
    options: [
      "Reglas de publicación o apertura del puerto TCP 443.",
      "El puerto UDP 67 del cliente.",
      "La clave primaria de la base de datos."
    ],
    answer: 0,
    explanation: "HTTPS usa TCP 443; si internamente funciona, publicación/NAT/firewall es sospechoso.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 39,
    section: "Supuesto teórico-práctico",
    topic: "Git",
    difficulty: "alta",
    text: "Durante un merge aparecen conflictos. ¿Qué significa?",
    options: [
      "Git ha perdido todos los commits anteriores.",
      "Hay cambios incompatibles en las mismas zonas y se requiere resolución manual.",
      "El repositorio remoto ha sido eliminado automáticamente."
    ],
    answer: 1,
    explanation: "Un conflicto de merge requiere decidir manualmente cómo combinar cambios incompatibles.",
    reference: "Programa AENA IIIJ05 2026 - Supuesto práctico"
  },
  {
    id: 40,
    section: "Inglés técnico",
    topic: "Technical English",
    difficulty: "media",
    text: "Traduce: 'The account is locked out after several failed login attempts.'",
    options: [
      "La cuenta ha sido eliminada después de varios accesos correctos.",
      "La cuenta se ha actualizado tras varios intentos de conexión.",
      "La cuenta está bloqueada después de varios intentos fallidos de inicio de sesión."
    ],
    answer: 2,
    explanation: "'Locked out' significa bloqueada; 'failed login attempts' son intentos fallidos de inicio de sesión.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 41,
    section: "Inglés técnico",
    topic: "Technical English",
    difficulty: "media",
    text: "Traduce: 'Read-only access has been granted to the shared folder.'",
    options: [
      "Se ha concedido acceso de solo lectura a la carpeta compartida.",
      "Se ha eliminado el acceso a la carpeta compartida.",
      "Se ha cifrado la carpeta compartida con permisos completos."
    ],
    answer: 0,
    explanation: "'Read-only access' significa acceso de solo lectura.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 42,
    section: "Inglés técnico",
    topic: "Technical English",
    difficulty: "alta",
    text: "Traduce: 'The root cause of the outage was a misconfigured default gateway.'",
    options: [
      "La copia raíz de la salida fue una contraseña caducada.",
      "La causa raíz de la interrupción fue una puerta de enlace predeterminada mal configurada.",
      "El certificado raíz bloqueó el balanceador de carga."
    ],
    answer: 1,
    explanation: "'Root cause' es causa raíz, 'outage' es interrupción y 'default gateway' es puerta de enlace predeterminada.",
    reference: "Programa AENA IIIJ05 2026 - Inglés técnico"
  },
  {
    id: 43,
    section: "Inglés escrito general",
    topic: "Present perfect vs past simple",
    difficulty: "B1",
    text: "Choose the correct sentence:",
    options: [
      "I have seen him yesterday.",
      "I see him yesterday.",
      "I saw him yesterday."
    ],
    answer: 2,
    explanation: "With a finished time expression like 'yesterday', use past simple.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 44,
    section: "Inglés escrito general",
    topic: "Since / for",
    difficulty: "B1",
    text: "Complete: She has worked in this department ___ three years.",
    options: [
      "for",
      "since",
      "during"
    ],
    answer: 0,
    explanation: "Use 'for' with a duration: for three years.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 45,
    section: "Inglés escrito general",
    topic: "Modal verbs",
    difficulty: "A2",
    text: "Complete: Visitors ___ wear an ID card in this area.",
    options: [
      "to must",
      "must",
      "must to"
    ],
    answer: 1,
    explanation: "After modal verbs like 'must', use the base verb without 'to'.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 46,
    section: "Inglés escrito general",
    topic: "Connectors",
    difficulty: "B2",
    text: "Complete: The system was slow; ___, the users were able to finish their work.",
    options: [
      "because",
      "although",
      "however"
    ],
    answer: 2,
    explanation: "'However' introduces contrast between the slow system and successful completion.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 47,
    section: "Inglés escrito general",
    topic: "Prepositions",
    difficulty: "B1",
    text: "Complete: Please send the report ___ Monday morning.",
    options: [
      "by",
      "in",
      "at"
    ],
    answer: 0,
    explanation: "'By Monday morning' means no later than Monday morning.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 48,
    section: "Inglés escrito general",
    topic: "Office English",
    difficulty: "B2",
    text: "Choose the most appropriate sentence for a work email:",
    options: [
      "Give me the file now because I need it.",
      "Could you please send me the file when you have a moment?",
      "You send file me fast."
    ],
    answer: 1,
    explanation: "The second option is grammatically correct and polite for office communication.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 49,
    section: "Inglés escrito general",
    topic: "Reading comprehension",
    difficulty: "B2",
    text: "Read: 'The meeting has been postponed due to maintenance work in the conference room.' What does it mean?",
    options: [
      "The meeting has been cancelled forever.",
      "The meeting will take place earlier than planned.",
      "The meeting has been delayed because the room needs maintenance."
    ],
    answer: 2,
    explanation: "'Postponed' means delayed or moved to a later time.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  },
  {
    id: 50,
    section: "Inglés escrito general",
    topic: "Present perfect",
    difficulty: "B1",
    text: "Complete: We ___ already checked the backup logs.",
    options: [
      "have",
      "did",
      "are"
    ],
    answer: 0,
    explanation: "Use present perfect with 'already': we have already checked.",
    reference: "Programa AENA IIIJ05 2026 - Inglés escrito general"
  }
];