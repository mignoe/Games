var player = document.getElementById("player");console.log("ok");
var container = document.getElementById("container");
var obstacles = [<div class="obstacles V0  Aproximate"></div>,<div class="obstacles V1 Aproximate"></div>,<div class="obstacles V2 Aproximate"></div>,<div class="obstacles V3 Aproximate"></div>]
var jumpState = "off";
var animSpeed = 2000;
var generationSpeed = 1000;
var points = 0;
var startState = 'off';

var interval1;
var interval2;
var interval3;
var interval4;
var interval5;

function jump(param) {
    if(jumpState == "off"){
        
        player.classList = "player jump";
        jumpState = "on"; 
        setTimeout( () => {resetPlayer()}, 500)
    }
    else if (param == 'second'){}
    else{
        setTimeout( () => {jump('second')}, 50);
    }
}

function resetPlayer(){
    if(jumpState === "ended"){player.classList ="player"}
    else {jumpState="off"; player.classList ="player"}
}

//function to check the key pressed and execute the action
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
   
    if (e.keyCode == '38'){jump(); start(); }
    
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
        [{left: '100%'},{left: '-50%'}], {duration: animSpeed, fill: "forwards"} );   
    obstacle.id="animated";  
    //delay to delete the "obstacle" after reached the end of the animation.
    setTimeout(()=>{obstacle.remove()}, animSpeed + 100)

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
    if (obstacleLeft < playerLeft + playerWidth && obstacleLeft + obstacleWidth > playerLeft && playerTop + playerHeight > obstacleTop)
    {
        container.classList.add("loseScreen");
        //removeAnimation();
        endGame(); 
 }
    else {checkImportance()}
}
//function that will check if the "obstacle has importance";
function checkImportance(){
    var obstacle = document.getElementById("animated");
    var obstacleLeft = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var obstacleWidth = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("width"));
    if (obstacleLeft + obstacleWidth < playerLeft){
        obstacle.id = "unimportant";

    }
}
//function that will end the game when the player loses.
function endGame(){
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    clearInterval(interval4);
    clearInterval(interval5);
    jumpState = "ended";
    startState = "ended"
    console.log("endGame");
    
}
//function that removes the animation of the obstacles and keep them stopped(to the player see what hit him).
function removeAnimation(){
   $("#player").stop(true, true).fadeIn();
   $("#animated").stop(true, true);
   console.log("remove");
}

function reset(){
    points = 0;
    generationSpeed = 2000;
    animSpeed = 2000;
    jumpState = "off";
    startState = "off";
    container.classList = "container";
   start();
};

function start() {
    if(startState == "off" ){
    console.log("started");
    startState = "on";
    interval1 = setInterval( () => {generate()}, generationSpeed);
    interval2 = setInterval( () => {checkDead()}, 10);
    interval3 = setInterval( () => {points++; document.getElementById("points").innerHTML=points}, 100);
    interval4 = setInterval( () => {animSpeed -= 1;}, 100);
    interval5 = setInterval( () => {generationSpeed -= 1;}, 100);
}}


