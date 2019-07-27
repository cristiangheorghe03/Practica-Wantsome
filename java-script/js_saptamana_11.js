//RECAPITULARE
// IIFE, HOF, OOP


// DE CE FOLOSIM UN IIFE?
// Crearea unui scope local imediat pentru a nu polua scopeul global cu variabilele noastre

//HOF
//O functie pasata ca argument reprezinta un HOF

//OOP
//O paradigma(un mod de gandi). Sa abstractizam la modul gandirii de zi de zi.

//Exemplu OOP
/*
var myCar = {
    make: 'Vovlo',
    milage: 160000,
    changeKm: function(km){
        return (myCar.milage += km);
    }
}
*/
//Crearea unei functii constructive

// function MakeCare(myCar, milage){
//     var car = {}
//     car.make = myCar;
//     car.milage = milage;
//     car.changeKm = function(km){
//         car.milage +=km;
//     }
//     return car;
// }

// functii constructor (UpperCamelCase)
// var car = MakeCare('Volvo', 150000);
// console.log(car);

// function MakeCare(myCar, milage){
//     this.make = myCar;
//     this.milage = milage;
//     this.changeKm = function(km){
//         this.milage +=km;
//     }
// }
// var car = new MakeCare('Volvo', 150000);
// console.log(car);


//TEMA 

// function MusicPlayer(initialPlaylist = []){
//     this.playlist = initialPlaylist;
//     this.currentlyPlaying - this.playlist[0];
//     this.play = function(position = 0){
//         this.currentlyPlaying = this.playlist[position];
//         console.log(`Now playing:`, this.playlist[position]);
//     };


// this.shuffle = 


//     this.addToPlaylist = function (melodie){
//         this.playlist.push(melodie)
//         console.log('Add to playlist:', melodie)
//     }
//     this.removeFromPlaylist = function (melodie){
//         // var position = this.playlist.indexOf(melodie)
//         // this.playlist.splice(position, 1);
//         this.playlist = this.playlist.filter(function(value) {
//             return value !== melodie;
//         });
//     }

//     showPlayList = function (){
//         this.playlist.forEach(function(value){
//             console.log(value);
//         })
//     }
//     this.nextTrack = function (){
//         var currentPosition = this.playlist.indexOf(this.currentlyPlaying);
//         var nextPosition = currentPosition + 1;
//     // if (nextPosition > this.playlist.length - 1) {
//     // console.log(this.playlist[0]);
//     // } else {
//     // console.log(this.playlist[nextPosition])
//      console.log(this.playlist[nextPosition])

//     }
// }




// var playlist = ['Nicu Alifantis - Spala Rana',
//                 'Dan Ciotoi - S-a rupt lantul de iubirii',
//                 'Drake - Fructul Pasiunii' ];

// var SporifyU = new MusicPlayer(playlist);
// SporifyU.play(2);

/////// ******* SAPTAMANA 11 - C1 ***********

// 4 moduri ale lui this

// var obj = {
//     op1: 10,
//     op2: 5
// };

// function sum() {
//     return this.op1 + this.op2;
// }

// var sum2 = sum.bind(obj);
// console.log(sum2());

//   {...obj1, ...obj2} - se creeaza un obiect concatenat -> obj1+obj2

// CURSUL 2(VINERI)


// PRACTICE
// ATM 
// showDetails
// Deposit
// Withdraw




// function Atm(){

// this.showDetalis = function (){
//     console.log(`Nume: ${this.name}, Cont curent: ${this.balance} Ron`)
//   } 

// this.deposit = function (depositAmount) {
//     this.balance = this.balance + depositAmount;
//     console.log(`${this.name}, contul tau a fost alimentat cu ${depositAmount} Ron`)
//   }
// this.withdraw = function (withdrawAmount) {
//     if (withdrawAmount > this.balance) {
//       console.log('You have insufficient funds!!!')
//     } else {
//     this.balance = this.balance - withdrawAmount;
//     }
//   }
// }
// // const person1 = new Atm( 'Cristi', 100);
// // person1.showDetalis();

// var wantsome = {
//     name: 'Ionut',
//     balance: 200,
// }

// var const1 = new Atm();

// const1.showDetalis.bind(wantsome)();
// const1.deposit.bind(wantsome)(600);
// const1.deposit.apply(wantsome,[200]);
// const1.deposit.call(wantsome, 200);

// const1.showDetalis.bind(wantsome)();


// destructuring
// ARRAOW FUNCTION 

var sum = (a, b) => {
    return a + b;
}
 var sum = (a,b) => a+b // arrow function au return implicit
 // arrow function NU ARE this iar SCOPE ul lor e undef