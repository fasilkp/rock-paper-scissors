var human=document.getElementById('human');
var result=document.getElementById('result');
var computer=document.getElementById('computer');
var popUpResult=document.getElementById("popup-result");
var popUpImage=document.getElementById("popup-image");

function startBtn(){
    document.getElementById('start-popup').style.top="-100%";
    document.getElementById('start-popup').style.transition=".1s";
}
let score=0, humanScore=0, botScore=0, btScore=0;
function rps(hC){
    if (hC==0)
    {
        human.src="./images/rock.png";
    }
    else if(hC==1)
    {
        human.src="./images/scissor.png";
    }
    else
    {
        human.src="./images/paper.png";
    }

    var humanChoice, botChoice;
    humanChoice= hC;
    botChoice= randomNumber();

    if(humanChoice==botChoice)
    {
         console.log('match tied');
         human.style.boxShadow="0px 0px 10px 5px blue";
         computer.style.boxShadow="0px 0px 10px 5px blue";
         score=1;
         btScore=1;

     }
     else if(((humanChoice==0) && (botChoice==1)) || ((humanChoice==1) && (botChoice==2)) || ((humanChoice==2) && (botChoice==0)))
    {
         console.log('You win');
         human.style.boxShadow="0px 0px 10px 5px green";
         computer.style.boxShadow="0px 0px 10px 5px red";
         score=2;
         btScore=0;
    }
    else{
         console.log('you lose');
         human.style.boxShadow="0px 0px 10px 5px red";
         computer.style.boxShadow="0px 0px 10px 5px green";
         score=0;
         btScore=2;
    }
    point();
}
function point(){
    humanScore=humanScore+score;
    botScore=botScore+btScore;
    if(humanScore>=20 || botScore>=20)
    {
        console.log("game over");
        document.getElementById("popup").style.transform="scale(6.9)";
        if(humanScore==botScore){
            popUpResult.innerHTML="You Tied!!";
            popUpImage.innerHTML='<i class="far fa-tired"></i> '

        }
        else if(humanScore>=20){
            popUpResult.innerHTML="You Win!!";
            popUpImage.innerHTML='<i class="fas fa-award">';

        }
        else{
            popUpResult.innerHTML="You Lose!!";
            popUpImage.innerHTML='<i class="fas fa-heart-broken"></i>';
        }
    }
    document.getElementById('human-score').value= humanScore;
    document.getElementById('bot-score').value= botScore;
    
}
function randomNumber(){
    rN = Math.floor(Math.random() * 3);
    if (rN==0)
    {
    computer.src="./images/rock.png";
    }
    else if(rN==1)
    {
        computer.src="./images/scissor.png";
    }
    else{
        computer.src="./images/paper.png";
    }
    return rN;
}






