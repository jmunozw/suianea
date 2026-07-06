const questions = [
  {
    "id": 2701,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Funciones del administrador",
    "difficulty": "fácil",
    "text": "¿Cuál es una responsabilidad típica de la administración de sistemas?",
    "options": [
      "Diseñar exclusivamente la interfaz gráfica de las aplicaciones.",
      "Instalar, mantener, actualizar y supervisar sistemas operativos y servicios.",
      "Redactar únicamente documentación comercial para usuarios finales."
    ],
    "answer": 1,
    "explanation": "El administrador de sistemas se ocupa de que el sistema operativo, servicios, usuarios, permisos, actualizaciones y disponibilidad funcionen correctamente.",
    "reference": "Bloque IV.01 - Administración del sistema operativo y software de base"
  },
  {
    "id": 2702,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Software de base",
    "difficulty": "media",
    "text": "En administración de sistemas, ¿qué se entiende normalmente por software de base?",
    "options": [
      "Los documentos ofimáticos creados por los usuarios.",
      "El conjunto formado por sistema operativo, controladores, utilidades y servicios esenciales.",
      "Las páginas HTML públicas de una organización."
    ],
    "answer": 1,
    "explanation": "El software de base incluye el sistema operativo y los componentes necesarios para que el equipo o servidor pueda prestar servicios.",
    "reference": "Bloque IV.01 - Software de base"
  },
  {
    "id": 2703,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Actualizaciones",
    "difficulty": "fácil",
    "text": "¿Cuál es el objetivo principal de aplicar actualizaciones de seguridad en un sistema operativo?",
    "options": [
      "Corregir vulnerabilidades conocidas y reducir la superficie de ataque.",
      "Cambiar el nombre del equipo automáticamente.",
      "Eliminar siempre todos los archivos temporales del sistema."
    ],
    "answer": 0,
    "explanation": "Los parches de seguridad corrigen fallos que podrían ser explotados por atacantes o malware.",
    "reference": "Bloque IV.01 - Actualización del sistema operativo"
  },
  {
    "id": 2704,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Gestión de parches",
    "difficulty": "media",
    "text": "Antes de desplegar una actualización crítica en todos los servidores de producción, ¿qué práctica es más recomendable?",
    "options": [
      "Desactivar los registros del sistema mientras se instala.",
      "Aplicarla directamente sin pruebas para ahorrar tiempo.",
      "Probarla en un entorno controlado o piloto y revisar compatibilidad."
    ],
    "answer": 2,
    "explanation": "La validación previa reduce el riesgo de incompatibilidades, caídas de servicio o problemas de rendimiento.",
    "reference": "Bloque IV.01 - Mantenimiento y actualización"
  },
  {
    "id": 2705,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Mantenimiento preventivo",
    "difficulty": "fácil",
    "text": "¿Cuál de las siguientes acciones es mantenimiento preventivo?",
    "options": [
      "Revisar espacio en disco, estado de servicios y logs antes de que falle el sistema.",
      "Reinstalar el servidor después de una caída grave.",
      "Restaurar una copia de seguridad tras un borrado accidental."
    ],
    "answer": 0,
    "explanation": "El mantenimiento preventivo busca anticiparse a fallos mediante revisiones, limpieza, monitorización y control periódico.",
    "reference": "Bloque IV.01 - Mantenimiento del sistema operativo"
  },
  {
    "id": 2706,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Mantenimiento correctivo",
    "difficulty": "fácil",
    "text": "¿Qué caracteriza al mantenimiento correctivo?",
    "options": [
      "Solo se aplica a redes inalámbricas.",
      "Consiste siempre en comprar hardware nuevo.",
      "Se realiza para reparar una avería o incidencia ya producida."
    ],
    "answer": 2,
    "explanation": "El mantenimiento correctivo actúa después del fallo para recuperar el funcionamiento normal.",
    "reference": "Bloque IV.01 - Reparación del sistema operativo"
  },
  {
    "id": 2707,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Servicios del sistema",
    "difficulty": "media",
    "text": "En Windows, ¿qué herramienta permite administrar servicios del sistema de forma gráfica?",
    "options": [
      "Administrador de servicios o services.msc",
      "Visor de eventos",
      "Editor de imágenes"
    ],
    "answer": 0,
    "explanation": "services.msc permite iniciar, detener, pausar, configurar y revisar servicios de Windows.",
    "reference": "Bloque IV.01 - Administración de servicios"
  },
  {
    "id": 2708,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Servicios Linux",
    "difficulty": "media",
    "text": "En muchas distribuciones Linux actuales, ¿qué herramienta se usa para gestionar servicios con systemd?",
    "options": [
      "diskpart",
      "systemctl",
      "regedit"
    ],
    "answer": 1,
    "explanation": "systemctl permite iniciar, detener, reiniciar, habilitar o consultar el estado de unidades y servicios gestionados por systemd.",
    "reference": "Bloque IV.01 - Sistemas Unix y Linux"
  },
  {
    "id": 2709,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Arranque de servicios",
    "difficulty": "media",
    "text": "¿Qué significa habilitar un servicio en el arranque del sistema?",
    "options": [
      "Que el servicio será eliminado del sistema.",
      "Que solo podrá ejecutarse en modo seguro.",
      "Que el servicio se ejecutará automáticamente al iniciar el sistema."
    ],
    "answer": 2,
    "explanation": "Habilitar un servicio para el arranque implica que se iniciará automáticamente cuando arranque el sistema operativo.",
    "reference": "Bloque IV.01 - Administración del sistema operativo"
  },
  {
    "id": 2710,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Logs",
    "difficulty": "fácil",
    "text": "¿Para qué sirven principalmente los logs o registros del sistema?",
    "options": [
      "Para registrar eventos, errores, accesos y actividad relevante del sistema.",
      "Para almacenar únicamente imágenes del escritorio.",
      "Para aumentar automáticamente la memoria RAM."
    ],
    "answer": 0,
    "explanation": "Los logs son esenciales para diagnosticar incidencias, auditar actividad y detectar comportamientos anómalos.",
    "reference": "Bloque IV.01 - Monitorización y mantenimiento"
  },
  {
    "id": 2711,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Visor de eventos",
    "difficulty": "media",
    "text": "En Windows, si un servicio falla al arrancar, ¿dónde debería revisarse información detallada del error?",
    "options": [
      "En la papelera de reciclaje.",
      "En el Visor de eventos.",
      "En el panel de fuentes tipográficas."
    ],
    "answer": 1,
    "explanation": "El Visor de eventos muestra registros de sistema, aplicación y seguridad útiles para localizar errores de servicios o controladores.",
    "reference": "Bloque IV.01 - Diagnóstico y reparación"
  },
  {
    "id": 2712,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Registros Linux",
    "difficulty": "media",
    "text": "En un sistema Linux con systemd, ¿qué comando permite consultar los registros del journal?",
    "options": [
      "gpedit.msc",
      "ipconfig /flushdns",
      "journalctl"
    ],
    "answer": 2,
    "explanation": "journalctl permite consultar los registros centralizados gestionados por systemd-journald.",
    "reference": "Bloque IV.01 - Administración Linux"
  },
  {
    "id": 2713,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Monitorización",
    "difficulty": "fácil",
    "text": "¿Cuál de estos indicadores es básico en la monitorización de un servidor?",
    "options": [
      "Uso de CPU, memoria, disco, red y estado de servicios.",
      "Color del fondo de pantalla del usuario.",
      "Número de iconos del escritorio."
    ],
    "answer": 0,
    "explanation": "La monitorización debe vigilar recursos críticos y servicios para anticipar problemas de rendimiento o disponibilidad.",
    "reference": "Bloque IV.04 - Monitorización y control"
  },
  {
    "id": 2714,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Alertas",
    "difficulty": "media",
    "text": "¿Cuál es la ventaja de configurar alertas de monitorización?",
    "options": [
      "Sustituyen por completo la necesidad de copias de seguridad.",
      "Permiten detectar condiciones anómalas antes de que el usuario final reporte el problema.",
      "Impiden que el sistema operativo necesite actualizaciones."
    ],
    "answer": 1,
    "explanation": "Las alertas ayudan a actuar de forma proactiva ante umbrales de CPU, memoria, disco, caídas de servicio o errores repetidos.",
    "reference": "Bloque IV.04 - Monitorización y control de tráfico"
  },
  {
    "id": 2715,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "SNMP",
    "difficulty": "media",
    "text": "¿Para qué se utiliza habitualmente SNMP en administración de sistemas y redes?",
    "options": [
      "Para enviar correo electrónico entre clientes de usuario.",
      "Para cifrar discos locales de forma obligatoria.",
      "Para monitorizar y consultar información de dispositivos y servicios de red."
    ],
    "answer": 2,
    "explanation": "SNMP permite recopilar métricas y estados de equipos como routers, switches, servidores, impresoras o SAI.",
    "reference": "Bloque IV.04 - Gestión de dispositivos y monitorización"
  },
  {
    "id": 2716,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Active Directory",
    "difficulty": "fácil",
    "text": "¿Qué es Active Directory en un entorno Windows empresarial?",
    "options": [
      "Un servicio de directorio para gestionar identidades, equipos, grupos y recursos del dominio.",
      "Un programa de edición de vídeo.",
      "Un sistema de compresión de imágenes."
    ],
    "answer": 0,
    "explanation": "Active Directory centraliza la gestión de usuarios, grupos, equipos, autenticación y políticas en dominios Windows.",
    "reference": "Bloque IV.04 - Gestión de usuarios"
  },
  {
    "id": 2717,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Controlador de dominio",
    "difficulty": "media",
    "text": "¿Qué función realiza un controlador de dominio?",
    "options": [
      "Sustituye siempre al router de salida a Internet.",
      "Autentica usuarios y equipos y almacena información del dominio.",
      "Convierte documentos PDF a imágenes."
    ],
    "answer": 1,
    "explanation": "El controlador de dominio presta servicios de autenticación y directorio dentro de un dominio Active Directory.",
    "reference": "Bloque IV.04 - Administración de redes de área local"
  },
  {
    "id": 2718,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "OU",
    "difficulty": "media",
    "text": "En Active Directory, ¿para qué se utilizan las Unidades Organizativas u OU?",
    "options": [
      "Para aumentar la velocidad física del procesador.",
      "Para sustituir las direcciones IP de los equipos.",
      "Para organizar objetos del dominio y aplicar delegación o políticas de grupo."
    ],
    "answer": 2,
    "explanation": "Las OU permiten estructurar usuarios, equipos y otros objetos, además de facilitar la aplicación de GPO y delegación administrativa.",
    "reference": "Bloque IV.04 - Gestión de usuarios"
  },
  {
    "id": 2719,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "GPO",
    "difficulty": "media",
    "text": "¿Qué permite una GPO en un dominio Active Directory?",
    "options": [
      "Aplicar configuraciones y restricciones de forma centralizada a usuarios o equipos.",
      "Crear copias físicas de los discos duros.",
      "Asignar automáticamente una dirección MAC nueva."
    ],
    "answer": 0,
    "explanation": "Las políticas de grupo permiten configurar seguridad, scripts, escritorio, actualizaciones, restricciones y otros parámetros de forma centralizada.",
    "reference": "Bloque IV.04 - Gestión de usuarios y dispositivos"
  },
  {
    "id": 2720,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Herencia de GPO",
    "difficulty": "difícil",
    "text": "En Active Directory, ¿qué ocurre normalmente con una GPO vinculada a una OU padre?",
    "options": [
      "Se elimina automáticamente al crear una OU hija.",
      "Puede heredarse por las OU hijas salvo que se bloquee o se configure otra prioridad.",
      "Solo se aplica a impresoras, nunca a usuarios ni equipos."
    ],
    "answer": 1,
    "explanation": "La herencia permite que las políticas aplicadas en niveles superiores afecten a niveles inferiores, aunque existen mecanismos como bloqueo de herencia o prioridad.",
    "reference": "Bloque IV.04 - Políticas de grupo"
  },
  {
    "id": 2721,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "LDAP",
    "difficulty": "media",
    "text": "¿Qué protocolo se asocia habitualmente con el acceso y consulta a servicios de directorio como Active Directory?",
    "options": [
      "SMTP",
      "ICMP",
      "LDAP"
    ],
    "answer": 2,
    "explanation": "LDAP es un protocolo usado para acceder y consultar información en servicios de directorio.",
    "reference": "Bloque IV.04 - Gestión de usuarios"
  },
  {
    "id": 2722,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "DNS y dominio",
    "difficulty": "difícil",
    "text": "En un dominio Active Directory, ¿por qué DNS es especialmente importante?",
    "options": [
      "Porque ayuda a localizar controladores de dominio y servicios del dominio.",
      "Porque sustituye al sistema de permisos NTFS.",
      "Porque elimina la necesidad de usuarios y contraseñas."
    ],
    "answer": 0,
    "explanation": "Active Directory depende de DNS para localizar servicios, controladores de dominio y recursos mediante registros específicos.",
    "reference": "Bloque IV.04 - Administración de redes de área local"
  },
  {
    "id": 2723,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Usuarios y grupos",
    "difficulty": "fácil",
    "text": "¿Cuál es una buena práctica al asignar permisos a usuarios?",
    "options": [
      "Compartir una única cuenta genérica entre todos los empleados.",
      "Asignar permisos a grupos y añadir usuarios a esos grupos.",
      "Dar permisos de administrador local a todos los usuarios."
    ],
    "answer": 1,
    "explanation": "Gestionar permisos mediante grupos simplifica la administración y reduce errores.",
    "reference": "Bloque IV.04 - Gestión de usuarios"
  },
  {
    "id": 2724,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Principio de mínimo privilegio",
    "difficulty": "media",
    "text": "¿Qué significa aplicar el principio de mínimo privilegio?",
    "options": [
      "Eliminar todos los permisos de todos los usuarios siempre.",
      "Usar siempre la misma contraseña para simplificar soporte.",
      "Conceder a cada usuario solo los permisos necesarios para realizar su trabajo."
    ],
    "answer": 2,
    "explanation": "El mínimo privilegio limita el impacto de errores, abuso de permisos o compromisos de cuentas.",
    "reference": "Bloque IV.05 - Seguridad lógica"
  },
  {
    "id": 2725,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Permisos NTFS",
    "difficulty": "media",
    "text": "En Windows, ¿qué controlan los permisos NTFS?",
    "options": [
      "El acceso a archivos y carpetas en volúmenes con sistema de archivos NTFS.",
      "La resolución DNS externa de un dominio.",
      "La velocidad de una tarjeta de red Wi-Fi."
    ],
    "answer": 0,
    "explanation": "Los permisos NTFS definen acciones como leer, escribir, modificar o controlar totalmente archivos y carpetas.",
    "reference": "Bloque IV.01 - Administración del sistema operativo"
  },
  {
    "id": 2726,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Permisos compartidos",
    "difficulty": "difícil",
    "text": "Si un usuario accede a una carpeta compartida por red en Windows, ¿qué permisos se combinan normalmente?",
    "options": [
      "Solo permisos de monitorización SNMP.",
      "Permisos de recurso compartido y permisos NTFS, aplicándose el más restrictivo en el acceso efectivo.",
      "Solo permisos de BIOS."
    ],
    "answer": 1,
    "explanation": "Cuando se accede por red, el permiso efectivo depende de la combinación entre permisos de compartición y permisos NTFS.",
    "reference": "Bloque IV.04 - Gestión de recursos en red"
  },
  {
    "id": 2727,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Herencia de permisos",
    "difficulty": "media",
    "text": "¿Qué implica la herencia de permisos en carpetas?",
    "options": [
      "Que los permisos desaparecen al reiniciar el equipo.",
      "Que solo los archivos comprimidos pueden tener permisos.",
      "Que una subcarpeta puede recibir permisos definidos en una carpeta superior."
    ],
    "answer": 2,
    "explanation": "La herencia permite propagar permisos desde carpetas padre a carpetas hijas, simplificando la administración.",
    "reference": "Bloque IV.01 - Administración de permisos"
  },
  {
    "id": 2728,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "UAC",
    "difficulty": "media",
    "text": "¿Cuál es la finalidad de UAC en Windows?",
    "options": [
      "Solicitar elevación de privilegios cuando una acción requiere permisos administrativos.",
      "Aumentar automáticamente la capacidad del disco.",
      "Convertir cuentas locales en cuentas de correo."
    ],
    "answer": 0,
    "explanation": "UAC ayuda a evitar cambios no autorizados solicitando confirmación o credenciales para tareas administrativas.",
    "reference": "Bloque IV.05 - Seguridad en el puesto de usuario"
  },
  {
    "id": 2729,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Cuentas locales y de dominio",
    "difficulty": "media",
    "text": "¿Qué diferencia básica hay entre una cuenta local y una cuenta de dominio?",
    "options": [
      "La cuenta de dominio solo puede iniciar sesión sin contraseña.",
      "La local se gestiona en un equipo concreto; la de dominio se gestiona centralmente en el dominio.",
      "La cuenta local solo sirve para correo electrónico."
    ],
    "answer": 1,
    "explanation": "Las cuentas de dominio permiten autenticación y administración centralizada; las locales existen en un equipo específico.",
    "reference": "Bloque IV.04 - Gestión de usuarios"
  },
  {
    "id": 2730,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Perfiles de usuario",
    "difficulty": "media",
    "text": "¿Qué contiene normalmente un perfil de usuario en un sistema operativo?",
    "options": [
      "Únicamente la dirección MAC del adaptador de red.",
      "El firmware de la placa base.",
      "Configuración, escritorio, documentos y datos propios del entorno del usuario."
    ],
    "answer": 2,
    "explanation": "El perfil guarda configuraciones y datos asociados al usuario, como escritorio, preferencias y carpetas personales.",
    "reference": "Bloque IV.01 - Gestión de usuarios en sistemas operativos"
  },
  {
    "id": 2731,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Cuotas de disco",
    "difficulty": "media",
    "text": "¿Para qué se usan las cuotas de disco?",
    "options": [
      "Para limitar o controlar el espacio de almacenamiento que puede usar un usuario o grupo.",
      "Para cifrar automáticamente todas las comunicaciones web.",
      "Para sustituir una política de contraseñas."
    ],
    "answer": 0,
    "explanation": "Las cuotas evitan que un usuario consuma de forma excesiva el almacenamiento disponible.",
    "reference": "Bloque IV.01 - Administración de almacenamiento"
  },
  {
    "id": 2732,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Gestión de paquetes",
    "difficulty": "media",
    "text": "En Linux, ¿qué función cumplen gestores como apt, dnf o yum?",
    "options": [
      "Crear registros DNS MX automáticamente en Internet.",
      "Instalar, actualizar y eliminar paquetes desde repositorios.",
      "Modificar físicamente la memoria RAM instalada."
    ],
    "answer": 1,
    "explanation": "Los gestores de paquetes automatizan la instalación, actualización y resolución de dependencias del software.",
    "reference": "Bloque IV.01 - Software de base"
  },
  {
    "id": 2733,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Repositorios",
    "difficulty": "media",
    "text": "¿Qué es un repositorio de software en Linux?",
    "options": [
      "Una carpeta obligatoria para guardar fotografías.",
      "Una tabla de enrutamiento interna del switch.",
      "Una fuente organizada desde la que se descargan paquetes y actualizaciones."
    ],
    "answer": 2,
    "explanation": "Los repositorios contienen paquetes firmados o gestionados por una distribución o proveedor.",
    "reference": "Bloque IV.01 - Administración de software"
  },
  {
    "id": 2734,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Tareas programadas",
    "difficulty": "fácil",
    "text": "¿Para qué sirven las tareas programadas en administración de sistemas?",
    "options": [
      "Para automatizar ejecuciones periódicas como scripts, limpiezas o copias.",
      "Para impedir que los servicios se inicien.",
      "Para cambiar el tipo de cable de red utilizado."
    ],
    "answer": 0,
    "explanation": "La automatización de tareas reduce intervención manual y ayuda a mantener operaciones repetitivas.",
    "reference": "Bloque IV.01 - Administración del sistema operativo"
  },
  {
    "id": 2735,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Cron",
    "difficulty": "media",
    "text": "En sistemas Unix/Linux, ¿qué servicio se asocia tradicionalmente a la ejecución programada de tareas?",
    "options": [
      "POP3",
      "cron",
      "LDAP"
    ],
    "answer": 1,
    "explanation": "cron permite programar comandos o scripts para que se ejecuten en momentos concretos.",
    "reference": "Bloque IV.01 - Sistemas Unix y Linux"
  },
  {
    "id": 2736,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Inventario",
    "difficulty": "media",
    "text": "¿Por qué es importante mantener inventario de equipos y software?",
    "options": [
      "Evita tener que usar contraseñas.",
      "Sustituye la necesidad de monitorización.",
      "Facilita soporte, control de licencias, mantenimiento, seguridad y planificación."
    ],
    "answer": 2,
    "explanation": "El inventario ayuda a conocer qué activos existen, dónde están, qué software tienen y qué riesgos o necesidades presentan.",
    "reference": "Bloque IV.04 - Gestión de dispositivos"
  },
  {
    "id": 2737,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Gestión de incidencias",
    "difficulty": "fácil",
    "text": "¿Qué es una incidencia en administración de sistemas?",
    "options": [
      "Una interrupción o degradación no planificada de un servicio o sistema.",
      "Una mejora estética sin relación con el servicio.",
      "Una contraseña que siempre cumple la política."
    ],
    "answer": 0,
    "explanation": "Una incidencia afecta al funcionamiento normal y debe registrarse, priorizarse, diagnosticarse y resolverse.",
    "reference": "Bloque IV.05 - Sistemas de gestión de incidencias"
  },
  {
    "id": 2738,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "SLA",
    "difficulty": "media",
    "text": "¿Qué representa un SLA en soporte y administración de servicios?",
    "options": [
      "Un tipo de memoria caché de la CPU.",
      "Un acuerdo de nivel de servicio con tiempos o condiciones comprometidas.",
      "Un protocolo exclusivo para borrar logs."
    ],
    "answer": 1,
    "explanation": "Un SLA define compromisos como tiempos de respuesta, resolución, disponibilidad o calidad del servicio.",
    "reference": "Bloque IV.05 - Gestión de incidencias"
  },
  {
    "id": 2739,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Priorización de incidencias",
    "difficulty": "media",
    "text": "¿Qué factores suelen usarse para priorizar una incidencia?",
    "options": [
      "Color del teclado y tamaño del monitor.",
      "Orden alfabético del apellido del técnico.",
      "Impacto y urgencia."
    ],
    "answer": 2,
    "explanation": "La prioridad suele determinarse combinando el impacto sobre usuarios o servicios y la urgencia temporal de resolverla.",
    "reference": "Bloque IV.05 - Sistemas de gestión de incidencias"
  },
  {
    "id": 2740,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Control remoto",
    "difficulty": "fácil",
    "text": "¿Cuál de las siguientes herramientas o protocolos se asocia al control remoto de un puesto Windows?",
    "options": [
      "RDP",
      "SMTP",
      "ARP"
    ],
    "answer": 0,
    "explanation": "RDP permite acceder gráficamente a equipos Windows de forma remota, si está habilitado y permitido por firewall y permisos.",
    "reference": "Bloque IV.05 - Control remoto de puestos de usuario"
  },
  {
    "id": 2741,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "SSH",
    "difficulty": "fácil",
    "text": "¿Qué protocolo se usa habitualmente para administrar de forma remota sistemas Unix/Linux mediante consola cifrada?",
    "options": [
      "POP3",
      "SSH",
      "HTTP"
    ],
    "answer": 1,
    "explanation": "SSH proporciona acceso remoto seguro a consola y túneles cifrados para administración.",
    "reference": "Bloque IV.05 - Acceso remoto seguro"
  },
  {
    "id": 2742,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Firewall local",
    "difficulty": "media",
    "text": "¿Qué función cumple un firewall local en un equipo o servidor?",
    "options": [
      "Aumentar el tamaño del disco duro.",
      "Transformar POP3 en IMAP.",
      "Filtrar conexiones entrantes o salientes según reglas configuradas."
    ],
    "answer": 2,
    "explanation": "El firewall local controla el tráfico permitido o bloqueado hacia y desde el sistema.",
    "reference": "Bloque IV.05 - Seguridad lógica y puesto de usuario"
  },
  {
    "id": 2743,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Antimalware",
    "difficulty": "fácil",
    "text": "¿Por qué debe mantenerse actualizado el software antimalware?",
    "options": [
      "Para reconocer amenazas recientes y aplicar firmas o motores actualizados.",
      "Para cambiar la dirección IP del router.",
      "Para borrar automáticamente todos los usuarios del sistema."
    ],
    "answer": 0,
    "explanation": "Las amenazas evolucionan; por eso las firmas, motores y reglas de detección deben actualizarse.",
    "reference": "Bloque IV.05 - Amenazas y vulnerabilidades"
  },
  {
    "id": 2744,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Política de contraseñas",
    "difficulty": "media",
    "text": "¿Qué busca una política de contraseñas en un entorno corporativo?",
    "options": [
      "Eliminar todas las cuentas de dominio.",
      "Establecer requisitos de longitud, complejidad, caducidad o bloqueo para proteger cuentas.",
      "Permitir que todos los usuarios usen la misma clave."
    ],
    "answer": 1,
    "explanation": "Las políticas de contraseñas reducen el riesgo de accesos no autorizados y ataques de fuerza bruta o reutilización.",
    "reference": "Bloque IV.05 - Seguridad lógica"
  },
  {
    "id": 2745,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Bloqueo de cuenta",
    "difficulty": "media",
    "text": "¿Para qué sirve una política de bloqueo de cuenta tras varios intentos fallidos?",
    "options": [
      "Para impedir que el usuario cambie el fondo de pantalla.",
      "Para acelerar la conexión Wi-Fi.",
      "Para dificultar ataques de fuerza bruta contra credenciales."
    ],
    "answer": 2,
    "explanation": "El bloqueo temporal o administrativo reduce la posibilidad de probar contraseñas indefinidamente.",
    "reference": "Bloque IV.05 - Seguridad lógica"
  },
  {
    "id": 2746,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Correo electrónico",
    "difficulty": "fácil",
    "text": "¿Qué protocolo se usa principalmente para el envío de correo electrónico entre servidores o desde cliente a servidor?",
    "options": [
      "SMTP",
      "SNMP",
      "RDP"
    ],
    "answer": 0,
    "explanation": "SMTP es el protocolo asociado al envío de correo electrónico.",
    "reference": "Bloque IV.03 - Administración de servidores de correo electrónico"
  },
  {
    "id": 2747,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Correo electrónico",
    "difficulty": "media",
    "text": "¿Qué diferencia básica hay entre POP3 e IMAP?",
    "options": [
      "IMAP solo se usa para resolver nombres DNS.",
      "IMAP mantiene y sincroniza el correo en el servidor; POP3 suele descargarlo al cliente.",
      "POP3 sirve para enviar correo y SMTP para recibirlo."
    ],
    "answer": 1,
    "explanation": "IMAP está pensado para sincronizar buzones entre varios dispositivos; POP3 se orienta a descarga del correo al cliente.",
    "reference": "Bloque IV.03 - Protocolos de correo electrónico"
  },
  {
    "id": 2748,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "DNS de correo",
    "difficulty": "media",
    "text": "¿Qué registro DNS indica qué servidor recibe correo para un dominio?",
    "options": [
      "PTR",
      "A exclusivamente",
      "MX"
    ],
    "answer": 2,
    "explanation": "El registro MX especifica los servidores de intercambio de correo responsables de recibir mensajes para un dominio.",
    "reference": "Bloque IV.03 - Servidores de correo y protocolos"
  },
  {
    "id": 2749,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Autenticación de correo",
    "difficulty": "difícil",
    "text": "¿Qué ayudan a prevenir SPF, DKIM y DMARC en correo electrónico?",
    "options": [
      "Suplantación de dominio, spam y falsificación de mensajes.",
      "Errores físicos de memoria RAM.",
      "Fragmentación del sistema de archivos NTFS."
    ],
    "answer": 0,
    "explanation": "SPF, DKIM y DMARC son mecanismos usados para validar remitentes y reducir spoofing y abuso del dominio en correo.",
    "reference": "Bloque IV.03 - Administración de servidores de correo electrónico"
  },
  {
    "id": 2750,
    "section": "🔴 BLOQUE 15 — ADMINISTRACIÓN DE SISTEMAS",
    "topic": "Recuperación del sistema",
    "difficulty": "media",
    "text": "Si una actualización provoca que un servidor deje de funcionar correctamente, ¿cuál sería una actuación razonable del administrador?",
    "options": [
      "Eliminar todos los usuarios del dominio sin revisar la causa.",
      "Ignorar el problema si todavía responde al ping.",
      "Analizar logs, valorar reversión del parche o restauración según procedimiento documentado."
    ],
    "answer": 2,
    "explanation": "Ante una incidencia tras actualización se debe diagnosticar, aplicar plan de reversión o recuperación y documentar la resolución.",
    "reference": "Bloque IV.01 - Actualización, mantenimiento y reparación del sistema operativo"
  }
];