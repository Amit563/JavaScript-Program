// lexical scope

function myApp() {
  const myvar = "value1";
  function myfun() 
  {

    console.log("inside myfunc");
  }
  const myfun2 = function ()
   {
    const myvar = "value59";
    console.log("inside myfunc", myvar);
   };

  console.log(myvar);
  myfun2();
}
myApp();
