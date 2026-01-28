let userScore = 0;
let compScore = 0;
let result = document.getElementById("result");

const choices = document.querySelectorAll("img");

const genCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    result.innerText = `You win! ${userChoice} beats ${compChoice}`;
    result.style.backgroundColor = "green";
    userScore++;
    const secondH2 = (document.querySelectorAll(
      "#compi h2"
    )[0].innerText = `${userScore}`);
  } else {
    result.innerText = `You lost! ${compChoice} beats ${userChoice}`;
    result.style.backgroundColor = "red";
    compScore++;
    const secondH2 = (document.querySelectorAll(
      "#compi h2"
    )[1].innerText = `${compScore}`);
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    result.innerText = "Game was draw";
    result.style.backgroundColor = "#070d20";
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
