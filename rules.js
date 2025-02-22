let a;  //let is used to declared in loops ex:-for,while
const b=10; // for const we must initialize value
var c; //var is used any where

const d=[1,2,3,4,5,6,7,"siva"]
// console.log(d)
let displayColurs=function(message, ...colours){
    console.log(message);
    console.log(colours);
}
let message="list of colours";
let colours=['red','green','blue']
 displayColurs(message, ...colours);