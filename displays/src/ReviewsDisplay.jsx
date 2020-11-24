import React from 'react'
//import Rater from 'react-rater'
import {Card} from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component'

const ReviewsDisplay = ({reviews}) => {  
  return (
    <div>
      <Card.Group itemsPerRow={2}>
        {reviews.map((reviews) => (
          <Card>
            <Card.Content header="Unit Number"/>
            <Card.Content description={reviews.userId}/>
            <Card.Content header="Pros"/>
            <Card.Content description={reviews.title}/>
            <Card.Content header="Cons"/>
            <Card.Content description={reviews.body}/>
            <Card.Content extra>
            <StarRatingComponent name="rate2" starCount={5} value={4} editing={false} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>    
  </div>
  )}
  

export default ReviewsDisplay;



/* <div class="ui card">
      {reviews.map((reviews) => (
         
          <div class="content">{
              <div class="header">{reviews.userId}</div>
                <div class="meta">{reviews.id}</div>
                  <div class="description">{reviews.title}
                  </div>
            </div>
         </div>
        ))} */


        // <div>
        // <span>Unit ID:{reviews.unit_id} </span><br/>
        // <span>Name: {reviews.person_id}</span><br/>
        // <span>Positive Reviews: {reviews.pros}</span><br/>
        // <span>Negative Reviews: {reviews.cons}</span><br/>
        // <span>Ratings: {reviews.reviewStars}</span><br/> 