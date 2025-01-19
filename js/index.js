// Prevent us from attempting to use variables
// that are not declared
"use strict"
fetch('answers.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('submission-btn').innerText = data;
  });

/*
console.log(2+2);
console.log(17-11);
console.log(2*2);
console.log(9/3);
console.log(50%3);

console.log(2 +"2");
console.log(5+6*7);
console.log((5+6)*7);

console.log(3 + "5");
console.log(12/5);
console.log(12%5);

console.log(2 == 2);
console.log(2 == "2");
console.log(2 === "2");
console.log(2 !== 2);
console.log(2 !== "2");

let x = 2;
let y = 7;

console.log(x + y * y);
console.log(x + y * y % 2);
console.log((x + y * y) % 2);

console.log(3 || 3);
console.log(3 || "3");
console.log(2 || 3);
console.log(3 || 2);
console.log(2 && 2);
console.log(2 && "2");
console.log(2 && 3);
console.log(3 && 2);

console.log(1 && 2);
console.log(1 && 1);

*/