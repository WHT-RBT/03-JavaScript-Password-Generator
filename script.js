//Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

//  Prompt instruction for the user to begin
window.onload = alert("Welcome! Please click the 'Generate password' button to begin!");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function tryAgain() {
   return confirm("PLEASE TRY AGAIN")
}

function getLength() {
   var passwordLength = prompt("Please enter number of characters you would like for your password. Please note, your Password must be between 8 and 128 charachters");
   console.log(passwordLength)
   if (passwordLength >= 8 && passwordLength <= 128) {
      return passwordLength
   }
   var redo = tryAgain()
   if (redo === true) {
      return getLength()
   }
}

function getCharacters() {

   var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
   var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
   var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numbers = "0123456789";
   var passwordBase = ""

   if (confirm("Would you like your password to contain 'UPPER CASE' letters?")) {
      console.log("they want to add uppercase latters to their password")
      passwordBase = passwordBase.concat(uppercaseAlphabet)
   }
   if (confirm("Would you like your password to contain 'lower case' letters?")) {
      passwordBase = passwordBase.concat(lowercaseAlphabet)
   }

   if (confirm("Would you like your password to contain numbers?")) {
      passwordBase = passwordBase.concat(numbers)
   }
   if (confirm("Would you like your password to contain symbols?")) {
      passwordBase = passwordBase.concat(specialCharacters)
   }
   if (passwordBase.length > 0) {
      return passwordBase
   }

   var redo = tryAgain()
   if (redo === true) {
      return getCharacters()
   }
}

//Main function = Password Generation
function generatePassword() {
// we want the passwordLength

   var passLength = getLength()
  
   if (passLength === undefined) {
      return "Could not generate password"
   }

   var characterBase = getCharacters()
   if (characterBase === undefined) {
      return "Could not generate password"
   }

   var myFinalPassword = ""
   for (var i = 0; i < passLength; i++) {
      randomNumber = Math.floor(Math.random() * characterBase.length);
      myFinalPassword += characterBase[randomNumber];
   }
   return myFinalPassword
}

//Bonus! function to copy password to clipboard
