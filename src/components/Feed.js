import React, {Component} from 'react'

export default class Feed extends Component {

  fetch('http://localhost:3000/api/v1/reviews') {
    .then(res => res.json)
    .then(console.log)
  }
}
