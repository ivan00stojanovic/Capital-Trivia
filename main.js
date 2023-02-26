let text = document.querySelector('.text')
const h2 = document.querySelector('h2')
const rulesTitle = document.querySelector('.rules-heading')
let tip = document.querySelector('.tip')
const disposableElements = Array.from(document.getElementsByClassName('future-removal'))
let quizLayout = document.querySelector('.game-layout')
const buttonShort = document.querySelector('.shortGame')
const buttonLong = document.querySelector('.longGame')

//remove the intro/rulebook and display and start the quiz
const quizStart = (desiredRemoval) => {
    desiredRemoval.classList.remove('visually-hidden');
    console.log('charm')
}
const elementRemoval = (element) => {
    element.remove()
}


const fadeLeftAnimation = [
    {transform: 'translateX(0px)', opacity: 1, easing: 'ease-in'},
    {transform: 'translateX(+150px)', opacity: 0.3, easing: 'ease-in'},
    {transform: 'translateX(-3000px)', opacity: 0, easing: 'ease-in-out'}
]

buttonShort.addEventListener('click', () => {
    disposableElements.forEach((el, i) => {
    setTimeout(() => {
        el.animate(fadeLeftAnimation, 1000)
        //elementRemoval(el)
        }, i * 30);
    });
    setTimeout(elementRemoval, 1000, text)
    setTimeout(quizStart, 1005, quizLayout)
})  







 /* Things to do:
 1. Use keyframe formats to animate rules element removal and arrival of quiz section
 2. Start copying/writing the api fetch logic and the quiz logic
 3. try to make the code with Meg a bit more readable and easier if you can
 4. break it down into smaller functions if possible
 5. do DSA!!!!!!!!!!!!!!!!!!!!!
 */





