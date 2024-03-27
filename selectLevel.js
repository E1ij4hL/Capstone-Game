function level1(){
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

function level3(){
    let myObj = {
        levelNum: "level3"
    };

    let myObjSerialized = JSON.stringify(myObj);
    localStorage.setItem('myObj', myObjSerialized);
    let myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));
    console.log(myObjDeserialized.levelNum);
}

function level4(){
    let myObj = {
        levelNum: "level4"
    };

    let myObjSerialized = JSON.stringify(myObj);
    localStorage.setItem('myObj', myObjSerialized);
    let myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));
    console.log(myObjDeserialized.levelNum);
}

function level5(){
    let myObj = {
        levelNum: "level5"
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

    //localStorage.removeItem('scoreObj3');
    let scoreObj3 = {
        levelScore: 0,
        levelGrade: ''
    };
    let myObjSerialized3 = JSON.stringify(scoreObj3);
    localStorage.setItem('scoreObj3', myObjSerialized3);
    //document.getElementById('level2Result').innerHTML = '';
    const myObjDeserialized3 = JSON.parse(localStorage.getItem('scoreObj3'));
    document.getElementById('level3Result').innerHTML = '<b>Score: </b>' + myObjDeserialized3.levelScore.toString() + '%' + ' (' + myObjDeserialized3.levelGrade + ')';

    //localStorage.removeItem('scoreObj4');
    let scoreObj4 = {
        levelScore: 0,
        levelGrade: ''
    };
    let myObjSerialized4 = JSON.stringify(scoreObj4);
    localStorage.setItem('scoreObj4', myObjSerialized4);
    //document.getElementById('level2Result').innerHTML = '';
    const myObjDeserialized4 = JSON.parse(localStorage.getItem('scoreObj4'));
    document.getElementById('level4Result').innerHTML = '<b>Score: </b>' + myObjDeserialized4.levelScore.toString() + '%' + ' (' + myObjDeserialized4.levelGrade + ')';

    //localStorage.removeItem('scoreObj5');
    let scoreObj5 = {
        levelScore: 0,
        levelGrade: ''
    };
    let myObjSerialized5 = JSON.stringify(scoreObj5);
    localStorage.setItem('scoreObj5', myObjSerialized5);
    //document.getElementById('level2Result').innerHTML = '';
    const myObjDeserialized5 = JSON.parse(localStorage.getItem('scoreObj5'));
    document.getElementById('level5Result').innerHTML = '<b>Score: </b>' + myObjDeserialized5.levelScore.toString() + '%' + ' (' + myObjDeserialized5.levelGrade + ')';
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
    if(x == 7){
        image.src='assets/LEVEL3_Button_Hover.png';
    }
    if(x == 8){
        image.src='assets/LEVEL3_Button.png';
    }
    if(x == 9){
        image.src='assets/LEVEL4_Button_Hover.png';
    }
    if(x == 10){
        image.src='assets/LEVEL4_Button.png';
    }
    if(x == 11){
        image.src='assets/buttons images/Exit_Button_Hover2.png';
    }
    if(x == 12){
        image.src='assets/buttons images/Exit_Button2.png';
    }
    if(x == 13){
        image.src='assets/buttons images/Wipe_Button_Hover2.png';
    }
    if(x == 14){
        image.src='assets/buttons images/Wipe_Button2.png';
    }
    if(x == 15){
        image.src='assets/LEVEL5_Button_Hover.png';
    }
    if(x == 16){
        image.src='assets/LEVEL5_Button.png';
    }
}