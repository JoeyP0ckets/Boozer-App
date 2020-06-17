import React, {Component} from "react"




const ozArray = [".25 oz", ".5 oz", ".75 oz", "1 oz", "1.25 oz", "1.5 oz", "2 oz", "2.25 oz", "1 dash", "2 dash", "3 dash", "4 dash"]

export default class DrinkForm extends Component {
  
  state = {
    name: "",
    description: "",
    instructions: "",
    source: "",
    proportion_attributes: [], 
    ingredient: "Select Ingredient", 
    amount: "Select Amount",
    
    
    
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
 
  
  
  
  handleProportionSubmit = () => {
    // debugger
      let proportionData = {
        amount: this.state.amount,
        ingredient: this.state.ingredient
      }
      let proportionArray = this.state.proportion_attributes.concat(proportionData)
      console.log(proportionArray)

      this.setState({
        proportion_attributes: proportionArray
      })
      this.resetProportion() 
   }    
 
  resetProportion = () => {
    this.setState({
      ingredient: "Select Ingredient",
      amount: "Select Amount"
    })
  }
  render() {
    // console.log(this.state)
    return(
      <div className="drink-create">
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
          <select 
             className="amount-select"
             value={this.state.amount} 
             onChange={event => {this.setState({amount: event.target.value})}}>
             <option value="Select Amount" disabled>Select Amount</option>
             {ozArray.map(oz => 
             <option>
                {oz}
             </option>)}
          </select>
            <select 
              className="ingredient-select"
              value={this.state.ingredient.name}
              onChange={ event => {this.setState({ingredient: event.target.value})}}>
            <option value="Select Ingredient" disabled>Select Ingredient</option> 
             {this.props.ingredientsArray.map(ingredient => 
             <option value={ingredient.id}>{ingredient.name}</option>)}
            </select>
            <br></br>
            <button onClick={this.handleProportionSubmit}>Add Proportion</button>
          
          <button onClick={() => this.props.handleCreateDrink(this.state)}>Mix Drink</button>
        
      </div>
    )
  }
}