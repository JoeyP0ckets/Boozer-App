import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/SideBar"
// import DrinkForm from "../components/DrinkForm"
import MyFavDrinks from './MyFavDrinks'
import ContentPane from './ContentPane'
import FuzzySearch from 'fuzzy-search'
import "../styles/MainContent.css";

const cocktailsUrl = "http://localhost:3000/api/v1/cocktails/"
const ingredientsUrl = "http://localhost:3000/api/v1/ingredients" 

// const proportionsUrl = "http://localhost:3000/api/v1/proportions"
export default class MainContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      isLoading: true,
      drinksArray: [],
      myFavDrinksArray: [],
      selectedDrink: null,  
      filteredByName: [],
    }
  }
  componentDidMount() {
   this.getCocktailData()
   this.getIngredientData()
   
  }
  
 getCocktailData = () => {
  fetch(cocktailsUrl)
  .then(resp => resp.json())
  .then(drinks => 
    this.setState({
      drinksArray: drinks, 
      filteredByName: drinks
    })
    )
 }
 
 getIngredientData = () => {
   fetch(ingredientsUrl)
    .then(resp => resp.json())
    .then(ingredients => this.setState({ingredientsArray: ingredients}))
 }
 
 fetchDrinkDetailData = (id) => {
    const finalUrl = cocktailsUrl + id
        fetch(finalUrl)
        .then(resp => resp.json())
        .then(drinkDetail => this.setState({
          selectedDrink: drinkDetail
        }))
 }
 
 
  selectDrink = (drink) => {
    console.log(drink)
    console.log(this.state)
    if (this.state.selectedDrink !== null && this.state.selectedDrink.id !== null && drink.id === this.state.selectedDrink.id) {
    this.setState({
      selectedDrink: null,
      
    })
  } else {
  
    this.fetchDrinkDetailData(drink.id)
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
    console.log(this.state)
    return (
      <div className="main-container">
        <h1>Welcome you Boozehound</h1>
        <Navbar searchDrinkName={this.searchDrinkName}/>
        <div className="sideBar">
        <Sidebar 
        drinksArray={this.state.filteredByName} 
        selectDrink={this.selectDrink}
        
        />
        </div>
        {/* <MyFavDrinks myDrinksArray={this.state.myFavDrinksArray}/> */}
        <ContentPane 
        selectedDrink={this.state.selectedDrink}
        // detail={this.state.selectedDrinkDetail}
        />
        
        
      </div>
    )
  }
}