require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors())
app.use(bodyParser.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const serviceCollection = client.db(process.env.DB_NAME).collection("service");
    console.log('Database Connection successfully');


    app.post('/service', (req, res) => {
        const service = req.body;

        serviceCollection.insertOne(service)
            .then(result => {
                res.send(result)
            })
    })
    app.get('/service', (req, res) => {
        serviceCollection.find({})
        .toArray((err, document)=>{
            res.send(document)
        })
    })
});

app.get('/', (req, res) => {
    res.send('Api is get successfully')
})

// set port, listen for requests
app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});