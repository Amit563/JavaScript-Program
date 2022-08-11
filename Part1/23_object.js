const person = {
    name:"Amit Kumar",
    age:20,
    "person hobbies":["cricket","sleeping","listenig music"]

}

for(let key in person)
{
    console.log(person[key]);
}

console.log(typeof (Object.key(person)));
const val = Array.isArray((Object.key(person)));
console.log(val);