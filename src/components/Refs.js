import React, { Component } from 'react'

 class Refs extends Component {
     constructor(props) {
         super(props)
     
         this.ref=React.createRef()

     }
     componentDidMount(){
         this.ref.current.focus()
     }
     click=()=>{
         alert(this.ref.current.value)
     }
    render() {
        return (
            <div>
                <input type="text" ref={this.ref}/>
                <button type="button" onClick={this.click}>CLick</button>
            </div>
        )
    }
}

export default Refs
