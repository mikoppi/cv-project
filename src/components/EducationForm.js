import React, { Component } from 'react'


export default class EducationForm extends Component {
  render() {
    const {onChangeEducation,id} = this.props;
    return (
      <div>
        <input type="text" name="school" placeholder="School:" onChange={(e) => onChangeEducation(e,id)}/>
      </div>
    )
  }
}
