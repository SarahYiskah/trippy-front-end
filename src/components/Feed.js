import React, {Component} from 'react'
import FeedItem from './FeedItem'

export default class Feed extends Component {

  constructor() {
    super()

    this.state={
      reviews: ''
    }
  }

  componentDidUpdate = () => {
    return this.props.auth !== null && this.state.reviews === '' ? this.fetchReviews() : null
  }

  fetchReviews = () => {
    fetch(`http://localhost:3000/api/v1/reviews/${this.props.auth.user_id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          reviews: json
        }, () => console.log(this.state.reviews))
      })
  }

  render(){
    return(
      <div>
        {this.state.reviews.length === 0 ? <p>NO NEW REVIEWS</p> : this.state.reviews.map(review => <FeedItem datum={review}/>)}
      </div>
    )
  }

}
