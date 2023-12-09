'use strict';

var _ = require('lodash');

 /**
 * Creates a hash object. If a `properties` object is provided, its own
 * enumerable properties are assigned to the created object.
 *
 * @memberOf util
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new hash object.
 */
function Hash(properties) {
  return _.transform(properties, function(result, value, key) {
    result[key] = (_.isPlainObject(value) && !(value instanceof Hash))
      ? new Hash(value)
      : value;
  }, this);
}
exports.lodashJs = {
  compareLineStart:  16613,
  compareLineEnd:    16622,
  compareText: `function sumBy(array, iteratee) {
    return (array && array.length)
      ? baseSum(array, getIteratee(iteratee, 2))
      : 0;
  }

  /*------------------------------------------------------------------------*/

  // Add methods that return wrapped values in chain sequences.
  lodash.after = after;`,
  insertLine: 16620
}

exports.category = new Hash({
  'tree': [
    'generateRandomTree',
    'getTreeMaxDepth',
    'setTreeNodeDepth'
  ],
})