var str = 'georgE';
var str = str.toLowerCase();
var chars = str.split("");
var lc= {};

for(var i = 0; i< chars.length; i++)
{
  if(lc[chars[i]] == undefined)
    lc[chars[i]] = 0;

  lc[chars[i]]++;
}
console.log(lc)