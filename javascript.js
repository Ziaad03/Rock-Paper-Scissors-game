

    function getComputerChoice () // function to generate the computer choices randomly
    {
        let x = Math.floor((Math.random()*3))+1
        if( x == 1)
        {
            return "rock";

        }
       else if (x == 2)
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
    input = input.toLowerCase()
    if ( comp == input)
    {
        return 'tie';
    }
    else if ( input == 'rock' && comp == 'paper')
    {
       return 'lost';
    }
    else if (input == 'rock' && comp == 'scissors' )
    {
       return 'won';
    }
    else if (input == 'paper' && comp == 'scissors')
    {
        return 'lost';

    }
    else if ( input == 'paper' && comp == 'rock')
    {
        return 'won';
    }
    else if (input == 'scissors' && comp == 'paper')
    {
        return 'won'; 

    }
    else if (input == 'scissors' && comp == 'rock' )
    {
        return 'lost';
    }

    
}

function game ()
{
   

    let user_result = 0;
    let comp_result = 0;

    while (user_result < 5 && comp_result < 5)
    {
        let comp = getComputerChoice()
        let input = prompt("Enter a choice:  ")
        
        if(roundResult(comp, input) == 'won')
        {
            user_result++;
            console.log("you win")
        }
        else if (roundResult(comp, input) == 'lost')
        {
            comp_result++;
            console.log("you lose ")
        }
        else
        {
            console.log("its a tie ")
        }
    }

    if(user_result > comp_result)
    {
        alert("congratulation you have won  ")
    }

    else if (user_result < comp_result)
    {
        alert("You have lost!")
    }
    else 
    {
        alert("its a tie ")
    }
   

}

game();
    

    
