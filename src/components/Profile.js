import React, { Component}  from 'react';
// import gat from '../modules/gat';

class Profile extends Component {

  state = {
    user: {}
  }


  tryToGetProfile = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3001/users/${ propsToLookAt.auth.user_id }`,
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": propsToLookAt.auth.token
      })
      .then((res) => res.json())
      .then((json) => this.setState({
        user: json
      }, () => console.log("you just set the state to", this.state.user)))
    }
  }

  componentDidMount = () => {
    this.tryToGetProfile(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetProfile(nextProps)
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default Profile
