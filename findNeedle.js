function findNeedle(haystack) {

  let index = haystack.findIndex(char => char === 'needle');

  return `found the needle at position ${index}`;
}
