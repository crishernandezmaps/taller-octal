// Data from datos.gob.cl

// DEPENDENCIES
const request = require('request');
const fs = require('fs');
const opn = require('opn');
const colors = require('colors');

/// INGRESAR Y EDITAR ESTA PARTE DEL CODIGO
const options = {
    termino_busqueda: 'energia', // PASO 1: TÉRMINO DE BÚSQUEDA
    url_escogida: '' // PASO 2: INGRESA LA URL A LA BASE DE DATOS ESCOGIDA
}

// COMPILE API CALL
const base = 'http://datos.gob.cl/api/3/action/package_search?q=';
const call = base + options.termino_busqueda;

// CKAN API CALL
request(call, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body)
      let res = data.result.results;
      let down = [];
      for (let i = 0; i < res.length; i++) {
          let author = res[i].organization.name;
          let main = res[i].maintainer;
          let resources = res[i].resources;
          for (let i = 0; i < resources.length; i++) {
              let data_name = resources[i].name;
              let data_date = resources[i].created;
              let data_url = resources[i].url;
              let data_format = resources[i].format;
              down.push({
                  nombre: data_name,
                  organizacion: author,
                  responsable: main,
                  fecha_creacion: data_date,
                  link: data_url,
                  formato: data_format
              });
          };

      };
      // Print name, organization and link of each dataset
      for (let i = 0; i < down.length; i++) {
        console.log((i+1) + ' | '.yellow + 'NOMBRE: '.green + (down[i].nombre).slice(0,70) + ' ...' + '\n' + 'ORGANIZACION: '.green + down[i].organizacion  + '\n' + 'URL: '.green + down[i].link + '\n');
      }

      // Print N° of datasets founded
      console.log('\n' + 'N° Bases de Datos: ' + down.length);

      // Download selected data
      if (options.url_escogida.length > 0) {
        console.log('Una descarga se abrió en tu explorador!!!'.green);
        opn(options.url_escogida)
      } else {
        console.log('\n' + 'Escoge una URL y ve al PASO 2 ;)'.red + '\n');
      }

    }
})
