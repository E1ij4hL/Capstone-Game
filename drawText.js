export class TextHandler{
    constructor(canvas, keys, gameLevel){
        this.canvas = canvas;
        this.keys = keys;
        this.gameLevel = gameLevel;
        this.exitImage = new Image();
        this.exitImage.src = 'assets/buttons images/Exit_Button.png';
        this.restartImage = new Image();
        this.restartImage.src = 'assets/buttons images/Restart_Button.png';
        this.soundImage = new Image();
        this.soundImage.src = 'assets/buttons images/Sound_Button_On.png'
        this.hoverExitButton = 0;
        this.hoverRestartButton = 0;
        this.hoverSoundButton = 0;
    }

    draw(ctx){
        //This is for drawing the score at the top of the game screen
        ctx.font = '75px press_start_2pregular';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.strokeStyle='white';
        var myText = document.getElementById('result').innerText;
        ctx.fillText(myText, 520, 60);
        ctx.lineWidth = 2.5;
        ctx.strokeText(myText, 520, 60);
        ctx.lineWidth = 1;

        //This is for drawing the text that tells you which button to press
        if(document.getElementById('pressToStart').innerText == 'w'){
            //hello
        }
        else{
            ctx.font = '50px press_start_2pregular';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'white'; //was yellow
            //ctx.globalAlpha = 1; //was 0.75
            var playText = 'Press W to Start';
            ctx.fillText(playText, 520, 250);
            ctx.strokeText(playText, 520, 250);
            //ctx.globalAlpha = 1;
        }

        //This is for drawing the pause menu within the game
        if (document.getElementById('pausedState').innerText == 'resume'){
            this.hoverExitButton = 0;
            this.hoverRestartButton = 0;
        }
        else{
            ctx.fillStyle = 'white'; //was white
            ctx.globalAlpha = 0.6;
            //ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillRect(75, 75, this.canvas.width - 150, this.canvas.height - 150); //was 100, 100, then on the - 200
            ctx.globalAlpha = 1;
            ctx.strokeStyle = 'black';
            ctx.strokeRect(75, 75, this.canvas.width - 150, this.canvas.height - 150); //was 100, 100, then on the - 200

            ctx.font = '100px press_start_2pregular';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            var pauseText = 'paused';
            ctx.fillText(pauseText, 520, 135); //was 500, 300, was also 250 (instead of 300)
            
            //Draw exit button, restart button, and sound button in pause menu
            ctx.drawImage(this.exitImage, 150, 400, 320, 160);
            ctx.drawImage(this.restartImage, 570, 400, 320, 160);
            ctx.drawImage(this.soundImage, 150, 220, 320, 160);


            //If you are over exit button then make it avaible to go to level select screen
            var xPositionText = document.getElementById('positionX').innerText;
            var yPositionText = document.getElementById('positionY').innerText;
            var xPositionNum = parseFloat(xPositionText);
            var yPositionNum = parseFloat(yPositionText);
            var realWidthText = document.getElementById('canvasRealWidth').innerText;
            var realHeightText = document.getElementById('canvasRealHeight').innerText;
            var realWidthNum = parseFloat(realWidthText);
            var realHeightNum = parseFloat(realHeightText);
            //if(xPositionNum >= 50 && xPositionNum <= 370 && yPositionNum >= 400 && yPositionNum <= 560){
            if(xPositionNum >= (realWidthNum * 0.1442308) && xPositionNum <= (realWidthNum * 0.4519231)
            && yPositionNum >= (realHeightNum * 0.5714286) && yPositionNum <= (realHeightNum * 0.8)){
                this.hoverExitButton = 1;
                this.exitImage.src = 'assets/buttons images/Exit_Button_Hover.png';
            }
            else{
                this.hoverExitButton = 0;
                this.exitImage.src = 'assets/buttons images/Exit_Button.png';
            }

            //if(xPositionNum >= 650 && xPositionNum <= 970 && yPositionNum >= 400 && yPositionNum <= 560){
            if(xPositionNum >= (realWidthNum * 0.5480869) && xPositionNum <= (realWidthNum * 0.8557692)
            && yPositionNum >= (realHeightNum * 0.5714286) && yPositionNum <= (realHeightNum * 0.8)){
                this.hoverRestartButton = 1;
                this.restartImage.src = 'assets/buttons images/Restart_Button_Hover.png';
            }
            else{
                this.hoverRestartButton = 0;
                this.restartImage.src = 'assets/buttons images/Restart_Button.png';
            }

            if(xPositionNum >= (realWidthNum * 0.1442308) && xPositionNum <= (realWidthNum * 0.4519231)
            && yPositionNum >= (realHeightNum * 0.3142857) && yPositionNum <= (realHeightNum * 0.5428571)){
                this.hoverSoundButton = 1;
                //this.soundImage.src = 'assets/buttons images/Sound_Button_On_Hover.png';
                if(document.getElementById('canvasSound').innerText == 'Sound Playing'){
                    this.soundImage.src = 'assets/buttons images/Sound_Button_On_Hover.png';
                }
                else{
                    this.soundImage.src = 'assets/buttons images/Sound_Button_Off_Hover.png';
                }
            }
            else{
                this.hoverSoundButton = 0;
                //this.soundImage.src = 'assets/buttons images/Sound_Button_On.png';
                if(document.getElementById('canvasSound').innerText == 'Sound Playing'){
                    this.soundImage.src = 'assets/buttons images/Sound_Button_On.png';
                }
                else{
                    this.soundImage.src = 'assets/buttons images/Sound_Button_Off.png';
                }
            }



            //Exit button: x is 4.80769% (left) of the total width and 35.57692% (right), y is 57.14286% (top) of the total height and 80% (bottom)
            //Restart button: x is 62.5% (left) of the total width and 93.26923% (right), y is 57.14286% (top) of the total height and 80% (bottom)

            //Exit button: x stuff - 0.1442308 (left) and 0.4519231 (right), y stuff - 0.5714286 (top) and 0.8 (bottom)
            //Restart button: x stuff - 0.5480869 (left) and 0.8557692 (right), y stuff - 0.5714286 (top) and 0.8 (bottom)
            //Sound button: x stuff - 0.1442308 (left) and 0.4519231 (right), y stuff - 0.3142857 (top) and 0.5428571 (bottom)

        }
        document.getElementById('canvasExitButton').innerHTML = this.hoverExitButton;
        document.getElementById('canvasRestartButton').innerHTML = this.hoverRestartButton;
        document.getElementById('canvasSoundButton').innerHTML = this.hoverSoundButton;
    }
}