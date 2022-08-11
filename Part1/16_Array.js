/*   intro to arrays
     Reference type
     How to create arrays   */

    //  Order collection of items


     let fruits = ["apple","mango","grapes"];
     let numbers = [1,2,3,4,5,6,7,8];
     let mixed = [1,4,"Apple",4,null,undefined];

     console.log(fruits);
     console.log(numbers);
     console.log(mixed);



    console.log(fruits);
    fruits[1]="banana";
    console.log(fruits);

    console.log(fruits[2]);
    console.log(typeof mixed);


    let obj = {};
    console.log(Array.isArray(fruits));
    console.log(Array.isArray(obj));


    // Push and Pop Function


    let fruit = ["apple","mango","grapes"];
    console.log(fruit);
    fruit.push("orange");
    console.log(fruit);


    console.log(fruit.pop());  //Pop function is not only remove as well as  also return
    console.log(fruit);



    // unshift

    fruit.unshift("orange");
    fruit.unshift("myfruit");
    console.log(fruit);


    // shift

    let removedfruit = fruit.shift();
    console.log(fruit);
    console.log("Removed fruits is",removedfruit);