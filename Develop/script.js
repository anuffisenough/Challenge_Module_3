// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var passwordLengthInput = window.prompt("Please choose a password length as a whole number from 8 to 128 characters.", "");
  var expression1 = (passwordLengthInput >= 8);
  var expression2 = (passwordLengthInput <= 128);

  if (expression1 && expression2) {
    window.alert("Thank you!");
  } else if (!expression1 || !expression2) {
    window.prompt("Please choose a valid password length as a whole number from 8 to 128 characters.", "");
    window.alert("Thank you!");
  }

  var passwordCaseInput = window.prompt("Should the password include uppercase letters? Y or N", "")
  if (passwordCaseInput == "y" || passwordCaseInput == "n") {
    window.alert("Thank you!");
  } else if (passwordCaseInput != "y" && passwordCaseInput != "n") {
    window.prompt("Should the password include uppercase letters? Y or N", "");
    window.alert("Thank you!");
  }

  var passwordNumeralsInput = window.prompt("Should the password include numbers? Y or N")
  if (passwordNumeralsInput == "y" || passwordNumeralsInput == "n") {
    window.alert("Thank you!");
  } else if (passwordNumeralsInput != "y" && passwordNumeralsInput != "n") {
    window.prompt("Should the password include numbers? Y or N", "");
    window.alert("Thank you!");
  }
  var passwordSpecialCharacterInput = window.prompt("Should the password include special characters? Y or N")
  if (passwordSpecialCharacterInput == "y" || passwordSpecialCharacterInput == "n") {
    window.alert("Thank you!");
  } else if (passwordSpecialCharacterInput != "y" && passwordSpecialCharacterInput != "n") {
    window.prompt("Should the password include special characters? Y or N", "");
    window.alert("Thank you!");
  }
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

