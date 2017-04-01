## Qué sistema operativo debemos escoger para nuestra app?
Queremos hacer un aplicación móvil para los vecinos de la comuna de Providencia, que nos permita identificar la polución lumínica utilizando smartphones.

### Método
- Crear una cuenta de Twitter para el grupo.
- Generar los códigos de acceso.
- Rellenar el archivo config > config.js con tus códigos de acceso.
- Ejecutar el código en Node.js (node dis).
- Dejar correr el código por 30 minutos.
- Subir la tabla con resultados en formato csv a Google Drive y agrupar los resultados [=QUERY(A1:B988, "select A, sum(B), count(B) group by A")]
- Crear gráfico de frecuencias con los sitemas operativo de la comuna de Providencia.
- Visualizar los datos en http://app.rawgraphs.io/
- Escribir post como texto en Google Drive.
