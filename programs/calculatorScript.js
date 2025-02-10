var num1 = '';
var num2 = '';
var operation = null;
var total = 0;
var numOfItems = 0;

function calculateNumbers() {
    if (num2 == '') {
        num2 = '0';
        equation = num1+" "+operation+" "+num2;
    }
    num1 = num1*1
    num2 = num2*1

    switch (operation) {
        case "+":
            total = parseInt(num1+num2);
            break;
        case "-":
            total = parseInt(num1-num2);
            break;
        case "*":
            total = parseInt(num1*num2);
            break;
        case "/":
            total = parseInt(num1/num2);
            break;
        default:
            total = num1;
            break;
    }
    
    numOfItems = 0;
    num1, num2 = '';

    equation = equation + " = "+total;
    displayEquation();
}

function displayEquation() {
    document.getElementById("screen").textContent = equation;
}

function appendNum() {
    console.log(numOfItems);
    if (numOfItems == 0) {
        num1 = ''+event.target.textContent;
        equation = num1;
    } else if (numOfItems == 1) {
        if (operation != null && num1 == '' && num2 == '') {
            num1 = total;
            numOfItems = 2;
            equation = num1;
        } else {
            num1 = num1+event.target.textContent;
            equation = num1;
        }
    }
    if (numOfItems == 2) {
        num2 = num2+event.target.textContent;
        equation = num1+" "+operation+" "+num2;
    }
    if (numOfItems == 0) {
        numOfItems++;
    }
    console.log(numOfItems);

    displayEquation();
}

function chooseOperation() {
    console.log(numOfItems);

    var input = ''+event.target.textContent;
    if (input != "Enter") {
        operation = input;
    }

    if (numOfItems == 1) {
        numOfItems++;
        equation = num1+" "+operation;
    }
    
    if (numOfItems == 0) {
        numOfItems += 2;
        num1 = total;
        equation = num1+" "+operation;
    }
    
    if (input == "Enter") {
        calculateNumbers();
    } else {
        displayEquation();
    }
    console.log(numOfItems);

}