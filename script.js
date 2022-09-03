
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', function() {
    playRound(getComputerChoice(), 'rock');
});
paperBtn.addEventListener('click', function() {
    playRound(getComputerChoice(), 'paper');
});
scissorsBtn.addEventListener('click', function() {
    playRound(getComputerChoice(), 'scissors');
});

const container = document.querySelector('#container');
const playerScoreFinal = document.querySelector('#playerScore');
const playScore = document.querySelector('#playerScoreReadout');
const compuScore = document.querySelector('#computerScoreReadout');
let compScore = 0;
let playerScore = 0;

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
let result;
function playRound(compSel, playSel) {
    compSel = compSel.toLowerCase();
    playSel = playSel.toLowerCase();
    
    if (compSel === playSel) {
        result = "Tie!"
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
    }
    else if (compSel === "rock" && playSel === "scissors"){
        result = "You Lose!, Rock beats Scissors";
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
        compScore++;
    }
    else if (compSel === "rock" && playSel === "paper"){
        result = "You Win!, Paper beats Rock";
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
        playerScore++;
    }
    else if (compSel === "scissors" && playSel === "rock"){
        result = "You Win!, Rock beats Scissors";
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
        playerScore++;
    }
    else if (compSel === "scissors" && playSel === "paper"){
        result = "You Lose!, Scissors beat Paper";
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
        compScore++;
    }
    else if (compSel === "paper" && playSel === "scissors"){
        result = "You Win!, Scissors beat Paper";
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
        playerScore++;
    }
    else if (compSel === "paper" && playSel === "rock"){
        result = "You Lose!, Paper beats Rock";
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);
        compScore++;
    }

    playScore.textContent =  playerScore;

    compuScore.textContent = compScore;

    if (compScore === 5) {
        const winner = document.createElement('div');
        winner.classList.add("winner");
        winner.textContent = 'You Lose!'
        container.appendChild(winner);
        return;
    }
    if (playerScore === 5) {
        const winner = document.createElement('div');
        winner.classList.add("winner");
        winner.textContent = 'You Win!';
        container.appendChild(winner);
        return;
    }
    
}

