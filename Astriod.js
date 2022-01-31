//John Egnatis
//astriod class

class Astriod{

    constructor(level) {
        this.xAstriod = canvas.width * Math.random(); //start at random point at top of canvas
        this.rAstriod = 20; // random size aprox. level/2 + 10
        this.yAstriod = this.rAstriod * -1; // start at top of canvas.. out of sight
        this.fallSpeed = level * Math.random() + 1 // fallspeed is random... leve/2 + 2
        this.currentAstriodY = this.yAstriod; //current location
        this.done = false; //if hit ground
        this.hitboxBuffer = 5;
        this.dangerCounter = this.hitboxBuffer;
    }//end of const.

    setX(x) {
        this.xAstriod = x;
    }

    drawAstriod(){

        ctx.drawImage(astriodJPG, this.xAstriod - this.rAstriod, this.currentAstriodY - this.rAstriod);
        //draw astriod
    
        this.currentAstriodY += this.fallSpeed; //see if astriod is out of canvas
        if(this.currentAstriodY > canvas.height)
            this.done = true;
    }

    isDone(){ //return value of done
        return this.done; 
    }

    hitRover(){ //check hitboxes
        var hit = hitRover(this.xAstriod, this.currentAstriodY, this.rAstriod);
        if(hit) //check if any one was hit
        {
            this.dangerCounter--; //if was hit for 3 consequitive times
            if(this.dangerCounter <= 0)
                return true;
            else return false;
        }
        else{
            this.dangerCounter = this.hitboxBuffer; //reset buffer
            return false;
        }
    }
    
}