import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div className='homepage'>
        <div className='home-header'>
          <h2>The John Mayer Store</h2>
          <h5>Get all of your favorite Mayer gear</h5>
        </div>
        <div className='home-banner'>
          <Link to='/shop/apparel' className='home-shopping-link'>
            <span><h3>Apparel</h3></span>
          </Link>
          <Link to='/shop/accessories' className='home-shopping-link'>
            <span><h3>Accessories</h3></span>
          </Link>
          <Link to='/shop/music' className='home-shopping-link'>
            <span><h3>Music</h3></span>
          </Link>
        </div>
      </div>
    )
  }
}
