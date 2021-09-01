/* STRETCH PROBLEMS */
function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  let res = new Object();
  for (let key in obj) {
    let keys = key;
    let va = obj[key];
    res[va] = keys;
  } 
  /*const res=Object.fromEntries(Object.entries(obj).map(([key,va])=>[va,key]),);*/
  console.log(res);
  return res;
}

module.exports = {
  f1: invert,
};
