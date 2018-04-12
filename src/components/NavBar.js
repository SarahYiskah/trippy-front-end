import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';

const NavBar = (props) => {



  return(
    <div>
      {props.loggedIn ? null :
      <div className="ui menu">
        <div className="right menu">
          <Link className="item" to={ "/signup" }>Sign Up</Link>
          <Link className="item" to={ "/login" }>Log In</Link>
        </div>
      </div>}
    </div>
  )
}

export default NavBar
