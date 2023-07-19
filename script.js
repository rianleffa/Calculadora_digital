function getNumberValues() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  
  return [number1, number2];
}

function sum() {
  const [number1, number2] = getNumberValues();
  
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = number1 + number2;
    document.getElementById("result").textContent = result.toString();
  }
}

function subtract() {
  const [number1, number2] = getNumberValues();
  
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = number1 - number2;
    document.getElementById("result").textContent = result.toString();
  }
}

function multiply() {
  const [number1, number2] = getNumberValues();
  
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = number1 * number2;
    document.getElementById("result").textContent = result.toString();
  }
}

function divide() {
  const [number1, number2] = getNumberValues();
  
  if (!isNaN(number1) && !isNaN(number2)) {
    if (number2 !== 0) {
      const result = number1 / number2;
      document.getElementById("result").textContent = result.toString();
    } else {
      document.getElementById("result").textContent = "Divisão por zero não é permitida.";
    }
  }
}

function clearResult() {
  document.getElementById("result").textContent = "";
}
