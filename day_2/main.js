let title = "learnJavaScript", description = "Elzero web school", date="20/9/2025";

let build = `<div class = "card">
    <h3>${title}</h3>
    <p>${description}</p>
    <span>${date}</span>
</div>`;

// document.write(build + build + build + build);

document.write(build.repeat(4));




/******************************** */


let a = 10 , b = "20", c = 80;

console.log(++a + +b++ + +c++ - +a++); 
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +a++);



/******************************** */
/*
[1] var
[2] let
[3] const

*/

var x = 10;
let y = 20;
const z = 30;

console.log(`x is: ${x}`);
console.log(`y is: ${y}`);
console.log(`z is: ${z}`);

// check th global scope

if(true){
    var X = 100;
    let Y = 200;
    const Z = 300;

    console.log(`X is: ${X}`);
    console.log(`Y is: ${Y}`);
    console.log(`Z is: ${Z}`);
}
console.log(`X is: ${X}`);
// console.log(`Y is: ${Y}`); // error
// console.log(`Z is: ${Z}`); // error
