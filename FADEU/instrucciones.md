# Taller OCTAL - FADEU

## Presentación
El siguiente taller busca la realización de un ejercicio práctico de ciencia ciudadana, enfocado al conocimiento del impacto de la polución lumínica en Chile e internacionalmente.

0. Instalar las herramientas necesarias 'npm install'.
1. Descargar en formato JSON los datos de todos los sensores pertenecientes a la red https://api.smartcitizen.me/v0/devices/world_map
2. Inspeccionar los datos.
3. Elegir tres ciudades para realizar una comparación.
4. Rellenar array 'ciudades' en el script: comparar al menos cinco ciudades.
5. Ejecutar el script utilizando node.js 'node fadeu.js'.
6. Acceder a la carpeta datos utilizando terminal/command prompt 'cd data'.
7. Inspeccionar los datos que tenemos en dicho directorio 'ls' (Mac/Linux) o 'Dir' (Windows) - para usuarios windows mirar algunos comandos útiles: https://commandwindows.com/command3.htm
8. Convertir archivo .CSV a .GEOJSON 'csv2geojson resultado.csv > resultado.geojson' utilizando terminal/command prompt (en su defecto utilizar el servicio en línea http://www.convertcsv.com/csv-to-geojson.htm)
9. Copiar el contenido del nuevo archivo creado en la variable 'geojsonFeature' en el archivo 'map.html'.
10. Abrir el archivo 'map.html' en el explorador (Chrome, Firefox).
11. Visualizar los datos en formato .CSV utilizando http://app.rawgraphs.io/ (Box Plot).
12. Descargar la visualización como imagen .PNG.
13. Insertar la dirección de la imagen en 'map.html' en la línea '<img src="img/boxes.png">'
14. Escribir análisis en el archivo 'map.html'. Solo dos párrafos modificando los tags '<p>' en el archivo 'map.html'. Puedes buscar noticias en internet que complementen tu análisis.
15. Cambiar el nombre a la carpeta que contiene los archivos por tu nombre, comprimirla y enviarla una vez finalizado el ejercicio y al correo cristian.hernandez@commonactionforum.net .

### Información para el análisis

#### Escala Lux
|Illuminance (lux)|Surfaces illuminated by|
|:------------- |:-------------|
|0.0001|Moonless, overcast night sky (starlight)|
|0.002|Moonless clear night sky with airglow|
|0.05–0.36|Full moon on a clear night|
|3.4|Dark limit of civil twilight under a clear sky|
|20–50|Public areas with dark surroundings|
|50|Family living room lights (Australia, 1998)|
|80|Office building hallway/toilet lighting|
|100|Very dark overcast day|
|320–500|Office lighting|
|400|Sunrise or sunset on a clear day.|
|1000|Overcast day; typical TV studio lighting|
|10,000–25,000|Full daylight (not direct sun)|
|32,000–100,000|Direct sunlight|

*fuente: [wikipedia](https://en.wikipedia.org/wiki/Lux)*

#### Algunas noticias al respecto
http://www.latercera.com/noticia/chile-entre-paises-mas-expuestos-a-la-contaminacion-luminica/
http://www.adnradio.cl/noticias/sociedad/mapa-interactivo-muestra-los-niveles-de-contaminacion-luminica-en-el-planeta/20160908/nota/3240494.aspx
http://www.adnradio.cl/noticias/sociedad/un-tercio-de-la-poblacion-mundial-no-puede-ver-la-via-lactea/20160610/nota/3157354.aspx
http://advances.sciencemag.org/content/2/6/e1600377.full
https://www.lightpollutionmap.info/#zoom=8&lat=-3968454&lon=-7879260&layers=B0TFFFFF
http://darksky.org/eyes-in-the-sky-exploring-global-light-pollution-with-satellite-maps/
https://eventosti.net/blog/2017/03/16/chile-capital-mundial-astroinformatica/
