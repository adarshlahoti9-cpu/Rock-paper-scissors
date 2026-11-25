
const handButtons = document.querySelectorAll(".hand-button");

const pickButton = document.getElementById("pickButton");

const resultPanel = document.querySelector(".result-panel");

const resultText = document.getElementById("result");

const movesText = document.getElementById("moves");

const playerScoreText = document.getElementById("playerScore");

const computerScoreText = document.getElementById("computerScore");

const resetButton = document.getElementById("resetButton");

const choices = ["rock", "paper", "scissors"];

let selectedChoice = "";

let playerScore = 0;
let computerScore = 0;


// SELECT YOUR MOVE

handButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedChoice = button.dataset.choice;

        handButtons.forEach((item) => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");

        pickButton.textContent = "Let's Play!";

    });

});


// PLAY GAME

pickButton.addEventListener("click", () => {

    if (selectedChoice === "") {

        resultPanel.classList.add("show");

        resultText.textContent = "First choose one hand!";

        return;

    }

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let message;

    if (selectedChoice === computerChoice) {

        message = "It's a Draw!";

    }

    else if (

        (selectedChoice === "rock" && computerChoice === "scissors") ||

        (selectedChoice === "paper" && computerChoice === "rock") ||

        (selectedChoice === "scissors" && computerChoice === "paper")

    ) {

        playerScore++;

        message = "You Win! 🎉";

    }

    else {

        computerScore++;

        message = "Computer Wins!";

    }


    resultText.textContent = message;

    movesText.textContent =
        `Your move: ${selectedChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;

    playerScoreText.textContent = playerScore;

    computerScoreText.textContent = computerScore;

    resultPanel.classList.add("show");

    pickButton.textContent = "Pick Your Button";

});


// RESET GAME

resetButton.addEventListener("click", () => {

    selectedChoice = "";

    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;

    resultText.textContent = "Choose your move!";

    movesText.textContent = "Your move: — | Computer: —";

    resultPanel.classList.remove("show");

    handButtons.forEach((button) => {
        button.classList.remove("selected");
    });

    pickButton.textContent = "Pick Your Button";

});
