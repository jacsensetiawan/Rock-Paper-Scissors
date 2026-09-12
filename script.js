function getComputerChoice(){
    let angka = Math.random();

    if (angka >= 0 && angka < 0.333){
        return "rock";
    }else if (angka >= 0.333 && angka < 0.666){
        return "paper";
    } else return "scissors"
};

function getHumanChoice(){
    let choice = prompt("Enter your choice among rock, paper, scissors");
    return choice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
 humanChoice=humanChoice.toLowerCase();

 if (humanChoice === computerChoice){
    console.log ("You Draw! Both chose the same option");
 } else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log ("You Win! Rock beats Scissors");
    humanScore += 1;
 } else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log ("You Win! Paper beats Rock");
    humanScore += 1;
 } else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log ("You Win! Scissors beats Paper");
    humanScore += 1;
 } else {console.log (`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
 }
};
