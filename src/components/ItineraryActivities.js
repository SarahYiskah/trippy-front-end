import React, {Component} from 'react'
import Itinerary from '../containers/Itinerary'

export default class ActivityDetails extends Component {

  handleClick = () => {
    console.log("you will be deleted shortly")
  }

  render(){
    return(
      <div>
        <div className="activity-box">
          <div className="content">
            <div className="title"><a href={this.props.url} target="_blank">{this.props.name}</a></div>
            <div className="meta">
              {this.props.formattedAddress}
            </div>
            <div className="description">
              {this.props.details.tip ? <p>{this.props.details.tip}</p> : null}
            </div>
          </div>
          <button onClick={this.handleClick} className="remove-from-trip" id={JSON.stringify(this.props.details)}>
            <i className="remove icon"></i>
            Remove from trip
          </button>
        </div>
      </div>
    )
  }
}
