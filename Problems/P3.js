/*
"صلي على النبي"
"One day, the sun will rise."

Problem link: https://leetcode.com/problems/largest-triangle-area?envType=daily-question&envId=2025-09-27
*/

var largestTriangleArea = function (points) {

    let maxArea = 0;
    let len = points.length;

    for (let i = 0; i < len; ++i) {

        for (let j = i + 1; j < len; ++j) {

            for (let k = j + 1; k < len; ++k) {

                let [x1, y1] = points[i];
                let [x2, y2] = points[j];
                let [x3, y3] = points[k];


                let area = 0.5 * Math.abs(
                    x1 * (y2 - y3) +
                    x2 * (y3 - y1) +
                    x3 * (y1 - y2)
                );

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return parseFloat(maxArea.toFixed(5));
};