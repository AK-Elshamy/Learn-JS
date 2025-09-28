/*
"صلي على النبي"
"One day, the sun will rise."

https://leetcode.com/problems/largest-perimeter-triangle?envType=daily-question&envId=2025-09-28

*/


// solution 1


var largestPerimeter = function (Numbers) { // time O(n)

    Numbers.sort((a, b) => a - b);

    check = (a, b, c) => a + b > c ? true : false;

    for (let i = Numbers.length - 1; i > 1; --i) {
        if (check(Numbers[i - 2], Numbers[i - 1], Numbers[i])) return Numbers[i] + Numbers[i - 1] + Numbers[i - 2];

    }
    return 0;
};

/* Binary Search Solution, time O(n log(n))

function lowerBound(arr, x, st) {

    let start = st, end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);


        let target = arr[mid];
        if (target < x) {
            start = mid + 1;
            result = mid;
        } else {
            end = mid - 1;
        }
    }
    return result;

}


var largestPerimeter = function (Numbers) {
    Numbers.sort((a, b) => a - b);
    let result = 0;
    outer: for (let i = 0; i < Numbers.length - 2; ++i) {
        let side1 = Numbers[i], side2 = Numbers[i + 1];
        let index_side3 = lowerBound(Numbers, side1 + side2, i + 2);

        if (index_side3 < 0) {
            continue outer;
        }

        result = Math.max(result, side1 + side2 + Numbers[index_side3]);
    }
    return result;
};

*/