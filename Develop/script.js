// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var passwordLength = window.prompt("Please choose a password length as a whole number from 8 to 128 characters.", "");

  window.alert("Thank you!")

  var passwordCase = window.prompt("Should the password include uppercase letters? Y or N", "")

  window.alert("Thank you!")

  var passwordNumerals = window.prompt("Should the password include numeric values? Y or N")

  window.alert("Thank you!")

  var passwordSpecialNumberals = window.prompt("Should the password include special characters? Y or N")

  window.alert("Thank you!")

  window.alert("Please view your password below")



  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

