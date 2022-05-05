const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
require('dotenv').config()

//Middleware
app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.omwf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('mongo connected')
    client.close();
});


app.get('/', (req, res) => {
    res.send('This is Stokeify Server')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})