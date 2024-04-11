import { BulletController } from "./bulletController.js";

export class SeperatePlayer{
    constructor(canvas, keys, gameLevel){
        this.canvas = canvas;
        this.keys = keys;
        this.gameLevel = gameLevel;
        this.y = 500;
        this.bulletController = new BulletController(this.canvas, this.y, this.keys, this.gameLevel);
        this.shootBullet = false;
    }

    update(){
        if(this.keys.includes('w')){ //was Control instead of w
            //this.bulletController.shoot();
            this.shootBullet = true;
        }
        if(this.shootBullet){
            this.bulletController.shoot();
        }
    }

    draw(ctx){
        ctx.fillStyle = 'rgb(44, 114, 245)'; //was white, also was using light green, also was using darkred, was also using purple
        //ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillRect(0, 500, this.canvas.width, 100);
        ctx.strokeStyle = 'black';

        this.bulletController.draw(ctx);
    }

}