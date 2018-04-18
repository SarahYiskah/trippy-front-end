import React, {Component} from 'react'
import ItineraryActivities from '../components/ItineraryActivities'

import { Button, Card, Image, Grid } from 'semantic-ui-react'

export default class ItineraryPage extends Component {

  componentDidMount = () => {
    this.props.name === "" ? this.props.history.push('/itinerary') : null
  }

  render(){
    return(
      <div>
        <br></br>
        <h2>{this.props.name}</h2>
        <Card.Group style={{'justify-content': 'center'}}>
        {/* <Grid columns='equal' rows='equal'> */}
        {this.props.activities.map(activity => <ItineraryActivities details={activity} name={activity.name} url={activity.url} formattedAddress={activity.formattedAddress} key={activity.id} auth={this.props.auth}/>)}
        {/* </Grid> */}
        </Card.Group>
      </div>
    )
  }
}
