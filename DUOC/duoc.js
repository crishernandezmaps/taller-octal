const fs = require('fs');
const Twit = require('twit');
const config = require('./conf/config.js');
const T = new Twit(config);

const santiago = [-70.906448, -33.691781, -70.311813, -33.267972]; // Región Metropolitana
const stream = T.stream('statuses/filter', {locations: santiago});

// Preparar documento en donde se escribirán los resultados
let headers = 'comuna' + ',' + 'seguidores' + '\n';
let n = 'data/tweets-santiago.csv';
fs.writeFile(n, headers, function (err) {
    if (err) throw err;
});

function searchTweets() {
    stream.on('tweet', function(tweet) {
        // Nice formated source
        function rep(word) {
            let a = word.split('rel="nofollow">')[1];
            let b = a.split('</a>')[0];
            let c = b.replace(/twitter|for|client/gi,'');
            let d = c.trim();
            return d
        }

        // Nice formated date and time
        function time(time) {
            let day = time.slice(8,10);
            let month
            if (time.slice(4,7) == 'Mar') {
                month = '03';
            } else if (time.slice(4,7) == 'Apr') {
                month = '04';
            }
            let year = time.slice(26,30);
            let h = time.slice(11,19);
            let ha = parseInt(h.split(':')[0])-3; // SCL time
            let hb = parseInt(h.split(':')[1]);
            let hc = parseInt(h.split(':')[2]);
            let tie = day + '/' + month + '/' + year + ',' + ha + ':' + hb + ':' + hc;
            return tie;
        }

        // Info used in excercise
        let date_time = time(tweet.created_at);
        let name = tweet.user.screen_name;
        let followers = tweet.user.followers_count;
        let place = tweet.place.name;
        let source = rep(tweet.source);

        /// OTROS DATOS UTILES QUE PODRIAS UTILIZAR POSTERIORMENTE ///
        // let url = tweet.user.url;
        let texto = tweet.text;

        // Conditions
        let country = tweet.place.country;
        let max = tweet.max_id_str;
        let ver = tweet.user.verified;

        let resultado = place + ',' + followers + '\n';

        if (country == 'Chile' && max == undefined && ver == false) {
            if (source == 'Android' || source == 'iPhone') {
                // Append results
                fs.appendFile(n, resultado, (err) => {
                    if (err) throw err;
                });
                console.log(texto);
            }
        };

    });
}
searchTweets();
