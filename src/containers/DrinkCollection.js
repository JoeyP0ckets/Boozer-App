import React, {Component} from 'react'
import DrinkCard from './DrinkCard'

export default class DrinkCollection extends Component {
  
  // generateDrinkCards = () => {
  //   return this.props.drinksArray.map(drink => <DrinkCard
  //     drink={drink}
  //   />)
  // }
  
  
  render() {
    console.log(this.props)
    return(
      <div>
        I'm the DrinkCollection on Main Container
      {/* {this.generateDrinkCards} */}
      <DrinkCard />
      </div>
    )
  }
}