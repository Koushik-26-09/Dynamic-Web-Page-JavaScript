let oneMinuteBtn=document.getElementById('oneMinuteBtn')
let twentySecondsBtn=document.getElementById('twentySecondsBtn')
let thirtySecondsBtn=document.getElementById('thirtySecondsBtn')
let fortySecondsBtn=document.getElementById('fortySecondsBtn')
let timerText=document.getElementById('timerText');

twentySecondsBtn.onclick=function(){
    let counter=20;
    timerText.textContent="";
    timerText.textContent=20+' seconds left';
    let uniqueid=setInterval(function(){
        counter=counter - 1;
        timerText.textContent=counter+' seconds left';
        if (counter===0){
            clearInterval(uniqueid);
            timerText.textContent='Your moment is complete';
        }
    },1000);
}
thirtySecondsBtn.onclick=function(){
    let counter=30;
    timerText.textContent="";
    timerText.textContent=30+' seconds left';
    let uniqueid=setInterval(function(){
        counter=counter - 1;
        timerText.textContent=counter+' seconds left';
        if (counter===0){
            clearInterval(uniqueid);
            timerText.textContent='Your moment is complete';
        }
    },1000);
}

fortySecondsBtn.onclick=function(){
    let counter=40;
    timerText.textContent="";
    timerText.textContent=40+' seconds left';
    let uniqueid=setInterval(function(){
        counter=counter - 1;
        timerText.textContent=counter+' seconds left';
        if (counter===0){
            clearInterval(uniqueid);
            timerText.textContent='Your moment is complete';
        }
    },1000);
}

oneMinuteBtn.onclick=function(){
    let counter=60;
    timerText.textContent="";
    timerText.textContent=60+' seconds left';
    let uniqueid=setInterval(function(){
        counter=counter - 1;
        timerText.textContent=counter+' seconds left';
        if (counter===0){
            clearInterval(uniqueid);
            timerText.textContent='Your moment is complete';
        }
    },1000);
}
