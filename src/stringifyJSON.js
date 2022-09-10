// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (obj === undefined) {
    return 'undefined';
  }

  if (typeof obj !== 'object') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    var result = [];
    obj.forEach(function (item) {
      result.push(stringifyJSON(item));

    });
    return '[' + result + ']';

  }

  var result = [];
  for (var key in obj) {
    if (key !== 'undefined' && key !== 'functions') {
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));

    }

  }
  return '{' + result + '}';

};



