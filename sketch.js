var speed = 0;
var weight =0;
var deformation =0;
var flag = "Working"
var name = window.prompt("Please provide your name","Paakshik");
var kk = window.prompt("Press Y key to start the car");
var jj = window.prompt("Press up key to stop the test");
function preload(){
image1 = loadImage("image1.png")
image2 = loadImage("image2.png")
image3 = loadImage("image3.png")
image4 = loadImage("image4.png")
sound1 = loadSound('song1.mp3')
sound2 = loadSound('song2.mp3')
}
function setup() {
  createCanvas(800,400);
  car = createSprite(0,200,50,50);
  car.addImage(image3)
  car.debug = 1;
  car.scale = 0.5;
  wall = createSprite(730,200,20,300);
  wall.shapeColor = "red";
}

function draw() {
  background(0);  
  if (flag === "Working"){
 
  speed = random(55,90);
  weight = random(10,1500);
  if (keyWentDown("y")){
    sound2.play()
    car.x = 0;
    car.setCollider("circle",0,0,1)
    veler(car,speed);
    imager(car,image3)
 car.scale = 0.5;
  }
  deformation = Math.floor((0.5*weight*speed*speed)/22500)
  
  if (touched(wall,car)){
    sound1.play();
    console.log(`The deformation caused by the accident is ${deformation}`)
    if (deformation < 100){
      push();

      imager(car,image1)
     car.scale = 0.16;
     pop();
    }
    if (deformation > 100 && deformation < 180 ){
      push();
      
      imager(car,image4)
      car.debug = 1;
      car.scale = 0.2;
      pop();
    }
    if (deformation > 180){
      push();
     
      imager(car,image2)
      car.scale = 0.15;
      car.rotation = 0;
      pop();
    }
    veler(car,0);
car.x = 600;
if (deformation < 100){
  alert("It will cause no injuries")
}
if (deformation > 180){
  alert("It will cause major injuries")
}
if (deformation >100&&deformation <180){
  alert("It will cause minor injuries")
}
  }
  if (keyWentDown(UP_ARROW)){
flag = "STOP";
  }
}
  if (flag === "STOP"){
    if (keyWentDown(UP_ARROW)){
feedback = window.prompt("Please provide your feedack","abc");
alert(`Thank you for the feedback ${name}.`);
    }
    window.close();
  }
  drawSprites();

}
function touched(obj1,obj2){
if (abs(obj1.x - obj2.x < (obj1.width + obj2.width/2))){
return true;

}
return false;
}
function veler(name,speed){
name.velocityX = speed;

}
function scaler(name,size){
  name.velocityX = scale;
  
  }
  function imager(name,image){
name.addImage(image)

  }