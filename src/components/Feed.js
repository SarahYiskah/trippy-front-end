import React, {Component} from 'react'
import FeedItem from './FeedItem'
import url from '../modules/link.js'


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
    fetch(`${url}api/v1/reviews/${this.props.auth.user_id}`, {
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

        <div>
          <img className="workplz" src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd27a515bce2dade58bc288fde28f290&auto=format&fit=crop&w=1993&q=80" alt="pretty" />
        </div>

        <div class="ui large feed">
          {this.state.reviews.length === 0 ? <p>NO NEW REVIEWS</p> : this.state.reviews.map(review => <FeedItem datum={review}/>)}
        </div>

      </div>
    )
  }

}
