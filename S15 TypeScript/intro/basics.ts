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

