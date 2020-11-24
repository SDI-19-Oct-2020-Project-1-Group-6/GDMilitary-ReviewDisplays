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
            <Card.Content header="Unit Number" description={reviews.postId}/>
            <Card.Content header="Pros" description={reviews.name}/> 
            <Card.Content header="Cons" description={reviews.body}/>
            <Card.Content extra>
            <StarRatingComponent name="rate2" starCount={5} value={4} editing={false} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>    
  </div>
  )}
  
export default ReviewsDisplay;