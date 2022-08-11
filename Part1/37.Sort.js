
const name = ["sohan","manoj","amit","xwys","ABc"];
name.sort();
console.log(name);



const number = [15,7,99,22,5,2,17];
// number.sort((a,b)=>{
//     return a-b;
// });
number.sort((a,b)=>a-b);
console.log(number);

const userCart = [
  { product: 1, productName: "mobile", price: 12000 },
  { product: 2, productName: "tv", price: 15000 },
  { product: 3, productName: "laptop", price: 20000 },
];

userCart.sort((a,b)=>{
    return a.price;
})
console.log(userCart);