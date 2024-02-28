/*let myObj = {
    levelNum: "level1"
};

let myObjSerialized = JSON.stringify(myObj);

localStorage.setItem('myObj', myObjSerialized);

let myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));

console.log(myObjDeserialized.levelNum);

const myObjDeserialized1 = JSON.parse(localStorage.getItem('scoreObj1'));
document.getElementById('level1Result').innerHTML = '<b>Score: </b>' + myObjDeserialized1.levelScore.toString() + '%' + ' (' + myObjDeserialized1.levelGrade + ')';

const myObjDeserialized2 = JSON.parse(localStorage.getItem('scoreObj2'));
document.getElementById('level2Result').innerHTML = '<b>Score: </b>' + myObjDeserialized2.levelScore.toString() + '%' + ' (' + myObjDeserialized2.levelGrade + ')';*/


function level1(){
    //localStorage.setItem('theLevel', 'level1');
    //console.log(JSON.parse(localStor))

    let myObj = {
        levelNum: "level1"
    };
    
    let myObjSerialized = JSON.stringify(myObj);
    localStorage.setItem('myObj', myObjSerialized);
    let myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));
    console.log(myObjDeserialized.levelNum);
}

function level2(){
    let myObj = {
        levelNum: "level2"
    };
    
    let myObjSerialized = JSON.stringify(myObj);
    localStorage.setItem('myObj', myObjSerialized);
    let myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));
    console.log(myObjDeserialized.levelNum);
}

function removeScores(){
    //localStorage.removeItem('scoreObj1');
    let scoreObj1 = {
        levelScore: 0,
        levelGrade: ''
    };
    let myObjSerialized = JSON.stringify(scoreObj1);
    localStorage.setItem('scoreObj1', myObjSerialized);
    //document.getElementById('level1Result').innerHTML = '';
    const myObjDeserialized1 = JSON.parse(localStorage.getItem('scoreObj1'));
    document.getElementById('level1Result').innerHTML = '<b>Score: </b>' + myObjDeserialized1.levelScore.toString() + '%' + ' (' + myObjDeserialized1.levelGrade + ')';

    //localStorage.removeItem('scoreObj2');
    let scoreObj2 = {
        levelScore: 0,
        levelGrade: ''
    };
    let myObjSerialized2 = JSON.stringify(scoreObj2);
    localStorage.setItem('scoreObj2', myObjSerialized2);
    //document.getElementById('level2Result').innerHTML = '';
    const myObjDeserialized2 = JSON.parse(localStorage.getItem('scoreObj2'));
    document.getElementById('level2Result').innerHTML = '<b>Score: </b>' + myObjDeserialized2.levelScore.toString() + '%' + ' (' + myObjDeserialized2.levelGrade + ')';
}

function changeImage(x, image){
    if(x == 1){
        image.src = 'assets/START_Button_Hover.png';
    }
    if(x == 2){
        image.src='assets/START_Button.png';
    }
    if(x == 3){
        image.src='assets/LEVEL1_Button_Hover.png';
    }
    if(x == 4){
        image.src='assets/LEVEL1_Button.png';
    }
    if(x == 5){
        image.src='assets/LEVEL2_Button_Hover.png';
    }
    if(x == 6){
        image.src='assets/LEVEL2_Button.png';
    }
}