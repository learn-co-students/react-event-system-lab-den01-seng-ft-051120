// Code Keypad Component Here
import React from 'react'

export default function Keypad(){

    const handleKey = () => {
        console.log('Entering password...')
    }

    return(
        <input onKeyUp={handleKey} type='password' />
    )
}