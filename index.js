let wins = 0
let lost = 0
let tie = 0

async function RandomInt(UserInput) 
{   
    let AIRes = document.querySelector("#GameRes");
    let Res = document.querySelector("#COUNTER");
    let RanNum = Math.floor(Math.random() * 3)
    let RanOuput = ["Rock", "Paper", "Scissors"];
    let AiOutput = RanOuput[RanNum];
    console.log(AiOutput)


    function Counter()
    { 
        Res.innerHTML = "WIN: " + wins + " | LOSS: " + lost + " | DRAW: " + tie
        
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
        lost++
        Counter()
    }
    
    //Paper Outputs
    if(UserInput == "Paper" && AiOutput == RanOuput[0])//Pap v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you WON!"
        wins++
        Counter()
        
    }
    if(UserInput == "Paper" && AiOutput == RanOuput[2])//Pap v SCi
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you LOST!"
        lost++
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
        lost++
        Counter()
    }
     
    //Tie
    if(UserInput == AiOutput)//Roc v Roc
    {
        AIRes.innerHTML = "AI's Choice: "+AiOutput+ " you TIED!"
        tie++
        Counter()
    
    }
    
   
}