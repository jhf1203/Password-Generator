// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password begins here
function generatePassword() {

    // This is where the user inputs their password length, and we ensure that it is converted into a number rather than a string.
    var pwLength= parseInt(prompt("How many characters should your password contain (between 8 - 128"));

     // This ensures that the password falls within the character length parameters prior to getting the character type criteria.
    if (pwLength >= 8 && pwLength <= 128) {

      var pwUppers = confirm("Would you like for your password to contain upper-case letters?  Please select 'OK' for yes or 'Cancel' for no.");
      var pwLowers = confirm("Would you like for your password to contain lower-case letters?  Please select 'OK' for yes or 'Cancel' for no.");
      var pwNumbers = confirm("Would you like for your password to contain numbers?  Please select 'OK' for yes or 'Cancel' for no.");
      var pwSymbols = confirm("Would you like for your password to contain special characters?  Please select 'OK' for yes or 'Cancel' for no.");

    } else {

      alert("Sorry, your password must be between 8 and 128 characters in length.  Please click the button and try again.");
      return "";

      }

    if (pwUppers==false && pwLowers==false && pwNumbers==false && pwSymbols==false) {

      alert("Sorry, your password must contain at least one of the following character types:  Upper-case letters, lower-case letters, numbers, special characters.  Please click the button and try again.");
      return "";

    } else {

      // Arrays containing characters for potential passwords
      var listUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      var listLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      var listNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

      var listSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "]", "}", "[", "{", ";", ":", "/", "?", ".", ">", ",", "<"];

      // The below array will house all potential options for each password character based on the user's answers in lines 25-28.
      var chosenOptions = [];

      // the four "if" statements below move the appropriate password character options into the chosenOptions array
      if (pwUppers === true) {

        chosenOptions = chosenOptions.concat(listUppers)
        
      };

      if (pwLowers === true) {

        chosenOptions = chosenOptions.concat(listLowers)

      };

      if (pwNumbers === true) {

        chosenOptions = chosenOptions.concat(listNumbers)

      };

      if (pwSymbols === true) {

        chosenOptions = chosenOptions.concat(listSymbols)

      };

      // This is where the password is generated
      var generatePassword = ""

      for (var i = 0; i < pwLength; i++) {

        // Here is where the characters are selected to go into the actual password
        generatePassword += chosenOptions[Math.floor(Math.random() * chosenOptions.length)]

      }

      return generatePassword

    }  

   
}

console.log(password);
console.log(password.value);
console.log(chosenOptions);














