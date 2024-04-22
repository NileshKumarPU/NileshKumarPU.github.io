
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const reset = document.querySelector(".reset");

//Getting name from User
const userName= prompt("Enter Player's Name");
user.innerText= userName;

//Initializing scores.
let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Getting input from user click
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//difining game draw situation
const gameDraw = () => {
  msg.innerText = "Game Draw Play Again";
  msg.style.backgroundColor="#808080"
};

//random computer choice generator
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
};

//function for result++ and msg updation
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

//main function => game logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  //checking if draw
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

    showWinner(userWin,userChoice,compChoice);
};
}

const resetScore = () => {
      userScore = 0;
      compScore = 0;

      msg.style.backgroundColor="#808080";
      msg.innerText="Play Your Move";
      userScorePara.innerText=userScore;
      compScorePara.innerText=compScore;

}

reset.addEventListener("click", () =>{
  resetScore();
});
