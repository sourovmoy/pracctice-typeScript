type Divides = [number, number];

function divition(a: number, b: number): Divides {
  const result = Math.floor(a / b);
  const remain = a % b;
  return [result, remain];
}
const res: Divides = divition(7, 2);
console.log(res);
