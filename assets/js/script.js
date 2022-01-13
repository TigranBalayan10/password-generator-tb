// Assignment code here

var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function getRandomCharFromArray(array) {
  var randomIndex = randomChar(array.length - 1);
  return array[randomIndex];
}

function randomChar(max) {
  return Math.floor(Math.random() * max);
};


// prompted for password criteria
var passwordLength = 0;
function generatePassword() {
  // prompted for the length of the password
  if (passwordLength === 0) {
    passwordLength = parseInt(prompt("Choose the length of password. Between 8 and 128 characters"));
    var errorMessage = 0;
    if (passwordLength < 8) {
      errorMessage = 'Password needs to be at least 8 characters long';
    } else if (passwordLength > 128) {
      errorMessage = 'Password needs to be less than 128 characters';
    } else if (!passwordLength) {
      errorMessage = 'Please choose a password length';
    }

    if (errorMessage) {
      alert(errorMessage);
      passwordLength = 0;
      return generatePassword();
    }
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
