import React, { Component } from 'react'
import EducationForm from './EducationForm';

export default class Education extends Component {
  render() {
    const {
        onChangeEducation,
        education,
        onAdd,
        onDelete
      } = this.props;

    const educationItems = education.map((educationItem) => {
      return (<EducationForm
        onChangeEducation={onChangeEducation}
        id={educationItem.id}
        key={educationItem.id}
        onDelete={onDelete}/>)
    })
    return (
      <div>
        <h2>Education</h2>
        {educationItems}
        <button onClick={onAdd}>Add</button>
      </div>
    )
  }
}
