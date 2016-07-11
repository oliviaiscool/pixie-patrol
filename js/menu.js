var Menu = {

  preload: function() {
    // loading the start menu image
    game.load.image('start', './assets/mainmenu.png');
  },

  create: function() {
    // adding the start image as a sprite to the game
    this.add.sprite(0, 0, 'start')
  },

  startGame: function() {
    // change the game state to the actual game lmao
    this.state.start('Game')
  }
};
