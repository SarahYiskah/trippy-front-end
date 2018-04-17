import React, {Component} from 'react'

export default class Feed extends Component {

  constructor() {
    super()

    this.state={
      reviews: []
    }
  }

  componentDidUpdate = () => {
    fetch(`http://localhost:3000/api/v1/reviews/${this.props.auth.user_id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      }
    })
      .then(res => res.json())
      .then(console.log)
  }

  render(){
    console.log(this.props.auth)
    return(
      <div>HEY</div>
    )
  }

}
