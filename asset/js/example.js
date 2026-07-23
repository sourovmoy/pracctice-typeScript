"use strict";
const divide = (a, b) => {
    if (b === 0)
        throw new Error("Divisin by zero is not allowed");
    return a / b;
};
console.log(divide(30, 5));
