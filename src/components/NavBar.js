import React from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const NavBar = (props) => {

  return(
    <div>
      {localStorage.user !== '' ?
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">trippy</NavbarBrand>
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
                USERNAME
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/profile">Profile</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/login">Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
      :
      // <div className="ui menu">
      //   <Link className="item" id="logo" to={ "/" }>trippy.</Link>
      //   <div className="right menu">
      //     <Link className="item" to={ "/signup" }>Sign Up</Link>
      //     <Link className="item" to={ "/login" }>Log In</Link>
      //   </div>
      // </div>
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
      }
    </div>
  )
}

export default NavBar
