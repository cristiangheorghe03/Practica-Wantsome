//1.creati un array cu 50 de elemente fie random, fie numere naturale consecutive.

function range(max){
    var myArray = [];
    for(var i = 1; i <= max; i++){
        myArray[i] = i * 1;
    }
    return myArray;
} 

myArray = range(50);
console.log(myArray)

//afisati doar primele 10 elemente din array
var firstTen = myArray.slice(0,10);
console.log(firstTen);



//adaugati la finalul array-ului un obiect care contine numele si prenumele vostru

firstTen.push('Gheorghe Cristian');
console.log(firstTen);

//creati un nou array cu 5 elemente si uniti-l cu array-ul initial
var newArray = [101, 102, 103, 104, 105,];
var concatArray = firstTen.concat(newArray);

console.log(concatArray);

//introduceti un element nou la pozitia 2 a array-ului

concatArray.splice(2, 0, 'hello'); // at index position 2, remove 0 elements, then add "hello" to that position
console.log(concatArray);

//2.Creati o functie care trunchiaza un string (primul argument) daca lungimea sa este mai mare
//decat lungimea maxima permisa (al doilea argument). Returnati string-ul trunchiat urmat de


function truncate(str, nr) {
    return str.substring(0, nr) 
}
var trc = truncate('Abcdef', 4);
console.log(trc);


//3.Creati o functie care primeste ca argument un string si il converteste intr-un array de cuvinte
function splitWords (myString, nr) {
    var splits =  myString.split(' ',3);
    console.log(splits);
}
var stringSplit = 'Ana are mere. Da oare mere are Ana?';
splitWords(stringSplit);
