var game;

// create new game instance that's 800px wide and 800px tall
game = new Phaser.Game(800,800, Phaser.AUTO, '');

// add menu game state
game.state.add ('Menu', Menu);
game.state.start ('Menu');
