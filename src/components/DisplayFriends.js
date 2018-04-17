import React, { Component}  from 'react';


export default class DisplayFriends extends Component {


  render(){
    return(
      <div>

        <div className="profile-container">
        <h4>Name: {this.props.datum.name}</h4>
        <h4>Email: {this.props.datum.email}</h4>
        <a href="">View Profile</a>
        <button>Add Friend</button>
        </div>

      </div>

    )
  }
}
