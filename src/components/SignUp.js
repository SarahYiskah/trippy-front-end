import React, {Component} from 'react'
import url from '../modules/link.js'


export default class SignUp extends Component {

  state = {
    name: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    errors: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${url}api/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.errors) {
          this.setState({
            errors: json.errors
          });
        } else if (json.error) {
          this.setState({
            errors: [json.error]
          })
        } else {
          this.setState({ errors: [] })
          this.props.registeredCallback(json)
          this.props.history.push("/plan");
        }
      })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div className="ui middle aligned four column centered grid">
        <form onSubmit={this.handleSubmit} className="ui form centered" id="signlog">
        <ul>{this.state.errors.map((error) => <li style={{"color":"red"}}>{error}</li>)}</ul>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input onChange={ this.onChange } id="name" type="text" name="name" placeholder="Name" value={this.state.name}/>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input onChange={ this.onChange } id="email" type="text" name="email" placeholder="Email" value={this.state.email}/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input onChange={ this.onChange } id="password" type="password" name="password" placeholder="Password" value={this.state.password}/>
          </div>
          <div className="field">
            <label htmlFor="password-confirmation">Password Confirmation</label>
            <input onChange={ this.onChange } id="password-confirmation" type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={this.state.passwordConfirmation}/>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
