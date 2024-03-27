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

    amountOfTargets = 0;
    totalTargets = 0;

    bulletValue = 0;

    //added this
    ensureBullet = 0;

    sendAnotherBullet = false;

    //added this
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    currentLetter = 'a';
    badLetter = false;

    constructor(canvas, y, keys, gameLevel){
        this.canvas = canvas;
        this.y = y;
        this.keys = keys;
        this.gameLevel = gameLevel;
    }

    shoot(){
        if(this.timerTillNextBullet <= 0){
            if(this.bullets.length < 2 && this.ensureBullet == 0){ //normally 1
                this.ensureBullet = 1;

                if(this.gameLevel === 'level1' && this.totalTargets < 20){ //normally 20
                    this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 4, this.gameLevel)); //normally 4
                    this.bulletValue = 1;
                }
                if(this.gameLevel === 'level2' && this.totalTargets < 30){
                    this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 6, this.gameLevel));
                    this.bulletValue = 1;
                }
                if(this.gameLevel === 'level3' && this.totalTargets < 15){
                    //this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 4, this.gameLevel));
                    var randomNum = Math.floor(Math.random() * 4); //give me a random number from 0 to 4
                    if(randomNum == 1){ //25% chance of pushing a bomb
                        var bomb = 1;
                        this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 5, this.gameLevel, bomb));
                        this.bulletValue = -1; //normally this is -1
                        this.amountOfTargets = this.amountOfTargets - 1;
                    }
                    else{ //push the normal projectile
                        this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 5, this.gameLevel));
                        this.bulletValue = 1;
                    }
                }
                if((this.gameLevel === 'level4') && this.totalTargets < 14){
                    //this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 2, this.gameLevel));
                    this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 3, this.gameLevel));
                    this.bulletValue = 1;
                }
                if(this.gameLevel === 'level5' && this.totalTargets < 20){ //normally 20
                    this.currentLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
                    this.bullets.push(new Bullet(this.xPositions[Math.floor(Math.random() * this.xPositions.length)], 3, this.gameLevel, this.currentLetter));
                    console.log(`just pushed a bullet ${this.currentLetter}`);
                    this.bulletValue = 1;
                }

                //this.beforeScore = this.score + 1;
                this.beforeScore = this.score + this.bulletValue;
            }
            //this.timerTillNextBullet = 7;
            this.timerTillNextBullet = 15;
        }
        this.timerTillNextBullet--;

        //Calculate the accuracy of the performed level and display to the user
        if(this.gameLevel === 'level1' && this.totalTargets === 20){ //normally 20
            var accuracyPercentage = this.score / this.amountOfTargets * 100;
            if(accuracyPercentage < 0){
                accuracyPercentage = 0;
            }

            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel1();

            document.getElementById('restartButton').style.display = 'inline'; //it can be inline or block, which ever looks better
        }

        if(this.gameLevel === 'level2' && this.totalTargets === 30){
            var accuracyPercentage = this.score / this.amountOfTargets * 100;
            if(accuracyPercentage < 0){
                accuracyPercentage = 0;
            }

            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel2();

            document.getElementById('restartButton').style.display = 'inline'; //it can be inline or block, which ever looks better
        }

        if(this.gameLevel === 'level3' && this.totalTargets === 15){
            var accuracyPercentage = this.score / this.amountOfTargets * 100;
            if(accuracyPercentage < 0){
                accuracyPercentage = 0;
            }

            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel3();

            document.getElementById('restartButton').style.display = 'inline'; //it can be inline or block, which ever looks better
        }

        if(this.gameLevel === 'level4' && this.totalTargets === 15){
            var accuracyPercentage = this.score / this.totalTargets * 100;
            if(accuracyPercentage < 0){
                accuracyPercentage = 0;
            }

            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel4();

            document.getElementById('restartButton').style.display = 'inline'; //it can be inline or block, which ever looks better
        }

        if(this.gameLevel === 'level5' && this.totalTargets === 20){ //normally 20
            var accuracyPercentage = this.score / this.amountOfTargets * 100;
            if(accuracyPercentage < 0){
                accuracyPercentage = 0;
            }

            accuracyPercentage = accuracyPercentage.toFixed(2);
            var grade = new Grade(accuracyPercentage);
            grade.calculate();
            var levelGrade = grade.grade;
            document.getElementById('result').innerHTML = accuracyPercentage.toString() + '%' + ' (' + levelGrade + ')';
            var mySavedScore = new SaveScore(accuracyPercentage, levelGrade);
            mySavedScore.saveScoreLevel5();

            document.getElementById('restartButton').style.display = 'inline'; //it can be inline or block, which ever looks better
        }
    }

    draw(ctx){
        this.bullets.forEach((bullet) => {
            //if(this.isBulletOffScreen(bullet) || this.isA || this.isD || this.isJ || this.isL){
            if(this.isBulletOffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
                this.beforeScore = 0;
                this.isA = false;
                this.isD = false;
                this.isJ = false;
                this.isL = false;

                this.badA = false;
                this.badD = false;
                this.badJ = false;
                this.badL = false;

                this.amountOfTargets += 1;
                this.totalTargets += 1;

                //added this
                this.ensureBullet = 0;

                //added this
                this.badLetter = false;
            }

            else{
                if(this.timerTillNextBullet <= 0){
                    //this.collision(bullet)
                    if(this.gameLevel != 'level5'){
                        this.collision(bullet);
                    }
                    else{
                        this.gameModeCollision(bullet);
                    }
                }
            }

            if(this.isBulletOffScreen(bullet)){
                //correctSound.play();
                missSound.pause();
                missSound.currentTime = 0;
                missSound.play();
            }
            
            bullet.draw(ctx);
        });
    }

    isBulletOffScreen(bullet){
        //return bullet.y <= -bullet.height + 200;
        return bullet.y >= this.canvas.height - 0; //before it was - 200
    }

    resetStuff(bullet){
        hitSound.pause();
        hitSound.currentTime = 0;
        hitSound.play();
        const index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
        this.score = this.beforeScore;
        this.ensureBullet = 0;
        this.beforeScore = 0;
        this.badA = false;
        this.badD = false;
        this.badJ = false;
        this.badL = false;
        this.amountOfTargets += 1;
        this.totalTargets += 1;

        //this.score += 1; //already calculating the score with beforeScore (using value of bullet)

        //added this
        this.badLetter = false;
    }

    collision(bullet){
        if(bullet.y >= this.y && bullet.y <= this.y + 90 && bullet.x === this.xPositions[0] && this.keys.includes('a') && !this.badA 
        && document.getElementById('pausedState').innerText == 'resume'){ //normally 75 not 90
            //console.log("YES!, it just hit A");
            //this.score = this.beforeScore;
            this.isA = true;

            this.resetStuff(bullet);
        }

        if(bullet.y >= this.y && bullet.y <= this.y + 90 && bullet.x === this.xPositions[1] && this.keys.includes('d') && !this.badD 
        && document.getElementById('pausedState').innerText == 'resume'){
            //console.log("YES!, it just hit D");
            //this.score = this.beforeScore;
            this.isD = true;

            this.resetStuff(bullet);
        }

        if(bullet.y >= this.y && bullet.y <= this.y + 90 && bullet.x === this.xPositions[2] && this.keys.includes('j') && !this.badJ 
        && document.getElementById('pausedState').innerText == 'resume'){
            //console.log("YES!, it just hit J");
            //this.score = this.beforeScore;
            this.isJ = true;

            this.resetStuff(bullet);
        }

        if(bullet.y >= this.y && bullet.y <= this.y + 90 && bullet.x === this.xPositions[3] && this.keys.includes('l') && !this.badL 
        && document.getElementById('pausedState').innerText == 'resume'){
            //console.log("YES!, it just hit L");
            //this.score = this.beforeScore;
            this.isL = true;

            this.resetStuff(bullet);
        }

        //added this
        if(bullet.y <= 476 && bullet.y >= 400 && bullet.x === this.xPositions[0] && this.keys.includes('a')){
            this.badA = true;
        }

        if(bullet.y <= 476 && bullet.y >= 400 && bullet.x === this.xPositions[1] && this.keys.includes('d')){
            this.badD = true;
        }

        if(bullet.y <= 476 && bullet.y >= 400 && bullet.x === this.xPositions[2] && this.keys.includes('j')){
            this.badJ = true;
        }

        if(bullet.y <= 476 && bullet.y >= 400 && bullet.x === this.xPositions[3] && this.keys.includes('l')){
            this.badL = true;
        }
        
        if(this.gameLevel === 'level4' && this.amountOfTargets < 100){ //it was 8 before
            if(bullet.y <= 400 && bullet.y >=350){
                this.ensureBullet = 0;
            }
        }

        document.getElementById('result').innerHTML = this.score;
    }

    gameModeCollision(bullet){
        if(bullet.y >= this.y && bullet.y <= this.y + 100 && this.keys.includes(this.currentLetter) && !this.badLetter){
            //this.addToScore = true;
            console.log('this worked');
            //if(this.addToScore){
                //this.score += 1;
                //this.addToScore = false;
            //}
            //this.addToScore = false;
            this.resetStuff(bullet);
        }

        if(bullet.y <= 495 && bullet.y >= 450 && this.keys.includes(this.currentLetter)){
            this.badLetter = true;
        }

        document.getElementById('result').innerHTML = this.score;
    }
}