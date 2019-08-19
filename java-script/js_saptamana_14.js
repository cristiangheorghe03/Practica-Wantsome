// HTTP
// GET, POST(CREATE NEW DATE), PUT(UPDATE), PATCH(UPTADE), DELETE(STERGE)
//CreateReadUpdateDelete - CRUD

//STATUS QUOTES: 
//2XX - OK
//3XX - REDIRECT
//4XX - ERORI DE RESUSRSE(DE LA NOI)
//5XX - SERVER ERRORS(DE LA EI)

// RECAPITULARE

/*
1. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/

// var cameleon = document.getElementById('cameleon')

// function cameleonEventHandler() {
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);

//     cameleon.style.color = `rgb(${r}, ${g}, ${b})`
// }

// document.addEventListener('keydown', cameleonEventHandler)
// document.addEventListener('keyup', cameleonEventHandler)



/*
2. Avand formularul dat, adaugati un event listener 
pentru buton care apeleaza o functie postTheGossip cand este apasat
In aceasta functie luati toate valorile fieldurilor 
si faceti un story din ele ex "Xulescu este innebunit dupa bere neagra"
*/
// function postTheGossip (){
//     var n = document.getElementById('name')
//     var a = document.getElementById('adjective')
//     var cr = document.getElementById('random-word')
//     var story = document.getElementById('story')

//     story.innerHTML = `${n.value} este ${a.value} dupa ${cr.value}`
// }

// var button = document.getElementById('exButton')

// button.addEventListener('click', postTheGossip)

//2* Cerinta de mai sus, fara button, in real time si cu event delegation
// Hint: eventListenerul de keydown trebuie pus pe <ul>

// var ul = document.getElementsByTagName('ul')
// var storyElement = document.querrySelector('#story')

// var story = {};
// function realTime(e){
//     story[e.target.id] = e.target.value;
// storyElement.innerText = `${story.name} ${story.adjective} ${story.random-word}`

// }

// ul.addEventListener('keydown', realTime)


// baloon 
const size = 12
const b = document.querySelector('#balloon')
b.style.fontSize = `${size}px`

function inflateBalloon() {
size *= 2
b.style.fontSize = `${size}px`
}
function deflatedBalloon() {
    size /= 2
    b.style.fontSize = `${size}px`
}

document.addEventListener('keydown', e => {
if (e.key === 'ArrawUp') {
    inflateBalloon();
} else if (e.key === 'ArrowDown') {
deflatedBalloon();
}
})

// mandatory


/* Extra 
3. Creati urmatoarele functii sqrNum, halfNum, percentNum si areaCircle
pentru fiecare button aveeti de adaugat un event listner care atunci cand este clickuit sa gaseasca valoarea inputului si sa afiseze rezultatul solutiei
Bonus: faceti sa functioneze si la key press pe langa click
*/

