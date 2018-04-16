import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'

export default class Activities extends Component {


  componentDidMount = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?near=NYC/&section=food/&oauth_token=XNMAXWSXRQOYGPCLXZQF4Y0RQ3DZYU4EGPKML2Y0IM2S2PDA&v=20180416')
    .then(res => res.json())
    .then(json => console.log(json.response.groups[0].items))
  }

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
