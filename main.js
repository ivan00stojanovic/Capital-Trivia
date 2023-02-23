let text = document.querySelector('.text')
const buttonShort = document.querySelector('.shortGame')
const buttonLong = document.querySelector('.longGame')

//const newspaperSpinning = opacity

//const makeNewElement = (html) => {
//     html = document.createElement('button')
//    startbtn.innerText = 'radili'
//    html.id = 'button-1'
//    console.log(html)
//    return  document.appendChild(html)
//}


const byee = (poz) => {
    poz.remove()
}
buttonShort.addEventListener('click', () => {
  text.animate([
    {opacity: '1', easing: 'ease-in', transform: 'scale(1)'},
    {opacity: '0', easing: 'ease-in', transform: 'scale(0.2)'},
    {opacity: '1', easing: 'ease-in', transform: 'scale(1)'}]
    ,2500)
    //setTimeout(byee, 1500, text,)
})


