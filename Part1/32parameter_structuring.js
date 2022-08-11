// object
// react


const person = {
    name:"Aman",
    age:21,
    gender:"male",
}

// function print(obj)
// {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
// }    // or same


function print({name,gender,age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

print(person);
