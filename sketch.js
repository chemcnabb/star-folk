//Creating animations from sprite sheets
var sprite_sheet_image;
var sprite_sheet;
var explode_animation;
let target;
let label;
var tmap, smiley, walls, wallsIndex;
let kirk_animation;
function preload() {
  // tmap = loadTiledMap("die-hard", "data");
  // specify width and height of each frame and number of frames
  bridge_background = loadSpriteSheet('sprites/bridge.png', 320, 200, 34);
  bridge_background_animation = loadAnimation(bridge_background);
  
  space_background = loadSpriteSheet('sprites/monitor_space.png', 177, 73, 161);
  space_background_animation = loadAnimation(space_background);
  
  spock_bridge = loadSpriteSheet('sprites/spock_bridge.png', 40, 60, 10);
  spock_bridge_animation = loadAnimation(spock_bridge);
  
  uhura_bridge = loadSpriteSheet('sprites/uhura.png', 39, 50, 21);
  uhura_bridge_animation = loadAnimation(uhura_bridge);
  
  scotty_bridge = loadSpriteSheet('sprites/scotty.png', 44, 56, 16);
  scotty_bridge_animation = loadAnimation(scotty_bridge);
  
  sulu_bridge = loadSpriteSheet('sprites/sulu.png', 25, 46, 2);
  sulu_bridge_animation = loadAnimation(sulu_bridge);
  
  kirk_sheet = loadSpriteSheet('sprites/kirk.png', 128/3, 30, 8);
  kirk_animation = loadAnimation(kirk_sheet);

  // Idle_EAST = loadSpriteSheet('images/Agent Free Version/Idle/C_Idle_EAST_strip4.png', 16, 24, 4);
  // Idle_EAST_animation = loadAnimation(Idle_EAST);

  // Idle_SOUTH = loadSpriteSheet('images/Agent Free Version/Idle/C_Idle_SOUTH_strip4.png', 16, 24, 4);
  // Idle_SOUTH_animation = loadAnimation(Idle_SOUTH);

  // Idle_WEST = loadSpriteSheet('images/Agent Free Version/Idle/C_Idle_WEST_strip4.png', 16, 24, 4);
  // Idle_WEST_animation = loadAnimation(Idle_WEST);

  // Run_NORTH = loadSpriteSheet('images/Agent Free Version/Run/C_Run_NORTH_strip4.png', 16, 24, 4);
  // Run_NORTH_animation = loadAnimation(Run_NORTH);

  // Run_EAST = loadSpriteSheet('images/Agent Free Version/Run/C_Run_EAST_strip4.png', 16, 24, 4);
  // Run_EAST_animation = loadAnimation(Run_EAST);

  // Run_SOUTH = loadSpriteSheet('images/Agent Free Version/Run/C_Run_SOUTH_strip4.png', 16, 24, 4);
  // Run_SOUTH_animation = loadAnimation(Run_SOUTH);

  // Run_WEST = loadSpriteSheet('images/Agent Free Version/Run/C_Run_WEST_strip4.png', 16, 24, 4);
  // Run_WEST_animation = loadAnimation(Run_WEST);



  // load the full sprite sheet for example reference only
  // sprite_sheet_image = loadImage('images/RunSheet.png');
}

function setup() {
  createCanvas(1280, 800);

  bridge = createSprite(160, 100, 320, 200);//size of bridge sprite
  bridge.addAnimation("bridge_background", bridge_background_animation);
  
  space = createSprite(159.5, 67, 177, 73);//size of bridge sprite
  space.addAnimation("space_background", space_background_animation);
  
  
  
  kirk = createSprite(160, 164, 42, 30);//size of bridge sprite
  kirk.addAnimation("kirk_seated", kirk_animation);
  

  kirk.animation.stop();
  
  spock = createSprite(289, 136, 40, 60);//size of bridge sprite
  spock.addAnimation("spock_background", spock_bridge_animation);
  spock.animation.frameDelay = 24;
  
  sulu = createSprite(125, 138, 25, 46);//size of bridge sprite
  sulu.addAnimation("sulu_background", sulu_bridge_animation);
  sulu.animation.stop();
  
  
uhura = createSprite(300, 176, 40, 60);//size of bridge sprite
  uhura.addAnimation("uhura_background", uhura_bridge_animation);
uhura.animation.frameDelay = 24;

scotty = createSprite(56, 129, 44, 56);//size of bridge sprite
  scotty.addAnimation("scotty_background", scotty_bridge_animation);

  scotty.animation.frameDelay = 24;
  // hero.addAnimation("idle_east", Idle_EAST_animation);
  // hero.addAnimation("idle_south", Idle_SOUTH_animation);
  // hero.addAnimation("idle_west", Idle_WEST_animation);

  // hero.addAnimation("run_north", Run_NORTH_animation);
  // hero.addAnimation("run_east", Run_EAST_animation);
  // hero.addAnimation("run_south", Run_SOUTH_animation);
  // hero.addAnimation("run_west", Run_WEST_animation);


  // hero.maxSpeed = 2;
  // // hero.friction = 0.99;
  // hero.rotateToDirection = false;

  // target = createSprite(width / 2, height / 2, 20, 20);
  // target.draw = function() {
  //   ellipse(0, 0, 10, 10)
  // }
  // target.visible = false;
  // target.shapeColor = color(135);

}

function addTarget(x, y) {
  target.position.x = x;
  target.position.y = y;
  target.visible = true;
  target.draw();
}

function getTarget() {
  target.visible = false;
  hero.setVelocity(0, 0);
}

function draw() {
  // clear();
  background(0);
  scale(4);
  // animate the sprite sheet
  // animation(Idle_NORTH_animation, 20, 200);
  // Idle_NORTH_animation.frameDelay = 12;
  // bridge.animation.frameDelay = 12;

frame = int(map(mouseX, 0, width+110, 0, 9));
kirk.animation.changeFrame(frame);
  //

if((int(mouseX/4)+10) > spock.position.x && (int(mouseX/4)+10) < spock.width + spock.position.x && mouseY <= height-180){
    spock.animation.changeFrame(10);
  }
  
  if((int(mouseX/4)+10) > uhura.position.x && (int(mouseX/4)+10) < uhura.width + uhura.position.x && mouseY > height-180){
    uhura.animation.changeFrame(21);
  }
  
  // console.log(mouseX/4, scotty.position.x);
  if((int(mouseX/4)) > scotty.position.x-15 && (int(mouseX/4)) < scotty.width + scotty.position.x-20 && mouseY < height-180){
    scotty.animation.changeFrame(16);
  }
  

  if((int(mouseX/4)) > sulu.position.x-15 && (int(mouseX/4)) < sulu.width + sulu.position.x-10 && mouseY < height-180){

    sulu.animation.changeFrame(1);
  }else{
    
    sulu.animation.changeFrame(0);
  }
  // if (!target.visible) {
  //   label = "idle"
  //   if (mouseX > hero.position.x) {
  //     hero.changeAnimation(label + "_east");
  //   } else if (mouseX < hero.position.x) {
  //     hero.changeAnimation(label + "_west");
  //   }
  //   if (mouseY < hero.position.y - hero.height) {
  //     hero.changeAnimation(label + "_north");
  //   } else if (mouseY > hero.position.y + hero.height) {
  //     hero.changeAnimation(label + "_south");
  //   }
  // } else {
  //   hero.attractionPoint(0.5, target.position.x, target.position.y);

  //   label = "run";
  //   if (target.position.x > hero.position.x) {
  //     hero.changeAnimation(label + "_east");
  //   } else if (target.position.x < hero.position.x) {
  //     hero.changeAnimation(label + "_west");
  //   }
  //   if (target.position.y < hero.position.y - hero.height) {
  //     hero.changeAnimation(label + "_north");
  //   } else if (target.position.y > hero.position.y + hero.height) {
  //     hero.changeAnimation(label + "_south");
  //   }



  // }



  // if (hero.overlapPoint(target.position.x, target.position.y)) {
  //   getTarget()
  // }
  // if(hero.position.x == target.x && hero.position.y == target.y){
  //   hero.setVelocity(0, 0);
  // }

  drawSprites();
  // explode_animation.drawFrame ( 1,  100,  100,  16,  16 );

  // show full sheet for example reference
  // image(sprite_sheet_image, 250, 40, 500, 154);
}

