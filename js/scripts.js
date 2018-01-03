function Player(name, total, round) {
    this.name = name;
    this.total = 100;
    this.round = 0;
};



  Player.prototype.diceRoll = function(){
    var result = Math.floor((Math.random() * 6) + 1);
    return result;
  };

  Player.prototype.punny = function(){
    var puns = ["You're the squeal-deal!", "That's what its all a-snout!", "You aint nothing to muck with!", "You've got the chops!", "You go curl!", "It's 'swine time' baby!", "That's nothing to swine about!", "Get piggy with it!", "You're bacon me crazy!", "You're of a real different snort.", "I pink you won!"];

    var result = puns[Math.floor(Math.random() * puns.length)];
    return result;
  };



exports.playerModule = Player;
