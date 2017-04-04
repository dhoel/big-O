
// Counting Sheep
let count = 0;
function countSheep(num){

    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    }
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jumps over the fence`);
        countSheep(num-1);
        count++;
        console.log(count);
    }
}
countSheep(20);

// O(n) - Linear time
// number of operations is proportional to the input integer

// *********************
// Array Double
let count = 0;
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    count ++;
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}
var arr = [10,5,3,4];
console.log(double_all(arr));
console.log(count);

// O(n) - Linear time
// number of operations is proportional to the number of array elements

// **********************

// Reverse String
let count = 0;
function reverse(str) {
    if (str.length < 2) {
        return str;
    }
    count ++;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("tauhida"));
console.log(count);

// O(n) - Linear time
// number of operations is proportional to the number of chars in the string.

// **********************

// Triangular Number
let count = 0;
function triangle(n) {
    if (n < 2)
        return n;
        count ++;
    return n + triangle(n - 1);
}
triangle(6);
console.log(count);

// O(n) - Linear time
// number of operations is proportional to the input integer

// *********************

// String Splitter
let count = 0;
function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1)
        return [str];
        count ++;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
}
console.log(split('1/12/2017', '/'));
console.log(count);

// O(n) - Linear time
// number of operations is proportional to the number of seperators

// ********************

// Binary Representation
let count = 0;
function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2);
        count ++;
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return '';
    }
}
console.log(convertToBinary(25));
console.log(count);

// O(log(n)) - Logarithmic time
// number of operations increases fractionally to the input

// *********************

// Anagrams
let count = 0;
function printAnagram(word){
    console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}
function anagrams(prefix, str){
    count ++;
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1);
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }

}
printAnagram("east");
console.log(count);

// O(n!) - Factorial time
// number of operations increase exponentially to the input with the
// increase being a multiple of the -1 input number of operations

// ********************

// Factorial
let count = 0;
function factorial(n) {
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  count ++;
  // Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120
console.log(count);

// O(n) - Linear time
// number of operations is proportional to the input integer

// *********************

// Fibonacci
let count = 0;
function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }
  // Recursive case
  count ++;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));
console.log(count);
