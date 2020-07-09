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

// Variables that the user confirms

  // var pwLength=prompt("How many characters should your password contain?");
  // var i = pwLength

  // if (pwLength >= 8 && pwLength <= 128) {

    // var pwUppers = confirm("Would you like for your password to contain upper-case letters?");
    // var pwLowers = confirm("Would you like for your password to contain lower-case letters?");
    // var pwNumbers = confirm("Would you like for your password to contain numbers?");
    // var pwSymbols = confirm("Would you like for your password to contain special characters?");

  // } else {

    // alert("Sorry, your password must be between 8 and 128 characters in length.  Please refresh the page and try again.");

  //  }


// Array of answers from the above questions
// var answers=[pwLowers, pwUppers, pwNumbers, pwSymbols];

// Arrays containing characters for potential passwords
var listUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var listLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var listNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var listSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "]", "}", "[", "{", ";", ":", "/", "?", ".", ">", ",", "<"];

// Variables constituting a random selection from each of the above variables

var pickUpper = listUppers[Math.floor(Math.random() *listUppers.length)]
var pickLower = listLowers[Math.floor(Math.random() *listLowers.length)]
var pickNumber = listNumbers[Math.floor(Math.random() *listNumbers.length)]
var pickSymbol = listSymbols[Math.floor(Math.random() * listSymbols.length)]

// console.log(pickUpper)
// console.log(pickLower)
// console.log(pickNumber)
// console.log(pickSymbol)

// Variable collection of all possible answer choices, creating an array of one randomly selected object from each selected array.

var YYYY = [pickUpper, pickLower, pickNumber, pickSymbol]
var YYYN = [pickUpper, pickLower, pickNumber]
var YYNY = [pickUpper, pickLower, pickSymbol]
var YYNN = [pickUpper, pickLower]
var YNYY = [pickUpper, pickNumber, pickSymbol]
var YNYN = [pickUpper, pickNumber]
var YNNY = [pickUpper, pickSymbol]
var YNNN = pickUpper
var NYYY = [pickLower, pickNumber, pickSymbol]
var NYYN = [pickLower, pickNumber]
var NYNY = [pickLower, pickSymbol]
var NYNN = pickLower
var NNYY = [pickNumber, pickSymbol]
var NNYN = pickNumber
var NNNY = pickSymbol

// console.log(YYYY)



var pickRandom = YNNY[Math.floor(Math.random() * YNNY.length)]

// console.log(pickRandom.repeat(10))

// function finalChoice () {

//   console.log(pickRandom.repeat(10))

// }

// finalChoice

for (i = 0; i < 20; i++) {

  console.log(pickRandom)
  console.log(pickRandom)
  console.log(pickRandom)
  console.log(pickRandom)
  console.log(pickRandom)

}


