import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sl1 from '../../assets/Hero Slider 1.png'
import sl2 from '../../assets/Hero Slider 2.png'
import sl3 from '../../assets/Hero Slider 3.png'
import styles from '../Home.css';

class Homes extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className={styles.carousel}>
        <Carousel showArrows={false} showThumbs={false}>
          <div>
              <img src={sl1} alt="" />
          </div>
          <div>
              <img src={sl2} alt=""/>
          </div>
          <div>
              <img src={sl3} alt=""/>
          </div>
        </Carousel>
      </div>
     );
  }
}
 
export default Homes;