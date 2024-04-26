console.log("Hello world!")

const weapons = ["rock", "paper", "scissors"];
humanScore = 0
computerScore = 0

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}


