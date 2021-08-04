var gameState="play";
var loc;
var hero,heroimg;
 var redGroup,blueGroup,greenGroup,pinkGroup;
 var lazarGroup,lazar;
 var redimg,blueimg,greenimg,pinkimg;
 var score=0;

function preload(){

  bg = loadImage("bg1.jpg");
  heroImg = loadImage("ship1.png");
  redImg = loadImage("red.png");
  greenImg = loadImage("green.png");
  pinkImg = loadImage("pink.png");
  blueImg = loadImage("blue.png");
  

}


function setup(){
hero=createSprite(30,300,50,50);
hero.addImage(heroImg);
hero.scale = 0.2;

loc=createSprite(0,320,800,50);
loc.visible=false;


redGroup = new Group;
  blueGroup = new Group;
  greenGroup = new Group;
  pinkGroup = new Group;
  lazarGroup = new Group;
  
}
function draw(){
background(bg);
if (gameState==="play"){


hero.x = World.mouseX
 
if  (keyWentDown ("space")){
  lazar();
} 


var select_mon = Math.round(random(1,4));
  console.log(select_mon)
if (World.frameCount % 100 === 0) {
  
  if (select_mon === 1) {

    redmonster();
  } else if (select_mon === 2) {
    greenmonster();
  } else if (select_mon === 3) {
    bluemonster();
  } else {
    pinkmonster();
  }
}
if(lazarGroup.isTouching(redGroup)){
  redGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+6 
}
 if(lazarGroup.isTouching(greenGroup)){
 greenGroup.destroyEach();
 lazarGroup.destroyEach();
  score= score+5
}
 if(lazarGroup.isTouching(blueGroup)){
  blueGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+3 
}
 if(lazarGroup.isTouching(pinkGroup)){
  pinkGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+3 
}
if (redGroup.isTouching(loc)){
 gameState="gameover";
}

if (greenGroup.isTouching(loc)){
  gameState="gameover";
 }

 if (blueGroup.isTouching(loc)){
  gameState="gameover";
 }

 if (pinkGroup.isTouching(loc)){
  gameState="gameover";
 }
 textSize(20);
 fill("red");
 text(score,10,30);
/*
lazar();
redmonster();
greenmonster();
bluemonster();
pinkmonster();
*/
}
if (gameState==="gameover"){
  textSize(50);
  fill("red");
  text("GAME OVER",10,200);
hero.visible=false;
}
drawSprites();
}
function lazar() {
  var lazar= createSprite(100, 100, 5, 15);
 lazar.x = hero.x;
 lazar.y=hero.y;
 lazar.velocityY = -4;
 lazar.lifetime = 100;
  lazar.shapeColor="red";
   lazarGroup.add(lazar);
   
}


function redmonster() {
  
  var red = createSprite(Math.round(random(20, 370)),0, 10, 10);
  red.addImage(redImg);
  red.velocityY = 3;
  red.lifetime = 100;
  red.scale = 0.2;
  redGroup.add(red)
}


function greenmonster() {
var green = createSprite(Math.round(random(20, 370)),0, 10, 10);
  green.addImage(greenImg);
  green.velocityY = 3;
  green.lifetime = 100;
  green.scale = 0.2;
  greenGroup.add(green)
}



function bluemonster() {
  var blue = createSprite(Math.round(random(20, 370)),0, 10, 10);
  blue.addImage(blueImg);
  blue.velocityY = 3;
  blue.lifetime = 100;
  blue.scale = 0.4;
  blueGroup.add(blue)
}



function pinkmonster() {
  var pink = createSprite(Math.round(random(20, 370)),0, 10, 10);
  pink.addImage(pinkImg);
  pink.velocityY = 3;
  pink.lifetime = 100;
 pink.scale = 0.3;
  pinkGroup.add(pink)
}

