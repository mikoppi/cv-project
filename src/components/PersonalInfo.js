import React, { Component } from 'react';


export default class PersonalInfo extends Component {
  render() {
    const {onChangePersonal} = this.props;
    return (
      <div className='Info'>
        <h2>Personal information</h2>
        <input type='text' name='firstName' placeholder='First name:' onChange={onChangePersonal}/>
        <input type='text' name='lastName' placeholder='Last name:' onChange={onChangePersonal}/>
        <input type='email' name='email' placeholder='Email:' onChange={onChangePersonal}/>
        <input type='text' name='phoneNumber' placeholder='Phone number:' onChange={onChangePersonal}/>
      </div>
    )
  }
}
