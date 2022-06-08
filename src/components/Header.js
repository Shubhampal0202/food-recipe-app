import React, { useState } from 'react'
import Search from './Search';
import "./Header.css"

function Header(props) {
    const {getFoodInfo} = props;
    const [searchValue, setsearchValue] = useState("");

    const handleClick = () => {
      getFoodInfo(searchValue);
      setsearchValue("");
    }

    // Company Logo
    // Navbar
    // SearchBar
      
    return (
      <div className="header">
          <h1>Food Recipe App</h1>
         <Search handleClick = {handleClick} searchValue = {searchValue} setsearchValue = {setsearchValue} />
      </div>
    )
}

export default Header