const myArray = ["hello","cat","dag","lion"];

    function islength3(string){
    return string.length===3;
    }
    const ans = myArray.find(islength3);
    console.log(ans);



const users = [
    {userId:1,userName:"sumit"},
    {userId:2,userName:"mohit"},
    {userId:3,userName:"raman"},
    {userId:4,userName:"amit"}
];

    const myUser = users.find((user)=>user.userId===3);
    console.log(myUser);
