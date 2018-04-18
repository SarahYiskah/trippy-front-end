import React, {Component} from 'react'
import ItineraryActivities from '../components/ItineraryActivities'

import {Card} from 'semantic-ui-react'

export default class ItineraryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      activities: props.activities
    }
  }

  componentDidMount = () => {
    this.props.name === "" ? this.props.history.push('/itinerary') : null
  }

  changeActivities = (activities) => {
    this.setState({activities})
  }

  render(){
    return(
      <div>
        <br></br>
        <h2>{this.props.name}</h2>
        <Card.Group style={{'justify-content': 'center'}}>
        {/* <Grid columns='equal' rows='equal'> */}
        {this.state.activities.map(activity => <ItineraryActivities showButtons={this.props.showButtons} details={activity} name={activity.name} url={activity.url} formattedAddress={activity.formatted_address} key={activity.id} auth={this.props.auth} clickedItineraryId={this.props.clickedItineraryId} changeActivities={this.changeActivities}/>)}
        {/* </Grid> */}
        </Card.Group>
      </div>
    )
  }
}
