// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.prompt("Please choose a password length from 8 to 128 characters.", "")
  window.prompt("Should the password include lowercase letters? Y or N")
  window.prompt("Should the password include uppercase letters? Y or N")
  window.prompt("Should the password include numeric values? Y or N")
  window.prompt("Should the password include special characters? Y or N")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
