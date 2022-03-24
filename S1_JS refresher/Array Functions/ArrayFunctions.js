// Array Functions
// they take a function as a input, executes it on each element of the array

// filter, map ,reduce, find, findIndex, splice, slice

const numbers = [1, 2, 3];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// });

const doubleNumArray = numbers.map(numbers => numbers * 2)

console.log(numbers);
console.log(doubleNumArray);
