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
// Solutie rezolvata in clasa
function createBankAccount(initialBalance) {
  const OPERATIONS = {
    deposit: "DEPOSIT",
    withdraw: "WITHDRAW",
  };

  const transactions = [
    {
      amount: initialBalance,
      operation: OPERATIONS.deposit,
      date: new Date(),
    },
  ];

  function getBalance() {
    let totalBalance = 0;
    // let totalBalanceCuFor = 0;

    // for (let i = 0; i < transactions.length; i++) {
    //   if (transactions[i].operation === "deposit") {
    //     totalBalanceCuFor += transactions[i].amount;
    //   } else {
    //     totalBalanceCuFor -= transactions[i].amount;
    //   }
    // }

    transactions.forEach(function(transaction) {
      if (transaction.operation === OPERATIONS.deposit) {
        totalBalance += transaction.amount;
      } else {
        totalBalance -= transaction.amount;
      }
    });

    return totalBalance;
  }

  function getTransactionHistory(n = 3) {
    return transactions
      .concat()
      .reverse()
      .slice(0, n);
  }

  function makeTransaction(amount, operation) {
    transactions.push({
      amount,
      operation,
      date: new Date(),
    });
  }

  return {
    deposit: function() {
      const args = Object.values(arguments);

      if (args.length === 4) {
        console.log(
          `Esti nascut in ${args[0]}, te cheama ${args[1]}, te duci pana la ${
            args[2]
          } sa depui ${args[3]}lei`,
        );
        makeTransaction(args[3], OPERATIONS.deposit);
      } else {
        makeTransaction(args[0], OPERATIONS.deposit);
      }
    },
    withdraw: function(amount) {
      makeTransaction(amount, OPERATIONS.withdraw);
    },
    getBalance,
    makeTransaction,
    getTransactionHistory,
    //
    min: function() {
      const args = Object.values(arguments);
      let min = Number.MAX_SAFE_INTEGER;

      args.forEach(function(arg) {
        if (arg < min) {
          min = arg;
        }
      });
      return min;
    },
  };
}

const acc = createBankAccount(1000);

acc.withdraw(200);
acc.withdraw(200);

acc.deposit(100);

acc.deposit(2000, "Alex", "ING", 13);

console.log(acc.getBalance());

