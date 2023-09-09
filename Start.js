// Starting with the Variables
//Appropriate variable name examples: aplha , APLHA, Alpha, $Alpha, _Alpha, Alpha_1
var firstNumber = 60;
var secondNumber = 40;
var sum = firstNumber + secondNumber;
console.log(sum);
console.log(typeof(sum));

//NUll and Undefined
var myVar1; // declared but not assigned annt value.
console.log(myVar1); // return undefined
var myVar2 = null; //assigned a value null
console.log(myVar2); // return null

//Number Function
//1. Convert numbers to string
var num1 = 50;
var num2 = 40.5
console.log(num1.toString());
console.log(num2.toString());

//2. Convert String to integers
var temp = "4.";
var temp2 = "9.8";
//for integers
console.log(parseInt(temp));
// for floating number
console.log(parseFloat(temp2));
// Trying an invalid input
var inv = "ABC";
console.log(parseInt(inv)); // will output NAN: Not a Number

//tofixed(): take floating number and round it to the given position.

var $strfloat = 67.9998765;
//Round of to a nearest integer
console.log($strfloat.toFixed());
//round of the decimal places up to 2 and 4 digits respectively.
console.log($strfloat.toFixed(2));
console.log($strfloat.toFixed(4));

//---------------------------Playing with Strings----------------------

var $firstString = "I am Learning Javascript";
console.log($firstString);
console.log(typeof($firstString));
//When the string involues a single or double quote in the sentence itself, then thereis two ways to pass it in a string varaibale"
//Use the single quotes for double quotes or vice-versa
var doublequote1 = "I love 'JavaScript'";
var doublequote2 = 'I love "JavaScript"';
// use escape sequence (\)
var doublequote3 = "I love \"Javascript \"";
var doublequote4 = "I love \'Javascript \'";

//-------------------------String Functions-------------------------
//Find index of a first occurence of string inside another string
var exampleString = "I find Javascript very interesting, it is very easy to learn Javascripyt";
console.log(exampleString.indexOf('Javascript')); // will return index of Javascript in the sentence
console.log(exampleString.indexOf('JavaScript')); // will return 0 as javascript is case sensitive
//Find index of a last occurence of string inside another string
console.log(exampleString.lastIndexOf('Javascript')); // will return index of Javascript in the sentence

// Get a part of a string using function slice(start,end)
var slicevar = "It is Explaining the use of Slice function in the Javascript.";
//Suppose we need to extract the "Slice" Word From the string 
console.log(slicevar.slice(28,34));
// If provided only one value then it will atke it as a start parmerter and print all the value up to th end.
console.log(slicevar.slice(6));
// negative value in the parameter Will count the index from last
console.log(slicevar.slice(-11));

// Get Sub String function - substr(startpos, length)
var subString = "Javascript is a programming language";
console.log(subString.substr(0,10));
console.log(subString.substr(11));

//to convert the sample string to uppercase or lowercase.
var helloJS = "Hello1 javScript, You are veryUseful in learning the Frontend Development";
console.log(helloJS.toUpperCase());
console.log(helloJS.toLowerCase());

//to conactenate (Add) two strings
var string1 = "This is a Javascript";
var string2 = "Cheatsheet";
console.log(string1.concat(' ',string2));
var string3 = "tutorial";
console.log(string1.concat(' ',string2,' ',string3));

// Or can use "+" sign for string concatination
console.log(string1 + " " +string2 + " " +string3);

//charAt(): will take the postion as argument and return the cahracter
var sampleCharAT = "Check my Functionality";
console.log(sampleCharAT.charAt(10));

//split(): spilt teh given string as per the argument passed
var checkSplitMethod = "This is Testing of the Split function of the string in javascript";
console.log(checkSplitMethod.split(' '));

//trim() - it removes extra spaces
var extraspacestring = '           I am a Sample String   ';
console.log(extraspacestring.trim());

//-------------------------------Conditional Statements-----------------
// If-else staement
if(1000 > 10) {
    console.log("It is true");
}
else if(10>5){
    console.log("Again a True")
}
else {
    console.log("It is a false");
}
// switch condition

var myTempVar = 30;
switch(myTempVar){
    case 10:
        console.log("Matched with 10");
        break;
    case 20:
        console.log("Matched with 20");
        break;
    case 30:
        console.log("Matched with 30");
        break;
    case 40:
        console.log("Matched with 40");
        break;
    default:
        console.log("could not find a match");
}