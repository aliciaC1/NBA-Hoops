var ball =   $("#ball");
var start = $(".btn");
var audio = new Audio("assets/audio/startgame2.mp3");
console.log(start);

 $(document).ready(function(){

// bounce function ************NEED TO FIND A WAY TO INDICATE DIRECTION ************
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
});

//game page 
//define all variables 

$(".winner").hide(".alert");
$(".loser").hide(".alert");
var hoops = $(".hoop");
var gamebb = $("#game-ball")

var hoopMin = 1;
var hoopMax = 3;
var hoopOpt = [];
var arraySize = 4;
var wins = 0;
console.log(wins);
var losses = 0; 
console.log(losses);
var score = 10;
console.log(score);
var minNum = 10;
console.log(minNum);
var maxNum = 40;
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

// values to hoops 
for (i=0; i<hoops.length; i++);{
  var hoopVal =Math.floor(Math.random() * 4) +1;
  console.log(hoopVal);
  hoops[0].setAttribute("src","./assets/images/redhoop.png");
  hoops[1].setAttribute("src","./assets/images/yellowhoop.png");
  hoops[2].setAttribute("src","./assets/images/ltbluehoop.png");
  var imgHoop = $("<img>");
  var hoop1 = hoopVal[i];
  var hoop2 = hoopVal[i];
  var hoop3= hoopVal[i];

  // var hoops = $("<div>");
  // hoops.attr({
  //     "class": 'crystal',
  //     "dataRandom": random
  // });

  console.log(hoops[0]);
  console.log(hoops[1]);
  console.log(hoops[2]);
  console.log(imgHoop);
}
  
      

// hide all alerts 
$(".winner").hide(".alert");
$(".loser").hide(".alert");
//game start function 
var start2 = $(".btn");

/// original idea scrapped *** 
$(start2).on("click", function(){
    
      for (i=0; i<hoops.length; i++);
      setTimeout(function hoop(){
      hoops[0].setAttribute("src","./assets/images/redhoop.png");
      hoops[1].setAttribute("src","./assets/images/yellowhoop.png");
      hoops[2].setAttribute("src","./assets/images/ltbluehoop.png");
    },1000);

    function game(){
      var target = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;
      console.log(target);  
      $("#tar-score").text("Target: " + target);
      score = 0;
      $("#user-score").text("Score: " + score);
    };
//defining hoops random # values 
hoop1.val(hoopVal);
hoop2.val(hoopVal);
hoop3.val(hoopVal);


});

// // if (hoop1 is selected){
//   hoop1 + score; 
//   Bounce($(ball), 1, '300px', 200);
//  } else if (hoop2 is selected){
//    hoop 2 + score; 
//    Bounce($(ball), 1, '300px', 200);
//  } else (hoop3 is selected){
//    hoop 3 + score; 
//    Bounce($(ball), 1, '300px', 200);
//  };

 
// }
// console.log(hoop());



// if (score == target) {
//   alert("You Win!!!");
//   wins +=1;
//   setTimeout(game, 1000 * 3);

// } else {
//   (score > target) {
//     alert("You lose!!! To play again, hit start!");
//     losses +=1;
//     setTimeout(game, 1000 * 3);
//   };
// };

gamebb.click(function(){
  Bounce($(gamebb), 1, '400px', 200);
});

 // Keyboard move controls ****** this doesn't work!!!! *** 
 $(document).keyup(function(e) {
  switch (e.which) {

  // Move Buttons (Keyboard Down)
  case 40:
    gamebb.animate({ top: "+=200px" }, "fast");
    break;

    // Move Buttons (Keyboard Right)
  case 39:
    gamebb.animate({ left: "+=200px" }, "fast");
    break;

    // Move Buttons (Keyboard Up)
  case 38:
    gamebb.animate({ top: "-=200px" }, "fast");
    break;

    // Move Buttons (Keyboard Left)
  case 37:
    gamebb.animate({ left: "-=200px" }, "fast");
    break;

  default:
    break;
  }
});


// <!--test space key function-->
      $(document).keydown(function(e) {
        if (e.keyCode == '32') {
          Bounce($(gamebb), 1, '350px', 200);
        }
      });


      // $(document).keydown(function(e) {
      //   if (e.keyCode == '32') {
      //     $(".ball2").effect("bounce", {times:3}, 300 );
      //   }
      // });

    // $( document ).click(function() {
    //     $( "#ball" ).toggle( "bounce", { times: 3 }, "slow" );
    //   });
  
  });


  //<!--game begins--> 

  var hoop1;
  var hoop2;
  var hoop3;
  var score;
  var target; 
 
  //intialize game function 
  // hoop1 - random value 
  // hoop 2 - random value 
  // hoop 3 - random value 
  // score - players total score through total hoop values - resets to 0 
  // target - players target score to achieve 
  // if else statement score == target (alert game wins ) else score > target (alert you lose play again)

// // if else statements 
//   // jquery function on space key event + left arrow = ball move diagonally left and 
//   add hoop1 value to score 
//   // if player hits space key + right arrow = ball move diagnoally right 
//   add hoop3 value to score 
//   // if player hits space key + up arrow = ball moves up towards hoop2 and adds hoop2 to score
//   // 

