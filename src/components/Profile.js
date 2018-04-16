import React, { Component}  from 'react';
// import gat from '../modules/gat';

class Profile extends Component {

  state = {
    user: {}
  }


  tryToGetProfile = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      console.log(propsToLookAt.auth.token)
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }`,
        {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
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
