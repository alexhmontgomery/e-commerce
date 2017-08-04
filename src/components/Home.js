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
          <div className='home-shopping-link'>
            <Link to='/shop/apparel'><h3>Apparel</h3></Link>
          </div>
          <div className='home-shopping-link'>
            <Link to='/shop/accessories'><h3>Accessories</h3></Link>
          </div>
          <div className='home-shopping-link'>
            <Link to='/shop/music'><h3>Music</h3></Link>
          </div>
        </div>
      </div>
    )
  }
}
