function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let randNum = getRandomInt(1, 10);


function getComputerChoice() {

    let computer_hand = getRandomInt(1,3)
    return computer_hand

}


function userChoice() {



    let user_hand = prompt("Pick Rock, Paper, or Siscors.")


    return user_hand

}



let user_score=0
let computer_score = 0


function playRound (user_hand, computer_hand) {


    

}