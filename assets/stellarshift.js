var TILE_SIZE = 86;
var MAP_WIDTH = 50;
var MAP_HEIGHT = 50;
var MAP = [
        12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,15,
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
        14,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,8];
var player;
var ZAPPOS_ACCELERATION = .1;

var engine = new Joy.Engine({
debug: false,
width: document.body.clientWidth,
height: document.body.clientHeight
});

engine.createScene(function (scene) {
    var backgroundParallax = new Joy.Parallax({
      id: "Parallax",
      children: [
        new Joy.Sprite("assets/bg.png")
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

    var text = new Joy.Text({
        x: 150,
        y: 12,
        text: "",
        align: "center",
        font: "10pt Verdana",
        baseline: Joy.Text.BASELINE.MIDDLE
    });

    //scene.addChild(text);

    Joy.Behaviour.define('ShipBehavior', {
        INIT: function() {
            this.maxVelocity = new Joy.Vector2d(4, 4);
            this.friction = new Joy.Vector2d(0.001, 0.001);
            this.grounded = false;
            this.pivot.x = this.width / 2;
            this.pivot.y = this.height / 2;
            this.rotation = 0;
        },

        UPDATE: function() {

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

        KEY_DOWN: function(evt) {

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
            }

            this.rotation %= 360;
        },

        COLLISION: function(other) {
            // Moving in top-right direction
            if (other instanceof Joy.Tilemap && this.velocity.x >= 0 && this.velocity.y <= 0 &&
                this.willCollideAt(new Joy.Vector2d(this.collider.width, 0)))
            {
                if (this.position.x + 20 >= TILE_SIZE * (MAP_WIDTH - 1)) // Collide on right
                {
                    this.acceleration.y = this.acceleration.y;
                    this.acceleration.x = -this.acceleration.x;
                    this.velocity.y = this.velocity.y;
                    this.velocity.x = -this.velocity.x;
                } else if (this.position.y - 20 <= TILE_SIZE * 1) // Collide on top
                {
                    this.acceleration.y = -this.acceleration.y;
                    this.acceleration.x = this.acceleration.x;
                    this.velocity.y = -this.velocity.y;
                    this.velocity.x = this.velocity.x;
                }
            // Moving in bottom-right direction
            } else if (other instanceof Joy.Tilemap && this.velocity.x >= 0 && this.velocity.y >= 0 &&
                this.willCollideAt(new Joy.Vector2d(this.collider.width, this.collider.height)))
            {
                if (this.position.x + 20 >= TILE_SIZE * (MAP_WIDTH - 1)) // Collide on right
                {
                    this.acceleration.y = this.acceleration.y;
                    this.acceleration.x = -this.acceleration.x;
                    this.velocity.y = this.velocity.y;
                    this.velocity.x = -this.velocity.x;
                } else if (this.position.y + 20 >= TILE_SIZE * (MAP_HEIGHT - 1)) // Collide on bottom
                {
                    this.acceleration.y = -this.acceleration.y;
                    this.acceleration.x = this.acceleration.x;
                    this.velocity.y = -this.velocity.y;
                    this.velocity.x = this.velocity.x;
                }
            // Moving in bottom-left direction
            } else if (other instanceof Joy.Tilemap && this.velocity.x <= 0 && this.velocity.y >= 0 &&
                this.willCollideAt(new Joy.Vector2d(0, this.collider.height)))
            {
                if (this.position.x - 20 <= TILE_SIZE * 1) // Collide on left
                {
                    this.acceleration.y = this.acceleration.y;
                    this.acceleration.x = -this.acceleration.x;
                    this.velocity.y = this.velocity.y;
                    this.velocity.x = -this.velocity.x;
                } else if (this.position.y + 20 >= TILE_SIZE * (MAP_HEIGHT - 1)) // Collide on bottom
                {
                    this.acceleration.y = -this.acceleration.y;
                    this.acceleration.x = this.acceleration.x;
                    this.velocity.y = -this.velocity.y;
                    this.velocity.x = this.velocity.x;
                }
            // Moving in top-left direction
            } else if (other instanceof Joy.Tilemap && this.velocity.x <= 0 && this.velocity.y <= 0 &&
                this.willCollideAt(new Joy.Vector2d(0, 0)))
            {
                if (this.position.x - 20 <= TILE_SIZE * 1) // Collide on left
                {
                    this.acceleration.y = this.acceleration.y;
                    this.acceleration.x = -this.acceleration.x;
                    this.velocity.y = this.velocity.y;
                    this.velocity.x = -this.velocity.x;
                } else if (this.position.y - 20 <= TILE_SIZE * 1) // Collide on top
                {
                    this.acceleration.y = -this.acceleration.y;
                    this.acceleration.x = this.acceleration.x;
                    this.velocity.y = -this.velocity.y;
                    this.velocity.x = this.velocity.x;
                }
            }
        },

        COLLISION_EXIT: function(other) {

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
    }).behave('Movimentation, ShipBehavior');

    zappos.collider = new Joy.RectCollider(new Joy.Vector2d(-22, -22), 44, 44);
    zappos.allowCollisionFrom(tilemap);

    scene.addChild(zappos);

    scene.viewport.setup({
        follow: zappos,
        width: engine.width,
        height: engine.height
    })
});