/*
"صلي على النبي"
"One day, the sun will rise."

https://leetcode.com/problems/to-be-or-not-to-be/editorial/?envType=study-plan-v2&envId=30-days-of-javascript
*/







var expect = function (val) {
    return {
        toBe: function (x) {
            if (x === val) return true;
            throw "Not Equal";
        },
        notToBe: function (x) {
            if (x !== val) return true;
            throw "Equal";
        }
    };
};
