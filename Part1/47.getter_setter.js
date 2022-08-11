class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// const person1 = new Person("Amit","Kumar",21);
// console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName);



// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName("Ajeet","Kumar");

// console.log(person1.firstName);
// console.log(person1.lastName);


const person1 = new Person("Amit", "Kumar", 21);
person1.fullName = "Ajeet Kumar";
console.log(person1);
