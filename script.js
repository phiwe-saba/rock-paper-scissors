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

    let playerScore = 0, playerTotal = 0;
    let computerScore = 0, computerTotal = 0;

    if(getComputerChoice == getPlayerChoice){
        console.log("Tie");
    }else{
        if(getComputerChoice == "rock" && getPlayerChoice == "paper"){
            playerScore++;
            return getPlayerChoice;
            //console.log(getPlayerChoice + " beats " + getComputerChoice);
        }else if(getComputerChoice == "paper" && getPlayerChoice == "scissors"){
            playerScore++;
            return getPlayerChoice;
            //console.log(getPlayerChoice + " beats " + getComputerChoice);
        }else if(getComputerChoice == "scissors" && getPlayerChoice == "rock"){
            playerScore++;
            return getPlayerChoice;
            //console.log(getPlayerChoice + " beats " + getComputerChoice);
        }else{
            computerScore++;
            console.log("Computer wins");
        }
    }

    playerTotal = playerTotal + playerScore;
    computerTotal = computerTotal + computerScore;

    if(playerTotal = computerTotal){
        console.log("It's a tie! " + playerTotal);
    }else if(playerTotal > computerTotal){
        console.log("Player wins with " + playerTotal);
    }else{
        console.log("Computer wins with " + computerTotal);
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