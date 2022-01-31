//John Egnatis 
//Photoloader script

var background = new Image();
background.src = "images/background.jpg"; //background image
background.onload = function(){
    ctx.drawImage(background,0,0);  
}

var gameOver = new Image();
gameOver.src = "images/gameover.png";
function drawGameOver(){
    ctx.drawImage(gameOver, canvas.width / 2 - gameOver.width / 2, 0)
}
var explosion = new Image();
explosion.src = "images/explosion.png";
function explode(){
    rover = explosion;
}
var youWin = new Image();
youWin.src = "images/youWin.png";

var spaceship = new Image();
spaceship.src = "images/spaceship.png"; //spaceship photo
var yShip = canvas.height / 2;
spaceship.onload = function() {
    ctx.drawImage(spaceship, -25, yShip);
}
function readyForLiftoff(){
    spaceship.src = "images/spaceshipTwo.png";
}

var arrow = new Image();
arrow.src = "images/arrow.png"
function drawArrow(){
    ctx.drawImage(arrow, -44 + (spaceship.width)/2, yShip * 3/4);
}

var astriodJPG = new Image();
astriodJPG.src = "images/astriod.png";

var roverOne = new Image();
roverOne.src = "images/rover.png";
var roverTwo = new Image();
roverTwo.src = "images/rover2.png";

var roverDirection = "right";
var rover = roverOne;

function changeDirection(str)
{
    roverDirection = str;
    if(roverDirection == "right")
        rover = roverOne;
    else
        rover = roverTwo;
}
function drawRover()
{   
    ctx.drawImage(rover, xPerson - 26, yPerson - 30)
}

function hitRover(x1, y1, r1)
{
    //drawHitboxes(x1,y1,r1); //to see hitboxes in vivo

    var hitboxes = [ [xPerson, yPerson, 12],
                     [xPerson - 16, yPerson + 9, 6],
                     [xPerson + 16, yPerson + 9, 6] ];

    for(let x = 0; x < 3; x++)
    {        
        var dist = (x1 - hitboxes[x][0]) * (x1 - hitboxes[x][0]) + (y1 - hitboxes[x][1]) * (y1 - hitboxes[x][1]); //distance between 2 circles squared
        var hit = dist < (hitboxes[x][2] + r1) * (hitboxes[x][2] + r1);
        if(hit)
            return true;
    }
    return false;
    
}

function drawHitboxes(x1,y1,r1){
    
        ctx.beginPath(); 
        ctx.arc(xPerson, yPerson, 12, 0, 2 * Math.PI) //half circle for top of thingy
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(xPerson - 16, yPerson + 9, 6, 0, 2 * Math.PI) //half circle for top of thingy
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(xPerson + 16, yPerson + 9, 6, 0, 2 * Math.PI) //half circle for top of thingy
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(x1, y1, r1, 0, 2 * Math.PI) //half circle for top of thingy
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();
        
}
