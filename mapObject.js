function mapObject(obj, cb) {
  // Like map for arrays, but for objects.
  //Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  
for(let key in obj)
{
obj[key]=callbackmap(obj[key]);
} 
return obj;
}
//callback function
function callbackmap(elem) {
   return elem*3;   //triple each property
};
module.exports = {
  f1: mapObject,
  f2: callbackmap,
};
