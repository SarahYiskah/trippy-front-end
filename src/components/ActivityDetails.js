import React, {Component} from 'react'
import Itinerary from '../containers/Itinerary'

export default class ActivityDetails extends Component {

  state = {
    clicked: false,
    Activity: {}
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked,
      activity: JSON.parse(e.target.id)
    })
  }

  clickHandle = () => {
    fetch(`http://localhost:3000/api/v1/users/${ this.props.auth.user_id }/itineraries/${ this.props.clickedItineraryId }/activities`, {
      method: "POST",
      body: JSON.stringify({tip: this.state.activity.tips,
        formatted_address: `${this.state.activity.venue.location.formattedAddress[0]}` + "\n" + `${this.state.activity.venue.location.formattedAddress[1]}`,
        lattitude: this.state.activity.venue.location.lat,
        longitude: this.state.activity.venue.location.lng,
        name: this.state.activity.venue.name,
        url: this.state.activity.venue.url
      }),
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": `Token token=${this.props.auth.token}`
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render(){
    return(
      <div>
        <div className="activity-box">
          <div className="content">
            <div className="title"><a href={this.props.details.venue.url} target="_blank">{this.props.details.venue.name}</a></div>
            <div className="meta">
              {this.props.details.venue.location.formattedAddress}
            </div>
            <div className="description">
              {this.props.details.tips ? `${this.props.details.tips[0].text} -  ${this.props.details.tips[0].user.firstName}` : null}
            </div>
          </div>
          <button onClick={this.handleClick} className="add-to-trip" id={JSON.stringify(this.props.details)}>
            <i className="add icon"></i>
            Add to trips
          </button>
        </div>
        {this.state.clicked ? <Itinerary auth={this.props.auth} clickHandle={this.clickHandle} changeItineraryId={this.props.changeItineraryId}/> : null}
      </div>
    )
  }
}
