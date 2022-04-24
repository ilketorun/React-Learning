// DESTRUCTURING

const numbers = [1, 2, 3];

[num1, , num3] = numbers;

console.log(num1, num3); // 1 3

// array destructuring
[a, b] = ['hello', 'max'];
console.log(a); // hello
console.log(b); // max

// object destructuring

var { man } = { man: 'Max', age: 28 };
console.log(man); // Max
console.log(age); // undefined
