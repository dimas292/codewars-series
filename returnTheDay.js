function whatDay(num) {
    if (num > 7 || num < 1  ){
    return "Wrong, please enter a number between 1 and 7"
  }
  
  const week = {
    1 : "Sunday",
    2 : "Monday",
    3 : "Tuesday",
    4 : "Wednesday",
    5 : "Thursday",
    6 : "Friday",
    7 : "Saturday"
  }

  return week[num]

}
