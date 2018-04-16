import React, { Component}  from 'react';
import User from '../containers/User';

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


  componentDidMount = () => {
    this.tryToGetProfile('', this.props, 'user')
    this.tryToGetProfile('/followers', this.props, 'followers')
    this.tryToGetProfile('/following', this.props, 'following')
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
      <h2>{this.state.user.name}</h2>
      <h3>{this.state.user.email}</h3>
      <br/><br/><br/><br/>
      {this.state.following.length > 0 ?
      <User users={this.state.following} title="Following"/> : <h4>You are not following anyone</h4>}
      <br/><br/><br/><br/>
      {this.state.followers.length > 0 ?
      <User users={this.state.followers} title="Followers"/> : <h4>You have no followers</h4>}
      </div>
    }</div>
    )
  }
}

export default Profile
