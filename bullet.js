export class Bullet{
    frameX = 0;
    frameY = 0;
    gameFrame = 0;
    staggerFrames = 50; //normally 20
    gameNotPaused = true;

    //added this
    lowLimit = 0.0167;          // Keep At/Below 60fps
    highLimit = 0.1;            // Keep At/Above 10fps
    lastTime = Date.now();

    constructor(x, speed, gameLevel, bombOrLetter){
        //this.x = 120;
        this.x = x;
        this.y = 25;
        //this.speed = 4; //this is usually 4, increase for more speed
        this.speed = speed * 60;

        this.width = 80;
        this.height = 80; //normally 80
        this.color = "red";

        //this.image = document.getElementById('enemy1');

        //Loading the images for the targets
        this.image1 = new Image();
        this.image1.src = 'assets/new ogre frames/Rock_Sprite.png';
        this.image2 = new Image();
        this.image2.src = 'assets/new ogre frames/Fireball_Spritesheet.png';
        this.image3 = new Image();
        this.image3.src = 'assets/new ogre frames/Bone_Spritesheet.png';
        this.image3Alt = new Image();
        this.image3Alt.src = 'assets/new ogre frames/Bomb_Sprite.png';
        this.image4 = new Image();
        this.image4.src = 'assets/new ogre frames/Bat_Spritesheet3.png';

        //Loading the images for the enemies
        this.enemy1 = new Image();
        this.enemy1.src = 'assets/new ogre frames/Ogre_Frame1_Upscaled.png';
        this.enemy2 = new Image();
        this.enemy2.src = 'assets/new ogre frames/wizardDudeUpscaled.png';
        this.enemy3 = new Image();
        this.enemy3.src = 'assets/new ogre frames/Skeleton_Enemy4.png'; //was using Skeleton_Enemy3 or Skeleton_Enemy
        this.enemy4 = new Image();
        this.enemy4.src = 'assets/new ogre frames/Vampire_Enemy.png';
        this.enemy5 = new Image();
        this.enemy5.src = 'assets/new ogre frames/Portal_Enemy_Spritesheet.png';
        
        
        this.gameLevel = gameLevel;
        this.bombOrLetter = bombOrLetter;

        //added this
        this.letterBack = new Image();
        this.letterBack.src = 'assets/buttons images/Clear_Letter_Back.png';
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        //this.y -= this.speed;
        //this.y += this.speed;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        //ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);

        //added this
        var currentTime = Date.now();
        var deltaTime = (currentTime - this.lastTime) / 1000;
        if(deltaTime < this.lowLimit){
            deltaTime = this.lowLimit;
        }
        if(deltaTime > this.highLimit){
            deltaTime = this.highLimit;
        }
        this.lastTime = currentTime;

        if(document.getElementById('pausedState').innerText == 'resume'){
            this.y += this.speed * deltaTime; //modified this
        }
        else{
            this.y = this.y;
        }

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

        if(this.gameLevel === 'level3' && this.bombOrLetter != 1){
            ctx.drawImage(this.enemy3, 0, 0, 160, 160, this.x - 40, 25, 160, 160);
            ctx.drawImage(this.image3, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);

            if(this.gameFrame % this.staggerFrames == 3){
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

        if(this.gameLevel === 'level3' && this.bombOrLetter == 1){
            ctx.drawImage(this.enemy3, 0, 0, 160, 160, this.x - 40, 25, 160, 160);
            ctx.drawImage(this.image3Alt, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);

            if(this.gameFrame % this.staggerFrames == 3){
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

        if(this.gameLevel === 'level4'){
            ctx.drawImage(this.enemy4, 0, 0, 160, 160, this.x - 40, 25, 160, 160);
            ctx.drawImage(this.image4, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);

            if(this.gameFrame % this.staggerFrames == 0){
                if(this.frameX < 7){ //3 for fireball, 0 for rock (fireball has 4 frames, and rock has 1 frame)
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

        if(this.gameLevel === 'level5'){
            //ctx.drawImage(this.enemy5, 0, 0, 160, 160, this.x - 40, 25, 160, 160);

            ctx.fillStyle = this.color;
            //this.y += this.speed;
            //ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.letterBack, this.x, this.y, this.width, this.height);
            //ctx.font = '75px Arial';
            ctx.font = '53px press_start_2pregular';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText(this.bombOrLetter, this.x + 40, this.y + 40);
        }
    }
}