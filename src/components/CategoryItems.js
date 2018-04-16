import React, {Component} from 'react'

export default class CategoryItem extends Component {


  handleClick = (e) => {
    this.props.updateQuery(e.target.parentNode.id)
    this.props.history.push('/activity')
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div onClick={this.handleClick} className="col" id="trending" name="trending">
            <p className="text">TRENDING</p>
          </div>
          <div onClick={this.handleClick} className="col" id="food" name="food">
            <p className="text">EAT</p>
          </div>
        </div>
        <div className="row">
          <div onClick={this.handleClick}  className="col" id="outdoors" name="outdoors">
            <p className="text">OUTDOORS</p>
          </div>
          <div onClick={this.handleClick} className="col" id="sights" name="sights">
            <p className="text">SIGHTS</p>
          </div>
        </div>
        <div className="row">
          <div onClick={this.handleClick} className="col" id="drinks" name="drinks">
            <p className="text">NIGHT</p>
          </div>
          <div onClick={this.handleClick} className="col" id="shops" name="shops">
            <p className="text">SHOPS</p>
          </div>
        </div>
      </div>
    )
  }
}
