let wins = 0
let loses = 0
let count = 0

//const UserInput = prompt("Rock,Paper, Scissors!")


function OnClick()
{

    console.log("Test")

}


//let UserInput = 1

async function RandomInt(UserInput) 
{   

    // let winStat = console.log("You win")
    // let losStat = console.log("You lose")
    // let tie = console.log("Tie")
    
    let RanNum = Math.floor(Math.random() * 3)
    let RanOuput = ["Rock", "Paper", "Scissors"];
    let AiOutput = RanOuput[RanNum];
    console.log(AiOutput)

    //Rock outputs
    if(UserInput == "Rock" && AiOutput == "Scissors")//Roc v Sci
    {
        console.log("You win")
        wins++
    }
    else if(UserInput == "Rock" && AiOutput == "Paper" )//Roc v Pap
    {
        console.log("You lose")
        loses++
    }
    
    //Paper Outputs
    if(UserInput == "Paper" && AiOutput == RanOuput[0])//Pap v Roc
    {
        
        wins++
    }
    if(UserInput == "Rock" && AiOutput == RanOuput[2])//Pap v SCi
    {
        
        loses++
    }

    //Scissors Outputs

    if(UserInput == "Scissors" && AiOutput == RanOuput[1])//Sci v Pap
    {
        
        wins++
    }
    if(UserInput == "Scissors" && AiOutput == RanOuput[0])//Sci v Roc
    {
        
        loses++
    }
     
    //Tie
    if(UserInput == AiOutput)//Roc v Roc
    {
        console.log("Tie")
    
    }
    
//alert("Tie"); 
    // else() =>
    // {
        
    // }
  
    //console.log(RanOuput[RanNum]);


}


  



  

  
 
  
