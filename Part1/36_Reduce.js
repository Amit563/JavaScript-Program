//Reduce

const number = [1,3,6,8,10];

const sum = number.reduce((accumulator,currentValue) => {
return accumulator + currentValue;
});

console.log(sum);


const userCart = [
    {product:1,productName:"mobile",price:12000},
    {product:2,productName:"tv",price:15000},
    {product:3,productName:"laptop",price:20000}
]

const totalAmount = userCart.reduce((totalPrice,currentPrice)=>{
    return totalPrice + currentPrice.price;
},0)
console.log(totalAmount)