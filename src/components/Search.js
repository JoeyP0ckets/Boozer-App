import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          placeholder="Search Drinks"
          onChange={(event) => props.searchDrinkName(event)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search