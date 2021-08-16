import React, { Component } from 'react';
import p1 from '../../assets/Mens Image.png'
import p2 from '../../assets/Womens Image.png'
import p3 from '../../assets/Accessories Image.png'
import styles from '../Home.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div id='about' className={styles.app}>
        <div className="image1"><h2>Women's</h2></div>
        <div className="image2"><h2>Men's</h2></div>
        <div className="image3"><h2>Accessories</h2></div>
      </div>
     );
  }
}
 
export default About;