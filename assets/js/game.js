var map, backgroundLayer, blockLayer;

var Game = {
	preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        this.load.image('background', './assets/img/background.jpg');
        this.load.tilemap('level1', './assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('grass_tile', "./assets/tilemaps/grassblock.png");
        this.load.image('flower_tile', "./assets/tilemaps/flowerblock.png");
        game.load.spritesheet('elena', './assets/animations/magicalgirl1-Sheet.png');
    },

    create: function () {
        // Add a sprite to your game, here the sprite will be the game's background
        // Parameters are : X , Y , image name (see above) 
        this.add.sprite(0, 0, 'background');


        // Adding the tilemap using it's pre-loader key and then matching it with the tile images 
        // The first parameter of the tile images is the tile set name from the JSON file, then the pre-loader key
        map = this.add.tilemap('level1');
   		map.addTilesetImage('grassblock', 'grass_tile');
   		map.addTilesetImage('flowerblock', 'flower_tile');

		// Lastly, to actually the draw the the map you've created, draw the layer using the layer name in the JSON file
		layer = map.createLayer('Tile Layer 1');
    },
}