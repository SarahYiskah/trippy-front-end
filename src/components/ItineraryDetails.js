import React, {Component} from 'react'

export default class ItineraryDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      trip: props.trip,
      activities: [],
      clicked: false,
      errors: []
    }
  }

  tryToGetActivities = (link, propsToLookAt, setStateTo) => {
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
        [setStateTo]: json
      })})
    }
  }


  componentDidMount = () => {
    this.tryToGetActivities(`/itineraries/${this.state.trip.id}`, this.props, 'activities')
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetActivities(`/itineraries/${this.state.trip.id}`, nextProps, 'activities')
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>
      <h2>{this.state.trip.name}</h2>
      {this.state.clicked ? this.props.clickHandle(this.state.activities) : null}
      </div>
    )
  }
}
