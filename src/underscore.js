var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var newArray = [];
    if (n === undefined) {
      return array[0]; //Return the first element if n is undfined.
    }else {
      return array.splice(0,n);//Else starting from the zero element i return the indexed(n) amount.
   }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var newArray = [];
    var length = array.length;
    if (n === undefined) {
      return array.pop();//N is undefined I return the last element.
    } else if (n > array.length) {//If n is greater than the array length
      var filtered =array.splice(0,array.length);//I return all the values inside the array.
      return filtered.reverse();//And switch it
      }else {
      return array.splice(array.length-n,n);//Else I want to start from the array length 
      //minus the indexed number and from there I want to get the results it's looking for n times.
    }          
},

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
     var sorted = array.sort(function (a, b) {
        return a - b; //Sorts my array out
    });
     var filtered = [];
     for(i=0;i<sorted.length;i++) {
      if(sorted[i-1] !== sorted[i]){
        filtered.push(sorted[i]);
        //AFter the array is sorted it checks if the number after index 0
        //is not equal to index 1 then I can push it through the new array.
        //If it is I keep on going.
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
      newArr.push(array[i][key]); //Pushes the value of the key into the new array
      //Must use brakets if were getting object values..
    }
    return newArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if (array.indexOf(target) > -1) {//If the target number isn't in the array return true....
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
     // var nestedArray = [1, [2], [3, [[[4]]]]];

  // round 1 - flatten([1,2,[3,4,[5,6]]])
  // round 2 - flatten([3,4,[5,6]])
  // round 3 - flatten([5,6])
  flatten: function(array) {
    var newArr = [];//Making a new array that I want to push in too..
    for (var i = 0; i < array.length; i++) {//Loop through the length of the array.
      if(Array.isArray(array[i])){//Goes through each array and see's if there's a nested array.
        newArr = newArr.concat(myFunctions.flatten(array[i]));
      //If so I want to run the flatten function again starting from that new position
      //and everytime it occurs it's true I merge the result into newArr to have both 
      //values of the nested arrays and non nested.
      }
      else {
        newArr.push(array[i]);//If the value of the array is not nested it pushes that value into the empty array.
      }
    }
    return newArr; //Return the final result...
  }
};

module.exports = myFunctions;
