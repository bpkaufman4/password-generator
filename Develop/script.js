// Assignment code here
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbersArray = ['1','2','3','4','5','6','7','8','9','0'];
var specialArray = ['!','@','#','$','%','^','*','(',')'];
var optionsArray = [];
var passwordArray = [];

var length;
var isUpper;
var isLower;
var isNumber;
var isSpecial;

var generatePassword = function() {
  console.log(length);
  if (isUpper) {
    for (let i = 0; i < uppercaseArray.length; i++) {
      optionsArray.push(uppercaseArray[i]);
    }
  }
  if (isLower) {
    for (let i = 0; i < lowercaseArray.length; i++) {
      optionsArray.push(lowercaseArray[i]);
    }
  }
  if (isNumber) {
    for (let i = 0; i < numbersArray.length; i++) {
      optionsArray.push(numbersArray[i]);
    }
  }
  if (isSpecial) {
    for (let i = 0; i < specialArray.length; i++) {
      optionsArray.push(specialArray[i]);
    }
  }
  console.log(optionsArray);

  for (let i = 0; i <= length; i++) {
    var randomCharacter = optionsArray[Math.floor(Math.random()*optionsArray.length)];
    console.log(randomCharacter);
    passwordArray.push(randomCharacter);
  }
  
  var joinedString = passwordArray.join("");

  return joinedString;
}

var characterCriteria = function() {
  var characterLength = function() {
    var lengthPrompt = window.prompt("Between 8 and 128 characters, how long would you like your password to be?")
    console.log(lengthPrompt);
    if (lengthPrompt < 8 || lengthPrompt > 128)
    {
      window.alert("Your password must be between 8 and 128 characters. Please try again.")
      characterLength();
    } else {
      length = lengthPrompt;
    }
    console.log(length);
  }

  characterLength();

  var lowercase = function() {
    var lowercaseConfirm = window.prompt("Would you like lowercase characters in your password? type YES or NO")
    console.log(lowercaseConfirm);
    lowercaseConfirm = lowercaseConfirm.toLowerCase();  
    
    if (lowercaseConfirm === "yes") {
      window.alert("You have chosen to include lowercase characters.")
      isLower = true;
    } else if (lowercaseConfirm === "no") {
      window.alert("You have chosen not to include lowercase characters.")
      isLower = false;
    } else {
      window.alert("Please choose a valid response.")
      lowercase();
    }
    console.log(isLower);
  }

  lowercase();

  var uppercase = function() {
    var uppercaseConfirm = window.prompt("Would you like uppercase characters in your password? type YES or NO")
    console.log(uppercaseConfirm);
    uppercaseConfirm = uppercaseConfirm.toLowerCase();
    if (uppercaseConfirm === "yes") {
      window.alert("You have chosen to include uppercase characters.")
      isUpper = true;
    } 
    else if (uppercaseConfirm === "no") {
      window.alert("You have chosen not to include uppercase characters.")
      isUpper = false;
    }
    else {
      window.alert("Please choose a valid response.")
      uppercase();
    }
    console.log(isUpper);
  }

  uppercase();

  var numeric = function() {
    var numericConfirm = window.prompt("Would you like numeric characters in your password? type YES or NO")
    console.log(numericConfirm);
    numericConfirm = numericConfirm.toLowerCase();
    if (numericConfirm === "yes") {
      window.alert("You have chosen to include numeric characters.")
      isNumber = true;
    } 
    else if (numericConfirm === "no") {
      window.alert("You have chosen not to include numeric characters.")
      isNumber = false;
    }
    else {
      window.alert("Please choose a valid response.")
      numeric();
    }
    console.log(isNumber);
  }

  numeric();

  var special = function() {
    var specialConfirm = window.prompt("Would you like special characters in your password? type YES or NO")
    console.log(specialConfirm);
    specialConfirm = specialConfirm.toLowerCase();
    if (specialConfirm === "yes") {
      window.alert("You have chosen to include special characters.")
      isSpecial = true;
    } 
    else if (specialConfirm === "no") {
      window.alert("You have chosen not to include special characters.")
      isSpecial = false;
    }
    else {
      window.alert("Please choose a valid response.")
      special();
    }
    console.log(isSpecial);
  }

  special();


  if (!isUpper && !isLower && !isNumber && !isSpecial) {
    window.alert("Please select at lease one character type for your password.")
    characterCriteria();
  } else {
    generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

characterCriteria();