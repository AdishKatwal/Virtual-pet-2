//Create variables here
var dog, happyDog, dogImage, happyDogImage;
var database;
var foodS, foodStock;
foodS = 20;
var milk;
function preload()
{
   dogImage= loadImage("images/dogImg.png");
   happyDog = loadImage("images/dogImg1.png");
  milk = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(800, 700);
 
  database=firebase.database();
  dog = createSprite(400,350,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}
function draw() {  
  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
  fill("black");
  textSize(15);
  text("Press the Up Arrow to feed the dog", 270, 50);
  text("Food Remaining: " + foodS, 300, 200 );
}
function readStock(data){
  foodS=data.val();
  }
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
    })
}


