//John Egnatis
//start screen selection

var startImage = new Image();
startImage.src = "images/start.png";
function drawStart()
{
    ctx.drawImage(startImage, canvas.width / 2 - startImage.width/2, 0);   
    
} 

var difficulty = new Image();
difficulty.src = "images/Capture.PNG";
function drawDiff()
{
    ctx.drawImage(difficulty, canvas.width / 2 - difficulty.width / 2, canvas.height / 2 - difficulty.width / 2);
}

function drawDiffHighlight(lvl)
{
    // <0 easy, 1 med, 2 hard
    var offsett = lvl * difficulty.height / 3;
    ctx.beginPath();
    ctx.rect(canvas.width / 2 - difficulty.width / 2, canvas.height / 2 - difficulty.width / 2 + offsett, difficulty.width, difficulty.height / 3);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

function howToPlay(){
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "#2596be";
    ctx.textAlign = "center";
    var string = ["HOW TO PLAY", "-Use WASD or the arrow keys to move"
    ,"-Collect the diamonds that appear,","while avoiding the asteriods", "<Press ENTER to start>"];
    for(let x = 0; x < string.length; x++){
        ctx.fillText(string[x], canvas.width/2, 20 + 22 * x);
    }
}
function start(){
    //draw canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    background.onload(); //draw background
    spaceship.onload(); //draw spaceship
    drawStart(); //draw start
    howToPlay();
    if(enterPressed)
    {
        clearInterval(interval);
        interval = setInterval(main, 10);
    }
}






    


    
