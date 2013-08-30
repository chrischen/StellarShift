// TODO FIX NETWORK
// Update ships only if they change acceleration/direction
// Have bullets show up on network

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

// Colors used for energy
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

var BULLET_BOOST = 2.2; // magnitude of velocity added to shot bullet
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

var myDataRef = new Firebase('https://stellarshift.firebaseio.com/');
var network_data = new Array();
var players = new Array();
var bullets = new Array();
var player_id;

// FIREBASE NETWORK VARIABLES
var playersRef = new Firebase('https://stellarshift.firebaseio.com/players');
var players = new Array(); // array of player sprites

var bulletsRef = new Firebase('https//stellarshift.firebaseio.com/bullets');
var bullets = new Array();

var engine = new Joy.Engine({
    debug: DEBUG_MODE,
    width: document.body.clientWidth,
    height: document.body.clientHeight
});

// MISCELLANEOUS VARIABLES
var NOTIFICATION_FADE_TIME = 3000;
var notification_time;
var game_enter_time;

engine.createScene(function (scene) {
    // SOUNDS
    var death_sound = new Joy.Sound({
        urls: ['assets/sfx/death.wav']
    });

    // BACKGROUND AND TILEMAP
    //TODO make this bg img smaller, determine source of lag
    var background = new Joy.Rect({
        position: scene.viewport.position,
        width: 4300,
        height: 4300
    });
    background.colorize("#000000");
    scene.addChild(background);

    var backgroundParallax = new Joy.Parallax({
      id: "Parallax",
      distance: 100,
      velocity: .25,
      children: [
        new Joy.Sprite({
          x: -1075,
          y: -1075,
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

    var text_coords = new Joy.Text({
        x: 10,
        y: 10,
        color: COLOR_GREEN
    });

    var text_notification = new Joy.Text({
        x: 100,
        y: 10,
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
    // Behaviour for ships in general
    Joy.Behaviour.define('ShipBehavior', {
        INIT: function() {
            this.maxVelocity = MAX_SHIP_V
            this.friction = new Joy.Vector2d(SHIP_FRICTION, SHIP_FRICTION);
            this.pivot.x = this.width / 2;
            this.pivot.y = this.height / 2;
            this.rotation = Math.floor(Math.random() * 359);
            this.nrg = MAX_SHIP_NRG;
            this.last_update = new Date().getTime();
            this.sprite_type = "ship";
            this.player_id;
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

            // UPDATE ENERGY
            if (this.nrg != MAX_SHIP_NRG && current_time - this.last_update >= NRG_RECHARGE_RATE)
            {
                this.nrg++;
                this.last_update = new Date().getTime();
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

            // CHECK DEATH
            if (this.nrg <= 0)
            {
                //TODO: Death animation, use particle effects?
                //death_sound.play();
                this.visible = false;
                // wait for an amount of time and set player position to random location and make visible
            }

            // Update coords
            text_coords.text = Math.floor(this.position.x) + ", " + Math.floor(this.position.y);

            // Notification fade time
            if (current_time - notification_time >= NOTIFICATION_FADE_TIME)
            {
                text_notification.text = "";
            }

            //NETWORK STUFF
            // Check if there is data on firebase
            // Update player coords on firebase
            if (player_id !== undefined)
            {
                playersRef.child(player_id).update({x: player.position.x, y: player.position.y, rotation: player.rotation, type: player.type});
            }
        },
    });

    // Behavior specific to the Zappir ship
    Joy.Behaviour.define('ZappirBehavior', {
        INIT: function() {
            this.maxVelocity = new Joy.Vector2d(ZAPPIR_MAX_V, ZAPPIR_MAX_V);
            this.last_update = new Date().getTime();
            this.last_shot = new Date().getTime();
            this.type = "zappir";
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
                    bulletsRef.child(player_id).child(bullet_index).remove();

                    // remove bullet from network

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
                        src: "assets/img/grazi_bullet.png"
                    });

                    Joy.Behaviour.define('ProjectileBehavior', {
                        INIT: function() {
                            this.velocity.x = velocity_x + BULLET_BOOST * Math.sin(rotation * Math.PI / 180);
                            this.velocity.y = velocity_y - BULLET_BOOST * Math.cos(rotation * Math.PI / 180);
                            this.pivot.x = this.width / 2;
                            this.pivot.y = this.height / 2;
                            this.shot_time = new Date().getTime();
                            this.dmg = ZAPPIR_BULLET_DMG;
                            this.sprite_type = "projectile";
                            this.bullet_index = bullet_index;

                            // for (var i=0; i<players.length; i++)
                            // {
                            //     if (i != player_id)
                            //     {
                            //         players[i].allowCollisionFrom(this);
                            //     }
                            // }
                        },

                        UPDATE: function() {
                            current_time = new Date().getTime();
                            if (this.visible && current_time - this.shot_time > BULLET_LIFE)
                            {
                                this.visible = false;
                                bulletsRef.child(player_id).child(this.bullet_index).remove();
                            }
                        }
                    });

                    bullet_array[bullet_index].behave('Movimentation, BounceBehavior, ProjectileBehavior');
                    bullet_array[bullet_index].collider = new Joy.RectCollider(new Joy.Vector2d(-3, -3), 6, 6);
                    bullet_array[bullet_index].allowCollisionFrom(tilemap);

                    scene.addChild(bullet_array[bullet_index]);

                    // NETWORK STUFF, add bullet to firebase
                    var bullet = bullet_array[bullet_index];
                    bulletsRef.child(player_id).child(bullet_index).set({
                        x: bullet.position.x,
                        y: bullet.position.y,
                        dmg: bullet.dmg,
                        width: bullet.width,
                        height: bullet.height,
                        vx: bullet.velocity.x,
                        vy: bullet.velocity.y
                    });

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
    // Player sprite, default Zappir ship for now
    var player = new Joy.Sprite({
    	x: Math.floor(Math.random() * TILE_SIZE * (MAP_WIDTH - 2)) + TILE_SIZE - 48,
    	y: Math.floor(Math.random() * TILE_SIZE * (MAP_HEIGHT - 2)) + TILE_SIZE - 48,
    	width: 48,
    	height: 48,
    	src: "assets/img/zappir.png"
    }).behave('Movimentation, ShipBehavior, BounceBehavior, ZappirBehavior');

    player.collider = new Joy.RectCollider(new Joy.Vector2d(-22, -22), 44, 44);
    player.allowCollisionFrom(tilemap);
    scene.addChild(player);

    // FIREBASE / NETWORK STUFF
    // Initial network startup
    // Check for a free player ID
    var i = 0;
    function setPlayerId(snapshot)
    {
        if (snapshot.val() === null)
        {
            console.log("Setting player_id to " + i);
            player_id = i;
            playersRef.child(i).set({x: player.position.x, y: player.position.y, rotation: player.rotation, type: player.type});
            text_alias.text = text_alias.text + " " + (i + 1);
            playersRef.child(i).onDisconnect().remove();
            bulletsRef.child(i).onDisconnect().remove();
            game_enter_time = new Date().getTime();
        } else {
            i++;
            playersRef.child(i).once('value', setPlayerId);
        }
    }
    playersRef.child(i).once('value', setPlayerId);

    // Check for other players
    // Create sprites for other players
    playersRef.on('child_added', function(snapshot) 
    {
        var playerData = snapshot.val();
        var id = parseInt(snapshot.name());
        if (player_id !== undefined && id != player_id && players[i] === undefined)
        {
            var current_time = new Date().getTime();
            if (current_time - game_enter_time >= 1000) // delay before checking for players joining
            {
                notification_time = new Date().getTime();
                text_notification.text = "Player " + (id + 1) + " has joined the game.";
            }

            players[id] = new Joy.Sprite({
                x: playerData.x,
                y: playerData.y,
                width: 48,
                height: 48,
                src: "assets/img/" + playerData.type + ".png",
                pivot: new Joy.Vector2d(24, 24),
                collider: new Joy.RectCollider(new Joy.Vector2d(-22, -22), 44, 44)
            });

            scene.addChild(players[id]);
        }
    });

    // Check for players changing state
    playersRef.on('child_changed', function(snapshot)
    {
        var playerData = snapshot.val();
        var id = parseInt(snapshot.name());

        if (player_id !== undefined && id != player_id && players[id] !== undefined)
        {
            players[id].position.x = playerData.x;
            players[id].position.y = playerData.y;
            players[id].rotation = playerData.rotation;
        }
    });

    // Check for players leaving the game
    playersRef.on('child_removed', function(snapshot)
    {
        var id = parseInt(snapshot.name());
        scene.removeChild(players[id]);
        players[id] = null;

        notification_time = new Date().getTime();
        text_notification.text = "Player " + (id + 1) + " has left the game.";
    });

    // Check for bullets
    bulletsRef.on('child_added', function(snapshot)
    {

    });

    // Follow the player (player stays centered)
    scene.viewport.setup({
        follow: player,
        width: engine.width,
        height: engine.height
    });

    scene.viewport.addHud(text_nrg);
    scene.viewport.addHud(text_alias);
    scene.viewport.addHud(text_coords);
    scene.viewport.addHud(text_notification);
});
