
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
    pool.query('SELECT * FROM Reviews', (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getReviewByUnitId = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createReview = (request, response) => {
    const {person_id, unit_id, reviewStars, pros, cons, review} = request.body
  
    pool.query('INSERT INTO Reviews (person_id, unit_id, reviewStars, pros, cons, review) VALUES ($1, $2, $3, $4, $5, $6)', [person_id, unit_id, reviewStars, pros, cons], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).json('Successfully created a review')
    })
  }

  const updateReview = (request, response) => {
    const id = parseInt(request.params.id)
    const {person_id, unit_id, reviewStars, pros, cons} = request.body
  
    pool.query(
      'UPDATE reviews SET person_id = $1, unit_id = $2 WHERE id = $3',
      [person_id, unit_id, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }



  module.exports = {
    getReviews,
    getReviewByUnitId,
    createReview,
    updateReview,
  }
  
