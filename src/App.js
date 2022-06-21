import React, { Component } from 'react'
import CVForm from './components/CVForm'
import uniqid from "uniqid";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       personalInfo: {
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: ''
       },

       education: [{
        school: '',
        degree: '',
        to: '',
        from:''
       }],

       experience: [{
        company: '',
        title: '',
        description: '',
        to: '',
        from:''
       }]
    }

    this.handleChangePersonal=this.handleChangePersonal.bind(this);
  }
  //this is where you handle: adding, deleting, changing etc.
  handleChangePersonal(e) {
    const {name,value}=e.target;
    this.setState((prevState) => {
      let newPersonalInfo = {...prevState.personalInfo, [name]:value};
      return {...prevState, personalInfo: {...newPersonalInfo}};
    })
  }

  handleChangeEducation = (e,id) =>{
    const {name, value} = e.target;
    this.setState((prevState) => {
      let newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id){
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      })
      return { ...prevState, education: [...newEducation] }
    })
  }

  handleAddEducation = () => {
    this.setState((prevState) => {
      return {...prevState, education: [
        ...prevState.education,{
          id: uniqid(),
          name:"",
          degree:"",
          city:"",
          from:"",
          to:""
        }
      ]
      }
    })
  }



  //then you pass the handlers as props to the child components and so on...
  render() {
    return (
      <div className='App'>
        <h1>CV Creator</h1>
        <CVForm
        onChangePersonal={this.handleChangePersonal}
        onChangeEducation={this.handleChangeEducation}
        education= {this.state.education}
        onAddEducation= {this.handleAddEducation}
        />
      </div>
    )
  }
}
