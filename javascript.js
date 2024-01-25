// get the buttons to add action listeners to ot and make the game interactive
let rock_btn = document.getElementById("rock");
let paper_btn = document.getElementById("paper");
let scissors_btn = document.getElementById("scissors");

// help to display and visulaize the geame
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");

// to display the game results in each round 
let playerScore = document.getElementById("playerResult");
let computerScore = document.getElementById("computerResult");

// get the images 
let playerRockImage = document.createElement('img');
playerRockImage.src = "./images/rock.jpeg";

let compRockImage = document.createElement('img');
compRockImage.src = "./images/rock.jpeg";

let playerPaperImage = document.createElement('img');
playerPaperImage.src = "./images/paper.png";

let compPaperImage = document.createElement('img');
compPaperImage.src = "./images/paper.png";

let playerScissorsImage = document.createElement('img');
playerScissorsImage.src = "./images/scisscors.png";

let compScissorsImage = document.createElement('img');
compScissorsImage.src = "./images/scisscors.png";

// text for the result
let resultText = document.getElementById("resultText");




function displayweapons(input,comp){
    playerChoice.innerHTML = ""; // Clear previous choices
    computerChoice.innerHTML = ""; // Clear previous choices
       
       if(input == 'rock')
       {
         playerChoice.appendChild(playerRockImage);
       }
       if(comp == 'rock'){
       computerChoice.appendChild(compRockImage);
       }
       if(input == 'paper')
       {
        playerChoice.appendChild(playerPaperImage);
       }
       if(comp == 'paper'){
        computerChoice.appendChild(compPaperImage);
       }
       if(input == 'scissors')
       {
        playerChoice.appendChild(playerScissorsImage );
       }
       if(comp == 'scissors'){
       computerChoice.appendChild(compScissorsImage );
       }
        
    }



function getComputerChoice () // function to generate the computer choices randomly
    {
        let computerChoice = Math.floor((Math.random()*3))+1
        if( computerChoice == 1)
        {
            return "rock";

        }
       else if (computerChoice  == 2)
       {
           return "paper";

       }
       else
       {
        return "scissors";
       }


    }

    
    
function roundResult (comp, input) // function to determine the result of one round whether its a tie or a win 
{

    // to display the choices 
    
    input = input.toLowerCase()
    displayweapons(input,comp);
    
    if ( comp == input)
    {
        resultText.textContent = "It is a tie, You chose the same thing."
        return 'tie';
        
    }
    else if ( input == 'rock' && comp == 'paper')
    {
        resultText.textContent = "You lost, the paper beats the rock."   
       return 'lost';
    }
    else if (input == 'rock' && comp == 'scissors' )
    {
        resultText.textContent = "You won, the rock destroyed the scissors."
       return 'won';
    }
    else if (input == 'paper' && comp == 'scissors')
    {
        resultText.textContent = "You lost , scissors cut the paper."
        return 'lost';

    }
    else if ( input == 'paper' && comp == 'rock')
    {
        resultText.textContent = "You won, paper beat the rock."
        return 'won';
    }
    else if (input == 'scissors' && comp == 'paper')
    {
        resultText.textContent = "You won , scissors cut the paper."
        return 'won'; 

    }
    else if (input == 'scissors' && comp == 'rock' )
    {
        resultText.textContent = "You lost , the rock destroyed the scissors."
        return 'lost';
    }

    
}

let user_result = 0;
let comp_result = 0;
function game (score)
{

    
        
        if(score == 'won')
        {
            user_result++;
            console.log("you win")
        }
        else if (score == 'lost')
        {
            comp_result++;
            console.log("you lose ")
        }
        else
        {
            console.log("its a tie ")
        }
    
        playerScore.textContent = user_result;
    computerScore.textContent = comp_result;

        if(user_result == 5 || comp_result == 5)
        {

            if(user_result > comp_result)
            {
                finalText.textContent = "congratulation you have won  ";
            }
        
            else if (user_result < comp_result)
            {
              finalText.textContent =  "You have lost!";
            }
            else 
            {
               finalText.textContent =  "its a tie ";
            }

            
            user_result = 0;
            comp_result = 0;    
        }
       

}


// score element to display the score 
let score = document.createElement("p")
let scoreboard = document.getElementById("scoreboard");

// event listeneers to the buttons
rock_btn.addEventListener('click', function (){

   
    score.textContent = roundResult(getComputerChoice(),"rock");
    game(score.textContent);

});
paper_btn.addEventListener('click',function(){
    score.textContent = roundResult(getComputerChoice(),"paper");
    game(score.textContent);
});
scissors_btn.addEventListener('click',function(){
    score.textContent =  roundResult(getComputerChoice(),"scissors");
    game(score.textContent);
});



// create scoreboard elements to show the result



// create element for final score
let final = document.getElementById("finalScore");
let finalText = document.createElement("p")
final.appendChild(finalText);


    

    
