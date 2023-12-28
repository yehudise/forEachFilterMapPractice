/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
  // Use the map function to create a new array with doubled values
  var doubledArray = arr.map(function (value) {
    return value * 2;
  });

  // Return the new array with doubled values
  return doubledArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
  // Use the filter function to create a new array with only even values
  var evenArray = arr.filter(function (value) {
    return value % 2 === 0;
  });

  // Return the new array with only even values
  return evenArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

function showFirstAndLast(stringsArray) {
  // Use the map function to create a new array with first and last characters
  var resultArray = stringsArray.map(function (
    str
  ) {
    // Check if the string is not empty
    if (str.length > 0) {
      // Extract the first and last characters and concatenate them
      return str[0] + str[str.length - 1];
    } else {
      // If the string is empty, return an empty string
      return "";
    }
  });

  // Return the new array with first and last characters
  return resultArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(
  arrayOfObjects,
  key,
  value
) {
  // Use the map function to create a new array with added key and value
  var newArray = arrayOfObjects.map(function (
    obj
  ) {
    // Create a new object for each element in the array
    var newObj = Object.assign({}, obj); // Create a shallow copy of the original object
    newObj[key] = value; // Add the new key and value to the new object
    return newObj; // Return the modified object
  });

  // Return the new array with added key and value for each object
  return newArray;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
  // Convert the input string to lowercase to make the count case-insensitive
  str = str.toLowerCase();

  // Define an object to store the vowel counts
  var vowelCounts = {};

  // Define an array of vowels
  var vowels = ["a", "e", "i", "o", "u"];

  // Iterate through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Check if the character is a vowel
    if (vowels.includes(char)) {
      // Increment the count for the vowel in the object
      if (vowelCounts[char]) {
        vowelCounts[char]++;
      } else {
        vowelCounts[char] = 1;
      }
    }
  }

  // Return the object with vowel counts
  return vowelCounts;
}
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
  // Use the map function to create a new array with doubled values
  var doubledArray = arr.map(function (value) {
    return value * 2;
  });

  // Return the new array with doubled values
  return doubledArray;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  // Use the map function to create a new array with each value multiplied by its index
  var resultArray = arr.map(function (
    value,
    index
  ) {
    return value * index;
  });

  // Return the new array
  return resultArray;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arrayOfObjects, key) {
  // Use the map function to create a new array with the value of the specified key
  var resultArray = arrayOfObjects.map(function (
    obj
  ) {
    return obj[key];
  });

  // Return the new array
  return resultArray;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arrayOfObjects) {
  // Use the map function to create a new array with concatenated first and last names
  var resultArray = arrayOfObjects.map(function (
    obj
  ) {
    // Concatenate the values of "first" and "last" keys with a space in between
    return obj["first"] + " " + obj["last"];
  });

  // Return the new array
  return resultArray;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arrayOfObjects, key) {
  // Use the filter function to create a new array with objects that contain the specified key
  var resultArray = arrayOfObjects.filter(
    function (obj) {
      return key in obj;
    }
  );

  // Return the new array
  return resultArray;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(array, value) {
  // Use the find function to find the first element with the specified value
  var foundElement = array.find(function (
    element
  ) {
    return element === value;
  });

  // Return the found element or undefined if not found
  return foundElement;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arrayOfObjects, key, value) {
  // Use the find function to find the first object with the specified key and value
  var foundObject = arrayOfObjects.find(function (
    obj
  ) {
    return obj[key] === value;
  });

  // Return the found object or undefined if not found
  return foundObject;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(inputString) {
  // Convert the input string to lowercase
  var lowercaseString = inputString.toLowerCase();

  // Use the replace function with a regular expression to remove vowels
  var stringWithoutVowels =
    lowercaseString.replace(/[aeiou]/g, "");

  // Return the new string without vowels
  return stringWithoutVowels;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  // Use filter to get an array containing only odd numbers
  var oddNumbers = arr.filter(function (num) {
    return num % 2 !== 0;
  });

  // Use map to create a new array with doubled odd numbers
  var doubledOddNumbers = oddNumbers.map(
    function (num) {
      return num * 2;
    }
  );

  // Return the new array with doubled odd numbers
  return doubledOddNumbers;
}
