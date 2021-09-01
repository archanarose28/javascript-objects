function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    let valuesObj;
    valuesObj=Object.values(obj);
    // Return the values in an array.
    return valuesObj;
}

module.exports={
    f1: values
    };