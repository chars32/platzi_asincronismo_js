/*
Usamos xmlhttprequest para recuperar los datos de la API y 
por que el profesor quiere que sepamos como funciona. Pero
bien pudimos usar fetch.
*/
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(null, JSON.parse(xhttp.responseText));
        } else {
            callback(new Error(`Something went wrong ${url_api}`));
        }
    }
    xhttp.send();
}