import { Navbar, Nav } from 'react-bootstrap';
import styles from '../LandingPage.css'

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/mens">MEN'S</Nav.Link>
                <Nav.Link href="/womens">WOMEN'S</Nav.Link>
                <Nav.Link href="/accessories">ACCESSORIES</Nav.Link>
                <Nav.Link href="/sale">SALE!</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;
