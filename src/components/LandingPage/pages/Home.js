import React, { Component } from 'react';
import * as cookies from 'js-cookie';
import SmoothScroll from 'smooth-scroll'

import Homes from './Home/homes'
import Features from './Home/features'
import About from './Home/about'
import Services from './Home/services'
import Testimonials from './Home/testimonials'
import Contact from './Home/contact'

import { CookieBanner } from '../../lib';
import jsonData from './Home/data/data.json'
import styles from '../LandingPage.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: jsonData
        };
    }

    componentDidMount() {
    }


    render() {
        const {
            data
        } = this.state
        return (
            <div className={styles.app}>
                <Homes data={data.Header} />
                <About data={data.About} />
                <Services data={data.Services} />
                <Testimonials data={data.Testimonials} />
                <Features data={data.Features} />
                <Contact data={data.Contact} />
                <CookieBanner />
            </div>
        );
    }
}
  
export default Home
