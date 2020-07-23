import React,{Component} from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            messgae:"Welcome Visitor"
        }
    }
     
    changeMsg(){
        console.log('ko')
        this.setState({
            messgae:"Thanks for subscribing"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.messgae}</h1>
                <button onClick ={()=>this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}
export default Message