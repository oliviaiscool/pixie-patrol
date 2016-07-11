// Create the state that will contain the whole game
var mainState = {
   preload: function() {
      // Here we preload the assets
      game.load.image('player', 'assets/magicalgirl1.png');
      game.load.image('background', 'assets/background.jpg');

   },

   create: function() {
      // Here we create the game

      // Set the background color to blue
      game.add.sprite(0, 0, 'background');


   },

   update: function() {
      // Here we update the game 60 times per second
   },
};

// Initialize the game and start our state
var game = new Phaser.Game(800, 800);
game.state.add('main', mainState);
game.state.start('main');
