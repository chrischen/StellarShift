var TILE_SIZE = 86;
var MAP_WIDTH = 50;
var MAP_HEIGHT = 50;
var MAP = [
        0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
        0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,0];

// CONSTANTS
var ZAPPOS_ACCELERATION = 0.05;
var ZAPPOS_ROTATION_SPEED = 1;
var ZAPPOS_SHOOT_DELAY = 250; //ms

var SHIP_FRICTION = 0.001;
var BULLET_FRICTION = 0;

var MAX_SHIP_VX = 4;
var MAX_SHIP_VY = 4;
var MAX_SHIP_V = new Joy.Vector2d(MAX_SHIP_VX, MAX_SHIP_VY);

var BULLET_BOOST = 1.5; // magnitude of velocity added to shot bullet
var MAX_BULLET_VX = MAX_SHIP_VX + BULLET_BOOST;
var MAX_BULLET_VY = MAX_SHIP_VY + BULLET_BOOST;
var MAX_BULLET_V = new Joy.Vector2d(MAX_BULLET_VX, MAX_BULLET_VY);


var BULLET_TIMER = 5000; // Bullets last 2 seconds
var BOMB_TIMER = 10000; // Bombs last 3 seconds;
var MAX_NUM_BULLET = 20; // At most 20 bullets from 1 ship, new ones will replace old ones
var MAX_NUM_BOMB = 5; // At most 3 bombs, new ones will replace old ones

var bullet_array = new Array();
var bullet_shot_time = new Array();
for (var i=0; i<MAX_NUM_BULLET; i++)
{
    bullet_shot_time[i] = 0;
}

var bullet_index = 0;

var bomb_array = new Array();
var bomb_index = 0;

var WALL_DAMPENING = 0.7; // Dampening factor when colliding with wall

var engine = new Joy.Engine({
    debug: false,
    width: document.body.clientWidth,
    height: document.body.clientHeight
});

engine.createScene(function (scene) {
    var backgroundParallax = new Joy.Parallax({
      id: "Parallax",
      distance: 100,
      velocity: .5,
      children: [
        new Joy.Sprite({
          x: -2150,
          y: -2150,
          src: "assets/bg_big.png"})
      ]
    });
    scene.addChild(backgroundParallax);

    // Define tileset dimensions
    var tileset = new Joy.Tileset({
      src: "assets/bg-Tileset.png",
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

    // Behavior for ships and bullets colliding with the boundary
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

    // Ship behavior for movement and shooting
    Joy.Behaviour.define('ShipBehavior', {
        INIT: function() {
            this.maxVelocity = MAX_SHIP_V
            this.friction = new Joy.Vector2d(SHIP_FRICTION, SHIP_FRICTION);
            this.pivot.x = this.width / 2;
            this.pivot.y = this.height / 2;
            this.rotation = 0;
        },

        KEY_UP: function(evt) {
            if (evt.keyCode == Joy.Keyboard.UP ||
                evt.keyCode == Joy.Keyboard.DOWN) {
                this.acceleration.x = 0
                this.acceleration.y = 0;
            }

            if (evt.keyCode === Joy.Keyboard.LEFT ||
                evt.keyCode === Joy.Keyboard.RIGHT) {
                this.acceleration.x = 0
                this.acceleration.x = 0;
            }
        },

        KEY_PRESS: function(evt) {
            if (evt.keyCode == Joy.Keyboard.UP) {
                this.acceleration.y = -ZAPPOS_ACCELERATION * Math.cos(this.rotation * Math.PI / 180);
                this.acceleration.x = ZAPPOS_ACCELERATION * Math.sin(this.rotation * Math.PI / 180);
            } else if (evt.keyCode == Joy.Keyboard.DOWN) {
            
                this.acceleration.y = ZAPPOS_ACCELERATION * Math.cos(this.rotation * Math.PI / 180);
                this.acceleration.x = -ZAPPOS_ACCELERATION * Math.sin(this.rotation * Math.PI / 180);
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

            if (evt.keyCode == Joy.Keyboard.KEY_X)
            {

            }
        }
    });
    
    var last_shot = 0; // time of last shot;
    var current_time;

    Joy.Behaviour.define('ZapposBehavior', {
        KEY_PRESS: function(evt)
        {
            if (evt.keyCode == Joy.Keyboard.KEY_X)
            {
                current_time = new Date().getTime();
                if (current_time - last_shot > ZAPPOS_SHOOT_DELAY)
                {
                    scene.removeChild(bullet_array[bullet_index]);

                    var acceleration_x = this.acceleration.x;
                    var acceleration_y = this.acceleration.y;
                    var velocity_x = this.velocity.x;
                    var velocity_y = this.velocity.y;
                    var x = this.position.x;
                    var y = this.position.y;
                    var rotation = this.rotation;

                    Joy.Behaviour.define('ProjectileBehavior' + bullet_index, {
                        INIT: function() {
                            this.maxVelocity = MAX_BULLET_V;
                            this.friction = new Joy.Vector2d(BULLET_FRICTION, BULLET_FRICTION);
                            this.velocity.x = velocity_x + BULLET_BOOST * Math.sin(rotation * Math.PI / 180);
                            this.velocity.y = velocity_y + -BULLET_BOOST * Math.cos(rotation * Math.PI / 180);
                            this.index = bullet_index;
                        },

                        //TODO: fix this to add timed life to bullets
                        /*
                        UPDATE: function() {
                            var current_time = new Date().getTime();
                            if (bullet_shot_time[this.index] != 0 && current_time - bullet_shot_time[this.index] > BULLET_TIMER)
                            {
                                scene.removeChild(bullet_array[this.index]);
                                bullet_shot_time[this.index] = 0;
                            }
                        }
                        */
                    });

                    bullet_array[bullet_index] = new Joy.Sprite({
                        x: x + 18 * Math.sin(rotation * Math.PI / 180),
                        y: y - 18 * Math.cos(rotation * Math.PI / 180),
                        width: 10,
                        height: 10,
                        animations: {
                            "idle": [0],
                        },
                        src: "assets/rock_bullet1.png"
                    }).behave('Movimentation, BounceBehavior, ProjectileBehavior' + bullet_index);

                    bullet_array[bullet_index].collider = new Joy.RectCollider(new Joy.Vector2d(0, 0), 10, 10);
                    bullet_array[bullet_index].allowCollisionFrom(tilemap);

                    scene.addChild(bullet_array[bullet_index]);
                    last_shot = new Date().getTime();
                    bullet_shot_time[bullet_index] = new Date().getTime();
                    bullet_index++;
                    //TODO: fix this to have bullet limit
                    if (bullet_index == MAX_NUM_BULLET)
                    {
                        //bullet_index = 0;
                    }
                }
            }
        }
    });

    var zappos = new Joy.Sprite({
    	x: engine.width / 2 - 24,
    	y: engine.height / 2 - 24,
    	width: 48,
    	height: 48,
    	animations: {
    		"idle": [0],
    	},
    	src: "assets/zappos.png",
    }).behave('Movimentation, ShipBehavior, BounceBehavior, ZapposBehavior');

    zappos.collider = new Joy.RectCollider(new Joy.Vector2d(-22, -22), 44, 44);
    zappos.allowCollisionFrom(tilemap);
    scene.addChild(zappos);

    scene.viewport.setup({
        follow: zappos,
        width: engine.width,
        height: engine.height
    })
});