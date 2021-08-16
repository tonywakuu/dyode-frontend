import React, { Component } from 'react';
import p1 from '../../assets/Social 1.png'
import p2 from '../../assets/Social 2.png'
import p3 from '../../assets/Social 3.png'
import p4 from '../../assets/Social 4.png'
import p5 from '../../assets/Social 5.png'
import styles from '../Home.css';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className={styles.app}>
        <div id='features'>
          <h1> Follow Us On Instagram! </h1>
          <img src={p1} alt="" />
          <img src={p2} alt="" />
          <img src={p3} alt="" />
          <img src={p4} alt="" />
          <img src={p5} alt="" />
        </div>
      </div>
     );
  }
}
 
export default Features;