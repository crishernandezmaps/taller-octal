# Datos Públicos
Los datos abiertos y públicos dispuestos por los Gobiernos (central, regional, local), son de gran relevancia informativa y de transparencia, ya que si son actualizados con regularidad, es un insumo ideal para que cualquier ciudadano(a) pueda crear nuevo contenido a partir de dichos datos.

Chile cuenta con un portal de datos públicos centralizado, el cual está desarrollado sobre la plataforma CKAN, el cual es el estándar global para datos abiertos gubernamentales.

El acceso a los datos públicos de Chile puede hacerse a través de la búsqueda y descarga mediante la interfaz web, en donde se busca por palabras clave, organización o tipo de formato de los archivos. Sin embargo, en este taller aprenderemos a cómo interactuar con las bases de datos mediane la API que provee CKAN para este tipo de sitios.

> Una API representa la capacidad de comunicación entre componentes de software. Se trata del conjunto de llamadas a ciertas bibliotecas que ofrecen acceso a ciertos servicios desde los procesos y representa un método para conseguir abstracción en la programación, generalmente (aunque no necesariamente) entre los niveles o capas inferiores y los superiores del software. Uno de los principales propósitos de un API consiste en proporcionar un conjunto de funciones de uso general, por ejemplo, para dibujar ventanas o iconos en la pantalla. De esta forma, los programadores se benefician de las ventajas del API haciendo uso de su funcionalidad, evitándose el trabajo de programar todo desde el principio. Las API asimismo son abstractas: el software que proporciona una cierta API generalmente es llamado la implementación de esa API. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones))

## Buscar datos en el Explorador
Sin importar si usas Chrome, Firefox o Safari como explorador, puedes hacer 'llamados' a la base de datos general del Gobierno de Chile de la siguiente manera:

1. **Todos los datos**: para conocer el id de cada uno de los conjuntos de datos dispuestos a la fecha en datos.gob.cl, se debe realizar una búsqueda de la siguiente forma:

> http://datos.gob.cl/api/3/action/package_list

2. **Búsquedas en una paquete específico**: de la lista anterior, podemos tomar el id que queremos acceder, de la siguiente manera:

> http://datos.gob.cl/api/3/action/package_show?id=audiencias_registradas_lobby_mayo_2016

En este caso escogimos el paquete de datos 'audiencias_registradas_lobby_mayo_2016'.

3. **Búsqueda por un término específico**: para buscar sobre un tema específico en la base de datos, como por ejemplo todos los datos sobre 'bicicletas', se debe realizar de la siguiente manera:

> http://datos.gob.cl/api/3/action/package_search?q=bicicletas

## JSON

El resultado de éstas *queries*, la api de CKAN las entrega en un formato JSON. Desde aquí podemos realizar diversas acciones para obtener los datos y trabajar con ellos.

> JSON, acrónimo de JavaScript Object Notation, es un formato de texto ligero para el intercambio de datos. JSON es un subconjunto de la notación literal de objetos de JavaScript aunque hoy, debido a su amplia adopción como alternativa a XML, se considera un formato de lenguaje independiente. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/JSON))

## Ventajas de Usar la API sobre la Interfaz Web
Imagina que estás realizando un ejercicio exploratorio de datos, en el cual no sabes la cantidad de datos que pueden existir, el formato en el que están dispuestos, ni tampoco la institución que provee los datos. Solamente sabes que deseas investigar sobre un tema, como por ejemplo (nuevamente) las bicicletas en Chile. En este caso podrías ir al explorador y usar la interfaz web, sin embargo te encontrarías haciendo cientos de clicks en búsquedas que te llevan a su vez a otros botonos en los cuales finalmente debes hacer más clicks para descargar los datos. No hay tiempo para eso.

Una API te permite buscar lo que necesitas, obtener los datos, y luego trabajar sobre tus datos con diversas herramientas, sin perder mucho tiempo en clicks.

# Ejercicio

- Explicar CKAN.

- Realizar un búsqueda de un tema agregando el parámetro '&rows=1000' a la búsqueda de palabras clave. Así nos aseguramos que tendremos suficientes resultados.
- Explorar la base de datos usando Node.js (comentando y descomentando lineas de código).
- Escoger los datos con los que quiere trabajar. Se dispone en este caso el trabajo con dos bases de datos: A y B. Insertar cuáles son las queries para obtener esos datos en particular.
- Hacer correr el código y trabajar sobre los datos que se han generado. Tanto desde el punto de vista espacial como no-espacial.
- Comenzar el proceso de visualización de datos.
- Escribir un post analizando los resultados.

# Geocoder
https://github.com/DenisCarriere/geocoder (Python)
