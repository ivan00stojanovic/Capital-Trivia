let text = document.querySelector('.text')
let secondDiv = document.querySelector('.game-layout')
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

const quizStart = (desiredRemoval) => {
    desiredRemoval.classList.remove('visually-hidden');
    console.log('charm')
}
const elementRemove = (el) => {
    el.remove()
}
buttonShort.addEventListener('click', () => {
  text.animate([
    {opacity: '1', easing: 'ease-in', transform: 'scale(1)'},
    {opacity: '0', easing: 'ease-in', transform: 'scale(0.2)'},
    {opacity: '1', easing: 'ease-in', transform: 'scale(1)'}]
    ,1500)
    setTimeout(elementRemove, 200, text)
    setTimeout(quizStart, 250, secondDiv)
    alert('PROCITAJ STA SLEDECE DA RADIS')
})  

//buttonLong.addEventListener('click', () => {
//    text2.animate([
//      {opacity: '1', easing: 'ease-in', transform: 'scale(1)'},
//      {opacity: '0', easing: 'ease-in', transform: 'scale(0.2)'},
//      {opacity: '1', easing: 'ease-in', transform: 'scale(1)'}]
//      ,1500)
//      setTimeout(byee, 2000, text2)
//      setTimeout(quizStart, 2500, text2)
//  })


 /* Things to do:
 1. Use keyframe formats to animate rules element removal and arrival of quiz section
 2. Start copying/writing the api fetch logic and the quiz logic
 3. try to make the code with Meg a bit more readable and easier if you can
 4. break it down into smaller functions if possible
 5. do DSA!!!!!!!!!!!!!!!!!!!!!
 */





