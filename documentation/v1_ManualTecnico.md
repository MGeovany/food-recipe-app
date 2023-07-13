# <a name="_toc18678"></a>**Manual Técnico para la aplicación ¿Qué vamos a comer hoy?**

El presente manual técnico tiene como objetivo brindar una descripción detallada y exhaustiva de la aplicación móvil "¿Qué vamos a comer hoy?". Está diseñado para proporcionar a los desarrolladores, programadores y demás personas involucradas en el desarrollo, implementación y mantenimiento de la aplicación, la información necesaria para comprender su arquitectura, funcionalidades, tecnologías utilizadas y procesos de configuración y mantenimiento.

# <a name="_toc2878"></a>**Tabla de contenido**

[Manual Técnico para la aplicación ¿Qué vamos a comer hoy? 1](#_toc18678)

[Tabla de contenido 2](#_toc2878)

[1. Propósito 4](#_toc1680)

[2. Alcance 4](#_toc18888)

[2.1. Límites del documento 4](#_toc11653)

[2.2. Usuarios a quienes está dirigido 4](#_toc21330)

[2.3. Conocimientos básicos requeridos 5](#_toc9042)

[3. Documentos de referencia 6](#_toc4551)

[3.1. Criterios de aceptación de Sistemas cuando éstos estén desarrollados en la organización 6](#_toc762)

[3.2. Documentación del código en GitHub 6](#_toc12768)

[3.3. Manual de usuario 6](#_toc13600)

[3.4. Documentación de la API en Rapid API 7](#_toc30007)

[4. Definiciones importantes 7](#_toc10842)

[4.1. Marco Teórico 7](#_toc29163)

[4.1.1. Hardware requerido 8](#_toc20672)

[4.1.2. Software requerido 8](#_toc5207)

[4.1.3. Metodología de desarrollo 8](#_toc26430)

[4.2. Conceptos generales 9](#_toc7094)

[4.3. Recetas 9](#_toc9271)

[4.3.1. Preferencias culinarias 9](#_toc20645)

[4.3.2. Planificación de comidas 9](#_toc4729)

[4.4. Procesos de entrada y salida 9](#_toc27865)

[4.4.1. Procesos de Entrada 10](#_toc24208)

[4.4.2. Procesos de Salida 11](#_toc9621)

[5. Descripción de Módulos 11](#_toc24571)

[5.1. Inicio 11](#_toc5781)

[5.2. Búsqueda 12](#_toc17624)

[5.3. Encuesta 12](#_toc31113)

[5.4. Favoritos 12](#_toc15349)

[5.5. Recomendaciones del día 13](#_toc13925)

[6. Diccionario de datos 13](#_toc6253)

[5.6. Distribucion fisica y logica de la base de datos 13](#_toc31486)

[5.6.1. Tabla "users": 13](#_toc830)

[5.6.2. Tabla "favorites": 14](#_toc15573)

[5.6.3. Tabla "userRecipes": 14](#_toc12921)

[5.6.4. Tabla "houses": 14](#_toc24067)

[5.6.5. Tabla "votesTable": 15](#_toc6902)

[6. Instalación y configuración 15](#_toc13975)

[6.1. Instalación y Configuración 15](#_toc30905)

[6.1.1. Requisitos Generales Pre-Instalación 15](#_toc3568)

[7. Instalación y configuración 18](#_toc11113)

[7.1. Detalles de Configuración de la Aplicación 18](#_toc11220)

[7.1.1. Variables de Ambiente 18](#_toc3971)

[7.1.2. Parámetros de Aplicaciones 19](#_toc10068)

[7.1.3. Archivos de Configuración 19](#_toc565)

[7.1.4. Archivos de Bitácora 20](#_toc2496)

[7.1.5. Tareas Programadas 20](#_toc27911)

[7.1.6. Lista de Contactos Técnicos 20](#_toc20015)

[8. Diseno de la arquitectura fisica 20](#_toc24496)

[8.1. Servidores 21](#_toc19057)

[8.2. Base de datos 21](#_toc12757)

[8.3. Seguridad 21](#_toc13410)

[9. Descripción de usuarios 21](#_toc13188)

[9.1. Usuarios de base de datos: 22](#_toc20209)

[9.2. Usuarios de sistema operativo: 22](#_toc27295)

[9.3. Usuarios de aplicaciones: 22](#_toc25699)

1. # <a name="_toc1680"></a>**Propósito**
   El propósito de este manual técnico es proporcionar una guía detallada y completa sobre la aplicación móvil "¿Qué vamos a comer hoy?". El manual está diseñado para ayudar a los desarrolladores, programadores y otros profesionales involucrados en el desarrollo, implementación y mantenimiento de la aplicación, a comprender su propósito fundamental y los objetivos que busca alcanzar.
1. # <a name="_toc57100009"></a><a name="_toc403583734"></a><a name="_toc95723656"></a><a name="_toc18888"></a>**Alcance**
   El alcance de este manual técnico está destinado a proporcionar información detallada sobre la aplicación móvil "¿Qué vamos a comer hoy?" a los clientes internos y externos del área de Tecnología. Este capítulo establecerá los límites del documento, los usuarios a quienes está dirigido y los conocimientos básicos necesarios para comprender los apartados descritos.

## <a name="_toc11653"></a>**_2.1. Límites del documento_**

Este manual técnico tiene como objetivo cubrir los aspectos esenciales relacionados con el desarrollo, implementación y mantenimiento de la aplicación "¿Qué vamos a comer hoy?". Si bien se pretende abordar los temas fundamentales, es importante tener en cuenta que no todas las soluciones o características específicas pueden estar incluidas en este documento. La inclusión de datos y funcionalidades específicas dependerá de la naturaleza del software y será evaluada por el docente asesor.

## <a name="_toc21330"></a>**_2.2. Usuarios a quienes está dirigido_**

Este manual técnico está dirigido principalmente a los profesionales del área de Tecnología, incluyendo desarrolladores, programadores, arquitectos de software y personal de soporte técnico. Estos usuarios deben tener un conocimiento básico de los principios de desarrollo de aplicaciones móviles y estar familiarizados con los lenguajes de programación, frameworks y tecnologías comunes en este campo.

Además, este manual puede ser útil para otros profesionales involucrados en el proyecto de desarrollo de la aplicación, como analistas de negocio, diseñadores de interfaz de usuario y gerentes de proyecto. Aunque no posean conocimientos técnicos avanzados, podrán comprender los conceptos generales y la estructura de la aplicación descrita en este manual.

## <a name="_toc9042"></a>**_2.3. Conocimientos básicos requeridos_**

Para comprender y utilizar eficazmente este manual técnico, se requieren los siguientes conocimientos básicos:

Conocimientos de programación: Se espera que los usuarios tengan familiaridad con al menos un lenguaje de programación utilizado en el desarrollo de aplicaciones móviles, como Java, Swift o Kotlin.

Conocimientos de desarrollo de aplicaciones móviles: Los usuarios deben tener una comprensión general de los principios y prácticas comunes en el desarrollo de aplicaciones móviles, incluyendo la arquitectura de aplicaciones, el ciclo de vida de una aplicación y las buenas prácticas de codificación.

Familiaridad con frameworks y tecnologías móviles: Es beneficioso tener experiencia o conocimientos previos en el uso de frameworks y tecnologías comunes en el desarrollo de aplicaciones móviles, como React Native, Node JS, APIs de servicios web, entre otros.

Comprensión de conceptos de base de datos: Se espera que los usuarios tengan un conocimiento básico de los conceptos de bases de datos, como tablas, consultas y relaciones, ya que la aplicación "¿Qué vamos a comer hoy?" puede utilizar una base de datos para almacenar recetas, perfiles de usuario y otra información relevante en PostgreSQL.

1. # <a name="_toc403583735"></a><a name="_toc4551"></a>**Documentos de referencia**
   En este capítulo, se proporcionará una lista de los documentos de referencia relacionados con la solución de la aplicación móvil "¿Qué vamos a comer hoy?". Estos documentos complementan los conceptos tratados en este manual técnico y brindan información adicional relevante para su comprensión y aplicación adecuada. A continuación, se enumeran algunos ejemplos de documentos de referencia:
1. ### <a name="_toc762"></a>**Criterios de aceptación de Sistemas cuando éstos estén desarrollados en la organización**
   Estos criterios proporcionan directrices y requisitos para la aceptación de sistemas desarrollados internamente, y pueden ser útiles para asegurar la calidad y cumplimiento de la aplicación.
1. ## <a name="_toc12768"></a>**_Documentación del código en GitHub_**

   La documentación del código en GitHub es un recurso importante para comprender en profundidad la estructura, la lógica y las funcionalidades implementadas en la aplicación. Se proporcionará el enlace al repositorio de GitHub que contiene el código fuente de la aplicación, junto con la documentación correspondiente. Los usuarios pueden acceder a este repositorio para explorar el código, familiarizarse con la arquitectura del software y obtener información detallada sobre las diferentes partes de la aplicación.
   _Enlace: [https://github.com/MGeovany/food-recipe-app_](https://github.com/MGeovany/food-recipe-app)\*

1. ## <a name="_toc13600"></a>**_Manual de usuario_**
   El manual de usuario es un documento clave que brinda instrucciones detalladas sobre cómo utilizar la aplicación "¿Qué vamos a comer hoy?" desde la perspectiva de un usuario final. Proporciona orientación sobre cómo navegar por la interfaz, acceder a las funcionalidades, configurar preferencias, buscar recetas, planificar comidas y aprovechar al máximo la aplicación en general. Este manual está diseñado para ayudar a los usuarios a comprender y utilizar eficazmente la aplicación, brindando una experiencia fluida y satisfactoria.

_Enlace: [https://github.com/MGeovany/food-recipe-app/tree/master/documentation_](https://github.com/MGeovany/food-recipe-app/tree/master/documentation)\*

1. ## <a name="_toc30007"></a>**_Documentación de la API en Rapid API_**
   La documentación de la API en RAPID API es un recurso importante para los usuarios que deseen integrar la aplicación "¿Qué vamos a comer hoy?" con otros sistemas o servicios. RAPID API proporciona una plataforma para acceder y consumir APIs de terceros, lo que puede ampliar las funcionalidades y la disponibilidad de datos de la aplicación. La documentación de la API en Rapid API incluirá detalles sobre las diferentes endpoints, los parámetros de solicitud, los formatos de respuesta y los requisitos de autenticación, entre otros aspectos relevantes. Esto permitirá a los usuarios comprender cómo interactuar con la API y utilizarla de manera efectiva en sus propias integraciones.

_Enlace: [https://rapidapi.com/spoonacular/api/recipe-food-nutrition_](https://rapidapi.com/spoonacular/api/recipe-food-nutrition)\*

1. # <a name="_toc10842"></a>**Definiciones importantes**
   En este capítulo, se presentarán las definiciones importantes necesarias para comprender el contexto, el hardware y el software requeridos, así como los procesos de entrada y salida del sistema de la aplicación móvil "¿Qué vamos a comer hoy?". Estas definiciones proporcionarán una base sólida para comprender los conceptos clave relacionados con el desarrollo e implementación de la aplicación.
1. ## <a name="_toc29163"></a>**_Marco Teórico_**
   En el marco teórico, se proporcionará información relevante sobre el hardware y software necesarios para el desarrollo e implementación del sistema de la aplicación. Esto puede incluir detalles sobre los requisitos mínimos de hardware y los sistemas operativos compatibles en dispositivos móviles, así como los lenguajes de programación y las herramientas de desarrollo utilizadas para construir la aplicación.
1. ### ` `**<a name="_toc20672"></a>Hardware requerido**
   Para el funcionamiento de la aplicación, se requerirá un dispositivo móvil compatible, como un teléfono inteligente o una tableta, con ciertos requisitos mínimos de hardware. Estos requisitos pueden incluir especificaciones tales como procesador, memoria RAM y capacidad de almacenamiento, que permitan ejecutar la aplicación de manera eficiente y sin problemas. Es importante tener en cuenta estas especificaciones para asegurar una experiencia óptima para los usuarios.
1. ### <a name="_toc5207"></a>**Software requerido**
   El software requerido para la aplicación "¿Qué vamos a comer hoy?" incluye tanto el sistema operativo del dispositivo móvil como las herramientas y lenguajes de programación utilizados en el desarrollo de la aplicación. La aplicación debe ser compatible con los sistemas operativos más comunes, como Android e iOS, para garantizar que pueda llegar a la mayor cantidad de usuarios posible.

En cuanto a las herramientas y lenguajes de programación, se pueden utilizar tecnologías como React Native. Estas herramientas permiten crear una aplicación móvil que funcione en diferentes sistemas operativos, lo que simplifica el proceso de desarrollo y mantenimiento.

1. ### <a name="_toc26430"></a>**Metodología de desarrollo**
   Durante el proceso de construcción de la aplicación, se utilizó una metodología específica para garantizar un desarrollo eficiente y efectivo. Se empleo una metodología ágil SCUM, que se caracteriza por la colaboración, la iteración y la entrega continua de incrementos funcionales. Estas metodologías permiten adaptarse a los cambios y recibir retroalimentación constante de los usuarios para mejorar la calidad y la usabilidad de la aplicación.

Al seguir una metodología ágil, se pueden realizar entregas periódicas de funcionalidades y realizar ajustes según las necesidades y preferencias de los usuarios. Esto asegura un enfoque centrado en el usuario y permite una evolución continua de la aplicación a lo largo del tiempo.

1. ## <a name="_toc7094"></a>**_Conceptos generales_**
1. ### `  `**<a name="_toc9271"></a>Recetas**
   Las recetas son instrucciones detalladas que guían a los usuarios en la preparación de platos específicos. En la aplicación "¿Qué vamos a comer hoy?", las recetas constituyen el corazón de la experiencia culinaria. Cada receta incluye información sobre los ingredientes necesarios, los pasos de preparación y, en algunos casos, consejos adicionales. Los usuarios podrán explorar una amplia variedad de recetas y seleccionar las que más les gusten para cocinar en casa.
1. ### ` `**<a name="_toc20645"></a>Preferencias culinarias**
   Las preferencias culinarias se refieren a las elecciones individuales que los usuarios tienen en términos de alimentos, sabores y estilos de cocina. En la aplicación, los usuarios podrán establecer sus preferencias culinarias, como restricciones dietéticas (vegetariano, sin gluten, etc.), preferencias de ingredientes o estilos de cocina favoritos. Estas preferencias ayudarán a personalizar la experiencia de la aplicación y a recibir recomendaciones más relevantes y adaptadas a los gustos de cada usuario.
1. ### ` `**<a name="_toc4729"></a>Planificación de comidas**
   La planificación de comidas implica la organización anticipada de las comidas a lo largo de la semana. En la aplicación "¿Qué vamos a comer hoy?", los usuarios podrán utilizar herramientas de planificación para establecer un menú semanal, seleccionar recetas y generar listas de compras. Esta funcionalidad facilita la organización de las comidas y la gestión de los ingredientes necesarios, ahorrando tiempo y esfuerzo a los usuarios.
1. ## ` `**_<a name="_toc27865"></a>Procesos de entrada y salida_**

En esta parte del capítulo, se describirán detalladamente los procesos de entrada y salida que son fundamentales para el funcionamiento de la aplicación. Se explicarán los diferentes tipos de datos que se requieren como entrada para la aplicación, como las preferencias culinarias del usuario, la disponibilidad de ingredientes y las restricciones dietéticas. Además, se explicarán los resultados y las salidas esperadas de la aplicación, como las recetas sugeridas, las listas de compras generadas y las opciones de planificación de comidas.

1. ### ` `**<a name="_toc24208"></a>Procesos de Entrada**

1. #### **Preferencias del usuario**

   El proceso de entrada comienza con la configuración de las preferencias del usuario. En la aplicación, los usuarios podrán establecer sus preferencias culinarias, como ser comidas favoritas. Estas preferencias ayudarán a personalizar la experiencia de la aplicación y a proporcionar recomendaciones relevantes basadas en los gustos individuales de cada usuario.

1. #### **Selección de recetas**
   Una vez configuradas las preferencias, los usuarios podrán seleccionar las recetas que deseen cocinar. La aplicación ofrecerá una amplia variedad de recetas basadas en las preferencias establecidas y otros criterios relevantes. Los usuarios podrán explorar las opciones, leer las descripciones y seleccionar las recetas que más les interesen para incluirlas en su plan de comidas.
1. #### **Planificación de comidas**

   La planificación de comidas es otro proceso de entrada clave en la aplicación. Los usuarios podrán utilizar herramientas de planificación para establecer que comidas deseas realizar los miembros de la familia. Durante este proceso, los usuarios podrán organizar sus comidas de manera anticipada, asegurándose de que cada uno de los usuarios esten al tanto de las comidas que se desean realizar en el hogar.

1. ### <a name="_toc9621"></a>**Procesos de Salida**

   1. #### **Recetas y pasos de preparación**
      El principal resultado de la aplicación son las recetas y los pasos de preparación detallados. Después de seleccionar una receta, los usuarios podrán acceder a la lista de ingredientes y a los pasos de preparación necesarios para cocinar el plato deseado. Estos pasos proporcionarán instrucciones claras y detalladas sobre cómo combinar los ingredientes, llevar a cabo los procesos de cocción y presentar el plato final.

1. # <a name="_toc24571"></a>**Descripción de Módulos**
   En este capítulo, se presentará una descripción de los diferentes módulos que componen la aplicación móvil "¿Qué vamos a comer hoy?". Cada módulo desempeña un papel importante en la funcionalidad y el propósito general de la aplicación, proporcionando a los usuarios diversas características y opciones para facilitar la planificación de comidas y descubrir nuevas recetas. A continuación, se detallan los módulos principales:
1. ## <a name="_toc5781"></a>**_Inicio_**
   Funcionalidad/Propósito: El módulo "Home" es la pantalla de inicio de la aplicación. Proporciona una visión general de las características principales, como las recetas recomendadas, las categorías de comidas populares y las opciones de búsqueda. Es un punto de partida para que los usuarios exploren y accedan a otras secciones de la aplicación.

Dependencias funcionales: El módulo "Home" puede depender de la disponibilidad de datos actualizados sobre las recomendaciones del día y las categorías de comidas.

1. ## <a name="_toc17624"></a>**_Búsqueda_**
   Funcionalidad/Propósito: El módulo de "Búsqueda" permite a los usuarios buscar recetas específicas o explorar por ingredientes, tipos de cocina o restricciones dietéticas. Proporciona una interfaz intuitiva para que los usuarios encuentren rápidamente las recetas que desean cocinar.

Dependencias funcionales: El módulo de "Búsqueda" depende de una base de datos actualizada de recetas y de la capacidad de realizar búsquedas eficientes en función de los criterios ingresados por los usuarios.

1. ## <a name="_toc31113"></a>**_Encuesta_**
   Funcionalidad/Propósito: El módulo "Encuesta" permite a los usuarios responder preguntas rápidas para determinar qué tipo de comida desean comer en un día específico. Con base en las respuestas, la aplicación sugerirá recetas adecuadas para la ocasión.

Dependencias funcionales: El módulo de "Encuesta" depende de un conjunto de preguntas predefinidas y una lógica que interprete las respuestas y genere recomendaciones de recetas apropiadas.

1. ## <a name="_toc15349"></a>**_Favoritos_**
   Funcionalidad/Propósito: El módulo de "Favoritos" permite a los usuarios guardar y organizar las recetas que les gustan. Los usuarios pueden marcar las recetas como favoritas y acceder rápidamente a ellas en futuras ocasiones.

Dependencias funcionales: El módulo de "Favoritos" depende de la capacidad de los usuarios para guardar y recuperar recetas marcadas como favoritas, y mantener una lista actualizada de las mismas.

1. ## <a name="_toc13925"></a>**_Recomendaciones del día_**
   Funcionalidad/Propósito: El módulo de "Recomendaciones del día" muestra a los usuarios una selección diaria de recetas recomendadas basadas en diferentes criterios, como las preferencias establecidas, las tendencias populares o las recetas más nuevas añadidas a la aplicación.

Dependencias funcionales: El módulo de "Recomendaciones del día" depende de algoritmos y lógica de recomendación que procesen datos sobre las preferencias de los usuarios y las características de las recetas disponibles.

# <a name="_toc403583741"></a><a name="_toc6253"></a>**6. Diccionario de datos**

En este capítulo, se proporcionará un diccionario de datos para la aplicación móvil "¿Qué vamos a comer hoy?". Se incluirán detalles sobre el modelo entidad-relación, la distribución física y lógica de la base de datos, las tablas, vistas, triggers, restricciones especiales, funciones de usuario, stored procedures, paquetes, tareas programadas y Data Transformation Services (DTS) utilizados en la solución. A continuación, se describirán cada una de estas secciones:

1. ## <a name="_toc31486"></a>**_Distribucion fisica y logica de la base de datos_**

   La base de datos utilizada en la aplicación "¿Qué vamos a comer hoy?" se denomina "food_recipe_app_db". A continuación, se describen las tablas que componen la base de datos y sus características:

1. ### <a name="_toc830"></a>**Tabla "users":**
   Descripción: Esta tabla almacena información sobre los usuarios de la aplicación.

Atributos:

id: Identificador único del usuario (tipo SERIAL).

userName: Nombre de usuario (tipo VARCHAR(255)).

created_at: Fecha y hora de creación del usuario (tipo TIMESTAMP) con un valor predeterminado de la fecha y hora actual.

1. ### <a name="_toc15573"></a>**Tabla "favorites":**
   Descripción: Esta tabla guarda las recetas favoritas de los usuarios.

Atributos:

user_id: ID del usuario al que pertenece la receta favorita, se relaciona con la tabla "users" (tipo INT).

recipe_id: ID de la receta favorita (tipo VARCHAR(255)).

PRIMARY KEY: La clave primaria está compuesta por los campos "user_id" y "recipe_id".

1. ### <a name="_toc12921"></a>**Tabla "userRecipes":**
   Descripción: Esta tabla registra las recetas agregadas por los usuarios.

Atributos:

id: Identificador único de la receta agregada por el usuario (tipo SERIAL).

user_id: ID del usuario que agregó la receta, se relaciona con la tabla "users" (tipo INT).

recipe_id: ID de la receta agregada (tipo VARCHAR(255)).

vote_count: Contador de votos para la receta (tipo INT) con un valor predeterminado de 0.

house_id: ID de la casa asociada a la receta, se relaciona con la tabla "houses" (tipo INT).

created_at: Fecha y hora de creación de la receta (tipo TIMESTAMP) con un valor predeterminado de la fecha y hora actual.

1. ### <a name="_toc24067"></a>**Tabla "houses":**
   Descripción: Esta tabla almacena información sobre las casas asociadas a las recetas.

Atributos:

house_id: Identificador único de la casa (tipo SERIAL).

house_name: Nombre de la casa (tipo VARCHAR(255)) que no puede ser nulo.

user_ids: Arreglo de IDs de usuarios asociados a la casa (tipo INT[]).

1. ### <a name="_toc6902"></a>**Tabla "votesTable":**
   Descripción: Esta tabla registra los votos realizados por los usuarios en las recetas.

Atributos:

vote_id: Identificador único del voto (tipo SERIAL).

user_id: ID del usuario que realizó el voto, se relaciona con la tabla "users" (tipo INT).

recipe_id: ID de la receta votada (tipo VARCHAR(255)).

vote_type: Tipo de voto, como "like" o "dislike" (tipo VARCHAR(5)).

created_at: Fecha y hora de creación del voto (tipo TIMESTAMP) con un valor predeterminado de la fecha y hora actual.

1. # <a name="_toc13975"></a>**Instalación y configuración**

1. ## <a name="_toc30905"></a>**_Instalación y Configuración_**

1. ### <a name="_toc3568"></a>**Requisitos Generales Pre-Instalación**

Antes de proceder con la instalación de la aplicación "¿Qué vamos a comer hoy?", es importante cumplir con ciertos requisitos generales para asegurar un proceso de instalación exitoso. A continuación, se detallan estos requisitos:

1. #### ` `**Sistema Operativo:**

   `   `- El sistema operativo recomendado para la instalación es Windows 10 o una versión más reciente. Sin embargo, la aplicación también es compatible con otros sistemas operativos como macOS y Linux.

1. #### **Espacio en Disco:**

   `   `- Se debe contar con suficiente espacio disponible en el disco duro para la instalación de la aplicación y los archivos de datos asociados. Se recomienda tener al menos 500 MB de espacio libre.

1. #### **Memoria RAM:**

   `   `- Se recomienda contar con al menos 4 GB de memoria RAM para un rendimiento óptimo de la aplicación. Un mayor tamaño de memoria RAM puede mejorar aún más la experiencia del usuario, especialmente al realizar operaciones que requieren un procesamiento intensivo.

1. #### **Conexión a Internet:**

   `   `- La aplicación "¿Qué vamos a comer hoy?" requiere una conexión a Internet para acceder a la base de datos de recetas, actualizar el contenido y realizar otras funciones relacionadas con la búsqueda de recetas y la planificación de comidas. Asegúrese de tener una conexión estable y de buena calidad.

1. #### **Software Adicional:**

   `   `- La aplicación puede requerir la instalación de ciertos software adicional, como un navegador web actualizado (Google Chrome, Mozilla Firefox, Safari, etc.), un programa para descomprimir archivos comprimidos (como WinRAR o 7-Zip) y un programa para visualizar documentos en formato PDF (como Adobe Reader).

1. #### **Permisos de Usuario:**
   `   `- Para realizar la instalación de la aplicación, se requieren permisos de administrador en el sistema operativo. Asegúrese de contar con los privilegios necesarios o consulte a su administrador de sistemas para obtener asistencia en este aspecto.

9\. Instalación y Configuración

9\.1 Requisitos Generales Pre-Instalación

Antes de proceder con la instalación de la aplicación "¿Qué vamos a comer hoy?", es importante cumplir con ciertos requisitos generales para asegurar un proceso de instalación exitoso. A continuación, se detallan estos requisitos:

1\. Sistema Operativo:

`   `- El sistema operativo recomendado para la instalación es Windows 10 o una versión más reciente. Sin embargo, la aplicación también es compatible con otros sistemas operativos como macOS y Linux.

2\. Espacio en Disco:

`   `- Se debe contar con suficiente espacio disponible en el disco duro para la instalación de la aplicación y los archivos de datos asociados. Se recomienda tener al menos 500 MB de espacio libre.

3\. Memoria RAM:

`   `- Se recomienda contar con al menos 4 GB de memoria RAM para un rendimiento óptimo de la aplicación. Un mayor tamaño de memoria RAM puede mejorar aún más la experiencia del usuario, especialmente al realizar operaciones que requieren un procesamiento intensivo.

4\. Conexión a Internet:

`   `- La aplicación "¿Qué vamos a comer hoy?" requiere una conexión a Internet para acceder a la base de datos de recetas, actualizar el contenido y realizar otras funciones relacionadas con la búsqueda de recetas y la planificación de comidas. Asegúrese de tener una conexión estable y de buena calidad.

5\. Software Adicional:

`   `- La aplicación puede requerir la instalación de ciertos software adicional, como un navegador web actualizado (Google Chrome, Mozilla Firefox, Safari, etc.), un programa para descomprimir archivos comprimidos (como WinRAR o 7-Zip) y un programa para visualizar documentos en formato PDF (como Adobe Reader).

6\. Permisos de Usuario:

`   `- Para realizar la instalación de la aplicación, se requieren permisos de administrador en el sistema operativo. Asegúrese de contar con los privilegios necesarios o consulte a su administrador de sistemas para obtener asistencia en este aspecto.

1. # <a name="_toc11113"></a>**Instalación y configuración**

   1. ## <a name="_toc11220"></a>**_Detalles de Configuración de la Aplicación_**

1. ### <a name="_toc3971"></a>**Variables de Ambiente**
   La configuración de la aplicación "¿Qué vamos a comer hoy?" puede incluir el uso de variables de ambiente. Estas variables se utilizan para almacenar información sensible o parámetros específicos del entorno de ejecución.
1. #### **Front-End:**
   WEB_SECRET_CLIENT

WEB_CLIENT_ID

IOS_CLIENT_ID

ANDROID_CLIENT_ID

REACT_APP_API_KEY

1. #### **Back-End:**
   PORT

USER_PS_DB

PASSWORD_PS_DB

PORT_PS_DB

DATABASE_NAME_PS

1. ### <a name="_toc10068"></a>**Parámetros de Aplicaciones**

   Los parámetros de aplicaciones se refieren a las configuraciones específicas de la aplicación "¿Qué vamos a comer hoy?" que se pueden ajustar según las necesidades del usuario. Estos parámetros pueden incluir opciones como el idioma de la interfaz, el número de resultados de búsqueda a mostrar, las preferencias de notificaciones, entre otros. Es recomendable revisar y ajustar estos parámetros según las preferencias y requisitos del usuario.

1. ### <a name="_toc565"></a>**Archivos de Configuración**

   La aplicación puede hacer uso de archivos de configuración que contienen información importante para su funcionamiento. Estos archivos pueden incluir detalles de conexión a la base de datos, credenciales de acceso, configuraciones de seguridad, entre otros. Es esencial revisar y actualizar estos archivos de configuración según los requisitos específicos de la aplicación y el entorno de implementación.

1. ### <a name="_toc2496"></a>**Archivos de Bitácora**

   Los archivos de bitácora (logs) son registros que registran eventos, errores y actividades relevantes que ocurren durante la ejecución de la aplicación. Estos archivos son útiles para el monitoreo y el seguimiento de problemas, así como para el análisis y la mejora continua. Es recomendable revisar y gestionar los archivos de bitácora de manera adecuada para facilitar el diagnóstico de problemas y el mantenimiento de la aplicación.

1. ### <a name="_toc27911"></a>**Tareas Programadas**

   La aplicación puede requerir la configuración de tareas programadas para ejecutar acciones automatizadas en momentos específicos. Estas tareas pueden incluir actualizaciones de contenido, generación de informes, limpieza de datos, entre otros. Es importante configurar correctamente estas tareas programadas según los requisitos y las frecuencias deseadas para garantizar un funcionamiento eficiente de la aplicación.

1. ### <a name="_toc20015"></a>**Lista de Contactos Técnicos**
   Es recomendable mantener una lista de contactos técnicos, tanto internos como externos, que puedan brindar soporte y asistencia en caso de problemas o consultas relacionadas con la configuración y el funcionamiento de la aplicación. Esta lista puede incluir nombres, direcciones de correo electrónico, números de teléfono u otros medios de contacto relevantes.

Desarrollador principal: <marlongeo1999@gmail.com>

1. # <a name="_toc24496"></a>**Diseno de la arquitectura fisica**

   El diseño de la arquitectura física de la aplicación "¿Qué vamos a comer hoy?" tiene como objetivo definir la infraestructura necesaria para soportar el funcionamiento de la aplicación de manera eficiente y confiable. A continuación, se describen los componentes clave de la arquitectura física:

1. ## <a name="_toc19057"></a>**_Servidores_**

   Se requiere un servidor o conjunto de servidores para alojar la aplicación y gestionar las solicitudes de los usuarios. Dependiendo de los requisitos de carga y disponibilidad, se puede optar por servidores físicos o virtuales.

1. ## <a name="_toc12757"></a>**_Base de datos_**

   La aplicación necesita una base de datos para almacenar la información relacionada con los usuarios, las recetas, los favoritos y otros datos relevantes. Puede utilizarse un sistema de gestión de bases de datos relacional (por ejemplo, MySQL, PostgreSQL) o no relacional (por ejemplo, MongoDB, Firebase).

1. ## <a name="_toc13410"></a>**_Seguridad_**

   La arquitectura física también debe tener en cuenta las medidas de seguridad necesarias para proteger la aplicación y los datos de los usuarios. Esto implica el uso de firewalls, cifrado de datos, autenticación de usuarios y otras prácticas recomendadas de seguridad informática.

1. # <a name="_toc13188"></a>**Descripción de usuarios**

   La descripción de los usuarios es crucial para comprender quiénes son los principales actores involucrados en el uso de la aplicación "¿Qué vamos a comer hoy?" y cómo interactúan con el sistema. A continuación, se detalla la descripción de los diferentes tipos de usuarios:

1. ## <a name="_toc20209"></a>**_Usuarios de base de datos:_**
   \- Administrador de base de datos: Este usuario es responsable de administrar y mantener la base de datos del sistema. Tiene privilegios de acceso y gestión de la base de datos, como la creación y modificación de tablas, consultas y respaldos de datos.

\- Usuarios registrados: Son los usuarios finales que se han registrado en la aplicación. Tienen acceso a funciones específicas según su perfil y pueden realizar acciones como buscar recetas, agregar recetas a favoritos, votar por recetas y participar en encuestas.

1. ## <a name="_toc27295"></a>**_Usuarios de sistema operativo:_**

   \- Administrador del sistema: Es el encargado de administrar el sistema operativo en el que se ejecuta la aplicación. Tiene privilegios para configurar y mantener el entorno del sistema, como la instalación de software, la gestión de usuarios y la configuración de seguridad.

1. ## <a name="_toc25699"></a>**_Usuarios de aplicaciones:_**
   \- Usuario final: Es el usuario típico de la aplicación "¿Qué vamos a comer hoy?". Puede ser cualquier persona interesada en la planificación de comidas y la búsqueda de recetas. Utiliza la aplicación para buscar y descubrir nuevas recetas, planificar comidas, agregar recetas a favoritos y participar en encuestas. No requiere privilegios especiales más allá de registrarse en la aplicación.
