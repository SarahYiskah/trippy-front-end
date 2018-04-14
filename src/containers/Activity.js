import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'

export default class Activity extends Component {


  render(){
    return(
      <div>
        <h1>Browsing this.props.name...</h1>
        <br />
        <div className="ui grid">
          <div class="ui very relaxed list">
            <ActivityDetails />
          </div>
        </div>
      </div>
    )
  }
}
