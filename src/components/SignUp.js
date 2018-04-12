import React, {Component} from 'react'


export default class SignUp extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="ui middle aligned four column centered grid">
        <form className="ui form centered">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="field">
            <label>Password Confirmation</label>
            <input type="password" name="password-confirmation" placeholder="Password Confirmation" />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
