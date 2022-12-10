// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  passwordLength = window.prompt("Please choose a password length from 8 to 128 characters.", "")
    console.log(passwordLength);

  window.alert("Thank you!")

  passwordLowerCase = window.prompt("Should the password include lowercase letters? Y or N")

  window.alert("Thank you!")

  passwordUpperCase = window.prompt("Should the password include uppercase letters? Y or N")

  window.alert("Thank you!")

  passwordNumerals = window.prompt("Should the password include numeric values? Y or N")

  window.alert("Thank you!")

  passwordSpecialCharacters = window.prompt("Should the password include special characters? Y or N")

  window.alert("Please view your password below")

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*var passwordLength = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerCaseLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
var upperCaseLetters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]*/
