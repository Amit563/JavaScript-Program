let fruits = ["apple","banana","grapes","mongo"];

for(let i=0;i<4;i++)
console.log(fruits[i]);

console.log(fruits[fruits.length-1]);

let fruit = [];

for(let i=0;i<fruits.length;i++)
{
    fruit.push(fruits[i].toUpperCase());
}
console.log(fruit);