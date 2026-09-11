function getComputerChoice(){
    let angka = Math.random();

    if (angka >= 0 && angka < 0.333){
        return "Rock";
    }else if (angka >= 0.333 && angka < 0.666){
        return "Paper";
    } else return "Scissors"
}

