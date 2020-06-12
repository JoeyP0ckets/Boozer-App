import React, { Component } from "react"
import CardFront from "../components/CardFront"

export default class DrinkCard extends Component {
  

  
  
  render() {
    console.log(this.props)
    return (
      <div className="drink-card">
        I'm a Drink Card on Main Container
      <CardFront />
       </div>
    )
  }
}