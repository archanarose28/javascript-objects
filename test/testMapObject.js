const res=require("../mapObject.js").f1;
const objectInp={one: 1, two: 2, three: 3,four:4};
const objEntries = Object.entries(objectInp);
//before mapping the values are:
console.log("before mapping :",Object.fromEntries(objEntries));
let computedValue;
computedValue=res(objectInp,callbackmap); //object is passed to the funtion
//printing resultant object to console in new array
console.log("after mapping  :",computedValue);
//callback function
function callbackmap(keyOf,valueOf) {
    console.log(keyOf,valueOf);
    return valueOf*3;   //triple each property
 }

