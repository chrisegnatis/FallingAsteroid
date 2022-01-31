//John Egnatis
//Javascript for Diamond can

var diamondPhoto = new Image(); 
diamondPhoto.src = "images/diamond.png"; //gas photo

var numberOfDiamond = 0; //counter for how much gas has been picked up
var winCondition = 15; //win condition

var startingY = canvas.height - 120;  //highest point for y
var randomY = Math.random() * (125 - 40) + startingY; //random starting y   
var randomX = Math.random() * (canvas.width - 170) + 150; //random starting xvar waitToDrawDiamond = false;

var numberToWait = 100;
var timeWaited = numberToWait;
var waitToDrawDiamond = false;

function drawCounter(){
    ctx.font = "24px Comic Sans MS";
    ctx.fillStyle = "#a6fd7a";
    var string = numberOfDiamond + " / " + winCondition;
    ctx.fillText(string, canvas.width - (6 * string.length), 24);
}

function hasEnoughDiamond(){
    return winCondition <= numberOfDiamond;
}

function setDiamondLocation() //set a new starting point for gas
{
    startingY = canvas.height - 120;  //highest point for y
    randomY = Math.random() * (canvas.height - diamondPhoto.height - startingY) + startingY; //random starting y   
    randomX = Math.random() * (canvas.width - 150 - diamondPhoto.width) + 150; //random starting x
}

function drawDIamond(){ //draw the gas
     
    if(waitToDrawDiamond){
        if(timeWaited == 0)
        {
            waitToDrawDiamond = false;
            timeWaited = numberToWait;
        }
        else
            timeWaited--;
    }
    else
    {
        ctx.drawImage(diamondPhoto, randomX, randomY);
        //was it picked up : check hitboxes
        var halfWidth = diamondPhoto.width / 2; //8
        var halfHeight = diamondPhoto.height / 2; //25
        if(hitRover(randomX + halfWidth, randomY + halfHeight, halfWidth/3)){ //upper quarter
        //if hit, add to count and make new gas    
            setDiamondLocation();
            numberOfDiamond++;
            waitToDrawDiamond = true;
        }
    }
}
