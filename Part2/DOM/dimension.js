// how to get dimension of Element
// height width

const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
const info = sectionTodo.getBoundingClientRect().top;
console.log(info);