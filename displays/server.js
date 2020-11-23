//const fs = require("fs")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 5001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


//var list = JSON.parse(fs.readFileSync('./list.JSON'))

// const Pool = require('pg')
// const { response } = require("express")

app.get('/', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})

//app.get('/reviews', db.getReviews)

app.get('/')



app.listen(port, () => console.log(`This app is listening at http://localhost:${port}`))