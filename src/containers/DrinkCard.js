import React, { Component } from "react"
import CardFront from "../components/CardFront"

export default class DrinkCard extends Component {
  

  
  
  render() {
    console.log(this.props)
    return (
      <div className="drink-card">
       <ul> 
         {this.props.drink.name}
         <li>
         {this.props.drink.description}
         </li>
       </ul>
       </div>
    )
  }
}