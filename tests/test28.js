section = "🔴 BLOQUE 16 — LEGISLACIÓN"
const questions = [
    {
        "id": 1,
        "section": section,
        "topic": "LOPDGDD - Objeto",
        "difficulty": "easy",
        "text": "¿Cuál es uno de los objetos principales de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales?",
        "options": [
            "Regular exclusivamente la contratación pública electrónica.",
            "Adaptar el ordenamiento jurídico español al RGPD y garantizar los derechos digitales de la ciudadanía.",
            "Sustituir completamente al Reglamento General de Protección de Datos de la Unión Europea."
        ],
        "answer": 1,
        "explanation": "La LOPDGDD adapta el Derecho español al RGPD, completa sus disposiciones y garantiza derechos digitales conforme al artículo 18.4 de la Constitución.",
        "reference": "LO 3/2018, art. 1"
    },
    {
        "id": 2,
        "section": section,
        "topic": "LOPDGDD - Derecho fundamental",
        "difficulty": "easy",
        "text": "¿Qué precepto constitucional sirve de base al derecho fundamental a la protección de datos personales en España?",
        "options": [
            "El artículo 18.4 de la Constitución Española.",
            "El artículo 103 de la Constitución Española.",
            "El artículo 149.1.18 de la Constitución Española."
        ],
        "answer": 0,
        "explanation": "La protección de datos personales se vincula al artículo 18.4 CE, que limita el uso de la informática para garantizar el honor, la intimidad y los derechos de la ciudadanía.",
        "reference": "Constitución Española, art. 18.4; LO 3/2018, art. 1"
    },
    {
        "id": 3,
        "section": section,
        "topic": "LOPDGDD - Consentimiento",
        "difficulty": "easy",
        "text": "Según la LOPDGDD, el consentimiento del afectado para el tratamiento de sus datos debe ser...",
        "options": [
            "Libre, específico, informado e inequívoco, mediante declaración o clara acción afirmativa.",
            "Presunto, siempre que el interesado no se oponga expresamente.",
            "Genérico para cualquier finalidad futura del responsable."
        ],
        "answer": 0,
        "explanation": "El consentimiento exige una manifestación de voluntad libre, específica, informada e inequívoca. Se excluye el consentimiento tácito.",
        "reference": "LO 3/2018, art. 6; RGPD, art. 4.11"
    },
    {
        "id": 4,
        "section": section,
        "topic": "LOPDGDD - Consentimiento por finalidades",
        "difficulty": "medium",
        "text": "Cuando el tratamiento de datos se base en el consentimiento para varias finalidades, ¿qué exige la LOPDGDD?",
        "options": [
            "Que el consentimiento sea único y global para simplificar el tratamiento.",
            "Que conste de manera específica e inequívoca que se otorga para todas las finalidades.",
            "Que el consentimiento sea siempre autorizado previamente por la AEPD."
        ],
        "answer": 1,
        "explanation": "Para una pluralidad de finalidades debe constar de forma específica e inequívoca que el consentimiento se presta para todas ellas.",
        "reference": "LO 3/2018, art. 6.2"
    },
    {
        "id": 5,
        "section": section,
        "topic": "LOPDGDD - Menores",
        "difficulty": "easy",
        "text": "¿A partir de qué edad puede un menor prestar por sí mismo consentimiento para el tratamiento de sus datos personales, como regla general en la LOPDGDD?",
        "options": [
            "Desde los 12 años.",
            "Desde los 14 años.",
            "Desde los 16 años."
        ],
        "answer": 1,
        "explanation": "La LOPDGDD fija en más de 14 años la edad a partir de la cual el tratamiento puede fundarse en el consentimiento del menor, salvo casos en que la ley exija asistencia de representantes legales.",
        "reference": "LO 3/2018, art. 7"
    },
    {
        "id": 6,
        "section": section,
        "topic": "LOPDGDD - Confidencialidad",
        "difficulty": "medium",
        "text": "El deber de confidencialidad de quienes intervienen en el tratamiento de datos personales...",
        "options": [
            "Finaliza automáticamente cuando termina la relación con el responsable o encargado.",
            "Se mantiene aun cuando haya finalizado la relación con el responsable o encargado.",
            "Solo afecta al delegado de protección de datos."
        ],
        "answer": 1,
        "explanation": "La obligación de confidencialidad se mantiene incluso después de finalizar la relación del obligado con el responsable o encargado del tratamiento.",
        "reference": "LO 3/2018, art. 5"
    },
    {
        "id": 7,
        "section": section,
        "topic": "LOPDGDD - Información básica",
        "difficulty": "medium",
        "text": "Cuando los datos personales se obtienen del afectado, ¿qué debe incluir, al menos, la información básica?",
        "options": [
            "Identidad del responsable, finalidad del tratamiento y posibilidad de ejercer derechos.",
            "Solo el nombre comercial de la entidad que recoge los datos.",
            "La autorización previa de la Agencia Española de Protección de Datos."
        ],
        "answer": 0,
        "explanation": "La información básica debe incluir, como mínimo, la identidad del responsable, la finalidad y la posibilidad de ejercer los derechos previstos en el RGPD.",
        "reference": "LO 3/2018, art. 11"
    },
    {
        "id": 8,
        "section": section,
        "topic": "LOPDGDD - Datos no obtenidos del afectado",
        "difficulty": "medium",
        "text": "Si los datos personales no se han obtenido directamente del afectado, la información básica debe incluir también...",
        "options": [
            "Las categorías de datos tratados y las fuentes de procedencia.",
            "La contraseña de acceso al sistema del responsable.",
            "La identidad de todos los empleados que puedan ver los datos."
        ],
        "answer": 0,
        "explanation": "Cuando los datos no proceden del propio afectado, la LOPDGDD exige informar también de las categorías de datos y de las fuentes de procedencia.",
        "reference": "LO 3/2018, art. 11.3"
    },
    {
        "id": 9,
        "section": section,
        "topic": "LOPDGDD - Ejercicio de derechos",
        "difficulty": "easy",
        "text": "Los derechos reconocidos en los artículos 15 a 22 del RGPD pueden ejercerse...",
        "options": [
            "Solo mediante procurador y abogado.",
            "Directamente o por medio de representante legal o voluntario.",
            "Únicamente a través de la Agencia Española de Protección de Datos."
        ],
        "answer": 1,
        "explanation": "La LOPDGDD permite ejercer los derechos directamente o mediante representante legal o voluntario.",
        "reference": "LO 3/2018, art. 12"
    },
    {
        "id": 10,
        "section": section,
        "topic": "LOPDGDD - Derechos de menores",
        "difficulty": "medium",
        "text": "¿Quién puede ejercer en nombre de los menores de 14 años los derechos de acceso, rectificación, supresión u otros derechos de protección de datos?",
        "options": [
            "Cualquier familiar mayor de edad.",
            "Los titulares de la patria potestad.",
            "Solo el delegado de protección de datos del colegio."
        ],
        "answer": 1,
        "explanation": "Los titulares de la patria potestad pueden ejercer en nombre y representación de los menores de 14 años los derechos de protección de datos.",
        "reference": "LO 3/2018, art. 12.6"
    },
    {
        "id": 11,
        "section": section,
        "topic": "LOPDGDD - Derecho de acceso",
        "difficulty": "medium",
        "text": "Según la LOPDGDD, si el responsable trata gran cantidad de datos de un afectado y este ejerce el derecho de acceso sin concretar, el responsable puede...",
        "options": [
            "Solicitar al afectado que especifique los datos o actividades de tratamiento a los que se refiere.",
            "Denegar siempre el derecho de acceso por exceso de información.",
            "Cobrar una tasa fija obligatoria antes de responder."
        ],
        "answer": 0,
        "explanation": "Cuando se trate una gran cantidad de datos y la solicitud sea imprecisa, el responsable puede pedir concreción antes de facilitar la información.",
        "reference": "LO 3/2018, art. 13"
    },
    {
        "id": 12,
        "section": section,
        "topic": "LOPDGDD - AEPD",
        "difficulty": "easy",
        "text": "La Agencia Española de Protección de Datos es...",
        "options": [
            "Una autoridad administrativa independiente de ámbito estatal.",
            "Un órgano consultivo integrado en cada ayuntamiento.",
            "Un juzgado especializado en delitos informáticos."
        ],
        "answer": 0,
        "explanation": "La AEPD es una autoridad administrativa independiente de ámbito estatal, con personalidad jurídica y plena capacidad pública y privada.",
        "reference": "LO 3/2018, art. 44"
    },
    {
        "id": 13,
        "section": section,
        "topic": "LOPDGDD - Delegado de Protección de Datos",
        "difficulty": "medium",
        "text": "¿Qué papel tiene el delegado de protección de datos frente a la AEPD y las autoridades autonómicas?",
        "options": [
            "Actúa como interlocutor del responsable o encargado del tratamiento.",
            "Sustituye siempre al responsable en todas sus obligaciones legales.",
            "Solo puede actuar en tratamientos de datos sanitarios."
        ],
        "answer": 0,
        "explanation": "El DPD actúa como interlocutor del responsable o encargado ante la AEPD y las autoridades autonómicas de protección de datos.",
        "reference": "LO 3/2018, art. 36"
    },
    {
        "id": 14,
        "section": section,
        "topic": "LOPDGDD - Reclamación previa al DPD",
        "difficulty": "hard",
        "text": "Si una entidad tiene delegado de protección de datos y el afectado reclama previamente ante él, ¿en qué plazo debe comunicarle el DPD la decisión adoptada?",
        "options": [
            "En el plazo máximo de dos meses desde la recepción de la reclamación.",
            "En el plazo máximo de diez días hábiles.",
            "No existe plazo, depende de la complejidad del tratamiento."
        ],
        "answer": 0,
        "explanation": "Cuando el afectado se dirige previamente al DPD, este debe comunicarle la decisión adoptada en el plazo máximo de dos meses.",
        "reference": "LO 3/2018, art. 37.1"
    },
    {
        "id": 15,
        "section": section,
        "topic": "LOPDGDD - Transferencias internacionales",
        "difficulty": "medium",
        "text": "Las transferencias internacionales de datos se rigen por...",
        "options": [
            "El RGPD, la LOPDGDD y sus normas de desarrollo.",
            "Únicamente por la normativa interna de cada empresa.",
            "La Ley Orgánica 1/2004, de violencia de género."
        ],
        "answer": 0,
        "explanation": "La LOPDGDD remite el régimen de transferencias internacionales al RGPD, a la propia ley orgánica y a sus normas de desarrollo.",
        "reference": "LO 3/2018, art. 40"
    },
    {
        "id": 16,
        "section": section,
        "topic": "LOPDGDD - Infracciones",
        "difficulty": "hard",
        "text": "Según la LOPDGDD, las infracciones consideradas muy graves prescriben, con carácter general, a los...",
        "options": [
            "Tres años.",
            "Dos años.",
            "Seis meses."
        ],
        "answer": 0,
        "explanation": "La LOPDGDD indica que las infracciones muy graves prescriben a los tres años.",
        "reference": "LO 3/2018, art. 72"
    },
    {
        "id": 17,
        "section": section,
        "topic": "LOPDGDD - Infracciones graves",
        "difficulty": "hard",
        "text": "Las infracciones consideradas graves en la LOPDGDD prescriben a los...",
        "options": [
            "Cuatro años.",
            "Dos años.",
            "Tres meses."
        ],
        "answer": 1,
        "explanation": "Las infracciones graves prescriben a los dos años.",
        "reference": "LO 3/2018, art. 73"
    },
    {
        "id": 18,
        "section": section,
        "topic": "LOPDGDD - Infracciones leves",
        "difficulty": "hard",
        "text": "Las infracciones leves previstas en la LOPDGDD prescriben a...",
        "options": [
            "Un año.",
            "Dos años.",
            "Cinco años."
        ],
        "answer": 0,
        "explanation": "Las infracciones leves prescriben a un año.",
        "reference": "LO 3/2018, art. 74"
    },
    {
        "id": 19,
        "section": section,
        "topic": "LOPDGDD - Derechos digitales",
        "difficulty": "easy",
        "text": "El derecho a la desconexión digital en el ámbito laboral busca garantizar...",
        "options": [
            "El respeto del tiempo de descanso, permisos, vacaciones e intimidad personal y familiar fuera del tiempo de trabajo.",
            "La obligación de responder correos de trabajo en menos de 24 horas.",
            "La prohibición absoluta de usar internet en la empresa."
        ],
        "answer": 0,
        "explanation": "La desconexión digital protege el descanso y la intimidad fuera del tiempo de trabajo legal o convencionalmente establecido.",
        "reference": "LO 3/2018, art. 88"
    },
    {
        "id": 20,
        "section": section,
        "topic": "LOPDGDD - Videovigilancia laboral",
        "difficulty": "medium",
        "text": "En el ámbito laboral, el empleador puede tratar imágenes de cámaras para funciones de control de trabajadores o empleados públicos...",
        "options": [
            "Siempre que se ejerzan dentro del marco legal y con los límites inherentes al mismo.",
            "Sin informar nunca a los trabajadores, por motivos de seguridad.",
            "Solo si las cámaras graban también sonido de forma permanente."
        ],
        "answer": 0,
        "explanation": "La LOPDGDD permite la videovigilancia laboral para funciones de control, pero dentro del marco legal y respetando los límites aplicables.",
        "reference": "LO 3/2018, art. 89"
    },
    {
        "id": 21,
        "section": section,
        "topic": "LO 3/2007 - Objeto",
        "difficulty": "easy",
        "text": "La Ley Orgánica 3/2007 tiene por objeto principal...",
        "options": [
            "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.",
            "Regular el procedimiento administrativo común de las Administraciones públicas.",
            "Regular exclusivamente las medidas penales frente a la violencia de género."
        ],
        "answer": 0,
        "explanation": "La LO 3/2007 busca hacer efectivo el derecho de igualdad de trato y oportunidades, eliminando la discriminación de la mujer en los distintos ámbitos de la vida.",
        "reference": "LO 3/2007, art. 1"
    },
    {
        "id": 22,
        "section": section,
        "topic": "LO 3/2007 - Ámbito de aplicación",
        "difficulty": "medium",
        "text": "Las obligaciones de la Ley Orgánica 3/2007 se aplican a...",
        "options": [
            "Toda persona física o jurídica que se encuentre o actúe en territorio español, cualquiera que sea su nacionalidad, domicilio o residencia.",
            "Solo a las Administraciones públicas estatales.",
            "Solo a empresas públicas de más de 250 trabajadores."
        ],
        "answer": 0,
        "explanation": "El ámbito de aplicación de la LO 3/2007 alcanza a toda persona física o jurídica que se encuentre o actúe en territorio español.",
        "reference": "LO 3/2007, art. 2"
    },
    {
        "id": 23,
        "section": section,
        "topic": "LO 3/2007 - Principio de igualdad",
        "difficulty": "easy",
        "text": "El principio de igualdad de trato entre mujeres y hombres supone...",
        "options": [
            "La ausencia de toda discriminación directa o indirecta por razón de sexo.",
            "La preferencia automática de un sexo sobre otro en todos los procesos selectivos.",
            "La aplicación solo en materia electoral."
        ],
        "answer": 0,
        "explanation": "La igualdad de trato implica ausencia de discriminación directa o indirecta por razón de sexo, incluidas las derivadas de maternidad, obligaciones familiares o estado civil.",
        "reference": "LO 3/2007, art. 3"
    },
    {
        "id": 24,
        "section": section,
        "topic": "LO 3/2007 - Interpretación de normas",
        "difficulty": "medium",
        "text": "La igualdad de trato y oportunidades entre mujeres y hombres, según la LO 3/2007, es...",
        "options": [
            "Un principio informador del ordenamiento jurídico que debe integrarse en la interpretación y aplicación de las normas.",
            "Una recomendación sin efectos jurídicos.",
            "Un principio aplicable solo a los contratos laborales privados."
        ],
        "answer": 0,
        "explanation": "El principio de igualdad informa el ordenamiento jurídico y debe observarse en la interpretación y aplicación de las normas.",
        "reference": "LO 3/2007, art. 4"
    },
    {
        "id": 25,
        "section": section,
        "topic": "LO 3/2007 - Discriminación directa",
        "difficulty": "medium",
        "text": "Existe discriminación directa por razón de sexo cuando...",
        "options": [
            "Una persona es tratada de manera menos favorable que otra en situación comparable por razón de su sexo.",
            "Una medida aparentemente neutra está siempre justificada por una finalidad legítima.",
            "Se adopta una acción positiva razonable para corregir una desigualdad de hecho."
        ],
        "answer": 0,
        "explanation": "La discriminación directa se produce cuando una persona recibe un trato menos favorable que otra comparable por razón de sexo.",
        "reference": "LO 3/2007, art. 6.1"
    },
    {
        "id": 26,
        "section": section,
        "topic": "LO 3/2007 - Discriminación indirecta",
        "difficulty": "medium",
        "text": "La discriminación indirecta por razón de sexo se produce cuando una disposición, criterio o práctica aparentemente neutros...",
        "options": [
            "Ponen a personas de un sexo en desventaja particular respecto de personas del otro, salvo justificación objetiva y proporcional.",
            "Distinguen expresamente entre hombres y mujeres de forma literal.",
            "Son siempre legales aunque generen desigualdad."
        ],
        "answer": 0,
        "explanation": "La discriminación indirecta aparece con reglas aparentemente neutras que generan desventaja particular para un sexo, salvo que estén objetivamente justificadas y sean proporcionadas.",
        "reference": "LO 3/2007, art. 6.2"
    },
    {
        "id": 27,
        "section": section,
        "topic": "LO 3/2007 - Acoso",
        "difficulty": "medium",
        "text": "A efectos de la LO 3/2007, el acoso sexual y el acoso por razón de sexo se consideran...",
        "options": [
            "Discriminatorios.",
            "Faltas administrativas leves sin relación con la igualdad.",
            "Conductas permitidas si se realizan fuera del horario laboral."
        ],
        "answer": 0,
        "explanation": "La ley considera discriminatorios tanto el acoso sexual como el acoso por razón de sexo.",
        "reference": "LO 3/2007, art. 7"
    },
    {
        "id": 28,
        "section": section,
        "topic": "LO 3/2007 - Embarazo y maternidad",
        "difficulty": "easy",
        "text": "Todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye...",
        "options": [
            "Discriminación directa por razón de sexo.",
            "Una medida neutra de organización empresarial.",
            "Un supuesto excluido de la LO 3/2007."
        ],
        "answer": 0,
        "explanation": "La LO 3/2007 califica como discriminación directa por razón de sexo todo trato desfavorable relacionado con embarazo o maternidad.",
        "reference": "LO 3/2007, art. 8"
    },
    {
        "id": 29,
        "section": section,
        "topic": "LO 3/2007 - Acciones positivas",
        "difficulty": "medium",
        "text": "Las acciones positivas previstas en la LO 3/2007 son medidas específicas...",
        "options": [
            "A favor de las mujeres para corregir situaciones patentes de desigualdad de hecho, razonables y proporcionadas.",
            "Que prohíben cualquier medida diferenciada en favor de las mujeres.",
            "Que solo pueden ser adoptadas por empresas privadas."
        ],
        "answer": 0,
        "explanation": "Los poderes públicos pueden adoptar acciones positivas para corregir desigualdades de hecho, siempre que sean razonables y proporcionadas.",
        "reference": "LO 3/2007, art. 11"
    },
    {
        "id": 30,
        "section": section,
        "topic": "LO 3/2007 - Transversalidad",
        "difficulty": "medium",
        "text": "La transversalidad del principio de igualdad implica que...",
        "options": [
            "Debe informar la actuación de todos los Poderes Públicos y ser integrada activamente en políticas públicas y normas.",
            "Solo afecta a las políticas de recursos humanos de empresas privadas.",
            "Se aplica únicamente en campañas electorales."
        ],
        "answer": 0,
        "explanation": "La transversalidad exige integrar el principio de igualdad en la actuación de los poderes públicos, normas, presupuestos y políticas públicas.",
        "reference": "LO 3/2007, art. 15"
    },
    {
        "id": 31,
        "section": section,
        "topic": "LO 3/2007 - Plan Estratégico",
        "difficulty": "easy",
        "text": "¿Qué órgano aprueba periódicamente el Plan Estratégico de Igualdad de Oportunidades en materias de competencia estatal?",
        "options": [
            "El Gobierno.",
            "El Tribunal Constitucional.",
            "Cada empresa mediante su comité de seguridad."
        ],
        "answer": 0,
        "explanation": "El Gobierno aprobará periódicamente un Plan Estratégico de Igualdad de Oportunidades para alcanzar la igualdad y eliminar la discriminación por razón de sexo.",
        "reference": "LO 3/2007, art. 17"
    },
    {
        "id": 32,
        "section": section,
        "topic": "LO 3/2007 - Educación",
        "difficulty": "medium",
        "text": "Según la LO 3/2007, el sistema educativo incluirá entre sus fines...",
        "options": [
            "La educación en igualdad de derechos y oportunidades entre mujeres y hombres.",
            "La separación obligatoria por sexo en todas las etapas educativas.",
            "La formación exclusiva en derechos laborales."
        ],
        "answer": 0,
        "explanation": "La ley incorpora la educación en igualdad y el respeto de los derechos y libertades fundamentales entre los fines del sistema educativo.",
        "reference": "LO 3/2007, art. 23"
    },
    {
        "id": 33,
        "section": section,
        "topic": "LO 3/2007 - Sociedad de la información",
        "difficulty": "medium",
        "text": "Los programas públicos de desarrollo de la Sociedad de la Información deben incorporar...",
        "options": [
            "La consideración efectiva del principio de igualdad de oportunidades entre mujeres y hombres en su diseño y ejecución.",
            "Solo criterios técnicos de conectividad, sin perspectiva de igualdad.",
            "La prioridad obligatoria de contratación de proveedores extranjeros."
        ],
        "answer": 0,
        "explanation": "La LO 3/2007 exige integrar la igualdad de oportunidades entre mujeres y hombres en el diseño y ejecución de estos programas públicos.",
        "reference": "LO 3/2007, art. 28"
    },
    {
        "id": 34,
        "section": section,
        "topic": "LO 3/2007 - Planes de igualdad",
        "difficulty": "easy",
        "text": "Como regla general actual, las empresas obligadas a elaborar y aplicar un plan de igualdad son las que tienen...",
        "options": [
            "50 o más personas trabajadoras.",
            "10 o más personas trabajadoras.",
            "Solo más de 500 personas trabajadoras."
        ],
        "answer": 0,
        "explanation": "Tras las modificaciones normativas, las empresas de 50 o más personas trabajadoras deben elaborar y aplicar un plan de igualdad.",
        "reference": "LO 3/2007, art. 45.2"
    },
    {
        "id": 35,
        "section": section,
        "topic": "LO 3/2007 - Concepto de plan de igualdad",
        "difficulty": "medium",
        "text": "Un plan de igualdad de empresa es...",
        "options": [
            "Un conjunto ordenado de medidas, tras diagnóstico, para alcanzar igualdad de trato y oportunidades y eliminar la discriminación por razón de sexo.",
            "Un registro de control horario de la plantilla.",
            "Una declaración voluntaria sin medidas ni seguimiento."
        ],
        "answer": 0,
        "explanation": "El plan de igualdad se basa en un diagnóstico y fija objetivos, estrategias, prácticas y sistemas de seguimiento y evaluación.",
        "reference": "LO 3/2007, art. 46"
    },
    {
        "id": 36,
        "section": section,
        "topic": "LO 3/2007 - Composición equilibrada",
        "difficulty": "hard",
        "text": "A efectos de la LO 3/2007, se entiende por composición equilibrada la presencia de mujeres y hombres de forma que cada sexo...",
        "options": [
            "No supere el 60% ni sea menos del 40%.",
            "No supere el 80% ni sea menos del 20%.",
            "Esté representado exactamente al 50%."
        ],
        "answer": 0,
        "explanation": "La composición equilibrada se define como presencia de cada sexo entre el 40% y el 60% del conjunto correspondiente.",
        "reference": "LO 3/2007, disposición adicional primera"
    },
    {
        "id": 37,
        "section": section,
        "topic": "LO 1/2004 - Objeto",
        "difficulty": "easy",
        "text": "La Ley Orgánica 1/2004 actúa contra la violencia que se ejerce sobre las mujeres por parte de...",
        "options": [
            "Quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia.",
            "Cualquier persona desconocida, en cualquier contexto y sin relación afectiva previa, exclusivamente.",
            "Únicamente compañeros de trabajo en el ámbito laboral."
        ],
        "answer": 0,
        "explanation": "La LO 1/2004 se centra en la violencia ejercida por cónyuges o personas ligadas por relaciones similares de afectividad, incluso sin convivencia.",
        "reference": "LO 1/2004, art. 1"
    },
    {
        "id": 38,
        "section": section,
        "topic": "LO 1/2004 - Naturaleza integral",
        "difficulty": "easy",
        "text": "La LO 1/2004 se denomina de protección integral porque aborda, entre otros ámbitos...",
        "options": [
            "Prevención, educación, asistencia social, sanidad, protección judicial y respuesta penal/civil.",
            "Solo sanciones administrativas de tráfico.",
            "Exclusivamente la protección de datos de las víctimas."
        ],
        "answer": 0,
        "explanation": "La norma ofrece una respuesta global e integral: preventiva, educativa, asistencial, sanitaria, judicial y penal/civil.",
        "reference": "LO 1/2004, exposición de motivos y art. 2"
    },
    {
        "id": 39,
        "section": section,
        "topic": "LO 1/2004 - Principios rectores",
        "difficulty": "medium",
        "text": "Uno de los principios rectores de la LO 1/2004 es...",
        "options": [
            "Fortalecer las medidas de sensibilización ciudadana de prevención con instrumentos eficaces en ámbitos como el educativo, sanitario, social, publicitario y mediático.",
            "Limitar la actuación pública exclusivamente al castigo penal posterior.",
            "Excluir la formación de profesionales que intervienen con víctimas."
        ],
        "answer": 0,
        "explanation": "La ley articula medidas integrales, incluyendo sensibilización y prevención en varios ámbitos, no solo respuesta penal posterior.",
        "reference": "LO 1/2004, art. 2"
    },
    {
        "id": 40,
        "section": section,
        "topic": "LO 1/2004 - Derechos de las víctimas",
        "difficulty": "easy",
        "text": "Todas las mujeres víctimas de violencia de género tienen garantizados los derechos reconocidos en la LO 1/2004...",
        "options": [
            "Sin que pueda existir discriminación en el acceso a los mismos.",
            "Solo si existe sentencia firme previa.",
            "Solo si tienen nacionalidad española."
        ],
        "answer": 0,
        "explanation": "La ley garantiza los derechos de las víctimas sin discriminación en el acceso a los mismos.",
        "reference": "LO 1/2004, art. 17"
    },
    {
        "id": 41,
        "section": section,
        "topic": "LO 1/2004 - Información",
        "difficulty": "medium",
        "text": "El derecho a la información de las mujeres víctimas de violencia de género comprende información sobre...",
        "options": [
            "Medidas de protección y seguridad, derechos, ayudas y lugar de prestación de servicios de atención, emergencia, apoyo y recuperación integral.",
            "Únicamente el número de expediente judicial.",
            "Solo los datos estadísticos anuales de violencia de género."
        ],
        "answer": 0,
        "explanation": "La información debe ser plena y adecuada a la situación personal de la víctima e incluir protección, seguridad, derechos, ayudas y recursos de atención.",
        "reference": "LO 1/2004, art. 18"
    },
    {
        "id": 42,
        "section": section,
        "topic": "LO 1/2004 - Atención integral",
        "difficulty": "medium",
        "text": "La atención multidisciplinar a las víctimas de violencia de género incluye, entre otras prestaciones...",
        "options": [
            "Información, atención psicológica, apoyo social, apoyo educativo, formación preventiva e inserción laboral.",
            "Solo una indemnización económica automática.",
            "Únicamente vigilancia policial permanente en todos los casos."
        ],
        "answer": 0,
        "explanation": "La atención integral incluye varias dimensiones: información, atención psicológica, apoyo social, educativo, formación preventiva y apoyo a la formación e inserción laboral.",
        "reference": "LO 1/2004, art. 19"
    },
    {
        "id": 43,
        "section": section,
        "topic": "LO 1/2004 - Asistencia jurídica",
        "difficulty": "medium",
        "text": "Las víctimas de violencia de género tienen derecho a asesoramiento jurídico gratuito...",
        "options": [
            "En el momento inmediatamente previo a la interposición de la denuncia.",
            "Solo después de sentencia condenatoria firme.",
            "Únicamente si no existen hijos menores."
        ],
        "answer": 0,
        "explanation": "La ley reconoce asesoramiento jurídico gratuito inmediatamente antes de interponer denuncia y defensa y representación gratuitas en procesos vinculados a la violencia padecida.",
        "reference": "LO 1/2004, art. 20"
    },
    {
        "id": 44,
        "section": section,
        "topic": "LO 1/2004 - Derechos laborales",
        "difficulty": "medium",
        "text": "Entre los derechos laborales de la trabajadora víctima de violencia de género se encuentran...",
        "options": [
            "Reducción o reordenación del tiempo de trabajo, movilidad geográfica, cambio de centro, suspensión o extinción del contrato en los términos previstos.",
            "La obligación de abandonar definitivamente el empleo.",
            "La pérdida automática de antigüedad y derechos laborales."
        ],
        "answer": 0,
        "explanation": "La LO 1/2004 reconoce medidas laborales para hacer efectiva la protección y asistencia social integral de la víctima.",
        "reference": "LO 1/2004, art. 21"
    },
    {
        "id": 45,
        "section": section,
        "topic": "LO 1/2004 - Funcionarias públicas",
        "difficulty": "medium",
        "text": "La funcionaria víctima de violencia de género tiene derecho, entre otros, a...",
        "options": [
            "Reducción o reordenación del tiempo de trabajo, movilidad geográfica de centro de trabajo y excedencia.",
            "La pérdida de su condición de funcionaria por ausencias justificadas.",
            "La suspensión automática de todos sus derechos administrativos."
        ],
        "answer": 0,
        "explanation": "La ley reconoce a la funcionaria víctima derechos de reducción o reordenación del tiempo de trabajo, movilidad geográfica y excedencia conforme a su legislación específica.",
        "reference": "LO 1/2004, art. 24"
    },
    {
        "id": 46,
        "section": section,
        "topic": "LO 1/2004 - Ausencias justificadas",
        "difficulty": "medium",
        "text": "Las ausencias totales o parciales al trabajo de una funcionaria motivadas por la situación física o psicológica derivada de la violencia de género...",
        "options": [
            "Se consideran justificadas en los términos que determine su legislación específica.",
            "Se consideran siempre faltas disciplinarias graves.",
            "Solo se justifican si duran menos de una hora."
        ],
        "answer": 0,
        "explanation": "La LO 1/2004 contempla la justificación de estas ausencias en los términos establecidos por la legislación específica aplicable.",
        "reference": "LO 1/2004, art. 25"
    },
    {
        "id": 47,
        "section": section,
        "topic": "LO 1/2004 - Acreditación",
        "difficulty": "hard",
        "text": "Las situaciones de violencia de género pueden acreditarse, entre otros medios, mediante...",
        "options": [
            "Sentencia condenatoria, orden de protección, resolución judicial con medida cautelar, informe del Ministerio Fiscal o informes de servicios sociales/especializados en los casos previstos.",
            "Solo mediante sentencia firme del Tribunal Supremo.",
            "Únicamente mediante declaración privada de la empresa."
        ],
        "answer": 0,
        "explanation": "El artículo 23 recoge varios medios de acreditación: sentencia, orden de protección, resolución judicial, informe del Ministerio Fiscal e informes de servicios competentes, entre otros previstos normativamente.",
        "reference": "LO 1/2004, art. 23"
    },
    {
        "id": 48,
        "section": section,
        "topic": "LO 1/2004 - Menores",
        "difficulty": "medium",
        "text": "Respecto a los menores en el entorno familiar de la víctima, la LO 1/2004 contempla...",
        "options": [
            "Su protección, al considerarlos afectados directa o indirectamente por la violencia sobre la mujer.",
            "Su exclusión total de las medidas de asistencia social integral.",
            "Solo su intervención como testigos en juicio penal."
        ],
        "answer": 0,
        "explanation": "La ley contempla la protección de los menores que se encuentran en el entorno familiar, como víctimas directas o indirectas de esta violencia.",
        "reference": "LO 1/2004, exposición de motivos y art. 19.5"
    },
    {
        "id": 49,
        "section": section,
        "topic": "LO 1/2004 - Juzgados de Violencia sobre la Mujer",
        "difficulty": "medium",
        "text": "La LO 1/2004 opta por una fórmula judicial basada en...",
        "options": [
            "La especialización dentro del orden penal, creando Juzgados de Violencia sobre la Mujer.",
            "La creación de un nuevo orden jurisdiccional independiente del penal y civil.",
            "La atribución exclusiva de todos los asuntos a los juzgados mercantiles."
        ],
        "answer": 0,
        "explanation": "La ley crea Juzgados de Violencia sobre la Mujer mediante especialización dentro del orden penal, sin crear un orden jurisdiccional nuevo.",
        "reference": "LO 1/2004, exposición de motivos y Título V"
    },
    {
        "id": 50,
        "section": section,
        "topic": "LO 1/2004 - Medidas cautelares y protección",
        "difficulty": "hard",
        "text": "En procedimientos relacionados con violencia de género, el juez competente debe pronunciarse sobre medidas cautelares y de aseguramiento...",
        "options": [
            "De oficio o a instancia de las víctimas, hijos, convivientes, Ministerio Fiscal o Administración competente en atención a víctimas/acogida.",
            "Solo si lo solicita expresamente el agresor.",
            "Únicamente al finalizar la ejecución de la sentencia."
        ],
        "answer": 0,
        "explanation": "El juez debe valorar la adopción de medidas cautelares y de aseguramiento, especialmente las de salida del domicilio, alejamiento o suspensión de comunicaciones, según corresponda.",
        "reference": "LO 1/2004, art. 61 y ss."
    }
]