const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', handleClick('rock'));
paperBtn.addEventListener('click', handleClick('paper'));
scissorsBtn.addEventListener('click', handleClick('rock'));



const choice = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

console.log("Click \"Start Game\" to play");
const button = document.getElementById("start")
button.onclick = function(event) {
    button.disabled = true;
    start();
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function calculateWinner(player, computer) {
    if (player == 0) {
        if (computer == 0) {
            return "Draw";
        } else if (computer == 1) {
            return "Computer";
        } else if (computer == 2) {
            return "Player";
        }
    } else if(player == 1) {
        if (computer == 0) {
            return "Player";
        } else if (computer == 1) {
            return "Draw";
        } else if (computer == 2) {
            return "Computer";
        }
    } else if (player == 2) {
        if (computer == 0) {
            return "Computer";
        } else if (computer == 1) {
            return "Player";
        } else if (computer == 2) {
            return "Draw";
        }
    }
}

function announceWinner(winner, player, computer) {
    if (winner == "Player") {
        return `You win! ${choice[player]} beats ${choice[computer]}`;
    } else if (winner == "Computer") {
        return `You lose! ${choice[computer]} beats ${choice[player]}`;
    } else {
        return `It's a draw! ${choice[player]} ties ${choice[computer]}`;
    }
}

function game() {
    let playerChoice = prompt("Choose: \n1. Rock\n2. Paper\n3. Scissors");
    if (playerChoice === '') {
        console.log("Invalid: Empty choice")
        return;
    }
    if (playerChoice === null) {
        return "Exit";
    }
    playerChoice = playerChoice.toLowerCase()

    if (playerChoice == "1" || playerChoice == "2" || playerChoice == "3") {
        playerChoice = (parseInt(playerChoice) - 1).toString()
    } else if (Object.values(choice).includes(playerChoice)) {
        playerChoice = Object.keys(choice).find(key => choice[key] === playerChoice);
    } else {
        console.log("Invalid value: \"" + playerChoice + "\"");
        return;
    }

    const computerChoice = getComputerChoice()
    const winner = calculateWinner(playerChoice, computerChoice)
    console.log(announceWinner(winner, playerChoice, computerChoice));
    return winner;

}



