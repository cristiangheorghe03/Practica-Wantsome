//const diff10 = makeDiff(10);

//function makeDiff(d){
//   function inner(s){
//        return d - s;
//    }
//    return inner;
//}
//const diff10 = makeDiff(10)
//console.log(diff10(3));
//console.log(makeDiff(10)(1));

/*design cont bancar:
prorpietati:
name,
balance,

functii 
withdraw(amount), depozit(amount), 
showBalance(), showName()*/

//transfer si history

var module = createBankAcount('Cristi', 200);
var module2 = createBankAcount('Dorel', 400);

module.showName();
module.showBalance();
module2.showName();
module2.showBalance();

// function createBankAcount(name, balance) {
//   var name = name;
//   var balance = balance;

//   function depozit(amount) {
//     return balance = balance + amount;
//   }
//   function withdraw(amount) {
//     if (amount > balance) {
//       console.log('You have insufficient funds!!!')
//     } else {
//     balance = balance - amount;
//     }
//   }
//   function showName(){
//     console.log(`Hei ${name},`)
//   }
//   function showBalance(){
//     console.log(`Your balance is ${balance} lei.`);
//   }
//   return {
//     depozit,
//     withdraw,
//     showName,
//     showBalance,
//   };
// }
function createBankAcount(name, balance) {
  var name = name;
  var balance = balance;

  function depozit(amount) {
    return (balance = balance + amount);
    
  }
  function withdraw(amount) {
    return balance = balance - amount;
  
  }
  function showName(){
    console.log(`Hei ${name},`)
  }
  function showBalance(){
    console.log(`Your balance is ${balance} lei.`);
  }
  return {
    depozit,
    withdraw,
    showName,
    showBalance,
  };
}

module.depozit(100)
