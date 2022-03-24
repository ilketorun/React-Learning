class Human {
    constructor() {
        this.gender = 'male'
    }

    printGender() {
        console.log(this.gender);
    }
}


class Person extends Human {
    constructor() {
        super(); //this tell we want to use Human's constructor here too
        this.name = 'ilke'
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();

console.log(person.name + " " + person.gender);
person.printGender();
