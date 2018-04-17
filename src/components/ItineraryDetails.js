import React, {Component} from 'react'

export default class ItineraryDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      trip: props.trip,
      activities: [],
      errors: []
    }
  }

  tryToGetActivities = (link, propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }${link}`, {
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
      <h4>{this.state.trip.name}</h4>
      </div>
    )
  }
}
