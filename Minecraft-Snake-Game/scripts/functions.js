
console.log ("3");
//player 1 functions
function move(n){


    tester = position;
    tester += n;
     if (tester > 1024 || tester < 1){endGame(2);}
     else if ((tester - 1) % 32 == 0 && n == 1){endGame(2);}
     else if (tester % 32 == 0 && n == -1){endGame(2);}
     else if (trail1.includes(tester) || trail2.includes(tester)){endGame(2);}
     else if (tester == position2){}
     
     else{
    trail1.push(position);
    document.getElementById(position).className = "block pigTrace";
    position += n;
    document.getElementById(position).className = "block player";
    
    check();
    setTimeout(function(){ document.getElementById(trail1[0]).className = "block"; trail1.shift() }, (P1 * 200));
    }}



function startP1(){
    if (end == 'on'){}
    else{
    if (up == 1){ move(-32);}
    else if(down == 1){move(32);}
    else if(left == 1){move(-1);}
    else if(right == 1){move(1);}
    setTimeout(function(){ startP1() }, 200);}
    
    }
    
//player2 functions
function move2(n){
    
    tester2 = position2;
    tester2 += n;
     if (tester2 > 1024 || tester2 < 1){endGame(1);}
     else if ((tester2 - 1) % 32 == 0 && n == 1){endGame(1);}
     else if (tester2 % 32 == 0 && n == -1){endGame(1);}
     else if (trail1.includes(tester2) || trail2.includes(tester2) ){endGame(1);}
     else if (tester2 == position){ }
     
     else{
    trail2.push(position2);       
    document.getElementById(position2).className = "block sheepTrace";
    position2 += n;
    document.getElementById(position2).className = "block player2";
    check2();
    setTimeout(function(){ document.getElementById(trail2[0]).className = "block"; trail2.shift() }, (P2 * 200));
     ;}
    }
function startP2(){
    if (end == 'on') {}  
    else{
    if (W == 1){ move2(-32);}
    else if(S == 1){move2(32);}
    else if(A == 1){move2(-1);}
    else if(D == 1){move2(1);}
    setTimeout(function(){ startP2() }, 200);}
    }
    
    
    
    
    
    
//apple generation and point count.
function generate(){
    let random =Math.floor(Math.random() * 1024);
    
    if (trail1.includes(random) || trail2.includes(random) || random == position || random == position2 )
    {generate(); }  
    
    else {applePos = random;
      document.getElementById(random).className = "block apple";}
    }
function check(){
        //check if player1 reached apple
    if (position == applePos){P1++; generate(); document.getElementById("P1").innerHTML = P1;  }
    }
function check2(){
        //check if player2 reached apple
    if (position2 == applePos){P2++; generate(); document.getElementById("P2").innerHTML = P2; }
    }
    
    
    
    

    
// game over and reset.
function endGame(param){
     end = 'on';
     if (param == 1) { console.log("player 1 won!"); alert("player 1 won!")}
     else {console.log("player 2 won!"); alert("player 2 won!")}
    }    
function reset(){
    if (end == 'on'){
    document.getElementById(position2).className = "block";
    document.getElementById(position).className = "block";
    start = Math.floor(Math.random() * 1024);
    start2 = Math.floor(Math.random() * 1024);
    i1=0;
    i2=0;
    end = 'off';
    trail1 = [];
    trail2 = [];
    position = start;
    position2 = start2;
    document.getElementById(position).className = "block player";
    document.getElementById(position2).className = "block player2";
    check(); check2();
    P1 = 0; 
    P2 = 0;
    document.getElementById("P1").innerHTML = P1;
    document.getElementById("P2").innerHTML = P2;}
else{}
}      
console.log ("3");

