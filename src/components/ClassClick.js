import React,{Component} from 'react'
class ClassClick extends Component{
     Clicked(){
    console.log("Class Clicked")    
    }
    render(){
        return(
            <div>
<button onClick={this.Clicked}>Click</button>
            </div>
        )
    }
}
export default ClassClick