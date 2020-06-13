import React, { Component } from 'react'
import Search from "./Search"


export default class Navbar extends Component {
  render() {
    return(
      <div className="nav-bar">
       <h3>Login Logout MyFavDrinks AddDrink</h3>  
      <Search searchDrinkName={this.props.searchDrinkName}/>
      </div>
    )
  }
}