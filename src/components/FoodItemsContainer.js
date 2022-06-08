import React from 'react'
import FoodItem from './FoodItem'
import "./FoodItemsContainer.css"

export default function FoodItemsContainer(props) {
    const { foodItems } = props;
    console.log(foodItems, "---");

    return (
        <>
          <div className="container">
            {
                foodItems.map(foodObj => {
                    return <FoodItem foodObj={foodObj} />
                })
            }
         </div>
        </>
    )
}
