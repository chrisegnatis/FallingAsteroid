//John Egnatis
//Javascript code for drawing elements and for inverval function

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var xPerson = canvas.width / 5; //starting x
var yPerson = canvas.height - 50; //starting y
var yOffset = 25;
var xOffset = 26;
var speedOfHuman = 1.5; //speed of the human
var lev = 1; //level of astriod
var count = 0; //amount of astriods finished
var numStartingAstriods = 5; //num of starting astriod
var timeCounter = 0;

var astriods = []; 
for (let index = 0; index < numStartingAstriods; index++) {
    astriods.push(new Astriod(lev));   
}

var oneTime = false;
var won = false;
var lose = false;

function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    background.onload(); //draw background
    spaceship.onload(); //draw spaceship
    drawCounter();

    if(!lose){    
        if(!won) {

            if(!hasEnoughDiamond())
            {
                drawDIamond();
            }
            else
            {
                drawArrow();
                if(!oneTime)
                {
                    oneTime = true;
                    readyForLiftoff();
                }
                if(onSpaceShip())
                    won = true;
            }
            drawRover();

            //Move Person
            if(leftPressed) 
            {
                changeDirection("left");
                xPerson -= speedOfHuman; //move person left
                if(xPerson < xOffset) //out of bounds 
                    xPerson = xOffset
            }
            if(rightPressed)
            {    
                changeDirection("right");
                xPerson += speedOfHuman; //move person right
                if(xPerson > canvas.width - xOffset)
                    xPerson = canvas.width - xOffset;
            }
            if(upPressed) //move up
            {
                yPerson -= speedOfHuman;
                if(yPerson < canvas.height - 100)
                    yPerson = canvas.height - 100;
            }
            if(downPressed) //move down
            {
                yPerson += speedOfHuman;
                if(yPerson > canvas.height - yOffset)
                    yPerson = canvas.height - yOffset;
            }

        }
        else{
            xPerson = -1000;
            yPerson = -1000;
            yShip -= 1;
            if(yShip < 0)
                ctx.drawImage(youWin, 0, 0);
            timeCounter++;
            if(timeCounter > 800)
            {
                clearInterval(interval);
                document.location.reload();
            }
        }
    }
    else
    {
        drawRover();
        drawDIamond();
        drawGameOver();
        timeCounter++;
        if(timeCounter > 500)
        {
            clearInterval(interval);
            document.location.reload();
        }
    }
    
    //Generate Astriods
    for(let i = 0; i < astriods.length; i++) //draw, check hitboxes, and see if every astriod is done
    {
        astriods[i].drawAstriod() //draw astriod

        if(astriods[i].hitRover()){ //check hitbox
            
            lose = true;
            explode();
        }
        if(astriods[i].isDone()) { //see if astriod is done
            astriods[i] = new Astriod(lev);
            if(i == 0) //following astriod
                astriods[0].setX(xPerson);
            count++;
            if(count % 50 == 0) //every 50, add new astriod
            {
              lev += .1; //increse fallspeed 
              astriods.push(new Astriod(lev));
            }
        }
    }
}

function onSpaceShip() { //see if rover is on spaceship
    var xMid = spaceship.width/2 - 25;
    var yMid = - spaceship.height/2 + canvas.height;
    var rad = 15;

    if(hitRover(xMid, yMid, rad))
        return true;
}









