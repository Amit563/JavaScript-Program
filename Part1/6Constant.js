/*
trim()
toUpperCase()
toLowerCase()
Slice()
*/

let firstname = "  AmitKumar   ";


console.log(firstname.length);
firstname = firstname.trim();
console.log(firstname);
console.log(firstname.length);


//toUpperCase()

let first = "amitkumar";

console.log(first);
console.log('Change Upper Case:',first.toUpperCase());

// toLocaleLowerCase()

let second = "AMITKUMAR";

console.log(second);
console.log('Change Lower Case:',second.toLocaleLowerCase());


// slice()

let thirdName = "AjeetKumar";

console.log(thirdName.slice(0,6));