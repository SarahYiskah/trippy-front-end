import React, {Component} from 'react'

export default class CategoryItem extends Component {

  handleClick = () => {
    this.props.history.push('/activity')
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div onClick={this.handleClick} className="col" id="one">
            <p className="text">NIGHT</p>
          </div>
          <div onClick={this.handleClick} className="col" id="two">
            <p className="text">EAT</p>
          </div>
        </div>
        <div className="row">
          <div onClick={this.handleClick}  className="col" id="three">
            <p className="text">SLEEP</p>
          </div>
          <div onClick={this.handleClick} className="col" id="four">
            <p className="text">STAY</p>
          </div>
        </div>
        <div className="row">
          <div onClick={this.handleClick} className="col" id="five">
            <p className="text">PARKS</p>
          </div>
          <div onClick={this.handleClick} className="col" id="six">
            <p className="text">MUSEUMS</p>
          </div>
        </div>
      </div>
    )
  }
}
