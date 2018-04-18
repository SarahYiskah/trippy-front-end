import React, { Component}  from 'react';
import User from '../containers/User';
import Itinerary from '../containers/Itinerary'
import { Accordion, Icon } from 'semantic-ui-react'

class Profile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {},
      followers: [],
      following: [],
      errors: [],
      fetch: this.props.friendFetch,
      activeIndex: 0
    }

  }


  tryToGetProfile = (link, propsToLookAt, setStateTo) => {
    if (propsToLookAt.auth) {
      fetch(`http://localhost:3000/api/v1/users/${ propsToLookAt.auth.user_id }${link}`, {
        headers:  {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Token token=${propsToLookAt.auth.token}`
        }
        })
      .then((res) => res.json())
      .then((json) => {
      json.error ? this.setState({
        errors: [json]
      }) : this.setState({
        [setStateTo]: json
      })})
    } else {
      propsToLookAt.history.push('/login')
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.tryToGetProfile('', nextProps, 'user')
    this.tryToGetProfile('/followers', nextProps, 'followers')
    this.tryToGetProfile('/following', nextProps, 'following')
  }

  handleClick = (e, titleProps) => {
   const { index } = titleProps
   const { activeIndex } = this.state
   const newIndex = activeIndex === index ? -1 : index

   this.setState({ activeIndex: newIndex })
 }

  render(){
    const { activeIndex } = this.state
    return(
      <div className="profile-page">
        {this.state.user.error ? <h2>You do not have access to this profile</h2> :
          <Accordion fluid styled>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Account Details
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                <strong>User:</strong> {this.state.user.name}
                <br />
                <strong>Email:</strong> {this.state.user.email}
              </p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='dropdown' />
              My Itineraries
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p style={{size: 'inherit !important'}}>
              <Itinerary auth={ this.props.auth } changeItineraryId={this.props.changeItineraryId} clickHandle={this.props.clickHandle} history={ this.props.history } setItineraries={this.props.setItineraries}/>
              </p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Following
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                {this.state.following.length > 0 ?
                <User users={this.state.following}/> : <p>You are not following anyone</p>}
              </p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Followers
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>
                {this.state.followers.length > 0 ?
                <User users={this.state.followers}/> : <p>You have no followers</p>}
              </p>
            </Accordion.Content>
          </Accordion>
        }
      </div>
    )
  }
}

export default Profile
