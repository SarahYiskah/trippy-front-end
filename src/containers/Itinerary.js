import React, {Component} from 'react'
import ItineraryItem from '../components/ItineraryItem'

export default class Plan extends Component {


  render(){
    return(
      <div>
        <h1>Upcoming Trip...</h1>
        <br />
        <div className="ui grid">
          <div class="ui list">
            <ItineraryItem />
          </div>
        </div>
      </div>
    )
  }
}
