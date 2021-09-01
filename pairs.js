let f1=function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    let objEntries = Object.entries(obj);
    return objEntries; //returning in array format
}

module.exports={
    f1: f1
    };