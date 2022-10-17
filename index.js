let wins = 0
let loses = 0
let count = 0


async function RandomInt(UserInput) 
{   


    //let bestOutThree = 3;

    let AIRes = document.querySelector("#GameRes");
    
    let RanNum = Math.floor(Math.random() * 3)
    let RanOuput = ["Rock", "Paper", "Scissors"];
    let AiOutput = RanOuput[RanNum];
    console.log(AiOutput)

    //Rock outputs
    if(UserInput == "Rock" && AiOutput == "Scissors")//Roc v Sci
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++ 
        bestOutThree--
    }
    else if(UserInput == "Rock" && AiOutput == "Paper" )//Roc v Pap
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        loses++
        bestOutThree--
    }
    
    //Paper Outputs
    if(UserInput == "Paper" && AiOutput == RanOuput[0])//Pap v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++
        bestOutThree--
    }
    if(UserInput == "Paper" && AiOutput == RanOuput[2])//Pap v SCi
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        loses++
        bestOutThree--
    }

    //Scissors Outputs
    if(UserInput == "Scissors" && AiOutput == RanOuput[1])//Sci v Pap
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++
        bestOutThree--
    }
    if(UserInput == "Scissors" && AiOutput == RanOuput[0])//Sci v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        loses++
        bestOutThree--
    }
     
    //Tie
    if(UserInput == AiOutput)//Roc v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you TIED!"
    
    }

    if(bestOutThree == 0)
    {

    }
    
}


  



  

  
 
  
