
let timeInSecondsElement = document.getElementById("timeInSeconds");
let errorMsgElement = document.getElementById("errorMsg");
let minutesInput=document.getElementById('minutesInput');
let hoursInput=document.getElementById('hoursInput');
let convertBtn=document.getElementById('convertBtn');

convertBtn.addEventListener('click',function(){
    let hours=hoursInput.value;
    let mins=minutesInput.value;
    errorMsgElement.textContent = "";
    timeInSecondsElement.textContent = "";
    timeInSecondsElement.classList.remove("result-box");
  if (hours ==="" ){
      errorMsgElement.style.marginLeft = "30px";
      errorMsgElement.textContent='Please enter a valid number of hours.'
      
  }
  else if(mins===""){
      errorMsgElement.style.marginLeft = "30px";
       errorMsgElement.textContent='Please enter a valid number of minutes.'
       
  }
   else{
       errorMsgElement.textContent="";
       let seconds=parseInt(hours)*3600 + parseInt(mins)*60;
       timeInSecondsElement.textContent=seconds;
       timeInSecondsElement.classList.add("result-box");
        
   }
});