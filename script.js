function getComputerChoice(){
    let angka = Math.random();

    if (angka >= 0 && angka < 0.333){
        return "rock";
    }else if (angka >= 0.333 && angka < 0.666){
        return "paper";
    } else return "scissors"
};

let humanScore = 0;
let computerScore = 0;

    function playRound(humanChoice, computerChoice){
 humanChoice=humanChoice.toLowerCase();

 if (humanChoice === computerChoice){
    document.querySelector("#result").textContent = "You Draw! Both chose the same option";
 } else if (humanChoice === "rock" && computerChoice === "scissors"){
    document.querySelector("#result").textContent ="You Win! Rock beats Scissors";
    humanScore += 1;
 } else if (humanChoice === "paper" && computerChoice === "rock"){
    document.querySelector("#result").textContent = "You Win! Paper beats Rock";
    humanScore += 1;
 } else if (humanChoice === "scissors" && computerChoice === "paper"){
    document.querySelector("#result").textContent = "You Win! Scissors beats Paper";
    humanScore += 1;
 } else {document.querySelector("#result").textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
 }
};

const container = document.querySelector("#container");
container.addEventListener("click", (e) => {
const humanChoice = e.target.id;
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
});
