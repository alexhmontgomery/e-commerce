import React, { Component } from 'react'

export default class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      location: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange (event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }

  handleLocationChange (event) {
    this.setState({location: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      name: event.target.value,
      email: event.target.value,
      location: event.target.value
    })

    // Once database is built, send userinfo to database here.

    alert('Thank you for signing up for our newsletter. Rock On!')

    this.setState({
      name: '',
      email: '',
      location: ''
    })
  }

  render () {
    return (
      <div className='contact-page'>
        <h2 className='page-title'>Contact Us</h2>
        <div className='contact-info'>
          <p>Questions about the status of your order or return policies: <span className='number'>Call 1-800-MAYER-FANS</span><span className='email'> or email helpdesk@johnmayerstore.com</span></p>
        </div>
        <div className='form-and-pic'>
          <form className='signup-form' onSubmit={this.handleSubmit}>
            <p>Interested in receiving discounts and updates about all of our awesome Mayer merchandise? Sign up for our newsletter to receive weekly updates:</p>
            <input type='text' placeholder='Your Full Name' onChange={this.handleNameChange} value={this.state.name} /><br />
            <input type='email' placeholder='Your Email' onChange={this.handleEmailChange} value={this.state.email} /><br />
            <input type='text' placeholder='Location (City, State)' onChange={this.handleLocationChange} value={this.state.location} /><br />
            <button type='submit'>Sign Up</button>
          </form>
          <div className='image-container'>
            <img src={require('../mayer3.jpg')} alt='john mayer rocking' />
          </div>
        </div>
      </div>
    )
  }
}
