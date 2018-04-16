import React, {Component} from 'react'
import ListOfItineraries from '../containers/ListOfItineraries'

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
            <div className="title">{this.props.details.venue.name}</div>
            <div className="meta">
              {this.props.details.venue.location.formattedAddress}
            </div>
            {/* <div className="description">
              {this.props.details.tips[0].text} - {this.props.details.tips[0].user.firstName}
            </div> */}
          </div>
          <div onClick={this.handleClick} className="ui bottom attached button" id={JSON.stringify(this.props.details.venue)}>
            <i className="add icon"></i>
            Add to trips
          </div>
          {this.state.clicked ? <ListOfItineraries /> : null}
        </div>
      </div>
    )
  }
}
