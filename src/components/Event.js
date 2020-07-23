import React ,{Component} from 'react'

class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"hi"
        }
        this.click=this.click.bind(this)

    }
    
    click(){
        this.setState(
            {
                message:"hey"
            }
        )
        console.log(this)
    }
    render(){
        return (
            <div> 
{/* <button onClick={this.click.bind(this)}>{this.state.message}</button> */}
{/* <button onClick={()=>this.click()}>{this.state.message}</button> */}
<button onClick={this.click}>{this.state.message}</button>

            </div>
        )
    }
}

export default Event