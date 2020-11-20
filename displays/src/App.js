import './App.css'
import React from 'react'
import ReviewsDisplay from './ReviewsDisplay'
import FilterControls from './FilterControls'



const reviewsAPI = 'http://localhost:3001/reviews'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state ={
      reviews: [],
      locations: [],
      allReviews: [],
    }
  }

  async componentDidMount(){
    await this.getData();
  }

  async getData(){
    const review = await fetch(reviewsAPI)

    const json = review.json()
    let locations = []
    await json.forEach(element => {
      if(!location.includes(element.location)){
        locations.push(element.location)
      }
    });
    this.setState(allReviews: json, reviews: json, locations: locations.sort()})
  }

  locationChange = (e) => {
    let location = e.target.value
    if(locations === "Display All"){
      this.setState({reviews: this.state.allReviews})
      }else{
        let filterReviews = this.state.allReviews.filter((reviews) =>
        reviews.location === location)
      }
  }


  render(){
    return (
      <div className="App-header">
        <button onClick={this.addReview}>Add a New Review</button>
        <span>{this.state.addUserResponse.message}</span>
        <FilterControls locations={this.state.locations} onLocationChange={this.locationChange}/>
        <ReviewsDisplay reviewList={this.state.reviews}/>
      </div>
     
    );
  }
  }


export default App;
