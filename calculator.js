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