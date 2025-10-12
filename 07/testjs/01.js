const products = [
    { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
    { name: "samsung", brand: "samsung", price: 4000, color: "silver" },
    { name: "apple", brand: "apple", price: 12000, color: "orange" },
    { name: "oppo", brand: "oppo", price: 5000, color: "blue" }
];

const result = products.map(product => product.price);
console.log(result);  // [ 3000, 4000, 12000, 5000 ]
