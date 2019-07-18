/*Creati un modul care sa simuleze toata operatiunile comune unui cont bancar:
depunere si retragere de bani, printarea soldului curent, afisarea beneficiarului.

Creati o metoda care sa afiseze ultimele N tranzactii efectuate de contul curent.
Acest istoric trebuie sa afiseze suma transferata, tipul operatiunii
(depunere/retragere) si data cand a avut loc.*/


var CristiAccount = createBankAcount('Cristi', 200);
var VictorAccount = createBankAcount('Victor', 400);

CristiAccount.showAccount();
VictorAccount.showAccount();
CristiAccount.transferMoney(VictorAccount, 100);
VictorAccount.showAccount();
CristiAccount.showAccount();

function createBankAcount(name, balance) {
  var name = name;
  var balance = balance;

  function deposit(depositAmount) {
    balance = balance + depositAmount;
    console.log(`${name}, contul tau a fost alimentat cu ${depositAmount} Ron`)
  }
  function withdraw(withdrawAmount) {
    if (withdrawAmount > balance) {
      console.log('You have insufficient funds!!!')
    } else {
    balance = balance - withdrawAmount;
    }
  }
  function showAccount(){
    console.log(`Nume: ${name}, Cont curent: ${balance} Ron`)
  }
  
  function transferMoney(account, amount){
    if (amount < balance){
    balance = balance - amount;
    account.deposit(amount);
  } else {
    console.log(`Insufficient funds! Your curent balance is ${balance} Ron.`)
  } 
}
  //function accountHistory(transactions)
 

  return {
    transferMoney,
    deposit,
    withdraw,
    showAccount,
  };
}

