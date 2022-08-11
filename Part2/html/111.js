const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);

const htmlElementNode  = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes);

const h1 = document.querySelector("h1");
// const div = h1.parentNode;
const div = h1.parentNode.parentNode;
div.style.color = "efefef";
div.style.backgroundColor = "#333";
