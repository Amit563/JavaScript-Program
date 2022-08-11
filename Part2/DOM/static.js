// static list vs live list

// querySelectorAll hamein static list degi
// getElementAllBySomething hamein live list degi


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);