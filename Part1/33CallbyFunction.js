function myfunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);

}
function myfunc(callback)
{
    console.log("hello ther I am a func ")
    callback("rohan");
}

myfunc(myfunc2);