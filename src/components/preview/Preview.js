import React, { Component } from 'react'
import TitleSection from './TitleSection'
import MainSection from './MainSection'
import PersonalSection from './PersonalSection'

export default class Preview extends Component {
  render() {
    const { cvInfo } = this.props
    return (
      <div className='preview'>
        <TitleSection name={cvInfo.personalInfo}/>
        <MainSection info={cvInfo}/>
        <PersonalSection/>
      </div>
    )
  }
}
