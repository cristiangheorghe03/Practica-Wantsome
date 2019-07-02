// Creati o functie care returneaza(true/false) daca un numar este primit ca argument este prim.
// Conditii pt a fi numar prim:
// >1 (pozitiv), sa nu fie 2

/*function returnPrimeN (n){
    if(n <= 1 || n % 2 === 0) return false;
    if (n == 2) return true;

    for (var i=3; i <= Math.sqrt(n); i+=2){
        if(n % i === 0) { return false;}
    } 
return true;
}
console.log(returnPrimeN(4))*/

//2.Creati o functie care primeste ca argumente un sir de caracter si un numar
//si returneaza sirul de caractere repetat de cate ori specifica numarul.

/*function repeatString(str, n) {
    var result ='';
    for (var i = 0; i < n; i++){
    result = str + result;
} return result;
}
console.log(repeatString('ceva',1));*/

//3. exercitiul cu taxele

/*function calculateTax(salary, tax){
    return 'Taxa este' + tax + '%. La ANAF se duc'+ (salary * tax)/100;

}


var venit = function(remuneratie) {
    if(remuneratie <= 30000) {
        return 'Taxa este 0%.'
    }
    if(remuneratie > 30000 && remuneratie < 50000){
        return calculateTax(remuneratie, 50);
    }
}
console.log(venit(30001));*/

// var cantaret = ['Dua Lipa', 'Gabriel Cotabila','Nu Am','The Weeknd','Elena Gheorghe',]

//console.log(cantaret.indexOf('Gabriel Cotabita'));



const numers = [0, 1, 2, 3, 4, 5, 6, 7, 8,];

const result3 = numers.filter(function(element)){
    return element % 2 === 0;
}
