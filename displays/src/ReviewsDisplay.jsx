import React from 'react'
//import Rater from 'react-rater'
//import {card} from 'semantic-ui-react'

const ReviewsDisplay = ({reviews}) => {  
  return (
    reviews.map((reviews) => (
    <div>
      <span>Unit ID:{reviews.unit_id} </span><br/>
      <span>Name: {reviews.person_id}</span><br/>
      <span>Positive Reviews: {reviews.pros}</span><br/>
      <span>Negative Reviews: {reviews.cons}</span><br/>
      <span>Ratings: {reviews.reviewStars}</span><br/>      
  </div>
    )
   )
  );
}

export default ReviewsDisplay;



{/* <div class="ui card">
      {reviews.map((reviews) => (
         
          <div class="content">{
              <div class="header">{reviews.userId}</div>
                <div class="meta">{reviews.id}</div>
                  <div class="description">{reviews.title}
                  </div>
            </div>
         </div>
        ))} */}