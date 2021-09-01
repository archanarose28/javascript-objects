/* STRETCH PROBLEMS */
function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for (const key in defaultProps) {
    if(!(obj.hasOwnProperty('key')))
    {
    obj[key]=defaultProps[key];
    }

  }
  return obj;
}
     
  





module.exports = {
  defaults
};
