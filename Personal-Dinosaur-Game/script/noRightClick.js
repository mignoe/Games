//this script don't let the players "right click" (or hold the image on mobile) the button images.
var message="Disabled!";

function clickIE(){
if (event.button==2){
return false;
}
}

function clickNS(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE;
}

document.oncontextmenu=new Function("return false")

