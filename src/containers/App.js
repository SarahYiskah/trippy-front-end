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
      itineraries: []
    }
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

  clickHandle = (activities) => {
    return (this.state.itineraries.map(itinerary => <ItineraryPage key={itinerary.id} itinerary={itinerary} activities={activities} />))
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

<<<<<<< HEAD
  componentDidUpdate = () => {
    fetch('http://localhost:3000/api/v1/reviews', {
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.state.auth.token}`
      }
    })
      .then(res => res.json())
      .then(console.log)
  }
=======
>>>>>>> eb4f093484f04aac7fcfddf8975e6832c7f3778a

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar auth={ this.state.auth } setFriendState={this.friendFetch}/>
            <Switch>
              <Route exact path="/signup" render={(renderProps) => <SignUp registeredCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/login" render={(renderProps) => <LogIn loggedInCallback={ this.gotAuthToken } history={ renderProps.history }/>} />
              <Route exact path="/profile" render={(renderProps) => <Profile auth={ this.state.auth } history={ renderProps.history } friendFetch={this.state.friendFetch}/>} />

              <Route exact path="/feed" render={(renderProps) => <Feed auth={ this.state.auth } />} />

              <Route exact path="/plan" render={(renderProps) => {
                return <Plan history={renderProps.history} setLocation={this.setLocation} setQuery={this.setQuery} currentLocation={this.state.location}/>  }} />
              <Route exact path="/itinerary" render={(renderProps) => {
                return <Itinerary auth={ this.state.auth } changeItineraryId={this.changeItineraryId} clickHandle={this.clickHandle} history={ renderProps.history } setItineraries={this.setItineraries}/> }} />
              <Route exact path="/activity" render={(renderProps) => {
                return <Activity history={renderProps.history} location={this.state.location} query={this.state.query} auth={this.state.auth} clickedItineraryId={this.state.clickedItineraryId} changeItineraryId={this.changeItineraryId}/>
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
