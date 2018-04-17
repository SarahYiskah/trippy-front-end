import React, {Component} from 'react'
import ItineraryDetails from '../components/ItineraryDetails'
import { Button } from 'reactstrap';

export default class Itinerary extends Component {
  state = {
    itineraries: [],
    errors: [],
    name: '',
    clicked: false
  }

  tryToGetItineraries = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }/itineraries`, {
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
        itineraries: json
      })})
    }
  }


  componentDidMount = () => {
    this.tryToGetItineraries(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetItineraries(nextProps)
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  createNewItinerary = (name) => {
    fetch(`http://localhost:3000/api/v1/users/${ this.props.auth.user_id }/itineraries`, {
      method: "POST",
      body: JSON.stringify({name}),
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      }
    })
    .then((res) => res.json())
    .then((json) => {
    json.error ? this.setState({
      errors: [json]
    }) : this.setState({
      itineraries: json
    })})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.children[1].value.length > 0 ? this.createNewItinerary(e.target.children[1].value) : null
    this.setState({
      name: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return(
      <div className='itinerary-container'>
        {/* <Jumbotron fluid className='bg-image-hero'>
        </Jumbotron> */}

        <h2>Upcoming Trips</h2>
        <br />
        <div className="ui grid">
          <div className="ui list">
          {this.state.itineraries.map(trip => <ItineraryDetails clickHandle={this.props.clickHandle} key={trip.id} trip={trip} auth={this.props.auth} changeItineraryId={this.props.changeItineraryId}/>)}
          </div>
        </div>
        <Button color="info" onClick={this.handleClick} className="add-to-trip"><i className="add icon"></i>
        New Trip</Button>{' '}
        {this.state.clicked ? <form onSubmit={this.handleSubmit}><label htmlFor="title">Title</label><input onChange={this.handleChange} type="text" id="title" value={this.state.name}/><input type="submit"/></form> : null}


      </div>
    )
  }
}
