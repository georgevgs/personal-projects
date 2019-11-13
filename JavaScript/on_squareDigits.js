let squareDigits = (num) => {
let numString = num.toString();
  
  let results = [];
  
  for(let i = 0; i < numString.length; i++){
  results.push(Math.pow(numString[i], 2));
  
  }

  return Number(results.join(''));  
}

squareDigits(9119);
