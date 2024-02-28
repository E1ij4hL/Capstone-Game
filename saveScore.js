export class SaveScore{
    constructor(accuracy, grade){
        this.accuracy = accuracy;
        this.grade = grade;
        //this.gameLevel = gameLevel;
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
        //localStorage.setItem('scoreObj2', myObjSerialized);
        
        //let myObjDeserialized = JSON.parse(localStorage.getItem('scoreObj2'));
        //console.log(myObjDeserialized.levelScore);

        //added this
        const prevScore = JSON.parse(localStorage.getItem('scoreObj2'));
        if(parseFloat(this.accuracy) >= parseFloat(prevScore.levelScore)){
            localStorage.setItem('scoreObj2', myObjSerialized);
        }
    }
}