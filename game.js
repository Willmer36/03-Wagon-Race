$(document).ready(function(){

  var trackSize = 20;
  generateTrack(trackSize);

  runGame();

});


function generateTrack(trackSize){
  for (var i = 0; i < trackSize - 1; i++){
    $("#track-1").append("<td></td>");
    $("#track-2").append("<td></td>");
  }
  $("#track-1").append("<td class='finish-line'></td>");
  $("#track-2").append("<td class='finish-line'></td>");
}


function runGame(){
  $(document).on("keyup", function(event){

    if (event.keyCode == 65){
      $("#track-1 .here").removeClass("here").next().addClass("here");
    }
    if (event.keyCode == 80){
      $("#track-2 .here").removeClass("here").next().addClass("here");
    }

    if ($("#track-1 .here").hasClass("finish-line")){
      $(".here").removeClass("here");
      $("#game-box .player-1").fadeIn(1000);
    }

    if ($("#track-2 .here").hasClass("finish-line")){
      $(".here").removeClass("here");
      $("#game-box .player-2").fadeIn(1000);
    }
  })
}
