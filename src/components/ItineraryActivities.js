import React, {Component} from 'react'
import Itinerary from '../containers/Itinerary'

export default class ActivityDetails extends Component {

  state = {
    addReview: false,
    review: ''
  }

  toggleReview = () => {
    this.setState({
      addReview: !this.state.addReview
    })
  }

  createReview = (review) => {
    fetch(`http://localhost:3000/api/v1/reviews/`, {
      headers:  {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      },
      body: JSON.stringify(review),
      method: "POST"
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let review = {review: `${this.state.review}`, user_id: this.props.auth.user_id, content_name: this.props.details.name}
    this.createReview(review)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    console.log("you will be deleted shortly")
  }

  render(){
    return(
      <div>
        <div className="activity-box">
          <div className="content">
            <div className="title"><a href={this.props.url} target="_blank">{this.props.name}</a></div>
            <div className="meta">
              {this.props.formattedAddress}
            </div>
            <div className="description">
              {this.props.details.tip ? <p>{this.props.details.tip}</p> : null}
            </div>
          </div>
          <br/>
          <button onClick={this.toggleReview} className="add-a-review" id={JSON.stringify(this.props.details)}>
            <i className="add icon"></i>
            Add review
          </button>
          <br/>
          {this.state.addReview ? <form onSubmit={this.handleSubmit}><br/><textarea onChange={this.handleChange} type="text" id="title" name="review" value={this.state.review} placeholder="review"/><br/><input type="submit"/></form> : null}
          <br/>
          <button onClick={this.handleClick} className="remove-from-trip" id={JSON.stringify(this.props.details)}>
            <i className="remove icon"></i>
            Remove from trip
          </button>
        </div>
      </div>
    )
  }
}
