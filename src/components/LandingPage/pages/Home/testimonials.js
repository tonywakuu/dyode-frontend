import React, { Component } from 'react';
import p1 from '../../assets/Hero Image 2 1.png'

import styles from '../Home.css'

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className={styles.app}>
        <div id='testimonials'>
          <div className='container'>
            <h1>Our Favorite Tees</h1>
            <p>Everyday Tees You Need</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Testimonials;