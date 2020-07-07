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

// var pwUppers = confirm("Would you like for your password to contain upper-case letters?");
// var pwLowers = confirm("Would you like for your password to contain lower-case letters?");
// var pwNumbers = confirm("Would you like for your password to contain numbers?");
// var pwSymbols = confirm("Would you like for your password to contain special characters?");

// Array of answers from the above questions
// var answers=[pwLowers, pwUppers, pwNumbers, pwSymbols];

// Arrays containing characters for potential passwords
var listUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var listLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var listNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var listSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "]", "}", "[", "{", ";", ":", "/", "?", ".", ">", ",", "<"];

var YYYY = [listUppers, listLowers, listNumbers, listSymbols];
var YYYYlength = listUppers.length + listLowers.length + listNumbers.length + listSymbols.length;
var pwCharacter = YYYY[Math.floor(Math.random() * YYYYlength)];

console.log(pwCharacter)

