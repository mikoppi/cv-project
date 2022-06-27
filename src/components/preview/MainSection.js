import React, { Component } from 'react'
import Description from './Description'
import EducationInfo from './EducationInfo'
import ExperienceInfo from './ExperienceInfo'
import './prevStyles/MainSection.css'

export default class MainSection extends Component {
  render() {
    const { info } = this.props
    return (
      <div className='mainSection'>
        <Description className='desc' value={info.personalInfo.description}/>
        <h2>Education</h2>
        {info.education.length!==0 && info.education.map(eduItem => {
            return <EducationInfo key={eduItem.id} eduItem={eduItem}/>
        })}
        <h2>Work experience</h2>
        {info.experience.length!==0 && info.experience.map(expItem => {
            return <ExperienceInfo key={expItem.id} expItem={expItem}/>
        })}
    

      </div>
    )
  }
}
