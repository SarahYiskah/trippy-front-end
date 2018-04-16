import React, {Component} from 'react'
import Filter from '../components/Filter'
import CategoryItems from '../components/CategoryItems'


export default class Plan extends Component {

  render(){
    return(
      <div className="ui centered grid">
        <div className="one column row">
          <div className="center aligned column">
            <Filter searchby="location" handleChange={this.props.setLocation}/>
          </div>
        </div>
        <div>
          <CategoryItems history={this.props.history} updateQuery={this.props.setQuery} currentLocation={this.props.currentLocation}/>
        </div>
      </div>
    )
  }
}
