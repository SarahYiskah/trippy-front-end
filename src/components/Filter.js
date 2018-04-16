import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export default class Filter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      address: ''
    }
  }

  handleChange = (address) => {
    this.setState({
      address
    })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.handleChange(latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div className="filter-container">
            <Input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }

}

// import React, {Component} from 'react'
//
//
// const google = window.google
//
// export default class Filter extends Component {
//
//   constructor(){
//     super()
//
//     this.state = {
//       query: ''
//     }
//   }
//
//   handleChange = (e) => {
//     console.log(e.target)
//     var autocomplete = new google.maps.places.Autocomplete(e.target)
//     console.log(autocomplete)
//     this.setState({
//       query: e.target.value
//     }, () => this.props.handleChange(this.state.query))
//   }
//
//   handleClick = (e) => {
//     this.setState({
//       query: e.target.id
//     }, () => this.props.handleChange(this.state.query))
//   }
//
  // render(){
  //   return(
  //     <div className="">
  //       <div className="ui icon input">
  //         <input onChange={this.handleChange} type="text" placeholder={`Find a ` + this.props.searchby} value={this.state.query} id="filter"/>
  //         <i className="search icon"></i>
  //       </div>
  //
  //       <div className="buttons">
  //         <button className="button" id="denver" onClick={this.handleClick}>Denver</button>
  //         <button className="button" id="la" onClick={this.handleClick}>Los Angeles</button>
  //         <button className="button" id="miami" onClick={this.handleClick}>Miami</button>
  //         <button className="button" id="nyc" onClick={this.handleClick}>New York City</button>
  //         <button className="button" id="chicago" onClick={this.handleClick}>Chicago</button>
  //         <button className="button" id="boston" onClick={this.handleClick}>Boston</button>
  //         <button className="button" id="philly" onClick={this.handleClick}>Philadelphia</button>
  //         <button className="button" id="sf" onClick={this.handleClick}>San Francisco</button>
  //         <button className="button" id="nashville" onClick={this.handleClick}>Nashville</button>
  //         <button className="button" id="autin" onClick={this.handleClick}>Austin</button>
  //         <button className="button" id="detroir" onClick={this.handleClick}>Detroit</button>
  //         <button className="button" id="portland" onClick={this.handleClick}>Portland</button>
  //         <button className="button" id="seattle" onClick={this.handleClick}>Seattle</button>
  //         <button className="button" id="phoenix" onClick={this.handleClick}>Phoenix</button>
  //         <button className="button" id="honalulu" onClick={this.handleClick}>Honalulu</button>
  //       </div>
  //     </div>
  //   )
  // }
// }
