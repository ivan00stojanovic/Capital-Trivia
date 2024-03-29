//landing page logic 

let text = document.querySelector('.text')
const h2 = document.querySelector('h2')
const rulesTitle = document.querySelector('.rules-heading')
let tip = document.querySelector('.tip')
const disposableElements = Array.from(document.getElementsByClassName('future-removal'))
const buttonShort = document.querySelector('.shortGame')
const buttonLong = document.querySelector('.longGame')


//remove the intro/rulebook and display and start the quiz
const quizStart = (desiredRemoval) => {
    desiredRemoval.classList.remove('visually-hidden');
}
const elementRemoval = (element) => {
    element.remove()
}

const fadeLeftAnimation = [
    {transform: 'translateX(0px)', opacity: 1, easing: 'ease-in'},
    {transform: 'translateX(+150px)', opacity: 0.3, easing: 'ease-in'},
    {transform: 'translateX(-3000px)', opacity: 0, easing: 'ease-in-out'}
]

const startTheGame = () => {
    disposableElements.forEach((el, i) => {
        setTimeout(() => {
            el.animate(fadeLeftAnimation, 1000)
            //elementRemoval(el)
        }, i * 30);
    });
    setTimeout(elementRemoval, 1000, text,)
    setTimeout(quizStart, 1005, quizLayout)
    setTimeout(quizStart, 1005, nextQuestion)
    setTimeout(quizStart, 1005, timer)
    setTimeout(quizStart, 1005, score)
}


//quiz logic
let quizLayout = document.querySelector('.game-layout')
const nextQuestion = document.querySelector('.next-question')
let capitalQuestion = document.querySelector('.capital-question')
const options = document.querySelectorAll('.options')
let score = document.querySelector('.score');
//let showScore = document.querySelector('.class')
const optionOne = document.getElementById('1')
const optionTwo = document.getElementById('2')
const optionThree = document.getElementById('3')
const optionFour = document.getElementById('4')
let timer = document.querySelector('.timer')
let resultDisplay = document.querySelector('.results')
let restart = document.getElementById('restart-after-win')
const resultScore = document.getElementById('results-text')
//let slider = document.getElementById('slider')
let timerCounter = 20;
let scoreTracker = 0;
let counter = 0;
//let addToScore = 100;
//let numQ = 10;
const optionsArray = [optionOne, optionTwo, optionThree, optionFour]




//https://countriesnow.space/api/v0.1/countries/cities this is country names API

const hideBtn = () => {
//nextQuestion.classList.add("hide");
nextQuestion.style.setProperty('animation', 'reappear 350ms ease')
}

//const questionScore = () => {
//    
//}

const checkCounter = () => {
        //nextQuestion.innerText = 'Reset game'
        //optionsArray.forEach(option => option.disabled = true)
    //nextQuestion.addEventListener('click', () => {
        //counter = 0
        //scoreTracker  = 0
        //score.innerText = `Score : ${scoreTracker}`
        timerCounter = 20
        timer.innerText = timerCounter;
        resultScore.innerText = `Congratulations, your score was ${scoreTracker}! Would you like to try again?`

        if(counter > 9) resultDisplay.classList.remove('show-results')
    }


let countdown =  () => {
    timerCounter--;
    timer.innerText = timerCounter;
    if(timerCounter <= 0 ){
     clearInterval(countdown);
     timer.innerText = 'Yikes, out of time'
     nextQuestion.classList.remove('hide')
     optionsArray.forEach(option => option.disabled = true)
     nextQuestion.disabled = false;
     
    }    
};


async function apiRequest(){
    nextQuestion.disabled = true;
    startTheGame()
    timerCounter = 20
    timer.innerText = timerCounter;
    //timer.innerText = 'Next Question'
    
    //if(counter === 9){
    //    nextQuestion.innerHTML = 'reset game'
    //}
    console.log(counter)
     checkCounter()
    hideBtn()
    //const backTo20 = () => {
    //    timerCounter = 20;
    //    clearInterval(squareOne)
    //}
    const squareOne = setInterval(countdown, 1000)
    
    console.log(`counter after clicking next question ${counter}`)
    try{
        //fetch data from URL
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/capital`)
        const data = await response.json()
        let list = data.data
         //console.log(list)

        //get object from fetch and use reduce to reorder data by country name first as an array of objects
        let listOfCountryNames = list.reduce((acc, cur) => {
            acc[cur.name] = cur;
            return acc;
        }, [])

        //reorder data from original fetch as array of objects listed by country name (again so that we have two?)
        let countries = list.reduce((acc, cur) => {
            acc[cur.name] = cur;
            return acc;
        }, [])

        //console.log(countries)
        
        //reorder data from original fetch as array of objects but listed by capital names
        let capitals = list.reduce((acc, cur) => {
            acc[cur.capital] = cur;
            return acc;
        }, [])

        
        //console.log(capitals, countries.length)
        //remove all extra data from both countries and capitals arrays and leave only the names
        countries = Object.keys(countries).sort((a,b) => a.length - b.length)//choose 1 random
        capitals = Object.keys(capitals).sort((a,b) => a.length - b.length)//from this array choose 3 random
        capitals.shift()
        console.log(countries.indexOf('Heard Island and McDonald Islands'))
        countries.splice(countries.indexOf(112), 1)
        countries.splice(countries.indexOf(204), 1)
        countries.splice(countries.indexOf(247), 1)

         //get one random country name from countries array
         let randomCountry = countries[Math.floor(Math.random() * 248)]
         console.table(countries.length)
         //console.table(capitals)
         

         //gettin the correct answer first
         var answer = listOfCountryNames[randomCountry].capital

         let randomThreeArr = []
         while(randomThreeArr.length < 3 && !(randomThreeArr.includes(answer))){
            randomThreeArr.push(capitals[Math.floor(Math.random() * 243)])
        }
        //spread
        let answerOptions = [...randomThreeArr]
        answerOptions.push(answer)
        
         //pass the one random country into printCountryData function
         printCountryData(randomCountry)
         shuffleAnswers(answerOptions)
         console.log(randomThreeArr)
         console.log(answerOptions)
        
        //increments the score if the correct answer is clicked, NOTE: need to work on letting the user know that the answer is correct
        //for each btn adding an event listener to grab text and compare
        //to the answer previously defined
        //NOTE: issue with duplicates in console log when game is
        //restarted
        //NOTE! ASK WHAT WAS WRONG, LET MEG KNOW THE "NEXT QUESTION SPAM" PROBLEM

        counter++
        options.forEach((option) => {
            option.addEventListener('click', (e) => {
                nextQuestion.classList.remove('hide')  
                    if(e.target.innerText !== answer){
                        e.target.style.background = 'red'
                        score.innerText = `Score : ${scoreTracker}` 
                        //console.log(timerCounter, scoreTracker)
                        //NOTE!! wrong answer animation didn't run on consecutive wrong answers before i removed the animation property on line 116
                        score.style.setProperty('animation', 'wrong 600ms ease')
                        //disables the use of other options when the user answers
                        optionsArray.forEach(option => option.disabled = true)
                        nextQuestion.disabled = false;
                        clearInterval(squareOne)
                    }else{
                        //console.log(score)
                        //console.log(scoreTracker)
                        e.target.style.background = 'green'
                        scoreTracker += timerCounter * 2.5; 
                        //console.log(timerCounter, scoreTracker)
                        score.innerText = `Score : ${scoreTracker}` 
                        score.style.setProperty('animation', 'correct 500ms ease')              
                        //disables the use of other options when the user answers
                        optionsArray.forEach(option => option.disabled = true)
                        nextQuestion.disabled = false;
                        clearInterval(squareOne)
                    }
            })
        }) 

        
            
    
        // gives the buttons their functionality back after the apiRequest function is ran again
        optionsArray.forEach(option => option.disabled = false)
         //nextQuestion.innerText = 'Next Question'

          //returns every options' original bg after the user goes to the next question
          optionsArray.forEach(option => option.style.background = '')

        //removes the animation property so that it can be applied after every question click
          score.style.removeProperty('animation')
          

         
    }catch(error){
        console.log(error)
    }
}

document.addEventListener('keydown', e => {
    if(e.key.toLowerCase() === ' ' && nextQuestion.disabled === false){
        //checkCounter()
        console.log('space')
        apiRequest()
    }
})




 const printCountryData = country => {
     capitalQuestion.innerText = `What is the capital of ${country}?`
     //const h3 = document.getElementById('h3');
     //const answers = document.getElementById('answers')
     //h3.classList.add('visibility')
     //answers.classList.remove('visibility')
 }

 

 const shuffleAnswers = answerOptions => {
    let shuffled = answerOptions.sort((a, b) => 0.5 - Math.random())
    printCapitalData(shuffled)
 }

//fill the option slots with text
 const printCapitalData = capitalsArr => {
   const optionOne = document.getElementById('1')
   const optionTwo = document.getElementById('2')
   const optionThree = document.getElementById('3')
   const optionFour = document.getElementById('4')
    optionOne.innerText = capitalsArr[0]
    optionTwo.innerText = capitalsArr[1]
    optionThree.innerText = capitalsArr[2]
    optionFour.innerText = capitalsArr[3]   
}

buttonShort.addEventListener('click', () => {
    apiRequest()
})

nextQuestion.addEventListener('click', () => {
    apiRequest()
})

restart.addEventListener('click', () => {
    window.location.reload()
})
/* Things to do:
1. Use keyframe formats to animate rules element removal and arrival of quiz section
2. Start copying/writing the api fetch logic and the quiz logic
3. try to make the code with Meg a bit more readable and easier if you can
 4. break it down into smaller functions if possible
 */





