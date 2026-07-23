const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Divisin by zero is not allowed");
  return a / b;
};

console.log(divide(30, 5));
