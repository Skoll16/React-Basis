import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             select:'react'
        }
    }
    handleChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleComment=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    topicChange=(event)=>{
        this.setState({
            select:event.target.value
        })
    }
    submit=event=>{
alert(`${this.state.username} ${this.state.comments} ${this.state.select}` )
// to avoid vanish of submit data we use preventDeafult
  event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div>
                <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                </div>
                <div>
                <label>Select</label>
                   <select value={this.state.select} onChange={this.topicChange}>
                       <option value="react">React</option>
                       <option value="angular">angular</option>
                       <option value="vue">vue</option>
                   </select>


                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
