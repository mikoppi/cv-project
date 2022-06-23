import React, { Component } from 'react'

export default class EducationInfo extends Component {
  render() {
    const { eduItem } = this.props
    return (
      <div>
        <h3>{eduItem.from} -- {eduItem.to}</h3>
        <h3>{eduItem.school}</h3>
        <p>{eduItem.degree}</p>
      </div>
    )
  }
}
