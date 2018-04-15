import React, {Component} from 'react'

export default class ActivityDetails extends Component {

  render(){
    return(
      <div>
        <div class="item">
          {/*<img class="ui avatar image" src={require("/images/avatar/small/daniel.jpg")} />*/}
          <div class="content">
            <a class="header">THIS.PROPS.USER</a>
            <br/>
            <b><a class="header">THIS.PROPS.LOCATIONNAME</a></b>
            <div class="description">THIS.PROPS.REVIEW</div>
            {/*we need add the reviews of each user. and buttons to add this to ur itinerary. */}
          </div>
        </div>
      </div>
    )
  }
}
