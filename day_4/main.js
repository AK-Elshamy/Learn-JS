




let myFriends = ["John", "Michael", "Tony"];

console.log(`Hello ${myFriends[0]}`);


console.log(`char 3 in name 2 is ${myFriends[1][2]}`);










let a = [1, 2, 3, 4, 5, 6];

console.log(a.slice(0, 4).reverse());
a.shift();
console.log(a.slice(0,2).reverse());







let numbers = [10, 20, 30, 40];

// forEach بتاخد Callback Function فيها (value, index, array)
numbers.forEach((value, index, arr) => {
  console.log(`Index: ${index}, Value: ${value}, Array: [${arr}]`);
});