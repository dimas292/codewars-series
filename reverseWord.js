function reverseWords(str) {
 
  let words = str.split(' ');
 
  let reversedWords = words.map(word => word.split('').reverse().join(''));

  return reversedWords.join(' ');
}

