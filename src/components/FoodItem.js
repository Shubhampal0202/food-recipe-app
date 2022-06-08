import React from 'react'
import "./FoodItem.css";

export default function FoodItem(props) {
  const {foodObj} = props;

  return (
    <> 
  
        {
        <div className="card">
                <h1>{foodObj.title}</h1>
                <hr />
                <div className="ingredients">
                    <h2>INGREDIENTS</h2>
                    <ul>
                        {
                            foodObj.ingredients.split("|").map((ingredient, index)=>(
                                <li key={index}>{ingredient}j</li>
                            ))
                        }
                    </ul> 
                </div>
                <div className="servings">
                    <h2>SERVINGS</h2>
                    <p>{foodObj.servings}</p>
                </div>
                <div className="instructions">
                    <h2>INSTRUCTIONS</h2>
                    <ul>
                        {
                            foodObj.instructions.split(". ").map((instruction, index)=>(
                                <li key={index}>{instruction}j</li>
                            ))
                        }
                    </ul> 
                </div>
        </div> 
             
         }  
   
   </>
  )
}
