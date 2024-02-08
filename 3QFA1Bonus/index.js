// declare variables

let btn_group1 = document.getElementById('btn_group');
let btn_group2 = document.getElementById('btn_group2');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let score_h2 = document.getElementById('score_h2');

let score=0;

// correct & wrong answer functions

function correctAns(){
    score+=2;
    score_h2.innerHTML = score;
}

function wrongAns(){
    score-=1;
    score_h2.innerHTML = score;
}

// disable buttons after click

btn_group1.onclick = function(){
    btn_group1.style.pointerEvents = "none";
}

btn_group2.onclick = function(){
    btn_group2.style.pointerEvents = "none";
}

btn_group3.onclick = function(){
    btn_group3.style.pointerEvents = "none";
}

btn_group4.onclick = function(){
    btn_group4.style.pointerEvents = "none";
}

btn_group5.onclick = function(){
    btn_group5.style.pointerEvents = "none";
}

btn_group6.onclick = function(){
    btn_group6.style.pointerEvents = "none";
}

btn_group7.onclick = function(){
    btn_group7.style.pointerEvents = "none";
}

btn_group8.onclick = function(){
    btn_group8.style.pointerEvents = "none";
}

btn_group9.onclick = function(){
    btn_group9.style.pointerEvents = "none";
}

btn_group10.onclick = function(){
    btn_group10.style.pointerEvents = "none";
}

btn_group11.onclick = function(){
    btn_group11.style.pointerEvents = "none";
}

btn_group12.onclick = function(){
    btn_group12.style.pointerEvents = "none";
}

// edit score, change color

btn1a.onclick = function(){
    correctAns();
    btn1a.style.backgroundColor = "#65ab77";
    window.alert("top bunk best bunk");
}

btn1b.onclick = function(){
    wrongAns();
    btn1b.style.backgroundColor = "#b55555";
    window.alert("i sometimes nap in my roommate's bed but no");
}

btn2a.onclick = function(){
    wrongAns()
    btn2a.style.backgroundColor = "#b55555";
    window.alert("I LOVE HER TOO BUT YK..... YUMMY");
}

btn2b.onclick = function(){
    correctAns();
    btn2b.style.backgroundColor = "#65ab77";
    window.alert("i love him");
}

btn3a.onclick = function(){
    wrongAns();
    btn3a.style.backgroundColor = "#b55555";
    window.alert("i eat chicken a lot maawa naman kayo");
}

btn3b.onclick = function(){
    correctAns();
    btn3b.style.backgroundColor = "#65ab77";
    window.alert("this would be an honorable death");
}

btn4a.onclick = function(){
    correctAns();
    btn4a.style.backgroundColor = "#65ab77";
    window.alert("i feel most sad when my brother banishes from the gaming room");
}

btn4b.onclick = function(){
    wrongAns();
    btn4b.style.backgroundColor = "#b55555";
    window.alert("JOKES ON U WALA AQNG SARILING BEDROM");
}

btn5a.onclick = function(){
    correctAns();
    btn5a.style.backgroundColor = "#65ab77";
    window.alert("GOOD!! you're on the right track!");
}

btn5b.onclick = function(){
    wrongAns();
    btn5b.style.backgroundColor = "#b55555";
    window.alert("kinatatakutan kita");
}

btn6a.onclick = function(){
    correctAns();
    btn6a.style.backgroundColor = "#65ab77";
    window.alert("oo bro i applaud you!!!");
}

btn6b.onclick = function(){
    wrongAns();
    btn6b.style.backgroundColor = "#b55555";
    window.alert("d mo ba ako pinagkatitiwalaan");
}

btn7a.onclick = function(){
    wrongAns()
    btn7a.style.backgroundColor = "#b55555";
    window.alert("i need to be a better fan smh");
}

btn7b.onclick = function(){
    correctAns();
    btn7b.style.backgroundColor = "#65ab77";
    window.alert("secret lang natin 'to, ha: crush q sya");
}

btn8a.onclick = function(){
    correctAns();
    btn8a.style.backgroundColor = "#65ab77";
    window.alert("i can only do basic chords :<");
}

btn8b.onclick = function(){
    wrongAns();
    btn8b.style.backgroundColor = "#b55555";
    window.alert("DUDE I WISH");
}

btn9a.onclick = function(){
    wrongAns()
    btn9a.style.backgroundColor = "#b55555";
    window.alert("why wuld i");
}

btn9b.onclick = function(){
    correctAns();
    btn9b.style.backgroundColor = "#65ab77";
    window.alert("my cousin is in batch seranaiya!");
}

btn10a.onclick = function(){
    correctAns();
    btn10a.style.backgroundColor = "#65ab77";
    window.alert("i'm a 2009 kid");
}

btn10b.onclick = function(){
    wrongAns();
    btn10b.style.backgroundColor = "#b55555";
    window.alert("ew old");
}

btn11a.onclick = function(){
    correctAns();
    btn11a.style.backgroundColor = "#65ab77";
    window.alert("NEVER PASS UP THE OPPORTUNITY FOR DESSERTS");
}

btn11b.onclick = function(){
    wrongAns();
    btn11b.style.backgroundColor = "#b55555";
    window.alert("50/50 eh");
}

btn12a.onclick = function(){
    correctAns();
    btn12a.style.backgroundColor = "#65ab77";
    window.alert("LEt'S GO PALWORLD");
}

btn12b.onclick = function(){
    wrongAns();
    btn12b.style.backgroundColor = "#b55555";
    window.alert("i havent gotten into it....yet!!!!");
}