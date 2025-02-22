const arr=[1,23,4,12,12,42,21,1,2,1,23,12,2];
const elementtoset=arr.map(el=>el);
const set = new Set();
elementtoset.forEach(el=>set.add(el));
console.log(set);