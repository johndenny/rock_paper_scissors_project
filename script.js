window.onload = function() {

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (roundNum > 5) {
            return;
        } 
        playerSelection = button.value;
        compSelection = computerPlay();
        playRound(playerSelection, compSelection);
  });
});

}

let playerScore = 0;
let compScore = 0;
let roundNum = 1;

function computerPlay() {
    const myChoices = ['rock', 'paper', 'scissors'];
    return myChoices[Math.floor(Math.random()*myChoices.length)]    
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'paper' || 
        playerSelection == 'paper' && computerSelection == 'scissors' || 
        playerSelection == 'scissors' && computerSelection == 'rock') {
        roundNum += 1;
        compScore += 1;
        roundResults('lose');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
        playerSelection == 'paper' && computerSelection == 'rock' || 
        playerSelection == 'scissors' && computerSelection == 'paper') {
        roundNum += 1;
        playerScore += 1;
        roundResults('win');
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors' || 
        playerSelection == 'rock' && computerSelection == 'rock' || 
        playerSelection == 'paper' && computerSelection == 'paper') {
        roundNum += 1;
        roundResults('tie');
    }  else {
        roundResults('invalid');
    }
}

function roundResults(result) {
    if (result === 'lose') {
        resultsEvents(`You Lost. You chose ${playerSelection}. The Computer chose ${compSelection}. The Score is Computer: ${compScore} Human: ${playerScore}.`);
        finalScore(roundNum);
    } else if (result === 'win') {
        resultsEvents(`You Won! You chose ${playerSelection}. The Computer chose ${compSelection}. The Score is Computer: ${compScore} Human: ${playerScore}.`);
        finalScore(roundNum);
    } else if (result === 'tie') {
        resultsEvents(`You Tied. You chose ${playerSelection}. The Computer chose ${compSelection}. The Score is Computer: ${compScore} Human: ${playerScore}.`);
        finalScore(roundNum);
    } else {
        resultsEvents('INVALID');
        finalScore(roundNum);
    }
}

function finalScore(rounds) {
    if (rounds > 5 && playerScore > compScore) {
        resultsEvents(`Final Score = Computer: ${compScore} Player: ${playerScore}. You Won!`);
    } else if (rounds > 5 && playerScore < compScore) {
        resultsEvents(`Final Score = Computer: ${compScore} Player: ${playerScore}. You Lost.`);
    } else if (rounds > 5 && playerScore === compScore) {
        resultsEvents(`Final Score = Computer: ${compScore} Player: ${playerScore}. You Tied.`);
    }
}

function resultsEvents(text) {
    const resultsContainer = document.querySelector('.results');
        const resultspara = document.createElement('p');
        resultspara.textContent = text;
        resultsContainer.appendChild(resultspara);
}