let fruits = ["apple","banana","grapes","mongo"];
let i=0;
let fruit = [];


while(i<fruits.length)
{
    fruit.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruit);

const aaa=["apple","banana","grapes","mongo"];


// for of loop in array
for(let bbb in fruits)
{
    console.log(bbb);
}
