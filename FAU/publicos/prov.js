// Data from Municipalidad de Providencia

// DEPENDENCIES
const ra = require('request');
const fs = require('fs');
const opn = require('opn');
const colors = require('colors');

/// INGRESAR Y EDITAR ESTA PARTE DEL CODIGO
const options = {
    key: '64573e815edbf722680c7ba4d294dad3dcff3b34', // PASO 1: INGRESA TU API KEY
    termino_busqueda: '', // PASO 2: INGRESA EL TÉRMINO QUE DESEAS BUSCAR
    id_escogida: '' // PASO 3: INGRESA EL ID A LA BASE DE DATOS ESCOGIDA
}

// Compile API CALL
const base = 'http://providencia.cloudapi.junar.com/datastreams/search?query='
const auth = '&auth_key=' + options.key;
const call = base + options.termino_busqueda + auth;

// JUNAR API CALL
ra(call, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body)
      let data_list = [];
      for (let i = 0; i < data.length; i++) {
          let title = data[i].title;
          let description = data[i].description;
          let link = data[i].link;
          let id = data[i].id;
          data_list.push({
             nombre: title,
             descripcion: description,
             url: link,
             id: id
          });
      };
      // Print name and id of each dataset
      for (let i = 0; i < data_list.length; i++) {
        console.log('Nombre: ' + data_list[i].nombre + ' || '.yellow + 'ID: ' + data_list[i].id);
      }
      // Print N° of datasets founded
      console.log('\n' + 'N° Bases de Datos: ' + data_list.length);

      // Download selected data
      if (options.id_escogida.length > 0) {
        const a =  'http://providencia.cloudapi.junar.com/api/v2/datastreams/';
        const c = '/data.csv'
        const d = '/?auth_key=' + options.key;
        const url_to_download = a + options.id_escogida + c + d;
        console.log('Una descarga se abrió en tu explorador!!!'.green);
        opn(url_to_download)
      } else {
        console.log('\n' + 'Escoge un ID y ve al PASO 3 ;)'.red + '\n');
      }
  };
});
