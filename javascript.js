const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    if (randomNumber < 33) {
        return rock;
    } else if (randomNumber < 66) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice() {
    let choice = prompt();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
} 


let computerScore = 0;
let humanScore = 0;

function playRound(computerSelection, humanSelection) {
    let computerChoice = computerSelection;
    let humanChoice = humanSelection;
    console.log(computerChoice);
    console.log(humanChoice);
    if (computerChoice === humanChoice) {
        return `It's a tie! Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
    } else if (
        (computerChoice === rock && humanChoice === scissors) ||
        (computerChoice === paper && humanChoice === rock) ||
        (computerChoice === scissors && humanChoice === paper)
    ) {
        ++computerScore;
        return `You lose! ${computerChoice} beats ${humanChoice}. Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
    } else {
        ++humanScore;
        return `You win! ${humanChoice} beats ${computerChoice}. Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
    }
}

