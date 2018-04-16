import React, {Component} from 'react'
import ActivityDetails from '../components/ActivityDetails'
<<<<<<< HEAD

=======
>>>>>>> 79faac848c87d5936fc722c8ff485f7792be1778

export default class Activity extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: this.props.query,
      location: this.props.location,
      venueData: []
    }
  }


  componentDidMount = () => {
    fetch(`https://api.foursquare.com/v2/venues/explore?ll=${Math.round(this.state.location.lat * 100) / 100},${Math.round(this.state.location.lng * 100) / 100}&section=${this.state.query}/&oauth_token=XNMAXWSXRQOYGPCLXZQF4Y0RQ3DZYU4EGPKML2Y0IM2S2PDA&v=20180416`)
    .then(res => res.json())
    .then(json => {
       this.setState({
         venueData: json.response.groups[0].items
       })
       // console.log(json)
    })
  }

  // componentDidUpdate = () => {
  //   console.log(this.state.location.lat)
  //   fetch({
  //     url: 'https://api.foursquare.com/v2/venues/explore',
  //     method: 'GET',
  //     qs: {
  //       client_id: 'VGKMGVOMTMMFDX4DYPKX0CS3EDH0MN0OOCVJ0OXFMWSNKWPT',
  //       client_secret: 'BVXFPQHK243DMOGCJ4RJWZ3VFO2DQPQU1ZBNIQYAXUT52CJX',
  //       ll: `${this.state.location.lat},${this.state.location.lng}`,
  //       section: `${this.state.query}`
  //     }
  //   }, function(err, res, body) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log(body);
  //     }
  //   })
  // }


  renderActivityDetails = () => {
    return this.state.venueData.map(venue => <ActivityDetails details={venue} key={venue.id}/>)
  }

  render(){
    console.log(this.state.location)
    return(
      <div className='activity-container'>
      {this.renderActivityDetails()}
      </div>
    )
  }
}
