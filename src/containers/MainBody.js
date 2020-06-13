import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/SideBar"
import DrinkForm from "../components/DrinkForm"
import MyFavDrinks from './MyFavDrinks'
import ContentPane from './ContentPane'


const baseUrl = "http://localhost:3000/api/v1/cocktails"

export default class MainContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      isLoading: true,
      drinksArray: [],
      myFavDrinksArray: [],
      selectedDrink: null,  
    }
  }
  componentDidMount() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(drinks => this.setState({drinksArray: drinks}, () => console.log(drinks)))
  }
  
 selectDrink = (drink) => {
  if (this.state.selectedDrink !== null && drink.name === this.state.selectedDrink.name) {
    this.setState({
      selectedDrink: null
    })
  } else {
    this.setState({
      selectedDrink: drink
    })
  }

 }
  
  render() {
    return (
      <div className="main-container">
        <h1>Welcome you Boozehound</h1>
        <Navbar />
        <Sidebar drinksArray={this.state.drinksArray} selectDrink={this.selectDrink}/>
        <MyFavDrinks myDrinksArray={this.state.myFavDrinksArray}/>
        <ContentPane selectedDrink={this.state.selectedDrink}/>
        
        
      </div>
    )
  }
}