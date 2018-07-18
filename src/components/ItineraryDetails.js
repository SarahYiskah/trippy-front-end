import React, {Component} from 'react'
import { Alert } from 'reactstrap'
import { List } from 'semantic-ui-react'
import url from '../modules/link.js'


export default class ItineraryDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      trip: props.trip,
      activities: [],
      errors: [],
      visible: false
    }
  }

  tryToGetActivities = (link, propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`${url}api/v1/users/${ propsToLookAt.auth.user_id }${link}`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        errors: [json]
      }) : this.setState({
        activities: json
      })})
    }
  }


  componentDidMount = () => {
    this.tryToGetActivities(`/itineraries/${this.state.trip.id}`, this.props)
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetActivities(`/itineraries/${this.state.trip.id}`, nextProps, 'activities')
  }

  handleClick = (name) => {
    this.props.changeItineraryId(this.state.trip.id)
    setTimeout(() => this.props.clickHandle(this.state.activities, this.props.history, name), 1000)
  }

  render(){
    return(
      <div onClick={()=>this.handleClick(this.state.trip.name)}>
      {/* <p></p> */}

      <List.Item>
        <List.Content>
          <List.Icon name='marker' />
          <List.Header as='a'><strong>{this.state.trip.name}</strong></List.Header>
        </List.Content>
      </List.Item>

      <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
        This activity has been added to your itinerary
      </Alert>
      </div>
    )
  }
}
