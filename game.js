const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const colorResult = document.getElementById("result");


const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let showedResult;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
   userChoice = event.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 ;
    

    if (randomNumber ===1){
        computerChoice ='rock'
    }

    if (randomNumber ===2){
        computerChoice ='scissors'
    }

    if (randomNumber ===3){
        computerChoice ='paper'
    }
computerChoiceDisplay.innerHTML = computerChoice
};

function getResult(){
    if (computerChoice === userChoice){
        showedResult = 'Its a Draw!💙'
        colorResult.style.color = '#0dcaf0'
    }

    if (computerChoice === 'rock' && userChoice === "paper"){
        showedResult = 'You win!🥳'
        colorResult.style.color = '#39e600'
    }

    if (computerChoice === 'rock' && userChoice === "scissors"){
        showedResult = 'You lost!😓'
        colorResult.style.color = '#e60000'
    }

    if (computerChoice === 'paper' && userChoice === "scissors"){
        showedResult = 'You win!🥳'
        colorResult.style.color = '#39e600'
    }

    if (computerChoice === 'paper' && userChoice === "rock"){
        showedResult = 'You lost!😓'
        colorResult.style.color = '#e60000'
    }

    if (computerChoice === 'scissors' && userChoice === "rock"){
        showedResult = 'You win!🥳'
        colorResult.style.color = '#39e600'
    }

    if (computerChoice === 'scissors' && userChoice === "paper"){
        showedResult = 'You lost!😓'
        colorResult.style.color = '#e60000'
    }

resultDisplay.innerHTML = showedResult
};