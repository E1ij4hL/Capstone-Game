export class Bullet{
    constructor(x, speed){
        //this.x = 120;
        this.x = x;
        this.y = 25;
        //this.speed = 4; //this is usually 4, increase for more speed
        this.speed = speed;

        this.width = 80;
        this.height = 80; //normally 85
        this.color = "red";

        this.image = document.getElementById('enemy');
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        //this.y -= this.speed;
        this.y += this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        //added this
        //ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}