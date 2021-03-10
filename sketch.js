var balloon;
var database,position;
function preload(){
     backgroundImg = loadImage("Images/bg.png");
     balloonImg = loadImage("Images/balloonImg.png");
}

function setup(){
    createCanvas(800,600);
    database = firebase.database();
    balloon = createSprite(250,250,10,10);
    balloon.addImage(balloonImg)
    scale(balloonImg,0.1)

    position = database.ref('ball/position')
    position.on("value",readposition,showerror);
}

function draw(){
    background(backgroundImg);
    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x - 10
    }
    else if(keyDown(RIGHT_ARROW)){
         balloon.x = balloon.x + 10
    }
    else if(keyDown(UP_ARROW)){
         balloon.y = balloon.y - 10
             }
    else if(keyDown(DOWN_ARROW)){
         balloon.y = balloon.y + 10
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ballon/position').set({
        'x': position.x + x,
        'y': position.y + y
     })
    
}

function readposition(data){
   position = data.val()
   ball.x = position.x
   ball.y = position.y 

}
 
 function showerror(){
    console.log("error")
 }