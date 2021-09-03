function mapObject(obj, cb) {
  // Like map for arrays, but for objects.
  //Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  
for(let key in obj)
{
obj[key]=cb(key,obj[key]);
} 
return obj;
}

module.exports = {
  f1: mapObject,
};
