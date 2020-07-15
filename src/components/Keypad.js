import React, { Component } from 'react';

//const { defaultConfig } = require("sinon");

export default class Keypad extends Component {
    handleKey = () => {
        console.log('Entering password')
    }

    render(){
        return <input onKeyUp={this.handleKey} type="password"></input>
    }
    
}