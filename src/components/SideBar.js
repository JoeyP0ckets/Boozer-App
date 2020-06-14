import React, {Component} from 'react'
import "../styles/LeftPanel.css"



export default class SideBar extends Component {
  
  
  
  render() {
    return(
      <div className="content">
  
       <ul>
          {this.props.drinksArray.map(drink => 
            <li onClick={() => this.props.selectDrink(drink)}>
              {drink.name}
            </li>)}
       </ul>
      </div>
    )
  }
}