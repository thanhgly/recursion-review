// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];
  var findElement = function(node) {
    if (_.contains(node.classList, className) && node.classList) {
      result.push(node);
    }
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        findElement(node.childNodes[i]);
      }
    }
  }
  findElement(document.body);
  return result;
};
