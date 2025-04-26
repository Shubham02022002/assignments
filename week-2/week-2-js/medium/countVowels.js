/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(word) {
  const result = ['a', 'e', 'i', 'o', 'u'].includes(word);
  return result ? true : false;
}
function countVowels(str) {
  let count = 0;
  let stringArr = str.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (isVowel(stringArr[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;