import React, { Component } from 'react'
import './formStyles/EducationForm.css'


export default class EducationForm extends Component {
  render() {
    const {onChangeEducation,id, onDelete} = this.props;
    return (
      <div className='educationForm'>
        <input type="text" name="school" placeholder="School:" onChange={(e) => onChangeEducation(e,id)}/>
        <input type="text" name="degree" placeholder="Degree:" onChange={(e) => onChangeEducation(e,id)}/>
       
        <input id='from' type="text" name="from" placeholder="From:" onChange={(e) => onChangeEducation(e,id)}/>
        
        <input type="text" name="to" placeholder="To:" onChange={(e) => onChangeEducation(e,id)}/>
        <button onClick={(e) =>onDelete(e,id)}>Delete</button>
      </div>
    )
  }
}
