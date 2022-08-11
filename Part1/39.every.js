const number = [2,4,6,8];
const ans = number.every((number)=>number%2===0);
console.log(ans);


//Method
const numbers = [5, 4, 7, 3];
const an = numbers.some((numbers) => numbers%2);
console.log(an);



//fill Method

const myArray = new Array(10).fill(0);
console.log(myArray);

//splice Method

const array = ["item1","item2","item3","item4"];
array.splice(1,1);
console.log(array);


// insert
array.splice(1,0,"inserted item");
console.log(array);