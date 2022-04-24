// SPREAD OPERATOR ...

//used to split up array elements or Object properties
const numbers = [1, 2, 3];

const spreadNumbers = [...numbers, 4];
const noSpreadNumbers = [numbers, 4];

console.log(spreadNumbers); // [1,2,3,4] // numbers's elements are spreaded then a new array created
console.log(noSpreadNumbers); // [[1,2,3],4] numbers is a element with 3 numbers

const person = { name: 'Max' };
const newPerson = { ...person, age: 12 };


// REST OPERATOR ...

// ...args merges arguments into an array
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)); //