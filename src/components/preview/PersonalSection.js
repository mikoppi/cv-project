import React, { Component } from 'react'

export default class PersonalSection extends Component {
  render() {
    const { info } = this.props
    return (
      <div>
        <h2>Personal information</h2>
        <h3>Email</h3>
        <p>{info.email}</p>
        <h3>Phone number</h3>
        <p>{info.phoneNumber}</p>
      </div>
    )
  }
}
