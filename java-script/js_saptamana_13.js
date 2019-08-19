// function insertion(tag, id, text) {
//     const element = document.createElement(tag);
//     element.setAttribute('id',id);
//     element.textContent = text;
//     document.body.appendChild(element);
// }

// insertion('p','top','text');

// function insertLink(link, attribute, value) {
//     const element2 = document.createElement(link);
//     element2.setAttribute(attribute, value);
//     document.body.appendChild(element2);
// }

// insertLink('a','href','https://www.google.com/');

// CREATI UN TABEL CARE SIMULEAZA O TABLA DE SAH

// cream un div
// 8 raduri(tr) si 8 coloane(td)

// var chessArray = [
//     [0,1,0,1,0,1,0,1],
//     [1,0,1,0,1,0,1,0],
//     [0,1,0,1,0,1,0,1],
//     [1,0,1,0,1,0,1,0],
//     [0,1,0,1,0,1,0,1],
//     [1,0,1,0,1,0,1,0],
//     [0,1,0,1,0,1,0,1],
//     [1,0,1,0,1,0,1,0],
// ]

// function chessBoard (){

// const table = document.createElement('table')
//     table.style.borderBottomColor = 'black'

//     for (i = 0; i < chessArray.length; i++ ) {
//         const row = document.createElement('tr')
//         table.appendChild(row)
//         for ( j = 0; j < chessArray[i].length; j++){
//             const column = document.createElement('td')
//             column.style.height = '50px'
//             column.style.width = '50px'
//             if(chessArray[i][j]){
//                 column.style.background = 'black'
//             }
//             row.appendChild(column)
//         }
//     }
//     document.body.appendChild(table)
// }

// chessBoard();
// const row = document.createElement('tr')
// document.body.appendChild(row)

// const column = document.createElement('td')
// document.tr.appendChild(column)

// ---------------SAPTAMANA 2--------------- //

// 1.Events

// function displayDate(){
//     var currentTime = new Date();
//     var d = document.getElementById('test')
//     d.innerHTML = currentTime.getHours() + ':' + currentTime.getMinutes();
// }

// // onmouseover - change color

// function changeB(){
//     var bk = document.getElementById('testBody')
//     bk.style.background = "yellow";
// }

// function dimension() {
//     var dim = document.getElementById('test2')
//     dim.style.width = '100px';
//     dim.style.height = '100px';
//     dim.style.borderRadius = '50px'
// }

// doua inputuri name si initial balance
// 1 button
// ni se creeaza lista
// la click sa cream un li

// const row = document.createElement('tr')
// document.body.appendChild(row)

// const column = document.createElement('td')
// document.tr.appendChild(column)

// ----------PRIN SPECIFICAREA LISTENER-ULUI

//   document.getElementById('button').onclick = function insertRow() {
//   var table = document.getElementById("table");

//   var row = document.createElement("tr");
//   row.innerHTML = "<td>Cristi</td>";
//   table.appendChild(row);
// }

//--------METODA addEventListener

// function insertRow() {
//     var table = document.getElementById("table");
  
//     var row = document.createElement("tr");
//     row.innerHTML = "<td>Cristi</td>";
//     table.appendChild(row);
//   }
  
//   var btn = document.getElementById('button');
  
//   btn.addEventListener("click", insertRow)

//promt..prin cate linii si cate coloane vrei si sa genereze acea cerinta