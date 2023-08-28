function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);

    switch(numberChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    } 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return "It's a tie"
    } 
    else if (playerSelection === "rock") {
        if(computerSelection === 'paper') {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    } 
    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    } 
    else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors"
        } else {
            playerScore++;
            return "You Win! Scissors beats Paper"
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        console.log(`You choose ${playerSelection} and the computer choose ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        console.log('You Win The Game!');
    } else if(playerScore < computerScore) {
        console.log('You Lose The Gamme');
    } else {
        console.log("It's a tie");
    }
}

let playerScore = 0;
let computerScore = 0;

game();