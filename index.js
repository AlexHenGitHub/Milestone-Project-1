

//const UserInput = prompt("Rock,Paper, Scissors!")

let UserInput = 1

async function RandomInt(UserInput) 
{

    let RanNum = Math.floor(Math.random() * 3)
    let RanOuput = ["Rock", "Paper", "Scissors"];
    let AiOutput = RanOuput[RanNum];

    if(UserInput = "Rock" && AiOutput == RanOuput[2])
    {
        console.log("You win");
    }
    if(UserInput = "Paper" && AiOutput == RanOuput[0])
    {
        console.log("You win");
    }
    if(UserInput = "Scissors" && AiOutput == RanOuput[1])
    {
        console.log("You win");
    }
    // else() =>
    // {
        
    // }
  
    //console.log(RanOuput[RanNum]);

    return ;
  }
RandomInt(UserInput)
  


  

  
 
  
