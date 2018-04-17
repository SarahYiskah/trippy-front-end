import React, { Component}  from 'react'
import { Alert } from 'reactstrap'

export default class DisplayFriends extends Component {

  constructor(){
    super()

    this.state = {
      visible: false
    }
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  handleClick = (e) => {
    let friend = e.target.id

    fetch(`http://localhost:3000/api/v1/users/${this.props.auth.user_id}/add`, {
      method: "POST",
      headers:  {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      },
      body:
        JSON.stringify({
          user_id: this.props.auth.user_id,
          friend_id: e.target.id
        })

    })
    .then( res => res.json())
    .then( json => {
      this.props.friendFetch(json.user_id)
      this.setState({
        visible: true
      })
    })
  }




  render(){
    return(
      <div>
        <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
          You are now friends
        </Alert>

        <div className="profile-container">
        <h4>Name: {this.props.datum.name}</h4>
        <h4>Email: {this.props.datum.email}</h4>
        <a href="">View Profile</a>
        <button onClick={this.handleClick} id={this.props.datum.id}>Add Friend</button>
        </div>

      </div>

    )
  }
}
