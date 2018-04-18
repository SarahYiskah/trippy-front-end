import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import Logout from '../components/Logout';
import Feed from '../components/Feed';
import Plan from './Plan'
import Itinerary from './Itinerary'
import Activity from './Activity'
import Profile from '../components/Profile'
import Friend from '../components/Friend'
import ItineraryPage from './ItineraryPage'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      auth: null,
      location: '',
      query: '',
      friendFetch: false,
      clickedItineraryId: '',
      itineraries: [],
      itineraryName: '',
      activities: [],
      friendId: '',
      friendName: '',
      friendEmail: '',
      visible: false,
    }
  }

  addFriendId = (id, name, email) => {
    this.setState({
      friendId: id,
      friendName: name,
      friendEmail: email
    })
  }

  setItineraries = (itineraries) => {
    this.setState({itineraries})
  }


  componentDidMount(){
    if (localStorage.user) {
      this.setState({
        auth: JSON.parse(localStorage.user)
      })
    }
  }

  setLocation = (newLocation) => {
    this.setState({
      location: newLocation
    })
  }

  setQuery = (newQuery) => {
    this.setState({
      query: newQuery
    })
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

  clickHandle = (activities, history, name) => {
    this.setState({
      visible: true,
      itineraryName: name,
      activities: activities
    }, () => history.push('itinerary-page'))
  }


  friendFetch = (name) => {
    this.setState({
      friendFetch: name
    }, () => console.log(this.state.friendFetch))

  }

  changeItineraryId = (id) => {
    this.setState({
      clickedItineraryId: id
    })
  }

  makeAlertVisible = () => {
    this.setState({
      visible: true
    })
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar auth={ this.state.auth } setFriendState={this.friendFetch} addFriendId={this.addFriendId}/>
            <Switch>
              <Route exact path="/friend-page" render={(renderProps) => <Friend auth={this.state.auth} history={ renderProps.history } friendId={this.state.friendId} friendName={this.state.friendName} friendEmail={this.state.friendEmail} clickHandle={this.clickHandle}/>} />
              <Route exact path="/signup" render={(renderProps) => <SignUp registeredCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/login" render={(renderProps) => <LogIn loggedInCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/profile" render={(renderProps) => <Profile auth={ this.state.auth } history={ renderProps.history } changeItineraryId={this.changeItineraryId} clickHandle={this.clickHandle} friendFetch={this.state.friendFetch} setItineraries={this.setItineraries}/>} />
              <Route exact path="/itinerary-page" render={(renderProps) => <ItineraryPage name={this.state.itineraryName} activities={this.state.activities} history={renderProps.history} auth={this.state.auth}/>}/>
              <Route exact path="/feed" render={(renderProps) => <Feed auth={ this.state.auth } />} />

              <Route exact path="/plan" render={(renderProps) => {
                return <Plan history={renderProps.history} setLocation={this.setLocation} setQuery={this.setQuery} currentLocation={this.state.location}/>  }} />
              <Route exact path="/itinerary" render={(renderProps) => {
                return <Itinerary auth={ this.state.auth } changeItineraryId={this.changeItineraryId} clickHandle={this.clickHandle} history={ renderProps.history } setItineraries={this.setItineraries} sendAlert={false} visible={this.state.visible}/> }} />
              <Route exact path="/activity" render={(renderProps) => {
                return <Activity history={renderProps.history} location={this.state.location} query={this.state.query} auth={this.state.auth} clickedItineraryId={this.state.clickedItineraryId} changeItineraryId={this.changeItineraryId} makeAlertVisible={this.makeAlertVisible}/>
              }}/>
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
