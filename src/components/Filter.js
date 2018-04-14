import React, {Component} from 'react'

export default class Plan extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="">
        <div className="ui icon input">
          <input type="text" placeholder="Search..." />
          <i className="search icon"></i>
        </div>
      </div>
    )
  }
}
