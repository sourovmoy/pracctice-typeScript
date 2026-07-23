type Circle = {
  radius: number;
};

type Rectangle = {
  height: number;
  width: number;
};

type Square = {
  length: number;
};

type Shape = Rectangle | Circle | Square;

const calculateArea = (shape: Shape): number => {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if ("length" in shape) {
    return shape.length * shape.length;
  }
  return shape.height * shape.width;
};

const squreArea: number = calculateArea({ length: 5 });
console.log(squreArea);
