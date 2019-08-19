// // RECAPITULARE

// // var obj = {
// //     tip: 'planta',
// //     culoare: 'verde',
// //     details: {
// //         width: 30,
// //         height: 40,
// //     }
// // }

// // var {details: {width}} = obj 
// //este echivalent cu ==> var width = obj.details.width

// // var matrix = {
// //     neo: 'Keanu Reeves',
// //     mopheus: 'Laurance Fishbourne',
// //     trinity: 'Cassie Ana Moss',
// //     details: {
// //         years: 1999,
// //         rating: 8.7,
// //     }
// // }

// // var {morpheus, detalis: {year: releaseYear} } = matrix
// // echivalent cu ==>
// //var morpheus = matrix.morpheus
// //var releaseYear = matrix.details.year

// // var {neo, trinity,...restMatrix} = matrix
// // console.log(...restMatrix);

// // var{  neo: [,,,n]} = matrix;
// // console.log(n);

// // class BankAccount {
// //     constructor(name, initalBalance){
// //         this.name = name;
// //         this.balance = initalBalance;
// //     }

// // deposit(amount){
// //     this.balance += amount;
// // }
// // winthdraw(amount){
// //     this.winthdraw -= amount;
// // }
// // showBalance(){
// // console.log(`Account name: ${this.name}\n Balance: ${this.balance}`);
// // }

// // static getBankBalance(){
// //     console.log('Ramai prost!!! Banca X are ratele cele mai bune!!!')
// // }

// // }

// // const acc = new BankAccount('Bogdan', 20000);
// // acc.deposit(2000);
// // BankAccount.getBankBalance();
// // //BankAccount.deposit(); NU ESTE VALABILE == nu pot fi apelate de pe functie ci de pe INSTANTE
// // acc.showBalance();


// // PRACTICE

// var bam = {
//     w: 'w',
//     d: 'd'
// }

// function createObj (protoObj){
//     function dummyFn(){}
//     dummyFn.prototype = protoObj;
//     return new dummyFn();
//      // new ne creeaza urmatoarele linii
//      // this = Object.create(dummyFn.prototype);
//      // return this;
// }

// var acc = createObj(bam)
// console.log(acc);
// console.log(Object.getPrototypeOf(acc));

// // PROTOTYPE study 
// //https://medium.com/free-code-camp/a-beginners-guide-to-javascript-s-prototype-9c049fe7b34

// PART 2 (02.08.2019)

// DOM MANIPULATION
