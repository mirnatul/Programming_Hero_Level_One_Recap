const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(express.json());

// user: simpleDBUser
// pass: AeOp1i68i0Xj0zyS
const uri = "mongodb+srv://simpleDBUser:AeOp1i68i0Xj0zyS@cluster0.dudbtcu.mongodb.net/?appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // collections
        const database = client.db('usersdb');
        const usersCollection = database.collection('users')


        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.findOne(query)
            res.send(result)
        })


        app.post('/users', async (req, res) => {
            console.log("data in the server", req.body);

            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser)
            res.send(result)
        })

        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const user = req.body

            const updatedDoc = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            const options = { upsert: true }
            // console.log(user);
            const result = await usersCollection.updateOne(filter, updatedDoc, options)
            res.send(result)
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.deleteOne(query)
            res.send(result)
        })







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("Port run in", port);
})