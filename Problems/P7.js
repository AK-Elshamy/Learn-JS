/*
"صلي على النبي"
"One day, the sun will rise."
Problem Link: https://leetcode.com/problems/find-triangular-sum-of-an-array?envType=daily-question&envId=2025-09-30
*/





var triangularSum = function (nums) {
    function getArray(arr) {
        let len = arr.length;
        let target = [];
        for (let i = 0; i < len - 1; ++i) {
            target[i] = (arr[i] + arr[i + 1]) % 10;
        }
        return target;
    }


    let len = nums.length;
    while (len-- > 1) {
        nums = getArray(nums);
    }
    return nums[0];
};