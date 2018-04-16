import React, {Component} from 'react'

export default class ActivityDetails extends Component {

  render(){
    return(
      <div>
        <div className="activity-box">
          <div className="content">
            <div className="title">{this.props.details.venue.name}</div>
            <div className="meta">
              {this.props.details.venue.location.formattedAddress}
            </div>
            <div className="description">
              {this.props.details.tips ? `${this.props.details.tips[0].text} -  ${this.props.details.tips[0].user.firstName}` : null}
            </div>
          </div>
          <div className="ui bottom attached button">
            <i className="add icon"></i>
            Add to trips
          </div>
        </div>
      </div>
    )
  }
}
