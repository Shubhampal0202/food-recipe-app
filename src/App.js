import React, { useState } from "react"
import './App.css';
import Header from './components/Header';
import FoodItemsContainer from "./components/FoodItemsContainer";
import axios from "axios";
function App() {
  // App
  //   Header
  //       title
  //       Search
  //   FoodContainer (list of FoodItem)
  //   FoodItem
  const [foodItems, setFoodItems] = useState([]);

  const getFoodInfo = (searchValue)=>{
    const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: { query: `${searchValue}` },
        headers: {
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
          'X-RapidAPI-Key': 'd2fc17f472msh4c90723ed46589bp1405d5jsn63f6b09b3aa7'
        }
      };
  
      axios.request(options).then((response) => {
        const data = response.data;
        console.log(data);
        setFoodItems([...data]);
        console.log(foodItems);
      }).catch(function (error) {
        console.error(error);
      });
    
    }
  return (
   <>
     <Header getFoodInfo={getFoodInfo}/>
     <FoodItemsContainer foodItems={foodItems} />
   </>
  );
}

export default App;
