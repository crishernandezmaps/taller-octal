// Modulos npm
let request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const colors = require('colors');
const tm = require('text-miner');
const _ = require('underscore');

// Opciones de la búsqueda que nos permiten hacer scraping de google
request = request.defaults({jar: true});
let options = {
    url: 'http://www.google.com/',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
    }
};

// Función que modifica las vocales con acento y la 'ñ'
function getCleanedString(cadena){
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
}

/* Función general que toma la búsqueda compilada, obtiene links relacionados con Noticias,
extrae el texto y nos entrega la frecuencia de palabras. Funciona de buena forma con búsquedas temporales. */
function compare(search) {
    // Preparar documento para luego insertar los resultados
    let wo = search.split('?q=')[1];
    let word = wo.split('+site')[0];
    let headers = 'palabra' + ',' + 'contador' + '\n'; // Nombre columnas
    let n = 'data' + '/' + 'resultados-' + word  + '.csv'; // path
    fs.writeFile(n, headers, function (err) {
        if (err) throw err;
    });

    // Obtener links de la búsqueda en Google - Google Scraping
    request(options, function () {
        request(search, function (error, response, body) {
            let $ = cheerio.load(body);
            let urls = [];
            $(".r").each(function() {
                let a = $(this);
                let u = a.children().attr('href');
                let ux = u.split('/&sa=')[0]
                let url = ux.split('/url?q=')[1]
                if (url.slice(0,32) === 'http://www.latercera.com/noticia') {
                    urls.push(url);
                };
            });

            // Obtener el texto de cada uno de los artículos
            for (let i = 0; i < urls.length; i++) {
                request(urls[i], function (error, response, body) {
                    let corp = [];
                    let $ = cheerio.load(body);
                    $('.contenido').each(function() {
                        let b = $(this);
                        let texto = b.text();
                        corp.push(texto)
                    });

                    // Crea corpus con los textos obtenidos previamente
                    let corpus = new tm.Corpus(corp);
                    let corpus_r = corpus.clean().trim().removeInvalidCharacters().removeInterpunctuation().removeDigits().toLower();
                    let corpus_right = corpus_r.removeWords(_.uniq(tm.STOPWORDS.ES)); // Diccionairo mejorado
                    let terms = new tm.Terms(corpus_right).findFreqTerms(3);
                    let termsF = terms.sort(function(a, b) {
                        return parseFloat(a.count) - parseFloat(b.count);
                    });

                    // Limpia gran parte de las palabras que no queremos y las inserta en el documento ya creado
                    let lista_palabras = [];
                    for (let i = 0; i < termsF.length; i++) {
                        let pal = termsF[0].word;
                        let contador = termsF[0].count;
                        let palabra = (getCleanedString(pal)).replace(/[^a-zA-Z0-9]/g, '');
                        let lp = [palabra,contador];
                        if (lp.length > 0) {
                            lista_palabras.push(lp);
                        };
                    };

                    let counts = {};
                    for (let i = 0; i < lista_palabras.length; i++) {
                        let key = lista_palabras[i][0];
                        if (counts[key]) {
                            counts[key]++;
                        } else {
                            counts[key] = 1;
                        }
                    };
                    let final = [];
                    for (let key in counts){
                        let palabra_feq = key;
                        let contador_feq = counts[key];
                        let resultado_final = palabra_feq + ',' + contador_feq + '\n';
                            // Append results to file
                            fs.appendFile(n, resultado_final, (err) => {
                                if (err) throw err;
                            });
                        console.log(resultado_final);
                    }




                })
            }

        })
    })
}

// Llamamos la función con la búsqueda compilada
let key = 'piñera'; // TU BÚSQUEDA AQUÍ. EJEMPLO: 'MIGRACIÓN' (UN TÉRMINO) o 'MIGRACION+CHILE' (DOS TÉRMINOS)

//////////
let busqueda = 'https://www.google.co.uk/search?q=' + key + '+site:latercera.com&num=100&tbs=qdr:y&source=lnt&sa=X&ved=0ahUKEwjR3su77-TSAhVBLsAKHeI9CcEQpwUIFA&biw=1329&bih=678';
compare(busqueda); // Invocar la función !

////////////////////////////////////////
// Add more media
