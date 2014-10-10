var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var newArray = [];
    if (n === undefined) {
      return array[0];
    }else {
        var filtered = array.filter(function(num) {
          return array.indexOf(num) < n;
        });
        return filtered;
      }
    // } else {
    //   for (var i =0; i<n; i++) {
    //     newArray.push(array[i]);
    //   }
    //   return newArray;
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var newArray = [];
    var length = array.length;
    if (n === undefined) {
      return array.pop();
  // }else if (n > length) {
  //     var filtered = array.filter(function (num) {
  //       return array.indexOf(num) < n;
  //     });
  //     return filtered.reverse();
  //   }else if (n === 0) {
  //     var zeroed = array.filter(function (num) {
  //       return array.indexOf(num)<0;
  //     });
  //     return zeroed.reverse();
  //   }else {
  //   var sorted = array.filter(function (num) {
  //     return array.indexOf(num) >= n;  
  //   });
  //   return sorted.reverse();
  // }
    } else if (n > array.length) {
      for (var i=0; i<array.length; i++) {
        newArray.push(array[i]);
      }
      newArray.reverse();
      return newArray;
    } else {
      length = array.length-1;
      for (var j=0; n>j; j++) {
        newArray.push(array[length-j]);
      }
      newArray.reverse();
      return newArray;
    }          
},

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
     var sorted = array.sort(function (a, b) {
        return a - b;
    });
     var filtered = [];
     for(i=0;i<sorted.length;i++) {
      if(sorted[i-1] !== sorted[i]){    
        filtered.push(sorted[i]);
      }
    }
    return filtered;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    newArr = [];
    for (i=0; i<array.length; i++) {
      newArr.push(array[i][key]);
    }
    return newArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if (array.indexOf(target) > -1) {
      return true;
    }else {
      return false;
    }
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {

  }
};
module.exports = myFunctions;
