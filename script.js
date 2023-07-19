const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const roundDetails = document.getElementById('roundDetails');
const announcement = document.getElementById('announce');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const buttons = document.getElementsByClassName('btnChoice');
const modal = document.getElementById('modal');
const modalAnnouncement = document.getElementById('modal-announcement');
const playAgainBtn = document.getElementById('playAgain');

let isFinished = false;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => handleClick('ROCK'));
paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));



function handleClick(clicked) {

    if (isFinished) {
        openGameEndDialog();
        return;
    }

    const playerChoice = clicked;
    const computerChoice = getComputerChoice();

    const winner = playRound(playerChoice, computerChoice);
    console.log(winner)
    switch (winner) {
        case 'PLAYER':
            announcement.textContent = 'You won!';
            roundDetails.textContent = `${capitalizeText(playerChoice)} beats ${capitalizeText(computerChoice)}.`;
            playerScore++;
            updateScore();
            break;
        case 'COMPUTER':
            announcement.textContent = 'You lost!';
            roundDetails.textContent = `${capitalizeText(computerChoice)} beats ${capitalizeText(playerChoice)}.`;
            computerScore++;
            updateScore();
            break;
        case 'DRAW':
            announcement.textContent = "It's a tie!";
            roundDetails.textContent = `${capitalizeText(playerChoice)} ties ${capitalizeText(computerChoice)}.`;
            break;
    }
    if (playerScore >= 5 || computerScore >= 5) {
        buttons.disabled = true;
        isFinished = true;
        openGameEndDialog();
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    isFinished = 0;
    announcement.textContent = 'Attack with?';
    roundDetails.textContent = '';
    updateScore();
    buttons.disabled = false;
    closeGameEndDialog();
}

function openGameEndDialog() {
    modal.style.display = 'block';
    if (playerScore > computerScore) {
        modalAnnouncement.textContent = 'You won!';
    } else {
        modalAnnouncement.textContent = 'You lost!';
    }
    playAgainBtn.addEventListener('click', () => restartGame());
}

function closeGameEndDialog() {

    modal.style.display = 'none';
}

function updateScore() {
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function getComputerChoice() {
    const array = ['ROCK', 'PAPER', 'SCISSORS'];
    return array[Math.floor(Math.random() * 3)];
}

function capitalizeText(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'ROCK') {
        if (computerChoice == 'ROCK') {
            return "DRAW";
        } else if (computerChoice == 'PAPER') {
            return "COMPUTER";
        } else if (computerChoice == 'SCISSORS') {
            return "PLAYER";
        }
    } else if(playerChoice == 'PAPER') {
        if (computerChoice == 'ROCK') {
            return "PLAYER";
        } else if (computerChoice == 'PAPER') {
            return "DRAW";
        } else if (computerChoice == 'SCISSORS') {
            return "COMPUTER";
        }
    } else if (playerChoice == 'SCISSORS') {
        if (computerChoice == 'ROCK') {
            return "COMPUTER";
        } else if (computerChoice == 'PAPER') {
            return "PLAYER";
        } else if (computerChoice == 'SCISSORS') {
            return "DRAW";
        }
    }
}



