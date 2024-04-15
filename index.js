const calcDisplay = document.getElementById('calc-display');
const calculateButton = document.getElementById('calculate-btn');

function appendToDisplay(input) {
  calcDisplay.value += input;
};

function calculateAnswer() {
  answer = eval(calcDisplay.value);
  console.log(answer);
  calcDisplay.value = answer;
}

function clearDisplay(input) {
  calcDisplay.value = '';
};

document.addEventListener('keydown', function(event) {
  const key = event.key;  // Capture the key pressed.
  console.log(key);
  console.log(typeof(key));
  let effectiveKey = (key === 'Enter' || key === '=') ? '=' : key; //create a variable that meets the condition or is caught by the catch-all key
  
  if (key === 'Backspace') {
    let str = calcDisplay.value;
    let newStr = str.slice(0, -1);
    calcDisplay.value = newStr;
  }

  /*
  let effectiveKey = '';

  switch (event.key) {
    case (key === 'Enter' || key === '='):
      effectiveKey = '=';
      break;
    case (key === 'Backspace' || key === 'Delete'):
      effectiveKey = 
  }

  console.log(effectiveKey);
  */
  
  const button = document.querySelector(`button[data-key="${effectiveKey}"]`); // Select the button that matches the key.
  console.log(button);
  if (button) {
      button.click();  // Trigger the button click programmatically. 
  } 
});