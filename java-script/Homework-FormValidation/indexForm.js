
//PROBLEMS:
// 1.daca introduc valori in inputuri dupa ce eroarea este afisata
// aceasta nu dispare. Acest lucru nu se intampla nici dupa ce apasam
// tasat NEXT(submit).


//2. conditia de a fi doar numar


const name = document.getElementById('name')
const email = document.getElementById('email')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const phone = document.getElementById('phone')
const form = document.getElementById('myform')
const next = document.getElementById('submitButton')

const errorName = document.getElementById('errorName')
const errorEmailAdress =  document.getElementById('errorEmailAdress')
const errorFirstName = document.getElementById('errorFirstName')
const errorLastName = document.getElementById('errorLastName')
const errorPhone = document.getElementById('errorPhone')

function styleError (x) {
    x.style.width = '100%'
    x.style.height = '25px'
    x.style.background = 'lightgoldenrodyellow'
    x.style.margin = '5px 0 5px 0'
    x.style.fontSize = '10px'
    x.style.border = '2px solid red'
    x.style.padding = '5px'
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (name.value === '') {
        errorName.innerText = 'Please enter a username.'
        styleError(errorName)
    } else if (name.value.length < 4) {
        errorName.innerText = 'Please enter at least 4 characteres.'
        styleError(errorName)
    }

});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (email.value === '') {
        errorEmailAdress.innerText = 'Please enter a valide email.'
        styleError(errorEmailAdress)
    } 
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (firstName.value === '') {
        errorFirstName.innerText = 'Please enter your first name.'
        styleError(errorFirstName)
    } 
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (lastName.value === '') {
        errorLastName.innerText = 'Please enter your last name.'
        styleError(errorLastName)
    } 
})

form.addEventListener('submit', (e) => {
    let x = 1;
    if (phone.value === '') {
        errorPhone.innerText = 'Please enter your phone number.'
        styleError(errorPhone)
    } else if (phone.value.length !== 10 ) {
        errorPhone.innerText = 'Your phone number must have 10 characters.'
        styleError(errorPhone)
    } 

})



