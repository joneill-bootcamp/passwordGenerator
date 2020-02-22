// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  // Validate password Length
  if (!passWordLength || passWordLength < 8 || passWordLength > 128) {
    // Password length is too short!
    passwordText.textContent = "Minimum Password Length must be a minimum of 8 & less than 128, No password generated";
    return;
  }

  // Check to see if user wants any of the choices of character types to include,
  // Note, at least ONE of these must be chosen

  includeUpperCase = confirm("Include Upper Case Characters in Password?");
  includeLowerCase = confirm("Include Lower Case Characters in Password?");
  includeNumerics = confirm("Include Numeric Characters in Password?");
  includeSpecial = confirm("Include Special Characters in Password?");

  // Make sure that the user has chosen at leat ONE of these options
  if (!includeUpperCase && !includeLowerCase && !includeNumerics && !includeSpecial) {
    // User did not chose any option
    passwordText.textContent = "You must chose at Least ONE type of character to include, No password Generated";
    return;
  }

  // Generate password using rules supplied
  var password = generatePassword();

  // Display result of generated password to the user
  passwordText.textContent = password;
}

function generatePassword() {
  var length = passWordLength;   
  var charsetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charsetLoweCase = "abcdefghijklmnopqrstuvwxyz";
  var charsetNumeric = "1234567890";
  var charsetSpecial =  " !#$%&'()*+,-./:;<=>?@[\]^_{|}~";
  var retVal = "";

    // Now, we build the final list of characters based on answers, then we pick 
    // from this big list of characters as we generate the password

    var charset = "";

    if (includeUpperCase === true) charset += (charsetUpperCase);
    if (includeLowerCase === true) charset += (charsetLoweCase);
    if (includeNumerics === true)  charset += (charsetNumeric);
    if (includeSpecial === true)   charset += (charsetSpecial);

  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
