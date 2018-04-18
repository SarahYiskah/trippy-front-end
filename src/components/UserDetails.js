import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class UserDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: props.user
    }
  }

  moveToFriend = () => {
    this.props.addFriendId(this.state.user.id, this.state.user.name, this.state.user.email)
  }

  render(){
    return(
      <div>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.email}</p>
        <Link to="/friend-page" onClick={this.moveToFriend}>View Profile</Link>
      </div>
    )
  }
}
