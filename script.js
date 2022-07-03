var screen = 0;

var y = -20

var x = 200

var speed = 2

var score = 0

function setup() {
createCanvas(innerWidth, innerHeight);
}

function startScreen(){
background(96, 157, 255);
fill(255)
textAlign(CENTER)
textSize(100)
text("WELCOME TO PADDLE CATCH", innerWidth / 2, innerHeight-innerHeight+300)
text("Click to start", innerWidth / 2, innerHeight-innerHeight+800)
  score = 0
  y = -20
  x = 200;
  speed = 2;
}

function gameOn(){
  background(0)
  fill(255)
  text("SCORE- "+ score, 30, 20)
  
  rectMode(CENTER)
  
  rect(mouseX, height-10, 50, 30)
  
  ellipse(x, y, 20, 20)
  
  y = y+speed
  
  if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
    score = score+1;
    
    speed = speed + 0.5
    
    y = -20;
    
    x = random(10, width)
  }
  
  if (y > height) {
    screen = 2
  }
}

function endScreen(){

 // Background
background(150)
// Align Center text
textAlign(CENTER);
// Text display with score
text('GAME OVER', width / 2, height / 2)
text("SCORE = " + score, width / 2, height / 2 + 20)
text('Click to Play Again', width / 2, height / 2 + 40);
  
}

function mouseClicked(){
if(screen == 0){
screen = 1
}
else if(screen == 2){
screen = 0
}
}

function draw() {
if(screen == 0){
startScreen();
}else if(screen == 1){
gameOn();
}else{
endScreen();
}
}