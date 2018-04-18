import React, {Component} from 'react'

export default class FeedItem extends Component {


  render(){
    console.log(this.props.datum)
    return(
      <div>
        <div class="event">
          <div class="content">
            <div class="date">
              {Math.floor(Math.random() * 10) + 1} days ago <i class="star icon" style={{color: 'rgba(73,160,181)'}}></i>
            </div>
            <div class="summary">
               <a style={{color: 'rgba(73,160,181)'}}><strong>{this.props.datum.user.name}</strong></a> reviewed <strong style={{color: 'rgba(73,160,181)'}}>{this.props.datum.activity.name}</strong>
            </div>
            <div class="extra text">
              {this.props.datum.content}
            </div>
          </div>
        </div>
        <br />
      </div>

    )
  }

}
