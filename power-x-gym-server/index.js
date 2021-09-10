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
    const choseCollection = client.db(process.env.DB_NAME).collection("choses");
    const pricesCollection = client.db(process.env.DB_NAME).collection("prices");
    const classesCollection = client.db(process.env.DB_NAME).collection("classes");
    const ordersCollection = client.db(process.env.DB_NAME).collection("orders");
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
            .toArray((err, document) => {
                res.send(document)
            })
    })

    // app.post('/chose', (req, res) => {
    //     const chose = req.body;

    //     choseCollection.insertOne(chose) 
    //         .then(result => {
    //             res.send(result)
    //         })
    // })
    app.get('/chose', (req, res) => {
        choseCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })
    // app.post('/prices', (req, res) => {
    //     const prices = req.body
    //     pricesCollection.insertMany(prices)
    //     .then(result=>{
    //         res.send(result.acknowledged)
    //     })
    // })
    app.get('/prices', (req, res) => {
        pricesCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })
    app.post('/classes', (req, res) => {
        const classes = req.body;
        console.log(classes);
        classesCollection.insertMany(classes)
            .then(result => res.send(result.acknowledged))
    })

    app.get('/classes', (req, res) => {
        classesCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })
    app.post('/order', (req, res) => {
        const order = req.body
        ordersCollection.find({ email: order.email })
            .toArray((err, document) => {
                const prevOrder = document.find(doc => doc.productId === order.productId)
                if (prevOrder) {
                    res.send({ message: `Already Have Added This Membership Plan ${prevOrder.productId}` })
                } else {
                    ordersCollection.insertOne(order)
                        .then(result => {
                            if (result.acknowledged) {
                                res.send({message:`Successfully order this plan Member ${result.insertedId}`})
                            }
                        })
                }
                if (err) {
                    res.send(err)
                }
            })

    })
    app.patch('/order', (req, res)=>{
        
        const orderUpdate = req.body;
        console.log(orderUpdate);
        ordersCollection.updateOne(
            {_id: orderUpdate._id},
            {
                $set:{PaymentMethodId: orderUpdate.paymentMethodId},
                // $currentDate: { lastModified: true }
            },
            
            )
    })
    app.get('/order', (req, res) => {
        const userEmail = req.query.email
        ordersCollection.find({ email: userEmail })
            .toArray((err, document) => {
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