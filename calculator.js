function add(a,b) {
    return a+b;
};
console.log("Addition tests");
console.log(`${add(1, 9)} should return 10`);
console.log(`${add(-5, 12)} should be 7`);
console.log(`${add(5,-1)} should be 4`);

function subtract(a,b) {
    return a-b;
};
console.log("Subtraction tests");
console.log(`${subtract(100, 25)} should return 75`);
console.log(`${subtract(-23, -5)} should return -18`);
console.log(`${subtract(27, -3)} should return 30`);

function multiply(a,b) {
    return a*b;
};
console.log("Multiplication tests");
console.log(`${multiply(21, 21)} should return 441`);
console.log(`${multiply(-3, 7)} should return -21`);
console.log(`${multiply(-9, -8)} should return 72`);

function divide(a,b) {
    if (b === 0) {
        return "NO DIVIDING BY 0 LOSER.";
    } else {
        return a/b;
    };
};
console.log("Division tests");
console.log(`${divide(6, 2)} should return 3`);
console.log(`${divide(-81,5)} should return -16.2`);
console.log(`${divide(12, 0)} should return "NO DIVIDING BY 0 LOSER."`);

function operate(a, b, operator) {
    continueCalc = true;
    switch (operator) {
        case "+":
            return add(a,b);
        case "-": 
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    };
};
let a = 0;
let operator = "+";
let b = 0;
let firstInput = true;
let clearDisplay = false;

/*
What needs to happen: 
when a number is typed, it is stored as textContent. As soon as an
operation is pressed, the number is stored. When a new number is typed
it overwrites the first number. Next time an operation occurs, we replace
the text with the operation from the first two numbers. 

States: 
nothing in a and nothing in b
    start filling a
a full nothing in b
    start filling b
a full b full
    run a calculation and put that into a
*/

function addNumber(e) {
    let display  = document.querySelector(".display");
    console.log(clearDisplay)
    if (clearDisplay) {
        display.textContent = "";
        clearDisplay = false;
    }
    display.textContent += e.target.textContent ;
};

function addClear() {
    let display  = document.querySelector(".display");
    display.textContent = "";
    firstInput = true;
    a = 0;
    b = 0;
    operator = "";
    clearDisplay = false;
};

function addOperation(e) {
    let display = document.querySelector(".display");
    if (firstInput) {
        a = Number(display.textContent);
        firstInput = false;
        operator = e.target.textContent;
        clearDisplay = true;
    } else {
        b = Number(display.textContent);
        a = operate(a, b, operator);
        operator = e.target.textContent;
        display.textContent = a;
        clearDisplay = true;
    };
};
let buttons = document.querySelectorAll(".number");
buttons.forEach((button) => button.addEventListener("click", addNumber));

let clear = document.querySelector(".clear");
clear.addEventListener("click", addClear);

let operations = document.querySelectorAll(".operation");
operations.forEach((operation) => operation.addEventListener("click", addOperation));


