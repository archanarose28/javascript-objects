function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Based on http://underscorejs.org/#keys
    let keysObj;
    keysObj=Object.keys(obj);
    // Return the keys as strings in an array.
    return keysObj;
}

module.exports={
f1: keys
};