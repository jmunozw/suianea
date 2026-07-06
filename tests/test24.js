const questions = [
  {
    "id": 1,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Variables",
    "difficulty": "baja",
    "text": "¿Qué es una variable en programación?",
    "options": [
      "Un espacio identificado donde se almacena un dato que puede cambiar durante la ejecución",
      "Una instrucción que siempre repite código",
      "Un error producido por el compilador"
    ],
    "answer": 0,
    "explanation": "Una variable permite guardar un valor asociado a un nombre y modificarlo durante la ejecución del programa.",
    "reference": "Bloque III.03 - Lenguajes de programación: tipos de datos, operadores y estructura de un programa"
  },
  {
    "id": 2,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Tipos de datos",
    "difficulty": "baja",
    "text": "¿Qué tipo de dato se utiliza normalmente para representar números enteros?",
    "options": [
      "Booleano",
      "Entero",
      "Cadena"
    ],
    "answer": 1,
    "explanation": "El tipo entero representa números sin parte decimal, como 0, 7 o -15.",
    "reference": "Bloque III.03 - Representación de tipos de datos"
  },
  {
    "id": 3,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Tipos de datos",
    "difficulty": "baja",
    "text": "¿Qué tipo de dato representa valores de verdadero o falso?",
    "options": [
      "Booleano",
      "Real",
      "Carácter"
    ],
    "answer": 0,
    "explanation": "El tipo booleano solo puede tomar valores lógicos como verdadero o falso.",
    "reference": "Bloque III.03 - Representación de tipos de datos"
  },
  {
    "id": 4,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Tipos de datos",
    "difficulty": "baja",
    "text": "¿Qué tipo de dato se usa para almacenar texto como 'AENA'?",
    "options": [
      "Entero",
      "Cadena de caracteres",
      "Booleano"
    ],
    "answer": 1,
    "explanation": "Una cadena de caracteres almacena una secuencia de símbolos o texto.",
    "reference": "Bloque III.03 - Representación de tipos de datos"
  },
  {
    "id": 5,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Operadores",
    "difficulty": "baja",
    "text": "En la mayoría de lenguajes, ¿qué significa una instrucción como x = 5?",
    "options": [
      "Comparar si x vale 5",
      "Asignar el valor 5 a x",
      "Eliminar la variable x"
    ],
    "answer": 1,
    "explanation": "El operador de asignación guarda un valor en una variable. No debe confundirse con una comparación.",
    "reference": "Bloque III.03 - Operadores"
  },
  {
    "id": 6,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Operadores",
    "difficulty": "media",
    "text": "¿Para qué se utiliza un operador relacional?",
    "options": [
      "Para comparar valores y obtener un resultado lógico",
      "Para declarar una función",
      "Para reservar memoria secundaria"
    ],
    "answer": 0,
    "explanation": "Los operadores relacionales comparan valores, por ejemplo mayor que, menor que o igual a, y producen verdadero o falso.",
    "reference": "Bloque III.03 - Operadores"
  },
  {
    "id": 7,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Operadores",
    "difficulty": "media",
    "text": "¿Qué devuelve normalmente el operador módulo o resto?",
    "options": [
      "El cociente entero de una división",
      "El resto de una división entera",
      "La potencia de un número"
    ],
    "answer": 1,
    "explanation": "El módulo calcula el resto. Por ejemplo, 10 mod 3 devuelve 1.",
    "reference": "Bloque III.03 - Operadores"
  },
  {
    "id": 8,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Operadores lógicos",
    "difficulty": "media",
    "text": "En una expresión lógica con AND, ¿cuándo es verdadero el resultado?",
    "options": [
      "Cuando al menos una condición es verdadera",
      "Solo cuando todas las condiciones son verdaderas",
      "Solo cuando todas las condiciones son falsas"
    ],
    "answer": 1,
    "explanation": "AND exige que todas las condiciones evaluadas sean verdaderas.",
    "reference": "Bloque III.03 - Operadores"
  },
  {
    "id": 9,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Operadores lógicos",
    "difficulty": "media",
    "text": "En una expresión lógica con OR, ¿cuándo es verdadero el resultado?",
    "options": [
      "Cuando al menos una condición es verdadera",
      "Solo cuando todas las condiciones son verdaderas",
      "Nunca puede devolver verdadero"
    ],
    "answer": 0,
    "explanation": "OR devuelve verdadero si una o más condiciones son verdaderas.",
    "reference": "Bloque III.03 - Operadores"
  },
  {
    "id": 10,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Operadores",
    "difficulty": "media",
    "text": "¿Qué efecto tienen los paréntesis en una expresión aritmética o lógica?",
    "options": [
      "Indican comentarios del programador",
      "Modifican o aclaran el orden de evaluación",
      "Convierten siempre el resultado en texto"
    ],
    "answer": 1,
    "explanation": "Los paréntesis permiten controlar la precedencia y hacen explícito qué parte se evalúa antes.",
    "reference": "Bloque III.03 - Operadores"
  },
  {
    "id": 11,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Condicionales",
    "difficulty": "baja",
    "text": "¿Para qué sirve una instrucción condicional IF?",
    "options": [
      "Para repetir siempre un bloque un número fijo de veces",
      "Para ejecutar un bloque solo si se cumple una condición",
      "Para definir una base de datos"
    ],
    "answer": 1,
    "explanation": "IF permite decidir si se ejecuta un bloque de instrucciones según el resultado de una condición.",
    "reference": "Bloque III.03 - Instrucciones condicionales"
  },
  {
    "id": 12,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Condicionales",
    "difficulty": "media",
    "text": "En una estructura IF...ELSE, ¿cuándo se ejecuta el bloque ELSE?",
    "options": [
      "Cuando la condición del IF es falsa",
      "Siempre antes del IF",
      "Solo cuando hay un bucle dentro"
    ],
    "answer": 0,
    "explanation": "ELSE se ejecuta como alternativa cuando la condición del IF no se cumple.",
    "reference": "Bloque III.03 - Instrucciones condicionales"
  },
  {
    "id": 13,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Condicionales",
    "difficulty": "media",
    "text": "¿Qué estructura suele ser más adecuada cuando se evalúa una misma variable contra varios valores posibles?",
    "options": [
      "SWITCH o SEGÚN",
      "WHILE infinito",
      "Recursividad obligatoria"
    ],
    "answer": 0,
    "explanation": "SWITCH, CASE o SEGÚN se usa para seleccionar entre varios casos según el valor de una expresión.",
    "reference": "Bloque III.03 - Instrucciones condicionales"
  },
  {
    "id": 14,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "baja",
    "text": "¿Qué es un bucle?",
    "options": [
      "Una estructura que repite instrucciones mientras se cumpla una condición o durante un número de iteraciones",
      "Una variable que solo almacena texto",
      "Una función sin parámetros"
    ],
    "answer": 0,
    "explanation": "Un bucle permite ejecutar repetidamente un bloque de código.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 15,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "¿Qué bucle se suele usar cuando se conoce de antemano el número de repeticiones?",
    "options": [
      "FOR / PARA",
      "IF / SI",
      "SWITCH / SEGÚN"
    ],
    "answer": 0,
    "explanation": "El bucle FOR es habitual cuando existe un contador y se conoce el rango de iteraciones.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 16,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "¿Qué característica tiene un bucle WHILE / MIENTRAS?",
    "options": [
      "Ejecuta el bloque mientras la condición sea verdadera",
      "Siempre se ejecuta exactamente una vez y termina",
      "Solo sirve para declarar constantes"
    ],
    "answer": 0,
    "explanation": "WHILE evalúa una condición y repite el bloque mientras esa condición se mantenga verdadera.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 17,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "¿Qué diferencia principal tiene un bucle DO...WHILE / REPETIR...HASTA frente a WHILE?",
    "options": [
      "El bloque se ejecuta al menos una vez antes de comprobar la condición",
      "No puede contener instrucciones",
      "Solo funciona con cadenas de texto"
    ],
    "answer": 0,
    "explanation": "En los bucles con comprobación al final, el cuerpo se ejecuta al menos una vez.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 18,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "¿Cuál es una causa habitual de bucle infinito?",
    "options": [
      "Que la condición de salida nunca llegue a cumplirse",
      "Que exista una variable local",
      "Que el programa tenga comentarios"
    ],
    "answer": 0,
    "explanation": "Si la condición de parada nunca se alcanza, el bucle puede ejecutarse indefinidamente.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 19,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "En un bucle con contador, ¿qué operación evita normalmente que el contador permanezca siempre igual?",
    "options": [
      "Actualizar el contador en cada iteración",
      "Convertir el contador en una cadena",
      "Eliminar la condición del bucle"
    ],
    "answer": 0,
    "explanation": "Inicializar, comprobar y actualizar el contador son partes básicas de muchos bucles.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 20,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "¿Para qué se utiliza normalmente una instrucción BREAK dentro de un bucle?",
    "options": [
      "Para terminar la ejecución del bucle de forma anticipada",
      "Para volver al inicio del programa operativo",
      "Para convertir un entero en booleano"
    ],
    "answer": 0,
    "explanation": "BREAK interrumpe el bucle y continúa la ejecución después de él.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 21,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Bucles",
    "difficulty": "media",
    "text": "¿Qué efecto tiene normalmente CONTINUE dentro de un bucle?",
    "options": [
      "Finaliza todo el programa",
      "Salta el resto de la iteración actual y continúa con la siguiente",
      "Cambia el tipo de dato de una variable"
    ],
    "answer": 1,
    "explanation": "CONTINUE no suele salir del bucle; pasa a la siguiente iteración.",
    "reference": "Bloque III.03 - Bucles"
  },
  {
    "id": 22,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Recursividad",
    "difficulty": "media",
    "text": "¿Qué es la recursividad?",
    "options": [
      "Una técnica en la que una función se llama a sí misma",
      "Una estructura exclusiva de bases de datos",
      "Un operador para concatenar texto"
    ],
    "answer": 0,
    "explanation": "Una función recursiva resuelve un problema llamándose a sí misma con casos más simples.",
    "reference": "Bloque III.03 - Bucles y recursividad"
  },
  {
    "id": 23,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Recursividad",
    "difficulty": "alta",
    "text": "¿Qué elemento es imprescindible para que una función recursiva termine correctamente?",
    "options": [
      "Un caso base o condición de parada",
      "Una variable global obligatoria",
      "Una cadena de caracteres"
    ],
    "answer": 0,
    "explanation": "Sin caso base, la función podría llamarse indefinidamente y agotar la pila de llamadas.",
    "reference": "Bloque III.03 - Bucles y recursividad"
  },
  {
    "id": 24,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Recursividad",
    "difficulty": "alta",
    "text": "En una función factorial recursiva, ¿cuál suele ser un caso base correcto?",
    "options": [
      "factorial(0) = 1",
      "factorial(n) = n + 1 siempre",
      "factorial(n) no necesita condición de parada"
    ],
    "answer": 0,
    "explanation": "En la definición clásica, 0! vale 1 y permite detener la recursión.",
    "reference": "Bloque III.03 - Recursividad"
  },
  {
    "id": 25,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Recursividad",
    "difficulty": "alta",
    "text": "¿Qué problema puede aparecer si una recursión no reduce el problema hacia el caso base?",
    "options": [
      "Desbordamiento de pila o ejecución indefinida",
      "Conversión automática a HTML",
      "Aumento de la resolución de pantalla"
    ],
    "answer": 0,
    "explanation": "Cada llamada recursiva ocupa espacio en la pila; si no termina, puede provocar un stack overflow.",
    "reference": "Bloque III.03 - Recursividad"
  },
  {
    "id": 26,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Funciones y procedimientos",
    "difficulty": "baja",
    "text": "¿Qué es una función?",
    "options": [
      "Un bloque reutilizable de código que puede recibir datos y devolver un resultado",
      "Un tipo de cable de red",
      "Una tabla de una base de datos relacional"
    ],
    "answer": 0,
    "explanation": "Una función encapsula una tarea y normalmente devuelve un valor.",
    "reference": "Bloque III.03 - Procedimientos, funciones y parámetros"
  },
  {
    "id": 27,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Funciones y procedimientos",
    "difficulty": "media",
    "text": "¿Cuál es una diferencia habitual entre función y procedimiento?",
    "options": [
      "La función devuelve un valor; el procedimiento normalmente no",
      "El procedimiento siempre es más rápido que una función",
      "La función solo existe en sistemas operativos"
    ],
    "answer": 0,
    "explanation": "Aunque depende del lenguaje, en teoría clásica la función devuelve valor y el procedimiento ejecuta acciones.",
    "reference": "Bloque III.03 - Procedimientos, funciones y parámetros"
  },
  {
    "id": 28,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Parámetros",
    "difficulty": "media",
    "text": "¿Qué es un parámetro en una función?",
    "options": [
      "Un dato que la función recibe para trabajar con él",
      "Un error de sintaxis obligatorio",
      "Una instrucción que finaliza siempre el programa"
    ],
    "answer": 0,
    "explanation": "Los parámetros permiten pasar información a una función o procedimiento.",
    "reference": "Bloque III.03 - Procedimientos, funciones y parámetros"
  },
  {
    "id": 29,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Parámetros",
    "difficulty": "alta",
    "text": "En el paso de parámetros por valor, ¿qué recibe normalmente la función?",
    "options": [
      "Una copia del valor original",
      "La dirección original para modificar siempre la variable externa",
      "El nombre del archivo ejecutable"
    ],
    "answer": 0,
    "explanation": "Por valor se trabaja con una copia; los cambios internos no suelen modificar la variable original.",
    "reference": "Bloque III.03 - Procedimientos, funciones y parámetros"
  },
  {
    "id": 30,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Parámetros",
    "difficulty": "alta",
    "text": "En el paso de parámetros por referencia, ¿qué puede ocurrir?",
    "options": [
      "La función puede modificar el dato original recibido",
      "La función nunca puede acceder al parámetro",
      "El parámetro se convierte obligatoriamente en cadena"
    ],
    "answer": 0,
    "explanation": "Por referencia se trabaja sobre el dato original o una referencia a él, por lo que puede modificarse desde la función.",
    "reference": "Bloque III.03 - Procedimientos, funciones y parámetros"
  },
  {
    "id": 31,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Ámbito de variables",
    "difficulty": "media",
    "text": "¿Qué es una variable local?",
    "options": [
      "Una variable declarada dentro de un bloque o función y accesible normalmente solo en ese ámbito",
      "Una variable almacenada siempre en Internet",
      "Una constante del sistema operativo"
    ],
    "answer": 0,
    "explanation": "El ámbito local limita la visibilidad de una variable al bloque, función o procedimiento donde se define.",
    "reference": "Bloque III.03 - Estructura de un programa"
  },
  {
    "id": 32,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Ámbito de variables",
    "difficulty": "media",
    "text": "¿Qué riesgo suele asociarse al abuso de variables globales?",
    "options": [
      "Dificultan el mantenimiento porque pueden modificarse desde varias partes del programa",
      "Impiden usar condicionales",
      "Eliminan la necesidad de algoritmos"
    ],
    "answer": 0,
    "explanation": "Las variables globales pueden crear dependencias ocultas y efectos laterales difíciles de controlar.",
    "reference": "Bloque III.03 - Estructura de un programa"
  },
  {
    "id": 33,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Vectores",
    "difficulty": "baja",
    "text": "¿Qué es un vector o array unidimensional?",
    "options": [
      "Una colección ordenada de elementos accesibles mediante índice",
      "Una condición lógica simple",
      "Un programa que no usa memoria"
    ],
    "answer": 0,
    "explanation": "Un vector almacena varios elementos en una sola estructura y permite acceder a ellos por posición.",
    "reference": "Bloque III.03 - Vectores y registros"
  },
  {
    "id": 34,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Vectores",
    "difficulty": "media",
    "text": "En muchos lenguajes de programación, ¿cuál es el índice del primer elemento de un array?",
    "options": [
      "0",
      "1",
      "-1 siempre"
    ],
    "answer": 0,
    "explanation": "Muchos lenguajes indexan arrays desde 0, aunque existen lenguajes o pseudocódigos que pueden usar 1.",
    "reference": "Bloque III.03 - Vectores"
  },
  {
    "id": 35,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Vectores",
    "difficulty": "media",
    "text": "Si un vector tiene 10 posiciones y se indexa desde 0, ¿cuál es el último índice válido?",
    "options": [
      "10",
      "9",
      "11"
    ],
    "answer": 1,
    "explanation": "Con indexación desde 0, los índices válidos serían 0 a 9.",
    "reference": "Bloque III.03 - Vectores"
  },
  {
    "id": 36,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Vectores",
    "difficulty": "media",
    "text": "¿Qué es una matriz en programación?",
    "options": [
      "Un array bidimensional organizado normalmente en filas y columnas",
      "Una variable booleana",
      "Una instrucción de salida del programa"
    ],
    "answer": 0,
    "explanation": "Una matriz puede verse como una tabla de elementos accesibles con dos índices.",
    "reference": "Bloque III.03 - Vectores y estructuras de datos"
  },
  {
    "id": 37,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Registros",
    "difficulty": "media",
    "text": "¿Qué caracteriza a un registro o estructura?",
    "options": [
      "Agrupa campos relacionados que pueden ser de distinto tipo",
      "Solo almacena números enteros consecutivos",
      "Solo se usa para repetir código"
    ],
    "answer": 0,
    "explanation": "Un registro permite reunir varios datos relacionados, como nombre, edad y código, bajo una misma estructura.",
    "reference": "Bloque III.03 - Vectores y registros"
  },
  {
    "id": 38,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Algoritmos",
    "difficulty": "baja",
    "text": "¿Qué es un algoritmo?",
    "options": [
      "Un conjunto finito y ordenado de pasos para resolver un problema",
      "Un componente físico de la CPU",
      "Una contraseña cifrada"
    ],
    "answer": 0,
    "explanation": "Un algoritmo describe una solución mediante pasos claros, ordenados y finitos.",
    "reference": "Bloque II.03 / Bloque III.03 - Algoritmos y estructura de un programa"
  },
  {
    "id": 39,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Algoritmos",
    "difficulty": "media",
    "text": "¿Qué propiedad debe tener un algoritmo correcto?",
    "options": [
      "Debe terminar tras un número finito de pasos",
      "Debe usar obligatoriamente recursividad",
      "Debe estar escrito siempre en lenguaje máquina"
    ],
    "answer": 0,
    "explanation": "La finitud es una propiedad básica: el algoritmo debe llegar a una solución y terminar.",
    "reference": "Bloque II.03 / Bloque III.03 - Algoritmos"
  },
  {
    "id": 40,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Pseudocódigo",
    "difficulty": "media",
    "text": "¿Para qué sirve el pseudocódigo?",
    "options": [
      "Para expresar un algoritmo de forma legible sin depender estrictamente de un lenguaje concreto",
      "Para ejecutar directamente instrucciones en la CPU sin compilador",
      "Para sustituir siempre a una base de datos"
    ],
    "answer": 0,
    "explanation": "El pseudocódigo ayuda a diseñar la lógica antes de implementarla en un lenguaje específico.",
    "reference": "Bloque III.03 - Estructura de un programa"
  },
  {
    "id": 41,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Diagramas de flujo",
    "difficulty": "media",
    "text": "En un diagrama de flujo, ¿qué suele representar un rombo?",
    "options": [
      "Una decisión o condición",
      "El almacenamiento masivo",
      "Una operación de impresión 3D"
    ],
    "answer": 0,
    "explanation": "El rombo se utiliza habitualmente para representar decisiones con salidas como sí/no o verdadero/falso.",
    "reference": "Bloque III.01 - Flujogramas / Bloque III.03 - Condicionales"
  },
  {
    "id": 42,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Algoritmos",
    "difficulty": "media",
    "text": "¿Qué es un acumulador en un algoritmo?",
    "options": [
      "Una variable que va sumando o acumulando valores a lo largo del proceso",
      "Una función que no permite parámetros",
      "Un operador que solo compara cadenas"
    ],
    "answer": 0,
    "explanation": "Un acumulador conserva un total parcial, por ejemplo la suma de importes en un bucle.",
    "reference": "Bloque III.03 - Algoritmos, variables y bucles"
  },
  {
    "id": 43,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Algoritmos",
    "difficulty": "media",
    "text": "¿Qué es un contador en programación?",
    "options": [
      "Una variable que registra cuántas veces ocurre algo o cuántas iteraciones se han realizado",
      "Una estructura que almacena campos de distinto tipo",
      "Un programa que cifra discos duros"
    ],
    "answer": 0,
    "explanation": "Los contadores se incrementan o decrementan para llevar la cuenta de eventos o repeticiones.",
    "reference": "Bloque III.03 - Algoritmos y bucles"
  },
  {
    "id": 44,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Algoritmos",
    "difficulty": "media",
    "text": "¿Qué es una bandera o flag?",
    "options": [
      "Una variable, normalmente booleana, que indica si se ha producido una condición",
      "Una instrucción que borra todos los arrays",
      "Una unidad de almacenamiento óptico"
    ],
    "answer": 0,
    "explanation": "Un flag suele indicar estados como encontrado/no encontrado o activo/inactivo.",
    "reference": "Bloque III.03 - Tipos de datos y estructura de un programa"
  },
  {
    "id": 45,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Errores de programación",
    "difficulty": "media",
    "text": "¿Qué es un error de sintaxis?",
    "options": [
      "Un incumplimiento de las reglas gramaticales del lenguaje de programación",
      "Un resultado incorrecto con código perfectamente escrito según la gramática",
      "Una mejora automática de rendimiento"
    ],
    "answer": 0,
    "explanation": "Los errores de sintaxis aparecen cuando el código no respeta la forma válida del lenguaje.",
    "reference": "Bloque III.03 - Estructura de un programa"
  },
  {
    "id": 46,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Errores de programación",
    "difficulty": "alta",
    "text": "¿Qué es un error lógico?",
    "options": [
      "Un fallo en la lógica del algoritmo que produce resultados incorrectos aunque el programa pueda ejecutarse",
      "Un carácter mal escrito que impide compilar siempre",
      "Un fallo físico de la memoria RAM"
    ],
    "answer": 0,
    "explanation": "El programa puede ejecutarse, pero la solución implementada no hace lo que debería.",
    "reference": "Bloque III.03 - Algoritmos y estructura de un programa"
  },
  {
    "id": 47,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Compilación e interpretación",
    "difficulty": "media",
    "text": "¿Qué hace normalmente un compilador?",
    "options": [
      "Traduce el código fuente a otro código ejecutable o intermedio antes de su ejecución",
      "Diseña automáticamente la interfaz gráfica sin código",
      "Sustituye la memoria RAM por memoria secundaria"
    ],
    "answer": 0,
    "explanation": "Un compilador traduce el programa desde un lenguaje fuente a una forma que pueda ejecutarse o procesarse posteriormente.",
    "reference": "Bloque III.03 - Lenguajes de programación y estructura de un programa"
  },
  {
    "id": 48,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Compilación e interpretación",
    "difficulty": "media",
    "text": "¿Qué caracteriza a un intérprete?",
    "options": [
      "Ejecuta o traduce instrucciones durante la ejecución, normalmente línea a línea o instrucción a instrucción",
      "Solo funciona con hardware de red",
      "Impide usar variables"
    ],
    "answer": 0,
    "explanation": "Los lenguajes interpretados se procesan en tiempo de ejecución por un intérprete.",
    "reference": "Bloque III.03 - Lenguajes de programación"
  },
  {
    "id": 49,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Tipos de datos",
    "difficulty": "media",
    "text": "¿Qué es una conversión de tipo o casting?",
    "options": [
      "Transformar un valor de un tipo de dato a otro compatible",
      "Ordenar físicamente los sectores de un disco",
      "Cerrar todos los procesos del sistema operativo"
    ],
    "answer": 0,
    "explanation": "El casting convierte valores, por ejemplo de entero a real o de número a cadena cuando el lenguaje lo permite.",
    "reference": "Bloque III.03 - Representación de tipos de datos"
  },
  {
    "id": 50,
    "section": "🔴 BLOQUE 12 — PROGRAMACIÓN",
    "topic": "Estructura de un programa",
    "difficulty": "media",
    "text": "¿Qué suele incluir la estructura básica de un programa?",
    "options": [
      "Declaraciones, entrada de datos, procesamiento y salida de resultados",
      "Solo imágenes y hojas de estilo",
      "Únicamente sentencias SQL de borrado"
    ],
    "answer": 0,
    "explanation": "Un programa suele organizar datos e instrucciones para recibir entrada, procesarla y producir una salida.",
    "reference": "Bloque III.03 - Estructura de un programa"
  }
];

if (typeof module !== "undefined") {
  module.exports = questions;
}