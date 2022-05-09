var forestimg,forest
var shinchanimg,shinchan
var invisibleground
var chocolateimg,chocolate
var sisterimg,sister
var momimg,mom
var obstaclegroup,chocolategroup
var bgsound

function preload(){
  forestimg = loadAnimation("forest.gif")
  shinchanimg = loadAnimation("shin1.png","shin2.png")
  chocolateimg = loadAnimation("shin.gif")
  sisterimg = loadAnimation("sister.gif")
  momimg = loadAnimation("mom2.png","mom3.png")
  bgsound = loadSound("bgsound.mp3")
}
function setup(){
  createCanvas(900,400) 
  forest = createSprite(450,200,900,400)
  forest.addAnimation("moving",forestimg)
  forest.scale=1.75

  shinchan = createSprite(78,298,20,20)
  shinchan.addAnimation("running",shinchanimg)

  sister = createSprite(397,203,20,20)
  sister.addAnimation("sister",sisterimg)
  sister.scale=0.8

  invisibleground=createSprite(450,380,900,20)
  invisibleground.visible=false
  obstaclegroup=createGroup()
  chocolategroup=createGroup()
  bgsound.play()

}
function draw(){ 
 background("blue") 

  if(keyDown("up") && shinchan.y>=120){
    shinchan.velocityY=-10
  }
  shinchan.velocityY=shinchan.velocityY+.8
  
  if(keyDown("down") && sister.y>=120){
    sister.velocityY=-10
  }
  sister.velocityY=sister.velocityY+.8


  shinchan.collide(invisibleground)
  sister.collide(invisibleground)
  spawnchocolate()
  spawnobstacles()
 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}
function spawnchocolate(){
  if(frameCount%200===0){
    chocolate=createSprite(837,304,20,20)
    chocolate.y=Math.round(random(99,284))
    chocolate.addAnimation("choclate",chocolateimg)
    chocolate.velocityX=-2
    chocolate.scale=0.2
    chocolategroup.add(chocolate)
  }

}
function spawnobstacles(){
  if(frameCount%280===0){
    mom=createSprite(815,272,20,20)
    mom.velocityX=-3
    mom.addAnimation("angry",momimg)
    obstaclegroup.add(mom)
    
  }
}
    
  