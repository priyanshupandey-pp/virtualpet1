//Create variables here
var dogim;
var addFood;
function preload()
{
 dogimg3=loadImage("images/dogimg.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dogim=createSprite(400,350,30,20)
  dogim.addImage("running",dogimg3)
  dogim.scale=0.3
}


function draw() {  
  background("green")
  drawSprites();
  
  addFood=createButtom("AddFood")
  addFood.position(800,95);
  addFood.mousePressed(addFoods)

  //add styles here
}



