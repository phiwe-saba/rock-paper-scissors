/* Function will randomly return choice for the computer */

function getComputerChoice(){
    var choices = [ "rock", "paper", "scissors" ];
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
        if(getComputerChoice == "rock" && getPlayerChoice == "paper"){
            return getPlayerChoice;
            //console.log(getPlayerChoice + " beats " + getComputerChoice);
        }else if(getComputerChoice == "paper" && getPlayerChoice == "scissors"){
            return getPlayerChoice;
            //console.log(getPlayerChoice + " beats " + getComputerChoice);
        }else if(getComputerChoice == "scissors" && getPlayerChoice == "rock")
        {
            return getPlayerChoice;
            //console.log(getPlayerChoice + " beats " + getComputerChoice);
        }else{
            console.log("Computer wins");
        }
    }
}

function game(){
    for(i = 0; i <= 5; i++){
        const computerChoice = getComputerChoice();
        const playersChoice = getPlayerChoice();
    
        console.log(computerChoice + " " + playersChoice);
        console.log(getChoices(computerChoice, playersChoice));
    }
}

console.log(game());