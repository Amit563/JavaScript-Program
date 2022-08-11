// loop simple for loop 
// for of loop


let navItems = document.getElementsByTagName("a");   //HTML collection

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight = "bold";
// }

navItems = Array.from(navItems);
console.log(Array.isArray(navItems));

for (let navItem of navItems) {
  // console.log(navItems[i]);
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
}