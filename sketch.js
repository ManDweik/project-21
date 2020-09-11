var bullet,wall;
var speed,weight,thickness;
var deformation,damage;


function setup() {
  createCanvas(1600,400);
 


  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);



speed=random(223,321);
weight=random(30,52);


  

  
  bullet=createSprite(50,200,50,10);

  bullet.velocityX=speed;


}


function draw() {
  background(0);  

  bullet.shapeColor="white";
  wall.shapeColor=(80,80,80);

if (wall.x - bullet.x  < wall.width/2 + bullet.width/2){

  damage=5.0*weight*speed*speed/(thickness*thickness*thickness)


  bullet.velocityX=0;

}
if (damage<10){

  wall.shapeColor="gteen";

}
else if (damage>=10){
  wall.shapeColor="red";
}

  drawSprites();
  




}