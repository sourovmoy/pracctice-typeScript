"use strict";
function divition(a, b) {
    const result = Math.floor(a / b);
    const remain = a % b;
    return [result, remain];
}
const res = divition(7, 2);
console.log(res);
