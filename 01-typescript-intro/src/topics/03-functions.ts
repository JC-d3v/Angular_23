
// TIP: Funcion standar
function addNumbers(a: number, b: number): number {
  return a + b
}
const result: number = addNumbers(1, 2);

// TIP: funcion flecha
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
}
const result2: string = addNumbersArrow(1, 2)

// TIP: funcion con parametros opcionales y pre-definidos
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base
}
const multiplyResult: number = multiply(5);

console.table({ result, result2, multiplyResult });

export { }