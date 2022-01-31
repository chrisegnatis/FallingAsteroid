//John Egnatis
//inverval code and handlers for input

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var enterPressed = false;

document.addEventListener("keydown", keyDownHandler, false) //handle key down
document.addEventListener("keyup", keyUpHandler, false) // handle key up
function keyDownHandler(e) { // function for key down
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "D" || e.key == "d"){
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "A" || e.key == "a"){
        leftPressed = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp" || e.key == "W" || e.key == "w"){
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown" || e.key == "S" || e.key == "s"){
        downPressed = true;
    }
    if(e.key == "Enter"){
        enterPressed = true;
    }
}
function keyUpHandler(e) { //function for key up 
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "D" || e.key == "d"){
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "A" || e.key == "a"){
        leftPressed = false;
    }
    if(e.key == "Up" || e.key == "ArrowUp" || e.key == "W" || e.key == "w"){
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown" || e.key == "S" || e.key == "s"){
        downPressed = false;
    }
    if(e.key == "Enter"){
        enterPressed = false;
    }
}


var interval = setInterval(start, 10);

