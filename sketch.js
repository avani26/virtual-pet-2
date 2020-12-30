//Create variables here

var dog,Happydog;
var dogImg,HappydogImg;
var database;
var foodS,foodStock,milkbottle;


function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  HappydogImg=loadImage("images/dogImg1.png");
milkbottle=loadImage("images/Milk.png");

}

function setup() {
 database=firebase.database();

	createCanvas(500,500);
  
   dog=createSprite(250,250,30,40);
     dog.addImage(dogImg);
     dog.scale=0.5;

  

}

function draw() {  
background(rgb="46,139,87");

/*if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(HappydogImg);
}
*/
  drawSprites();
  textSize(30);
  text("FoodStock="+foodS,50,70);
  //add styles here

}





