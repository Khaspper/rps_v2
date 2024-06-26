console.log("Hello world!")

const weapons = ["rock", "paper", "scissors"];
humanScore = 0
computerScore = 0

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
    let weapon = prompt("Please choose a weapon from one of the following:\nRock\nPaper\nScissors");
    if (!weapons.includes(weapon.toLowerCase())) {
        console.log(`"${weapon}" is not a valid weapon, next time choose one of the following:\nRock\nPaper\nScissors`);
        weapon = weapons[Math.floor(Math.random() * 3)];
        console.log(`We have chosen a weapon for you: ${weapon}`);
        return weapon;
    }
    else
        return weapon.toLowerCase();
}

function fight(cpu = getComputerChoice(), player = getUserChoice()) {
    switch (cpu) {
        case "rock":
            if (player == "paper") {
                console.log("YOU WIN!")
                humanScore += 1;
            }
            else if (player == "scissors") {
                console.log("YOU LOSE!")
                computerScore += 1
            }
            else {
                console.log("TIE!!")
            }
            break;
        case "paper":
            if (player == "scissors") {
                console.log("YOU WIN!")
                humanScore += 1;
            }
            else if (player == "rock") {
                console.log("YOU LOSE!")
                computerScore += 1
            }
            else {
                console.log("TIE!!")
            }
            break;
        case "scissors":
            if (player == "rock") {
                console.log("YOU WIN!")
                humanScore += 1;
            }
            else if (player == "paper") {
                console.log("YOU LOSE!")
                computerScore += 1
            }
            else {
                console.log("TIE!!")
            }
            break;
        default:
            break;
    }
}

function playGame() {
    while (humanScore != 5 || computerScore != 5) {
        fight()
    }
    if (humanScore === 5) {
        console.log("YOU WON THE GAME!!!");
    }
    else {
        console.log("COMPUTER WINS!!! YOU LOST!!!")
    }
    return
}