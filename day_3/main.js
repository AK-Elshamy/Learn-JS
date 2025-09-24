/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.trunc(b) * a / 2); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.round(d)); // 2
console.log(parseInt(d)); // 2

// Use variable b to get these values (string and number)
console.log((Math.trunc(b) / 3).toFixed(2)); // "66.67" => String
console.log(Math.round(Math.trunc(b) / 3)); // 67 => Number

console.log("================\n================\n");

/*
خزّن نص في متغير، مثلاً "JavaScript is fun".

اطبع:

عدد الأحرف

النص كله كابيتال

جزء "Script" باستخدام slice()

استبدل "fun" بـ "awesome"

تحقق إذا النص يحتوي على "Java" باستخدام includes().
*/

let s = "JavaScript is fun";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.slice(4, 10));

console.log(s.replace("fun", "awesome"));
console.log(s.includes("Java"));


