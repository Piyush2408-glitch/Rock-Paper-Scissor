let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userscoreupdate = document.querySelector("#user-score");
const compscoreupdate = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

const computerchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

const gamedraw = () => {
  msg.innerText = "It's a Draw!";
  msg.style.backgroundColor = "#ffc107"; // yellow
  msg.style.color = "#000";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscoreupdate.innerText = userscore;
    msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "#28a745"; // green
    msg.style.color = "#fff";
  } else {
    compscore++;
    compscoreupdate.innerText = compscore;
    msg.innerText = `You Lose! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "#dc3545"; // red
    msg.style.color = "#fff";
  }
};

const playgame = (userchoice) => {
  const compchoice = computerchoice();
  if (userchoice === compchoice) {
    gamedraw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};
