var Player = require('./../js/scripts.js').playerModule;
  var player = new Player();
// beforeEach(function(){
//   spyOn(player, 'punny');
// };

describe('Player', function() {

  it('should test whether diceRoll is less than 7', function() {
    expect(player.diceRoll()).toBeLessThan(7);
  });


});

describe('Player', function() {
  var punny = null;

  beforeEach(function() {
    spyOn(player, 'punny');
    player.punny();
  });

  it('should test that punny runs when a player wins', function() {
    expect(player.punny()).toHaveBeenCalled();
  });
});
