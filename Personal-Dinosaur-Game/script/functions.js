var player = document.getElementById("player");console.log("ok");
var container = document.getElementById("container");
var obstacles = [<div class="obstacles V0  Aproximate"></div>,<div class="obstacles V1 Aproximate"></div>,<div class="obstacles V2 Aproximate"></div>,<div class="obstacles V3 Aproximate"></div>]
var jumpState = "off";
var gameSpeed = 2000;
var playerBonus = 0;
var points = 0;


function jump() {
    if(jumpState == "off"){
        
        player.classList = "player jump";
        jumpState = "on"; 
        setTimeout( () => {jumpState="off"; player.classList ="player"}, 500)
    }
    
    else{
        console.log(jumpState);
    }
}
//function to check the key pressed and execute the action
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
   
    if (e.keyCode == '38'){jump()}
    
}
//function to generate the obstacles.
function generate(){
    var random = Math.floor(Math.random()* 4);
    var New = document.createElement("Obstacle");
   
    New.classList = "obstacles V"+[random];
    New.id = "obstacle";
    
    container.appendChild(New);
    animate();
  
}

//function that will animate the "obstacle" elements.
function animate(){
    var obstacle = document.getElementById("obstacle");
    obstacle.animate(
        [{left: '100%'},{left: '-50%'}], {duration: gameSpeed, fill: "forwards"} );   
    obstacle.id="animated";  
    //delay to delete the "obstacle" after reached the end of the animation.
    setTimeout(()=>{obstacle.remove()}, gameSpeed + 100)

}
 
//function to check if player lost.
var playerRight=parseFloat(window.getComputedStyle(player).getPropertyValue("right"));
var playerLeft=parseFloat(window.getComputedStyle(player).getPropertyValue("left"));
var playerWidth=parseFloat(window.getComputedStyle(player).getPropertyValue("width"));
var playerHeight=parseFloat(window.getComputedStyle(player).getPropertyValue("height"));

function checkDead(){
    var obstacle = document.getElementById("animated");
    var obstacleWidth = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("width"));
    var playerTop = parseFloat(window.getComputedStyle(player).getPropertyValue("top"));
    var obstacleLeft = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var obstacleTop = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("top"));
    if ( obstacleLeft < playerLeft + playerWidth && obstacleLeft + obstacleWidth > playerLeft && playerTop + playerHeight > obstacleTop  )
    {alert("perdeu"); }
    
}
//functions that will define if the block has passed or not by the play, if it has already passed,
//the function "checkDead()" will stop verifying this obstacle and jump to the next.

/*function checkImportance(){
    var obstacle = document.getElementById("animated");
    var obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    if (obstacleRight + playerWidth > playerRight ){
        obstacle.id = "unimportant";
    }
}*/
setInterval( () => {generate()}, gameSpeed)
setInterval( () => {checkDead()}, 10)
setInterval( () => {points++; document.getElementById("points").innerHTML=points}, 100)


console.log(obstacles);
