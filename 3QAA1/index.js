let textOutput = document.getElementById('textOutput');
let shiftOn = false;
let capsOn = false;
let lastSpecial = '';

const specialKeys = {
  '1': ['1', '!'],
  '2': ['2', '@'],
  '3': ['3', '#'],
  '4': ['4', '$'],
  '5': ['5', '%'],
  '6': ['6', '^'],
  '7': ['7', '&'],
  '8': ['8', '*'],
  '9': ['9', '('],
  '0': ['0', ')'],
  ',': [',', '<'],
  '.': ['.', '>'],
  'space' : ' '
}

function letterPressed(letter){
  console.log(letter, 'key pressed');
  let output = letter;
  if (shiftOn){
    output = letter.toUpperCase();
    shiftOn = false;
  } else if (capsOn){
    output = letter.toUpperCase();
  }
  textOutput.innerHTML += output;
}

function specialPressed(character){
  console.log(character, 'key pressed');
  if (specialKeys.hasOwnProperty(character)){
    let output = specialKeys[character][shiftOn ? 1 : 0];
    textOutput.innerHTML += output;
    shiftOn = false;
  }
  lastSpecial = character;
}

function deletePressed(){
  console.log('delete');
  let currentText = textOutput.innerHTML;
  // let characterToCheck = specialKeys[lastSpecial][1];
  // console.log('last special pressed', lastSpecial);
  // console.log('character to check', characterToCheck);
  // console.log('last character', currentText.at(currentText.length - 1));
  // console.log(currentText.slice(-1) === characterToCheck);
  textOutput.innerHTML = currentText.slice(0, -1);
}

function enterPressed(){
  textOutput.innerHTML += '<br>';
}

function shiftPressed(){
  console.log('shift');
  shiftOn = true;
}

function capsPressed(){
  console.log('caps');
  capsOn = !capsOn;
}

function clearPressed(){
  console.log('clear');
  textOutput.innerHTML = "";
}