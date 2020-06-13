import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/SideBar"
// import DrinkForm from "../components/DrinkForm"
import MyFavDrinks from './MyFavDrinks'
import ContentPane from './ContentPane'
import FuzzySearch from 'fuzzy-search'

const baseUrl = "http://localhost:3000/api/v1/cocktails"

export default class MainContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      isLoading: true,
      drinksArray: [],
      myFavDrinksArray: [],
      selectedDrink: null,  
      filteredByName: []
    }
  }
  componentDidMount() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(drinks => 
      this.setState({
        drinksArray: drinks, 
        filteredByName: drinks
      })
      )
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

 searchDrinkName = (event) => {
  let searcher = new FuzzySearch(this.state.drinksArray, ['name'])
  let result = searcher.search(event.target.value)
  this.setState({
    filteredByName: result
  })
}
  
  render() {
    return (
      <div className="main-container">
        <h1>Welcome you Boozehound</h1>
        <Navbar searchDrinkName={this.searchDrinkName}/>
        <Sidebar 
        drinksArray={this.state.filteredByName} 
        selectDrink={this.selectDrink}
        
        />
        <MyFavDrinks myDrinksArray={this.state.myFavDrinksArray}/>
        <ContentPane selectedDrink={this.state.selectedDrink}/>
        
        
      </div>
    )
  }
}