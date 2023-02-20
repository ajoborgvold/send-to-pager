const pagerDisplay = document.getElementById('pager-display')
const phoneDisplay = document.getElementById('phone-display')
const keys = document.getElementsByClassName('single-key')
let digitsArray = []
const maxCharacters = 13
const notification = new Audio('assets/pager.wav')
const resetBtn = document.getElementById('reset-btn')
const sendBtn = document.getElementById('send-btn')


for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function(){
        digitsArray.push(keys[i].dataset.value)
        renderDigits()
    })
}


function renderDigits(){
    if (digitsArray.length <= maxCharacters){
        phoneDisplay.innerText = digitsArray.join('')
    }
}


resetBtn.addEventListener('click', function(){
        phoneDisplay.innerText = ""
        digitsArray = []
        pagerDisplay.innerText = ""
})


sendBtn.addEventListener('click', function(){
        setTimeout(function(){
            pagerDisplay.innerText = phoneDisplay.innerText
            notification.play()
            }, 1500)
})