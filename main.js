//Here begins buttons id's storage

let btnOne = document.getElementById('1');
let btnTwo = document.getElementById('2');
let btnThree = document.getElementById('3');
let btnFour = document.getElementById('4');
let btnFive = document.getElementById('5');
let btnSix = document.getElementById('6');
let btnSeven = document.getElementById('7');
let btnEight = document.getElementById('8');
let btnNine = document.getElementById('9');

//Here begins the buttons storage

let btnOneValue = Number(document.getElementById('1').value);
let btnTwoValue = Number(document.getElementById('2').value);
let btnThreeValue = Number(document.getElementById('3').value);
let btnFourValue = Number(document.getElementById('4').value);
let btnFiveValue = Number(document.getElementById('5').value);
let btnSixValue = Number(document.getElementById('6').value);
let btnSevenValue = Number(document.getElementById('7').value);
let btnEightValue = Number(document.getElementById('8').value);
let btnNineValue = Number(document.getElementById('9').value);


btnSeven.addEventListener('click', printMini);

function printMini() {
    console.log(btnSevenValue);
    console.log(typeof(btnSevenValue));
}


