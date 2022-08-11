class CreateUser{
    constructor(fisrtName,lastName,email,age,address){
        console.log("constructor called");
        this.fisrtName = fisrtName;
         this.lastName = lastName;
         this.email = email;
         this.age = age;
         this.address = address;
    }
    about(){
        return `${this.fisrtName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la";
    }

}

const user1 = new CreateUser('Amit','kumar','aga@GamepadHapticActuatorl.com',20,'basti');
console.log(user1.lastName);
console.log(Object.getPrototypeOf(user1));
 