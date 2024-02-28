export class Bullet{
    frameX = 0;
    frameY = 0;
    gameFrame = 0;
    staggerFrames = 20;

    constructor(x, speed, gameLevel){
        //this.x = 120;
        this.x = x;
        this.y = 25;
        //this.speed = 4; //this is usually 4, increase for more speed
        this.speed = speed;

        this.width = 80;
        this.height = 80; //normally 80
        this.color = "red";

        //this.image = document.getElementById('enemy1');

        //added this
        this.image1 = new Image();
        this.image1.src = 'assets/new ogre frames/Rock_Sprite.png';
        this.image2 = new Image();
        this.image2.src = 'assets/new ogre frames/Fireball_Spritesheet.png';

        //added this
        this.enemy1 = new Image();
        this.enemy1.src = 'assets/new ogre frames/Ogre_Frame1_Upscaled.png';
        this.enemy2 = new Image();
        this.enemy2.src = 'assets/new ogre frames/wizardDudeUpscaled.png';
        
        //added this
        this.gameLevel = gameLevel;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        //this.y -= this.speed;
        this.y += this.speed;
        //ctx.fillRect(this.x, this.y, this.width, this.height);

        //added this
        //ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);

        //added this
        if(this.gameLevel === 'level1'){
            ctx.drawImage(this.enemy1, 0, 0, 160, 160, this.x - 40, 25, 160, 160);
            ctx.drawImage(this.image1, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);

            if(this.gameFrame % this.staggerFrames == 0){
                if(this.frameX < 0){ //3 for fireball, 0 for rock (fireball has 4 frames, and rock has 1 frame)
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
        }

        if(this.gameLevel === 'level2'){
            ctx.drawImage(this.enemy2, 0, 0, 160, 160, this.x - 40, 25, 160, 160);
            ctx.drawImage(this.image2, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);

            if(this.gameFrame % this.staggerFrames == 0){
                if(this.frameX < 3){ //3 for fireball, 0 for rock (fireball has 4 frames, and rock has 1 frame)
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
        }

        //added this
        /*ctx.drawImage(this.enemy, 0, 0, 160, 160, this.x - 40, 25, 160, 160);
        ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);

        if(this.gameFrame % this.staggerFrames == 0){
            if(this.frameX < 3){ //3 for fireball, 0 for rock (fireball has 4 frames, and rock has 1 frame)
                this.frameX += 1;
            }
            else{
                this.frameX = 0;
            } 
        }
        
        this.gameFrame += 1;

        if(this.gameFrame > 20){
            this.gameFrame = 0;
        }*/
    }
}