// declare variables

let score_h2 = document.getElementById('score_h2');
let score=0;
let btnGroupId="btn_group1";
let btnId="btn1a"

// correct & wrong answer functions

function correctAns(btnGroupId, btnId){
    score+=2;
    score_h2.innerHTML = score;
    document.getElementById(btnGroupId).style.pointerEvents = "none";
    document.getElementById(btnId).style.backgroundColor = "#65ab77";
}

function wrongAns(btnGroupId, btnId){
    score-=1;
    score_h2.innerHTML = score;
    document.getElementById(btnGroupId).style.pointerEvents = "none";
    document.getElementById(btnId).style.backgroundColor = "#b55555";
}
