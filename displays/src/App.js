//import './App.css'
import React from 'react'
import ReviewsDisplay from './ReviewsDisplay'




const reviewsAPI = 'http://localhost:3001/reviews'

class App extends React.Component {
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
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({reviews: data})
    })
    .catch(console.log)
  }



  render(){
    return (
      <div>
      <div class="container">
        <div class="row">
        <h2>Airman Base Reviews</h2>
        </div>
      </div>
      
      <ReviewsDisplay reviews ={this.state.reviews}/>
      </div>
    );
  }
  }


export default App;
