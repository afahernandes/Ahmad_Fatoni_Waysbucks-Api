require('dotenv').config()

const express = require('express')
require('express-group-routes')

const app = express()
const port = 5000

const router = require('./src/routes');

app.use(express.json())

app.use('/api/v1',router)


app.listen(port, () => console.log(`Listening on port ${port}!`))