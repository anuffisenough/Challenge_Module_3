// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var passwordLengthInput = window.prompt("Please choose a password length as a whole number from 8 to 128 characters.", "");
    window.alert("Thank you!");

  var passwordCaseInput = window.prompt("Should the password include uppercase letters? Y or N", "")

    window.alert("Thank you!")

  var passwordNumeralsInput = window.prompt("Should the password include numeric values? Y or N")

    window.alert("Thank you!")

  var passwordSpecialCharacterInput = window.prompt("Should the password include special characters? Y or N")

    window.alert("Thank you!")

  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  window.alert("Please view your password below")

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

