var car, wall;

var speed, weight, deformation;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50, 200, 50, 50)
  car.shapeColor = 'green'
  wall = createSprite(700, 200, 60, height/2)
  wall.shapeColor = 'lightblue'



  speed  = random(55, 90)
  weight = random(400, 1500)

  wall.debug = true

  car.debug = true

}


function draw() {
  background(255, 255, 255);  
  
  //car.x = World.mouseX
  //car.y = World.mouseY
  
  //console.log(car.x - wall.x) 
  //console.log(car.y - wall.y) 
  
  car.velocityX = speed


  if(car.x - wall.x < wall.width/2 + car.width/2
     && car.y - wall.y < wall.height/2 + car.height/2
     && wall.x - car.x < wall.height/2 + car.height/2
     && wall.y - car.y < wall.height/2 + car.height/2){
      console.log('collided')
      
      deformation = (speed*speed*0.5*weight)/22500
      
      if(deformation<=80){
        car.shapeColor = 'green'
        car.velocityX = 0

      }
      
      if(deformation>=180){
        car.shapeColor = 'red'
        car.velocityX = 0

          
      }
      
      else{
        car.shapeColor = 'yellow'
        car.velocityX = 0
      }

  }
  
  

  drawSprites();
}

