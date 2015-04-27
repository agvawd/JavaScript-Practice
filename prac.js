function LongestWord(sen) { 
  sen = sen.split(" ");
    var longest = sen.reduce(function(a,b){
      return a.length > b.length ? a : b;
    })  
  return longest;         
}

//Checks for special characters
function LongestWord(str){
  str = str.split(" ");
  var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < str[i].length; j++){
      if(iChars.indexOf(str[i].charAt(j)) !== -1){
        if(i === 0){
          str = str.splice(i+1, str.length)
        }
        else{
          str = str.splice(0,i);
        }
        break;
      }
    }
  }

  var longest = str[0];
  for(var i = 1; i < str.length; i++){
    if(longest.length < str[i].length)
      longest = str[i];
    }
  return longest;
}

// Using the JavaScript language, have the function LetterCapitalize(str)
// take the str parameter being passed and capitalize the first letter of 
// each word. Words will be separated by only one space. 
var sentence = "Words will be separated by only one space"

function LetterCapitalize(str) { 
	str = str.split(" ");
  	for(var i = 0; i < str.length; i++) {
    	str[i] =str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  return str.join(" ");        
}
   
//----------------------------
//Convert a decimal to an improper fraction to a mixed number
var gcd = function (a, b) {
    if (b < 0.0000001) return a; // Since there is a limited precision we need to limit the value.
     return gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
};

var fraction = 3.66;
var num = fraction.toString().split(".");
var fracPart = "." + num[1]; 
//fracPart = parseFloat(fracPart)
var len = fracPart.length - 1;

var denominator = Math.pow(10, len);
var numerator = fracPart * denominator;

var divisor = gcd(numerator, denominator);

numerator /= divisor;
denominator /= divisor;

if(num[0] === "0"){
    var mixedNum = Math.floor(numerator) + '/' + Math.floor(denominator);
    if (mixedNum === "33/100") {
        mixedNum = "1/3";
    }
    else if(mixedNum === "33/50") {
        mixedNum = "2/3";
    }
}
36
else {
    var mixedNum = Math.floor(numerator) + '/' + Math.floor(denominator);
    if (mixedNum === "33/100") {
        mixedNum = "1/3";
    }
    else if(mixedNum === "33/50") {
        mixedNum = "2/3";
    }
    mixedNum = num[0] + " " + mixedNum;
}
 
console.log(mixedNum); 

//--------------------------------------

/*Using the JavaScript language, have the function LetterChanges(str) 
take the str parameter being passed and modify it using the following 
algorithm. Replace every letter in the string with the letter following 
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every 
vowel in this new string (a, e, i, o, u) and finally return this modified string*/
var word = "alphabet";
function LetterChanges(str) { 
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	alphabet = alphabet.split("");
	str = str.split("");
	for(var i = 0; i < str.length; i++) {
		for(var j = 0; j < alphabet.length; j++){
			if(str[i] === alphabet[j]) {
				if(str[i] === "z"){
					str[i] = alphabet[0]
				}
				else{
					str[i] = alphabet[j+1]
					break;
				}
			}
		}
			if(/[aeiou]/.test(str[i])){
				str[i] = str[i].toUpperCase();
			}
	}
  return str.join("");  
}

/*Using the JavaScript language, have the function SimpleSymbols(str) take the str 
parameter being passed and determine if it is an acceptable sequence by either returning 
the string true or false. The str parameter will be composed of + and = symbols with 
several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter 
must be surrounded by a + symbol. So the string to the left would be false. The string will 
not be empty and will have at least one letter. */

function SimpleSymbols(str) {
  var flag = false;
  for(var i = 0; i < str.length; i++){
    if((str.charAt(i) !== "+") && (str.charAt(i) !== "=") && typeof(str.charAt(i)) !== "number"){
      if((str.charAt(i-1) === "+") && (str.charAt(i+1) === "+")){
        flag = true;
      }
      else {
        return false;
      }
    }
  }
  return flag;      
}                           

// Using the JavaScript language, have the function CheckNums(num1,num2) take 
// both parameters being passed and return the string true if num2 is greater 
// than num1, otherwise return the string false. If the parameter values are 
// equal to each other then return the string -1. 

function CheckNums(num1,num2) { 
  if(num2 > num1){
    return "true";
  }
  else if (num1 === num2){
    return "-1"
  }
  else{
    return "false";
  }
  return num1 + num2;       
}                   

// Using the JavaScript language, have the function TimeConvert(num) take 
// the num parameter being passed and return the number of hours and minutes
// the parameter converts to (ie. if num = 63 then the output should be 1:3).
// Separate the number of hours and minutes with a colon. 

function TimeConvert(num) { 
  var hours = parseInt(num / 60);
  var minutes = num % 60;
  var totalTime = hours + ":" + minutes;
  
  return totalTime;
}

// Using the JavaScript language, have the function AlphabetSoup(str) take the
// str string parameter being passed and return the string with the letters in
// alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation
// symbols will not be included in the string.

function AlphabetSoup(str) { 
  return str.split("").sort().join("");         
}

// Using the JavaScript language, have the function ABCheck(str) take the str parameter
// being passed and return the string true if the characters a and b are separated by 
// exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result
// in true because there is exactly three characters between a and b). Otherwise return 
// the string false.

function ABCheck(str) { 
  var flag = false;
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) === "a" && str.charAt(i+3) === "b"){
      flag = true;
    }
  }
  return flag; 
} 

// Using the JavaScript language, have the function VowelCount(str) take the str
// string parameter being passed and return the number of vowels the string contains
// (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.

function VowelCount(str) { 
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if(/[aeiou]/.test(str.charAt(i)){
      counter++;
    }
  }
   
  return counter; 
}

// Using the JavaScript language, have the function WordCount(str) take the str string
// parameter being passed and return the number of words the string contains 
// (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

function WordCount(str) { 
  str = str.split(" "); 
  return str.length;         
}

// Using the JavaScript language, have the function ExOh(str) take the str parameter being 
// passed and return the string true if there is an equal number of x's and o's, otherwise 
// return the string false. Only these two letters will be entered in the string, no punctuation
// or numbers. For example: if str is "xooxxxxooxo" then the output should return false because
// there are 6 x's and 5 o's. 

function ExOh(str) { 
  var xCount = 0;
  var oCount = 0;
  var flag = false;
  for (var i = 0; i < str.length; i++) {
    if(str.charAt(i) === "x"){
      xCount++;
    }
    else{
      oCount++;
    }
  };
  if(xCount === oCount){
    flag = true;
  }
  else {
    flag = false;
  }
  return flag;    
}

// Using the JavaScript language, have the function Palindrome(str) take the str parameter
// being passed and return the string true if the parameter is a palindrome, (the string is
// the same forward as it is backward) otherwise return the string false. For example: 
// "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function Palindrome(str) {
 return str.split(" ").join("") === str.split(" ").join("").split("").reverse().join("");
}

// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored
// in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return
// "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.
// An arithmetic sequence is one where the difference between each of the numbers is consistent, where as
// in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
// Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be 
// entered as parameters, 0 will not be entered, and no array will contain all the same elements.

function ArithGeo(arr) { 
  var isArray;
  for(var i = 0; i < arr.length; i++){
    if(arr[i+1] - arr[i] === arr[i+2] - arr[i+1]){
      isArray = "Arithmetic"
    }
    else if(arr[i] / arr[i+1] === arr[i+1] / arr[i+2]){
      isArray = "Geometric"
    }
    else if(arr[i+2] === undefined){
      break;
    }
    else {
      isArray = -1;
    }
  }         
  return isArray;
}

// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of
// numbers stored in arr and return the string true if any combination of numbers in the 
// array can be added up to equal the largest number in the array, otherwise return the 
// string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return 
// true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the 
// same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) { 
  arr = arr.sort(function(a, b){return a-b})
  var greatest = arr.pop();
  var sum = 0;
  var numberofTimes = sFact(arr.length);
  while(numberofTimes > 0){
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
      if(sum === greatest) {
        return true;
      }
    }
    arr = shuffleArray(arr);
    sum = 0;
    numberofTimes--;
  }
    return false;     
}

function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i); // no +1 here!
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Using the JavaScript language, have the function LetterCountI(str) take the str parameter
// being passed and return the first word with the greatest number of repeated letters. For
// example: "Today, is the greatest day ever!" should return greatest because it has 2 e's 
// (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with 
// repeating letters return -1. Words will be separated by spaces

var word = "Today, is the greatest day ever!";

function LetterCountI(str) { 
  var senSplit = str.split(" ")
  var count = 0;
  for(var i = 0; i < senSplit.length; i++){
    var word = senSplit[i];
    for(var j = 0; j < word.length; j++){
      var letter = word[j];
      for(var k = 0; k < word.length; k++) {
        if(letter === word.charAt(k)){
          count++;
          if (count > 1) {
            return word;
          }
        }
      }
      count = 0;
    }
  }
    return -1;
}
 
// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers
// stored in arr and return the second lowest and second greatest numbers, respectively, separated
// by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The 
// array will not be empty and will contain at least 2 numbers. It can get tricky if there's just 
// two numbers! 

function SecondGreatLow(arr) { 
  arr = arr.sort(function(a, b){return a-b})
  var secLow;
  var secHigh;
  if (arr.length <= 2){
    return arr[1] + ' ' + arr[0];
  }
  else{
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i+1]){
        secLow = arr[i+1]
        break;
      }
    }
    for(var j = arr.length - 1; j >= 0; j --){
      if(arr[j] !== arr[j-1]){
        secHigh = arr[j-1];
        break;
      }
    }
  }
  return secLow + ' ' + secHigh;        
}

// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both 
// parameters being passed, divide num1 by num2, and return the result as a string with properly 
// formatted commas. If an answer is only 3 digits long, return the number with no commas 
// (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output 
// should be "12,345". 

function DivisionStringified(num1,num2) { 
  var total = num1 / num2;
  if(total < 1){
    return Math.round(total);
  }
  else{
    total = Math.round(total);
    return total.toLocaleString();
  }
}

// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter 
// being passed which will be two times (each properly formatted with a colon and am or pm) 
// separated by a hyphen and return the total number of minutes between the two times. The time 
// will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should 
// be 60. If str is 1:00pm-11:00am the output should be 1320. 

function CountingMinutesI(str) { 
  var times=str.split("-"); 
  var time1=times[0].slice(0,times[0].length-2).split(":"); 
  var time1ap=times[0][times[0].length-2]; 
  var time2=times[1].slice(0,times[0].length-2).split(":");
  var time2ap=times[1][times[1].length-2]; 
  var time1min=parseInt(time1[0])*60+ parseInt(time1[1]); 
  var time2min=parseInt(time2[0])*60+parseInt(time2[1]); 

  if (time1ap === "p" && time1[0] !=="12"){
   time1min += 12 * 60;
  }
  if (time2ap === "p" && time2[0] !== "12"){
   time2min += 12 * 60; 
  }
  if (time1ap === "a" && time1[0] ==="12"){
   time1min -= (12 * 60);   
  }
  if (time2ap === "a" && time2[0] ==="12"){
   time2min -= (12 * 60);   
  }
   
  if (time1min > time2min){
   return ((24 * 60) - time1min) + time2min;
  }
  else {  
   return time2min-time1min; 
  }
}

// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between
// each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. 
// Don't count zero as an odd number. 

function DashInsert(str) { 
  str = str.split("");
  for(var i = 0; i < str.length; i++){
    if(parseInt(str[i]) % 2 === 1 && parseInt(str[i+1]) % 2 === 1){
      str.splice(i+1, 0, "-");
    }
  }
  return str.join("");         
}

// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap 
// the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. 
// Let numbers and symbols stay the way they are. 

function SwapCase(str) { 
  str = str.split("");
  for (var i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      str[i] = str[i].toLowerCase();
    }
    else{
      str[i] = str[i].toUpperCase(); 
    }
  }
  return str.join("");     
}

// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers 
// stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other 
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array 
// will not be empty, will only contain positive integers, and will not contain more than one mode. 

function MeanMode(arr) { 
  var mean = FindMean(arr);
  var mode = FindMode(arr);

  if(mean === mode){
    return 1;
  }
  else{
    return 0;
  }
}

function FindMean(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}

function FindMode(arr){
  var mode = {};
  var max = 0, count = 0;

  arr.forEach(function(e) {
    if(mode[e]){
      mode[e]++;
    }
    else{
      mode[e] = 1;
    }

    if (count < mode[e]) { 
      max = e;
      count = mode[e];
    }
  });
  return max;
}

// Using the JavaScript language, have the function NumberSearch(str) take the str parameter,
// search for all the numbers in the string, add them together, then return that final number. 
// For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate 
// between single digit numbers and multiple digit numbers like in the example above. So "55Hello" 
// and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

function NumberAddition(str) { 
  var total = 0;
  var multiNum = 0;
  var num = 0;
  str = str.split("");
  for(var i = 0 ; i < str.length; i++){
    if(parseInt(str[i]) && (parseInt(str[i + 1]) || parseInt(str[i + 1]) === 0)) {
      multiNum = 0;
      multiNum = str[i] + str[i+1];
      multiNum = parseInt(multiNum);
      total += multiNum;
      i++;
    }
    else if(parseInt(str[i]) && !parseInt(str[i + 1])) {
      num = 0;
      num = parseInt(str[i]);
      total += num;
    }
  }
  return total;
}

// Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of 
// strings stored in strArr and return the third largest word within in. So for example: if 
// strArr is ["hello", "world", "before", "all"] your output should be world because "before" 
// is 6 letters long, and "hello" and "world" are both 5, but the output should be world 
// because it appeared as the last 5 letter word in the array. If strArr was 
// ["hello", "world", "after", "all"] the output should be after because the first three words 
// are all 5 letters long, so return the last one. The array will have at least three strings 
// and each string will only contain letters. 

function ThirdGreatest(arr) {
  var arr2 = arr.sort(function(a,b){ return b.length - a.length});
  return arr2[2];
};

// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being 
// passed which will be an integer and return the string true if it's a power of two. If it's not 
// return the string false. For example if the input is 16 then your program should return the 
// string true but if the input is 22 then the output should be the string false. 

function PowersofTwo(num) { 
  while(num !== 2){
    if (num % 2 === 1){
      break;
    }
    num /= 2;
    if(num === 2){
      return true;
    }
  }
  if(num === 2){
      return true;
  }
  else {
    return false;
  }
}

// Using the JavaScript language, have the function AdditivePersistence(num) take the num 
// parameter being passed which will always be a positive integer and return its additive 
// persistence which is the number of times you must add the digits in num until you reach 
// a single digit. For example: if num is 2718 then your program should return 2 because 
// 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

function AdditivePersistence(num, counter) { 
  var total = 0;
  num = num.toString().split("");
  if(num.length === 1 && counter === 0){
    return counter;
  }
  for (var i = 0; i < num.length; i++) {
    total += parseInt(num[i]);
  }
  if(total.toString().split("").length === 1){
    counter++;  
    return counter;
  }
  else {
    counter++;
    return AdditivePersistence(total, counter);
  }
}

// Using the JavaScript language, have the function MultiplicativePersistence(num) take the 
// num parameter being passed which will always be a positive integer and return its 
// multiplicative persistence which is the number of times you must multiply the digits in 
// num until you reach a single digit. For example: if num is 39 then your program should 
// return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 

function MultiplicativePersistence(num, counter) { 
  var total = 1;
  num = num.toString().split("");
  if(num.length === 1 && counter === 0){
    return counter;
  }
  for (var i = 0; i < num.length; i++) {
    total *= parseInt(num[i]);
  }
  if(total.toString().split("").length === 1){
    counter++;  
    return counter;
  }
  else {
    counter++;
    return MultiplicativePersistence(total, counter);
  }
}

// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr 
// parameter being passed which will be an array of integers ranging from 1...n and the letter 
// "E" and return the correct subset based on the following rules. The input will be in the 
// following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and 
// the E means take out the smallest integer currently in the whole set. When finished, your 
// program should return that new set with integers separated by commas. For example: if 
// strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 

function OffLineMinimum(strArr) { 
  var intArr = [];
  var ansArr = [];
  for(var i = 0; i < strArr.length; i++) {
    if(parseInt(strArr[i])){
      intArr.push(strArr[i]);
    }
    else if(strArr[i] === "E"){
      ansArr.push(findMin(intArr))
      var idx = intArr.indexOf(findMin(intArr))
      intArr.splice(idx, 1);
    }
  }
  return ansArr.join(",");
}

function findMin(arr){
  arr = arr.sort(function(a,b){return a - b});
  return arr[0];
}

//--------------Medium Difficulty---------------
// Using the JavaScript language, have the function PrimeTime(num) take the num parameter
// being passed and return the string true if the parameter is a prime number, otherwise 
// return the string false. The range will be between 1 and 2^16.

function PrimeTime(num) { 
  if (num < 2){
    return false;
  }
  var q = parseInt(Math.sqrt(num));
  for (var i = 2; i <= q; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

// Using the JavaScript language, have the function RunLength(str) take the str parameter being 
// passed and return a compressed version of the string using the Run-length encoding algorithm. 
// This algorithm works by taking the occurrence of each repeating character and outputting that 
// number along with a single character of the repeating sequence. For example: "wwwggopp" would 
// return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

function RunLength(str) { 
  var ansStr = "";
  var count = 0;
  for(var i = 0; i < str.length; i++){
    var letter = str[i];
    if (letter === str[i+1]){
      count++;
    }
    else {
      count++;
      ansStr += count + letter;
      count = 0;
    }
  }
  return ansStr;
}

// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The 
// range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

function PrimeMover(num) { 
  var count = 0;
  for (var i = 1; i <= 10^4; i++) {
    if(PrimeTime(i)) {
      count++;
    }
    if(count === num){
      return i;
    }
  }   
}

function PrimeTime(num) { 
  if (num < 2){
    return false;
  }
  var q = parseInt(Math.sqrt(num));
  for (var i = 2; i <= q; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being 
// passed and return the string true if the parameter is a palindrome, (the string is the same forward 
// as it is backward) otherwise return the string false. The parameter entered may have punctuation 
// and symbols but they should not affect whether the string is in fact a palindrome. For example: 
// "Anne, I vote more cars race Rome-to-Vienna" should return true. 

function PalindromeTwo(str) { 
  str = str.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  return str.split(" ").join("") === str.split(" ").join("").split("").reverse().join("");
}

// Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed 
// and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both 
// numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should 
// be 4. The range for both parameters will be from 1 to 10^3.

function Division(num1,num2) {
 if (!num2) {
      return num1;
  }
  return Division(num2, num1 % num2);
}

// Using the JavaScript language, have the function StringScramble(str1,str2)
// take both parameters being passed and return the string true if a portion 
// of str1 characters can be rearranged to match str2, otherwise return the 
// string false. For example: if str1 is "rkqodlw" and str2 is "world" the output 
// should return true. Punctuation and symbols will not be entered with the parameters. 

function StringScramble(str1, str2) {
  var output = '';
  for (var i = 0; i < str2.length; i++) {
    var pattern = new RegExp(str2[i]);
    if (str1.match(pattern) && str1.match(pattern)[0]) {
      output += str1.match(pattern)[0];
      str1 = str1.replace(str1.match(pattern)[0], '');
    }
  }
  
  return output === str2 ? true : false;
}

// Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers 
// stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern 
// or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow 
// either pattern return -1. An arithmetic sequence is one where the difference between each of 
// the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied 
// by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
// Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

function ArithGeoII(arr) { 
var isArray;
  for(var i = 0; i < arr.length; i++){
    if(arr[i+1] - arr[i] === arr[i+2] - arr[i+1]){
      isArray = "Arithmetic"
    }
    else if(arr[i] / arr[i+1] === arr[i+1] / arr[i+2]){
      isArray = "Geometric"
    }
    else if(arr[i+2] === undefined){
      break;
    }
    else {
      isArray = -1;
    }
  }         
  return isArray; 
}

// Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored 
// in arr and return the string true if any combination of numbers in the array can be added up to equal 
// the largest number in the array, otherwise return the string false. For example: if arr contains 
// [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be 
// empty, will not contain all the same elements, and may contain negative numbers. 

function ArrayAddition(arr) { 
  arr = arr.sort(function(a, b){return a-b})
  var greatest = arr.pop();
  var sum = 0;
  var numberofTimes = sFact(arr.length);
  while(numberofTimes > 0){
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
      if(sum === greatest) {
        return true;
      }
    }
    arr = shuffleArray(arr);
    sum = 0;
    numberofTimes--;
  }
    return false;     
}

function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Using the JavaScript language, have the function BinaryConverter(str) return the decimal form
// of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8. 

function BinaryConverter(str) { 
  return parseInt(str, 2);
}

// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed 
// and return the first word with the greatest number of repeated letters. For example: "Today, is the 
// greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever 
// which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCount(str) { 
  var senSplit = str.split(" ")
  var count = 0;
  for(var i = 0; i < senSplit.length; i++){
    var word = senSplit[i];
    for(var j = 0; j < word.length; j++){
      var letter = word[j];
      for(var k = 0; k < word.length; k++) {
        if(letter === word.charAt(k)){
          count++;
          if (count > 1) {
            return word;
          }
        }
      }
      count = 0;
    }
  }
  return -1;
}

// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform 
// a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by 
// shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, 
// spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 
// the output should be "Ecguct Ekrjgt".

function CaesarCipher(str,num) { 
  var ansStr = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  str = str.split("");
  alphabet = alphabet.split("");

  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < alphabet.length; j++) {
      if(str[i] === alphabet[j]) {
        if(j+num > 25){
          var idx = (j + num) - 26;
          str[i] = alphabet[idx]; 
        }
        else{
          str[i] = alphabet[j+num];
        }
        break;
      }
      else if(str[i] === alphabet[j].toUpperCase()){
        if(j+num > 25){
          var idx = (j + num) - 26;
          str[i] = alphabet[idx].toUpperCase()  
        }
        else{
          str[i] = alphabet[j+num].toUpperCase()
        }
        break;
      }
    }
  }
  return str.join("");
}

// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored 
// in arr and return the number that appears most frequently (the mode). For example: if arr contains 
// [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared 
// in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no 
// mode return -1. The array will not be empty. 

function SimpleMode(arr) { 
  var mode = {};
  var max = 0, count = 0;

  arr.forEach(function(e) {
    if(mode[e]){
      mode[e]++;
    }
    else{
      mode[e] = 1;
    }

    if (count < mode[e]) { 
      max = e;
      count = mode[e];
    }
  });
  if(count < 2){
    return -1;
  }
  else{
    return max;
  }
}

// Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr 
// and return the minimum number of integers needed to make the contents of arr consecutive from the lowest 
// number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because 
// two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. 
// Negative numbers may be entered as parameters and no array will have less than 2 elements.

function Consecutive(arr) { 
  var count = 0;
  arr = arr.sort(function(a,b){return a - b});
  for(var i = arr[0]; i < arr[arr.length - 1]; i++){
    if(arr.indexOf(i) === -1){
      count++;
    }
  }
  return count;
}

// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, 
// divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits 
// after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". 
// The output must contain a number in the one's place even if it is a zero.

function FormattedDivision(num1,num2) { 
  var total = num1 / num2;
  var count = 0;
  total = parseFloat(total.toFixed(4));
  var splitNum = total.toString().split(".");
  if(splitNum[0].length > 3){
    var firstHalf = splitNum[0].split("");
    for(var i = firstHalf.length - 1; i > 0; i--) {
      count++;
      if(count % 3 === 0){
        firstHalf.splice(i, 0 , ",")
      }
    }
    return firstHalf.join("") + "." + splitNum[1];
  }
  else {
    return total.toFixed(4);
  }
}


// Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed 
// which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return 
// the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: 
// if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

function CountingMinutes(str) { 
  var times=str.split("-"); 
  var time1=times[0].slice(0,times[0].length-2).split(":"); 
  var time1ap=times[0][times[0].length-2]; 
  var time2=times[1].slice(0,times[0].length-2).split(":");
  var time2ap=times[1][times[1].length-2]; 
  var time1min=parseInt(time1[0])*60+ parseInt(time1[1]); 
  var time2min=parseInt(time2[0])*60+parseInt(time2[1]); 

  if (time1ap === "p" && time1[0] !=="12"){
   time1min += 12 * 60;
  }
  if (time2ap === "p" && time2[0] !== "12"){
   time2min += 12 * 60; 
  }
  if (time1ap === "a" && time1[0] ==="12"){
   time1min -= (12 * 60);   
  }
  if (time2ap === "a" && time2[0] ==="12"){
   time2min -= (12 * 60);   
  }
   
  if (time1min > time2min){
   return ((24 * 60) - time1min) + time2min;
  }
  else {  
   return time2min-time1min; 
  }
}

// Using the JavaScript language, have the function PermutationStep(num) take the num parameter being passed and 
// return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 
// 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999). 

function PermutationStep(num) { 
  num = num.toString().split("");
  var i = num.length - 1;
  while (i > 0 && num[i - 1] >= num[i])
      i--;
  if (i <= 0)
      return -1;
  
  // Find successor to pivot
  var j = num.length - 1;
  while (num[j] <= num[i - 1])
      j--;
  var temp = num[i - 1];
  num[i - 1] = num[j];
  num[j] = temp;
  
  // Reverse suffix
  j = num.length - 1;
  while (i < j) {
      temp = num[i];
      num[i] = num[j];
      num[j] = temp;
      i++;
      j--;
  }
  return parseInt(num.join(""));
}

// Using the JavaScript language, have the function PrimeChecker(num) take num and return 1 if any arrangement 
// of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 
// because 910 can be arranged into 109 or 019, both of which are primes. 

function PrimeChecker(num) { 
  var numOfTimes = sFact(num.toString().split("").length);
  while(numOfTimes > 0){
    if(PrimeTime(num)){
      return 1;
    }
    else if(!PrimeTime(num)){
      num = num.toString().split("");
      shuffleArray(num)
      num = parseInt(num.join(""))
    }
    numOfTimes--;
  }
  return 0;
}

function PrimeTime(num) { 
  if (num < 2){
    return false;
  }
  var q = parseInt(Math.sqrt(num));
  for (var i = 2; i <= q; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

// Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two 
// odd numbers and insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 
// the output should be 454*67-9-3. Don't count zero as an odd or even number. 

function DashInsertII(num) { 
  num = num.toString().split("");
  for(var i = 0; i < num.length; i++){
    if(parseInt(num[i]) % 2 === 1 && parseInt(num[i+1]) % 2 === 1){
      num.splice(i+1, 0, "-");
    }
    else if(parseInt(num[i]) % 2 === 0 && parseInt(num[i+1]) % 2 === 0 && parseInt(num[i]) !== 0 && parseInt(num[i+1]) !== 0) {
      num.splice(i+1, 0, "*");
    }
  }
  return num.join("");
}

// Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each 
// character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. 
// For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 

function SwapCaseII(str) { 
  var idxOfNum = -1;
  var count = 0;
  str = str.split(" ");
  for (var i = 0; i < str.length; i++){
    var str1 = str[i].split("");
    for(var j = 0; j < str1.length; j++){
      if (parseInt(str1[j])){
        count++;
        if(count === 1){
          idxOfNum = j;
        }
        else if(count === 2){
          var temp = str1[j];
          str1[j] = str1[idxOfNum];
          str1[idxOfNum] = temp;
        }
      }
      else if(str1[j] === str1[j].toUpperCase() && !parseInt(str1[j])){
        str1[j] = str1[j].toLowerCase();
      }
      else if (str1[j] === str1[j].toLowerCase() && !parseInt(str1[j])){
        str1[j] = str1[j].toUpperCase(); 
      }
    }
    count = 0;
    idxOfNum = -1;
    str[i] = str1.join("");
  }
  return str.join(" ");
}

// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for 
// all the numbers in the string, add them together, then return that final number divided by the total 
// amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output 
// should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 
// letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole 
// number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the 
// whole string (So this won't ever be the case: hello44444 world). Each string will also have at least 
// one letter.

function NumberSearch(str) { 
  var total = 0;
  var numOfChars = 0;
  for(var i = 0; i < str.length; i++){
    if(parseInt(str[i])){
      total += parseInt(str[i]);
    }
    else if (str[i].match(/[a-z]/i)) {
      numOfChars++;
    }
  }
  return Math.round(total / numOfChars);    
}

// Using the JavaScript language, have the function TripleDouble(num1,num2) take both parameters being passed, 
// and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of 
// the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 
// because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the 
// same number in the second parameter. If this isn't the case, return 0. 

function TripleDouble(num1,num2) { 
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");
  var flag1 = false;
  var flag2 = false;
  var matchNum1 = -1;
  var matchNum2 = -2;
  for (var i = 0; i < num1.length; i++){
    if(num1[i] === num1[i+1] && num1[i] === num1[i+2]){
      flag1 = true;
      matchNum1 = num1[i];
      break;
    }
  }
  for (var i = 0; i < num2.length; i++){
    if(num2[i] === num2[i+1]){
      flag2 = true;
      matchNum2 = num2[i];
      break;
    }
  }

  if(flag1 === flag2 && matchNum1 === matchNum2){
    return 1;
  }
  else {
    return 0;
  } 
}