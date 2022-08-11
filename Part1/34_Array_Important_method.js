//forEach ,map , filter , reduce 

const numbers = [4,2,5,8];

function multiplyBy2(number,index)
{
    console.log("index is", index);
    console.log(`${number}*2 = ${number*2} `);

}

// for(let i=0; i < numbers.length; i++)
// {
//     multiplyBy2(numbers[i],i);
// }   As same work

numbers.forEach(multiplyBy2);

////

const num = [2,4,7,4];

num.forEach(function(number,index){
    console.log(number*3, "index=",index);
});


const users = [
    {firstname:"Amit" , age:21},
    {firstname:"kumR" , age:21},
    {firstname:"Sohan" , age:21},
    {firstname:"Aman" , age:21}
]
users.forEach(function(user)
{
    console.log(user.firstname);
})

// for(let user of users)
// {
//     console.log(user.firstname);
// }