function generatePassword() {
  var length = parseInt(document.getElementById('length').value);
  var includeUppercase = document.getElementById('includeUppercase').checked;
  var includeNumbers = document.getElementById('includeNumbers').checked;
  var includeSymbols = document.getElementById('includeSymbols').checked;

  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()_+{}[]|:"<>?-=';

  var characters = lowercaseLetters;
  if (includeUppercase) characters += uppercaseLetters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById('password').textContent = password;
}
