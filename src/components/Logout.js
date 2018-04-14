import { Component } from 'react';

class Logout extends Component {

  componentDidMount(){
    this.props.logout(this.props.history)
  }

  render(){
    return null;
  }
}

export default Logout
