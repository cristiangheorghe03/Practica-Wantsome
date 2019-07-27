// Creati un obiect calculator care sa contina urmatoarele metode:
// ● Read: o functie care citeste doua numere si le salveaza ca proprietati ale obiectului
// ● Sum, diff, multiply & divide - operatiuni aritmetice care returneaza rezultatul
// Folositi this in interiorul metodelor si testati-l folosind toate metodele de atribuire a
// this-ului in JS.


function Calculator(){

this.read = function read(){
    console.log({numarul1:this.nr1, numarul2:this.nr2})

}
this.sum = function sum() {
    var sum = this.nr1 + this.nr2
    console.log(`Suma numerelor este =`, sum);
}
this.diff = function diff() {
    var diff = this.nr1 - this.nr2
    console.log(`Diferenta numerelor este =`,diff);
}
this.multiply = function multiply() {
    var multiply = this.nr1 * this.nr2
    console.log(`Inmultirea numerelor este =`,multiply);
}
this.divide = function divide() {
    var divide = this.nr1 / this.nr2
    console.log(`Impartirea numerelor este =`,divide);
}

}

var sumaNumerelor = {
    nr1: 4,
    nr2: 4,
}

var const1 = new Calculator();
const1.read.bind(sumaNumerelor)();
const1.sum.bind(sumaNumerelor)();
const1.diff.bind(sumaNumerelor)();
const1.multiply.bind(sumaNumerelor)();
const1.divide.bind(sumaNumerelor)();
console.log('======CALL=====')
const1.diff.call(sumaNumerelor);
const1.read.call(sumaNumerelor);
console.log('======APPLY=====')
const1.diff.apply(sumaNumerelor);
const1.read.apply(sumaNumerelor);