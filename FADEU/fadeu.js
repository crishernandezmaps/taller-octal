const request = require("request");
const fs = require('fs');
const data = require('./data/world_map.json');

function lux(ciudad) {

  for (let i = 0; i < data.length; i++) {
    let id = data[i].id;
    let light = parseInt(data[i].data[14]);
    let date = data[i].added_at;
    let url_json = 'https://api.smartcitizen.me/v0/devices/' + data[i].id;
    let latitude = data[i].latitude;
    let longitude = data[i].longitude;
    let city = data[i].city;
    let country_code = data[i].country_code;
    let outdoor_sensor = data[i].system_tags[1]; // Outdoor sensors: rescatamos solamente sensores que se encuentran en el espacio público.

    if (city === ciudad && outdoor_sensor === 'outdoor' && (light * 1) > 0 && city !== null) {

      let resultado = id + ',' + light + ',' + date + ',' + city + ',' + country_code + ',' + latitude + ',' + longitude + ',' + url_json + '\n';
      console.log(resultado);

      // Escribimos documento donde guardaremos resultados
      let headers = 'id' + ',' + 'lux' + ',' + 'ciudad' + ',' + 'fecha' + ',' + 'codigo_pais' + ',' + 'latitude' + ',' +  'longitude' +  ',' +  'json' + '\n'; // Nombre columnas
      let n = 'data' + '/' + 'resultado' + '.csv'; // path

      fs.readFile(n, 'utf8', function (err,data) {
        if (err) {
          fs.writeFile(n, headers, function (err) {
              if (err) throw err;
          });
          fs.appendFile(n, resultado, (err) => {
              if (err) throw err;
          });
        } else {
          fs.appendFile(n, resultado, (err) => {
              if (err) throw err;
          });
        };
      });

    };
  };
};

let ciudades = ['Santiago','London','Madrid']

for (let i = 0; i < ciudades.length; i++) {
  lux(ciudades[i]);
}
