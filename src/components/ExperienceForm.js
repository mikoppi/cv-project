import React, { Component } from 'react'
import './formStyles/ExperienceForm.css'

export default class ExperienceForm extends Component {
  render() {

    const { onChangeExperience, id, onDelete } = this.props


    return (
        <div className='experienceForm'>
        <input type="text" name="company" placeholder="Company:" onChange={(e) => onChangeExperience(e,id)}/>
        <input type="text" name="title" placeholder="Title:" onChange={(e) => onChangeExperience(e,id)}/>
        <label htmlFor='description'>Description:</label>
        <textarea rows="4" cols="50" name="description" onChange={(e) => onChangeExperience(e,id)}></textarea>
        <label htmlFor='from'>From:</label>
        <input id='from' type="date" name="from" placeholder="From:" onChange={(e) => onChangeExperience(e,id)}/>
        <label htmlFor='to'>To:</label>
        <input type="date" name="to" placeholder="To:" onChange={(e) => onChangeExperience(e,id)}/>
        <button onClick={(e) =>onDelete(e,id)}>Delete</button>
      </div>
      )
    }
}
        
