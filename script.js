/* Function will randomly return choice for the computer */

function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];   
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter choice: ");

    return playerChoice;
}

function getChoices(getComputerChoice, getPlayerChoice){
    if(getComputerChoice == getPlayerChoice){
        console.log("Tie");
    }else{
        if(getComputerChoice == "rock" && getPlayerChoice == "paper" || 
           getComputerChoice == "paper" && getPlayerChoice == "scissors" ||
           getComputerChoice == "scissors" && getPlayerChoice == "rock")
        {
            console.log("Still to decide");
        }
    }
}

const computerChoice = getComputerChoice();
const playersChoice = getPlayerChoice();

console.log(computerChoice + " " + playersChoice);

console.log(getChoices(computerChoice, playersChoice));