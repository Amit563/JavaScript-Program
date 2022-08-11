// object destructing

const band = {
bandName : "led",
famous:"stairway",
year:1233,
another:"kasmir",
};

let {bandName,famous, ...restProps} = band;
console.log(bandName);
console.log(restProps);


// object in side array
// very useful in real world application


const array1 = [
  { userId: 1, age: 20, gender: "male" },
  { userId: 2, age: 21, gender: "male" },
  { userId: 3, age: 23, gender: "male" },
  { userId: 4, age: 22, gender: "male" },
]
// console.log(array1);
for(let user of array1)
console.log(user);

// nested destructing 
const [{userId},,{gender}] = array1;
console.log(userId);
console.log(gender);