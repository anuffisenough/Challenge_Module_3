// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordArray = [];
var passwordArray2 = [];
var passwardArray3 = [];


function writePassword() {
//Determines password lenght and iteration number. Prompts to re-enter if outside of specified range.
  var length = prompt("Please choose a password length as a whole number from 8 to 128 characters.", "");
  if (8 <= length && length <= 128) {
    alert("Thank you!");
  } else {
    prompt("Please choose a valid password length as a whole number from 8 to 128 characters.", "");
  };

//User input determines upper case inclusion and start of password character array. Validates input to get appropriate y or n answer.
  var upperCase = prompt("Should the password include upper case letters? Y or N")
  if (upperCase == "y") {
    alert("Thank you!");
  } else if (upperCase == "n") {
    alert("Thank you!");
  } else if (upperCase != "y" && upperCase != "n") {
    prompt("Please enter a valid response. Should the password include upper case letters? Y or N", "");
    alert("Thank you!");
  };

//User input determines lower case inclusion and character array. Validates input to get appropriate y or n answer.
  var lowerCase = prompt("Should the password include lower case letters? Y or N")
  if (lowerCase == "y") {
    alert("Thank you!");
  } else if (lowerCase == "n") {
    alert("Thank you!");
  } else if (lowerCase != "y" && lowerCase != "n") {
    prompt("Please enter a valid response. Should the password include lower case letters? Y or N", "");
    alert("Thank you!");
  };

//User input determines numberal inclusion. Validates input to get appropriate y or n answer.
  var numbers = prompt("Should the password include numbers? Y or N")
  if (numbers == "y") {
    alert("Thank you!");
  } else if (numbers == "n") {
    alert("Thank you!");
  } else if (numbers != "y" && numbers != "n") {
    prompt("Please enter a valid response. Should the password include numbers? Y or N", "");
    alert("Thank you!");
  };

//User input determines special character inclusion. Validates input to get appropriate y or n answer.
  var special = prompt("Should the password include special characters? Y or N")
  if (special == "y") {
    alert("Thank you!");
  } else if (special == "n") {
    alert("Thank you!");
  } else if (special != "y" && special != "n") {
    prompt("Please enter a valid response. Should the password include special characters? Y or N", "");
    alert("Thank you!");
  };

//Unable to finalize array iteration to generate password.
  alert("Please view your password below")

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

