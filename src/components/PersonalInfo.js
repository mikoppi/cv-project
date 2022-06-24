import React, { Component } from 'react';
import './formStyles/PersonalInfo.css'


export default class PersonalInfo extends Component {
  render() {
    const {onChangePersonal} = this.props;
    return (
      <div className='info'>
        <h2>Personal information</h2>
        <input type='text' name='firstName' placeholder='First name:' onChange={onChangePersonal}/>
        <input type='text' name='lastName' placeholder='Last name:' onChange={onChangePersonal}/>
        <input type='email' name='email' placeholder='Email:' onChange={onChangePersonal}/>
        <input type='text' name='phoneNumber' placeholder='Phone number:' onChange={onChangePersonal}/>
        <label htmlFor='description'>Description:</label>
        <textarea rows="4" cols="50" name="description" onChange={onChangePersonal}></textarea>
      </div>
    )
  }
}
