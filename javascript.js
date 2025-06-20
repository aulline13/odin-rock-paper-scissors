const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const userSelectionButtons = document.querySelectorAll(".user-selection-button");
const resultDisplay = document.querySelector(".result-display");

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

// function getHumanChoice() {
//     let choice = prompt();
//     // Make user input case-insensitive by capitalizing the first letter and then making the rest lowercase
//     choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//     return choice;
// } 

userSelectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice();
        let humanSelection = button.textContent;
        playRound(computerSelection, humanSelection);
        if (computerScore === 5 || humanScore === 5) {
            resultDisplay.appendChild(document.createElement("p")).textContent = "Game Over";
            resultDisplay.appendChild(document.createElement("p")).textContent = `Final scores: Computer: ${computerScore}, Human: ${humanScore}`;
            resultDisplay.appendChild(document.createElement("p")).textContent = "Thanks for playing!";
            resultDisplay.appendChild(document.createElement("p")).textContent = "Please refresh the page to play again.";
            userSelectionButtons.forEach(button => {
                button.disabled = true; // Disable buttons after game over
            });
        }

    });
});

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        resultDisplay.appendChild(document.createElement("p")).textContent = `It's a tie! ${computerChoice} = ${humanChoice}. Current scores: Computer: ${computerScore}, Human: ${humanScore}`;
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





