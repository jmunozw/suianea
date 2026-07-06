const questions = [
  {
    id: 1,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SGBD",
    difficulty: "Fácil",
    text: "¿Qué es un sistema gestor de bases de datos?",
    options: [
      "Un lenguaje de programación usado únicamente para crear páginas web",
      "Un software que permite definir, crear, mantener y controlar el acceso a una base de datos",
      "Un dispositivo físico de almacenamiento conectado a la red"
    ],
    answer: 1,
    explanation: "Un SGBD es el software encargado de gestionar bases de datos: estructura, consultas, usuarios, seguridad, integridad y recuperación.",
    reference: "Bloque II.05 — Sistemas de gestión de bases de datos"
  },
  {
    id: 2,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Modelo relacional",
    difficulty: "Fácil",
    text: "En el modelo relacional, ¿cómo se organiza principalmente la información?",
    options: [
      "En tablas formadas por filas y columnas",
      "En carpetas del sistema operativo",
      "En paquetes TCP/IP"
    ],
    answer: 0,
    explanation: "El modelo relacional representa los datos mediante tablas, donde las filas son registros y las columnas son atributos.",
    reference: "Bloque III.02 — Modelo lógico relacional"
  },
  {
    id: 3,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Claves",
    difficulty: "Fácil",
    text: "¿Qué función tiene una clave primaria en una tabla?",
    options: [
      "Ordenar automáticamente todos los datos por fecha",
      "Permitir que existan registros duplicados",
      "Identificar de forma única cada fila de la tabla"
    ],
    answer: 2,
    explanation: "La clave primaria identifica de forma única cada registro y no debe contener valores repetidos ni nulos.",
    reference: "Bloque III.02 — Diseño lógico de bases de datos"
  },
  {
    id: 4,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Claves",
    difficulty: "Fácil",
    text: "¿Qué es una clave foránea?",
    options: [
      "Una clave que cifra todos los datos de una tabla",
      "Un campo que referencia la clave primaria de otra tabla",
      "Una clave usada exclusivamente para iniciar sesión"
    ],
    answer: 1,
    explanation: "La clave foránea permite relacionar tablas y mantener la integridad referencial entre ellas.",
    reference: "Bloque III.02 — Modelo lógico relacional"
  },
  {
    id: 5,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Claves",
    difficulty: "Media",
    text: "¿Qué es una clave candidata?",
    options: [
      "Un atributo o conjunto de atributos que podría identificar de forma única cada registro",
      "Una clave temporal que se elimina al cerrar la sesión",
      "Un índice creado siempre sobre campos de texto"
    ],
    answer: 0,
    explanation: "Una clave candidata puede identificar de forma única cada fila. De entre las claves candidatas se elige una clave primaria.",
    reference: "Bloque III.02 — Diseño lógico de bases de datos"
  },
  {
    id: 6,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Modelo entidad-relación",
    difficulty: "Fácil",
    text: "En un modelo entidad-relación, ¿qué representa una entidad?",
    options: [
      "Una consulta SQL almacenada",
      "Una copia de seguridad diferencial",
      "Un objeto, concepto o elemento del mundo real sobre el que se desea guardar información"
    ],
    answer: 2,
    explanation: "Una entidad representa algo relevante del sistema: cliente, empleado, pedido, producto, aeropuerto, etc.",
    reference: "Bloque III.01 — Modelo conceptual de datos"
  },
  {
    id: 7,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Modelo entidad-relación",
    difficulty: "Fácil",
    text: "En un modelo entidad-relación, ¿qué es un atributo?",
    options: [
      "Una propiedad o característica de una entidad",
      "Una tabla intermedia obligatoria",
      "Un usuario administrador de la base de datos"
    ],
    answer: 0,
    explanation: "Los atributos describen a las entidades. Por ejemplo, una entidad Cliente puede tener nombre, DNI, teléfono o dirección.",
    reference: "Bloque III.01 — Entidades, atributos y relaciones"
  },
  {
    id: 8,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Relaciones",
    difficulty: "Fácil",
    text: "¿Qué indica una relación 1:N entre dos entidades?",
    options: [
      "Que una entidad no puede relacionarse con ninguna otra",
      "Que un registro de una entidad puede relacionarse con varios registros de otra",
      "Que ambas entidades deben tener exactamente el mismo número de registros"
    ],
    answer: 1,
    explanation: "En una relación uno a muchos, un registro de la primera entidad puede estar asociado a varios registros de la segunda.",
    reference: "Bloque III.01 — Relaciones y reglas de modelización"
  },
  {
    id: 9,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Relaciones",
    difficulty: "Media",
    text: "¿Cómo se suele implementar una relación N:M en una base de datos relacional?",
    options: [
      "Duplicando todos los datos en ambas tablas",
      "Eliminando las claves primarias",
      "Mediante una tabla intermedia con claves foráneas hacia las tablas relacionadas"
    ],
    answer: 2,
    explanation: "Las relaciones muchos a muchos se resuelven creando una tabla asociativa o intermedia.",
    reference: "Bloque III.02 — Modelo lógico relacional"
  },
  {
    id: 10,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Diseño de bases de datos",
    difficulty: "Media",
    text: "¿Qué caracteriza al diseño conceptual de una base de datos?",
    options: [
      "Describe los datos y sus relaciones sin depender de un SGBD concreto",
      "Define únicamente los índices físicos del disco",
      "Consiste exclusivamente en escribir sentencias INSERT"
    ],
    answer: 0,
    explanation: "El diseño conceptual se centra en entidades, atributos y relaciones, sin entrar todavía en detalles físicos o propios del SGBD.",
    reference: "Bloque III.01 — Modelo conceptual de datos"
  },
  {
    id: 11,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Diseño físico",
    difficulty: "Media",
    text: "¿Qué aspecto pertenece al diseño físico de una base de datos?",
    options: [
      "La identificación de entidades del negocio",
      "La definición de índices, almacenamiento y estructuras físicas",
      "La redacción de un diagrama de flujo de datos"
    ],
    answer: 1,
    explanation: "El diseño físico concreta cómo se almacenarán los datos: índices, particiones, tipos físicos, rendimiento y organización en disco.",
    reference: "Bloque III.02 — Diseño lógico y físico"
  },
  {
    id: 12,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Normalización",
    difficulty: "Fácil",
    text: "¿Qué exige la primera forma normal, 1FN?",
    options: [
      "Que todos los atributos contengan valores atómicos y no grupos repetidos",
      "Que todas las tablas tengan exactamente tres columnas",
      "Que no existan claves primarias"
    ],
    answer: 0,
    explanation: "La 1FN evita campos multivaluados o grupos repetidos. Cada celda debe contener un único valor atómico.",
    reference: "Bloque III.02 — Normalización"
  },
  {
    id: 13,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Normalización",
    difficulty: "Media",
    text: "¿Qué problema corrige principalmente la segunda forma normal, 2FN?",
    options: [
      "La existencia de usuarios sin contraseña",
      "Las dependencias parciales respecto a una clave primaria compuesta",
      "La falta de copias de seguridad"
    ],
    answer: 1,
    explanation: "La 2FN exige estar en 1FN y que los atributos no clave dependan de toda la clave primaria, no solo de una parte.",
    reference: "Bloque III.02 — Normalización"
  },
  {
    id: 14,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Normalización",
    difficulty: "Media",
    text: "¿Qué evita principalmente la tercera forma normal, 3FN?",
    options: [
      "Las dependencias transitivas entre atributos no clave",
      "El uso de sentencias SELECT",
      "La creación de claves primarias"
    ],
    answer: 0,
    explanation: "La 3FN busca que los atributos no clave dependan solo de la clave primaria y no de otros atributos no clave.",
    reference: "Bloque III.02 — Normalización"
  },
  {
    id: 15,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Normalización",
    difficulty: "Media",
    text: "¿Qué se pretende reducir con la normalización?",
    options: [
      "La velocidad de acceso a memoria RAM",
      "El número de usuarios conectados",
      "La redundancia y las anomalías de inserción, actualización y borrado"
    ],
    answer: 2,
    explanation: "La normalización organiza los datos para evitar duplicidades innecesarias y problemas al insertar, modificar o borrar datos.",
    reference: "Bloque III.02 — Normalización"
  },
  {
    id: 16,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Diseño de bases de datos",
    difficulty: "Media",
    text: "¿Qué es la desnormalización?",
    options: [
      "Eliminar todas las tablas de una base de datos",
      "Introducir redundancia controlada para mejorar el rendimiento en ciertos casos",
      "Convertir una base de datos SQL en un sistema operativo"
    ],
    answer: 1,
    explanation: "La desnormalización puede usarse para mejorar consultas, aunque aumenta la redundancia y debe aplicarse con cuidado.",
    reference: "Bloque III.02 — Diseño lógico y físico"
  },
  {
    id: 17,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL",
    difficulty: "Fácil",
    text: "¿Qué tipo de lenguaje SQL permite crear, modificar o eliminar estructuras como tablas?",
    options: [
      "DDL",
      "DML",
      "DCL"
    ],
    answer: 0,
    explanation: "DDL, Data Definition Language, incluye sentencias como CREATE, ALTER y DROP.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 18,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL",
    difficulty: "Fácil",
    text: "¿Qué tipo de lenguaje SQL se usa para consultar, insertar, actualizar o borrar datos?",
    options: [
      "DDL",
      "DML",
      "TCL físico"
    ],
    answer: 1,
    explanation: "DML, Data Manipulation Language, incluye SELECT, INSERT, UPDATE y DELETE.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 19,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL",
    difficulty: "Fácil",
    text: "¿Qué cláusula SQL se utiliza para filtrar filas antes de agrupar resultados?",
    options: [
      "WHERE",
      "ORDER BY",
      "COMMIT"
    ],
    answer: 0,
    explanation: "WHERE filtra las filas que cumplen una condición antes de aplicar agrupaciones.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 20,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL JOIN",
    difficulty: "Media",
    text: "¿Qué devuelve un INNER JOIN?",
    options: [
      "Todas las filas de ambas tablas aunque no coincidan",
      "Solo las filas que cumplen la condición de unión en ambas tablas",
      "Únicamente las filas duplicadas de la primera tabla"
    ],
    answer: 1,
    explanation: "INNER JOIN devuelve solo los registros que tienen correspondencia entre las tablas según la condición indicada.",
    reference: "Bloque III.04 — Lenguajes de interrogación de bases de datos"
  },
  {
    id: 21,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL JOIN",
    difficulty: "Media",
    text: "¿Qué devuelve un LEFT JOIN?",
    options: [
      "Todas las filas de la tabla izquierda y las coincidentes de la derecha",
      "Solo las filas de la tabla derecha",
      "Solo las filas que no tienen clave primaria"
    ],
    answer: 0,
    explanation: "LEFT JOIN conserva todas las filas de la tabla izquierda y añade los datos coincidentes de la derecha si existen.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 22,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL agrupación",
    difficulty: "Fácil",
    text: "¿Para qué se utiliza GROUP BY en SQL?",
    options: [
      "Para ordenar alfabéticamente los nombres de las tablas",
      "Para agrupar filas que comparten valores y poder aplicar funciones agregadas",
      "Para confirmar una transacción"
    ],
    answer: 1,
    explanation: "GROUP BY permite agrupar registros y usar funciones como COUNT, SUM, AVG, MIN o MAX.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 23,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL agrupación",
    difficulty: "Media",
    text: "¿Qué cláusula se utiliza para filtrar grupos después de aplicar GROUP BY?",
    options: [
      "HAVING",
      "WHERE",
      "DROP"
    ],
    answer: 0,
    explanation: "HAVING filtra resultados agrupados. WHERE filtra filas antes de agrupar.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 24,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL",
    difficulty: "Fácil",
    text: "¿Qué cláusula SQL permite ordenar el resultado de una consulta?",
    options: [
      "ORDER BY",
      "DELETE",
      "ROLLBACK"
    ],
    answer: 0,
    explanation: "ORDER BY ordena los resultados de una consulta, de forma ascendente o descendente.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 25,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL funciones",
    difficulty: "Fácil",
    text: "¿Qué función agregada permite contar filas en SQL?",
    options: [
      "AVG",
      "COUNT",
      "ALTER"
    ],
    answer: 1,
    explanation: "COUNT se utiliza para contar registros o valores no nulos, según la expresión usada.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 26,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "SQL NULL",
    difficulty: "Media",
    text: "¿Cómo se comprueba correctamente si un campo tiene valor nulo en SQL?",
    options: [
      "campo = NULL",
      "campo == NULL",
      "campo IS NULL"
    ],
    answer: 2,
    explanation: "NULL no se compara con =. Se debe usar IS NULL o IS NOT NULL.",
    reference: "Bloque III.04 — ANSI SQL"
  },
  {
    id: 27,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Restricciones",
    difficulty: "Fácil",
    text: "¿Qué restricción impide valores repetidos en una columna o conjunto de columnas?",
    options: [
      "UNIQUE",
      "DEFAULT",
      "SELECT"
    ],
    answer: 0,
    explanation: "UNIQUE garantiza que no se repitan valores en la columna o conjunto de columnas donde se aplica.",
    reference: "Bloque III.02 — Modelo lógico relacional"
  },
  {
    id: 28,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Restricciones",
    difficulty: "Media",
    text: "¿Para qué sirve una restricción CHECK?",
    options: [
      "Para comprobar si el servidor está encendido",
      "Para limitar los valores permitidos en una columna según una condición",
      "Para ejecutar siempre una copia completa"
    ],
    answer: 1,
    explanation: "CHECK valida que los valores insertados o actualizados cumplan una condición definida.",
    reference: "Bloque III.02 — Diseño lógico de bases de datos"
  },
  {
    id: 29,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Integridad referencial",
    difficulty: "Media",
    text: "¿Qué garantiza la integridad referencial?",
    options: [
      "Que una clave foránea apunte a un registro válido o permitido",
      "Que todas las consultas sean más rápidas",
      "Que las contraseñas se almacenen en texto plano"
    ],
    answer: 0,
    explanation: "La integridad referencial evita referencias huérfanas entre tablas relacionadas.",
    reference: "Bloque III.02 — Modelo lógico relacional"
  },
  {
    id: 30,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Integridad referencial",
    difficulty: "Media",
    text: "¿Qué efecto puede tener ON DELETE CASCADE?",
    options: [
      "Impide cualquier borrado en la tabla principal",
      "Borra automáticamente registros relacionados en tablas hijas",
      "Convierte una tabla relacional en NoSQL"
    ],
    answer: 1,
    explanation: "ON DELETE CASCADE propaga el borrado desde la tabla padre hacia los registros relacionados de la tabla hija.",
    reference: "Bloque III.02 — Integridad referencial"
  },
  {
    id: 31,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Transacciones",
    difficulty: "Fácil",
    text: "¿Qué es una transacción en una base de datos?",
    options: [
      "Un conjunto de operaciones que se tratan como una unidad lógica",
      "Un índice usado solo en bases NoSQL",
      "Un tipo de cableado de red"
    ],
    answer: 0,
    explanation: "Una transacción agrupa operaciones que deben completarse correctamente como una unidad o deshacerse si hay error.",
    reference: "Bloque III.04 — SQL y transacciones"
  },
  {
    id: 32,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "ACID",
    difficulty: "Media",
    text: "¿Qué significa la atomicidad en una transacción?",
    options: [
      "Que la transacción se ejecuta parcialmente si falla",
      "Que todas las operaciones se completan o ninguna se aplica",
      "Que la base de datos no permite usuarios concurrentes"
    ],
    answer: 1,
    explanation: "Atomicidad implica todo o nada: si una parte falla, se deshace el conjunto de la transacción.",
    reference: "Bloque III.04 — Transacciones"
  },
  {
    id: 33,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "ACID",
    difficulty: "Media",
    text: "¿Qué propiedad ACID asegura que una transacción lleva la base de datos de un estado válido a otro estado válido?",
    options: [
      "Consistencia",
      "Fragmentación",
      "Indexación"
    ],
    answer: 0,
    explanation: "La consistencia garantiza que se respetan las reglas, restricciones e integridad de la base de datos.",
    reference: "Bloque III.04 — Transacciones"
  },
  {
    id: 34,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "ACID",
    difficulty: "Media",
    text: "¿Qué propiedad ACID se relaciona con evitar interferencias entre transacciones concurrentes?",
    options: [
      "Aislamiento",
      "Durabilidad",
      "Duplicidad"
    ],
    answer: 0,
    explanation: "El aislamiento busca que las transacciones concurrentes no produzcan resultados inconsistentes entre sí.",
    reference: "Bloque III.04 — Transacciones"
  },
  {
    id: 35,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "ACID",
    difficulty: "Media",
    text: "¿Qué propiedad ACID garantiza que los cambios confirmados permanecen aunque falle el sistema?",
    options: [
      "Atomicidad",
      "Durabilidad",
      "Cardinalidad"
    ],
    answer: 1,
    explanation: "La durabilidad asegura que, tras un COMMIT, los cambios persisten incluso ante fallos posteriores.",
    reference: "Bloque III.04 — Transacciones"
  },
  {
    id: 36,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Transacciones",
    difficulty: "Fácil",
    text: "¿Qué sentencia confirma definitivamente los cambios de una transacción?",
    options: [
      "COMMIT",
      "ROLLBACK",
      "DROP"
    ],
    answer: 0,
    explanation: "COMMIT confirma los cambios realizados durante una transacción.",
    reference: "Bloque III.04 — SQL"
  },
  {
    id: 37,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Transacciones",
    difficulty: "Fácil",
    text: "¿Qué sentencia permite deshacer los cambios no confirmados de una transacción?",
    options: [
      "CREATE",
      "ROLLBACK",
      "ORDER BY"
    ],
    answer: 1,
    explanation: "ROLLBACK revierte los cambios de una transacción que aún no han sido confirmados.",
    reference: "Bloque III.04 — SQL"
  },
  {
    id: 38,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Índices",
    difficulty: "Fácil",
    text: "¿Para qué se utiliza principalmente un índice en una base de datos?",
    options: [
      "Para acelerar búsquedas y consultas sobre determinados campos",
      "Para sustituir las copias de seguridad",
      "Para eliminar la necesidad de claves primarias"
    ],
    answer: 0,
    explanation: "Los índices mejoran el rendimiento de las consultas, aunque pueden aumentar el coste de inserciones y actualizaciones.",
    reference: "Bloque III.02 — Diseño físico"
  },
  {
    id: 39,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Índices",
    difficulty: "Media",
    text: "¿Qué inconveniente puede tener crear demasiados índices?",
    options: [
      "Puede ralentizar operaciones de inserción, actualización y borrado",
      "Impide ejecutar consultas SELECT",
      "Elimina automáticamente las claves foráneas"
    ],
    answer: 0,
    explanation: "Cada modificación de datos puede requerir actualizar varios índices, lo que añade coste.",
    reference: "Bloque III.02 — Diseño físico"
  },
  {
    id: 40,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Vistas",
    difficulty: "Fácil",
    text: "¿Qué es una vista en SQL?",
    options: [
      "Una consulta almacenada que se presenta como una tabla virtual",
      "Un disco físico exclusivo para backups",
      "Un programa externo para cifrar contraseñas"
    ],
    answer: 0,
    explanation: "Una vista muestra el resultado de una consulta y puede simplificar el acceso a datos o limitar la información visible.",
    reference: "Bloque III.04 — Lenguajes de interrogación de bases de datos"
  },
  {
    id: 41,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Procedimientos almacenados",
    difficulty: "Media",
    text: "¿Qué es un procedimiento almacenado?",
    options: [
      "Un conjunto de instrucciones SQL guardadas en la base de datos para ejecutarse posteriormente",
      "Una copia de seguridad almacenada en cinta",
      "Una clave primaria generada por el sistema operativo"
    ],
    answer: 0,
    explanation: "Los procedimientos almacenados permiten encapsular lógica en el propio SGBD.",
    reference: "Bloque III.04 — Procedimientos almacenados"
  },
  {
    id: 42,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Disparadores",
    difficulty: "Media",
    text: "¿Qué es un disparador o trigger?",
    options: [
      "Una consulta SELECT que siempre devuelve cero filas",
      "Un mecanismo que ejecuta automáticamente acciones ante eventos como INSERT, UPDATE o DELETE",
      "Un tipo de relación exclusiva de bases de datos documentales"
    ],
    answer: 1,
    explanation: "Un trigger se ejecuta automáticamente cuando ocurre un evento definido sobre una tabla o vista.",
    reference: "Bloque III.04 — Eventos y disparadores"
  },
  {
    id: 43,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Eventos",
    difficulty: "Media",
    text: "En bases de datos, ¿qué suele entenderse por evento programado?",
    options: [
      "Una tarea automática ejecutada por el SGBD en un momento o intervalo definido",
      "Un fallo físico obligatorio del disco duro",
      "Una relación entre dos tablas sin claves"
    ],
    answer: 0,
    explanation: "Los eventos permiten programar tareas automáticas, como limpiezas, cálculos periódicos o mantenimiento.",
    reference: "Bloque III.04 — Eventos"
  },
  {
    id: 44,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Backups",
    difficulty: "Fácil",
    text: "¿Qué caracteriza a una copia de seguridad completa?",
    options: [
      "Copia todos los datos seleccionados en cada ejecución",
      "Copia únicamente los cambios desde la última copia",
      "No permite restaurar información"
    ],
    answer: 0,
    explanation: "El backup completo copia todo el conjunto de datos seleccionado, aunque suele requerir más tiempo y espacio.",
    reference: "Bloque IV.02 — Back up y recuperación"
  },
  {
    id: 45,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Backups",
    difficulty: "Media",
    text: "¿Qué caracteriza a una copia incremental?",
    options: [
      "Copia siempre todos los datos de la base",
      "Copia solo los cambios desde la última copia, sea completa o incremental",
      "Borra la base de datos antes de copiarla"
    ],
    answer: 1,
    explanation: "La copia incremental guarda los cambios producidos desde la última copia realizada.",
    reference: "Bloque IV.02 — Políticas de backup y recuperación"
  },
  {
    id: 46,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Administración de bases de datos",
    difficulty: "Fácil",
    text: "¿Cuál es una función típica del administrador de bases de datos?",
    options: [
      "Diseñar tarjetas gráficas",
      "Gestionar usuarios, permisos, copias, rendimiento y recuperación",
      "Configurar exclusivamente impresoras locales"
    ],
    answer: 1,
    explanation: "El DBA administra seguridad, usuarios, permisos, backups, restauraciones, rendimiento e integridad de las bases de datos.",
    reference: "Bloque IV.02 — Administración de bases de datos"
  },
  {
    id: 47,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "NoSQL",
    difficulty: "Fácil",
    text: "¿Qué característica suele asociarse a muchas bases de datos NoSQL?",
    options: [
      "Modelo flexible y orientado a grandes volúmenes o estructuras no estrictamente relacionales",
      "Uso exclusivo de tablas con claves primarias compuestas",
      "Imposibilidad total de almacenar documentos"
    ],
    answer: 0,
    explanation: "NoSQL agrupa modelos como documento, clave-valor, columnares o grafos, normalmente con mayor flexibilidad de esquema.",
    reference: "Bloque II.05 — SGBD relacionales, orientados a objetos y NoSQL"
  },
  {
    id: 48,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "NoSQL",
    difficulty: "Media",
    text: "¿Qué tipo de base de datos NoSQL almacena información en documentos, normalmente similares a JSON o BSON?",
    options: [
      "Documental",
      "Relacional pura",
      "Jerárquica de sistema de archivos"
    ],
    answer: 0,
    explanation: "Las bases documentales almacenan documentos semiestructurados, habituales en formatos similares a JSON.",
    reference: "Bloque II.05 — NoSQL"
  },
  {
    id: 49,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "NoSQL",
    difficulty: "Media",
    text: "¿Qué modelo NoSQL almacena datos como pares clave-valor?",
    options: [
      "Modelo entidad-relación",
      "Modelo clave-valor",
      "Modelo de normalización 3FN"
    ],
    answer: 1,
    explanation: "En el modelo clave-valor, cada dato se recupera mediante una clave asociada a un valor.",
    reference: "Bloque II.05 — NoSQL"
  },
  {
    id: 50,
    section: "🔴 BLOQUE 11 — BASES DE DATOS",
    topic: "Bases de datos orientadas a objetos",
    difficulty: "Media",
    text: "¿Qué caracteriza a una base de datos orientada a objetos?",
    options: [
      "Almacena datos como objetos, incluyendo atributos y comportamiento asociado",
      "Solo permite almacenar texto plano sin relaciones",
      "Es un tipo de índice para acelerar consultas SQL"
    ],
    answer: 0,
    explanation: "Las bases de datos orientadas a objetos almacenan objetos de forma más cercana a los modelos usados en programación orientada a objetos.",
    reference: "Bloque II.05 — SGBD orientados a objetos"
  }
];