function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    let valuesObj=[];
    for(keys in obj){
        valuesObj.push(obj[keys]);
    }
    return valuesObj;
}

module.exports={
 values
    };