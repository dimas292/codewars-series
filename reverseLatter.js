function reverseLatter(str){
    let arr = str.split('')
    let onlyLatter = arr.filter(char => /[a-Za-Z]/.test(char))
    return onlyLatter.reverse().join('')
}