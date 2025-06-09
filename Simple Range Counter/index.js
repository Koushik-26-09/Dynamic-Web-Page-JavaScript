let fromUserInput=document.getElementById('fromUserInput')
let toUserInput=document.getElementById('toUserInput')
let counterText=document.getElementById('counterText')
let startBtn=document.getElementById('startBtn')
startBtn.onclick=function(){
    let fromvalue=fromUserInput.value 
    let tovalue=toUserInput.value
    if (fromvalue==="" ){
        alert("Enter the from value");
    }
    else if(tovalue===""){
        alert("Enter the to value");
    }
    else{
        fromvalue=parseInt(fromvalue);
        counterText.textContent=fromvalue;
        let uniqueId=setInterval(function(){
            fromvalue=fromvalue+1 ;
            counterText.textContent=fromvalue;
            
            if (fromvalue===parseInt(tovalue)){
                clearInterval(uniqueId)
            }
        },1000);
    }
}