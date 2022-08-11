// document.createElement()
// append
// prepend
// remove 
// after
// before


// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Tech students");
// newTodoItem.textContent = "Tech students";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// // todoList.append(newTodoItem);
// // todoList.appendChild(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);


// Remove mathod

// const todo1  = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);


const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Tech students";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);