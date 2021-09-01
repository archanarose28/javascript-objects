const dataItem=require("../test/testObject.js").testObject;
const res2=require("../pairs.js").f1;
const objEntries = Object.entries(dataItem);
console.log("Before pairs :",Object.fromEntries(objEntries));
//object is passed to the funtion
let computedValue;
computedValue=res2(dataItem);
//printing resultant object to console 
console.log("After pairs :",computedValue);
