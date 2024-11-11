function arrayDiff(a, b) {
  return a.filter((item) => {
    return !b.includes(item); 
  })
}
