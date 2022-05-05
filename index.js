const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
require('dotenv').config()

//Middleware
app.use(cors())
app.use(express.json())


//mongo db element
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.omwf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


//main function to connect everything
async function run() {
    try {
        await client.connect();
        const itemCollection = client.db("stock").collection("items");


        //find all items
        app.get('/items', async (req, res) => {
            const query = {}
            const cursor = itemCollection.find(query)
            const result = await cursor.toArray()
            res.send(result)
        })

    } finally {
        //await client.close();
    }
}
run().catch(console.dir);



//test api
app.get('/', (req, res) => {
    res.send('This is Stokeify Server')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})