import { BulletController } from "./bulletController.js";

//export class Player{
export class Key{
    constructor(game, keys, gameLevel, enemy){
        this.game = game;
        this.width = 160;
        this.height = 160;
        this.x = 80;
        this.y = 475;
        this.image = document.getElementById('aKey');

        this.isAKey = false;
        this.isDKey = false;
        this.isJKey = false;
        this.isLKey = false;

        //added this
        this.isShooterKey = false;

        this.keys = keys;

        this.gameLevel = gameLevel;

        this.enemy = enemy;

        this.bulletController = new BulletController(this.game, this.y, this.keys, this.gameLevel);
    }

    update(){
        //if (input.includes('a')) this.image = document.getElementById('aKeyPressed');
        //else this.image = document.getElementById('aKey');

        if (this.isAKey === true){
            //if (input.includes('a')){ //update used to accept input as an argument for this.input.keys from main.js, when calling update() in the update function
            if (this.keys.includes('a')){
                this.image = document.getElementById('aKeyPressed');
            }
            else{
                this.image = document.getElementById('aKey');
            }
        }

        if (this.isDKey === true){
            if (this.keys.includes('d')){
                this.image = document.getElementById('dKeyPressed');
            }
            else{
                this.image = document.getElementById('dKey');
            }
        }

        if (this.isJKey === true){
            if (this.keys.includes('j')){
                this.image = document.getElementById('jKeyPressed');
            }
            else{
                this.image = document.getElementById('jKey');
            }
        }

        if (this.isLKey === true){
            if (this.keys.includes('l')){
                this.image = document.getElementById('lKeyPressed');
            }
            else{
                this.image = document.getElementById('lKey');
            }
        }

        //added this
        if (this.isShooterKey === true){
            if (this.keys.includes('w')){
                this.bulletController.shoot();
            }
        }
    }

    draw(context){
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        
        //added this
        this.bulletController.draw(context);
    }
}