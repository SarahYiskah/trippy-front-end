import React, {Component} from 'react'
import Filter from '../components/Filter'
import CategoryItem from '../components/CategoryItem'


export default class Plan extends Component {


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
