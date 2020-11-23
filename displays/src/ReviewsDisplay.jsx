import React from 'react'
//import Rater from 'react-rater'

const ReviewsDisplay = ({reviews}) => {
  return(
    <div>
      {reviews.map((reviews) => (
        <div class="cards">
          <div class="card">
              <h5 class="card-title">{reviews.id}</h5>
                <h6 class="card-text">{reviews.email}</h6>
                  <h7 class="card-subtitle mb-2 text-muted">{reviews.body}</h7>
            </div>
          </div>
        ))}
    </div>
   )
};

export default ReviewsDisplay