import React, { Component } from "react"
import CardFront from "../components/CardFront"

export default class DrinkCard extends Component {
  

  
  
  render() {
    console.log(this.props)
    return (
      <div className="drink-card">
        
      {this.props.drink.name}
       </div>
    )
  }
}