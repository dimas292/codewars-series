function sortArray(array){

  let oddNumber = array.filter(a => a % 2 !== 0).sort((a, b) => a - b);

  return array.map(num => (num % 2 !== 0 ? oddNumber.shift() : num))

}
