import React, {Component} from 'react'
import "../styles/MainContent.css"

export default class ContentPane extends Component {
  render() {
    console.log(this.props)
    let d = this.props.selectedDrink
    let deets = this.props.detail
    if (d === null || d === undefined) {
      return (
        <h1>Please Select a Drink</h1>
      )
    }
    return(
      <div className="contentPane">
    <h1>{d.name}</h1>
    <h3>Description: {d.description}</h3>
    <br></br>
    <h3>Instructions: {d.instructions}. </h3>
    <br></br>
    <h3>Mixologist: {d.source}</h3>
    <br></br>
    { deets.proportions && 
      <h3>Ingredients: 
        <ul>{deets.proportions.map(prop =>
          <li>
            {prop.amount}
            {prop.ingredient_name}
          </li>)}
        </ul>
      </h3>
    }
      </div>
    )
  }
}

