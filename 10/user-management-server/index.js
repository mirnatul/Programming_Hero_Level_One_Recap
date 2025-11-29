const express = require('express');
const app = express()
const cors = require('cors');
// for deployment
const port = process.env.PORT || 3000

// middleware, works in every api call
app.use(cors())
// middleware to receive the json data
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})


const user = [
    { id: 1, name: "gigi", email: 'gigi@gmail.com' },
    { id: 2, name: "bella", email: 'bella@gmail.com' },
    { id: 3, name: "sydney", email: 'sydney@gmail.com' },
]

app.get('/users', (req, res) => {
    res.send(user)
});
app.post('/users', (req, res) => {
    console.log("users post method");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;

    // add data to database
    user.push(newUser)

    res.send(newUser);
})


app.listen(port, () => {
    console.log("Port run in", port);
})