import React, { Component } from 'react'

export default class Login extends Component {
  
  initialState = {
    username: "",
    password: "",
  }

    state = this.initialState
  
  handleInputChange = event => {
    console.log(event.target.value)
    if(event.target.name === 'username') {
      this.setState({ username: event.target.value })
    } else if (event.target.name === 'password') {
      this.setState({ password: event.target.value})
    }
   
  }


  handleSubmit = event => { 
    event.preventDefault()
    const userObj = {
      username: this.state.username,
      password: this.state.password
    }
    
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: userObj})
    }).then(res => res.json())
    .then(token => {
      console.log(token)
      this.props.handleLogin(token.token)
    })
    .catch(error => console.log(error))
}
  render() {
    return(
      <div className="login-container">
        <h3>Login</h3>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Username"
            onChange={this.handleInputChange} 
            name="username"
            value={this.state.username}>         
          </input>
          <br></br>
          <input
            type="text"
            placeholder="Password"
            onChange={this.handleInputChange}
            name="password"
            value={this.state.password}>
          </input>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
  