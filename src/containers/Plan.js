import React, {Component} from 'react'
import Filter from '../components/Filter'
import CategoryItems from '../components/CategoryItems'


export default class Plan extends Component {

  constructor(){
    super()

    this.state = {
      query: '',
      location: ''
    }

  }

  updateQuery = (searchTerm) => {
    console.log('inside update query')
    console.log(searchTerm)
    this.setState({
      query: searchTerm
    }, () => this.props.setQuery(this.state.query))
  }

  updateLocation = (input) => {
    this.setState({
      location: input
    }, () => this.props.setLocation(this.state.location))
  }


  render(){
    return(
      <div className="ui centered grid">
        <div className="one column row">
          <div className="center aligned column">
            <Filter searchby="location" handleChange={this.updateLocation}/>
          </div>
        </div>
        <div>
          <CategoryItems history={this.props.history} updateQuery={this.updateQuery}/>
        </div>
      </div>
    )
  }
}
