const paperBtn = document.querySelector(".paper-btn");
const rockBtn = document.querySelector(".rock-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const computerChoice = document.querySelector(".computer-choice");
const playerChoice = document.querySelector(".player-choice");
const labelResult = document.querySelector(".result");

paperBtn.addEventListener("click", () => {
  playerChoice.textContent = "Papel";
  computerChoice.textContent = handleComputerChoice();
  handleWhoWinTheGame();
});

rockBtn.addEventListener("click", () => {
  playerChoice.textContent = "Pedra";
  computerChoice.textContent = handleComputerChoice();
  handleWhoWinTheGame();
});

scissorsBtn.addEventListener("click", () => {
  playerChoice.textContent = "Tesoura";
  computerChoice.textContent = handleComputerChoice();
  handleWhoWinTheGame();
});

const listChoice = ["Pedra", "Papel", "Tesoura"];

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function handleComputerChoice() {
  return listChoice[getRandomIndex()];
}

function handleWhoWinTheGame() {
  switch (true) {
    case playerChoice.textContent === "Papel" &&
      computerChoice.textContent === "Pedra":
      labelResult.textContent = "Papel cobre pedra. Você venceu!";
      break;
    case playerChoice.textContent === "Papel" &&
      computerChoice.textContent === "Tesoura":
      labelResult.textContent = "Tesoura corta papel. Você perdeu!";
      break;
    case playerChoice.textContent === "Pedra" &&
      computerChoice.textContent === "Tesoura":
      labelResult.textContent = "Pedra quebra tesoura. Você venceu!";
      break;
    case playerChoice.textContent === "Pedra" &&
      computerChoice.textContent === "Papel":
      labelResult.textContent = "Papel cobre pedra. Você perdeu!";
      break;
    case playerChoice.textContent === "Tesoura" &&
      computerChoice.textContent === "Papel":
      labelResult.textContent = "Tesoura corta papel. Você ganhou!";
      break;
    case playerChoice.textContent === "Tesoura" &&
      computerChoice.textContent === "Pedra":
      labelResult.textContent = "Pedra quebra tesoura. Você perdeu!";
      break;
    default:
      labelResult.textContent = "Empate";
      break;
  }
}
