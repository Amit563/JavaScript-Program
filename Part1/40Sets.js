// sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access 
// Order is not guarnteed
// unique items only ( no duplicates allow)


// const numbers = new Set([1,2,3]);  both are allow
// const numbers = new Set("abc");

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(['item1','item2']);
numbers.add(['item','item2']);
console.log(numbers);