import React, {Component} from 'react'
import ActivityDetails from './ActivityDetails'

export default class Activities extends Component {


  render(){
    return(
      <div>
      {/*we need to bring up the specific activities of the ppl the user is following. */}
        <ActivityDetails />
        <ActivityDetails />
        <ActivityDetails />
        <ActivityDetails />
        <ActivityDetails />
      </div>
    )
  }
}
