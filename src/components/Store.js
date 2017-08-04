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

  componentWillMount () {
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
      <div>
        {this.state.items.map((item) =>
          <div>
            <h1>{item.name}</h1>
          </div>

        )}
      </div>
    )
  }
}
