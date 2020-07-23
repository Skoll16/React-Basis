import React from 'react'

function PersonList({name}) {
    // key cannot be retrive as it cannot be passed as prop
    return (
        <div>
            <h1>I am {name.name} having password {name.pass}</h1>
        </div>
    )
}

export default PersonList
