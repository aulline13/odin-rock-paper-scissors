const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const userSelectionButtons = document.querySelectorAll(".user-selection-button");
const resultDisplay = document.querySelector(".result-display");
console.log(userSelectionButtons);


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    resultDisplay.appendChild(document.createElement("hr"));
    resultDisplay.appendChild(document.createElement("p")).textContent = `Random number generated: ${randomNumber}`;
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
    resultDisplay.appendChild(document.createElement("p")).textContent = `Computer chose: ${computerChoice}`;
    resultDisplay.appendChild(document.createElement("p")).textContent = `Human chose: ${humanChoice}`;
    if (computerChoice === humanChoice) {
        resultDisplay.appendChild(document.createElement("p")).textContent = `It's a tie! Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
        resultDisplay.appendChild(document.createElement("hr"));
    } else if (
        (computerChoice === rock && humanChoice === scissors) ||
        (computerChoice === paper && humanChoice === rock) ||
        (computerChoice === scissors && humanChoice === paper)
    ) {
        ++computerScore;
        resultDisplay.appendChild(document.createElement("p")).textContent = `You lose! ${computerChoice} beats ${humanChoice}. Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
        resultDisplay.appendChild(document.createElement("hr"));
    } else {
        ++humanScore;
        resultDisplay.appendChild(document.createElement("p")).textContent = `You win! ${humanChoice} beats ${computerChoice}. Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
        resultDisplay.appendChild(document.createElement("hr"));
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

