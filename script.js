const paperBtn = document.querySelector(".paper-btn");
const rockBtn = document.querySelector(".rock-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const showComputerChoice = document.querySelector(".computer-choice");
const showPlayerChoice = document.querySelector(".player-choice");

paperBtn.addEventListener("click", () => {
  showPlayerChoice.textContent = "Papel";
  showComputerChoice.textContent = computerChoice();
});

rockBtn.addEventListener("click", () => {
  showPlayerChoice.textContent = "Pedra";
  showComputerChoice.textContent = computerChoice();
});

scissorsBtn.addEventListener("click", () => {
  showPlayerChoice.textContent = "Tesoura";
  showComputerChoice.textContent = computerChoice();
});

const listaChoice = ["Pedra", "Papel", "Tesoura"];

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function computerChoice() {
  return listaChoice[getRandomIndex()];
}
