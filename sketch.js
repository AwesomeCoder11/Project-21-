var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1000,400);
  speed = random(223,321);
  thickness=random(22,83)
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(800,200,thickness,height/2);
bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  if (hasCollided(bullet, wall)) {
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
  bullet.velocityX = 0;

  if(damage>10) {
  
    wall.shapeColor = color(255,0,0);
  
  }


  if (damage<10) {
 
    wall.shapeColor = color(0,255,0);

  }

}

drawSprites();

}

function hasCollided(Lbullet, Lwall)
{

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if (bulletRightEdge>=wallLeftEdge)
{

return true

}

return false;

}