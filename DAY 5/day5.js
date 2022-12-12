//  ANONYMUS FUNCTIONS:-

// (function () {
//     ................
//   })();

//  to print odd numbers in an array;
{
  let arr = [1, 3, 4, 3, 5, 633, 52, 22, 222, 22222, 222, 2222];
  (function (arr) {
    for (let i in arr) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  })(arr);
}

// //convert all strings to tiitle Caps in a string array;
{
  let titilecaps = function (ar) {
    arr = [];
    console.log(ar);
    for (let ele of ar) {
      let first = ele.split("");
      first[0] = first[0].toUpperCase();
      let str = "";
      first.forEach((ch) => {
        str = str + ch;
      });
      arr.push(str);
    }
    return arr;
  };
  arr = ["divyesh", "bhuva", "dev"];
  let s = titilecaps(arr);
  console.log(s);
}

// //Sum of all numbers in an array:
{
  let array = [1, 2, 34, 45, 2, 2, 22, 2, 52, 262, 248, 190];
  add = (function (arr) {
    let sum = 0;
    for (let index in arr) {
      sum += arr[index];
    }
    console.log("sum of interior of array:" + sum);
  })(array);
}

// //Return all the prime numbers in an array:

{
  let array = [1, 2, 13, 22, 81, 61, 71, 91];
  let prime = function (array) {
    let arr = [];
    index = 0;
    for (let i in array) {
      // console.log(array[i]);
      let flag = true;
      for (let j = 2; j <= array[i] / 2; j++) {
        // console.log(array[i]%j)
        if (array[i] % j == 0) {
          flag = false;
        }
      }
      if (flag == true) {
        arr[0 + index] = array[i];
        index++;
      }
    }
    // console.log(arr)
    return arr;
  };
  console.log("prime numbers: " + prime(array));
}

//Return all the palindromes in an array
{
  let array = [121, "abcba"];
  for (let i in array) {
    let ele = array[i];
    let is_palindrome = function (ele) {
      ele = String(element);
      let el = ele.split("").join();
      let rev = ele.split("").reverse().join();
      if (rev == el) {
        return true;
      } else {
        return false;
      }
    };
    if (is_palindrome) {
      console.log("palindrone are:" + array[i]);
    }
  }
}

//Return median of two sorted arrays of the same size:
{
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let medians = function (array1, array2) {
    let median1, median2;
    if (array1.length % 2 == 0) {
      let mid = parseInt(array1.length / 2);
      let mid2 = parseInt(array1.length / 2 + 1);
      median1 = (array1[mid] + array1[mid2]) / 2;
    } else {
      let mid = parseInt(array1.length / 2);
      median1 = array1[mid];
    }

    if (array2.length % 2 == 0) {
      let mid11 = parseInt(array2.length / 2);
      let mid22 = parseInt(array2.length / 2 + 1);
      median2 = (array2[mid11] + array2[mid22]) / 2;
    } else {
      let mid11 = parseInt(array2.length / 2);
      median2 = array2[mid11];
    }

    console.log("median of array1 is: " + median1);
    console.log("median of array2 is: " + median2);
  };
  medians(array1, array2);
}
//Remove duplicates from an array
{
  let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

  (function (arr) {
    console.log([...new Set(arr)]);
  })(arr);
}

//Rotate an array by k time
{
  let Array = [1, 2, 3, 4, 5];
  let N = Array.length;
  let K = 2;
  (function (a, n, k) {
    arr = [];
    index = 0;
    // If rotation is greater
    // than size of array
    k = k % n;

    for (let i = 0; i < n; i++) {
      if (i < k) {
        // Printing rightmost
        // kth elements
        // console.log(a[n + i - k] );
        arr[index] = a[n + i - k];
        index++;
      } else {
        // Prints array after
        // 'k' elements
        //    console.log((a[i - k]) );
        arr[index] = a[i - k];
        index++;
      }
    }
    console.log("intial:" + a);
    console.log("After rotation(k=2times ) :" + arr);
  })(Array, N, K);
}
//----------------------------------------------------------------;

/*Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.*/

{
  let num = 10;
  function addFive(num) {
    return num + 5;
  }
  let result = addFive(num);
  console.log(result);
}

/*Write a function called “getOpposite”.
Given a number, return its opposite*/
{
  let num = 5;
  function getOpposite(num) {
    return num * -1;
  }
  let result = getOpposite(num);
  console.log(result);
}

/*Fill in your code that takes an number minutes and converts it to seconds.*/
{
  let min = 5;
  function toSeconds(min) {
    return min * 60;
  }
  let secs = toSeconds(min);
  console.log("in " + min + "minutes, seconds: " + secs);
}

/* Create a function that takes a string and returns it as an integer.*/
{
  let mystr = "5";
  function toInteger(mystr) {
    return parseInt(mystr);
  }
  let myint = toInteger(mystr);
  console.log(myint);
}


/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
{
  let myint = 0;
  function nextNumber(myint) {
    myint++;
    return myint;
  }
  let myNextint = nextNumber(myint);
  console.log(myNextint);
}


/*Convert Hours into Seconds
Write a function that converts hours into seconds.*/
{
  let arr = [1, 2, 3];
  function hourToSeconds(arr) {
    let result = [];
    for (let i in arr) {
      result[i] = arr[i] * 3600;
    }
    return result;
  }
  let data = hourToSeconds(arr);
  console.log(data);
}

/*Create a function that takes an array and returns the first element.*/
{
  let arr = [1, 2, 3];
  function getFirstElement(arr) {
    return arr[0];
  }
  let data = getFirstElement(arr);
}


// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

{
  function findPerimeter(num1, num2) {
    return 2 * (num1 + num2);
  }
  let peri = findPerimeter(6, 7);
  console.log(peri);
}


// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true (22 + 15 = 37)

{
  function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
      return true;
    } else {
      return false;
    }
  }
  let res = lessThan100(22, 15);
  console.log("less than 100 :" + res);
}


// There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second parameter
// will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1
// remainder(5, 5) ➞ 0
{
  function remainder(num1, num2) {
    return num1 % num2;
  }
  let res = remainder(1, 3);
  console.log(res);
}


// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs, horse = 4 legs, pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species.
// You have to implement a function that returns the total number of legs of all the animals.

// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(5, 2, 8) ➞ 50

{
  function CountAnimals(tur, horse, pigs) {
    return 2 * tur + 4 * horse + 4 * pigs;
  }
  let legs = CountAnimals(2, 3, 5);
  console.log(legs);
}


// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600

{
  function frames(num1, num2) {
    return num1 * num2 * 60;
  }
  let fps = frames(1, 2);
  console.log(frames());
}


// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

{
  function divisibleByFive(num1) {
    if (num1 % 5 == 0) {
      return true;
    } else {
      return false;
    }
  }
  let divisible = divisibleByFive(5);
}


// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Examples:
// isEven(12); ➞ true
// isEven(0); ➞ true
// isEven(11); ➞ false
// isEven(“11h”); ➞ -1

{
  function isEven(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  let even = isEven(5);
}


// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Examples:
// areBothOdd(1, 3); ➞ true
// areBothOdd(1, 4); ➞ false
// areBothOdd(0, 0); ➞ false

{
  function areBothOdd(num1, num2) {
    if (num1 % 2 == 0 || num2 % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }
}



// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Examples:
// getFullName("GUVI", "GEEK"); ➞ GUVI GEEK
// getFullName("GUVI", ""); ➞ GUVI
// getFullName("", "GEEK"); ➞ GEEK
// getFullName("", ""); ➞ ""

{
  function getFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
  }
}



// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.

// Examples:
// getLengthOfWord(“GUVI”); ➞ 4
// getLengthOfWord(“”); ➞ 0
// getLengthOfWord(); ➞ -1
// getLengthOfWord(9); ➞ -1

{
  function getLengthOfWord(word1) {
    return word1.length;
  }
}



// Write a function called “isSameLength”.
// Given 2 words, “isSameLength” returns whether the given words have the same length.

// Examples:
// isSameLength(“GUVI”, “GEEK”); ➞ true

{
  function isSameLength(word1, word2) {
    if (word1.length == word2.length) {
      return true;
    } else {
      return false;
    }
  }
}



// Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}



// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
// If the array has a length of 0, it should return ‘undefined’.

// Examples:
// getNthElement([1, 3, 5], 1); ➞ 3

function getNthElement(array, n) {
  return array[n];
}



// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0,
// it should return ‘-1’.


// getLastElement([1, 2, 3, 4]); ➞ 4

function getLastElement(array) {
  let last = array.length;
  return array[last - 1];
}



// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. 
// If there is no property at the given key, it should return undefined.

// Examples:
// var obj = {
// mykey: “value”
// };

// getProperty(obj,’mykey’); ➞ value
// getProperty(obj,’dummykey’); ➞ NA

{
  let obj = {
    mykey: `value`,
  };
  function getProperty(obj, key) {
    return obj.key;
  }
}



// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

// var obj = {}
// Input:
// addProperty(obj, “mykey”);

// Output:
// {
// mykey: true
// }
{
  var obj = {
    mykey: `value`,
  };
  function addProperty(obj, key) {
    obj.key = true;
  }
}



// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined

{
  function removeProperty(obj, key) {
    return delete obj.key;
  }
}



// Return an array, where the first element is the sum of positives numbers and the second element is sum of negative numbers.
{
  let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  let ar2 = function countPositivesSumNegatives(arr) {
    console.log(arr);

    let sumpos = 0;
    let sumneg = 0;

    for (i in arr) {
      if (arr[i] < 0) {
        sumneg = sumneg + arr[i];
      } else {
        sumpos = sumpos + arr[i];
      }
    }
    let ret = [sumpos, sumneg];

    return ret;
  };
  console.log(ar2(arr));
}



// Create a function that receives an array of numbers and returns an array containing only the positive numbers
{
  function getPositives(ar) {
    let ret = [];
    for (let i in ar) {
      if (ar[i] > 0) {
        ret.push(ar[i]);
      }
    }
    return ret;
  }
  let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  let ar2 = getPositives(ar);
  console.log(ar2);
}



// Write a function `powersOfTwo` which will return list of all powers of
// 2 from 0 to n (where n is an exponent).

// n = 0 -> 2⁰ -> [1]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

{
  function powersOfTwo(n) {
    let c = 0;
    let res = "";
    while (c <= n) {
      res = res + 2 ** c + ",";
      c++;
    }
    return res;
  }
}



// Find the maximum number in an array of numbers
{
  function findMax(ar) {
    let max = ar[0];
    ar.forEach((element) => {
      if (element > max) {
        max = element;
      }
    });
    return max;
  }
  let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  let max = findMax(ar);
  console.log("Max: ", max);
}



// Create a function that will return in an array the first
// “nPrimes” prime numbers greater than a particular number “startAt”

{
  function getPrimes(nPrimes, startAt) {
    let end = nPrimes + startAt;
    for (let i = startAt; i < end; i++) {
      if (isPrimes(i)) {
        console.log(i);
      }
    }
  }
  // Returns true if a number is prime
  function isPrimes(n) {
    for (let j = 2; j < n / 2; j++) {
      if (n % j == 0) {
        return false;
      }
    }
    return true;
  }
  {
    getPrimes(10, 100);
  }
}



// Reverse a string
{
  let e = reverseString("JavaScript");
  console.log(e);
  function reverseString(s) {
    let k = s.split("").reverse();
    let str = "";
    k.forEach((ele) => {
      str = str + ele;
    });
    return str;
  }
}



// Create a function that will merge two arrays and return the result as a new array
{
  let ar1 = [1, 2, 3];
  let ar2 = [4, 5, 6];
  let ar = mergeArrays(ar1, ar2);
  console.log(ar);
  function mergeArrays(ar1, ar2) {
    let result = [];
    //this will add the first array to the result array

    for (let el of ar1) {
      result.push(el);
    }
    for (let index of ar2) {
      result.push(index);
    }
    return result;
  }
}



// Problem:- Calculate the sum of numbers received in a comma delimited string
{
  console.log(sumCSV(`1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9`));
  function sumCSV(s) {
    let ar = s.split(",");
    let arr = [];
    let sum = 0;
    for (let i in ar) {
      arr[i] = parseFloat(ar[i]);
      sum = sum + arr[i];
    }
    return sum;
  }
}


//====>>>> Do the below programs in arrow functions:

//1. print odd number in arrays:
{
  let odd = () => {
    let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    for (let i in arrays) {
      if (arrays[i] % 2 != 0) {
        console.log(arrays[i]);
      }
    }
  };
  odd();
}

//2.convert all the strings to title caps in a string array
{
  let tittle_caps = (ar) => {
    arr = [];
    console.log(ar);
    for (let ele of ar) {
      let first = ele.split("");
      first[0] = first[0].toUpperCase();
      let str = "";
      first.forEach((ch) => {
        str = str + ch;
      });
      arr.push(str);
    }
    return arr;
  };
  arr = ["divyesh", "bhuva", "dev"];
  let s = tittle_caps(arr);
  console.log(s);
}

//3. Sum of all numbers in an array
{
  let array = [1, 3, 3, 45, 5, 67];
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  console.log(sumWithInitial);
}

//4.Retutrn all prime numbers in the array;
{
  array = [1, 2, 3, 4, 5, 6, 7, 8, 11];
  let prime = (array) => {
    let arr = [];
    index = 0;
    for (let i in array) {
      // console.log(array[i]);
      let flag = true;
      for (let j = 2; j <= array[i] / 2; j++) {
        if (array[i] % j == 0) {
          flag = false;
        }
      }
      if (flag == true) {
        arr[0 + index] = array[i];
        index++;
      }
    }
    // console.log(arr)
    return arr;
  };
  console.log("prime numbers: " + prime(array));
}

//5.return all palindromes in an array:
{
  let palindrome = (element) => {
    // console.log(element)
    element = String(element);
    let ele = element.split("").join();
    let rev = element.split("").reverse().join();
    if (rev == ele) {
      return true;
    } else {
      return false;
    }
  };
  let array = [121, "abcba"];
  for (let i in array) {
    let is_palindrome = palindrome(array[i]);
    if (is_palindrome) {
      console.log("palindrone are:" + array[i]);
    }
  }
}