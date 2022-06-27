import React, { Component } from 'react'
import './prevStyles/ExperienceInfo.css'

export default class ExperienceInfo extends Component {
  render() {
    const { expItem } = this.props
    return (
      <div className='expItem'>
        <h3>{expItem.from} - {expItem.to}</h3>
        <h3>{expItem.company}</h3>
        <p>{expItem.title}</p>
        <p>{expItem.description}</p>
      </div>
    )
  }
}
