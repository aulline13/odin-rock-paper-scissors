const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const userSelectionButtons = document.querySelectorAll(".user-selection-button");
console.log(userSelectionButtons);


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
    // Make user input case-insensitive by capitalizing the first letter and then making the rest lowercase
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

userSelectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        console.log(playRound(computerChoice, humanChoice));
    });
});

function playGame() {
    // for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getHumanChoice()));
    // }
}

playGame();
console.log(`Final scores: Computer: ${computerScore}, Human: ${humanScore}`);
console.log("Game Over");
console.log("Thanks for playing!");
console.log("Please refresh the page to play again.");

