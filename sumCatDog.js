function humanYearsCatYearsDogYears(humanYears) {

  let dog = 0;
  let cat = 0;

  for(let i = 1; i <= humanYears; i++){
    if(i === 1){
      dog += 15;
      cat += 15;
    } else if ( i === 2){
      dog += 9;
      cat += 9;
    } else {
    dog += 5;
    cat += 4;
    }  
  }
  
}
