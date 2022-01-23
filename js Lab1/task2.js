var isFinished = false;
var secondNumber = Number(prompt("Enter first number"));
var operation = prompt("Enter operation");
var firstNumber = Number(prompt("Enter second number"));
var sum = 0;


if (operation == "+") {
    sum = firstNumber + secondNumber;

} else if (operation == "-") {
    sum = firstNumber + secondNumber;

} else if (operation == "*") {
    sum = firstNumber + secondNumber;

} else if (operation == "/") {
    sum = firstNumber + secondNumber;

} else if (operation == "%") {
    sum = firstNumber + secondNumber;
} else {
    isFinished = true;
}

alert(sum);

while (!isFinished) {
    operation = prompt("Enter operation");
    secondNumber = Number(prompt("Enter number"));
    if (operation == "+") {
        sum += secondNumber;

    } else if (operation == "-") {
        sum -= secondNumber;

    } else if (operation == "*") {
        sum *= secondNumber;

    } else if (operation == "/") {
        sum /= secondNumber;

    } else if (operation == "%") {
        sum %= secondNumber;
    } else {
        isFinished = true;
    }
    alert(sum);
}
