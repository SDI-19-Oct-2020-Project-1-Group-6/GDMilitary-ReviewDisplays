//import './App.css'
import React from 'react'
import {Card} from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component'




//const reviewsAPI = 'http://localhost:5001/Reviews'

class Reviews extends React.Component {
  constructor (props){
    super(props)
    this.state ={
      reviews: [],
    }
  }

  async componentDidMount(){
    await this.getData();
  }

  async getData(){
    //add back "reviewsAPI" once display is working as needed to test final integration
    // https://jsonplaceholder.typicode.com/comments
    fetch(`http://localhost:5001/reviews/${this.props.unit}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({reviews: data})
    })
    .catch(console.log)
  }



  render(){
    return (
      <div className="ui container" style={{marginTop : '10px'}}>
        <h2>Airman Base Reviews</h2>           
      <div>
      <Card.Group itemsPerRow={2}>
        {this.state.reviews.map((data) => (
          <Card>
            <Card.Content header="Reviewer" description={data.person_id}/>
            <Card.Content header="Pros" description={data.pros}/> 
            <Card.Content header="Cons" description={data.cons}/>
            <Card.Content extra>
            <StarRatingComponent name="rate2" starCount={5} value={data.reviewStars} editing={false} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>    
  </div>

      </div>
    );
  }
  }


export default Reviews;
