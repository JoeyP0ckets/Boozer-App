import React, {Component} from 'react'




export default class SideBar extends Component {
  
  
  
  render() {
    console.log(this.props)
    return(
      <div className="side-bar">
        I'm the SideBar on the Main body
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