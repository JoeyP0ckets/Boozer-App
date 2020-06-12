import React, { Component } from 'react'
import Search from "./Search"
export default class Navbar extends Component {
  render() {
    return(
      <div className="nav-bar">
        I'm the Navbar on Main Container
      <Search />
      </div>
    )
  }
}