// 1. Calculati n! //

//recursive function//

/*function fact(n) {
    if(n==1) 
        return 1;
    else 
        return n * fact(n-1);
 }
 var rValue = fact(6);
 console.log(rValue); */

//loop//
/*var num=5;
var fact=1;

for(i=num; i>=1; i=i-1) {
    fact = fact * i;
} console.log(fact);*/

//2.Calculati cel mai mare divizor comun a doua numere folosind algoritmul lui Euclid.//

/*function gcd(num1, num2) {
  if (num2 == 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
}
console.log(gcd(23,3));*/

//3. Convertiti Celsius in Fahrenheit si invers si afisati (folosint alert)

/*function cToF(celsius) 
{
  var cTemp = celsius;
  var convertToFahr = cTemp * 9 / 5 + 32;
    alert ('The temperature is = '+ convertToFahr + ' Fahrenheit degrees');
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var convertToCel = (fTemp - 32) * 5 / 9;
    alert ('The temperature is = '+ convertToCel + ' Celsius degrees');
} 
cToF(60);
fToC(122);*/
