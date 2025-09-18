// Wait the window to load
window.onload = function () {
  document.querySelector("h1").style.color = "red";
};


// window.alert("Hello From JS file");

//document.querySelector("h1").style.color = "red";
// document.write("<h1>Hello <span>page</span></h1>");



// console.log("HELLO AHMED FROM CONSOLE");
console.log("log from main.js file");
console.error("error from main.js file");


console.table(["tamer","mohamed","ali"]);


console.log("Welcome to my first %cJS file", "color: red;font-size:40px;")




/****************** */


/*
ES6 intro

*/

var my_name = "Ahmed";
// don't match ES6
console.log("Hello, " + my_name);


// match ES6
console.log(`Hello, ${my_name}`);


/******************************************** */

/*
    Data Types Intro
    String
    Number
    Array => Object
    Object
    Boolean
*/

console.log("Ahmed Khalid");

console.log(typeof("Ahmed Khalid")); // string


console.log(typeof(100)); // number
console.log(typeof(100.5)); // number
console.log(typeof(-100)); // number
console.log(typeof(-100.5)); // number
console.log(typeof(0)); // number
console.log(typeof(0.0)); // number


console.log(typeof [1,2,3]); // object (array)

console.log(typeof ["IS","IT","CS"]); // object (array)

console.log(typeof {name:"Ahmed", age:20,Governorate:"Menofia"}); // object (object)



console.log(typeof true); // boolean
console.log(typeof false); // boolean


console.log(typeof undefined); // undefined
