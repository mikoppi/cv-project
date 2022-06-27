import React, { Component } from 'react'
import './prevStyles/Description.css'
export default class Description extends Component {
  render() {
    const { value } = this.props
    return (
      <div>
        <h2>Description</h2>
        <p>{value}</p>
      </div>
    )
  }
}
