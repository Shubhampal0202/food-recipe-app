import React from 'react'
import "./Search.css"

export default function Search(props) {
    const {handleClick, searchValue, setsearchValue} = props;
  return (
    <div className="search">
        <input type="text" placeholder='Enter Dish' value={searchValue} onChange = {(e)=>setsearchValue(e.target.value)} />
        <input type="button" value="search"  onClick={handleClick} />
   </div>
  )
}
