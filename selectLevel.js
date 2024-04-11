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
    //this function is for handling all of the image changes within the level select and start screen (for button images)
    //we pass in the image object and the path to the specific asset
    image.src = x;
}