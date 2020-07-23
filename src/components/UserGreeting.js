import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    
    render() {
        // if(this.state.isLoggedIn)return <h1>Logged In</h1>
        // else return <h2>Not Logged In</h2>
        return this.state.isLoggedIn?
        (<h1>Logged In</h1>):
        (<h1>Not Logged In</h1>)
    }
}

export default UserGreeting
