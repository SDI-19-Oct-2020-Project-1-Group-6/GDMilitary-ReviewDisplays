//const fs = require("fs")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors')
const port = 5001
const db = require('./queries')


 app.use(cors())
 app.options('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-ith, Content-Type, Accept");
// })

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  //app.get('/', (req, res) => res.send(reviews))
  
  
//database pushes
app.get('/reviews', db.getReviews)
app.get('/reviews/:unit_id', db.getReviewByUnitId)


app.listen(port, () => console.log(`This app is listening at http://localhost:${port}`))