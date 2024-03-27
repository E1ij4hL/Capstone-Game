export class SaveScore{
    constructor(accuracy, grade){
        this.accuracy = accuracy;
        this.grade = grade;
    }

    saveScoreLevel1(){
        let scoreObj1 = {
            levelScore: this.accuracy,
            levelGrade: this.grade
        };
        
        let myObjSerialized = JSON.stringify(scoreObj1);
        //localStorage.setItem('scoreObj1', myObjSerialized);
        
        //let myObjDeserialized = JSON.parse(localStorage.getItem('scoreObj1'));
        //console.log(myObjDeserialized.levelScore);

        //added this
        const prevScore = JSON.parse(localStorage.getItem('scoreObj1'));
        if(parseFloat(this.accuracy) >= parseFloat(prevScore.levelScore)){
            localStorage.setItem('scoreObj1', myObjSerialized);
        }
    }

    saveScoreLevel2(){
        let scoreObj2 = {
            levelScore: this.accuracy,
            levelGrade: this.grade
        };
        
        let myObjSerialized = JSON.stringify(scoreObj2);

        //added this
        const prevScore = JSON.parse(localStorage.getItem('scoreObj2'));
        if(parseFloat(this.accuracy) >= parseFloat(prevScore.levelScore)){
            localStorage.setItem('scoreObj2', myObjSerialized);
        }
    }

    saveScoreLevel3(){
        let scoreObj3 = {
            levelScore: this.accuracy,
            levelGrade: this.grade
        };
        
        let myObjSerialized = JSON.stringify(scoreObj3);

        //added this
        const prevScore = JSON.parse(localStorage.getItem('scoreObj3'));
        if(parseFloat(this.accuracy) >= parseFloat(prevScore.levelScore)){
            localStorage.setItem('scoreObj3', myObjSerialized);
        }
    }

    saveScoreLevel4(){
        let scoreObj4 = {
            levelScore: this.accuracy,
            levelGrade: this.grade
        };
        
        let myObjSerialized = JSON.stringify(scoreObj4);

        //added this
        const prevScore = JSON.parse(localStorage.getItem('scoreObj4'));
        if(parseFloat(this.accuracy) >= parseFloat(prevScore.levelScore)){
            localStorage.setItem('scoreObj4', myObjSerialized);
        }
    }

    saveScoreLevel5(){
        let scoreObj5 = {
            levelScore: this.accuracy,
            levelGrade: this.grade
        };
        
        let myObjSerialized = JSON.stringify(scoreObj5);

        //added this
        const prevScore = JSON.parse(localStorage.getItem('scoreObj5'));
        if(parseFloat(this.accuracy) >= parseFloat(prevScore.levelScore)){
            localStorage.setItem('scoreObj5', myObjSerialized);
        }
    }
}