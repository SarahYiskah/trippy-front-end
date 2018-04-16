import React, {Component} from 'react'

export default class ActivityDetails extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="item">
          {/*<img class="ui avatar image" src={require("/images/avatar/small/daniel.jpg")} />*/}
          <div className="content">
            <a className="header">{this.props.details.venue.name}</a>
            <br/>
            <b><a className="header">{this.props.details.venue.location.formattedAddress}</a></b>
            <div className="description">{this.props.details.tips[0].text} - {this.props.details.tips[0].user.firstName}</div>
            <p>--------</p>
            {/*we need add the reviews of each user. and buttons to add this to ur itinerary. */}
          </div>
        </div>
      </div>
    )
  }
}
