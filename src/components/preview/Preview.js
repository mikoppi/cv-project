import React, { Component } from 'react'
import TitleSection from './TitleSection'
import MainSection from './MainSection'
import PersonalSection from './PersonalSection'
import './prevStyles/Preview.css'

export default class Preview extends Component {
  render() {
    const { cvInfo } = this.props
    return (
      <div className='preview'>
        <TitleSection name={cvInfo.personalInfo}/>
        <div className='content'>
          <MainSection info={cvInfo}/>
          <PersonalSection info={cvInfo.personalInfo}/>
        </div>
        
      </div>
    )
  }
}
