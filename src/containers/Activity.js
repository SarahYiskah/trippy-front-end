import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'
import Plan from './Plan'

export default class Activity extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: 'food',
      location: this.props.location,
      venueData: []
    }
  }


  componentDidMount = () => {
    fetch(`https://api.foursquare.com/v2/venues/explore?near=${this.state.location}/&section=${this.state.query}/&oauth_token=XNMAXWSXRQOYGPCLXZQF4Y0RQ3DZYU4EGPKML2Y0IM2S2PDA&v=20180416`)
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
