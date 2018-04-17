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
        <h4>{this.state.user.name}</h4>
        <p>{this.state.user.email}</p>
      </div>
    )
  }
}
