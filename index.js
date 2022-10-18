let wins = 0
let loses = 0
let count = 0


async function RandomInt(UserInput) 
{   


    //let bestOutThree = 3;

    let AIRes = document.querySelector("#GameRes");

    let WRes = document.querySelector("#WIN_COUNTER");
    let LRes = document.querySelector("#LOSS_COUNTER");
    
    let RanNum = Math.floor(Math.random() * 3)
    let RanOuput = ["Rock", "Paper", "Scissors"];
    let AiOutput = RanOuput[RanNum];
    console.log(AiOutput)


    function Counter()
    { 
        WRes.innerHTML = "WIN COUNTER: " + wins
        LRes.innerHTML = "LOSS COUNTER: " + loses
    }


    //Rock outputs
    if(UserInput == "Rock" && AiOutput == "Scissors")//Roc v Sci
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++
        Counter()
    }
    else if(UserInput == "Rock" && AiOutput == "Paper" )//Roc v Pap
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        loses++
        Counter()
    }
    
    //Paper Outputs
    if(UserInput == "Paper" && AiOutput == RanOuput[0])//Pap v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++
        
    }
    if(UserInput == "Paper" && AiOutput == RanOuput[2])//Pap v SCi
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        loses++
        
        Counter()
    }

    //Scissors Outputs
    if(UserInput == "Scissors" && AiOutput == RanOuput[1])//Sci v Pap
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++
       

        Counter()
    }
    if(UserInput == "Scissors" && AiOutput == RanOuput[0])//Sci v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        loses++
        

        Counter()
    }
     
    //Tie
    if(UserInput == AiOutput)//Roc v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you TIED!"

        Counter()
    
    }

    
    

    
}


  



  

  
 
  
