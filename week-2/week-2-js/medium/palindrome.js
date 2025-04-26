/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanedStr = str.replace(/[\s,!?.]/g, '').toLowerCase();
  let reversedStr = cleanedStr.split('').reverse().join('');
  return reversedStr === cleanedStr;
}

module.exports = isPalindrome;
