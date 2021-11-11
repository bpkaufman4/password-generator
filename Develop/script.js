// Assignment code here

var characterCriteria = function() {
  var lengthPrompt = window.prompt("Between 8 and 128 characters, how long would you like your password to be?")
  console.log(lengthPrompt);
  if (lengthPrompt < 8 || lengthPrompt > 128)
  {
    window.alert("Your password must be between 8 and 128 characters. Please try again.")
    characterLength();
  }
  var lowercaseConfirm = window.prompt("Would you like lowercase characters in your password? type YES or NO")
  console.log(lowercaseConfirm);
  lowercaseConfirm = lowercaseConfirm.toLowerCase();
  if (lowercaseConfirm === "yes") {
    window.alert("You have chosen to include lowercase characters.")
  } 
  else if (lowercaseConfirm === "no") {
    window.alert("You have chosen not to include lowercase characters.")
  }
  else {
    window.alert("Please choose a valid response.")
    lowercase();
  }

  var uppercaseConfirm = window.prompt("Would you like uppercase characters in your password? type YES or NO")
  console.log(uppercaseConfirm);
  uppercaseConfirm = uppercaseConfirm.toLowerCase();
  if (uppercaseConfirm === "yes") {
    window.alert("You have chosen to include uppercase characters.")
  } 
  else if (uppercaseConfirm === "no") {
    window.alert("You have chosen not to include uppercase characters.")
  }
  else {
    window.alert("Please choose a valid response.")
    uppercase();
  }



  var numericConfirm = window.prompt("Would you like numeric characters in your password? type YES or NO")
  console.log(numericConfirm);
  numericConfirm = numericConfirm.toLowerCase();
  if (numericConfirm === "yes") {
    window.alert("You have chosen to include numeric characters.")
  } 
  else if (numericConfirm === "no") {
    window.alert("You have chosen not to include numeric characters.")
  }
  else {
    window.alert("Please choose a valid response.")
    numeric();
  }

  var specialConfirm = window.prompt("Would you like special characters in your password? type YES or NO")
  console.log(specialConfirm);
  specialConfirm = specialConfirm.toLowerCase();
  if (specialConfirm === "yes") {
    window.alert("You have chosen to include special characters.")
  } 
  else if (specialConfirm === "no") {
    window.alert("You have chosen not to include special characters.")
  }
  else {
    window.alert("Please choose a valid response.")
    special();
  }


  if (lowercaseConfirm === "no" && uppercaseConfirm === "no" && numericConfirm === "no" && specialConfirm === "no") {
    window.alert("Please select at lease one character type for your password.")
    characterCriteria();
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