import React, { Component}  from 'react';
import User from '../containers/User';
import Itinerary from '../containers/Itinerary'

class Profile extends Component {

  state = {
    user: {},
    followers: [],
    following: [],
    errors: []
  }


  tryToGetProfile = (link, propsToLookAt, setStateTo) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }${link}`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        errors: [json]
      }) : this.setState({
        [setStateTo]: json
      })})
    } else {
      propsToLookAt.history.push('/login')
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetProfile('', nextProps, 'user')
    this.tryToGetProfile('/followers', nextProps, 'followers')
    this.tryToGetProfile('/following', nextProps, 'following')
  }

  render(){
    return(
      <div>
      {this.state.user.error ? <h2>You do not have access to this profile</h2> :
      <div>
        <div className="profile-container">
        <h2>Account Settings</h2>
        <h4>You are logged in as: {this.state.user.name}</h4>
        <h4>Email: {this.state.user.email}</h4>
        </div>

      <div className="profile-container">
      <Itinerary auth={this.props.auth}/>
      </div>

      <div className="profile-container">
      {this.state.following.length > 0 ?
      <User users={this.state.following} title="Following"/> : <h4>You are not following anyone</h4>}
      <br/><br/><br/><br/>
      </div>

      <div className="profile-container">
      {this.state.followers.length > 0 ?
      <User users={this.state.followers} title="Followers"/> : <h4>You have no followers</h4>}
      </div>
    </div>
    }
    </div>
    )
  }
}

export default Profile
