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
      audioBounce.play();
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
          audioBall2.play();
        }
      });

// click ball bounce 
gamebb.click(function(){
  Bounce($(ball), 3, '150px', 200);
  audioBall2.play();
});

//game start function 
var start2 = $(".btn");
$(start2).on("click", function(){

//defining hoops random # values 
  
while (hoopOpt.length < arraySize)  {
  var random = Math.floor(Math.random() * hoopMax) + hoopMin;
  if (hoopOpt.indexOf(random) == -1) {
    hoopOpt.push(random);
  }
}
var hoop1 = $("#hoop1");
var hoop2 = $("#hoop2");
var hoop3 = $("#hoop3");

hoop1.attr("dataValue", hoopOpt[0]);
hoop2.attr("dataValue", hoopOpt[1]);
hoop3.attr("dataValue", hoopOpt[2]);

console.log(hoopOpt);
console.log(hoops[0]);
console.log(hoops[1]);
console.log(hoops[2]);

    function game(){
      var target = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;
      console.log(target);  
      $("#start-score").text("Target: " + target);
      score = 0;
      $("#user-score").text("Score: " + score);
    };

});

 hoop1 = parseInt(hoop1);
 hoop2 = parseInt(hoop2);
 hoop3 = parseInt(hoop3);

// if (gamebb.css("left" <= "-500px") && (keyPressed.keyCode == 32)){
//   score + hoop1;
//   audioBall.play();
// } else if (gamebb.css("left" = "2px") && (keyPressed.keyCode == 32));{
//   score + hoop2;
//   audioBall.play();
// } else (gamebb.css("left" >= "500px") && (keyPressed.keyCode == 32)); {
//   score + hoop3;
//   audioBall.play();
// }

// console.log(score);

// if (score === target){
//   alert("You Won!");
//   wins +=1;
//   audioWin.play();
// } else (target < score); {
//   alert(" You Lost! Play again by clicking the Start Button!");
//   losses +=1;
//   audioLose.play();
// }


   
  
  
  
  });



