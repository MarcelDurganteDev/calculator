class Calculator {
	//Object declaration
	constructor(miniScreen, mainScreen) {
		this.miniScreen = miniScreen;
		this.mainScreen = mainScreen;
		this.clearScreen();
	}
	clearScreen() {
		//With this function we reset the values every time the function starts
		this.currentNumber = "";
		this.previousNumber = "";
		this.currentOperation = undefined;
	}
	appendNumber(number) {
		if (number === "." && this.currentNumber.includes(".")) return; //With this If statement we manage to just print one '.'
		this.currentNumber = this.currentNumber.toString() + number.toString();
	}
	chooseOperation(operation) {
		if (this.currentNumber === "") return; //We check the status of the operation
		if (this.previousNumber !== operation) {
			//In case previousNumber is something we proceed to calculate (ex. 5+5+5 . First the calculator execute 5+5, reflexes the result and the add 5)
		}
		this.currentOperation = operation; //This way we define operation in the object
		this.previousNumber = this.currentNumber; //We trasfer the value of current to previous
		this.currentNumber = ""; // and then we set to '' currentNumber.
	}
	calculate() {
		let calculation; //we define the variable.
		const previousNum = parseFloat(this.previousNumber); //we change the value to float so the machine can operate
		const currentNum = parseFloat(this.currentNumber);
		if (isNaN(previousNum) || isNaN(currentNum)) return; //Check if is a number
		switch (
		this.currentOperation //Choose between operations and operate. The result stored on calculation is refered in currentNumber
		) {
			case "+":
				calculation = previousNum + currentNum;
				break;
			case "-":
				calculation = previousNum - currentNum;
				break;
			case "×":
				calculation = previousNum * currentNum;
				break;
			case "÷":
				calculation = previousNum / currentNum;
				break;
			case "%":
				calculation = previousNum % currentNum;
				break;
			default:
				return;
		}
		this.logText = document.getElementById("myPopup");
		this.logText.innerText = this.logText.innerText + ' ' + `${this.previousNumber}${this.currentOperation}${this.currentNumber}=${calculation}` + ' ';
		console.log(this.logText.innerText);
		this.currentNumber = calculation; //Set  currentNumber as calculation so the function updateScreen can read the result
		this.currentOperation = undefined; //reset the operation
		this.previousNumber = ""; //reset the previous (in chooseOperation we chage the value of previous to current)
	}
	positiveNegative() {
		this.currentNumber *= -1;
	}

	upDateScreen() {
		this.mainScreen.innerText = this.currentNumber; //The result from calculation is displayed
		if (this.currentOperation != null) {
			//check the status of operation (which origin is in chooseOperation) to print into miniScreen
			this.miniScreen.innerText = `${this.previousNumber}${this.currentOperation}`;
		} else {
			this.miniScreen.innerText = ""; //Clear miniscreen
		}
	}
}

// LIGHT MODE


var btnLight = document.getElementById("button-toggle");
btnLight.addEventListener("click", changeColor);

function changeColor() {
	document.getElementById("calculator").classList.toggle("toggle");
	document.getElementById("keys").classList.toggle("toggle");
	document.getElementById("menu").classList.toggle("toggle");
	document.getElementById("main-screen").classList.toggle("toggle");
	document.getElementById("mini").classList.toggle("toggle");
	document.getElementById("masMenos").classList.toggle("toggle");
	btnNumber.forEach(key => {
		key.classList.toggle("toggle");
	});
	btnOperator.forEach(key => {
		key.classList.toggle('toggle');
	});
	document.getElementById('c').classList.toggle('toggle');
}

// BUTTONS DECLARATION

const btnNumber = document.querySelectorAll("[data-number]");
const btnOperator = document.querySelectorAll("[data-operation]");
const btnEqual = document.querySelector("[data-equal]");
const btnClear = document.querySelector("[data-clear]");
const btnPositive_Negative = document.querySelector('[data-positive_negative]');
const miniScreen = document.querySelector("[data-miniScreen]");
const mainScreen = document.querySelector("[data-mainScreen]");
const calculator = new Calculator(miniScreen, mainScreen);
const btnLog = document.querySelector('[data-log]');
const btnClose = document.querySelector('[data-close]');

//BUTTONS ITERATION WITH CALCULATOR OBJECT AND IT'S FUNCTIONS

btnNumber.forEach((key) => {
	key.addEventListener("click", () => {
		calculator.appendNumber(key.innerText);
		calculator.upDateScreen();
	});
});

btnOperator.forEach(button => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.upDateScreen();
	});
});

btnClear.addEventListener("click", () => {
	calculator.clearScreen();
	calculator.upDateScreen();
});

btnEqual.addEventListener("click", () => {
	calculator.calculate();
	calculator.upDateScreen();
});

btnPositive_Negative.addEventListener("click", () => {
	calculator.positiveNegative();
	calculator.upDateScreen();
});


//Funtion to open/close the operation log

function operationLog() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}


//Function to close the calculator
btnClose.addEventListener("click", closeAll);
function closeAll() {
	document.querySelector('[full-calculator]').classList.toggle('close');
}
