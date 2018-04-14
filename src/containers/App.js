import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import Logout from '../components/Logout';

import Plan from './Plan'
import Itinerary from './Itinerary'
import Activity from './Activity'

import './App.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      loggedIn: false,
      auth: null
    }
  }

  logUserIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  componentDidMount(){
    if (localStorage.user) {
      this.setState({
        auth: JSON.parse(localStorage.user)
      }, ()=> {
        console.log(this.state)
      })
    }
  }

  gotAuthToken = (user) => {
    this.setState({
      auth: user
    })
    localStorage.user = JSON.stringify(user)
  }

  logout = (history) => {
    localStorage.user = ""
    this.setState({
      auth: null
    }, () => history.push("/"))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar loggedIn={this.state.loggedIn}/>
            <Switch>
              <Route exact path="/signup" render={(renderProps) => <SignUp logUserIn={this.logUserIn} registeredCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/login" render={(renderProps) => <LogIn logUserIn={this.logUserIn} loggedInCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/plan" component={Plan} />
              <Route exact path="/intinerary" component={Itinerary} />
              <Route exact path="/activity" component={Activity} />
              <Route path="/logout" render={ (renderProps) => {
                return <Logout logout={ this.logout } history={ renderProps.history } />;
              } } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
