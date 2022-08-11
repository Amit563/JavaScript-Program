const sing = function() {
  console.log("happy brithday to you....");
  console.log("___");
}
sing();


const two = function() {
  // console.log(3+4);
  return 2 + 4;
}

console.log(two());

const twoadd=function(num1, num2) {
  return num1 + num2;
}
const add = twoadd(4, 5);
console.log(add);




const iseven = function(number) {
  if (number % 2 == 0) 
  console.log("even");
  //return true;
  else console.log("odd"); //return false;
}
console.log(iseven(2));
