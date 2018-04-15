import React, {Component} from 'react'
import Filter from '../components/Filter'
import CategoryItems from '../components/CategoryItems'


export default class Plan extends Component {

  state = {
    query: '',
    location: '',
    items: []
  }

  updateQuery = (searchTerm) => {
    this.setState({
      query: searchTerm
    })
  }

  render(){
    return(
      <div className="ui centered grid">
        <div className="one column row">
          <div className="center aligned column">
            <Filter searchby="location" query={this.state.query} updateQuery={this.updateQuery}/>
          </div>
        </div>
        <div>
          <CategoryItems location={this.state.location} history={this.props.history}/>
        </div>
      </div>
    )
  }
}
