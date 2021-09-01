const dataItem=require("../test/testObject.js").testObject;
const res2=require("../invert.js").f1;
const objEntries = Object.entries(dataItem);
//before inverting the values are:
console.log("Before inverting :",Object.fromEntries(objEntries));
//object is passed to the funtion
let computedValue;
computedValue=res2(dataItem);
//printing resultant object to console 
console.log("After inverting :",computedValue);

