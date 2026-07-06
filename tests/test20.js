const questions = [
  {
    id: 1,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Conceptos básicos",
    difficulty: "media",
    text: "¿Qué es una máquina virtual?",
    options: [
      "Un sistema operativo ejecutado de forma aislada sobre recursos virtualizados",
      "Un programa que solo permite hacer copias de seguridad",
      "Un dispositivo físico dedicado exclusivamente al almacenamiento"
    ],
    answer: 0,
    explanation: "Una máquina virtual emula un equipo completo y ejecuta un sistema operativo invitado usando recursos del host.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 2,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Hipervisores",
    difficulty: "media",
    text: "¿Cuál es la función principal de un hipervisor?",
    options: [
      "Gestionar y repartir recursos físicos entre máquinas virtuales",
      "Convertir direcciones IP privadas en públicas",
      "Cifrar el tráfico HTTP de un servidor web"
    ],
    answer: 0,
    explanation: "El hipervisor permite crear, ejecutar y administrar máquinas virtuales sobre un hardware físico.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 3,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Hipervisores",
    difficulty: "media",
    text: "¿Qué caracteriza a un hipervisor de tipo 1?",
    options: [
      "Se ejecuta directamente sobre el hardware físico",
      "Necesita siempre un sistema operativo anfitrión previo",
      "Solo permite ejecutar contenedores Linux"
    ],
    answer: 0,
    explanation: "Un hipervisor tipo 1, también llamado bare-metal, se instala directamente sobre el hardware.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 4,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Hipervisores",
    difficulty: "media",
    text: "¿Cuál de los siguientes es un ejemplo típico de hipervisor de tipo 2?",
    options: [
      "VirtualBox instalado sobre Windows",
      "VMware ESXi instalado directamente en un servidor",
      "Microsoft Hyper-V Server en modo bare-metal"
    ],
    answer: 0,
    explanation: "VirtualBox sobre Windows funciona como hipervisor alojado, es decir, tipo 2.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 5,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Host e invitado",
    difficulty: "baja",
    text: "En virtualización, ¿qué se entiende por sistema invitado o guest?",
    options: [
      "El sistema operativo que se ejecuta dentro de una máquina virtual",
      "El servidor físico que proporciona CPU y memoria",
      "El dispositivo de red que conecta la máquina virtual a Internet"
    ],
    answer: 0,
    explanation: "El guest es el sistema operativo instalado dentro de la máquina virtual.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 6,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Host e invitado",
    difficulty: "baja",
    text: "En virtualización, ¿qué es el host?",
    options: [
      "El equipo físico o sistema que proporciona recursos a las máquinas virtuales",
      "El sistema operativo instalado dentro de la máquina virtual",
      "La copia congelada del estado de una máquina virtual"
    ],
    answer: 0,
    explanation: "El host es el sistema físico/anfitrión sobre el que se ejecutan las máquinas virtuales.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 7,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Recursos virtuales",
    difficulty: "media",
    text: "¿Qué recurso físico suele asignarse de forma virtual a una máquina virtual?",
    options: [
      "CPU, memoria RAM, disco y adaptador de red",
      "Únicamente dirección MAC",
      "Solo una impresora compartida"
    ],
    answer: 0,
    explanation: "Una VM recibe recursos virtualizados como vCPU, RAM, discos virtuales y tarjetas de red virtuales.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 8,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "vCPU",
    difficulty: "media",
    text: "¿Qué representa una vCPU en una máquina virtual?",
    options: [
      "Una CPU virtual asignada por el hipervisor a la máquina virtual",
      "Un procesador físico soldado en la placa base",
      "Un servicio de copia de seguridad de máquinas virtuales"
    ],
    answer: 0,
    explanation: "La vCPU es una abstracción de capacidad de procesamiento entregada a la VM por el hipervisor.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 9,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Memoria",
    difficulty: "media",
    text: "¿Qué problema puede producir una sobreasignación excesiva de memoria RAM en un entorno virtual?",
    options: [
      "Degradación del rendimiento por falta de memoria física real",
      "Aumento automático de la velocidad del procesador",
      "Eliminación de la necesidad de copias de seguridad"
    ],
    answer: 0,
    explanation: "Asignar más memoria virtual de la que el host puede soportar puede provocar swapping y pérdida de rendimiento.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 10,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Discos virtuales",
    difficulty: "media",
    text: "¿Qué es un disco virtual?",
    options: [
      "Un archivo o conjunto de archivos que simula un disco duro para una máquina virtual",
      "Un disco físico que no necesita sistema de archivos",
      "Una copia impresa de la configuración del servidor"
    ],
    answer: 0,
    explanation: "Los discos virtuales suelen almacenarse como archivos y son vistos por la VM como discos duros.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 11,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Provisionamiento",
    difficulty: "alta",
    text: "¿Qué diferencia principal hay entre un disco thin provisioned y uno thick provisioned?",
    options: [
      "El thin crece según uso; el thick reserva el espacio desde el inicio",
      "El thin siempre es más rápido que cualquier disco físico",
      "El thick no permite almacenar sistemas operativos"
    ],
    answer: 0,
    explanation: "Thin provisioning consume espacio real progresivamente; thick provisioning reserva todo el tamaño definido.",
    reference: "Bloque IV.2 — Sistemas de almacenamiento y virtualización"
  },
  {
    id: 12,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Snapshots",
    difficulty: "media",
    text: "¿Qué es un snapshot de una máquina virtual?",
    options: [
      "Una captura del estado de la VM en un momento concreto",
      "Una copia completa pensada siempre para archivo a largo plazo",
      "Un antivirus específico para entornos virtualizados"
    ],
    answer: 0,
    explanation: "Un snapshot guarda el estado de disco, configuración y, opcionalmente, memoria de una VM en un instante.",
    reference: "Bloque IV.2 — Backups de sistemas físicos y virtuales"
  },
  {
    id: 13,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Snapshots",
    difficulty: "alta",
    text: "¿Por qué un snapshot no debe sustituir a una copia de seguridad?",
    options: [
      "Porque depende del almacenamiento original y no es una copia independiente completa",
      "Porque solo sirve para cambiar la dirección IP de una máquina virtual",
      "Porque elimina automáticamente los discos virtuales"
    ],
    answer: 0,
    explanation: "El snapshot facilita volver a un estado anterior, pero no protege igual que un backup externo e independiente.",
    reference: "Bloque IV.2 — Backups de sistemas físicos y virtuales"
  },
  {
    id: 14,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Snapshots",
    difficulty: "media",
    text: "¿Cuál es un uso habitual de un snapshot?",
    options: [
      "Guardar el estado antes de aplicar una actualización o cambio importante",
      "Sustituir permanentemente toda política de backup",
      "Aumentar la velocidad física del procesador"
    ],
    answer: 0,
    explanation: "Antes de parches o cambios críticos, un snapshot permite volver rápidamente al estado anterior.",
    reference: "Bloque IV.2 — Backups de sistemas físicos y virtuales"
  },
  {
    id: 15,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Backups",
    difficulty: "media",
    text: "¿Qué ventaja aporta hacer backup a nivel de máquina virtual?",
    options: [
      "Permite proteger la VM completa, incluyendo sistema, datos y configuración",
      "Impide que sea necesario restaurar datos",
      "Evita tener que conocer el sistema operativo instalado"
    ],
    answer: 0,
    explanation: "El backup de VM puede recuperar la máquina completa, no solo archivos individuales.",
    reference: "Bloque IV.2 — Back up de sistemas físicos y virtuales"
  },
  {
    id: 16,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Backups",
    difficulty: "media",
    text: "¿Qué es una restauración bare-metal?",
    options: [
      "Recuperar un sistema completo sobre hardware físico desde una copia",
      "Restaurar únicamente un fichero eliminado",
      "Convertir una máquina física en contenedor"
    ],
    answer: 0,
    explanation: "La restauración bare-metal permite reconstruir un sistema completo incluso sobre hardware nuevo.",
    reference: "Bloque IV.2 — Políticas, sistemas y procedimientos de back up"
  },
  {
    id: 17,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Backups",
    difficulty: "alta",
    text: "¿Qué significa RPO en una política de backup?",
    options: [
      "Cantidad máxima de datos que se acepta perder medida en tiempo",
      "Tiempo máximo que tarda una CPU en virtualizar instrucciones",
      "Número de máquinas virtuales que admite un host"
    ],
    answer: 0,
    explanation: "El RPO define hasta qué punto temporal deben poder recuperarse los datos.",
    reference: "Bloque IV.2 — Políticas de backup y recuperación"
  },
  {
    id: 18,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Backups",
    difficulty: "alta",
    text: "¿Qué significa RTO en recuperación ante desastres?",
    options: [
      "Tiempo máximo aceptable para restaurar un servicio",
      "Cantidad máxima de memoria asignada a una VM",
      "Tipo de red virtual usada por el hipervisor"
    ],
    answer: 0,
    explanation: "El RTO indica cuánto tiempo puede estar indisponible un servicio antes de ser recuperado.",
    reference: "Bloque IV.2 — Procedimientos de recuperación"
  },
  {
    id: 19,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Alta disponibilidad",
    difficulty: "media",
    text: "¿Qué objetivo tiene la alta disponibilidad en un entorno virtualizado?",
    options: [
      "Reducir el tiempo de interrupción ante fallos de host o servicio",
      "Eliminar la necesidad de almacenamiento compartido en todos los casos",
      "Impedir que las máquinas virtuales usen memoria RAM"
    ],
    answer: 0,
    explanation: "La alta disponibilidad busca mantener servicios activos o recuperarlos rápidamente ante fallos.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 20,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Migración",
    difficulty: "alta",
    text: "¿Qué es la migración en caliente de una máquina virtual?",
    options: [
      "Mover una VM en ejecución de un host a otro con mínima interrupción",
      "Apagar una VM y copiarla manualmente a un USB",
      "Eliminar un snapshot antiguo para liberar espacio"
    ],
    answer: 0,
    explanation: "La migración en caliente permite trasladar una VM activa entre hosts sin parada apreciable.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 21,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Clúster",
    difficulty: "media",
    text: "En virtualización, ¿para qué se suele usar un clúster de hosts?",
    options: [
      "Para agrupar varios servidores físicos y repartir o recuperar cargas virtuales",
      "Para unir varias VLAN en una única dirección MAC",
      "Para sustituir todos los sistemas operativos por firmware"
    ],
    answer: 0,
    explanation: "Un clúster permite gestionar varios hosts y mejorar disponibilidad, balanceo y mantenimiento.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 22,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Almacenamiento",
    difficulty: "media",
    text: "¿Por qué se usa almacenamiento compartido en muchos entornos de virtualización?",
    options: [
      "Para que varios hosts puedan acceder a los discos de las máquinas virtuales",
      "Para impedir la migración de máquinas virtuales",
      "Para eliminar la necesidad de red local"
    ],
    answer: 0,
    explanation: "El almacenamiento compartido facilita migración, alta disponibilidad y gestión centralizada de VMs.",
    reference: "Bloque IV.2 — Sistemas de almacenamiento y virtualización"
  },
  {
    id: 23,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Almacenamiento",
    difficulty: "media",
    text: "¿Cuál de los siguientes puede utilizarse como almacenamiento compartido en un entorno virtual?",
    options: [
      "SAN o NAS",
      "Solo disquetes locales",
      "Únicamente memoria caché de CPU"
    ],
    answer: 0,
    explanation: "SAN y NAS son soluciones habituales para almacenamiento centralizado o compartido.",
    reference: "Bloque IV.2 — Sistemas de almacenamiento y virtualización"
  },
  {
    id: 24,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Red virtual",
    difficulty: "media",
    text: "¿Qué función cumple un switch virtual?",
    options: [
      "Conectar interfaces de máquinas virtuales entre sí y con redes físicas",
      "Asignar memoria RAM dinámica a los servidores",
      "Realizar copias incrementales de discos virtuales"
    ],
    answer: 0,
    explanation: "Un switch virtual permite la comunicación de las VMs con otras VMs o con la red externa.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 25,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Red virtual",
    difficulty: "media",
    text: "¿Qué representa una vNIC?",
    options: [
      "Una tarjeta de red virtual asignada a una máquina virtual",
      "Un disco virtual cifrado",
      "Una copia completa del sistema operativo"
    ],
    answer: 0,
    explanation: "La vNIC es el adaptador de red virtual que usa la VM para comunicarse.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 26,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Red virtual",
    difficulty: "alta",
    text: "¿Qué modo de red suele permitir que una VM salga a Internet usando la conexión del host sin aparecer como equipo independiente en la LAN?",
    options: [
      "NAT",
      "Bridge puro",
      "VLAN trunk obligatoria"
    ],
    answer: 0,
    explanation: "En modo NAT, la VM usa al host como intermediario para salir a otras redes.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 27,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Red virtual",
    difficulty: "alta",
    text: "¿Qué modo de red permite normalmente que una VM aparezca en la misma red local que el host como si fuera otro equipo más?",
    options: [
      "Bridge",
      "NAT cerrado",
      "Snapshot"
    ],
    answer: 0,
    explanation: "El modo bridge conecta la VM directamente a la red física a través del adaptador del host.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 28,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Plantillas",
    difficulty: "media",
    text: "¿Para qué sirve una plantilla de máquina virtual?",
    options: [
      "Para desplegar nuevas máquinas virtuales de forma rápida y homogénea",
      "Para cifrar exclusivamente el tráfico de red",
      "Para sustituir el hipervisor por un sistema operativo móvil"
    ],
    answer: 0,
    explanation: "Una plantilla permite crear VMs repetibles con una configuración base ya preparada.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 29,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Clonado",
    difficulty: "media",
    text: "¿Qué es clonar una máquina virtual?",
    options: [
      "Crear una copia de una máquina virtual existente",
      "Reducir su memoria RAM a cero",
      "Convertir una VLAN en una red física"
    ],
    answer: 0,
    explanation: "Clonar una VM genera otra máquina basada en la original.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 30,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Consolidación",
    difficulty: "media",
    text: "¿Qué ventaja aporta la consolidación de servidores mediante virtualización?",
    options: [
      "Ejecutar varios servidores lógicos sobre menos servidores físicos",
      "Eliminar completamente la administración de sistemas",
      "Impedir el uso de copias de seguridad"
    ],
    answer: 0,
    explanation: "La virtualización permite aprovechar mejor el hardware ejecutando varios servidores virtuales en un mismo host.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 31,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Riesgos",
    difficulty: "alta",
    text: "¿Qué riesgo aparece al concentrar muchas máquinas virtuales en un único host físico?",
    options: [
      "Que el fallo del host afecte a múltiples servicios virtuales",
      "Que cada VM necesite obligatoriamente una fuente de alimentación propia",
      "Que no puedan existir copias de seguridad"
    ],
    answer: 0,
    explanation: "La consolidación mejora eficiencia, pero aumenta el impacto si no hay redundancia o alta disponibilidad.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 32,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Seguridad",
    difficulty: "media",
    text: "¿Qué buena práctica de seguridad debe aplicarse a las máquinas virtuales?",
    options: [
      "Mantenerlas actualizadas igual que los servidores físicos",
      "No aplicar parches porque son sistemas virtuales",
      "Compartir siempre el usuario administrador entre todas"
    ],
    answer: 0,
    explanation: "Una VM sigue siendo un sistema operativo real y debe parchearse, protegerse y monitorizarse.",
    reference: "Bloque IV.5 — Seguridad de los sistemas de información"
  },
  {
    id: 33,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Seguridad",
    difficulty: "alta",
    text: "¿Qué es el aislamiento en virtualización?",
    options: [
      "La separación lógica entre máquinas virtuales para que no interfieran entre sí",
      "El apagado automático de todos los hosts",
      "La eliminación de todas las interfaces de red"
    ],
    answer: 0,
    explanation: "El aislamiento evita que una VM afecte directamente a otras o al host, salvo vulnerabilidades o mala configuración.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 34,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "VDI",
    difficulty: "media",
    text: "¿Qué significa VDI?",
    options: [
      "Infraestructura de escritorios virtuales",
      "Identificador virtual de disco",
      "Interfaz directa de volumen"
    ],
    answer: 0,
    explanation: "VDI permite ofrecer escritorios de usuario ejecutados de forma centralizada en servidores.",
    reference: "Bloque IV.2 — Virtualización de puestos de usuario"
  },
  {
    id: 35,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "VDI",
    difficulty: "media",
    text: "¿Cuál es una ventaja habitual de la virtualización de puestos de usuario?",
    options: [
      "Centralizar la administración y despliegue de escritorios",
      "Eliminar completamente la necesidad de autenticación",
      "Impedir el acceso remoto a los usuarios"
    ],
    answer: 0,
    explanation: "La VDI facilita administración centralizada, control de imágenes y acceso desde distintos dispositivos.",
    reference: "Bloque IV.2 — Virtualización de puestos de usuario"
  },
  {
    id: 36,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "VDI",
    difficulty: "alta",
    text: "¿Qué dispositivo se asocia habitualmente a entornos VDI por tener pocos recursos locales y depender del servidor?",
    options: [
      "Cliente ligero",
      "Router de núcleo",
      "Disco SAN"
    ],
    answer: 0,
    explanation: "Un cliente ligero accede a un escritorio remoto o virtual con mínima capacidad local.",
    reference: "Bloque IV.2 — Virtualización de puestos de usuario"
  },
  {
    id: 37,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Contenedores",
    difficulty: "media",
    text: "¿Qué es un contenedor?",
    options: [
      "Un entorno aislado para ejecutar una aplicación y sus dependencias compartiendo el kernel del host",
      "Una máquina virtual completa con BIOS y hardware emulado siempre",
      "Un tipo de cable de red usado en CPD"
    ],
    answer: 0,
    explanation: "Los contenedores aíslan procesos y dependencias, pero comparten el kernel del sistema anfitrión.",
    reference: "Bloque IV.3 — Administración de contenedores y microservicios"
  },
  {
    id: 38,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Contenedores",
    difficulty: "media",
    text: "¿Cuál es una diferencia clave entre contenedores y máquinas virtuales?",
    options: [
      "Los contenedores comparten el kernel del host; las VM ejecutan su propio sistema operativo invitado",
      "Las VM no pueden usar red y los contenedores sí",
      "Los contenedores siempre requieren más recursos que una VM completa"
    ],
    answer: 0,
    explanation: "La VM virtualiza hardware completo; el contenedor virtualiza a nivel de sistema operativo.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 39,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Docker",
    difficulty: "baja",
    text: "¿Qué herramienta se asocia de forma habitual con la ejecución de contenedores?",
    options: [
      "Docker",
      "BIOS",
      "SMTP"
    ],
    answer: 0,
    explanation: "Docker es una plataforma muy utilizada para crear, distribuir y ejecutar contenedores.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 40,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Imágenes de contenedor",
    difficulty: "media",
    text: "¿Qué es una imagen de contenedor?",
    options: [
      "Una plantilla inmutable con la aplicación y dependencias necesarias para crear contenedores",
      "Una captura de pantalla del escritorio virtual",
      "Un disco físico conectado por fibra óptica"
    ],
    answer: 0,
    explanation: "La imagen contiene lo necesario para instanciar uno o varios contenedores.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 41,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Contenedores",
    difficulty: "media",
    text: "¿Qué ocurre normalmente al eliminar un contenedor sin volúmenes persistentes?",
    options: [
      "Se pierden los datos almacenados solo dentro del contenedor",
      "Se borra automáticamente todo el sistema operativo host",
      "Se convierte en una máquina virtual"
    ],
    answer: 0,
    explanation: "Los datos internos del contenedor suelen ser efímeros si no se usan volúmenes o almacenamiento persistente.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 42,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Volúmenes",
    difficulty: "media",
    text: "¿Para qué se usan los volúmenes en contenedores?",
    options: [
      "Para persistir datos fuera del ciclo de vida del contenedor",
      "Para aumentar la velocidad del monitor",
      "Para sustituir la dirección IP por una dirección MAC"
    ],
    answer: 0,
    explanation: "Los volúmenes permiten conservar datos aunque el contenedor sea eliminado o recreado.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 43,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Microservicios",
    difficulty: "media",
    text: "¿Qué caracteriza a una arquitectura de microservicios?",
    options: [
      "Dividir una aplicación en servicios pequeños, independientes y comunicados entre sí",
      "Ejecutar toda la aplicación como un único bloque inseparable",
      "Obligar a que todos los servicios estén en el mismo servidor físico"
    ],
    answer: 0,
    explanation: "Los microservicios dividen funcionalidades en componentes independientes que pueden desplegarse por separado.",
    reference: "Bloque IV.3 — Administración de contenedores y microservicios"
  },
  {
    id: 44,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Microservicios",
    difficulty: "alta",
    text: "¿Qué ventaja aporta el uso de contenedores en microservicios?",
    options: [
      "Facilitan despliegues independientes y portabilidad de cada servicio",
      "Impiden escalar servicios de forma separada",
      "Obligan a usar una única base de datos local por servidor físico"
    ],
    answer: 0,
    explanation: "Los contenedores encajan bien con microservicios porque empaquetan cada servicio con sus dependencias.",
    reference: "Bloque IV.3 — Administración de contenedores y microservicios"
  },
  {
    id: 45,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Orquestación",
    difficulty: "alta",
    text: "¿Qué finalidad tiene un orquestador de contenedores?",
    options: [
      "Automatizar despliegue, escalado y gestión de contenedores",
      "Formatear discos duros físicos únicamente",
      "Traducir direcciones DNS a direcciones MAC"
    ],
    answer: 0,
    explanation: "Los orquestadores coordinan múltiples contenedores, su disponibilidad, escalado y red.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 46,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Kubernetes",
    difficulty: "alta",
    text: "¿Con qué se asocia principalmente Kubernetes?",
    options: [
      "Orquestación de contenedores",
      "Virtualización de BIOS",
      "Gestión exclusiva de impresoras"
    ],
    answer: 0,
    explanation: "Kubernetes es una plataforma de orquestación para desplegar y gestionar contenedores.",
    reference: "Bloque IV.3 — Administración de contenedores"
  },
  {
    id: 47,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Monitorización",
    difficulty: "media",
    text: "¿Qué debe monitorizarse en un entorno virtualizado?",
    options: [
      "CPU, memoria, disco, red y estado de hosts y máquinas virtuales",
      "Solo el color del escritorio",
      "Únicamente el número de usuarios de correo"
    ],
    answer: 0,
    explanation: "La monitorización permite detectar saturación, fallos y problemas de rendimiento.",
    reference: "Bloque IV.4 — Monitorización y control"
  },
  {
    id: 48,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "VMware / Hyper-V",
    difficulty: "media",
    text: "¿Qué tienen en común VMware vSphere y Microsoft Hyper-V?",
    options: [
      "Son tecnologías utilizadas para virtualización de servidores",
      "Son protocolos de correo electrónico",
      "Son sistemas de archivos exclusivos de Linux"
    ],
    answer: 0,
    explanation: "Ambas son plataformas habituales para crear y administrar máquinas virtuales.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 49,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Paravirtualización",
    difficulty: "alta",
    text: "¿Qué busca la paravirtualización?",
    options: [
      "Mejorar el rendimiento haciendo que el sistema invitado colabore con el hipervisor",
      "Eliminar completamente el sistema operativo invitado",
      "Convertir direcciones IPv4 en IPv6"
    ],
    answer: 0,
    explanation: "En paravirtualización, el guest es consciente del entorno virtual y puede comunicarse mejor con el hipervisor.",
    reference: "Bloque IV.2 — Virtualización de sistemas"
  },
  {
    id: 50,
    section: "BLOQUE 8 — VIRTUALIZACIÓN",
    topic: "Repaso global",
    difficulty: "alta",
    text: "¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      "Un snapshot ayuda a volver a un estado anterior, pero no sustituye una política de backup",
      "Un contenedor siempre incluye un sistema operativo completo con kernel propio",
      "Un hipervisor tipo 1 necesita obligatoriamente ejecutarse encima de Windows"
    ],
    answer: 0,
    explanation: "El snapshot es útil para cambios puntuales, pero la protección real requiere backups independientes y planificados.",
    reference: "Bloque IV.2 — Backups y virtualización de sistemas"
  }
];