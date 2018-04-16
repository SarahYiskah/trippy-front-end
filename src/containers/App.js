import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import Logout from '../components/Logout';
import Plan from './Plan'
import Itinerary from './Itinerary'
import Activity from './Activity'
import Activities from '../components/Activities'
import Profile from '../components/Profile'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      auth: null
    }
  }


  componentDidMount(){
    if (localStorage.user) {
      this.setState({
        auth: JSON.parse(localStorage.user)
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
            <NavBar/>
            <Switch>
              <Route exact path="/signup" render={(renderProps) => <SignUp registeredCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/login" render={(renderProps) => <LogIn loggedInCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/profile" render={(renderProps) => <Profile auth={ this.state.auth }/>} />
              <Route exact path="/plan" render={(renderProps) => {
                return <Plan history={renderProps.history}/>  }} />
              <Route exact path="/itinerary" component={Itinerary} />
              <Route exact path="/activity" component={Activity} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/logout" render={ (renderProps) => {
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
