import React, {Component} from 'react'

export default class Filter extends Component {

  constructor(){
    super()
    this.state = {
      query: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    }, () => this.props.handleChange(this.state.query))
  }

  render(){
    return(
      <div className="">
        <div className="ui icon input">
          <input onChange={this.handleChange} type="text" placeholder={`Find a ` + this.props.searchby} value={this.state.query}/>
          <i className="search icon"></i>
        </div>
      </div>
    )
  }
}
