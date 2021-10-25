class Calculator {
	constructor(miniScreen, mainScreen) {
		this.miniScreen = miniScreen;
		this.mainScreen = mainScreen;
		this.clearScreen();
	}

	clearScreen() {
		this.currentNumber = "";
		this.previousNumber = "";
		this.operator = undefined;
	}

	appendNumber(number) {
		if (number === "." && this.currentNumber.includes(".")) return;
		this.currentNumber = this.currentNumber.toString() + number.toString();
	}
	upDateScreen() {
		this.mainScreen.innerText = this.currentNumber;
		if (this.operation != null) {
			this.miniScreen.innerText = `${this.previousNumber} ${this.operation}`}
	}

	chooseOperation(operation) {
		if (this.currentNumber === '') return;
		if (this.previousNumber !== '') {
			this.calculate();
		}
		this.operation = operation;
		this.previousNumber = this.currentNumber;
		this.currentNumber = '';
	}

	calculate() {
		let calculation;
		const previousNum = parseFloat(this.previousNumber);
		const currentNum = parseFloat(this.currentNumber);
		if (isNaN(previousNum) || isNaN(currentNum)) return;
		switch (this.operation) {
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
			case '%':
				calculation = previousNum % currentNum;
				break;
			default:
				return;
		}
		this.currentNumber = calculation;
		this.operation = undefined;
		this.previousNumber = '';
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
	btnNumber.forEach(key => {
		key.classList.toggle("toggle");
	});
	btnOperator.forEach(key => {
		key.classList.toggle('toggle')
	});

}

const btnNumber = document.querySelectorAll("[data-number]");
const btnOperator = document.querySelectorAll("[data-operation]");
const btnEqual = document.querySelector("[data-equal]");
const btnClear = document.querySelector("[data-clear]");
const miniScreen = document.querySelector("[data-miniScreen]");
const mainScreen = document.querySelector("[data-mainScreen]");
const calculator = new Calculator(miniScreen, mainScreen);

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