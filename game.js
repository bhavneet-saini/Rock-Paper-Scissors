let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")


const genCompChoise = () => {
    const choise = ["rock", "paper", "scissor"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choise[randomNumber];
}
const drawGame = () => {
    msg.innerText="Game was Draw, play again!";
    msg.style.backgroundColor="rgb(40, 29, 49)";
}
const showWinner = (userWin , userChoise, compChoise) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you Win! your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor="darkgreen";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText=`you Loose! ${compChoise} beats your ${userChoise}`;
        msg.style.backgroundColor="red";
    }
}
const compPlay = (userChoise) => {
    const compChoise = genCompChoise();
    if (userChoise === compChoise) {
        //drawww GAme
        drawGame();
    } else {
        let userWin = true;
        if (userChoise === "rock") {
            //papaer,scissor
            userWin = compChoise === "paper" ? false : true;
        } else if (userChoise === "paper") {
            //rock.scissor
            userWin = compChoise === "rock" ? true : false;

        } else {
            //rock,paper
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin,userChoise,compChoise);
    }
};
options.forEach(option => {
    option.addEventListener("click", () => {
        const userChoise = option.getAttribute("id");
        compPlay(userChoise);
    });
});