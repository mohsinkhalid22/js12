// console.dir(document.head);
// console.log(document.body);

// document.body.childNodes[1].innerText = "abcd";
let button = document.getElementById("myId");
console.dir(button);

let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

let firstEl = document.querySelector("#myId");
console.dir(firstEl);

let allEl = document.querySelectorAll(".myClass");
console.dir(allEl);

let div = document.querySelector("div");
console.log(div);