import React, { Component } from 'react'
import supplies from '../data/supplies'

export default class Store extends Component {
  constructor (props) {
    super(props)

    this.state = {
      category: '',
      items: []
    }
  }

  componentDidMount () {
    let { category } = this.props.match.params
    console.log('category: ' + category)
    supplies.store.map((each) => {
      if (each.category === category) {
        this.setState({
          category: category,
          items: each.data
        })
      }
    })
  }

  render () {
    return (
      <div className='store-page'>
        <h2 className='store-page-title'>{this.state.category} Items</h2>
        <div className='items-container'>
          {this.state.items.map((item) =>
            <div className='item-box' key={item.id}>
              <img className='item-image' src={require(`../images/${item.id}.png`)} />
              <div className='item-info'>
                <h3 className='item-name'>{item.name}</h3>
                <p className='item-description'>{item.description}</p>
                <p className='item-price'>${item.price}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
