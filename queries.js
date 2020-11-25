
const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool ({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_ADDRESS || 'localhost',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DB || 'postgres',
  port: process.env.PGPORT || 5432,
})

const getReviews = (req, res) => {
    pool.query('SELECT * FROM reviews', (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getReviewByUnitId = (request, response) => {
    //const unit_id = parseInt(request.params.unit_id)
    
    pool.query('SELECT * FROM reviews WHERE unit_id = $1', [request.params.unit_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getReviews,
    getReviewByUnitId
  }
  
