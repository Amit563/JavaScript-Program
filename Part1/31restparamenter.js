// rest parameter


function myfun(a,b,...c){
   console.log(`a is ${a}`)
   console.log(`a is ${b}`);
   console.log(`a is ${c}`);

}
myfun(3,4,5,6,7,8,9);


function addall(...numbers){
    let total = 0;
    
    for(let number of numbers){
        total = total + number;
    }
    return total;

}

const ans = addall(4,5,6,6);
console.log(ans);