// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user }
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({ user: updatedUser })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile" />)
    }

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="userName">Username: </label>
            <input 
              type="text" 
              name="userName" 
              className="search-bar"
              placeholder="Enter username: "
              onChange={ this.handleChange } 
              value={ this.state.user.userName } 
            />
          </div>
          <div>
            <label htmlFor="password">
              <t>Password:  </t> 
            </label>
            <input 
              type="password" 
              name="password"
              className="search-bar"
              placeholder="Enter password: " 
            />
          </div>
          <button>Log In</button>
        </form>
        <Link to="/">
          <h3 id="flashy">Return to Home</h3>
        </Link>
      </div>
    )
  }
}

export default LogIn