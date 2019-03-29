const express = require('express')
require('dotenv').config()
const massive = require('massive')
const controller = require('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log(db.listTables())
}).catch(err => console.log(err))

app.get('/api/products', controller.get)
app.post('/api/products', controller.post)
app.put('/api/products/:id', controller.put)
app.delete('/api/products/:id', controller.delete)

app.listen(SERVER_PORT, () => console.log("What's good is on", SERVER_PORT))