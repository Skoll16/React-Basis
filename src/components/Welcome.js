import React,{Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Skoll Class Component {this.props.name} a.k.a {this.props.fname} </h1>
    }
}

export default Welcome