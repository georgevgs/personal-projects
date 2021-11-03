let SeriesSum = (n) => {
  // Happy Coding ^_^
  let num;
  if(n==0){
    num = 0;
  }else{ 
    num = 1}

let den = 1;
for (var i= 1; i<n; i++){
  den = den + 3;
  num = num + (1/den);
}

return num.toFixed(2);
}

let n= 5;

SeriesSum(n)
