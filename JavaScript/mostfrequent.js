var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

//ta = times appeared / m = max / arrchar = array character
var ta = 1;
var m = 0;
var arrchar;

for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (ta<m)
                {
                  ta=m; 
                  arrchar = arr[i];
                }
        }
        m=0;
}
console.log(arrchar+"("+ta +")") ;

//with one loop

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 
let max = null, maxCount = -Infinity;
const counts = new Map();

for(const el of arr) {
  const count = (counts.get(el) || 0) + 1;
  counts.set(el, count);
  if(count > maxCount) {
     maxCount = count;
     max = el;
  }
}

console.log(max+"("+maxCount+")");

//with while loop

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var occurences = {};

var max = 0;
var ms;

var i = 0;

while (i < arr.length) {
  occurences[arr[i]] = (occurences[arr[i]] || 0) + 1;
  if (occurences[arr[i]] > max) {
    max = occurences[arr[i]];
    ms = arr[i];
  }
  i++;
}

console.log(`${ms}(${max})`);