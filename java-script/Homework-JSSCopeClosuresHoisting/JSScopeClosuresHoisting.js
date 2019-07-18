//1.Creati o functie care primeste ca argument un sir de caractere si
//gaseste cel mai lung cuvant din acest sir. Daca doua cuvinte au aceeasi
//lungime returnati primul cuvant cu acea lungime.

// function findLongestWord(string) {
//   var stringSplit = string.split(" ");
//   var longestWord = 0;
//   var word = null;

//   for (var i = 0; i < stringSplit.length; i++) {
//     if (stringSplit[i].length > longestWord) {
//       longestWord = stringSplit[i].length;
//       word = stringSplit[i];
//     }
//   }
//   return word;
// }
// console.log(
//   findLongestWord(
//     "Creati o functie care primeste ca argument un sir de caractere!"
//   )
// );

//2.Scrieti o functie care sa aiba output-ul asta:
//*
//* *
//* * *
//* * * *
//* * * * *
// function stars(any) {
//   for (var i = 1; i <= 5; i++) {
//     var str = "";
//     for (var j = 1; j <= i; j++) {
//       str += any;
//     }
//     console.log(str);
//   }
// }
// stars(" * ");

// function stars() {
//   return function() {
//     for (var i = 1; i <= 5; i++) {
//       console.log(" * ".repeat(i));
//     }
//   };
// }
// const someStras = stars();
// someStras();

//3.Creati o functie care primeste o lista de persoane de forma {name, age} si
//returneaza doar pe cei cu varsta peste 18 ani. Modificati functia astfel
//incat conditia de filtrare sa poate fi controlata printr-o functie
//pasata ca argument.

// var name1 = nameList("Ion", 17);
// var name2 = nameList("Alina", 24);

// name1.selectionName();
// name2.selectionName();

// function nameList(name, age) {
//   var name = name;
//   var age = age;

//   function selectionName() {
//     if (age >= 18) {
//       console.log(`Sunt ${name} si am ${age} ani.`);
//     } else {
//       console.log(`${name} nu a implint inca varsta de 18 ani!`);
//     }
//   }
//   return { selectionName, };
// }

//4.Creati o functie cu doi parametri de tip string si care verifica daca
//cele doua cuvinte formeaza o anagrama.
 

/*5. Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un
string/numar.
removeDuplicates('aabcdeef') -> 'abcdef'
removeDuplicates(122334) - 1234*/

// function removeDuplicates(string) {
//   var unique = '';
//   for(var i=0; i<string.length; i++){
//     if(string.lastIndexOf(string[i]) === string.indexOf(string[i])){
//       unique += string[i];
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicates('abbbcd'));

/*6.Creati o functie care returneaza al N-lea numar din seria lui Fibonacci.

fibonacci(7) -> 13
fibonacci(9) -> 44*/

function fibonacci(n) {
  if (n < 2){
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(11));

/*7.Creati o functie care ridica la patrat fiecare cifra a unui numar.

squareDigits(943) -> 81169; 9*9 = 81, 4 * 4 = 16, 3 * 3 = 9
squareDigits(12) -> 14
squareDigits(682) -> 36644*/


//8.Creati o functie cu un singur parametru de tip numar si returneaza o alta
//functie cu un parametru de tip numar. Functia copil returneaza suma
//dintre argumentul primei functii si argumentul ei.

// function makeSum(nr1) {
//   function inner(nr2) {
//     return nr1 + nr2;
//   }
//   return inner;
// }
// const sum = makeSum(10);

// console.log(sum(3));

/*9.Creati o functie numita buildFun care primeste un numar N ca argument
si returneaza un array cu N elemente de tip function. Cand apelam pe rand
functiile din acest array ar trebui sa logam la consola numerele de la
0 la N.*/

