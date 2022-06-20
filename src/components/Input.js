import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state={value:''}

        this.updateValue = this.updateValue.bind(this);
    }
    
    
    updateValue(e) {
        this.setState({ value: e.target.value})
    }
    render() {
        console.log(this.state)
        return (
        <div>
            <input type='text' placeholder={this.props.title} onChange={this.updateValue}></input>
        </div>
        )
    }
}
