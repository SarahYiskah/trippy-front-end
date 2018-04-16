import React, {Component} from 'react'

export default class UserDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: props.user
    }
  }

  handleClick = () => {
    console.log("You clicked meee")
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <h2>{this.state.user.name}</h2>
        <h4>{this.state.user.email}</h4>
      </div>
    )
  }
}
