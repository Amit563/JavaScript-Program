//get multiple element using getElement by class name
//get multiple elment items using querySelectorAl

const navItems = document.getElementsByClassName("nav-item");  //it gives HTML Collection
console.log(navItems[2]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));

const navitem = document.querySelectorAll(".nav-item");   //it gives Node List
console.log(navitem);