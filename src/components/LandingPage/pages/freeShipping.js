import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from '../LandingPage.css'

import React, { Component } from 'react';

class FreeShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <div className="fs">
          <h2> FREE SHIPPING ON ALL ORDERS OVER $75 </h2>
        </div>
      </div>
    );
  }
}

export default FreeShipping;
