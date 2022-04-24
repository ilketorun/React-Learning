// Reference and Primitive Types

// Primitive Type -> numbers, strings, booleans

const number = 1;
const numbers = number; // just the value is copied


// Reference Type -> Objects and arrays
const person = {
    name: 'Max'
}

//copied the pointer
const secondPerson = person;

// spreaded the object in person then copied the objects so the name is Max here
const thirdPerson = {
    ...person
};

person.name = 'ilke'; // person and secondPerson's name has changed to ilke


console.log(person); // ilke
console.log(secondPerson); // ilke
console.log(thirdPerson); //  Max



