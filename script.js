const choice = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
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
