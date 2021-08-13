const paperBtn = document.querySelector(".paper-btn");
const rockBtn = document.querySelector(".rock-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const lbl = document.querySelector(".lbl");

paperBtn.addEventListener("click", () => {
  lbl.textContent = computerChoice();
});

rockBtn.addEventListener("click", () => {
  lbl.textContent = computerChoice();
});

scissorsBtn.addEventListener("click", () => {
  lbl.textContent = computerChoice();
});

const listaChoice = ["pedra", "papel", "tesoura"];

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function computerChoice() {
  return listaChoice[getRandomIndex()];
}
