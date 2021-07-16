var test = document.getElementById("text");


function split(){
    //makes the 'put card on desk animation'
if(state == 'nothing'){
    state = "going";
    card5.classList = "card pos5";
    setTimeout(function(){card4.classList = "card pos4"}, 300);
    setTimeout(function(){card3.classList = "card pos3"}, 600);
    setTimeout(function(){card2.classList = "card pos2"}, 900);
    setTimeout(function(){card1.classList = "card pos1"}, 1200);
    setTimeout(function(){ solidificate() }, 2200);}
}
function solidificate(){
    
    //makes the card stay still (as if it was its own location, not the end of an animation.)

card5.classList = "card card5 ";
card4.classList = "card card4 ";
card3.classList = "card card3 ";
card2.classList = "card card2 ";
card1.classList = "card card1 ";
state = "turned";



}

function reveal(){
    //flips the cards.
if (state == "turned"){
    card1.classList = "card card1 flip";
    card2.classList = "card card2 flip";
    card3.classList = "card card3 flip";
    card4.classList = "card card4 flip";
    card5.classList = "card card5 flip";
    setTimeout(function(){content1.classList = "blank font " + skills[numbers[0]]; text1.innerHTML = skills_[numbers[0]];
content2.classList = "blank font " + skills[numbers[1]]; text2.innerHTML = skills_[numbers[1]];
content3.classList = "blank font " + skills[numbers[2]]; text3.innerHTML = skills_[numbers[2]];
content4.classList = "blank font "  + skills[numbers[3]]; text4.innerHTML = skills_[numbers[3]];
content5.classList = "blank font "+ skills[numbers[4]];  text5.innerHTML = skills_[numbers[4]];  }
, 500);
    
    setTimeout(function(){
        
        
    card1.classList = "card card1 flipped";
    card2.classList = "card card2 flipped";
    card3.classList = "card card3 flipped";
    card4.classList = "card card4 flipped";
    card5.classList = "card card5 flipped";
    state = "flipped";
    }, 1000)
    }}

function discart(){
    if (state == "flipped"){
    card1.classList = "card card1 flipped discarted";
    card2.classList = "card card2 flipped discarted";
    card3.classList = "card card3 flipped discarted";
    card4.classList = "card card4 flipped discarted";
    card5.classList = "card card5 flipped discarted";
    setTimeout(function(){
        card1.classList= "card";
        card2.classList= "card";
        card3.classList= "card";
        card4.classList= "card";
        card5.classList= "card";
        content1.classList="Back"; text1.innerHTML="";
        content2.classList="Back"; text2.innerHTML="";
        content3.classList="Back"; text3.innerHTML="";
        content4.classList="Back"; text4.innerHTML="";
        content5.classList="Back"; text5.innerHTML="";
        randomize();
        state= "nothing";
      }
    , 500);}
    else{}
}


function randomize(){
    numbers = [
    Math.floor(Math.random() * 18),
    Math.floor(Math.random() * 18),
    Math.floor(Math.random() * 18),
    Math.floor(Math.random() * 18),
    Math.floor(Math.random() * 18)]
    
       //loop that wil verify if there are equal numbers.
       function verify(){
       for ( let i = 0; i <= 4; i++){
           for ( let j = 0; j <= 4; j++){
            if ( i == j){}   
            else if ( numbers[i] == numbers[j]){
                   numbers[i] = Math.floor(Math.random() * 18); 
                   verify();
               }
           }
       }}verify();}
       randomize();
       
       console.log(numbers);