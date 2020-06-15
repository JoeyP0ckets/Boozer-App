import React, { Component } from 'react'

export default class Login extends Component {
  
  state = {
    username: "",
    password_digest: "",
    submittedData: []
  }
  handleUsernameChange = event => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    console.log(event.target.value)
    this.setState({
      password_digest: event.target.value
    })
  }

  handleSubmit = event => { 
    event.preventDefault()
    let formData = {
      username: this.state.username,
      password_digest: this.state.password_digest
    }
    let dataArray = this.state.submittedData.concat(formData)
    console.log(dataArray)
    this.setState({
      submittedData: dataArray
    })
  }
  

  render() {
    return(
      <div className="login-container">
        <h3>Login</h3>
        <form className="login-form" onSubmit={ event => this.handleSubmit(event)}>
          <input 
            type="text"
            placeholder="Username"
            onChange={ event => this.handleUsernameChange(event)} 
            value={this.state.username}>         
          </input>
          <br></br>
          <input
            type="text"
            placeholder="Password"
            onChange={ event => this.handlePasswordChange(event)}
            value={this.state.password_digest}>
          </input>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
  