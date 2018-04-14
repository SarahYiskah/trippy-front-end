import React, {Component} from 'react'
import Filter from './Filter'
import CategoryItem from './CategoryItem'

export default class Plan extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="ui centered grid">
        <div className="one column row">
          <div className="center aligned column">
            <Filter />
          </div>
        </div>
        <div>
          <CategoryItem />
        </div>
      </div>
    )
  }
}
