// Assignment Code
var generateBtn = document.querySelector("#generate");

// Default length of 8

var passWordLength = 8;

// By default, all character type selection is false
var includeUpperCase = false;
var includeLowerCase = false;
var includeNumerics = false;
var includeSpecial = false;

// Get objects from HTLM page
var passwordText = document.querySelector("#password");

// Clear the Output display box
//passwordText.value = "";

// Write password to the #password input
function writePassword() {

  // Confirm user choices
  passWordLength = parseInt(prompt("Length of Password in Characters (min 8)?","0"));
  console.log(passWordLength);

  // Validate password Length
  if (!passWordLength || passWordLength < 8 || passWordLength > 128) {
    // Password length is too short!
    passwordText.value = "Minimum Password Length must be a minimum of 8 & less than 128, please try again.";
    return;
  }


  
  var password = generatePassword();
  passwordText.value = password;

}


function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
