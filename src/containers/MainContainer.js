import React, { Component } from 'react'
import Navbar from "../components/Navbar"

import DrinkForm from "../components/DrinkForm"
import MyFavDrinks from './MyFavDrinks'
import DrinkCollection from '../containers/DrinkCollection'

const baseUrl = "http://localhost:3000/api/v1/cocktails"

export default class MainContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      isLoading: true,
      drinksArray: [],
      myFavDrinksArray: [],

    }
  }
  componentDidMount() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(drinks => this.setState({drinksArray: drinks}, () => console.log(drinks)))
  }
  
 
  
  render() {
    return (
      <div className="main-container">
        I'm the main container
        <Navbar />
        <MyFavDrinks myDrinksArray={this.state.myFavDrinksArray}/>
        <DrinkForm />
        <DrinkCollection drinksArray={this.state.drinksArray}/>
        
      </div>
    )
  }
}