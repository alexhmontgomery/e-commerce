import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div className='about-page'>
        <h2 className='page-title'>About</h2>
        <div className='about-info'>
          <p>The John Mayer Store is dedicated to bringing you the latest and greatest gear for showing off your Mayer fandom. Now, here are some sweet Mayer facts and a cool picture:</p>
        </div>
        <div className='about-and-pic'>
          <div className='about-image-container'>
            <img src={require('../mayer4.jpg')} alt='john mayer rocking' />
          </div>
          <div className='facts-list'>
            <h3>Did you know this about John Mayer?</h3>
            <ul>
              <li>As a middle school student in Connecticut, Mayer became close friends with future tennis star James Blake, and they often played Nintendo together after school</li>
              <li>John wrote the Grammy award winning song “Daughters” in the shower.</li>
              <li>Michael J. Fox’s guitar performance as Marty McFly in the movie Back to the Future (1985) inspired him to play guitar. He started playing guitar at the age of 13.</li>
              <li>His favorite song of his own is “3×5” from the album “Room for Squares”.</li>
              <li>A few of John’s favorite bands/singers are: Stevie Ray Vaughn, B.B. King, The Police, Ben Folds Five, Jimi Hendrix, and Coldplay.</li>
              <li>In a 2009 New York Times feature, Mayer revealed his love for watches, and as an avid collector, his full stock is said to be worth in the ballpark of $20 million.</li>
              <li>Regarding his watches, John once splurged on a Patek Philippe with a Sky Moon Tourbillon, which is so rare it doesn't have an actual retail value, though a few are listed on Google for over $1.5 million</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
