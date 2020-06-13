import React, {Component} from 'react'

export default class ContentPane extends Component {
  render() {
    console.log(this.props)
    let d = this.props.selectedDrink
    if (d === null || d === undefined) {
      return (
        <h1>Please Select a Drink</h1>
      )
    }
    return(
      <div className="content-pane">
        I'm the Content Pane
    <h1>{d.name}</h1>
    <h3>Description: {d.description}</h3>
    <br></br>
    <h3>Instructions: {d.instructions}. </h3>
    <br></br>
    <h3>Mixologist: {d.source}</h3>
      </div>
    )
  }
}