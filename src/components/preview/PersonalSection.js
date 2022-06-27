import React, { Component } from 'react'
import './prevStyles/PersonalSection.css'
import pic from "/home/mikoppi/repos/cv-project/src/components/preview/prevStyles/hidethepainharold.jpg"

export default class PersonalSection extends Component {
  render() {
    const { info } = this.props
    return (
      <div className='personal'>
        <img src={pic} alt='pic'></img>
        <h2>Personal information</h2>
        <h3>Email</h3>
        <p>{info.email}</p>
        <h3>Phone number</h3>
        <p>{info.phoneNumber}</p>
      </div>
    )
  }
}
