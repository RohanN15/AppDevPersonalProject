// console.log("script.js loaded!")

// let varName = 30;
// const varDoesntChange = 10;
// if (varName > 10){
//     console.log("greater");
// } else{
//     console.log("less");
// }
// let coolList = [
//     3, 5, 6, 4,
//     3, 4, 2, 4,
//     3, 4, 6, 5
// ];
// coolList.push(3, 4, 3, 2,4 , 6, 4, 3);
// console.log(coolList);
// function greetPerson(name){
//     return "Hello " + name;
// }
// console.log(greetPerson("Rohan"));
let titleElement = document.getElementById("h2");
function changeTitle(){
    titleElement.innerText = "javascript";
    titleElement.style.color = "red"
}
// setTimeout(changeTitle, 2000);
let button = document.getElementById("hi");
button.addEventListener("mouseleave", changeTitle);

const start = document.getElementById("start");
const destination = document.getElementById("destination");

function changeStart(){
    start.innerText = "New shit";
}
let enter = document.getElementById("enter");
enter.addEventListener("mouseenter", changeStart);
