// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




// Function for getting a random element from an array
function getRandom(arr) {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var correctPrompt = getprompts (); //either true or false
  var passwordText = document.querySelector('#password');

  if(correctPrompts) {
var newPassword = generatePassword ();
passwordTest.value = newPassword
  }else {
    passwordText.value ="";
  }

  passwordText.value = password;
}

// Function to generate password with user input
function generatePassword() {

}
var password = "";
for(var i = 0; i < characterLenght; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.lenght);
  password = password + choiceArr[randomIndex];
}
return password;
// Function to prompt user for password options
function getPasswordOptions() {
  choiceArr = []

  let characterlength = parseInt(`How many characters do you want your password to have?`);
  
  if(isNaN(characterlength) || characterlength < 10 || characterlength > 65) {
    alert("character length must be 10 - 65 digits. please try agian");
  }
  return false;
  }
  
  //when is canceled, then I will ask to confirm the character they want to include in their password
  if(confirm("Do you want lower case letters in your password")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  
  if(confirm("Do you want upper case letters in your password")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if(confirm("Do you want special characters in your password")) {
    choiceArr = choiceArr.concat(specialArr);
  }
  
  if(confirm("Do you want numbers in your password")) {
    choiceArr = choiceArr.concat(numbersArr);
  }
  
  return true;
  