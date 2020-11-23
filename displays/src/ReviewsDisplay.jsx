import React from 'react'
//import Rater from 'react-rater'

const ReviewsDisplay = ({reviews}) => {
  return(
    <div>
      {reviews.map((reviews) => (
        <div class="card">
          <div class="content">
              <h5 class="card-title">{reviews.name}</h5>
                <h6 class="card-text">{reviews.email}</h6>
                  <h7 class="card-subtitle mb-2 text-muted">{reviews.address.city}</h7>
            </div>
          </div>
        ))}
    </div>
   )
};

export default ReviewsDisplay