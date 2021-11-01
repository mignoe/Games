var canvas = document.getElementById("game");
canvas.height = 300;
canvas.width = 1000;
var ctx = canvas.getContext("2d");
var activeObstacle = [];

var gameState = "running";
var gameSpeed = 2000;

var points = 0;

//factory to the objects of the game
function gameObject(imgSource, x, y, width, height){
    let object = {};
    object.x = x;
    object.y = y;
    object.width = width;
    object.height = height;

    let img = new Image();
    img.src = imgSource;
    object.img = img;
    img.onload = function(){
        ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    } 
    object.newImagesrc = img.src.slice(0, -4) + "Broken" + img.src.slice(-4);
    return object;
}


//game objects

var player = new gameObject("Images/dino.png", 70, 240, 80, 60);
var cannonball = new gameObject("Images/cannonball.jpg", -10, 1000, 10, 10);
var reloadScreen = new gameObject("Images/Reload.jpg", 400, 50, 200, 200);
const obstacle = {
    1: { img: "Images/car.png",     x: 1000, y: 260, width: 50, height: 40},
    2: { img: "Images/train.png",   x: 1000, y: 270, width: 60, height: 30},
    3: { img: "Images/building.jpg",x: 1000, y: 265, width: 40, height: 35},
    4: { img: "Images/brickWall.jpg",x: 1000, y: 230, width: 25, height: 70}
}

//animations

var animations = {
    jump: function(time){
        if(player.y < 240){setTimeout(()=> ((time =! "second") ? jump("second") : "wait!"), 50); return 0}
        TweenMax.to(player, 0.35 ,{y:180, repeat: 1, yoyo:true})
    },
    ObstacleMovement: function(a){TweenMax.to(a, (gameSpeed/1000) + 0.2 ,{x: -60, ease: "linear"})},
    cannonballMovement: function(time){
        if(cannonball.x != 1100 && cannonball.x != -10){setTimeout(()=> ((time =! "second") ? fire("second") : "wait!"), 50); console.log("wait");return 0}
        cannonball.x = 145;
        cannonball.y = player.y + 31; 
        TweenMax.to(cannonball, 1.5 ,{x: 1100, ease: "linear"});
}
}

const jump = animations.jump;
const ObstacleMovement = animations.ObstacleMovement;
const fire = animations.cannonballMovement;


//inputs

const moves = {
    ArrowUp(){jump()},
    KeyF(){fire()}
}

document.addEventListener('keydown', move)

function move(command){
if (gameState == "lost"){return "lost";}
const keyPressed = command.code;
return moves[keyPressed]();
}


    
    
    function generateObstacle(){
        
        let random = Math.ceil(Math.random() * 4);
        let {img, x, y, width, height} = obstacle[random];
        
        activeObstacle[activeObstacle.length] = new gameObject(img, x, y, width, height);
        ObstacleMovement(activeObstacle[activeObstacle.length - 1]);
        
    }
    
    function verifyObstacleCollision(){
        activeObstacle.forEach(function(a){
            if(player.y +player.height >= a.y && player.x <= a.x && player.x + player.width >= a.x )
            {
                gameState = "lost";
                clearInterval(runGame);
                clearInterval(createObstacle);
                clearInterval(fastenGame);
                clearInterval(pointCount);
                reloadScreen.img.onload();
            }
        })
    }
    function verifyCannonCollision(){
       activeObstacle.map(function(a){
            
            if(cannonball.x >= a.x && cannonball.x <= a.x + a.width && cannonball.y + 10 > a.y){
                a.img.src = a.newImagesrc;
                a.height = 30;
                a.y = 280;
        }}
    
       )
    }


function game(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.img.onload();
    activeObstacle.map((a)=> a.img.onload())
    cannonball.img.onload();
    verifyCannonCollision();
    verifyObstacleCollision();
    ctx.font = "30px Arial";
ctx.fillText(points, 10, 50);
}
function reload(){
    var m = 2;
    if(gameState != "lost"){return 0;};
    activeObstacle = [];
    gameState = "running";
    points = 0;
    gameSpeed = 2000;
    createObstacle = setInterval(() => {generateObstacle()}, gameSpeed/2 + 500);
    runGame = setInterval(() => {game()}, 10);
    pointCount = setInterval(() => {points++}, 10);
    fastenGame = setInterval(()=>{gameSpeed--}, 50);
}
var createObstacle = setInterval(() => {generateObstacle()}, gameSpeed/2 + 500);
var runGame = setInterval(() => {game()}, 10);
var pointCount = setInterval(() => {points++}, 10);
var fastenGame = setInterval(()=>{gameSpeed--}, 50);



