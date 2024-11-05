function findUniq(arr) {

  arr.sort((a, b) => a - b);
  // 1, 1, 1, 1, 3

  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
  // 1 === 1 = true
  // n = 3
  // 3 = arr.length - 1
}
