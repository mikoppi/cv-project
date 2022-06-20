import React, { Component } from 'react'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Experience from './components/Experience'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>CV Creator</h1>
        <PersonalInfo/>
        <Education/>
        <Experience/>
      </div>
    )
  }
}
