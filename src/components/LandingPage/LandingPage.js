import React, { Component } from 'react';
import Router from './LandingPage.Router';
import Header from './pages/Header';
import Footer from './pages/Footer/Footer';

import styles from './LandingPage.css'
import FreeShipping from './pages/freeShipping';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <FreeShipping />
        <Header />
        <div className="router">
          <Router />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default LandingPage;
