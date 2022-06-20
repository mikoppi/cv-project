import React, { Component } from 'react';
import Input from './Input';

export default class PersonalInfo extends Component {
  render() {
    return (
      <div className='Info'>
        <h2>Personal information</h2>
        <Input title='First name:'/>
        <Input title='Last name:'/>
        <Input title='Email:'/>
        <Input title='Phone number:'/>
      </div>
    )
  }
}
