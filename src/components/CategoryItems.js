import React, {Component} from 'react'
import { Alert } from 'reactstrap'

export default class CategoryItem extends Component {


  constructor(){
    super()

    this.state = {
      visible: false
    }
  }

  handleClick = (e) => {
    if (this.props.currentLocation !== '') {
      this.props.updateQuery(e.target.parentNode.id)
      this.props.history.push('/activity')
    } else {
      this.setState({
        visible: true
      })
    }
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }


  render(){
    return(
      <div className="container">
        <Alert color="default" isOpen={this.state.visible} toggle={this.onDismiss}>
          Please enter a location.
        </Alert>
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
