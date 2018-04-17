import React, {Component} from 'react'

export default class ItineraryPage extends Component {


  render(){
    return(
      <div>
        <h2>{this.props.itinerary.name}</h2>
        {this.props.activities.map(activity => <h3 key={activity.id}>{activity.name}</h3>)}
      </div>
    )
  }
}
