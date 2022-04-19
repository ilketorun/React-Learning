let userName: string = 'ilke'

let age: number = 5;

let isHere: boolean = true;

let person: {
    name: string;
    age: number;
}; // object

let people:{
    name: string;
    age: number;
}[]; //object array

// type is string automatically
let autoTypeFeature= 'This is TypeScript part' 


let part: number | string = 'string and number both allowed here' 
part = 5;

// both type allowed
let myStringOrStringArray: string | string[];

//type Aliases
type Human = {
    name:string;
    age: number;
}

let person2: Human;
let people2: Human[];

//Functions and types

//functions also has types
function returnFunctionType(a:number, b:number): number {
    return a + b;
}

// function type void can be given to functions that returns notting
function printThis(value: any): void {
    console.log(value)
} 

//Generics: 
//This is a feature of typescript. 
//We can tell it we do not know the type yet 
//but we know they should be same type.

function insertAtBeginning<T>(array: T [], value: T) {

   const newArray = [value, ...array];

   return newArray;

}