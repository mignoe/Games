document.onkeydown = checkKey;
function checkKey(e) {

  e = e || window.event;
  if (e.keyCode == '38') {
  if(i1==0){
   
    
    i1=1; 
    up== true;
    down=0;
    left=0;
    right=0;startP1();
    }
    else{ 
      if (down == 1){}
      else{
    up=1;
    down=0;
    left=0;
    right=0;}
    }
      // up arrow
  }
  if (e.keyCode == '40') {
    
    if(i1==0){i1=1;  
    up=0;
    down=1;
    left=0;
    right=0;
    startP1();}
    else{
      if (up == 1){}
      else{
    up=0;
    down=1;
    left=0;
    right=0;}
    }
      // down arrow
      
  }
  if (e.keyCode == '37') {
    if(i1==0){i1=1;  
    up=0;
    down=0;
    left=1;
    right=0;
    startP1();}
    else{
      if (right == 1){}
      else{
    up=0;
    down=0;
    left=1;
    right=0;}
    }
    
     // left arrow
  }
  if (e.keyCode == '39') {
    if(i1==0){i1=1;  
    up=0;
    down=0;
    left=0;
    right=1;
    startP1();}
    else{
      if (left == 1){}
      else{
    up=0;
    down=0;
    left=0;
    right=1;}
    }
    
     // right arrow
  }

  if (e.keyCode == '87') {
    if(i2==0){i2=1;  
    W=1;
    S=0;
    A=0;
    D=0;
    startP2();}
    else{
      if (S == 1){}
      else{
    W=1;
    S=0;
    A=0;
    D=0;}
    }
      // up arrow
  }
  if (e.keyCode == '83') {
    if(i2==0){i2=1;  
    W=0;
    S=1;
    A=0;
    D=0;
    startP2();}
    else{
      if (W == 1){}
      else{
    W=0;
    S=1;
    A=0;
    D=0;}
    }
      // down arrow
  }
  if (e.keyCode == '65') {
    if(i2==0){i2=1;  
    W=0;
    S=0;
    A=1;
    D=0;
    startP2();}
    else{
      if (D == 1){}
      else{
    W=0;
    S=0;
    A=1;
    D=0;}
    }
     // left arrow
  }
  if (e.keyCode == '68') {
    if(i2==0){i2=1;  
    W=0;
    S=0;
    A=0;
    D=1;
    startP2();}
    else{
      if (A == 1){}
      else{
    W=0;
    S=0;
    A=0;
    D=1;}
    }
     // right arrow
  }

}
console.log ("4");