import React, {Component} from 'react'

export default class ListOfItineraries extends Component {

  state = {
    itineraries: []
  }

  tryToGetItineraries = (link, propsToLookAt, setStateTo) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }${link}`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        errors: [json]
      }) : this.setState({
        [setStateTo]: json
      })})
    }
  }

  componentDidMount = () => {
    this.tryToGetItineraries('/itineraries', this.props, 'itineraries')
  }

  render(){
    return(
      <div>
        <h2>List of itineraries. Maybe you want to make a new one.</h2>
      </div>
    )
  }
}
