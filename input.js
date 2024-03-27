export class InputHandler{
    constructor(gameLevel){
        this.gameLevel = gameLevel;
        this.keys = [];
        if(this.gameLevel != 'level5'){
            window.addEventListener('keydown', e => {
                if((e.key === 'a' || e.key === 'd' || e.key === 'j' || e.key === 'l' || e.key === 'w' || e.key === 'Escape') && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
                //console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e => {
                if(e.key === 'a' || e.key === 'd' || e.key === 'j' || e.key === 'l'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
                //console.log(e.key, this.keys);
            });
        }
        if(this.gameLevel === 'level5'){
            window.addEventListener('keydown', e => {
                if((e.key === 'a' || e.key === 'b' || e.key === 'c' || e.key === 'd' || e.key === 'e' || e.key === 'f' ||
                e.key === 'g' || e.key === 'h' || e.key === 'i' || e.key === 'j' || e.key === 'k' || e.key === 'l' ||
                e.key === 'm' || e.key === 'n' || e.key === 'o' || e.key === 'p' || e.key === 'q' || e.key === 'r' ||
                e.key === 's' || e.key === 't' || e.key === 'u' || e.key === 'v' || e.key === 'w' || e.key === 'x' ||
                e.key === 'y' || e.key === 'z' || e.key === 'Escape' || e.key === 'Control') && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
                //console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e => {
                if(e.key === 'a' || e.key === 'b' || e.key === 'c' || e.key === 'd' || e.key === 'e' || e.key === 'f' ||
                e.key === 'g' || e.key === 'h' || e.key === 'i' || e.key === 'j' || e.key === 'k' || e.key === 'l' ||
                e.key === 'm' || e.key === 'n' || e.key === 'o' || e.key === 'p' || e.key === 'q' || e.key === 'r' ||
                e.key === 's' || e.key === 't' || e.key === 'u' || e.key === 'v' || e.key === 'w' || e.key === 'x' ||
                e.key === 'y' || e.key === 'z'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
                console.log(e.key, this.keys);
            });
        }
    }
}