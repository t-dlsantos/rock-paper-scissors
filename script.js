let computerScore = 0;
let playerScore = 0;

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
    const resume = document.querySelector('.resume');
    resume.textContent = `You choose ${playerSelection} and the computer choose ${computerSelection}`
    
    if(playerSelection === computerSelection) {
        return "It's a tie";
    } 
    else if (playerSelection === "rock") {
        if(computerSelection === 'paper') {
            computerScore++;
            return "lose";
        } else {
            playerScore++;
            return "win";
        }
    } 
    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerScore++;
            return "win";
        } else {
            computerScore++;
            return "lose";
        }
    } 
    else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            computerScore++;
            return "lose";
        } else {
            playerScore++;
            return "win";
        }
    }
}

function updateScore(playerSelection, computerSelection) {
    const result = playRound(playerSelection, computerSelection);
    const resultParagraph = document.querySelector('.result');
    
    if(result === 'win') {
        resultParagraph.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(result === 'lose'){
        resultParagraph.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    } else {
        resultParagraph.textContent = "It's a tie" 
    }

    const playerScoreParagraph = document.querySelector('.playerScore');
    const computerScoreParagraph = document.querySelector('.computerScore');

    playerScoreParagraph.textContent = `Player Score: ${playerScore}`;
    computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;

    if(computerScore === 5) {
       alert('You lost the game :('); 
       playerScore = 0;
       computerScore = 0;
    } else if(playerScore === 5){
        alert('You win the game :)');
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.addEventListener('click', (e) => {
    const playerSelection = e.target.classList.value;
    const computerSelection = getComputerChoice();
    updateScore(playerSelection, computerSelection);
}));

