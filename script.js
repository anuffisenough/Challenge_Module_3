// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  
  var length = prompt("Please choose a password length as a whole number from 8 to 128 characters.", "");
  if (8 <= length && length <= 128) {
    alert("Thank you!");
  } else {
    prompt("Please choose a valid password length as a whole number from 8 to 128 characters.", "");
  };

  var upperCase = prompt("Should the password include upper case letters? Y or N")
  if (upperCase == "y" || upperCase == "n") {
    alert("Thank you!");
  } else if (upperCase != "y" && upperCase != "n") {
    prompt("Please enter a valid response. Should the password include upper case letters? Y or N", "");
    alert("Thank you!");
  };

  var lowerCase = prompt("Should the password include lower case letters? Y or N")
  if (lowerCase == "y" || lowerCase == "n") {
    alert("Thank you!");
  } else if (lowerCase != "y" && lowerCase != "n") {
    prompt("Please enter a valid response. Should the password include lower case letters? Y or N", "");
    alert("Thank you!");
  };

  var numbers = prompt("Should the password include numbers? Y or N")
  if (numbers == "y" || numbers == "n") {
    alert("Thank you!");
  } else if (numbers != "y" && numbers != "n") {
    prompt("Please enter a valid response. Should the password include numbers? Y or N", "");
    alert("Thank you!");
  };

  var special = prompt("Should the password include special characters? Y or N")
  if (special == "y" || special == "n") {
    alert("Thank you!");
  } else if (special != "y" && special != "n") {
    prompt("Please enter a valid response. Should the password include special characters? Y or N", "");
    alert("Thank you!");
  };
  
  /*
  var upperCase = confirm("The password should include upper case letters.")
  if (upperCase) {
    alert("Thank you!");
  };

  var lowerCase = confirm("The password should include lower case letters.")
  if (lowerCase) {
    alert("Thank you!");
  };

  var numbers = confirm("The password should include numbers.")
  if (numbers) {
    alert("Thank you!");
  };

  var special = confirm("The password should include special characters.")
  if (special) {
    alert("Thank you!");
  };

  /*
  var passwordNumeralsInput = window.prompt("Should the password include numbers? Y or N")
  if (passwordNumeralsInput == "y" || passwordNumeralsInput == "n") {
    window.alert("Thank you!");
  } else if (passwordNumeralsInput != "y" && passwordNumeralsInput != "n") {
    window.prompt("Should the password include numbers? Y or N", "");
    window.alert("Thank you!");
  };

  var passwordSpecialCharacterInput = window.prompt("Should the password include special characters? Y or N")
  if (passwordSpecialCharacterInput == "y" || passwordSpecialCharacterInput == "n") {
    window.alert("Thank you!");
  } else if (passwordSpecialCharacterInput != "y" && passwordSpecialCharacterInput != "n") {
    window.prompt("Should the password include special characters? Y or N", "");
    window.alert("Thank you!");
  }
  
*/
  window.alert("Please view your password below")

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

