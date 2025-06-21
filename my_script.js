function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let randNum = getRandomInt(1, 3);


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


let i = 0

function playGame() {

while (i<=5) {

  const humanSelection = userChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  
  
  function playRound (user_hand, computer_hand) {

    let user_choice = user_hand.toUpperCase()


    if (user_choice ==="ROCK" && computer_hand === 3) {

      console.log("User won, Rock beats Siscors ")
      user_score += 1


    }

    else if (user_choice ==="PAPER" && computer_hand === 1) {

      console.log("User won, Paper beats Rock ")
      user_score +=1
    }


    else if (user_choice ==="SISCORS" && computer_hand === 2) {

      console.log("User won, Siscros beats Paper ")
      user_score +=1
    
    }


    else if (user_choice ==="SISCORS" && computer_hand === 1) {

      console.log("Computer won, Rock beats Siscors ")
      computer_score +=1
    }


    else if (user_choice ==="ROCK" && computer_hand === 2) {

      console.log("Computer won, Paper beats Rock")
      computer_score +=1
    }

    
    else if (user_choice ==="PAPER" && computer_hand === 3) {

      console.log("Computer won, Siscros beats Paper")
      computer_score +=1
    }
    

    else {

      console.log("Tied. No point given.")


    }


    console.log(`The score is User: ${user_score} Computer ${computer_score}`)

    i+=1
}



  


}





}

playGame()