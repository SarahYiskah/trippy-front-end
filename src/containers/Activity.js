import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'
<<<<<<< HEAD

=======
>>>>>>> 79faac848c87d5936fc722c8ff485f7792be1778

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
    console.log(this.state.query, this.state.location)
    fetch(`https://api.foursquare.com/v2/venues/explore?ll=${Math.round(this.state.location.lat * 100) / 100},${Math.round(this.state.location.lng * 100) / 100}&query=${this.state.query}/&oauth_token=XNMAXWSXRQOYGPCLXZQF4Y0RQ3DZYU4EGPKML2Y0IM2S2PDA&v=20180416`)
    .then(res => res.json())
    .then(json => {
       this.setState({
         venueData: json.response.groups[0].items
       })
    })
  }

  renderActivityDetails = () => {
    return this.state.venueData.map(venue => <ActivityDetails details={venue} key={venue.id}/>)
  }

  render(){
    return(
      <div className='activity-container'>
      {this.renderActivityDetails()}
      </div>
    )
  }
}
