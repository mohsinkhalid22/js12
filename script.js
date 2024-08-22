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

let head = document.querySelector("h4");

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College.";

let divs = document.querySelectorAll(".box");

let idx = 1;

for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
// console.log(div);

