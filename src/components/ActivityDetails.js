import React, {Component} from 'react'

export default class ActivityDetails extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <div class="item">
          <img class="ui avatar image" src="/images/avatar/small/daniel.jpg" />
          <div class="content">
            <a class="header">THIS.PROPS.USER</a>
            <br/>
            <b><a class="header">THIS.PROPS.LOCATIONNAME</a></b>
            <div class="description">THIS.PROPS.REVIEW</div>
          </div>
        </div>
      </div>
    )
  }
}
