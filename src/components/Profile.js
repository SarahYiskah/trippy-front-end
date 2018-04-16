import React, { Component}  from 'react';
// import gat from '../modules/gat';

class Profile extends Component {

  state = {
    user: {},
    followers: [],
    following: []
  }


  tryToGetProfile = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        user: {error: true}
      }) : this.setState({
        user: json
      })})
    }
  }

  tryToGetFollowers = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }/followers`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        followers: []
      }) : this.setState({
        followers: json
      })})
    }
  }

  tryToGetFollowing = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }/following`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        following: []
      }) : this.setState({
        following: json
      })})
    }
  }

  componentDidMount = () => {
    this.tryToGetProfile(this.props)
    this.tryToGetFollowers(this.props)
    this.tryToGetFollowing(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetProfile(nextProps)
    this.tryToGetFollowers(nextProps)
    this.tryToGetFollowing(nextProps)
  }

  render(){
    return(
      <div>
      {this.state.user.error ? <h2>You do not have access to this profile</h2> :
      <div>
      <h2>{this.state.user.name}</h2>
      <h3>{this.state.user.email}</h3>
      {this.state.following.length > 0 ? <div>
      <h4>Following</h4>
      {this.state.following.map(friend => <p key={friend.id}>{friend.name}</p>)}
      </div> : <h4>You are not following anyone</h4>}
      {this.state.followers.length > 0 ? <div>
      <h4>Followers</h4>
      {this.state.followers.map(friend => <p key={friend.id}>{friend.name}</p>)}
      </div> : <h4>You have no followers</h4>}
      </div>
    }</div>
    )
  }
}

export default Profile
