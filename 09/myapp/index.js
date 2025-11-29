const express = require('express')
const products = require('./data.json');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World! 1001")
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);

    const product = products.find(product => product.id === id) || {};
    res.send(product)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})