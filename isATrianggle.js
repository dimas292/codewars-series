function isTriangle(a,b,c)
{
  
  let first = a + b > c
  let second = a + c > b
  let third = c + b > a
  
  if(first && second && third){
    return true;
  }
  
   return false;
  
}
