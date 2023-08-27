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

    if(playerSelection === "rock" && computerSelection === 'paper') {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if(playerSelection === "rock" && computerSelection === 'scissors') {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock"
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Rock beats Scissors"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper"
    } else {
        return "It's a tie";
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
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