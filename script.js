
//game();
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
// let playerSelection = prompt("Rock, Paper or Scissors?");
rockBtn.addEventListener('click', function() {
    playRound(getComputerChoice(), 'rock');
});
paperBtn.addEventListener('click', function() {
    playRound(getComputerChoice(), 'paper');
});
scissorsBtn.addEventListener('click', function() {
    playRound(getComputerChoice(), 'scissors');
});


function getComputerChoice() {
    let randInt = getRandInt(1, 3)
    if (randInt === 1) {
        return "rock";
    }
    else if (randInt === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}

function playRound(compSel, playSel) {
    compSel = compSel.toLowerCase();
    playSel = playSel.toLowerCase();

    if (compSel === playSel) {
        return("Tie") ;
    }
    else if (compSel === "rock" && playSel === "scissors"){
        return "You Lose!, Rock beats Scissors";
    }
    else if (compSel === "rock" && playSel === "paper"){
        return "You Win!, Paper beats Rock";
    }
    else if (compSel === "scissors" && playSel === "rock"){
        return "You Win!, Rock beats Scissors";
    }
    else if (compSel === "scissors" && playSel === "paper"){
        return "You Lose!, Scissors beat Paper";
    }
    else if (compSel === "paper" && playSel === "scissors"){
        return "You Win!, Scissors beat Paper";
    }
    else if (compSel === "paper" && playSel === "rock"){
        return "You Lose!, Paper beats Rock";
    }
   
}

// function game() {
//     playerScore = 0;
//     compScore = 0;
//     for (let i = 0; i < 5; i++){
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("Rock, Paper or Scissors?");
//         console.log(playRound(computerSelection, playerSelection));
//         let winner = playRound(computerSelection, playerSelection);
//         if (winner === "Tie"){
//             compScore++;
//             playerScore++;
//         }
//         else if (winner[4] === "L"){
//             compScore++;
//         }
//         else if (winner[4] === "W"){
//             playerScore++;
//         }
//     }
//     console.log(" ");
//     if (playerScore > compScore) {
//         console.log("You Win The Game!");
//     }
//     if (playerScore < compScore) {
//         console.log("You Lose The Game!");
//     }
//     if (playerScore === compScore) {
//         console.log("The Game is Tied!");
//     }
// }