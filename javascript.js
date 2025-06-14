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

