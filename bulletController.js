import { Bullet } from "./bullet.js";
import { Grade } from "./determineGrade.js";
import { SaveScore } from "./saveScore.js";

export class BulletController{
    bullets = [];
    timerTillNextBullet = 0;

    xPositions = [120, 360, 600, 840];

    score = 0;
    beforeScore = 0;

    isA = false;
    isD = false;
    isJ = false;
    isL = false;

    badA = false;
    badD = false;
    badJ = false;
    badL = false;

    //added this
    amountOfTargets = 0;

    constructor(canvas, y, keys, gameLevel){
        this.canvas = canvas;
        this.y = y;
        this.keys = keys;
        this.gameLevel = gameLevel;
    }

    shoot(){
        if(this.timerTillNextBullet <= 0){
            if(this.bullets.length < 1){
                //this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)]));
                //added this
                if(this.gameLevel === 'level1' && this.amountOfTargets < 20){ //normally 20
                    this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 4, this.gameLevel)); //normally 4
                }
                if(this.gameLevel === 'level2' && this.amountOfTargets < 30){
                    this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 6, this.gameLevel));
                }

                this.beforeScore = this.score + 1;
            }
            //this.timerTillNextBullet = 7;
            this.timerTillNextBullet = 15;
        }
        this.timerTillNextBullet--;
        
        //added this
        if(this.gameLevel === 'level1' && this.amountOfTargets === 20){ //normally 20
            var accuracyPercentage = this.score / this.amountOfTargets * 100;
            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';

            //added this
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel1();
        }

        if(this.gameLevel === 'level2' && this.amountOfTargets === 30){
            var accuracyPercentage = this.score / this.amountOfTargets * 100;
            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';

            //added this
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel2();
        }
    }

    draw(ctx){
        this.bullets.forEach((bullet) => {
            if(this.isBulletOffScreen(bullet) || this.isA || this.isD || this.isJ || this.isL){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
                this.beforeScore = 0;
                this.isA = false;
                this.isD = false;
                this.isJ = false;
                this.isL = false;

                //added this
                this.badA = false;
                this.badD = false;
                this.badJ = false;
                this.badL = false;

                //added this
                this.amountOfTargets += 1;
            }

            //added this
            else{
                if(this.timerTillNextBullet <= 0){
                    this.collision();
                }
            }
            
            bullet.draw(ctx);
        });
    }

    isBulletOffScreen(bullet){
        //return bullet.y <= -bullet.height + 200;
        return bullet.y >= this.canvas.height - 0; //normally - 200
    }

    collision(bullet){
        if(this.bullets[0].y >= this.y && this.bullets[0].y <= this.y + 90 && this.bullets[0].x === this.xPositions[0] && this.keys.includes('a') && !this.badA){ //normally 75 not 90
            console.log("YES!, it just hit A");
            console.log(this.bullets[0].x);
            this.score = this.beforeScore;
            this.isA = true;
            //correctSound.play();
            badSound.play();
        }

        if(this.bullets[0].y >= this.y && this.bullets[0].y <= this.y + 90 && this.bullets[0].x === this.xPositions[1] && this.keys.includes('d') && !this.badD){
            console.log("YES!, it just hit D");
            console.log(this.bullets[0].x);
            this.score = this.beforeScore;
            this.isD = true;
            //correctSound.play();
            badSound.play();
        }

        if(this.bullets[0].y >= this.y && this.bullets[0].y <= this.y + 90 && this.bullets[0].x === this.xPositions[2] && this.keys.includes('j') && !this.badJ){
            console.log("YES!, it just hit J");
            console.log(this.bullets[0].x);
            this.score = this.beforeScore;
            this.isJ = true;
            //correctSound.play();
            badSound.play();
        }

        if(this.bullets[0].y >= this.y && this.bullets[0].y <= this.y + 90 && this.bullets[0].x === this.xPositions[3] && this.keys.includes('l') && !this.badL){
            console.log("YES!, it just hit L");
            console.log(this.bullets[0].x);
            this.score = this.beforeScore;
            this.isL = true;
            //correctSound.play();
            badSound.play();
        }

        //added this
        if(this.bullets[0].y <= 476 && this.bullets[0].y >= 400 && this.bullets[0].x === this.xPositions[0] && this.keys.includes('a')){
            this.badA = true;
        }

        if(this.bullets[0].y <= 476 && this.bullets[0].y >= 400 && this.bullets[0].x === this.xPositions[1] && this.keys.includes('d')){
            this.badD = true;
        }

        if(this.bullets[0].y <= 476 && this.bullets[0].y >= 400 && this.bullets[0].x === this.xPositions[2] && this.keys.includes('j')){
            this.badJ = true;
        }

        if(this.bullets[0].y <= 476 && this.bullets[0].y >= 400 && this.bullets[0].x === this.xPositions[3] && this.keys.includes('l')){
            this.badL = true;
        }

        if(this.bullets[0].y >= this.canvas.height - 60){
            correctSound.play();
        }
        
        document.getElementById('result').innerHTML = this.score;
    }
}