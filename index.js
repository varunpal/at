'use strict';

var at = function (obj, keys) {
  var keyArray,
    resolved = obj,
    index = 0;
  if (obj && (typeof keys === 'string')) {
    keyArray = keys.split('.');
    for (index = 0; index < keyArray.length; index ++) {
      if (resolved && resolved.hasOwnProperty(keyArray[index])) {
        resolved = resolved[keyArray[index]]
      } else {
        resolved = undefined;
        break;
      }
    }
    return resolved;
  }
  return undefined;
};

module.exports = at;