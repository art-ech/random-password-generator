const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+/?><:{}[]\|+=-_'
let passwordLength = 15
let password = ''


const clickBtn = document.querySelector('#genPassword')
const span = document.querySelector('span')
const toolTip = document.querySelector('.copy_password')

const displayPassword = document.querySelector('input')

const generatePassword = ()=> {
    for (let i=0; i<passwordLength; i++) {
        let randomNumber = Math.floor(Math.random()*characters.length);
        password+= characters.substring(randomNumber,randomNumber+1)
        displayPassword.value = password
        setTimeout(()=> location.reload(),5000)
    }
}

clickBtn.addEventListener('click', (e)=> {
    generatePassword()
    displayPassword.select()
})

const showToolTip = ()=> {
    toolTip.style.display = 'flex'
    span.style.color = 'blue'
}

span.addEventListener('click', (e)=> {
    navigator.clipboard.writeText(displayPassword.value)
    showToolTip()
    setTimeout(()=> toolTip.style.display = 'none',3000 )
    setTimeout(()=> span.style.color = 'black',3000)
})
