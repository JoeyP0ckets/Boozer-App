import React, {Component} from 'react'
import "../styles/MainContent.css"
import DrinkForm from '../components/DrinkForm'
import Login from '../components/Login'
import Signup from '../components/Signup'
import MyFaveDrinks from '../containers/MyFavDrinks'


export default class ContentPane extends Component {
  render() {
    if (this.props.selectedContent === "FORM") {
      return (<DrinkForm 
        ingredientsArray={this.props.ingredientsArray}
        handleCreateDrink={this.props.handleCreateDrink}
        />) 
    } else if (this.props.selectedContent === "FAVORITES") {
      return (<MyFaveDrinks />)
    } else if (this.props.selectedContent === "LOGIN") {
      return (<Login handleLogin={this.props.handleLogin}/>)
    } else if (this.props.selectedContent === "SIGNUP") {
      return (<Signup />)
    } else if (this.props.selectedContent === "HOME") {
      //everything in this block will eventually be the RENDER of a DRINK_DETAIL component
      let d = this.props.selectedDrink
      // console.log(d)
      if (d === null || d === undefined) {
        return (
          <h1>Please Select a Drink</h1>
        )
      }
      return(
        <div className="contentPane">
          <h1>{d.name}</h1>
          <h3>Description: {d.description}</h3>
          <br/>
          <h3>Instructions: {d.instructions}. </h3>
          <br/>
          <h3>Mixologist{d.source}</h3>
          <br/>
        { d.proportions && 
          <h3>Ingredients: 
            <ul>{d.proportions.map(prop =>
              <li>
                {prop.amount} of {prop.ingredient_name}
              </li>)}
            </ul>
          </h3>
        }
        </div>
      )
    } else {
      return (<div>You selected {this.props.selectedContent} but I haven't implemented that yet</div>)
    }
  }
}

