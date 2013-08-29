var TILE_SIZE = 86;
var MAP_WIDTH = 50;
var MAP_HEIGHT = 50;
var MAP = [
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

// CONSTANTS
var DEBUG_MODE = true;

var COLOR_GREEN = "#03E849";
var COLOR_YELLOW = "#eee72c";
var COLOR_RED = "#f6091f";

var ZAPPIR_ACCELERATION = 0.05;
var ZAPPIR_MAX_V = 4;
var ZAPPIR_ROTATION_DELAY = 1;
var ZAPPIR_BULLET_DELAY = 250; //ms
var ZAPPIR_BOMB_DELAY = 500; // ms
var ZAPPIR_BULLET_DMG = 100;
var ZAPPIR_BOMB_DIRECT = 500; // direct hit bomb damage (near center of ship)
var ZAPPIR_BOMB_INDIRECT = 300; // bomb damage for off-center hit
var ZAPPIR_BULLET_NRG = 50; // energy required for bullet
var ZAPPIR_BOMB_NRG = 250; // energy required for bomb

var SHIP_FRICTION = 0.001;
var BULLET_FRICTION = 0;

var RESPAWN_TIME = 3000; //ms
var MAX_SHIP_VX = 4;
var MAX_SHIP_VY = 4;
var MAX_SHIP_V = new Joy.Vector2d(MAX_SHIP_VX, MAX_SHIP_VY);
var MAX_SHIP_NRG = 1700;
var NRG_RECHARGE_RATE = 5; // Increase by 1 every x ms
var BULLET_NRG = 70; // energy required for a bullet
var BOMB_NRG = 200; // energy require for a bomb

var BULLET_BOOST = 2; // magnitude of velocity added to shot bullet
var MAX_BULLET_VX = MAX_SHIP_VX + BULLET_BOOST;
var MAX_BULLET_VY = MAX_SHIP_VY + BULLET_BOOST;
var MAX_BULLET_V = new Joy.Vector2d(MAX_BULLET_VX, MAX_BULLET_VY);


var BULLET_LIFE = 5000; // Bullet life in ms
var BOMB_LIFE = 10000; // Bomb life in ms
var MAX_NUM_BULLET = 100; // At most 20 bullets from 1 ship, new ones will replace old ones
var MAX_NUM_BOMB = 5;

var bullet_array = new Array();
var bullet_shot_time = new Array();

var bullet_index = 0;

var bomb_array = new Array();
var bomb_index = 0;

var WALL_DAMPENING = 0.7; // Dampening factor when colliding with wall

// FIREBASE / NETWORK STUFF
var myDataRef = new Firebase('https://stellarshift.firebaseio.com/');
var network_data = new Array();
var players = new Array();
var bullets = new Array();
var player_id;

// Set data to number of players, their projectiles and locations

// when join server, try to pull data

var engine = new Joy.Engine({
    debug: DEBUG_MODE,
    width: document.body.clientWidth,
    height: document.body.clientHeight
});

engine.createScene(function (scene) {
    // SOUNDS
    var death_sound = new Joy.Sound({
        urls: ['assets/sfx/death.wav']
    });

    // BACKGROUND AND TILEMAP
    //TODO make this bg img smaller
    var backgroundParallax = new Joy.Parallax({
      id: "Parallax",
      distance: 100,
      velocity: .5,
      children: [
        new Joy.Sprite({
          x: -1000,
          y: -1000,
          src: "assets/img/bg_big.png"})
      ]
    });
    scene.addChild(backgroundParallax);

    // Define tileset dimensions
    var tileset = new Joy.Tileset({
      src: "assets/img/Tileset.png",
      width: TILE_SIZE,
      height: TILE_SIZE
    });

    var tilemap = new Joy.Tilemap({
      tileset: tileset,
      lines: MAP_HEIGHT,
      columns: MAP_WIDTH,
      data: MAP
    });
    scene.addChild(tilemap);

    // HUD Interface
    // Draw NRG and Player Alias under player (player is always centered)
    var text_nrg = new Joy.Text({
        x: engine.width / 2 - 80,
        y: engine.height / 2 + 5,
        text: MAX_SHIP_NRG,
        color: COLOR_GREEN
    });

    var text_alias = new Joy.Text({
        x: engine.width / 2 - 42,
        y: engine.height / 2 + 5,
        text: "Player",
        color: COLOR_GREEN
    });

    // Behavior for ships and bouncing projectiles colliding with the boundary
    Joy.Behaviour.define('BounceBehavior', {
        COLLISION: function(other) {
            // Moving in top-right direction
            if (other instanceof Joy.Tilemap && this.velocity.x >= 0 && this.velocity.y <= 0 &&
                this.willCollideAt(new Joy.Vector2d(this.collider.width, 0)))
            {
                if (this.position.x + this.width / 2 >= TILE_SIZE * (MAP_WIDTH - 1)) // Collide on right
                {
                    this.acceleration.y = WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = -WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = -WALL_DAMPENING * this.velocity.x;
                } else if (this.position.y - this.width / 2 <= TILE_SIZE * 1) // Collide on top
                {
                    this.acceleration.y = -WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = -WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = WALL_DAMPENING * this.velocity.x;
                }
            // Moving in bottom-right direction
            } else if (other instanceof Joy.Tilemap && this.velocity.x >= 0 && this.velocity.y >= 0 &&
                this.willCollideAt(new Joy.Vector2d(this.collider.width, this.collider.height)))
            {
                if (this.position.x + this.width / 2 >= TILE_SIZE * (MAP_WIDTH - 1)) // Collide on right
                {
                    this.acceleration.y = WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = -WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = -WALL_DAMPENING * this.velocity.x;
                } else if (this.position.y + this.width / 2 >= TILE_SIZE * (MAP_HEIGHT - 1)) // Collide on bottom
                {
                    this.acceleration.y = -WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = -WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = WALL_DAMPENING * this.velocity.x;
                }
            // Moving in bottom-left direction
            } else if (other instanceof Joy.Tilemap && this.velocity.x <= 0 && this.velocity.y >= 0 &&
                this.willCollideAt(new Joy.Vector2d(0, this.collider.height)))
            {
                if (this.position.x - this.width / 2 <= TILE_SIZE * 1) // Collide on left
                {
                    this.acceleration.y = WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = -WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = -WALL_DAMPENING * this.velocity.x;
                } else if (this.position.y + this.width / 2 >= TILE_SIZE * (MAP_HEIGHT - 1)) // Collide on bottom
                {
                    this.acceleration.y = -WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = -WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = WALL_DAMPENING * this.velocity.x;
                }
            // Moving in top-left direction
            } else if (other instanceof Joy.Tilemap && this.velocity.x <= 0 && this.velocity.y <= 0 &&
                this.willCollideAt(new Joy.Vector2d(0, 0)))
            {
                if (this.position.x - this.width / 2 <= TILE_SIZE * 1) // Collide on left
                {
                    this.acceleration.y = WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = -WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = -WALL_DAMPENING * this.velocity.x;
                } else if (this.position.y - this.width / 2 <= TILE_SIZE * 1) // Collide on top
                {
                    this.acceleration.y = -WALL_DAMPENING * this.acceleration.y;
                    this.acceleration.x = WALL_DAMPENING * this.acceleration.x;
                    this.velocity.y = -WALL_DAMPENING * this.velocity.y;
                    this.velocity.x = WALL_DAMPENING * this.velocity.x;
                }
            }
        }
    });

    // Ship behavior for movement and updating state
    Joy.Behaviour.define('ShipBehavior', {
        INIT: function() {
            this.maxVelocity = MAX_SHIP_V
            this.friction = new Joy.Vector2d(SHIP_FRICTION, SHIP_FRICTION);
            this.pivot.x = this.width / 2;
            this.pivot.y = this.height / 2;
            this.rotation = Math.floor(Math.random() * 359);
            this.nrg = MAX_SHIP_NRG;
            this.last_update = new Date().getTime();
            this.type = "ship";
        },

        KEY_UP: function(evt) {
            if (evt.keyCode == Joy.Keyboard.UP ||
                evt.keyCode == Joy.Keyboard.DOWN) {
                this.acceleration.x = 0
                this.acceleration.y = 0;
            }
        },

        KEY_PRESS: function(evt) {
            if (evt.keyCode == Joy.Keyboard.UP) {
                this.acceleration.y = -ZAPPIR_ACCELERATION * Math.cos(this.rotation * Math.PI / 180);
                this.acceleration.x = ZAPPIR_ACCELERATION * Math.sin(this.rotation * Math.PI / 180);
            } else if (evt.keyCode == Joy.Keyboard.DOWN) {
            
                this.acceleration.y = ZAPPIR_ACCELERATION * Math.cos(this.rotation * Math.PI / 180);
                this.acceleration.x = -ZAPPIR_ACCELERATION * Math.sin(this.rotation * Math.PI / 180);
            }

            if (evt.keyCode === Joy.Keyboard.LEFT) {
                if (this.rotation == 0) 
                {
                    this.rotation = 359;
                } else {
                    this.rotation--;
                }
            } else if (evt.keyCode === Joy.Keyboard.RIGHT) {
                this.rotation++;
                this.rotation %= 360;
            }
        },

        UPDATE: function() {
            var current_time = new Date().getTime();
            if (this.nrg != MAX_SHIP_NRG && current_time - this.last_update >= NRG_RECHARGE_RATE)
            {
                this.nrg++;
            }

            text_nrg.text = this.nrg;
            if (this.nrg >= 1000)
            {
                text_nrg.color = COLOR_GREEN;
            } else if (this.nrg >= 500)
            {
                text_nrg.color = COLOR_YELLOW;
            } else {
                text_nrg.color = COLOR_RED;
            }

            if (this.nrg <= 0)
            {
                //TODO: Death animation, use particle effects?
                death_sound.play();
                this.visible = false;
                // wait for an amount of time and set player position to random location and make visible
            }

            this.last_update = new Date().getTime();
        }
    });

    Joy.Behaviour.define('ZappirBehavior', {
        INIT: function() {
            this.maxVelocity = new Joy.Vector2d(ZAPPIR_MAX_V, ZAPPIR_MAX_V);
            this.last_update = new Date().getTime();
            this.last_shot = new Date().getTime();
        },

        KEY_PRESS: function(evt)
        {
            if (evt.keyCode == Joy.Keyboard.KEY_X)
            {
                var current_time = new Date().getTime();
                if (current_time - this.last_shot > ZAPPIR_BULLET_DELAY && this.nrg > ZAPPIR_BULLET_NRG)
                {
                    //TODO: Zappir bullets shoot in a spread of 3
                    this.nrg -= ZAPPIR_BULLET_NRG;

                    scene.removeChild(bullet_array[bullet_index]);

                    var acceleration_x = this.acceleration.x;
                    var acceleration_y = this.acceleration.y;
                    var velocity_x = this.velocity.x;
                    var velocity_y = this.velocity.y;
                    var x = this.position.x;
                    var y = this.position.y;
                    var rotation = this.rotation;

                    bullet_array[bullet_index] = new Joy.Sprite({
                        x: this.position.x + 18 * Math.sin(rotation * Math.PI / 180),
                        y: this.position.y - 18 * Math.cos(rotation * Math.PI / 180),
                        width: 6,
                        height: 6,
                        src: "assets/img/grazi_bullet.png",
                        type: "bullet",
                        live: true
                    });

                    Joy.Behaviour.define('ProjectileBehavior' + bullet_index, {
                        INIT: function() {
                            this.maxVelocity = MAX_BULLET_V;
                            this.friction = new Joy.Vector2d(BULLET_FRICTION, BULLET_FRICTION);
                            this.velocity.x = velocity_x + BULLET_BOOST * Math.sin(rotation * Math.PI / 180);
                            this.velocity.y = velocity_y - BULLET_BOOST * Math.cos(rotation * Math.PI / 180);
                            this.pivot.x = this.width / 2;
                            this.pivot.y = this.height / 2;
                            this.shot_time = new Date().getTime();
                            this.dmg = ZAPPIR_BULLET_DMG;
                        },

                        UPDATE: function() {
                            current_time = new Date().getTime();
                            if (this.visible && current_time - this.shot_time > BULLET_LIFE)
                            {
                                this.visible = false;
                            }

                            //TODO: Check network data and allow collision with other players
                            for (var i=0; i<players.length; i++)
                            {
                                if (i != player_id)
                                {
                                    this.allowCollisionFrom(players[i]);
                                }
                            }
                        },

                        COLLISION: function(other) {
                            if (other instanceof Joy.Sprite && other.type == "ship" && this.visible)
                            {
                                console.log(other.nrg);
                                other.nrg -= this.dmg;
                                this.visible = false;
                            }
                        }
                    });

                    bullet_array[bullet_index].behave('Movimentation, BounceBehavior, ProjectileBehavior' + bullet_index);

                    bullet_array[bullet_index].collider = new Joy.RectCollider(new Joy.Vector2d(-3, -3), 6, 6);
                    bullet_array[bullet_index].allowCollisionFrom(tilemap);

                    scene.addChild(bullet_array[bullet_index]);
                    this.last_shot = new Date().getTime();

                    bullet_index++;
                    if (bullet_index == MAX_NUM_BULLET)
                    {
                        bullet_index = 0;
                    }
                }
            }
        }
    });

    // Random spawn assumes 1 Tile width boundary around whole area
    var zappir = new Joy.Sprite({
    	x: Math.floor(Math.random() * TILE_SIZE * (MAP_WIDTH - 2)) + TILE_SIZE,
    	y: Math.floor(Math.random() * TILE_SIZE * (MAP_HEIGHT - 2)) + TILE_SIZE,
    	width: 48,
    	height: 48,
    	src: "assets/img/zappir.png"
    }).behave('Movimentation, ShipBehavior, BounceBehavior, ZappirBehavior');

    zappir.collider = new Joy.RectCollider(new Joy.Vector2d(-22, -22), 44, 44);
    zappir.allowCollisionFrom(tilemap);
    scene.addChild(zappir);

    Joy.Behaviour.define('DummyBehavior', {
        INIT: function() {
            this.pivot.x = this.width / 2;
            this.pivot.y = this.width / 2;
            this.nrg = MAX_SHIP_NRG;
            this.type = "ship";
            this.last_update = new Date().getTime();
        },

        UPDATE: function() {
            var current_time = new Date().getTime();
            if (this.nrg != MAX_SHIP_NRG && current_time - this.last_update >= NRG_RECHARGE_RATE)
            {
                this.nrg++;
            }

            if (this.nrg <= 0)
            {
                //TODO: Death animation, use particle effects?
                // Make ship disappear, when dead, maybe move off the map?
                death_sound.play();
                this.visible = false;
                // wait for an amount of time and set player position to random location and make visible
            }

            this.last_update = new Date().getTime();
        }
    });

    var dummy = new Joy.Sprite({
        x: zappir.position.x,
        y: zappir.position.y,
        width: 48,
        height: 48,
        src: "assets/img/zappir.png"
    }).behave('DummyBehavior');

    dummy.collider = new Joy.RectCollider(new Joy.Vector2d(-22, -22), 44, 44);
    dummy.allowCollisionFrom(tilemap);
    scene.addChild(dummy);

    player_id = 0;
    text_alias.text = text_alias.text + " " + player_id + 1;

    players.push(zappir);
    players.push(dummy);

    scene.viewport.setup({
        follow: zappir,
        width: engine.width,
        height: engine.height
    });

    scene.viewport.addHud(text_nrg);
    scene.viewport.addHud(text_alias);

    //NETWORK STUFF
    // Check if there is data on firebase
    var initial_check = false;
    myDataRef.on('child_added', function(snapshot) {
        console.log("getting data.");
        network_data = snapshot.val();
        initial_check = true;

        player_id = network_data.players.length;
        network_data.players.push(zappir);
    });

    if (initial_check && network_data.length == 0)
    {
        console.log("setting data.");
        var player = {position: zappir.position, rotation: zappir.rotation};
        network_data.players = new Array();
        network_data.players.push(zappir);
        myDataRef.set(network_data);
    }
});