let winningNumer = 19;

let userGuess = +prompt ("Guess a number");  //prompt take input in string

console.log(typeof userGuess);

if(userGuess === winningNumer)
{
    console.log("Your Number is right");
}
else
{
    if(userGuess < winningNumer)
    console.log("too low");
    else
    console.log("too high");
}