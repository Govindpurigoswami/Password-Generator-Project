const lengthInput = document.getElementById('length');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password-display');

function generatePassword(length, useUppercase, useNumbers, useSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let characterPool = lowercaseChars;

  if (useUppercase) characterPool += uppercaseChars;
  if (useNumbers) characterPool += numberChars;
  if (useSymbols) characterPool += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
}

generateButton.addEventListener('click', () => {
  const length = parseInt(lengthInput.value);
  const useUppercase = includeUppercase.checked;
  const useNumbers = includeNumbers.checked;
  const useSymbols = includeSymbols.checked;

  const password = generatePassword(length, useUppercase, useNumbers, useSymbols);
  passwordDisplay.textContent = password;
});
