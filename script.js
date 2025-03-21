let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const options = ['rock', 'paper', 'scissiors'];

function getCompChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}

const drawGame = () => {
    msg.innerText = "game was draw.Play again.";
    msg.style.backgroundColor = "#081b31"
};

const showWiner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loss! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false: true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false: true;
        }else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWiner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});