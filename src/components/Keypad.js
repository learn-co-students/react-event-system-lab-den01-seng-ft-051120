// Code Keypad Component Here
import React from 'react'

export default class keypad extends React.Component {

    handleKeyUp = (event) => {
        console.log("Entering password...")
    }

    render() {
        return(
            <input onKeyUp={this.handleKeyUp} type="password"/>
        )
    }
}