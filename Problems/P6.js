/*
"صلي على النبي"
"One day, the sun will rise."
Problem Link: https://leetcode.com/problems/counter-ii/editorial/?envType=study-plan-v2&envId=30-days-of-javascript
*/



var createCounter = function (init) {
    let start = init;
    return {
        increment: _ => ++init,
        decrement: _ => --init,
        reset: _ => (init = start)
    };

};