function enter(number) {
    current += number;
    display(current);
}

function display(disp) {
    result.textContent = disp;
}

function invert() {
    current = current * -1;
    display(current);
}

function compute() {
    let result = 0;
    switch(operation) {
        case -1:
            return;
        case 0:
            firstNumber = add(firstNumber, current);
            break;
        case 1:
            firstNumber = subtract(firstNumber, current);
            break;
        case 2:
            firstNumber = multiply(firstNumber, current);
            break;
        case 3:
            firstNumber = divide(firstNumber, current);
            break;
    }
    firstNumber = numberWithCommas(firstNumber);
    display(firstNumber);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clearResults() {
    cleared = true;
    current = '';
    firstNumber = '';
    operation = -1;
    display('0');
}

// -1 - initialized value
// 0  - addition
// 1  - subtraction
// 2  - multiplication
// 3  - division
function operate(a) {
    if(cleared) {
        firstNumber = current;
        cleared = false;
    }
    current = '';
    operation = a;
}

function stringToNumber(x) {
    if (x.includes('.')) {
        x = parseFloat(x);
    } else {
        x = parseInt(x,10);
    }
    return x;
}


function add(a,b) {
    a = stringToNumber(a);
    b = stringToNumber(b);
    let ans = 0;
    ans = a+b;
    return ans;
}

function subtract(a,b) {
    a = stringToNumber(a);
    b = stringToNumber(b);
    let ans = 0;
    ans = a-b;
    return ans;
}

function divide(a,b) {
    a = stringToNumber(a);
    b = stringToNumber(b);
    let ans = 0;
    ans = a/b;
    return ans;
}

function multiply(a,b) {
    a = stringToNumber(a);
    b = stringToNumber(b);
    let ans = 0;
    ans = a*b;
    return ans;
}

let cleared = true;
let current = '';
let firstNumber = '';
let operation = -1;
let result = document.getElementById('result');
console.log('current: ' + current);
