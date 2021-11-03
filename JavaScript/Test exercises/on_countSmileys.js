//return the total number of smiling faces in the array
let countSmileys = (arr) => {
  let sum = 0;
  
  for(var i = 0; i < arr.length; i++) {
    
    if((arr[i].includes(":") || arr[i].includes(";")) && (arr[i][1] === "-" || arr[i][1] === "~" || arr[i][1] === "D" || arr[i][1] === ")")) {
      if(arr[i][2] === ")" || arr[i][2] === "D" || arr[i][2] === undefined) {
        sum = sum + 1;
      }
    }
  }  
  return sum;
}
