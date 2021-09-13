function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Based on http://underscorejs.org/#keys
  let keysObj = [];
  for (keys in obj) {
    keysObj.push(keys);
  }
  // Return the keys as strings in an array.
  return keysObj;
}

module.exports = {
  keys,
};
