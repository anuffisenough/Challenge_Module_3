// Assignment Code
var includeUppercase = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //requests password length input, and will continue to prompt until a valid length is entered, then saves valid input as password length
    var passwordLengthPrompt = prompt("Please choose a password length as a whole number from 8 to 128 characters.");

    do {passwordLengthPrompt = prompt("Please choose a whole number password length from 8 to 128.");
}   while (8 > passwordLengthPrompt || passwordLengthPrompt > 128);

    if (8 <= passwordLengthPrompt && passwordLengthPrompt <= 128);
        var passwordLength = passwordLengthPrompt
        alert("Thank you! Your password will be " + passwordLength + " characters long.");
    };

 //   console.log(passwordLength);

  //  var uppercasePrompt = prompt("Should the password include upper case letters? Y or N");
 //   includeUppercase = uppercasePrompt;

 //   if (uppercasePrompt == "y") {
 //       alert("Thank you!");
 //       includeUppercase = true; 
 //     } else if (uppercasePrompt == "n") {
 //       alert("Thank you!");
   //     includeUppercase = false;
     // } else {
       // prompt("Please enter a valid response. Should the password include upper case letters? Y or N", "");
        //alert("Thank you!");
      //};


 //   var password = generatePassword();
 //   var passwordText = document.querySelector("#password");

 //   passwordText.value = password;

//};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);