import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'
import './formStyles/CVForm.css'


export default class CVForm extends Component {
    render() {
      const {onChangePersonal,
            onChangeEducation,
            onAddEducation,
            onDeleteEducation,
            education,
            onChangeExperience,
            experience,
            onAddExperience,
            onDeleteExperience
            }=this.props;
    return (
      <div className='cvform'>
        <PersonalInfo onChangePersonal={onChangePersonal}/>
        <Education 
            onChangeEducation={onChangeEducation}
            education = {education}
            onAdd = {onAddEducation}
            onDelete={onDeleteEducation}/>
        <Experience
            onChangeExperience={onChangeExperience}
            experience = {experience}
            onAdd = {onAddExperience}
            onDelete={onDeleteExperience}/>
        <button>Reset</button>
      </div>
    )
  }
}
