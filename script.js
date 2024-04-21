const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");

const userName= prompt("Enter Player's Name");
user.innerText= userName;

let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const gameDraw = () => {
  msg.innerText = "Game Draw Play Again";
  msg.style.backgroundColor="#808080";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
};

const showWinner = (userWin,userChoice,compChoice) =>{
if(userWin){
    userScore++;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScorePara.innerText=userScore;
}
else{
    compScore++;
    msg.innerText=`You Lost. ${compChoice} beats Your ${userChoice}`;
    compScorePara.innerText= compScore;
    msg.style.backgroundColor= "red";
    }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (compChoice == userChoice) {
    gameDraw();
    }

    else {
    let userWin = true;
    if (compChoice == "rock") {
      userWin = userChoice === "paper" ? true : false;
    } else if (compChoice == "paper") {
      userWin = userChoice === "scissor" ? true : false;
    } else  {
      userWin = userChoice === "rock" ? true : false;

    } 
    console.log(userWin);

    showWinner(userWin,userChoice,compChoice);
};
}
