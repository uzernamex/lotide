const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([0, 1, 3], ["0", "one", 33]), false);

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false