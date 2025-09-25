/*
"صلي على النبي"
"One day, the sun will rise."

https://codeforces.com/contest/2148/problem/B
*/


const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let testCases = Number(input[0]);
let index = 1;
mainLoop: for (let i = 0; i < testCases; ++i){
    let n = Number(input[index++]);
    let m = Number(input[index++]);
    let x = Number(input[index++]);
    let y = Number(input[index++]);

    nestedLoop: for(let j = 0; j < n + m; ++j){
        let high = Number(input[index++]);
    }

    console.log(n + m);
}