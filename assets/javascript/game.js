var ball =   $("#ball");
var start = $(".btn");
console.log(start);

 $(document).ready(function(){

// <!-- start button -->
  // start.click(function(){
  //   alert("it works!");
  // });

// <!-- Bounce function-->
function Bounce(ele, times, distance, speed) {
  for(i=0; i<times; i++) {
      ele.animate({
        marginTop: '-=' + distance
      }, speed).animate({
        marginTop: '+=' + distance
      }, speed);
  }        
}

$(start).on("click", function(){
  Bounce($(ball), 2, '20px', 200);
  setTimeout(function(){
    $(location).attr("href", "./game.html");
  }, 2000);

});


// <!--test ball click function ---> 
    ball.click(function(){
    alert("it works!");
});

// <!--test space key function-->
      $(document).keydown(function(e) {
        if (e.keyCode == '32') {
          alert('space');
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