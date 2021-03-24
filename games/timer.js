
var timeleft = 50;

let countTimer = () =>{
  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){

    timeleft = 0;
    document.getElementById("countdown").innerHTML = "Finished";
    finished = true;
    resultBot.innerHTML = 'Finished'
    resultPlayer.innerHTML = 'Finished';
   
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);}
