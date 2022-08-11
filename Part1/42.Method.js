// methods
// function inside object

const person  = {
    firstName : "Amit",
     age:6,
     about:function(){
         console.log(`person name is ${this.firstName} person age is ${this.age} 4`);
     }
}
person.about();
console.log(this);