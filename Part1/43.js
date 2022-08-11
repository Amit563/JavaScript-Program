// call, apply[], band

const user1 = {
    firstName:"Amit",
    age:7,
    about:function(hobby){
        console.log(this.firstName, this.age,hobby);
    }
}
const user2 = {
    firstName:"hohit",
    age:8
}

// user1.about.call(user2);
user1.about.call(user1,"gittar");


// apply
// user1.about.call(user1,["gittar"]);