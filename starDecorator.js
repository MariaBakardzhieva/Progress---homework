/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
function starDecorator(func) {
    return function(...args) {
        // Print stars before the function call
        console.log("*".repeat(30));

        // Call the original function
        const result = func.apply(this, args);

        // Print stars after the function call
        console.log("*".repeat(30));

        return result;
    };
}
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

/* -------------------------------- TEST CASE ------------------------------- */
// define some functions to be decorated:
function square(a) {
    console.log(`The square function have been called`);
    return a ** 2;
}

function sum(a, b) {
    console.log(`The sum function have been called`);
    console.log(`a+b=${a}+${b}`);
}

// decorate the functions:
square = starDecorator(square);
sum = starDecorator(sum);

// call the functions:
const res = square(2);
console.log(`res = ${res}`);
sum(1, 2);