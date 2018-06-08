var list = [2, 6, 3, 9, 7, 10]

var getNumber = function(number) {
  list.push(number)
  return list;
}

//console.log(getNumber(4));

var sortedNumber = function() {
  var sorted = list.sort(function(a, b) {
    return a - b;
  })
  return sorted;
}

//console.log(sortedNumber(list))

module.exports.getNumber = getNumber
module.exports.sortedNumber = sortedNumber
//Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.
//
//Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)
//
//Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.