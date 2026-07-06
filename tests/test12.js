const questions = [
  {
    id: 1,
    section: "Bases de Datos",
    topic: "Normalización",
    difficulty: "media",
    text: "¿Cuál es el objetivo principal de la normalización en bases de datos relacionales?",
    options: [
      "Reducir redundancias y evitar anomalías de inserción, actualización y borrado",
      "Aumentar siempre el número de columnas de una tabla",
      "Eliminar todas las claves primarias de la base de datos"
    ],
    answer: 0,
    explanation: "La normalización organiza los datos para reducir duplicidades y evitar anomalías.",
    reference: "AENA TIC - Bases de datos - Normalización"
  },
  {
    id: 2,
    section: "Bases de Datos",
    topic: "Primera Forma Normal",
    difficulty: "media",
    text: "Una tabla está en Primera Forma Normal cuando:",
    options: [
      "Todos los atributos contienen valores atómicos y no hay grupos repetitivos",
      "Todos los atributos dependen de una clave ajena",
      "No existe ninguna clave primaria"
    ],
    answer: 0,
    explanation: "La 1FN exige valores indivisibles y ausencia de grupos repetidos.",
    reference: "AENA TIC - Bases de datos - 1FN"
  },
  {
    id: 3,
    section: "Bases de Datos",
    topic: "Segunda Forma Normal",
    difficulty: "alta",
    text: "Para que una tabla esté en Segunda Forma Normal debe estar en 1FN y además:",
    options: [
      "Todos los atributos no clave deben depender completamente de la clave primaria",
      "Todos los atributos deben depender de una clave ajena",
      "Debe tener al menos tres claves primarias"
    ],
    answer: 0,
    explanation: "La 2FN elimina dependencias parciales respecto a claves compuestas.",
    reference: "AENA TIC - Bases de datos - 2FN"
  },
  {
    id: 4,
    section: "Bases de Datos",
    topic: "Tercera Forma Normal",
    difficulty: "alta",
    text: "La Tercera Forma Normal busca eliminar principalmente:",
    options: [
      "Dependencias transitivas",
      "Claves primarias",
      "Relaciones entre tablas"
    ],
    answer: 0,
    explanation: "La 3FN elimina atributos no clave que dependen de otros atributos no clave.",
    reference: "AENA TIC - Bases de datos - 3FN"
  },
  {
    id: 5,
    section: "Bases de Datos",
    topic: "Modelo Relacional",
    difficulty: "media",
    text: "En el modelo relacional, una tabla representa normalmente:",
    options: [
      "Una relación",
      "Un índice físico obligatorio",
      "Un protocolo de red"
    ],
    answer: 0,
    explanation: "En el modelo relacional, las tablas representan relaciones formadas por filas y columnas.",
    reference: "AENA TIC - Modelo relacional"
  },
  {
    id: 6,
    section: "Bases de Datos",
    topic: "Clave Primaria",
    difficulty: "baja",
    text: "¿Qué característica debe tener una clave primaria?",
    options: [
      "Identificar de forma única cada registro",
      "Aceptar siempre valores duplicados",
      "Ser siempre una clave externa"
    ],
    answer: 0,
    explanation: "La clave primaria identifica inequívocamente cada fila de una tabla.",
    reference: "AENA TIC - Claves"
  },
  {
    id: 7,
    section: "Bases de Datos",
    topic: "Clave Foránea",
    difficulty: "media",
    text: "Una clave foránea sirve para:",
    options: [
      "Relacionar una tabla con la clave primaria de otra tabla",
      "Eliminar la necesidad de claves primarias",
      "Crear copias de seguridad automáticas"
    ],
    answer: 0,
    explanation: "La clave foránea permite establecer relaciones entre tablas.",
    reference: "AENA TIC - Claves foráneas"
  },
  {
    id: 8,
    section: "Bases de Datos",
    topic: "Integridad Referencial",
    difficulty: "media",
    text: "La integridad referencial garantiza que:",
    options: [
      "Las claves foráneas apunten a registros existentes",
      "Todas las tablas tengan el mismo número de columnas",
      "No pueda existir más de una tabla en una base de datos"
    ],
    answer: 0,
    explanation: "Evita referencias huérfanas entre tablas relacionadas.",
    reference: "AENA TIC - Integridad referencial"
  },
  {
    id: 9,
    section: "Bases de Datos",
    topic: "Entidad-Relación",
    difficulty: "media",
    text: "En un modelo entidad-relación, una entidad representa:",
    options: [
      "Un objeto o concepto del mundo real sobre el que se desea almacenar información",
      "Una instrucción SQL",
      "Un índice de rendimiento"
    ],
    answer: 0,
    explanation: "Una entidad puede ser Cliente, Producto, Pedido, Empleado, etc.",
    reference: "AENA TIC - Modelo ER"
  },
  {
    id: 10,
    section: "Bases de Datos",
    topic: "Atributos",
    difficulty: "baja",
    text: "En el modelo entidad-relación, un atributo es:",
    options: [
      "Una propiedad o característica de una entidad",
      "Una tabla duplicada",
      "Una copia de seguridad incremental"
    ],
    answer: 0,
    explanation: "Por ejemplo, nombre, DNI o dirección pueden ser atributos de Cliente.",
    reference: "AENA TIC - Modelo ER"
  },
  {
    id: 11,
    section: "Bases de Datos",
    topic: "Relaciones",
    difficulty: "media",
    text: "Una relación uno a muchos significa que:",
    options: [
      "Un registro de una tabla puede relacionarse con varios registros de otra",
      "Cada tabla debe tener una sola columna",
      "Una base de datos solo puede tener una tabla"
    ],
    answer: 0,
    explanation: "Ejemplo: un cliente puede tener muchos pedidos.",
    reference: "AENA TIC - Cardinalidad"
  },
  {
    id: 12,
    section: "Bases de Datos",
    topic: "Cardinalidad",
    difficulty: "media",
    text: "¿Qué indica la cardinalidad en un modelo de datos?",
    options: [
      "El número de ocurrencias de una entidad que pueden relacionarse con otra",
      "El tamaño físico del disco duro",
      "La velocidad de ejecución de una consulta"
    ],
    answer: 0,
    explanation: "La cardinalidad expresa relaciones 1:1, 1:N o N:M.",
    reference: "AENA TIC - Cardinalidad"
  },
  {
    id: 13,
    section: "Bases de Datos",
    topic: "Relación N:M",
    difficulty: "alta",
    text: "En una base de datos relacional, una relación muchos a muchos suele resolverse mediante:",
    options: [
      "Una tabla intermedia",
      "Una eliminación de claves primarias",
      "Un único campo de texto con todos los valores"
    ],
    answer: 0,
    explanation: "Las relaciones N:M se implementan con una tabla puente o intermedia.",
    reference: "AENA TIC - Relaciones N:M"
  },
  {
    id: 14,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "baja",
    text: "¿Qué instrucción SQL se utiliza para consultar datos?",
    options: [
      "SELECT",
      "DELETE",
      "DROP"
    ],
    answer: 0,
    explanation: "SELECT permite recuperar datos de una o varias tablas.",
    reference: "AENA TIC - SQL básico"
  },
  {
    id: 15,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "baja",
    text: "¿Qué instrucción SQL se utiliza para insertar registros?",
    options: [
      "INSERT",
      "ALTER",
      "GRANT"
    ],
    answer: 0,
    explanation: "INSERT añade nuevas filas a una tabla.",
    reference: "AENA TIC - SQL básico"
  },
  {
    id: 16,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "baja",
    text: "¿Qué instrucción SQL se utiliza para modificar registros existentes?",
    options: [
      "UPDATE",
      "CREATE",
      "COMMIT"
    ],
    answer: 0,
    explanation: "UPDATE modifica datos ya existentes en una tabla.",
    reference: "AENA TIC - SQL básico"
  },
  {
    id: 17,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "baja",
    text: "¿Qué instrucción SQL se utiliza para eliminar registros de una tabla?",
    options: [
      "DELETE",
      "SELECT",
      "JOIN"
    ],
    answer: 0,
    explanation: "DELETE elimina filas, normalmente aplicando una condición WHERE.",
    reference: "AENA TIC - SQL básico"
  },
  {
    id: 18,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "media",
    text: "¿Para qué sirve la cláusula WHERE en SQL?",
    options: [
      "Para filtrar registros según una condición",
      "Para crear una base de datos nueva",
      "Para definir una clave primaria automáticamente"
    ],
    answer: 0,
    explanation: "WHERE limita los registros afectados o devueltos por una consulta.",
    reference: "AENA TIC - SQL WHERE"
  },
  {
    id: 19,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "media",
    text: "¿Qué cláusula SQL se utiliza para ordenar los resultados?",
    options: [
      "ORDER BY",
      "GROUP KEY",
      "SORT TABLE"
    ],
    answer: 0,
    explanation: "ORDER BY permite ordenar resultados de forma ascendente o descendente.",
    reference: "AENA TIC - SQL ORDER BY"
  },
  {
    id: 20,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "media",
    text: "¿Qué cláusula SQL permite agrupar registros?",
    options: [
      "GROUP BY",
      "ORDER BY",
      "WHERE BY"
    ],
    answer: 0,
    explanation: "GROUP BY agrupa filas para aplicar funciones de agregación.",
    reference: "AENA TIC - SQL GROUP BY"
  },
  {
    id: 21,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "media",
    text: "¿Qué función SQL devuelve el número de registros?",
    options: [
      "COUNT()",
      "SUM()",
      "AVG()"
    ],
    answer: 0,
    explanation: "COUNT() cuenta registros o valores no nulos.",
    reference: "AENA TIC - Funciones SQL"
  },
  {
    id: 22,
    section: "Bases de Datos",
    topic: "SQL",
    difficulty: "media",
    text: "¿Qué función SQL calcula la media de un conjunto de valores?",
    options: [
      "AVG()",
      "MAX()",
      "COUNT()"
    ],
    answer: 0,
    explanation: "AVG() devuelve el promedio de una columna numérica.",
    reference: "AENA TIC - Funciones SQL"
  },
  {
    id: 23,
    section: "Bases de Datos",
    topic: "JOIN",
    difficulty: "media",
    text: "¿Para qué se utiliza un JOIN en SQL?",
    options: [
      "Para combinar datos de dos o más tablas relacionadas",
      "Para eliminar una base de datos",
      "Para comprimir tablas"
    ],
    answer: 0,
    explanation: "JOIN permite consultar información repartida entre varias tablas.",
    reference: "AENA TIC - SQL JOIN"
  },
  {
    id: 24,
    section: "Bases de Datos",
    topic: "INNER JOIN",
    difficulty: "alta",
    text: "Un INNER JOIN devuelve:",
    options: [
      "Solo los registros con coincidencia en ambas tablas",
      "Todos los registros de la tabla izquierda aunque no coincidan",
      "Todos los registros de ambas tablas sin relación"
    ],
    answer: 0,
    explanation: "INNER JOIN devuelve únicamente las filas que cumplen la condición de unión.",
    reference: "AENA TIC - SQL JOIN"
  },
  {
    id: 25,
    section: "Bases de Datos",
    topic: "LEFT JOIN",
    difficulty: "alta",
    text: "Un LEFT JOIN devuelve:",
    options: [
      "Todos los registros de la tabla izquierda y los coincidentes de la derecha",
      "Solo registros duplicados",
      "Solo registros sin clave primaria"
    ],
    answer: 0,
    explanation: "LEFT JOIN mantiene todos los registros de la tabla izquierda.",
    reference: "AENA TIC - SQL JOIN"
  },
  {
    id: 26,
    section: "Bases de Datos",
    topic: "DDL",
    difficulty: "media",
    text: "¿Cuál de las siguientes instrucciones pertenece al lenguaje de definición de datos DDL?",
    options: [
      "CREATE TABLE",
      "SELECT",
      "UPDATE"
    ],
    answer: 0,
    explanation: "CREATE TABLE define estructuras de base de datos.",
    reference: "AENA TIC - SQL DDL"
  },
  {
    id: 27,
    section: "Bases de Datos",
    topic: "DML",
    difficulty: "media",
    text: "¿Cuál de las siguientes instrucciones pertenece al lenguaje de manipulación de datos DML?",
    options: [
      "INSERT",
      "CREATE DATABASE",
      "DROP TABLE"
    ],
    answer: 0,
    explanation: "INSERT, UPDATE, DELETE y SELECT suelen asociarse a DML.",
    reference: "AENA TIC - SQL DML"
  },
  {
    id: 28,
    section: "Bases de Datos",
    topic: "DCL",
    difficulty: "alta",
    text: "¿Qué instrucción SQL se asocia al control de permisos?",
    options: [
      "GRANT",
      "SELECT",
      "WHERE"
    ],
    answer: 0,
    explanation: "GRANT permite conceder permisos a usuarios o roles.",
    reference: "AENA TIC - SQL DCL"
  },
  {
    id: 29,
    section: "Bases de Datos",
    topic: "Transacciones",
    difficulty: "media",
    text: "¿Qué instrucción confirma definitivamente una transacción?",
    options: [
      "COMMIT",
      "ROLLBACK",
      "DROP"
    ],
    answer: 0,
    explanation: "COMMIT guarda los cambios realizados en la transacción.",
    reference: "AENA TIC - Transacciones"
  },
  {
    id: 30,
    section: "Bases de Datos",
    topic: "Transacciones",
    difficulty: "media",
    text: "¿Qué instrucción deshace una transacción no confirmada?",
    options: [
      "ROLLBACK",
      "COMMIT",
      "INSERT"
    ],
    answer: 0,
    explanation: "ROLLBACK revierte los cambios desde el inicio de la transacción o punto de control.",
    reference: "AENA TIC - Transacciones"
  },
  {
    id: 31,
    section: "Bases de Datos",
    topic: "ACID",
    difficulty: "alta",
    text: "¿Qué propiedad ACID garantiza que una transacción se ejecuta completa o no se ejecuta?",
    options: [
      "Atomicidad",
      "Aislamiento",
      "Durabilidad"
    ],
    answer: 0,
    explanation: "La atomicidad implica todo o nada.",
    reference: "AENA TIC - ACID"
  },
  {
    id: 32,
    section: "Bases de Datos",
    topic: "ACID",
    difficulty: "alta",
    text: "¿Qué propiedad ACID garantiza que los cambios confirmados sobreviven a fallos posteriores?",
    options: [
      "Durabilidad",
      "Consistencia",
      "Aislamiento"
    ],
    answer: 0,
    explanation: "La durabilidad asegura la persistencia de los cambios confirmados.",
    reference: "AENA TIC - ACID"
  },
  {
    id: 33,
    section: "Bases de Datos",
    topic: "Índices",
    difficulty: "media",
    text: "¿Para qué se utiliza normalmente un índice en una base de datos?",
    options: [
      "Para acelerar búsquedas y consultas",
      "Para sustituir todas las claves primarias",
      "Para eliminar automáticamente registros antiguos"
    ],
    answer: 0,
    explanation: "Los índices mejoran el rendimiento de consultas, aunque ocupan espacio y pueden penalizar escrituras.",
    reference: "AENA TIC - Índices"
  },
  {
    id: 34,
    section: "Bases de Datos",
    topic: "Índices",
    difficulty: "alta",
    text: "¿Cuál puede ser una desventaja de usar muchos índices?",
    options: [
      "Aumentan el coste de inserciones, actualizaciones y borrados",
      "Impiden usar claves primarias",
      "Eliminan la integridad referencial"
    ],
    answer: 0,
    explanation: "Cada cambio de datos puede requerir actualizar también los índices.",
    reference: "AENA TIC - Índices"
  },
  {
    id: 35,
    section: "Bases de Datos",
    topic: "Vistas",
    difficulty: "media",
    text: "Una vista en SQL es:",
    options: [
      "Una consulta almacenada que se presenta como una tabla virtual",
      "Una copia física obligatoria de toda la base de datos",
      "Un tipo de memoria RAM"
    ],
    answer: 0,
    explanation: "Las vistas simplifican consultas y controlan el acceso a determinados datos.",
    reference: "AENA TIC - Vistas"
  },
  {
    id: 36,
    section: "Bases de Datos",
    topic: "Procedimientos almacenados",
    difficulty: "media",
    text: "Un procedimiento almacenado es:",
    options: [
      "Un conjunto de instrucciones SQL guardadas en el SGBD para ejecutarse cuando se invoque",
      "Una tabla sin clave primaria",
      "Un sistema de backup externo"
    ],
    answer: 0,
    explanation: "Los procedimientos almacenados encapsulan lógica dentro del gestor de base de datos.",
    reference: "AENA TIC - Procedimientos almacenados"
  },
  {
    id: 37,
    section: "Bases de Datos",
    topic: "Triggers",
    difficulty: "alta",
    text: "Un trigger o disparador se ejecuta normalmente:",
    options: [
      "Automáticamente ante eventos como INSERT, UPDATE o DELETE",
      "Solo al arrancar físicamente el servidor",
      "Cuando se abre el navegador web"
    ],
    answer: 0,
    explanation: "Los triggers reaccionan a eventos sobre tablas.",
    reference: "AENA TIC - Triggers"
  },
  {
    id: 38,
    section: "Bases de Datos",
    topic: "SGBD",
    difficulty: "baja",
    text: "¿Qué significa SGBD?",
    options: [
      "Sistema Gestor de Bases de Datos",
      "Sistema General de Buses de Datos",
      "Servicio Global de Backup Diferencial"
    ],
    answer: 0,
    explanation: "Un SGBD permite definir, manipular, administrar y consultar bases de datos.",
    reference: "AENA TIC - SGBD"
  },
  {
    id: 39,
    section: "Bases de Datos",
    topic: "SGBD relacional",
    difficulty: "media",
    text: "¿Cuál de los siguientes es un SGBD relacional?",
    options: [
      "MySQL",
      "MongoDB",
      "Redis"
    ],
    answer: 0,
    explanation: "MySQL es un sistema gestor de bases de datos relacional.",
    reference: "AENA TIC - SGBD relacionales"
  },
  {
    id: 40,
    section: "Bases de Datos",
    topic: "NoSQL",
    difficulty: "media",
    text: "Una base de datos NoSQL se caracteriza generalmente por:",
    options: [
      "No seguir necesariamente el modelo relacional clásico de tablas",
      "No poder almacenar datos",
      "Usar obligatoriamente SQL estándar ANSI"
    ],
    answer: 0,
    explanation: "NoSQL engloba modelos como documentos, clave-valor, columnas o grafos.",
    reference: "AENA TIC - NoSQL"
  },
  {
    id: 41,
    section: "Bases de Datos",
    topic: "NoSQL",
    difficulty: "media",
    text: "MongoDB es un ejemplo típico de base de datos:",
    options: [
      "Documental",
      "Relacional pura",
      "Jerárquica de solo lectura"
    ],
    answer: 0,
    explanation: "MongoDB almacena documentos, normalmente en formato BSON.",
    reference: "AENA TIC - NoSQL documental"
  },
  {
    id: 42,
    section: "Bases de Datos",
    topic: "Backup",
    difficulty: "media",
    text: "En administración de bases de datos, una copia de seguridad sirve para:",
    options: [
      "Permitir la recuperación de datos ante pérdida, fallo o corrupción",
      "Aumentar automáticamente la velocidad de la CPU",
      "Eliminar todas las restricciones de integridad"
    ],
    answer: 0,
    explanation: "Los backups son esenciales para recuperación ante incidentes.",
    reference: "AENA TIC - Backups BBDD"
  },
  {
    id: 43,
    section: "Bases de Datos",
    topic: "Backup completo",
    difficulty: "media",
    text: "Un backup completo consiste en:",
    options: [
      "Copiar todos los datos seleccionados",
      "Copiar solo los cambios desde el último backup completo",
      "Copiar únicamente los permisos de usuario"
    ],
    answer: 0,
    explanation: "El backup completo incluye la totalidad del conjunto definido.",
    reference: "AENA TIC - Tipos de backup"
  },
  {
    id: 44,
    section: "Bases de Datos",
    topic: "Backup incremental",
    difficulty: "alta",
    text: "Un backup incremental copia:",
    options: [
      "Los cambios desde el último backup, sea completo o incremental",
      "Siempre todos los datos de la base de datos",
      "Solo los archivos temporales"
    ],
    answer: 0,
    explanation: "El incremental reduce espacio, pero puede requerir varias piezas para restaurar.",
    reference: "AENA TIC - Backup incremental"
  },
  {
    id: 45,
    section: "Bases de Datos",
    topic: "Backup diferencial",
    difficulty: "alta",
    text: "Un backup diferencial copia:",
    options: [
      "Los cambios desde el último backup completo",
      "Los cambios desde el último backup incremental",
      "Solo la estructura vacía de las tablas"
    ],
    answer: 0,
    explanation: "El diferencial crece hasta que se realiza un nuevo completo.",
    reference: "AENA TIC - Backup diferencial"
  },
  {
    id: 46,
    section: "Bases de Datos",
    topic: "Recuperación",
    difficulty: "media",
    text: "El objetivo principal de un plan de recuperación de bases de datos es:",
    options: [
      "Restaurar el servicio y los datos tras un fallo",
      "Evitar que existan usuarios",
      "Eliminar las consultas SQL"
    ],
    answer: 0,
    explanation: "La recuperación busca minimizar pérdida de datos y tiempo de indisponibilidad.",
    reference: "AENA TIC - Recuperación BBDD"
  },
  {
    id: 47,
    section: "Bases de Datos",
    topic: "Administración BBDD",
    difficulty: "media",
    text: "Una responsabilidad habitual del administrador de bases de datos es:",
    options: [
      "Gestionar usuarios, permisos, copias de seguridad, rendimiento y disponibilidad",
      "Diseñar exclusivamente tarjetas gráficas",
      "Configurar solo monitores físicos"
    ],
    answer: 0,
    explanation: "El DBA administra seguridad, disponibilidad, rendimiento, backups y mantenimiento.",
    reference: "AENA TIC - Administración de BBDD"
  },
  {
    id: 48,
    section: "Bases de Datos",
    topic: "Restricciones",
    difficulty: "media",
    text: "¿Para qué sirve una restricción UNIQUE?",
    options: [
      "Para impedir valores duplicados en una columna o conjunto de columnas",
      "Para permitir siempre valores repetidos",
      "Para borrar datos automáticamente"
    ],
    answer: 0,
    explanation: "UNIQUE garantiza unicidad en los valores afectados por la restricción.",
    reference: "AENA TIC - Restricciones SQL"
  },
  {
    id: 49,
    section: "Bases de Datos",
    topic: "Restricciones",
    difficulty: "media",
    text: "¿Para qué sirve una restricción NOT NULL?",
    options: [
      "Para impedir que una columna acepte valores nulos",
      "Para obligar a que todos los valores sean cero",
      "Para crear una clave externa automáticamente"
    ],
    answer: 0,
    explanation: "NOT NULL obliga a que el campo tenga un valor.",
    reference: "AENA TIC - Restricciones SQL"
  },
  {
    id: 50,
    section: "Bases de Datos",
    topic: "Anomalías",
    difficulty: "alta",
    text: "Una anomalía de actualización puede producirse cuando:",
    options: [
      "El mismo dato aparece repetido en varios registros y se modifica solo en algunos",
      "Una tabla tiene clave primaria",
      "Una consulta usa SELECT"
    ],
    answer: 0,
    explanation: "La redundancia puede provocar inconsistencias si no se actualizan todas las copias del dato.",
    reference: "AENA TIC - Normalización y anomalías"
  }
];