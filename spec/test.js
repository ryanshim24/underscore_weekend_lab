var myFunctions = require("../src/underscore");
var expect = require("chai").expect;

// all of these tests are pending...make sure to add , function(){ expect ....}

describe('first', function() {
  var myArr;
  beforeEach(function() {
    myArr = [4,5,6];
  });
  it('should be able to pull out the first element of an array', function(){
    // expect(myFunctions.first([1,2,3])).to.equal(1);
    expect(myFunctions.first(myArr)).to.equal(4);
  });
  it('should be able to accept a user-defined index first([1,2,3],2) should return [1,2]', function() {
    expect(myFunctions.first(myArr, 2)).to.eql([4,5]);
  });
});


describe('last', function() {
  var myArr;
  beforeEach(function () {
    myArr = [7,10,14,2,8,32,1];
  });
  it('should pull the last element from an array', function() {
    expect(myFunctions.last(myArr)).to.equal(1);
  });

  it('should accept an index argument', function() {
    expect(myFunctions.last(myArr,3)).to.eql([8,32,1]);
  });
  it('should return nothing if zero is passed in as the index', function() {
    expect(myFunctions.last(myArr,0)).to.eql([]);
  });

  it('should return all the array\'s elements if the index argument is larger than the length of the array',function() {
    expect(myFunctions.last(myArr,15)).to.eql([1,32,8,2,14,10,7]);
  });
});

describe('uniq', function() {
  var myArr;
  beforeEach(function() {
    myArr = [1,4,22,1,17,23,22];
  });
  it('should return all unique values contained in an unsorted array',function() {
    expect(myFunctions.uniq(myArr)).to.eql([1,4,17,22,23]);
  });
});


describe('pluck', function() {
  it('should return values contained at a user-defined property', function () {
    var people = [
      {name : 'moe', age : 30},
       {name : 'curly', age : 50}
     ];

    expect(myFunctions.pluck(people, 'name')).to.eql(['moe', 'curly']);
  });
});

describe('contains', function() {
  var myArr;
  beforeEach(function(){
    myArr = [1,2,3,6,5];
  });
  it('should return false if a collection does not contain a user-specified value', function(){
    expect(myFunctions.contains(myArr,7)).to.equal(false);
  });

  it('should return true if a collection contains a user-specified value',function(){
    expect(myFunctions.contains([  4,   5,   6], 5)).to.equal(true);
  });

});

// describe('flatten', function() {
//   it('can flatten nested arrays', function() {
//     var nestedArray = [1, [2], [3, [[[4]]]]];

//     expect(myFunctions.flatten(nestedArray)).to.eql([1,2,3,4]);
//   });
// });
