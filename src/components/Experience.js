import React, { Component } from 'react'
import ExperienceForm from './ExperienceForm'

export default class Experience extends Component {
  render() {

    const {
        onChangeExperience,
        experience,
        onAdd,
        onDelete
      } = this.props;

    const experienceItems = experience.map((experienceItem) => {
        return (<ExperienceForm
          onChangeExperience={onChangeExperience}
          id={experienceItem.id}
          key={experienceItem.id}
          onDelete={onDelete}/>)
      })


    return (
        <div>
            <h2>Work experience:</h2>
            {experienceItems}
            <button onClick={onAdd}>Add</button>
        </div>
    )
  }
}
