const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
require('dotenv').config()

//Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is Stokeify Server')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})