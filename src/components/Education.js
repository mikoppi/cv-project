import React, { Component } from 'react'
import EducationForm from './EducationForm';
export default class Education extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        formVisible: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ formVisible: true })
    }


  render() {
    const formVisible=this.state.formVisible;
    let show=null;
    if (!formVisible) {
        show = <button onClick={this.handleClick}>Add</button>
    }
    else {
        show = <EducationForm/>
    }
    return (
      <div>
        <h2>Education</h2>
        {show}
      </div>
    )
  }
}


