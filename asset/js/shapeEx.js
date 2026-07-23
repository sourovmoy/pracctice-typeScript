"use strict";
const calculateArea = (shape) => {
    if ("radius" in shape) {
        return Math.PI * shape.radius * shape.radius;
    }
    else if ("length" in shape) {
        return shape.length * shape.length;
    }
    return shape.height * shape.width;
};
const squreArea = calculateArea({ length: 5 });
console.log(squreArea);
