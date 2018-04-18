import React from 'react'
// import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input} from 'reactstrap';
import DisplayFriends from './DisplayFriends'


class NavBar extends React.Component {

  constructor(){
    super()

    this.state = {
      userList: [],
      filter: ''
    }
  }

  resetFilter = () => {
    this.setState({filter: ''})
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        userList: json
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderUsers = () => {
    const filt = this.state.userList.filter(user => user.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return filt.map(user => {
      return <DisplayFriends addFriendId={this.props.addFriendId} datum={user} auth={this.props.auth} key={user.id} friendFetch={this.props.setFriendState} resetFilter={this.resetFilter}/>
    })
  }

  render(){
  return(
    <div>
      {localStorage.user !== '' ?
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/feed">trippy</NavbarBrand>
        <Input type="text" name="text" placeholder="find your friends..." className="search-bar" onChange={this.handleChange}/>
        <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/plan">Plan Trips</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/itinerary">My Itineraries</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.props.auth !== null ? this.capitalizeFirstLetter(this.props.auth.user_name) : null}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/profile">Profile</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/logout">Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
      {this.state.filter === '' ? null : this.renderUsers()}
    </div>
      :
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">trippy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Log In</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      }
    </div>
  )

  }
}

export default NavBar
