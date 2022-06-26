import React, { Component } from 'react'
import CVForm from './components/CVForm'
import uniqid from "uniqid";
import Preview from './components/preview/Preview';
import './styles/App.css'
import Header from './Header';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       personalInfo: {
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: '',
        description: ''
       },

       education: [{
        id: uniqid(),
        school: '',
        degree: '',
        to: '',
        from:''
       }],

       experience: [{
        id: uniqid(),
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
          school:"",
          degree:"",
          from:"",
          to:""
        }
      ]
    }
  })
}

handleDeleteEducation = (e,id) => {
  console.log(id);
  this.setState((prevState) => {
    let remainingEducation = prevState.education.filter(item => item.id!==id)
    return { ...prevState, education: [...remainingEducation] }
  })
}


handleChangeExperience = (e,id) =>{
  const {name, value} = e.target;
  this.setState((prevState) => {
    let newExperience = prevState.experience.map((experienceItem) => {
      if (experienceItem.id === id){
        return { ...experienceItem, [name]: value };
      }
      return experienceItem;
    })
    return { ...prevState, experience: [...newExperience] }
  })
}


handleAddExperience = () => {
  this.setState((prevState) => {
    return {...prevState, experience: [
      ...prevState.experience,{
        id: uniqid(),
        company:"",
        title:"",
        description:"",
        from:"",
        to:""
      }
    ]
  }
})
}

handleDeleteExperience = (e,id) => {
  console.log(id);
  this.setState((prevState) => {
    let remainingExperience = prevState.experience.filter(item => item.id!==id)
    return { ...prevState, experience: [...remainingExperience] }
  })
}


//then you pass the handlers as props to the child components and so on...
  render() {
    return (
      <div className='main'>
        <Header/>
        <div className='app'>
          <CVForm
          onChangePersonal={this.handleChangePersonal}
          education= {this.state.education}
          onChangeEducation={this.handleChangeEducation}
          onAddEducation= {this.handleAddEducation}
          onDeleteEducation= {this.handleDeleteEducation}
          experience= {this.state.experience}
          onChangeExperience= {this.handleChangeExperience}
          onAddExperience= {this.handleAddExperience}
          onDeleteExperience={this.handleDeleteExperience}
          
          />
          <Preview cvInfo={this.state}/>
        </div>
      </div>
    )
  }
}
