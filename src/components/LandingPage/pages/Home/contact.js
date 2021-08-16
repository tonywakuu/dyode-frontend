import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import styles from '../Home.css';
import { Button } from '@material-ui/core';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: ''
     }
  }
  render() { 
    const {
      name,
      email,
      message
    } = this.state
    const handleChange = (e) => {
      const { name, value } = e.target
      this.setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => this.setState({ ...this.state })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name, email, message)
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
        )
        .then(
          (result) => {
            console.log(result.text)
            clearState()
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
    return ( 
      <div>
        <div id='contact' className={styles.app}>
          <div className='contact-forms'>
            <h2>Sign Up & Get Connected</h2>
          </div>
          <form name='sentMessage' validate onSubmit={handleSubmit}>
            <div className='forms'>
              <h3 className='form-letter'>
                Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
              </h3>
              <div className='form-group'>
                <input
                  type='text'
                  id='name'
                  name='email'
                  className='form-control'
                  placeholder='Enter Your Email Address'
                  required
                  onChange={handleChange}
                />
                <button className='form-button' type='submit'>SUBSCRIBE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     );
  }
}
 
export default Contact;
