var ball =   $("#ball");
var start = $(".btn");
var audio = new Audio("assets/audio/startgame2.mp3");
var audioWin = new Audio("assets/audio/wins.mp3");
var audioLose = new Audio("assets/audio/boo.mp3");
var audioBall = new Audio ("assets/audio/swoosh2.mp3");
var audioBall2 = new Audio ("assets/audio/swoosh.mp3");
var audioBounce = new Audio ("assets/audio/bounce.mp3");
console.log(start);

 $(document).ready(function(){

// bounce function 
function Bounce(ele, times, distance, speed) {
  for(i=0; i<times; i++) {
      ele.animate({
        marginTop: '-=' + distance
      }, speed).animate({
        marginTop: '+=' + distance
      }, speed);
  }        
}

//home page start button 

$(start).on("click", function(){
  Bounce($(ball), 3, '50px', 200);
  audio.play();
  setTimeout(function(){
    $(location).attr("href", "./game.html");
  }, 10000);

});

// <!--test ball click function ---> 
    ball.click(function(){
      Bounce($(ball), 3, '150px', 200);
      // audioBounce.play();
});

//game page 
//define all variables 


var hoops = $(".hoop");
var gamebb = $("#game-ball")
var hoopMin = 1;
var hoopMax = 3;
var hoopOpt = [];
var arraySize = 3;
var wins = 0;
console.log(wins);
var losses = 0; 
console.log(losses);
var score = 0;
console.log(score);
var minNum = 10;
console.log(minNum);
var maxNum = 20;
console.log(maxNum);
var target = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;
console.log(target);
var percent = (score * 100 / target) + "%";
console.log(percent);


//append all variables to html 
$("#user-score").text("Score: " + score);
$("#tar-score").text("Target: " + target);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$(".progress-bar").text(score);
$(".progress-bar").attr("style", "width: "+ percent);

// ball functions // 

gamebb.click(function(){
  Bounce($(gamebb), 1, '400px', 200);
});

 // Keyboard move controls Left & right 
 $(document).keyup(function(e) {
  switch (e.which) {

    // Move Buttons (Keyboard Right)
  case 39:
    gamebb.animate({ left: "+=250px" }, "fast");
    break;

    // Move Buttons (Keyboard Left)
  case 37:
    gamebb.animate({ left: "-=250px" }, "fast");
    break;

  default:
    break;
  }
});

// Space Key function , bounce ball to target hoop
$(document).keydown(function(e) {
  if (e.keyCode == '32') {
    Bounce($(gamebb), 1, '350px', 200);
    // audioBall2.play();
  }

  function updateScore (i){
    score = score +hoopOpt[i];
    percent = (score * 100 / target) + "%";
    $("#user-score").text("Score: " + score);
    $(".progress-bar").text(score);
    $(".progress-bar").attr("style", "width: "+ percent);
    return checkScore();
    };

  if ((gamebb.css("left") == "-500px" ) && (e.keyCode == 32)){
    // audioBall.play();
    updateScore(0);
    console.log(score);
  } else if ((gamebb.css("left") == "0px") && (e.keyCode == 32)) {
    updateScore(1);
    // audioBall.play();
    console.log(score);
  } else if ((gamebb.css("left") == "500px") && (e.keyCode == 32)) {
    updateScore(2);
    // audioBall.play();
    console.log(score);
  }
});

function reset(){
  target = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;
  console.log(target);  
  $("#tar-score").text("Target: " + target);
  score = 0;
  $("#user-score").text("Score: " + score);
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);
};

function checkScore(){

  if (score === target){
    wins ++;
    $("#wins").text("Wins: " + wins);
    reset();
    audioWin.play();
    alert("You Won!");
  } else if (score > target){
    losses ++;
    $("#losses").text("Losses: " + losses);
    audioLose.play();
    alert(" You Lost! Play again by clicking the Start Button!");
    reset();
  } 
    
}




// click ball bounce 
gamebb.click(function(){
  Bounce($(ball), 3, '150px', 200);
  // audioBall2.play();
});



while (hoopOpt.length < arraySize)  {
  var random = Math.floor(Math.random() * hoopMax) + hoopMin;
  if (hoopOpt.indexOf(random) == -1) {
    hoopOpt.push(random);
  }
}


$("#hoop1").attr("dataValue", hoopOpt[0]);
$("#hoop2").attr("dataValue", hoopOpt[1]);
$("#hoop3").attr("dataValue", hoopOpt[2]);

    console.log(hoopOpt);
    console.log(hoops[0]);
    console.log(hoops[1]);
    console.log(hoops[2]);
while (hoopOpt.length < arraySize)  {
  var random = Math.floor(Math.random() * hoopMax) + hoopMin;
  if (hoopOpt.indexOf(random) == -1) {
    hoopOpt.push(random);
  }
}

// Space Key function , bounce ball to target hoop
$(document).keydown(function(e) {
  if (e.keyCode == '32') {
    Bounce($(gamebb), 1, '350px', 200);
    // audioBall2.play();
  }
});

//game start function 
var start2 = $(".btn");
$(start2).on("click", function(){

//defining hoops random # values 
  score = 0;
  percent= 0;
    $(".progress-bar").text(score);
    $(".progress-bar").attr("style", "width: "+ percent);


while (hoopOpt.length < arraySize)  {
  var random = Math.floor(Math.random() * hoopMax) + hoopMin;
  if (hoopOpt.indexOf(random) == -1) {
    hoopOpt.push(random);
  }
}
$("#hoop1").attr("dataValue", hoopOpt[0]);
$("#hoop2").attr("dataValue", hoopOpt[1]);
$("#hoop3").attr("dataValue", hoopOpt[2]);

  
    


    
});






   
  
  
  
  });



