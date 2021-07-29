var player = document.getElementById("player");console.log("ok");
var container = document.getElementById("container");
var obstacles = ['V0','V1','V2','V3','Wall']
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
   
    if (e.keyCode == '38' || e.keyCode == '87'){jump(); start(); }
    if (e.keyCode == '70'){shoot(); start(); }
    
}
//functions that will shoot the cannon.
function shoot(){
    var intervalShotChecker;
    if(jumpState == 'on'){}
    else{
    var Shot = document.createElement("div");
    Shot.classList = "roundShot"
    Shot.id = "roundShot";
    container.appendChild(Shot);
    setTimeout( () => {Shot.remove()}, 2000)}
    intervalShotChecker = setInterval(() => {checkShot()}, 10);
    setTimeout( () => {clearInterval(intervalShotChecker)}, 2000)
}
function startShotChecker() {
    
}
//function that will see if the shot hit the wall.
function checkShot(){
    var obstacle = document.getElementById("animated");
    var shot = document.getElementById("roundShot");
    if (obstacle == null){return 'null';}
    var shotLeft = parseFloat(window.getComputedStyle(shot).getPropertyValue("left"));
    var shotWidth = parseFloat(window.getComputedStyle(shot).getPropertyValue("width"));
    var shotTop = parseFloat(window.getComputedStyle(shot).getPropertyValue("top"));
    var shotHeight = parseFloat(window.getComputedStyle(shot).getPropertyValue("height"));
    var obstacleLeft = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var obstacleTop = parseFloat(window.getComputedStyle(obstacle).getPropertyValue("top"));
    if ( shotLeft + shotWidth >= obstacleLeft && obstacleTop <=  shotTop - shotHeight )
    {obstacle.remove(); shot.remove()}
    
}
//function to generate the obstacles.
function generate(){
    var random = Math.floor(Math.random()* 5);
    var New = document.createElement("div");
   
    New.classList = "obstacles "+ obstacles[random];
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
    if (obstacle == null){return 'null';}
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
    if (startState =='on'){return 'start is on'}
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


