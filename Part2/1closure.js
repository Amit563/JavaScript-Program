// function can return function

function outerFunction(){

    const c= "hello world";
    
    function innerFunction(){
        console.log(c);
    }
    return innerFunction;
}

const ans = outerFunction();
console.log(ans);
ans();