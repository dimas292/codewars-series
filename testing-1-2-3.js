var number=function(array){
  //your awesome code here
  if(array.length === 0){
    return []
  }
  let res = [];
  for(let i = 0; i < array.length; i++){
   res.push(`${i + 1}: ${array[i]}`);
  }
  
  
  return res;
}

