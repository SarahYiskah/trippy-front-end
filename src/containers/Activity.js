import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'


export default class Activity extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: props.query,
      location: props.location,
      clickedActivity: {},
      venueData: []
    }
  }

  clickHandle = () => {
    console.log(this.props)
    fetch(`http://localhost:3000/api/v1/users/${ this.props.auth.user_id }/itineraries/${ this.props.clickedItineraryId }/activities`, {
      method: "POST",
      body: JSON.stringify({tip: this.state.clickedActivity.tips,
        formatted_address: `${this.state.clickedActivity.venue.location.formattedAddress[0]}` + "\n" + `${this.state.clickedActivity.venue.location.formattedAddress[1]}`,
        lattitude: this.state.clickedActivity.venue.location.lat,
        longitude: this.state.clickedActivity.venue.location.lng,
        name: this.state.clickedActivity.venue.name,
        url: this.state.clickedActivity.venue.url
      }),
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log("you just added a new activity", json)
    })
  }


  componentDidMount = () => {
    if (this.state.query === '') {
      this.props.history.push('/plan')
    } else {
      fetch(`https://api.foursquare.com/v2/venues/explore?ll=${Math.round(this.state.location.lat * 100) / 100},${Math.round(this.state.location.lng * 100) / 100}&query=${this.state.query}/&oauth_token=XNMAXWSXRQOYGPCLXZQF4Y0RQ3DZYU4EGPKML2Y0IM2S2PDA&v=20180416`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          venueData: json.response.groups[0].items
        })
      })
    }
  }

  setClickedActivity = (activity) => {
    this.setState({
      clickedActivity: activity
    })
  }

  renderActivityDetails = () => {
    return this.state.venueData.map(venue => <ActivityDetails details={venue} key={venue.venue.id} auth={this.props.auth} clickedItineraryId={this.state.clickedItineraryId} clickHandle={this.clickHandle} changeItineraryId={this.props.changeItineraryId} setClickedActivity={this.setClickedActivity}/>)
  }



  render(){
    return(
      <div className='activity-container'>
      {this.renderActivityDetails()}
      </div>
    )
  }
}
