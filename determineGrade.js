export class Grade{
    constructor(score){
        this.score = score;
        this.grade = 'A';
    }

    calculate(){
        if(this.score >= 90){
            this.grade = 'A';
        }
        else if(this.score >= 80){
            this.grade = 'B';
        }
        else if(this.score >= 70){
            this.grade = 'C';
        }
        else if(this.score >= 60){
            this.grade = 'D';
        }
        else{
            this.grade = 'F';
        }
    }
}