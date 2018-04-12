import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import Plan from '../components/Plan'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar loggedIn={this.state.loggedIn}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/plan" component={Plan} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
