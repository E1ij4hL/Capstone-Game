/*let myObj = {
    levelNum: "level1"
};

let myObjSerialized = JSON.stringify(myObj);

localStorage.setItem('myObj', myObjSerialized);

let myObjDeserialized = JSON.parse(localStorage.getItem('myObj'));

console.log(myObjDeserialized.levelNum);*/


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