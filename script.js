function computerPlay() {
    const myChoices = ['rock', 'paper', 'scissors'];
    return myChoices[Math.floor(Math.random()*myChoices.length)]    
}

let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "lose"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "lose"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "lose"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "win"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "win"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "win"
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return "tie"
    }  else if (playerSelection == 'rock' && computerSelection == 'rock') {
    return "tie"
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return "tie"
    } else {
    return "invalid"
    }
}

function game() {
    
    
    playerInput = prompt("Round " + roundNum + ": " + "Rock, Paper or Scissors");
    const playerSelection =  playerInput.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection); {
        if (playRound(playerSelection, computerSelection) === "win" ) {
            playerScore += 1; roundNum += 1
            return alert("You Win!")
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore += 1; roundNum += 1
            return alert("You Lose!")
        } else if (playRound(playerSelection, computerSelection) === "tie") {
            playerScore += 0; computerScore += 0; roundNum += 1
            return alert("You Tie!")
        } else if (playRound(playerSelection, computerSelection) === "invalid")
            return alert("Wrong Choice! Check your spelling and try again!"), game();
    }
}

function finalScore() {
    if (playerScore > computerScore) {
        return alert("Final Score: You won " + playerScore + " games out of 5! You Win!" )
    } else if (playerScore < computerScore) {
        return alert("Final Score: You lost " + computerScore + " games out of 5! You Lose!")
    } else {
        return alert("Final Score: You both won " + playerScore + " games out of 5! You Tied!")
    } 
}

alert("Try and Win Rock, Paper, Scissors in 5 Rounds");
game();
game();
game();
game();
game();
finalScore();
console.log(playerScore, computerScore);
