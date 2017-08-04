import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='nav-bar'>
          <NavLink exact to='/' className='nav-site'>John Mayer Store</NavLink>
          <div className='dropdown'>
            <span><strong>GO SHOPPING &darr; </strong></span>
            <div className='dropdown-content'>
              <NavLink to='/shop/apparel'>Apparel</NavLink>
              <NavLink to='/shop/accessories'>Accessories</NavLink>
              <NavLink to='/shop/music'>Music</NavLink>
            </div>
          </div>
          <ul className='navbar-link-group'>
            <li className='navbar-item'>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to='/??????'>Cart</NavLink>
            </li>
          </ul>
        </nav>

        {this.props.children}

        <footer>
          <span className='footer-text'>&copy; 2017 | AlexHMonty Designs</span>
        </footer>
      </div>
    )
  }
}
