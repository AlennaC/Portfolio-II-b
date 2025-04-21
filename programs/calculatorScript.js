var num1;
var num2;

var currNum = '';
var input = null;
var equationProg;
var matEquation;
var subtotal = 0;
var total = 0;

var numbers = [];
var operations = [];

var loopNum = 0;

function calculateNumbers() {
    var startIndex;
    var counter = 1;

    while (numbers.length > 1) {
        console.log("COUNT: " + counter);
        startIndex = 0;
    
        if (operations.includes("*") || operations.includes("/")) {
            console.log("equation includes a multiplication or division operation");
            multiplyIndex = operations.indexOf("*");
            divideIndex = operations.indexOf("/");

            console.log("multiply index: " + multiplyIndex);
            console.log("divide index: " + divideIndex);
    
            if ((multiplyIndex != -1 && divideIndex != -1 && multiplyIndex < divideIndex) || divideIndex == -1) {
                startIndex = multiplyIndex;
            } else {
                startIndex = divideIndex;
            }

            console.log("start index: " + startIndex);
        }
    
        num1 = numbers[startIndex] * 1;
        num2 = numbers[startIndex + 1] * 1;

        console.log("NUMBERS: " + numbers);
        console.log ("num1: " + num1 + "\nnum2: " + num2);
    
        switch (operations[startIndex]) {
            case "+":
                total = parseInt(num1 + num2);
                // total = num1 + num2;
                break;
            case "-":
                total = parseInt(num1 - num2);
                break;
            case "*":
                total = parseInt(num1 * num2);
                break;
            case "/":
                total = parseInt(num1 / num2);
                break;
            default:
                total = num1;
                break;
        }

        console.log("TOTAL: " + total);
    
        if (startIndex != 0 && numbers.length >= (startIndex + 2)) {
            numbers = numbers.slice(0, startIndex+1).concat(numbers.slice(startIndex + 2));
            numbers[startIndex] = total;
            operations = operations.slice(0, startIndex).concat(operations.slice(startIndex + 1));
        } else if (startIndex != 0) {
            numbers = numbers.slice(0, startIndex);
            numbers[numbers.length] = total;
            operations = operations.slice(0, startIndex - 1);
        } else if (startIndex == 0 && numbers.length >= 3) {
            console.log("startIndex is 0 & numbers length is >= 3");
            numbers = numbers.slice(1);
            numbers[0] = total;
            operations = operations.slice(1);
            console.log("NUMBERS: " + numbers);
        } else if (startIndex == 0) {
            console.log("startIndex is 0 & numbers length is <= 3");
            numbers = [total];
            operations = [];
        }

        counter++;
    }

    numbers = [];
    
    matEquation = matEquation + " = " + total;
    document.getElementById("calc-screen").textContent = matEquation;
}

function displayEquation() {
    document.getElementById("calc-screen").textContent = equationProg;
}

function appendNum() {
    console.log(numbers.length);

    // locking in last inputted operation
    if (numbers.length == operations.length) {
        matEquation = equationProg;
    }

    if (numbers.length == 0) {
        currNum = event.target.textContent;
        equationProg = currNum;
        numbers[0] = currNum;
    } else {
        // overwriting currNum if equation ends in an operation, else append to currNum
        if (operations.length == numbers.length) {
            console.log("append num operations.length == numbers.length is TRUE");
            currNum = event.target.textContent;
        } else {
            currNum += event.target.textContent;
        }

        equationProg = matEquation + " " + currNum;

        // adjusting current index if overwriting currNum, else add a new index
        if (currNum.length > 1) {
            numbers[numbers.length - 1] = currNum;
        } else {
            numbers[numbers.length] = currNum;
        }
    }

    console.log(numbers.length);
    displayEquation();
}

function chooseOperation() {
    console.log(numbers.length);

    var input = ''+event.target.textContent;
    if (input != "Enter") {
        // if user stacked operations then replace previous op with current
        if (numbers.length != 0 && numbers.length == operations.length) {
            operations[operations.length - 1] = input;
        } else {
            operations[operations.length] = input;
            matEquation = equationProg;
        }

       if (numbers.length == 0) {
            numbers[0] = 0;
            equationProg = "0 " + input;

        } else {
            equationProg = matEquation + " " + input;
        }

        displayEquation();
    } else if (input == "Enter") {
        // locking in current equation progress
        matEquation = equationProg;

        // catching equation ending in an op
        if (numbers.length == operations.length) {
            console.log("catching equation ending with an operator");
            numbers[numbers.length] = 0;

            if (operations[operations.length - 1] == "*" || operations[operations.length - 1] == "/") {
                operations[operations.length - 1] = "+";
            }
        }

        calculateNumbers();
    }
    console.log(numbers.length);

}

function addLoopNum() {
    var newNum = document.getElementById("addition-input").value;
    console.log(newNum);

    if (newNum != -1) {
        loopNum += newNum*1;
    } else {
        document.getElementById("addition-input").value = "";
    }

    document.getElementById("add-screen").textContent = loopNum;
    if (newNum == -1) {
        loopNum = 0;
    }
}