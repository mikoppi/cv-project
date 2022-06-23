import React, { Component } from 'react'

export default class TitleSection extends Component {
  render() {
    const { name } = this.props
    return (
      <div className='titleSection'>
        <h1>{name.firstName}</h1>
        <h1>{name.lastName}</h1>

      </div>
    )
  }
}
