let acceptedChoices = ["Rock", "Paper", "Scissors"];

let playerChoice = "";
let computerChoice = "";
let Winner = -1;
let scorePlayer = 0;
let scoreComputer = 0;
let scoreTie = 0;

function checkScore(win) {
  const possibleWinners = {
    0: () => scoreTie++,
    1: () => scorePlayer++,
    2: () => scoreComputer++,
  };
  possibleWinners[win]();
  document.getElementById("Points-player").innerText = `${scorePlayer}`;
  document.getElementById("Points-computer").innerText = `${scoreComputer}`;
}

function checkWinner(player, computer) {
  const possibleChoices = {
    Rock: computer === "Paper" ? 2 : 1,
    Paper: computer === "Scissors" ? 2 : 1,
    Scissors: computer === "Rock" ? 2 : 1,
  };
  return possibleChoices[player];
}

function selectChoices() {
  acceptedChoices.forEach((item) => {
    document
      .getElementById(`choice-player-${item}`)
      .classList.remove("selected");
    document
      .getElementById(`choice-computer-${item}`)
      .classList.remove("selected");
  });

  document
    .getElementById(`choice-player-${playerChoice}`)
    .classList.add("selected");

  document
    .getElementById(`choice-computer-${computerChoice}`)
    .classList.add("selected");
}

function plays(choice) {
  playerChoice = choice;
  computerChoice = acceptedChoices[Math.floor(Math.random() * (3 - 1) + 1)];
  console.log(playerChoice, computerChoice);
  Winner =
    playerChoice === computerChoice ? 0 : checkWinner(choice, computerChoice);
  console.log(Winner);

  selectChoices();
  checkScore(Winner);
}
