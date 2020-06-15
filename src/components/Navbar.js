import React, { Component } from 'react'
import Search from "./Search"
import "../styles/NavBar.css"

export default class Navbar extends Component {
  render() {
    return(
      <div className="headline">
       <h3 onClick={ () => this.props.registerChoice("SIGNUP")}>Signup</h3>
       <h3 onClick={ () => this.props.registerChoice("LOGIN")}>Login</h3> 
       <h3 onClick={ () => this.props.registerChoice("LOGOUT")}>Logout </h3> 
       <h3 onClick={ () => this.props.registerChoice("HOME")}>Home </h3>
       <h3 onClick={ () => this.props.registerChoice("FAVORITES")}>Favorites</h3>
       <h3 onClick={ () => this.props.registerChoice("FORM")}>AddDrink</h3>  
      <Search searchDrinkName={this.props.searchDrinkName}/>
      </div>
    )
  }
}