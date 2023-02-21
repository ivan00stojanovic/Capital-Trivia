let text = document.querySelector('.text')
const buttonShort = document.querySelector('.shortGame')
const buttonLong = document.querySelector('.longGame')

//const newspaperSpinning = opacity

const byee = (poz) => {
    poz.remove()
}
buttonShort.addEventListener('click', () => {
    text.animate([{transform: 'translateX(0px)', easing: 'ease-in'},{transform: 'translateX(-300px)', easing: 'ease-in'}],1000)
    setTimeout(byee(text), 10500)
})


