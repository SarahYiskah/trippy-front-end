import React, {Component} from 'react'

export default class Plan extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="flexcontainer">
        {/* <div className="ui centered grid"> */}
          <div className="flex-box">Stay</div>
          <div className="flex-box">Museums</div>
          <div className="flex-box">Night Out</div>
          <div className="flex-box">Parks</div>
          <div className="flex-box">Eat</div>
          <div className="flex-box">Indoor</div>
        {/* </div> */}
      </div>
    )
  }
}
