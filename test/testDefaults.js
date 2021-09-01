const dataItem=require("../test/testObject.js").testObject;
const res=require("../defaults.js").defaults;
exports.defaultproperty={job: 'engineer',married:'yes'};
let valOfobjects;
console.log("Default property        : ",this.defaultproperty)
console.log("Initial object before defaults :",dataItem)
valOfobjects=res(dataItem,this.defaultproperty);
//printing the results to the console
console.log("Object after defaults          :", valOfobjects);

