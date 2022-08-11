const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);

sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");

const ans = sectionTodo.classList.contains("container");
console.log(ans);

sectionTodo.classList.toggle("bg-dark");  //toggle means if any class already present in the file when that is remove if that class is not present then add that class in the file