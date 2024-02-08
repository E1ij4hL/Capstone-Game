//import { Player } from './player.js';
import { Key } from './player.js';
import { InputHandler } from './input.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    //canvas.width = 500;
    //canvas.height = 500;
    canvas.width = 1040;
    canvas.height = 700;
    document.getElementById('result').innerHTML = 0;

    //added this, for saving level
    const myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));
    const gameLevel = myObjDeserialized.levelNum;

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.input = new InputHandler();

            this.aKey = new Key(this, this.input.keys);
            this.aKey.isAKey = true;

            this.dKey = new Key(this, this.input.keys);
            this.dKey.x = 320;
            this.dKey.isDKey = true;
            this.dKey.image = document.getElementById('dKey');

            this.jKey = new Key(this, this.input.keys);
            this.jKey.x = 560;
            this.jKey.isJKey = true;
            this.jKey.image = document.getElementById('jKey');

            this.lKey = new Key(this, this.input.keys);
            this.lKey.x = 800;
            this.lKey.isLKey = true;
            this.lKey.image = document.getElementById('lKey');

            //added this
            this.shooterKey = new Key(this, this.input.keys, gameLevel);
            this.shooterKey.y = 225;
            this.shooterKey.isShooterKey = true;
            this.shooterKey.image = document.getElementById('blank');
        }

        update(){
            this.aKey.update();
            this.dKey.update();
            this.jKey.update();
            this.lKey.update();

            //added this
            this.shooterKey.update();
        }

        draw(context){
            this.aKey.draw(context);
            this.dKey.draw(context);
            this.jKey.draw(context);
            this.lKey.draw(context);

            //added this
            this.shooterKey.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    
    //added this
    console.log(gameLevel);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
});