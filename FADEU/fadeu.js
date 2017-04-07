const request = require("request");
const fs = require('fs');

function lux(ciudad) {
  // URL llamando la API de Smart Citizen https://smartcitizen.me
  const url = "https://api.smartcitizen.me/v0/devices/world_map";

  // Opciones para realizar el 'PARSE' de los datos JSON.
  const options = {url:url, json:true};

  // Llamado a la API via http request.
  request(options, function (error, response, body) {
    let ids = [];
    for (let i = 0; i < body.length; i++) {
      let id = body[i].id;
      let city = body[i].city;
      let country = body[i].country_code;

      if (city == ciudad) {
        ids.push(id)
      };

    };

    // Iteramos en la lista de los sensores disponibles para la ciudad seleccionada.
    for (let i = 0; i < ids.length; i++) {
      let url_device = 'https://api.smartcitizen.me/v0/devices/' + ids[i];
      let optionsB = {url:url_device, json:true};
      request(optionsB, function (error, response, body) {
        let id_device = body.id;
        let cit = body.data.location.city;
        let con = body.data.location.country;
        let lat = body.data.location.latitude;
        let lon = body.data.location.longitude;
        let sensors = body.data.sensors;
        for (let i = 0; i < sensors.length; i++) {
          let light = sensors[i].id;
          let raw_value = sensors[i].raw_value;
          let prev_raw_value = sensors[i].prev_raw_value;

          // Le pedimos a los datos que nos entreguen la información sobre los sensores de luz.
          if (light === 14) {
            let avg = (parseInt(raw_value) + parseInt(prev_raw_value))/2
            let result = con + ',' + cit + ',' + id_device + ',' + avg + ',' + lat + ',' + lon + ',' + url_device + '\n';

            // Escribimos documento donde guardaremos resultados
            let headers = 'pais' + ',' + 'ciudad' + ',' + 'id' + ',' + 'avgLux' + ',' +  'latitude' +  ',' +  'longitude' +  ',' + 'url' + '\n'; // Nombre columnas
            let n = 'data' + '/' + 'latinamerica' + '.csv'; // path

            fs.readFile(n, 'utf8', function (err,data) {
              if (err) {
                fs.writeFile(n, headers, function (err) {
                    if (err) throw err;
                });
                fs.appendFile(n, result, (err) => {
                    if (err) throw err;
                });
              } else {
                fs.appendFile(n, result, (err) => {
                    if (err) throw err;
                });
              }

            });

            // Mostramos los resultados de la búsqueda en la consola.
            console.log(result);

          };

        };
      });
    };
  });
};

const cities = ['Buenos Aires','Santiago','Antofagasta','São Paulo','Rio de Janeiro','Cusco','João Pessoa','Belém','Quito','Cali','Popayán','Mérida','Barranquilla','Ciudad de México','Ciudad López Mateos','Monterrey','San José','San Salvador','Guatemala','Port of Spain','Juncos'];

for (let i = 0; i < cities.length; i++) {
  lux(cities[i]);
}

// const busqueda = lux('Buenos Aires'); // Modifica la Ciudad por una de tu interé. Ejemplo: 'Buenos Aires'.
