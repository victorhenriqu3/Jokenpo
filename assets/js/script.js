let acceptedChoices = ["Rock", "Paper", "Scissors"];

let playerChoice = "";
let computerChoice = "";
let Winner = -1;
let scorePlayer = 0;
let scoreComputer = 0;

let scoreTie = 0;
let overallScorePlayer = 0;
let overallScoreComputer = 0;

let timer;

function resetScoreboard() {
  document.getElementById("Message").innerText = "";
  selectChoices();
  resetChoices();
}

function resetChoices() {
  acceptedChoices.forEach((item) => {
    document
      .getElementById(`choice-player-${item}`)
      .classList.remove("selected");
    document
      .getElementById(`choice-computer-${item}`)
      .classList.remove("selected");
    document
      .getElementById(`choice-computer-${playerChoice}`)
      .classList.remove("selected");
    document
      .getElementById(`choice-computer-${computerChoice}`)
      .classList.remove("selected");
  });
}

function newGame() {
  document.getElementById("Points-player").innerText = 0;
  document.getElementById("Points-computer").innerText = 0;
  scorePlayer = 0;
  scoreComputer = 0;
  Winner = -1;
  resetScoreboard();
}

function fillOverall() {
  document.getElementById("overallPlayer").innerText = overallScorePlayer;
  document.getElementById("overallComputer").innerText = overallScoreComputer;
  document.getElementById("overallTie").innerText = scoreTie;
}

function checkEndGame() {
  if (scorePlayer >= 5) {
    Swal.fire({
      html: `<h1>✔️</h1><br><span>Você ganhou com uma pontuação de ${scorePlayer} contra ${scoreComputer} da Máquina.</span>`,
    });
    newGame();
  }

  if (scoreComputer >= 5) {
    Swal.fire({
      html: `<h1>❌</h1><br><span>Você perdeu com uma pontuação de ${scorePlayer} contra ${scoreComputer} da Máquina.</span>`,
    });
    newGame();
  }
}

function checkScore(win) {
  const possibleWinners = {
    0: () => {
      scoreTie++;
      document.getElementById("Message").innerText = "EMPATE!!";
      timer = setTimeout(resetScoreboard, 1000);
    },
    1: () => {
      scorePlayer++;
      overallScorePlayer++;
      document.getElementById("Message").innerText = "JOGADOR GANHOU!!";
      timer = setTimeout(resetScoreboard, 1000);
    },
    2: () => {
      scoreComputer++;
      overallScoreComputer++;
      document.getElementById("Message").innerText = "COMPUTADOR GANHOU!!";
      timer = setTimeout(resetScoreboard, 1000);
    },
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
  resetChoices();
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
  Winner =
    playerChoice === computerChoice ? 0 : checkWinner(choice, computerChoice);
  selectChoices();
  checkScore(Winner);
  checkEndGame();
}
