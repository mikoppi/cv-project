import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'


export default class CVForm extends Component {
    render() {
      const {onChangePersonal,
            onChangeEducation,
            onAddEducation,
            education
            }=this.props;
    return (
      <div>
        <PersonalInfo onChangePersonal={onChangePersonal}/>
        <Education 
            onChangeEducation={onChangeEducation}
            education = {education}
            onAdd = {onAddEducation}/>
        <Experience/>
      </div>
    )
  }
}
