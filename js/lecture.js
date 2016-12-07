// Lecture javascript

// An assertion or comparison are to find if something is "true"
// ex. ``
var num1 = 7;
var num2 = 6;

console.assert( num1 > num2, "Is five greater than six?" );



var string1 = "0";
var string2 = "0";

console.assert(string1 == string2, "Loosely comparing the strings");
console.assert(string1 === string2, "Strictly comparing the strings");











// In order to accept arguments I need to add them
//   into the parens
function addTwoNumbers(number1, number2){
  // Add the two numbers together
  var sumOfTwoNumbers = number1 + number2;
  // Need to output the sum of `two numbers`
  return sumOfTwoNumbers;
}

// Creating an assertion/comparison against a function call
//   references the "RETURN" value
console.assert( addTwoNumbers(3, 19) === 22, "Passing three and nineteen should give me 22 back" );
console.assert( addTwoNumbers(2029, 19801298) === 19803327, "Should equal some ridiculous number" );
console.assert( addTwoNumbers(1, 1) === 2, "Should equal two" );



// Inside of these parens are called argument definitions/declarations
function madLib(wordToAdd){
  // This <word> is the coolest thing ever
  var thisString = "This ";
  var coolestString = " is the coolest thing ever";
  // concat'd in the middle of my two vars with word to add
  var outputString = thisString + wordToAdd + coolestString;
  // Output the sentence
  return outputString;
}

console.assert( madLib("marker") === "This marker is the coolest thing ever",
  "Should add marker to sentence"
);
console.assert( madLib("laptop") === "This laptop is the coolest thing ever", "Should add laptop to sentence" );


var newMadLibString = madLib("iphone");
console.assert(newMadLibString === "This iphone is the coolest thing ever", "Should add iphone to sentence")

var newMadLibString2 = madLib("sunglass");
console.assert(newMadLibString2 === "This sunglass is the coolest thing ever", "Should add sunglass to sentence")


// These could be thought of as "static" and "global" variables
//   I want these to be the same throughout the file
var name = "Jason V";
var address = "250 E Grayson";

// The curly brackets "encapsulate" our code
//   Can also infer "scope"
function sayHello(){
  // The use of `var` here... creates "local" or inside of this function
  var name = "Adam";
  console.log("hello (local) " + name);
  console.log("hello (one level up) " + this.name);
}

function sayGoodbye(){
  console.log("goodbye " + name)
}

function sayAddress(){
  console.log("We are located at: " + address);
}

sayHello();
// sayGoodbye();
// sayAddress();




function removeVowels(text){
  // Know what vowels are...
  var vowelArray = ["A", "E", "O", "U", "I", "a", "e", "i", "o", "u"];

  // Declaring and defining a variable to add to later...
  //   Used to maintain outside of a "for loop"
  var outputString = "";

  // Loop over text
  for(var i = 0; i < text.length; i++){
    // Create reference to current character
    var currentCharacter = text[i];
    // Determine if the character is a vowel
    //   If indexOf return -1 IT IS NOT in the array
    if(vowelArray.indexOf(currentCharacter) === -1){
      // Make new string that has JUST the consonants
      outputString += currentCharacter;
    }
  }
  // Return the string that does not have the vowels
  return outputString;
}

console.assert(removeVowels("Jason Vanderslice") === "Jsn Vndrslc", "Should have removed vowels");


var interval = window.setInterval(
  function(){
    console.log("ONE SECOND");
  },
  1000
);

// The first argument here is an "anonymous" function
//   It does not have a variable reference to call later
var timeout = window.setTimeout(
  function(){
    window.clearInterval(interval);
    console.log("THIS TIMEOUT HAPPENED");
  },
  5000
);



// `document` is how Javascript sees & interacts HTML
document.addEventListener(
  "DOMContentLoaded",
  function(){
    // Only runs when the (DOM) Document Object Model has fully loaded
    var headingElement = document.querySelector(".heading1");
    console.log(headingElement);
  }
);
