const numbers = [3,4,6,1,2];

const square = function(number){
    return number*number;
}

const squareNumber = numbers.map(square);

console.log(squareNumber);



//filter method

const num = [1,3,6,4];

const isEven = function(num){
    return num%2==0;
}

const evenNum = num.filter(isEven);
console.log(evenNum);
