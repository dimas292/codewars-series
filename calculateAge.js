function  calculateAge(a, b) {
// enter your code here.

 if(a < b){
    if(b - a < 2){
      return `You are ${b - a} year old.`
    }
   return `You are ${b - a} years old.`
 }else if(a > b){
    if(a - b < 2){
      return `You will be born in ${a-b} year.`
    }
   return `You will be born in ${a-b} years.`
   
 } else if (a === b){
    return 'You were born this very year!'
  }
}


