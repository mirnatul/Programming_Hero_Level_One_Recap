const fruits = ["Banana", "Orange", "Apple", "Mango"];

const returned = fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits);
console.log(returned);




// Original array: Banana, Orange, Apple, Mango.
// New array: Banana, Orange, Lemon, Kiwi.
// Removed items(returned array): Apple, Mango
