let enteredNumber = '';
const numberInput = document.getElementById('numberInput');

document.getElementById('button').addEventListener('click', () => addNumber(e));

document.getElementById('clearButton').addEventListener('click', clearNumber);

document.getElementById('callButton').addEventListener('click', validateNumber);

function addNumber(number) {
  enteredNumber += number;
  numberInput.value = enteredNumber;
}

function clearNumber() {
  enteredNumber = '';
  numberInput.value = enteredNumber;
}

function validateNumber() {
  if (enteredNumber === '4629') {
    return('Successful');
  } return('Wrong');
  }
