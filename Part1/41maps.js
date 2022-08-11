


// Object itraval
const person ={
    firstName : "Amit kumar",
    age:2,
    1:"one"
}
console.log(person.firstName);
console.log(person["firstName"]);

for(let key in person){
    console.log(typeof key);
}


// key value pair 
const person1 = new Map();
person1.set('first','harshit');
person1.set('age',7);
person1.set(1,'one');
console.log(person1)
console.log(person1.get(1));
// console.log(person1.keys());

for(let key of person1.keys()){
    console.log(key, typeof key);
}

