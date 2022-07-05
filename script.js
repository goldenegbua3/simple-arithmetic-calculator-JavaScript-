alert("A simple arithmetic calculator");

function add(a, b) {
    alert((a) + " + " + (b) + " = " + (a + b));
}
function subtract(a, b) {
    alert((a) + " - " + (b) + " = " + (a - b));
}
function divide(a, b) {
    alert((a) + " / " + (b) + " = " + (a / b));
}
function multiply(a, b) {
    alert((a) + " * " + (b) + " = " + (a * b));
}
function calculate(a, b, operation) {
    if (operation == "+") {
        add(a, b);
    } else if (operation == "-") {
        subtract(a, b);
    } else if (operation == "/") {
        divide(a, b);
    } else if (operation == "*") {
        multiply(a, b);
    } else {
        alert("Please type a valid operation: +, -, /, or * ");
    }
}
let operation = prompt("Which operation would you like to perform: add +, subtract -, divide /, multiply * ");
let a = parseFloat(prompt("Please enter the first number: "));
let b = parseFloat(prompt("Please enter the second number: "));

calculate(a, b, operation);
