/*
 * Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 */

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num2 === 0 ? "Can't Divide By 0" : num1 / num2;
  } else {
    return "Please provide valid operator";
  }
}
console.log(calculator(1, 5, "+"));
