import React, {Component} from 'react'
import ItineraryActivities from '../components/ItineraryActivities'

export default class ItineraryPage extends Component {

  componentDidMount = () => {
    this.props.name === "" ? this.props.history.push('/itinerary') : null
  }

  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        {this.props.activities.map(activity => <ItineraryActivities details={activity} name={activity.name} url={activity.url} formattedAddress={activity.formattedAddress} key={activity.id} auth={this.props.auth}/>)}
      </div>
    )
  }
}
