import React, {Component} from 'react'
import ItineraryDetails from '../components/ItineraryDetails'

export default class Itinerary extends Component {
  state = {
    itineraries: [],
    errors: [],
    clicked: false
  }

  tryToGetItineraries = (link, propsToLookAt, setStateTo) => {
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
    this.tryToGetItineraries('/itineraries', this.props, 'itineraries')
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetItineraries('/itineraries', nextProps, 'itineraries')
  }

  handleClick = () => {
    console.log("i will make a new trip for u")
    this.setState({clicked: true})
  }

  render(){
    const newTrip = <div><label htmlFor="title">Title</label><input type="text" id="title"/></div>
    return(
      <div>
        <h1>Upcoming Trips</h1>
        <br />
        <div className="ui grid">
          <div className="ui list">
          {this.state.itineraries.map(trip => <ItineraryDetails key={trip.id} trip={trip} auth={this.props.auth}/>)}
          </div>
        </div>
        <button onClick={this.handleClick} className="add-to-trip">
          <i className="add icon"></i>
          New Trip
        </button>
        {this.state.clicked ? <div><label htmlFor="title">Title</label><input type="text" id="title"/></div> : null}
      </div>
    )
  }
}
