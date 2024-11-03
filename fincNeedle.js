function findNeedle(haystack) {

  let index = haystack.fincIndex(char => char === 'needle');

  return `found the needle at position ${index}`;
}
