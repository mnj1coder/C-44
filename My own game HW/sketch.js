
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player;
var imgHuman;
var ImgPlayer,ImgMask,ImgSanitiser,ImgGlove,ImgCOVID;


function preload()
{
ImgPlayer = loadImage("images HW/Girl.png");
ImgSanitiser = loadImage("images HW/sanitiser.jpeg");
ImgGlove = loadImage("images HW/Gloves.jpeg");
ImgMask = loadImage("images HW/mask .jpeg");
ImgCOVID = loadImage("images HW/COVID-19.png");
ImgHuman = loadImage("images HW/other human.jpeg");
}

function setup() {
	createCanvas(800, 700);

	 player = createSprite(100,100,20,20);
	 player.addImage(ImgPlayer);
	 player.scale = .1;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  player.x = mouseX;
  player.y = mouseY;

  drawSprites();
 
}



