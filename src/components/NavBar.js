import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  return(
    <div>
      {props.loggedIn ?
      <div className="ui menu">
        <Link className="item" id="logo" to={ "/logout" }>trippy.</Link>
        <div className="right menu">
          <Link className="item" to={ "/logout" }>Log Out</Link>
        </div>
      </div> :
      <div className="ui menu">
        <Link className="item" id="logo" to={ "/login" }>trippy.</Link>
        <div className="right menu">
          <Link className="item" to={ "/signup" }>Sign Up</Link>
          <Link className="item" to={ "/login" }>Log In</Link>
        </div>
      </div>}
    </div>
  )
}

export default NavBar
