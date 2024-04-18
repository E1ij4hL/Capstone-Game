export class Explosion{
    frameX = 0;
    frameY = 0;
    gameFrame = 0;
    staggerFrames = 20; //normally 20, was 50

    constructor(x){
        this.x = x;
        this.y = 475;
        this.width = 160;
        this.height = 160;
        this.explosionImage = new Image();
        this.explosionImage.src = 'assets/new ogre frames/Explosion_Spritesheet.png';
    }

    draw(ctx){
        ctx.drawImage(this.explosionImage, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        if(this.gameFrame % this.staggerFrames == 0){
            if(this.frameX < 4){
                this.frameX += 1;
            }
            else{
                this.frameX = 0;
            } 
        }
    
        this.gameFrame += 1;

        if(this.gameFrame > 20){
            this.gameFrame = 0;
        }

        //added this
        if(this.frameX == 4){
            document.getElementById('playExplosion').innerHTML = 'False'; //was False
        }
    }
}