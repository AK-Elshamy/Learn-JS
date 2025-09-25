/*
"صلي على النبي"
"One day, the sun will rise."

Problem link: https://codeforces.com/contest/2148/problem/A
*/



const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let testCases = Number(input[0]);

let = index = 1;


for (let i = 0; i < testCases; ++i){
    let x = Number(input[index++]);
    let n = Number(input[index++]);

    console.log(`${n & 1 ? x : 0}`);
}
