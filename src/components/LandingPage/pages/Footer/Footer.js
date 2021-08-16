import React from 'react';
import {
    Link,
  } from 'react-router-dom';

  import styles from './Footer.css'

export default function Footer() {
    return (
        <div className={styles.app}>
            <div className="footer">
                <div className="footer-group">
                    <h2> Customer Service </h2>
                    <Link to="/">Accessability</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Return Policy</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">Gift Certificates</Link>
                    <Link to="/">Wishlist</Link>
                </div>
                <div className="footer-group">
                    <h2> Company </h2>
                    <Link to="/">About Us</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Press</Link>
                    <Link to="/">Affiliates</Link>
                </div>
                <div className="footer-right">
                    <h2> Follow Us </h2>
                    <div className='social'>
                        <i className='fab fa-facebookF'>FB</i>
                        <i className='fa fa-instagram'>IG</i>
                        <i className='fa fa-twitter'>TW</i>
                    </div>
                </div>
            </div>
        </div>
    )
}