const paperBtn = document.querySelector(".paper-btn");
const rockBtn = document.querySelector(".rock-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const computerChoice = document.querySelector(".computer-choice");
const playerChoice = document.querySelector(".player-choice");

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
      console.log("Papel cobre pedra. Voce venceu");
      break;
    case playerChoice.textContent === "Papel" &&
      computerChoice.textContent === "Tesoura":
      console.log("Tesoura corta papel. Voce perdeu");
      break;
    case playerChoice.textContent === "Pedra" &&
      computerChoice.textContent === "Tesoura":
      console.log("Pedra quebra tesoura. Voce venceu");
      break;
    case playerChoice.textContent === "Pedra" &&
      computerChoice.textContent === "Papel":
      console.log("Papel cobre pedra. Voce perdeu");
      break;
    case playerChoice.textContent === "Tesoura" &&
      computerChoice.textContent === "Papel":
      console.log("Tesoura corta papel. Voce ganhou");
      break;
    case playerChoice.textContent === "Tesoura" &&
      computerChoice.textContent === "Pedra":
      console.log("Pedra quabra tesoura. Voce perdeu");
      break;
    default:
      console.log("Empatou");
      break;
  }
}
