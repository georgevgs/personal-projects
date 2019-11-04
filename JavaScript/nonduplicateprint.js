var arr=[3,5,3,4,4,6,6,9];

//Print non duplicates with indexof & arr.filter

function onlyUnique(value, i, number) { 
    return number.indexOf(value) === i;
}

var ot = arr.filter( onlyUnique ); 

//Print non duplicates with for loop

Array.prototype.contains = function(v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

var ot = arr.unique(); 

console.log(ot)

//second option using for

function arrCont(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === x) 
    return true;
  }
  return false;
};

function arrUni(arr) {
  var arr2=[];

  for (var i = 0; i < arr.length; i++) {
    if (!arrCont(arr2, arr[i])) {
      arr2.push(arr[i]);
    }
  }

  console.log(arr2)
}

arrUni([3,5,3,4,4,6,6,9]);
