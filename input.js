export class InputHandler{
    constructor(gameLevel){
        this.gameLevel = gameLevel;
        this.keys = [];
        if(this.gameLevel != 'level5'){
            window.addEventListener('keydown', e => {
                if((e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'l' || e.key.toLowerCase() === 'w' || e.key === 'Escape') && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key.toLowerCase());
                }
                //console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e => {
                if(e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'l'){
                    this.keys.splice(this.keys.indexOf(e.key.toLowerCase()), 1);
                }
                //console.log(e.key, this.keys);
            });
        }
        if(this.gameLevel === 'level5'){
            window.addEventListener('keydown', e => {
                if((e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'c' || e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'e' || e.key.toLowerCase() === 'f' ||
                e.key.toLowerCase() === 'g' || e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'k' || e.key.toLowerCase() === 'l' ||
                e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'n' || e.key.toLowerCase() === 'o' || e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'q' || e.key.toLowerCase() === 'r' ||
                e.key.toLowerCase() === 's' || e.key.toLowerCase() === 't' || e.key.toLowerCase() === 'u' || e.key.toLowerCase() === 'v' || e.key.toLowerCase() === 'w' || e.key.toLowerCase() === 'x' ||
                e.key.toLowerCase() === 'y' || e.key.toLowerCase() === 'z' || e.key === 'Escape' || e.key === 'Control') && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key.toLowerCase());
                }
                //console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e => {
                if(e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'c' || e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'e' || e.key.toLowerCase() === 'f' ||
                e.key.toLowerCase() === 'g' || e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'k' || e.key.toLowerCase() === 'l' ||
                e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'n' || e.key.toLowerCase() === 'o' || e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'q' || e.key.toLowerCase() === 'r' ||
                e.key.toLowerCase() === 's' || e.key.toLowerCase() === 't' || e.key.toLowerCase() === 'u' || e.key.toLowerCase() === 'v' || e.key.toLowerCase() === 'w' || e.key.toLowerCase() === 'x' ||
                e.key.toLowerCase() === 'y' || e.key.toLowerCase() === 'z'){
                    this.keys.splice(this.keys.indexOf(e.key.toLowerCase()), 1);
                }
                console.log(e.key.toLowerCase(), this.keys);
            });
        }
    }
}