import React, {Component} from "react"




const ozArray = [".25 oz", ".5 oz", ".75 oz", "1 oz", "1.25 oz", "1.5 oz", "2 oz", "2.25 oz", "1 dash", "2 dash", "3 dash", "4 dash"]
export default class DrinkForm extends Component {
  
  state = {
    name: "",
    description: "",
    instructions: "",
    source: "",
    ingredient_name: "",
    proportions: [],
    submittedData: [],
    amount: "Select Amount"
  }
  
  handleNameChange = event => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = event => {
    console.log(event.target.value)
    this.setState({
      description: event.target.value
    })
  }

  handleInstructionsChange = event => {
    console.log(event.target.value)
    this.setState({
      instructions: event.target.value
    })
  }

  handleSourceChange = event => {
    console.log(event.target.value)
    this.setState({
      source: event.target.value
    })
  }

  handleIngredientsChange = event => {
    console.log(event.target.value)
    this.setState({
      ingredient_name: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    let formData = { 
      name: this.state.name,
      description: this.state.description,
      instructions: this.state.instructions,
      source: this.state.source, 
    }
    let dataArray = this.state.submittedData.concat(formData)
    console.log(dataArray)

    this.setState({
      submittedData: dataArray
    })
  }
  
  render() {
    console.log(this.state)
    return(
      <div className="drink-create">
        <form className="drink-form" onSubmit={event => this.handleSubmit(event)}>
          <h1>Please Enter A New Libation</h1>
          <input 
            type="text"
            placeholder="Name" 
            onChange={ event => this.handleNameChange(event)} 
            value={this.state.name}>
          </input>
          <br></br>
          <input 
            type="text" 
            placeholder="Description"
            onChange={ event => this.handleDescriptionChange(event)} 
            value={this.state.description}>
          </input>
          <br></br>
          <input 
            type="text" 
            placeholder="Instructions"
            onChange={ event => this.handleInstructionsChange(event)}
            value={this.state.instructions}>
          </input>
          <br></br>
          <input 
            type="text" 
            placeholder="Source"
            onChange={ event => this.handleSourceChange(event)} 
            value={this.state.source}>
          </input>
          <br></br>
          <input 
            type="text" 
            placeholder="Ingredients"
            onChange={ event => this.handleIngredientsChange(event)} 
            value={this.state.ingredient_name}>
          </input>
          <br></br>
          Amount: <select 
            className="amount-select"
            value={this.state.amount} 
            onChange={event => {this.setState({amount: event.target.value})}}>
            <option value="Select Amount" disabled>Select</option>
            {ozArray.map(oz => <option>
                {oz}
              </option>)}
          </select>
          <br></br>
          <button>Mix Drink</button>
        </form>
      </div>
    )
  }
}