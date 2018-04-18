import React, {Component} from 'react'
import UserDetails from '../components/UserDetails'

export default class User extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: props.users,
      title: props.title
    }
  }

  render(){
    return(
      <div>
        <h2>{this.state.title}</h2>
        <div className="ui list">
        {this.state.users.map(friend => <UserDetails key={friend.id} user={friend} addFriendId={this.props.addFriendId}/>)}
        </div>
      </div>
    )
  }
}
