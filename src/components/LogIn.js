import React, {Component} from 'react'
import url from '../modules/link.js'


export default class SignUp extends Component {

  state = {
    email: '',
    password: '',
    errors: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${url}api/v1/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.errors) {
          this.setState({
            errors: json.errors
          })
        } else if (json.error) {
          this.setState({
            errors: [json.error]
          })
        } else {
          this.setState({ errors: [] })
          this.props.loggedInCallback(json)
          this.props.history.push("/plan");
        }
      })
    }

  render(){
    return(
      <div className="ui middle aligned four column centered grid">
        <form onSubmit={this.handleSubmit} className="ui form centered" id="signlog">
        <ul>{this.state.errors.map((error) => <p style={{"color":"red"}}>{error}</p>)}</ul>
          <div className="field">
            <label>Email</label>
            <input onChange={this.handleChange} type="text" name="email" placeholder="Email" value={this.state.email}/>
          </div>
          <div className="field">
            <label>Password</label>
            <input onChange={this.handleChange} type="password" name="password" placeholder="Password" value={this.state.password}/>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
