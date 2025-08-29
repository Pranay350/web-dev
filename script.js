// Addition
function sum(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

// Multiplication
function multiply(a, b) {
  return a * b;
}

// Division
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

const buttons = document.querySelectorAll("button");
    
const display = document.getElementById("display"); // where numbers will appear
let currentInput = ""; // what the user is typing

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log("hello")
        const value = button.getAttribute("data-value");
        console.log(value)

        if (value === "C") {
            currentInput = "";
            display.textContent = "";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput);
                display.textContent = currentInput;
            } catch {
                display.textContent = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    })
})

// console.log(value)
