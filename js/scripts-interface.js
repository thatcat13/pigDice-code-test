var Player = require('./../js/scripts.js').playerModule;

var newPlayer = new Player();
var newPlayer2 = new Player();

$(document).ready(function(){
  $('#p1-roll').click(function(event){
    event.preventDefault();
    console.log('roll button clicked!');
    var nameInput = $('#p1name').val();
    var result = newPlayer.diceRoll();
    newPlayer.name = nameInput;

    $("#p1-title").text(newPlayer.name);
    $("#p1hide").slideUp();

    if (result === 1){
      newPlayer.round = 0;
      $('#result').text("NEXT PLAYER'S TURN");
    } else{
      newPlayer.round += result;
      $('#result').text("Score: " + result);
    }
    $('#p1round').text(newPlayer.round);
  });

  $('#p1-hold').click(function(event){
    event.preventDefault();
    console.log('hold button clicked!');
    var total = newPlayer.total += newPlayer.round;
    $("#p1total").text(total);

    newPlayer.round = 0;


      if (newPlayer.total >= 100) {
        $("#pun").text(punny());
        $("#result").text("YOU WIN!");
        $('.winner-effect').show();
      }
    });


//player 2 starts here//

  $('#p2-roll').click(function(event){
    event.preventDefault();
    var nameInput = $('#p2name').val();
    var result = newPlayer2.diceRoll();
    newPlayer2.name = nameInput;
    $("#p2-title").text(newPlayer2.name);
    $("#p2hide").slideUp();


    if (result === 1){
      newPlayer2.round = 0;
      $('#result').text("NEXT PLAYER'S TURN");
    }else{
      newPlayer2.round += result;
      $('#result').text("Score: " + result);
    }
    $('#p2round').text(newPlayer2.round);
  });

  $('#p2-hold').click(function(event){
    event.preventDefault();

    var total = newPlayer2.total += newPlayer2.round;
    $("#p2total").text(total);

    newPlayer2.round = 0;

      if (newPlayer2.total >= 100) {
        $("#pun").text(punny());
        $("#result").text("YOU WIN!");
        $('#confetti').show();
      }
  });
});
