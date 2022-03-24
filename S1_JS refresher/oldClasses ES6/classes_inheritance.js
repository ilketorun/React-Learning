class Human {
    gender = 'male'

    printGender = () => {
        console.log(this.gender);
    }
}


class Person extends Human {

    name = 'ilke';

    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();

console.log(person.name + " " + person.gender);
person.printGender();
