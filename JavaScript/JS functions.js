// ### Javascript Functions ###

//Filter duplicates from array
const keyValue = (x) => ([JSON.stringify(x), x]);

const unique = (x) => [
    ...new Map(x.map(keyValue))
    .values()
];

const arr = [{a:1}, {a:1}, {b:2}, {c:3}];

const filteredArray = unique(arr);
console.log(filteredArray);
