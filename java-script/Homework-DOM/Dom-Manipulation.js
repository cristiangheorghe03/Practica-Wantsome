// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi

// Iterati prin fiecare "li" si puneti clasa "listitem". 
//Adaugati un tag style(in head) care seteaza o regula pentru 
//.listitem sa aiba culoarea rosie

// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. 
// Puneti acest element(append) la pagina noastra.


var bodyStyle = document.getElementById('about');
console.log(bodyStyle)
bodyStyle.style.fontFamily = 'Arial, sans-serif'

var styleElement = document.createElement("style");
document.getElementById('head1').appendChild(styleElement)
console.log(document)