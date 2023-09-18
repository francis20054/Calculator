// Variables para los números y el operador
let firstNumber = "0";
let operator = "";
let secondNumber = "";
let result = null;

// Funciones de operaciones matemáticas
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

// Función para realizar la operación
function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b !== 0) {
        return divide(a, b);
      } else {
        return "Error: División por cero";
      }
    default:
      return null;
  }
}

// Función para manejar el click en los botones
function handleButtonClick(buttonText) {
  if (operator === "") {
    firstNumber += buttonText;
  } else {
    secondNumber += buttonText;
  }
  updateDisplay();
}

// Función para manejar el click en los operadores
function handleOperatorClick(operatorText) {
  if (firstNumber !== "") {
    if (secondNumber !== "") {
      result = operate(operator, firstNumber, secondNumber);
      firstNumber = result.toString();
      secondNumber = "";
    }
    operator = operatorText;
  }
  updateDisplay();
}

// Función para manejar el click en el botón igual
function handleEqualsClick() {
  if (firstNumber !== "" && secondNumber !== "") {
    result = operate(operator, firstNumber, secondNumber);

    if (result === null) {
      result = "Error: Operación no válida"; // Otra acción si result es null
    } else {
      result = result.toString();
    }
    secondNumber = "";
    operator = "";
    updateDisplay();
  }
}

// Función para manejar el click en el botón de borrar
function handleClearClick() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  result = null;
  updateDisplay();
}

// Función para manejar el click en el botón de borrar un dígito
function handleDeleteClick() {
  if (secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1); // Eliminar el último dígito del segundo número
  } else if (operator !== "") {
    operator = ""; // Eliminar el operador si no hay un segundo número
  } else {
    firstNumber = firstNumber.slice(0, -1); // Eliminar el último dígito del primer número
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.querySelector(".display");
  display.textContent = firstNumber + operator + secondNumber;
}

// Verificar si estamos en un entorno de navegador
if (typeof window !== 'undefined') {
  const botones = document.querySelectorAll("#btn1");
  botones.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(button.textContent);
    });
  });

  document.querySelectorAll("#operador").forEach((button) => {
    button.addEventListener("click", () => {
      handleOperatorClick(button.textContent);
    });
  });

  document.querySelector(".equals").addEventListener("click", () => {
    handleEqualsClick();
  });

  document.querySelector(".clear").addEventListener("click", () => {
    handleClearClick();
  });

  document.querySelector(".delete").addEventListener("click", () => {
    handleDeleteClick();
  });

  // Inicializar la pantalla
  updateDisplay();
}
