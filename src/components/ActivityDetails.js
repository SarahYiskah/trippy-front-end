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
          <button onClick={this.handleClick} className="add-to-trip" id={JSON.stringify(this.props.details.venue)}>
            <i className="add icon"></i>
            Add to trips
          </button>
        </div>
        {this.state.clicked ? <Itinerary auth={this.props.auth} /> : null}
      </div>
    )
  }
}
