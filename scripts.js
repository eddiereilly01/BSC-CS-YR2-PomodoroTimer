let hand = document.getElementById('hand');
let taskText = document.getElementById('task')
let timerText;
let interval;
let currentTime = 1500;
let timeString;
let timerOn = false;




function toggleAnimation(on){

  if(on==1)
  hand.classList.add("animate");
  if(on==0)
  hand.classList.remove("animate");




}

function startTimer(){
  if(!timerOn){
    interval = setInterval(timer, 1000);
    timerOn = true;
    toggleAnimation(1);
  }

}

function resetTimer(x){
    clearInterval(interval);
    timerOn = false;
    currentTime = x;
    getCurrentTime();
    displayTime();
    toggleAnimation(0);
    taskText.innerHTML = "WORK";
    



}

function startBreak(){

  resetTimer(300);
  toggleAnimation(0);
  taskText.innerHTML = "REST";

}

function timer(){
    currentTime = currentTime - 1;
    getCurrentTime();
    displayTime();
    if(currentTime <= 0){
       alert("Break Time!");
       resetTimer(1500);
       toggleAnimation(0);
    }

}


function getCurrentTime(){


  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime - minutes * 60;
  if(seconds <= 9){
    seconds = "0" + seconds.toString();
  }
  timeString = minutes.toString() + ":" + seconds.toString();

}

function displayTime(){
  timerText = document.getElementById("time");
  timerText.innerHTML = timeString;

}
