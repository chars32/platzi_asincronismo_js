/*
Usamos xmlhttprequest para recuperar los datos de la API y 
por que el profesor quiere que sepamos como funciona. Pero
bien pudimos usar fetch.
*/
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                callback(new Error(`Something went wrong ${url_api}`));
            }
        }
    }
    xhttp.send();
}

fetchData(API, (err1, data1) => {
    if (err1) return console.error(err1);
    fetchData(API + data1.results[0].id, (err2, data2) => {
        if (err2) return console.error(err2);
        fetchData(data2.origin.url, function(err3, data3){
            if (err3) return console.error(err3);
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})