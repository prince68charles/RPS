function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerHand() {
  
    return getRandomInt(1,3)
}

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const siscorsButton = document.querySelector(".siscors")

const results = document.createElement("div");
document.body.append(results);



user_score=0
computer_score=0
  

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
siscorsButton.addEventListener("click", () => playRound("siscors"));



function playRound(user_hand) {

    

    let user_choice = user_hand.toUpperCase()

    let computer_hand = getComputerHand()


    let userMessage = ""

   if (user_choice ==="ROCK" && computer_hand === 3) {


     userMessage = "User won, Rock beats Siscors "
     user_score += 1

    }


   else if (user_choice ==="PAPER" && computer_hand === 1) {


     userMessage = "User won, Paper beats Rock "
     user_score +=1
   }




   else if (user_choice ==="SISCORS" && computer_hand === 2) {


    userMessage = "User won, Siscros beats Paper "
     user_score +=1
  
   }




   else if (user_choice ==="SISCORS" && computer_hand === 1) {


     userMessage = "Computer won, Rock beats Siscors "
     computer_score +=1
   }




   else if (user_choice ==="ROCK" && computer_hand === 2) {


     userMessage = "Computer won, Paper beats Rock"
     computer_score +=1
   }


  
   else if (user_choice ==="PAPER" && computer_hand === 3) {


     userMessage = "Computer won, Siscros beats Paper"
     computer_score +=1
   }
  


   else {


   userMessage ="Tied. No point given."




   }



   if (user_score === 5) {
        userMessage += `\n User wins the game! `;
        
    } else if (computer_score === 5) {
        userMessageMessage += `\n Computer wins the game! `;
        
    }

   results.innerText = `${userMessage}\nThe score is User: ${user_score} Computer: ${computer_score}`;
   

   
}




