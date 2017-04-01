# Instrucciones

## Presentación
Las instrucciones aquí puntualizadas corresponden al registro escrito de la guía durante el taller presencial sobre el uso de datos desde fuentes abiertas en la Facultad de Arquitectura y Urbanismo de la Universidad de Chile realizado el 1 de Abril del 2017.

## Problemática
Imaginemos que queremos investigar sobre polución en Chile. Primero queremos saber cuál es el contexto de la contaminación general en el País. Para aquello utilizaremos como fuente de datos a noticias publicadas en la versión Internet de uno de los períodicos de mayor lectura en Chile. Luego de eso, y dado nuestro trabajo de lecturas y conversaciones con expertos, sabemos que las luminarias dispuestas en la calle pueden ser uno de los focos principales de contaminación lumínica, por lo que queremos localizarlas en el espacio urbano. Para aquello, y ante la inexistencia en la sistematización de dichos datos, realizaremos una inferencia sobre la localización de dichas luminarias, suponiendo que por cada intersección semaforizada, existe al menos una luminaria en el espacio público. Finalmente, queremos crear una aplicación móvil para recibir percepciones sobre la polución lumínica. Dicha aplicación será nuestro canal de información mediante el cual podremos saber cuáles son las zonas en donde la polución es mayor. Por ende necesitamos saber cuál es el sistema operativo más utilizado en los smartphones de la ciudad. Para saber aquello, utilizaremos los datos que nos provee Twitter.

## Desde noticias a datos
- Identificar tres palabras clave que según tú opinion definen o darían cuenta del estado de la contaminació en términos generales en Santiago.
- Abre una terminal para ejecutar el código.
- En Mac una terminal se abre de la siguiente manera: ![img](http://blog.teamtreehouse.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-25-at-12.57.00-PM.png)
- En Windows se realiza de la siguiente manera:

![](http://www.digitalcitizen.life/sites/default/files/img/cmd_prompt_launch/cmdl3.png)

- En Linux:
"ALT + Control + T"

- En terminal ejecuta **atom .** para abrir nuestro código y editarlo.
- En la línea 120 del código escribe la palabra que escogiste: **let key = 'TU PALABRA';**
- Ejecuta el código escribiendo en terminal: **node dis.js**. Luego presiona ENTER.
- Si vas a la carpeta DATA, verás un archivo .CSV con palabras y su frecuencia.
- Repite este ejercicio para las tres palabras que has escogido.

## Datos públicos abiertos
Existen diversos portales de datos abiertos, en donde principalmente agencias de gubernamentales disponen a la ciudadanía datos para su uso libre. En la carpeta **publicos**, vas a poder encontrar tres scripts en los cuales se interactúa con los datos abiertos oficial del Gobierno de Chile (http://datos.gob.cl), los datos que provee el Municipio de Providencia (http://datos.providencia.cl), y finalmente los datos abiertos provistos por la Comisión Nacional de Energía (http://energiaabierta.cl/). En este caso utilizaremos los datos que provee el Municipio de Providencia a través de su plataforma.

- Ve a la dirección: http://datos.providencia.cl/developers/
- Presiona en el botón **Obtén tu API Key**.
- Copia el número y pégalo en la línea 11 de nuestro código.
- En el campo de la búsqueda (línea 12 del código) inserta la palabra **semaforos**.
- Una vez obtenida la ID de los datos (movilidad y transporte), la pegamos en la línea 13, y realizamos la descarga de nuestros datos **node prov.js**. Encontrarás os datos en la carpeta **data**.


## Datos desde Twitter
Twitter requiere crear una app para poder comunicarnos con su base de datos.
- Dirígete a https://apps.twitter.com/ y clickea sobre **crear nueva app**.
- Rellenamos los campos necesarios y generamos nuestros **Keys**.
- En la carpeta **Twitter** de nuestro código, encontrarás la carpeta **config**, y en esa carpeta el archivo **congif.js**. Rellena los campos con tus claves de acceso.
- Abre en Atom el archivo **dis.js**. Dale un vistazo para ver que está todo OK.
- Ejecutamos nuestro código en terminal (command prompt) con el comando **node dis.js**.
- Veremos que en la carpeta **data** se crea un nuevo archivo, al que se le adjunta una nueva línea en tiempo real con nuevos datos.

## Visualizar
Una vez que tenemos nuestros datos, los visualizaremos para tener una perspectiva sobre qué patrones podemos encontrar en dicha información.

### Noticias
- Sube los archivos CSV resultantes a una carpeta en tu cuenta de Google Drive.
- Los datos con las frecuencias de palabras obtenidas desde las noticias, editalos usando google spreadsheet. Verás que el resultado no es perfecto. Rara vez lo es. Bienvenido(a) al facinante mundo del análisis de datos... ;)
- Copia tus datos y llévalos a http://app.rawgraphs.io/ .-
- Elige **Circle Packing**.
- Hierarchy, Color y Label corresponden a **word**, mientras que Size corresponde a **Count**.
- Mira el resultado que obtuviste. Modifica colores si gustas y descárga tu visualización en formato PNG.
- Sube dicho PNG a tu espacio en Google Drive.

### Datos Públicos
- Ingresa a tu cuenta de CARTO.
- Dirígete a "Datasets".
- Agrega el dataset que hemos descargado sobre las intersecciones semaforizadas.
- Una vez que se ha subido, le damos a **CREATE MAP**.
- Agregamos el análisis para georeferenciar nuestros datos, usando **Latitud** y **Longitud**.
- Agregamos los datos usando el estilo **Pixel**.
- Obtén la url y/o iframe para compartir tu mapa.

### Datos desde Twitter.
- Del total de datos que tenemos, agrupalos por comuna y tipo de dispositivo en un gráfico simple de Google Drive.
- Puedes hacer una copia de la siguiente tabla y utilizarla para agrupar valores: https://docs.google.com/spreadsheets/d/1ZX1G6O1PhZRWs5-LCVguyzrYkvo2o2DCGpQ9j9XlFf0/edit?usp=sharing
- Crea un gráfico aluvial en app.raw.

## Artículo
Con los tres productos de visualización, escribe un articulo con tu análisis utilizando Google Docs. Luego comparte tus resultados con el resto.
