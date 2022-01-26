var screen = document.getElementById("screen");
var opScreen = document.getElementById("opScreen");
var opButtons = document.getElementsByClassName("btnOperation");
var numButtons = document.getElementsByClassName("btnNumber");
var firstNumber = 0;
var secondNumber = 0;
var op;
var isOperationButtonClicked = false;
var isEqualButtonClicked = false;
var result = 0;
var isDotClicked = false;

function clearScreen() {
    this.screen.innerHTML = "";
}

function resetScreen() {
    this.screen.innerHTML = "0";

}

function clearOpScreen() {
    this.opScreen.innerHTML = "";
}

function writeOnScreen(text) {
    this.screen.innerHTML += text;
}

function writeOnOpScreen(text) {
    this.opScreen.innerHTML += text;
}

function btnNumberClicked(number) {
    if ((screen.innerHTML.trim() == "0" || isOperationButtonClicked)) {
        clearScreen();
        writeOnScreen(number);

    } else {
        writeOnScreen(number);
    }
    isOperationButtonClicked = false;
    isEqualButtonClicked = false;
}

function btnClearClicked() {
    resetScreen();
}

function btnOpClicked(operation) {
    isOperationButtonClicked = true;
    isEqualButtonClicked = false;

    if (screen.innerHTML != "0") {
        isDotClicked = false;
        clearOpScreen();
        writeOnOpScreen(screen.innerHTML);
        writeOnOpScreen(operation);
    } else {
        isOperationButtonClicked = false;
    }

    switch (operation.toString().toUpperCase()) {
        case 'C':
            clearOpScreen();
            clearScreen();
            break;
        case '+' :
            firstNumber = Number(screen.innerHTML);
            op = "+";
            break;
        case '-' :
            firstNumber = Number(screen.innerHTML);
            op = "-";
            break;
        case '*' :
            firstNumber = Number(screen.innerHTML);
            op = "*";
            break;
        case '/' :
            firstNumber = Number(screen.innerHTML);
            op = "/";
            break;
        case '%':
            firstNumber = Number(screen.innerHTML);
            op = "%";
            break;
        case '+/-' :
            firstNumber = Number(screen.innerHTML);
            op = "+/-";
            break;
    }
}


function calculate() {
    if (isEqualButtonClicked) {
        switch (op) {
            case '+' :
                result = firstNumber + secondNumber;
                firstNumber = result;
                break;
            case '-' :
                result = firstNumber - secondNumber;
                firstNumber = result;
                break;
            case '*' :
                result = firstNumber * secondNumber;
                firstNumber = result;
                break;
            case '/' :
                result = firstNumber / secondNumber;
                firstNumber = result;
                break;
            case '%':
                result = firstNumber % secondNumber;
                firstNumber = result;
                break;
            case '+/-' :
                result = (Number(screen.innerText) * -1);
                break;
        }
    } else {
        switch (op) {
            case '+' :
                secondNumber = Number(screen.innerHTML);
                result = firstNumber + secondNumber;
                firstNumber = result;
                break;
            case '-' :
                secondNumber = Number(screen.innerHTML);
                result = firstNumber - secondNumber;
                firstNumber = result;
                break;
            case '*' :
                secondNumber = Number(screen.innerHTML);
                result = firstNumber * secondNumber;
                firstNumber = result;
                break;
            case '/' :
                secondNumber = Number(screen.innerHTML);
                result = firstNumber / secondNumber;
                firstNumber = result;
                break;
            case '%':
                secondNumber = Number(screen.innerHTML);
                result = firstNumber % secondNumber;
                firstNumber = result;
                break;
            case '+/-' :
                result = (Number(screen.innerText) * -1);
                break;
        }
    }

    return result;
}

function btnEqualClicked() {
    isDotClicked = false;
    result = calculate().toString();
    isEqualButtonClicked = true;
    screen.innerHTML = result;
}

function btnDotClicked() {
    if (isDotClicked || screen.innerHTML.indexOf(".") > -1)
        return;
    else {
        isDotClicked = true;
        writeOnScreen('.');
    }
}
