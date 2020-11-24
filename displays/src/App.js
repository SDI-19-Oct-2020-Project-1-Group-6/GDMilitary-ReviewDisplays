import './App.css'
import React from 'react'
import ReviewsDisplay from './ReviewsDisplay'
//import {Container} from 'semantic-ui-react'


//const reviewsAPI = 'http://localhost:5001/Reviews'

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
    //add back "reviewsAPI" once display is working as needed to test final integration
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({reviews: data})
    })
    .catch(console.log)
  }



  render(){
    return (
      // <Container className="container" textAlign="center">
      <div className="ui container" style={{marginTop : '10px'}}>
        <h2>Airman Base Reviews</h2>          
      <ReviewsDisplay reviews ={this.state.reviews}/>
      </div>

    );
  }
  }


export default App;
