/*
"صلي على النبي"
"One day, the sun will rise."
Problem Link: https://leetcode.com/problems/water-bottles?envType=daily-question&envId=2025-10-01
*/



var numWaterBottles = function (numBottles, numExchange) {

    let drinksBottles = 0;
    while (numBottles >= numExchange) {

        let retrunEX = Math.floor(numBottles / numExchange);
        drinksBottles += retrunEX * numExchange;
        numBottles = (numBottles % numExchange) + retrunEX;
    }
    drinksBottles += numBottles;
    return drinksBottles;
};


/*
// numBottles = 15 , numExchange = 4, retrunEX

[1] while(numBottles >= numExchange)
    returnEx = floor(numBottles / numExchange)
    drinksBottel += returnEx * numExchange
    numBottles = (numBottles % numExchange) + returnEx

*/