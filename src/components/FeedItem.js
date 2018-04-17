import React, {Component} from 'react'

export default class FeedItem extends Component {

  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <p>{this.props.datum.content}</p>
      </div>
    )
  }

}
