
const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'group6',
    host: 'localhost',
    database: 'api',
    password: 'project1',
    port: 5432,
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
    const unit_id = parseInt(request.params.unit_id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [unit_id], (error, results) => {
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
  
