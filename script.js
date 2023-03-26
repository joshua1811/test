var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var xChar = 0;


document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) { 
      move("left")
    }
    if (event.keyCode === 39) { // right arrow key
      move("right")
    }
    if (event.keyCode === 32) { // right arrow key
      // jump
      jump();
    }
});



function move(direction){
    if (direction == "left") {
      // Move the div 3 pixels to the left
      character.style.left = (xChar - 3) + 'px';
    }
    if (direction == "right") {
      // Move the div 3 pixels to the right
      character.style.left = (xChar + 3) + 'px';
    }
    xChar = parseInt(character.style.left);    
}


function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}



var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft-characterLeft<20 && blockLeft-characterLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        character.style.left = '0px';
        xChar = 0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

var checkWin = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>180){
        block.style.animation = "none";
        counter=0;
        character.style.left = '0px';
        block.style.animation = "block 1s infinite linear";
        alert("Congratulations, you won!");
    }
    else{return;}
}, 10);

