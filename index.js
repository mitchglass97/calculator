function enter(number) {
    if(number === '.') {
        if (current.includes('.')) {
            return;
        }
    }
    current += number;
    display(current);
}

function display(disp) {
    console.log('current: ' + current);
    if(current.length > 0) {
        result.textContent = disp;
    }
}

function invert() {
    current = current * -1;
    display(current);
}

function del() {
    current = current.substring(0, current.length - 1);
    display(current);
}

function compute() {
    let result = 0;
    console.log('computing');
    console.log(firstNumber + " " + current + " " + operation);
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
    console.log('result: ' + firstNumber);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clearResults() {
    cleared = true;
    display('0');
    current = '';
    firstNumber = '';
    operation = -1;
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


var map = {}; 
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if(map[187]) {
        if(map[16]) {
            operate(0);
        } else {
            compute();
        }
    }
}


document.addEventListener('keydown', function(event) {
    let key = event.keyCode;
    console.log(key)
    switch(key) {
        case 49:
            enter('1');
            break;
        case 50:
            enter('2');
            break;
        case 51:
            enter('3');
            break;
        case 52:
            enter('4');
            break;
        case 53:
            enter('5');
            break;
        case 54:
            enter('6');
            break;
        case 55:
            enter('7');
            break;
        case 56:
            enter('8');
            break;
        case 57:
            enter('9');
            break;
        case 48:
            enter('0');
            break;
        case 191:
            operate(3);
            break;
        case 88:
            operate(2);
            break;
        case 189:
            operate(1);
            break;
        case 13:
            compute();
            break;
        case 190:
            enter('.');
            break;
        case 8:
            del();
            break;
    }
});