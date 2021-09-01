const res=require("../mapObject.js").f1;
const res2=require("../mapObject.js").f2;
//The input object data
const objectInp={one: 1, two: 2, three: 3,four:4};
const objEntries = Object.entries(objectInp);
//before mapping the values are:
console.log("before mapping :",Object.fromEntries(objEntries));
//object is passed to the funtion
computedValue=res(objectInp,res2);
//printing resultant object to console in new array
console.log("after mapping  :",computedValue);

