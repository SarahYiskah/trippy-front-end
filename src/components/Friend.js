import React, { Component}  from 'react';

export default class Friend extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itineraries: [],
      activities: [],
      clickedItineraryId: '',
      itineraryName: '',
      errors: []
    }
  }

  handleClick = (e) => {
    this.setState({
      itineraryName: e.target.innerText,
      clickedItineraryId: e.target.id
    }, this.tryToGetActivities)
  }


  tryToGetItineraries = () => {
    if (this.props.auth) {
      fetch(`http://localhost:3000/api/v1/friends/${ this.props.friendId }/itineraries`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${this.props.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        errors: [json]
      }) : this.setState({
        itineraries : json,
      })})
    }
  }


  tryToGetActivities = () => {
    if (this.props.auth) {
      fetch(`http://localhost:3000/api/v1/friends/${ this.props.friendId }/itineraries/${this.state.clickedItineraryId}/activities`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${this.props.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        errors: [json]
      }) : this.setState({
        activities: json
      }, () => this.props.clickHandle(this.state.activities, this.props.history, this.state.itineraryName, false))})
    }
  }


  componentDidMount = () => {
    if(this.props.friendId === ''){
      this.props.history.push('/')
    } else {
      this.tryToGetItineraries()
    }
  }


  render(){
    return(
      <div>
      <h2 style={{'font-family': 'futura'}}>{this.props.friendName}</h2>
      <p>{this.props.friendEmail}</p>
      <div>
      <h2 style={{'font-family': 'futura'}}>Itineraries of {this.props.friendName}</h2>
      {this.state.itineraries.map(trip => {
        return <h4 onClick={this.handleClick} id={trip.id}>{trip.name}</h4>})}
      </div>
    </div>
    )
  }
}
