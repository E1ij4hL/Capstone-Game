//import { Player } from './player.js';
import { Key } from './player.js';
import { InputHandler } from './input.js';
import { TextHandler } from './drawText.js';
import { SeperatePlayer } from './seperatePlayer.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    //canvas.width = 500;
    //canvas.height = 500;
    canvas.width = 1040;
    canvas.height = 700;
    document.getElementById('result').innerHTML = 0;

    //For loading levels
    const myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));
    const gameLevel = myObjDeserialized.levelNum;

    //Loading the backgrounds for each of the levels
    if(gameLevel === 'level1'){
        canvas.style.backgroundImage = "url('assets/backgrounds/testOrcBackground4.png')";
    }
    if(gameLevel === 'level2'){
        canvas.style.backgroundImage = "url('assets/backgrounds/testCastleBackground4.png')";
    }
    if(gameLevel === 'level3'){
        canvas.style.backgroundImage = "url('assets/backgrounds/testSkeletonBackground5.png')";
    }
    if(gameLevel === 'level4'){
        canvas.style.backgroundImage = "url('assets/backgrounds/testVampireBackground3.png')";
    }
    if(gameLevel === 'level5'){
        canvas.style.backgroundImage = "url('assets/backgrounds/testPortalBackground8.png')";
    }

    //Seeing if the player is hovering over and clicking on the pause menu
    canvas.addEventListener('mousemove', (event) => {
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        //display mouse position
        this.document.getElementById('positionX').innerHTML = x.toFixed(2);
        this.document.getElementById('positionY').innerHTML = y.toFixed(2);
    });

    canvas.addEventListener('click', (event) => {
        //if mouse is hovering over exit button and click happens then return to the level select;
        if(this.document.getElementById('canvasExitButton').innerText == '1'){
            this.window.location.href = 'level_select.html';
        }
        if(this.document.getElementById('canvasRestartButton').innerText == '1'){
            this.window.location.reload();
        }
    });

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.input = new InputHandler(gameLevel);

            this.textDraw = new TextHandler(this, this.input.keys, gameLevel);

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

            this.shooterKey = new Key(this, this.input.keys, gameLevel);
            this.shooterKey.y = 225;
            this.shooterKey.isShooterKey = true;
            this.shooterKey.image = document.getElementById('blank');

            //added this
            this.seperatePlayer = new SeperatePlayer(this, this.input.keys, gameLevel);
        }

        update(){
            this.aKey.update();
            this.dKey.update();
            this.jKey.update();
            this.lKey.update();
            this.shooterKey.update();

            //added this
            this.seperatePlayer.update();
        }

        draw(context){
            //added this
            if(gameLevel != 'level5'){
                this.aKey.draw(context);
                this.dKey.draw(context);
                this.jKey.draw(context);
                this.lKey.draw(context);
                this.shooterKey.draw(context);
            }
            else{
                this.seperatePlayer.draw(context);
            }

            this.textDraw.draw(context);

            //added this
            //console.log(canvas.getBoundingClientRect().width);
            document.getElementById('canvasRealWidth').innerHTML = canvas.getBoundingClientRect().width.toFixed(2);
            document.getElementById('canvasRealHeight').innerHTML = canvas.getBoundingClientRect().height;
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    console.log(gameLevel);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
});