import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'


export default class Activity extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: this.props.query,
      location: this.props.location,
      venueData: []
    }
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

  renderActivityDetails = () => {
    return this.state.venueData.map(venue => <ActivityDetails details={venue} key={venue.venue.id} auth={this.props.auth} clickedItineraryId={this.props.clickedItineraryId} changeItineraryId={this.props.changeItineraryId}/>)
  }

  render(){
    return(
      <div className='activity-container'>
      {this.renderActivityDetails()}
      </div>
    )
  }
}
