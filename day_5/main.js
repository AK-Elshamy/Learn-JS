console.log(typeof console.log); // function

function sayHello(userName) {
    console.log(`Hello ${userName}`);
}

sayHello("Ahmed");

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);

    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: ${rt}</p>`);

    if (show === "Yes") {
        document.write(`<h3>My Skills</h3>`);
        document.write(`<ul>`);
        for (let item of sk) {
            for (let skill of item) {
                document.write(`<li>${skill}</li>`);
            }
        }
        document.write(`</ul>`);
    }

    document.write(`</div>`);
}

let name = "Ahmed";
let age = 20;
let show = "Yes";
let rate = 5;
let skills = ["Problem solving", "Critical Thinking"];
showInfo(name, age, rate, show, skills);


// Challenge
function display(Name, age, status) {

    document.write('<h3>Challenge</h3>');
    document.write('<p>');

    document.write(`Hello, ${typeof Name === "string" ? Name : typeof age === "string" ? age : status}`);
    document.write(`, Your Age is: ${typeof Name === "number" ? Name : typeof age === "number" ? age : status}`);
    document.write(`, You Are ${typeof Name === "boolean" && Name === false ? "Not"
        : typeof age === "boolean" && age === false ? "Not"
            : status === false ? "Not" : ""} Available For Hire`);

    document.write('</p>');
}



display("Ahmed", 20, true);
display(20, false, "Ahmed");
display(true, "Ahmed", 20);


/****************************** */

document.write(`<br><hr>`);


document.getElementById("show").onclick = function () {
    console.log("Elshamy");
}

setTimeout(function () {
    console.log("Good");
}, 2000);