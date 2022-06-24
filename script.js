// Simple arithmetic calculator
//input operator
let operator = prompt('Enter operator ( type +, -, *, or /): ');

//input first number
let number1 = parseFloat(prompt('Enter first number: '));

// input second number
let number2 = parseFloat(prompt('Enter second number: '));

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(​'${number1} ${operator} ${number2} = ${result}');
