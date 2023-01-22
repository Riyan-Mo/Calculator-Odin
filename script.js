const displayNumber = document.getElementById('inputNumber');
document.getElementById('1').addEventListener('click', function () { toDisplay(1) })
document.getElementById('2').addEventListener('click', function () { toDisplay(2) })
document.getElementById('3').addEventListener('click', function () { toDisplay(3) })
document.getElementById('4').addEventListener('click', function () { toDisplay(4) })
document.getElementById('5').addEventListener('click', function () { toDisplay(5) })
document.getElementById('6').addEventListener('click', function () { toDisplay(6) })
document.getElementById('7').addEventListener('click', function () { toDisplay(7) })
document.getElementById('8').addEventListener('click', function () { toDisplay(8) })
document.getElementById('9').addEventListener('click', function () { toDisplay(9) })
document.getElementById('0').addEventListener('click', function () { toDisplay(0) })
document.getElementById('ac').addEventListener('click', function () { window.location.reload() })
document.getElementById('-/+').addEventListener('click', function () { signChange(displayNumber.textContent) })
document.getElementById('/').addEventListener('click', function () { operate('/') })
document.getElementById('%').addEventListener('click', function () { operate('%') })
document.getElementById('*').addEventListener('click', function () { operate('*') })
document.getElementById('-').addEventListener('click', function () { operate('-') })
document.getElementById('plus').addEventListener('click', function () { operate('+') })
document.getElementById('=').addEventListener('click', function () { finalResult() })
document.getElementById('c').addEventListener('click', function () { clearDisplay() })

let numbers = [];
let index = 0;
let op;
let result;

function operate(operator) {
  numbers.push(Number(displayNumber.textContent));
  op = operator;
  index++;
  clearDisplay();
}

function finalResult() {
  numbers.push(Number(displayNumber.textContent));
  if (numbers.length > 1) {
    if (op === '+') {
      result = add(numbers[index - 1], numbers[index]);
      displayNumber.textContent = result;
    }
    else if (op === '-') {
      result = subtract(numbers[index - 1], numbers[index]);
      displayNumber.textContent = result;
    }
    else if (op === '*') {
      result = multiply(numbers[index - 1], numbers[index]);
      displayNumber.textContent = result;
    }
    else if (op === '%') {
      result = percentage(numbers[index - 1], numbers[index]);
      displayNumber.textContent = result;
    }
    else if (op === '/') {
      result = divide(numbers[index - 1], numbers[index]);
      displayNumber.textContent = result;
    }
    index++;
  }
  else {
    result = 0;
    displayNumber.textContent = result;
  }
}



function toDisplay(a) {
  displayNumber.textContent += a;
}
function clearDisplay() {
  displayNumber.textContent = '';
}

function add(a, b) {
  return a + b;
}
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => (b !== 0 ? (a / b) : 'Cannot divide by 0').toFixed(5);
percentage = (a, b) => (b !== 0 ? (a / b) * 100 : 'Cannot divide by 0').toFixed(5);
signChange = a => {
  result = Number((a * -1));
  displayNumber.textContent = ` ${result}`;
}